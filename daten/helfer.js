// Hilfsfunktion: kompaktes Kapitel-Format -> volles Format für die App.
// kap(id, { e: 'Emojis fürs Bild', bt: 'Bildtext', ein: 'einfach (HTML)', m: 'Merksatz',
//   aus: 'ausführlich (HTML)', f: [[symbol, titel, text], ...],
//   u: [[frage, richtig, falsch1, falsch2, falsch3, erklärung], ...] })
(function () {
  window.KAPITEL = window.KAPITEL || {};
  var farben = { bio: ['#e8f5e9', '#2e7d32'], phy: ['#e8eefb', '#1a3fa0'], che: ['#fbe9e7', '#a63d16'], erd: ['#efe6da', '#6b4420'] };
  function bildAusEmojis(id, e, titel) {
    var f = farben[id.slice(0, 3)] || ['#eee', '#333'];
    var zeichen = Array.from(e || '').filter(function (c) { return c.trim() && c !== '️' && c !== '‍'; });
    // Emojis mit Zusatzzeichen zusammenhalten: einfache Aufteilung über Intl.Segmenter, falls vorhanden
    if (window.Intl && Intl.Segmenter) {
      zeichen = Array.from(new Intl.Segmenter('de', { granularity: 'grapheme' }).segment(e || '')).map(function (s) { return s.segment; }).filter(function (c) { return c.trim(); });
    }
    var n = zeichen.length || 1, s = '';
    zeichen.forEach(function (z, i) {
      var x = 400 * (i + 0.5) / n;
      s += '<circle cx="' + x + '" cy="85" r="' + Math.min(52, 170 / n) + '" fill="#fff" opacity=".7"/>' +
        '<text x="' + x + '" y="' + (85 + Math.min(26, 85 / n)) + '" font-size="' + Math.min(70, 230 / n) + '" text-anchor="middle">' + z + '</text>';
    });
    return '<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg" role="img"><rect width="400" height="200" rx="16" fill="' + f[0] + '"/>' + s +
      '<text x="200" y="185" font-size="15" font-weight="700" text-anchor="middle" fill="' + f[1] + '">' + (titel || '') + '</text></svg>';
  }
  window.kap = function (id, o) {
    window.KAPITEL[id] = {
      bild: o.bild || bildAusEmojis(id, o.e, o.titel || ''),
      bildtext: o.bt || '',
      einfach: o.ein,
      merke: o.m,
      ausfuehrlich: o.aus,
      folien: (o.f || []).map(function (x) { return { symbol: x[0], titel: x[1], text: x[2] }; }),
      uebungen: (o.u || []).map(function (x) { return { frage: x[0], optionen: [x[1], x[2], x[3], x[4]].filter(Boolean), richtig: 0, erklaerung: x[5] || '' }; })
    };
  };
})();
