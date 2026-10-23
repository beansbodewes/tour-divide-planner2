const assert = require('node:assert/strict');
require('../coros-dura.js');
const build = globalThis.CorosDura.build;
const input = { day: { id: 2, startMile: 0.5, endMile: 2.5, town: 'Camp & Creek', type: 'Ride' },
  points: [0, 1, 2, 3].map(x => ({ lat: 40 + x, lon: -110 + x, ele: 100 + x * 10 })),
  cumulative: [0, 1, 2, 3], routeName: 'Test <route>', stops: [{ mile: 1, name: 'A & B' }],
  entries: [{ type: 'water', mile: '', title: 'Unknown' }, { type: 'food', mile: 2, title: 'Cafe' }, {type: 'water', mile: 3, title: 'Tomorrow'}] };
const result = build(input);
assert.equal(result.pointCount, 4);
assert.equal(result.skipped, 1);
assert.deepEqual(result.cues.map(c => c.mile), [1, 2, 2.5]);
assert.match(result.gpx, /lat="40.500000" lon="-109.500000"><ele>105.0/);
assert.match(result.gpx, /lat="42.500000" lon="-107.500000"><ele>125.0/);
assert.match(result.gpx, /A &amp; B/);
assert.match(result.gpx, /Test &lt;route&gt;/);
assert.doesNotMatch(result.gpx, /Tomorrow|Unknown/);
assert.equal(result.bytes, Buffer.byteLength(result.gpx));
assert.throws(() => build({...input, day: {...input.day, type: 'Rest'}}), /riding day/);
assert.throws(() => build({...input, day: {...input.day, endMile: 10}}), /beyond/);
assert.throws(() => build({...input, points: []}), /Load a GPX/);
assert.throws(() => build({...input, points: input.points.map(p => ({...p, lat: NaN}))}), /invalid coordinates/);
assert.throws(() => build({...input, stops: Array.from({length: 200}, (_, i) => ({mile: 1, name: 'Stop ' + i}))}), /200 or more/);
const adjacent = build({...input, day: {...input.day, startMile: 2.5, endMile: 3}});
assert.equal(adjacent.cues[0].mile, 3);
assert.match(adjacent.gpx, /lat="42.500000" lon="-107.500000"><ele>125.0/);
const dateline = build({...input, day: {...input.day, startMile: 0.5, endMile: 1}, points: [{lat: 0, lon: 179}, {lat: 0, lon: -179}], cumulative: [0, 1], stops: [], entries: []});
assert.match(dateline.gpx, /lon="-180.000000"/);
console.log('Daily GPX checks passed: boundaries, elevation, escaping, rest days, invalid/missing data, checkpoint cap, and antimeridian.');

const enriched = build({...input, day: {...input.day, notes: 'Gate closes at 8 & bring lights', shoppingList: 'Rice', calorieTarget: 4000},
  entries: [{type: 'food', mile: 2, title: 'Cafe', resupplyOptions1: 'Market', resupplyHours1: '8–18', resupplyDistance1: 0.2, resupplyAddress1: 'Main St', notes: 'Cash only'}]});
assert.match(enriched.gpx, /Gate closes at 8 &amp; bring lights/);
assert.match(enriched.gpx, /Food list: Rice/);
assert.match(enriched.gpx, /Target: 4000 kcal/);
assert.match(enriched.cues.find(c => c.name === 'Food: Cafe').detail, /Market.*8–18.*0.2 mi off route.*Main St.*Cash only/);
const longNotes = build({...input, day: {...input.day, notes: 'x'.repeat(20000)}});
assert.ok(longNotes.bytes < result.bytes + 1400, 'Long notes must stay compact');
console.log('Existing day summary and food information included; long notes remain bounded.');
const full = build({...input, fullRoute: true, days: [input.day, {...input.day, id:3, type:'Rest'}]});
assert.equal(full.pointCount, input.points.length);
assert.equal(full.filename, 'Test-route--full-route.gpx');
assert.match(full.gpx, /Full route/);
assert.match(full.gpx, /lat="40.000000" lon="-110.000000"/);
assert.match(full.gpx, /lat="43.000000" lon="-107.000000"/);
assert.ok(full.cues.some(c=>c.name==='D2 end: Camp & Creek'));
assert.ok(full.cues.some(c=>c.name==='Route finish' && c.mile===3));
assert.ok(!full.cues.some(c=>c.name.startsWith('D3')));
assert.ok(full.cues.some(c=>c.name==='Water: Tomorrow'));
const longFull = build({...input, fullRoute:true, cumulative:[0,500,1000,1500], stops:[], entries:[]});
assert.match(longFull.warnings.join(' '), /2,000 km/);
assert.equal(longFull.pointCount,4);
const manyFull = build({...input, fullRoute:true, stops:Array.from({length:201},(_,i)=>({mile:1,name:`Stop ${i}`}))});
assert.equal(manyFull.cues.filter(c=>c.name.startsWith('Resupply')).length,201);
assert.match(manyFull.warnings.join(' '), /200 checkpoints/);
console.log('Full-route checks passed: complete track, daily endpoints, rest-day exclusion, all stops retained, long-route warnings.');
