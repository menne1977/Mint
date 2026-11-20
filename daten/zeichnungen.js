// Zeichenwerkzeuge für die Schaubilder. Die Zeichnungen selbst stehen in zeichnungen-*.js.
// Jede Zeichnung: ZEICHNUNGEN['bio6-01'] = '<svg …>'. Die App nimmt sie statt des Emoji-Bildes.
(function () {
  window.ZEICHNUNGEN = window.ZEICHNUNGEN || {};
  var Z = window.ZH = {};
  Z.S = function (bg, inner) {
    return '<svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg" role="img" font-family="system-ui,-apple-system,Segoe UI,Roboto,sans-serif">' +
      '<rect width="400" height="220" rx="14" fill="' + bg + '"/>' + inner + '</svg>';
  };
  // Text: T(x, y, text, {s: Größe, a: Ausrichtung, c: Farbe, b: fett})
  Z.T = function (x, y, s, o) {
    o = o || {};
    return '<text x="' + x + '" y="' + y + '" font-size="' + (o.s || 11) + '" text-anchor="' + (o.a || 'middle') + '" fill="' + (o.c || '#1d2b24') + '"' + (o.b ? ' font-weight="700"' : '') + '>' + s + '</text>';
  };
  // Beschriftung mit Linie: vom Bauteil (x1,y1) zur Beschriftung (x2,y2)
  Z.L = function (x1, y1, x2, y2, s, a) {
    a = a || (x2 < x1 ? 'end' : 'start');
    return '<line x1="' + x1 + '" y1="' + y1 + '" x2="' + x2 + '" y2="' + y2 + '" stroke="#555" stroke-width="1"/>' +
      '<circle cx="' + x1 + '" cy="' + y1 + '" r="1.8" fill="#555"/>' +
      Z.T(x2 + (a === 'end' ? -3 : 3), y2 + 4, s, { a: a });
  };
  // Pfeil
  Z.A = function (x1, y1, x2, y2, c, w) {
    c = c || '#444'; w = w || 2;
    var a = Math.atan2(y2 - y1, x2 - x1), h = 7;
    var p1 = [(x2 - h * Math.cos(a - 0.45)).toFixed(1), (y2 - h * Math.sin(a - 0.45)).toFixed(1)];
    var p2 = [(x2 - h * Math.cos(a + 0.45)).toFixed(1), (y2 - h * Math.sin(a + 0.45)).toFixed(1)];
    return '<line x1="' + x1 + '" y1="' + y1 + '" x2="' + x2 + '" y2="' + y2 + '" stroke="' + c + '" stroke-width="' + w + '"/>' +
      '<polygon points="' + x2 + ',' + y2 + ' ' + p1 + ' ' + p2 + '" fill="' + c + '"/>';
  };
  // Kasten mit Text
  Z.K = function (x, y, w, h, s, fill, o) {
    o = o || {};
    return '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" rx="7" fill="' + (fill || '#fff') + '" stroke="' + (o.st || '#666') + '"/>' +
      Z.T(x + w / 2, y + h / 2 + 4, s, { s: o.s || 11, b: o.b, c: o.c });
  };
  Z.C = function (x, y, r, fill, st) { return '<circle cx="' + x + '" cy="' + y + '" r="' + r + '" fill="' + fill + '"' + (st ? ' stroke="' + st + '"' : '') + '/>'; };
  Z.E = function (x, y, rx, ry, fill, st) { return '<ellipse cx="' + x + '" cy="' + y + '" rx="' + rx + '" ry="' + ry + '" fill="' + fill + '"' + (st ? ' stroke="' + st + '"' : '') + '/>'; };
  Z.R = function (x, y, w, h, fill, st, rx) { return '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" rx="' + (rx || 0) + '" fill="' + fill + '"' + (st ? ' stroke="' + st + '"' : '') + '/>'; };
  Z.P = function (d, fill, st, w) { return '<path d="' + d + '" fill="' + (fill || 'none') + '"' + (st ? ' stroke="' + st + '" stroke-width="' + (w || 2) + '"' : '') + '/>'; };
  Z.Ln = function (x1, y1, x2, y2, c, w, dash) { return '<line x1="' + x1 + '" y1="' + y1 + '" x2="' + x2 + '" y2="' + y2 + '" stroke="' + (c || '#444') + '" stroke-width="' + (w || 2) + '"' + (dash ? ' stroke-dasharray="' + dash + '"' : '') + '/>'; };
  // Achsen für Diagramme
  Z.Ax = function (x0, y0, w, h, xl, yl) {
    return Z.A(x0, y0, x0 + w, y0, '#333', 1.5) + Z.A(x0, y0, x0, y0 - h, '#333', 1.5) +
      Z.T(x0 + w, y0 + 14, xl, { a: 'end' }) + Z.T(x0 + 4, y0 - h + 4, yl, { a: 'start' });
  };
  // Einfache Pflanze und Baum
  Z.Baum = function (x, y, s, laub) {
    s = s || 1;
    return Z.R(x - 5 * s, y - 40 * s, 10 * s, 40 * s, '#795548') + Z.C(x, y - 55 * s, 26 * s, laub || '#43a047') +
      Z.C(x - 16 * s, y - 45 * s, 16 * s, laub || '#4caf50') + Z.C(x + 16 * s, y - 45 * s, 16 * s, laub || '#4caf50');
  };
  Z.Tanne = function (x, y, s) {
    s = s || 1;
    return Z.R(x - 4 * s, y - 12 * s, 8 * s, 12 * s, '#6d4c41') +
      '<polygon points="' + x + ',' + (y - 70 * s) + ' ' + (x - 22 * s) + ',' + (y - 12 * s) + ' ' + (x + 22 * s) + ',' + (y - 12 * s) + '" fill="#2e7d32"/>';
  };
  Z.Sonne = function (x, y, r) {
    r = r || 18; var s = '';
    for (var i = 0; i < 8; i++) { var a = i * Math.PI / 4; s += Z.Ln((x + Math.cos(a) * (r + 3)).toFixed(1), (y + Math.sin(a) * (r + 3)).toFixed(1), (x + Math.cos(a) * (r + 10)).toFixed(1), (y + Math.sin(a) * (r + 10)).toFixed(1), '#f9a825', 2.5); }
    return s + Z.C(x, y, r, '#ffd54f');
  };
})();
