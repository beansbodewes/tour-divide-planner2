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
