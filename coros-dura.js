/* Daily GPX preparation. No device credentials or background sync required. */
(function (root) {
  function xml(value) {
    return String(value ?? '').replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f]/g, '').replace(/[&<>"']/g, c => ({'&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&apos;'}[c]));
  }
  function compact(parts, limit) {
    return parts.filter(value => value !== null && value !== undefined && String(value).trim())
      .map(value => String(value).replace(/\s+/g, ' ').trim()).join(' | ').slice(0, limit);
  }
  function foodDetail(entry) {
    return compact([entry.resupplyOptions1, entry.resupplyHours1,
      Number(entry.resupplyDistance1) > 0 ? `${entry.resupplyDistance1} mi off route` : '', entry.resupplyAddress1,
      entry.resupplyOptions2, entry.resupplyHours2, entry.resupplyAddress2, entry.description, entry.notes], 180);
  }
  function build({ day, points, cumulative, stops, entries, routeName }) {
    const start = Number(day.startMile), end = Number(day.endMile);
    if (day.type === 'Rest' || !(end > start)) throw new Error('Choose a riding day with a positive distance.');
    if (points.length < 2 || cumulative.length !== points.length) throw new Error('Load a GPX route before preparing a DURA day.');
    const total = cumulative[cumulative.length - 1];
    if (start < 0 || end > total + 0.1 || start >= total) throw new Error('This day extends beyond the GPX route. Adjust the daily distances first.');
    const finish = Math.min(end, total);
    if ((finish - start) * 1.609344 >= 2000) throw new Error('Split this day into routes shorter than 2,000 km.');
    if (points.some(p => !Number.isFinite(p.lat) || !Number.isFinite(p.lon) || Math.abs(p.lat) > 90 || Math.abs(p.lon) > 180)) throw new Error('The GPX contains invalid coordinates.');
    function at(mile) {
      let lo = 0, hi = cumulative.length - 1;
      while (lo < hi) { const mid = (lo + hi) >> 1; if (cumulative[mid] < mile) lo = mid + 1; else hi = mid; }
      if (lo === 0) return points[0];
      const a = points[lo - 1], b = points[lo];
      const ratio = (mile - cumulative[lo - 1]) / (cumulative[lo] - cumulative[lo - 1] || 1);
      let delta = b.lon - a.lon;
      if (delta > 180) delta -= 360;
      if (delta < -180) delta += 360;
      return { lat: a.lat + (b.lat - a.lat) * ratio, lon: ((a.lon + delta * ratio + 540) % 360) - 180,
        ele: Number.isFinite(a.ele) && Number.isFinite(b.ele) ? a.ele + (b.ele - a.ele) * ratio : null };
    }
    const track = [at(start), ...points.filter((p, i) => cumulative[i] > start && cumulative[i] < finish), at(finish)];
    const cues = [];
    let skipped = 0;
    function add(mile, label, detail) {
      if (mile === '' || mile === null || mile === undefined || !Number.isFinite(Number(mile))) { skipped++; return; }
      mile = Number(mile);
      if (mile <= start || mile > finish) return;
      const name = String(label).replace(/\s+/g, ' ').trim().slice(0, 48);
      if (!cues.some(c => Math.abs(c.mile - mile) < 0.001 && c.name === name)) cues.push({ mile, name, detail: String(detail || '').slice(0, 180), point: at(mile) });
    }
    stops.forEach(stop => add(stop.mile, `Resupply: ${stop.name || 'Stop'}`, 'Route checkpoint; services may be off route. Check the full plan.'));
    const types = { water: 'Water', 'water-uncertain': 'Water? unverified', food: 'Food' };
    entries.filter(e => types[e.type]).forEach(e => add(e.mile, `${types[e.type]}: ${e.title || e.resupplyOptions1 || 'Stop'}`, e.type === 'food' ? foodDetail(e) : e.description || e.notes));
    add(finish, `End: ${day.town || 'Day ' + day.id}`, 'Planned day endpoint; confirm accommodation in the full plan.');
    cues.sort((a, b) => a.mile - b.mile);
    if (cues.length >= 200) throw new Error('This day has 200 or more checkpoints. Reduce stops or split the day before exporting.');
    function location(p) { return `lat="${p.lat.toFixed(6)}" lon="${p.lon.toFixed(6)}"`; }
    const name = `${routeName} D${day.id}${day.date ? ' ' + day.date : ''}`.slice(0, 80);
    const summary = compact([`Day ${day.id}`, day.date, day.town,
      day.notes, day.resupplyNotes, day.shoppingList ? `Food list: ${day.shoppingList}` : '',
      Number(day.calorieTarget) > 0 ? `Target: ${day.calorieTarget} kcal` : '',
      foodDetail(day)], 600);
    const gpx = `<?xml version="1.0" encoding="UTF-8"?><gpx version="1.1" creator="Bikepack Planner" xmlns="http://www.topografix.com/GPX/1/1"><metadata><name>${xml(name)}</name><desc>${xml(summary)}</desc></metadata>`
      + cues.map(c => `<wpt ${location(c.point)}><name>${xml(c.name)}</name><desc>${xml(c.detail)}</desc></wpt>`).join('')
      + `<trk><name>${xml(name)}</name><desc>${xml(summary)}</desc><trkseg>`
      + track.map(p => `<trkpt ${location(p)}>${Number.isFinite(p.ele) ? `<ele>${p.ele.toFixed(1)}</ele>` : ''}</trkpt>`).join('')
      + '</trkseg></trk></gpx>';
    const bytes = new TextEncoder().encode(gpx).length;
    if (bytes >= 100000000) throw new Error('This daily route exceeds 100 MB. Split it into smaller days.');
    return { gpx, bytes, cues, skipped, pointCount: track.length, filename: `${String(routeName).replace(/[^a-z0-9]+/gi, '-').slice(0, 50)}-D${day.id}.gpx` };
  }
  root.CorosDura = { build };
})(globalThis);
