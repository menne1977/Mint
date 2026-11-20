// Erdkunde Klasse 6 bis 13 – Schaubilder (schematisch, nicht maßstäblich)
(function () {
  var Z = window.ZH, D = window.ZEICHNUNGEN, S = Z.S, T = Z.T, L = Z.L, A = Z.A, K = Z.K, C = Z.C, E = Z.E, R = Z.R, P = Z.P, Ln = Z.Ln;
  var BG = '#efe6da';
  // Klimadiagramm: temps (12 Werte °C), regen (12 Werte mm)
  function klima(x0, y0, w, h, temps, regen, titel) {
    var s = R(x0, y0 - h, w, h, '#fff', '#999'), bw = w / 12, i, d = '';
    for (i = 0; i < 12; i++) { var rh = Math.min(regen[i], 200) / 200 * h; s += R(x0 + i * bw + 2, y0 - rh, bw - 4, rh, '#64b5f6'); s += T(x0 + i * bw + bw / 2, y0 + 11, 'JFMAMJJASOND'[i], { s: 8 }); }
    for (i = 0; i < 12; i++) { var y = y0 - (temps[i] + 10) / 50 * h; d += (i ? ' L' : 'M') + (x0 + i * bw + bw / 2).toFixed(1) + ' ' + y.toFixed(1); }
    s += P(d, 'none', '#e53935', 2.5);
    s += T(x0 - 3, y0 - h + 8, '40°', { s: 8, a: 'end', c: '#c62828' }) + T(x0 - 3, y0 - h * 0.2 + 3, '0°', { s: 8, a: 'end', c: '#c62828' }) + T(x0 + w + 3, y0 - h + 8, '200', { s: 8, a: 'start', c: '#1565c0' }) + T(x0 + w + 3, y0 + 3, '0 mm', { s: 8, a: 'start', c: '#1565c0' });
    return s + (titel ? T(x0 + w / 2, y0 - h - 6, titel, { s: 10, b: 1 }) : '');
  }
  function pyr(x, y, breiten, c, titel) { var s = '', h = 9; breiten.forEach(function (b, i) { var yy = y - (i + 1) * h; s += R(x - b, yy, b, h - 1, c[0]) + R(x, yy, b, h - 1, c[1]); }); return s + T(x, y + 14, titel, { s: 10, b: 1 }); }

  // Klasse 6
  D['erd6-01'] = S('#e3f2fd',
    T(200, 18, 'Großregionen Europas (schematisch)', { s: 13, b: 1 }) +
    K(130, 35, 120, 34, 'Nordeuropa', '#b3e5fc', { b: 1, s: 10 }) + T(190, 80, 'Norwegen, Schweden, Finnland', { s: 8 }) +
    K(20, 90, 105, 34, 'Westeuropa', '#c5e1a5', { b: 1, s: 10 }) + T(72, 135, 'Frankreich, Benelux', { s: 8 }) +
    K(140, 90, 100, 34, 'Mitteleuropa', '#ffe082', { b: 1, s: 10 }) + T(190, 135, 'Deutschland, Polen', { s: 8 }) +
    K(255, 90, 100, 34, 'Osteuropa', '#ffccbc', { b: 1, s: 10 }) + T(305, 135, 'Ukraine, Belarus', { s: 8 }) +
    K(60, 150, 110, 34, 'Südeuropa', '#f8bbd0', { b: 1, s: 10 }) + T(115, 195, 'Spanien, Italien, Griechenland', { s: 8 }) +
    K(200, 150, 110, 34, 'Südosteuropa', '#d1c4e9', { b: 1, s: 10 }) + T(255, 195, 'Rumänien, Kroatien', { s: 8 }) +
    Ln(370, 40, 370, 190, '#795548', 4) + T(375, 115, 'Ural', { s: 10, b: 1, a: 'start' }).replace('x="378"', 'x="374"') + T(385, 132, '→ Asien', { s: 8, a: 'end' }) +
    T(200, 212, 'EU: 27 Länder · viele zahlen mit dem Euro', { s: 9 }));

  D['erd6-02'] = S('#e8f5e9',
    T(200, 18, 'Höhenstufen der Alpen', { s: 13, b: 1 }) +
    P('M20 200 L120 200 L200 40 L280 200 L380 200 Z', '#a5d6a7') + P('M20 200 L380 200 L280 200 L240 120 L200 120 L160 120 L120 200Z', '#66bb6a') +
    P('M144 152 L256 152 L240 120 L160 120Z', '#2e7d32') + P('M160 120 L240 120 L222 84 L178 84Z', '#c5e1a5') + P('M178 84 L222 84 L200 40Z', '#fff', '#90a4ae', 1) +
    L(210, 60, 262, 50, 'über 2500 m: Fels, Eis') + L(215, 100, 262, 92, 'bis 2500 m: Almen') + L(230, 135, 270, 134, 'bis 1800 m: Wald') + L(250, 175, 285, 176, 'bis 800 m: Felder') +
    T(70, 60, 'pro 100 m', { s: 10, b: 1 }) + T(70, 74, 'etwa 0,6 °C kälter', { s: 10 }) + T(70, 105, 'Mont Blanc', { s: 9 }) + T(70, 117, '4805 m', { s: 9, b: 1 }));

  D['erd6-03'] = S('#fff8e1',
    T(200, 18, 'Vom Feld auf den Teller', { s: 13, b: 1 }) +
    (function () { var s = ''; for (var i = 0; i < 6; i++) s += Ln(25 + i * 9, 110, 28 + i * 9, 70, '#c0a060', 2) + E(29 + i * 9, 68, 3, 8, '#e6b84d'); return s; })() + T(50, 135, 'Weizen', { s: 10, b: 1 }) + A(85, 90, 115, 90) +
    R(125, 70, 50, 45, '#bcaaa4', '#5d4037') + '<polygon points="120,70 150,45 180,70" fill="#8d6e63"/>' + P('M150 60 l20 -20 M150 60 l20 20 M150 60 l-20 20 M150 60 l-20 -20', 'none', '#5d4037', 3) + T(150, 135, 'Mühle → Mehl', { s: 10, b: 1 }) + A(190, 90, 220, 90) +
    R(230, 65, 60, 50, '#ffe0b2', '#e65100') + T(260, 95, 'Bäckerei', { s: 9 }) + T(260, 135, 'Bäckerei', { s: 10, b: 1 }).replace('Bäckerei', 'backen') + A(300, 90, 330, 90) + E(360, 90, 28, 16, '#d7a86e', '#8d6e63') + T(360, 135, 'Brot', { s: 10, b: 1 }) +
    T(100, 170, 'Börde: Weizen, Rüben', { s: 9 }) + T(200, 170, 'Allgäu: Milch, Käse', { s: 9 }) + T(300, 170, 'Mosel: Wein', { s: 9 }) + T(200, 200, 'Bio: ohne chemische Spritzmittel und Kunstdünger', { s: 10 }));

  D['erd6-04'] = S('#eceff1',
    T(200, 18, 'Gliederung einer Stadt (vereinfacht)', { s: 13, b: 1 }) +
    C(140, 120, 90, '#c8e6c9') + C(140, 120, 66, '#ffe0b2') + C(140, 120, 34, '#ffcdd2') + E(205, 175, 30, 18, '#cfd8dc', '#78909c') + E(60, 70, 18, 12, '#81c784') +
    T(140, 124, 'City', { s: 10, b: 1 }) + T(140, 75, 'Wohnviertel', { s: 9 }) + T(140, 200, 'Stadtrand, Dörfer', { s: 9 }) + T(205, 179, 'Gewerbe', { s: 8 }) + T(60, 74, 'Park', { s: 8 }) +
    T(320, 60, 'Innenstadt:', { s: 10, b: 1 }) + T(320, 74, 'Geschäfte, Büros, Rathaus', { s: 9 }) + T(320, 100, 'Wohnen:', { s: 10, b: 1 }) + T(320, 114, 'Mehrfamilienhäuser', { s: 9 }) + T(320, 140, 'Stadtrand:', { s: 10, b: 1 }) + T(320, 154, 'Gewerbe, Einfamilienhäuser', { s: 9 }) + T(320, 185, 'Großstadt: ab 100 000', { s: 9, b: 1 }) + T(320, 198, 'Einwohnern', { s: 9 }));

  D['erd6-05'] = S('#fff3e0',
    T(200, 18, 'Mittelmeerklima (Beispiel)', { s: 13, b: 1 }) +
    klima(50, 185, 200, 140, [8, 9, 11, 14, 18, 22, 25, 25, 22, 17, 12, 9], [75, 70, 55, 50, 30, 15, 10, 25, 60, 95, 100, 85], '') +
    T(330, 60, 'Sommer:', { s: 11, b: 1, c: '#c62828' }) + T(330, 75, 'heiß und trocken', { s: 10 }) + T(330, 110, 'Winter:', { s: 11, b: 1, c: '#1565c0' }) + T(330, 125, 'mild und feucht', { s: 10 }) +
    T(330, 160, 'rote Linie: Temperatur', { s: 9 }) + T(330, 173, 'blaue Säulen: Regen', { s: 9 }) + T(150, 212, 'Werte gerundet, typisch für Süditalien', { s: 8 }));

  D['erd6-06'] = S('#e1f5fe',
    T(200, 18, 'So entsteht ein Fjord', { s: 13, b: 1 }) +
    P('M20 70 L50 160 L80 70', '#90a4ae', '#455a64', 2).replace('#90a4ae', '#bcaaa4') + P('M20 70 L50 160 L80 70', 'none', '#455a64', 2) + T(50, 185, '1 Fluss: V-Tal', { s: 9, b: 1 }) +
    A(90, 115, 120, 115) + P('M130 70 Q130 160 165 160 Q200 160 200 70', '#bcaaa4', '#455a64', 2) + P('M135 72 Q137 150 165 150 Q193 150 195 72Z', '#e3f2fd', '#90a4ae', 1) + T(165, 185, '2 Gletscher: U-Tal', { s: 9, b: 1 }) +
    A(210, 115, 240, 115) + P('M250 70 Q250 160 285 160 Q320 160 320 70', '#bcaaa4', '#455a64', 2) + P('M251 100 Q254 156 285 156 Q316 156 319 100Z', '#29b6f6') + T(285, 185, '3 Meer füllt das Tal', { s: 9, b: 1 }) +
    T(365, 80, 'steile', { s: 9 }) + T(365, 92, 'Wände,', { s: 9 }) + T(365, 104, 'tiefes', { s: 9 }) + T(365, 116, 'Wasser', { s: 9 }) + T(200, 210, 'Norwegen: Fjorde aus der Eiszeit', { s: 9 }));

  // Klasse 7
  D['erd7-01'] = S('#e3f2fd',
    T(200, 18, 'Klimazonen der Erde', { s: 13, b: 1 }) +
    '<clipPath id="kz"><circle cx="120" cy="118" r="88"/></clipPath><g clip-path="url(#kz)">' +
    R(20, 28, 200, 26, '#eceff1') + R(20, 54, 200, 20, '#4db6ac') + R(20, 74, 200, 20, '#9ccc65') + R(20, 94, 200, 14, '#ffe082') + R(20, 108, 200, 20, '#66bb6a') + R(20, 128, 200, 14, '#ffe082') + R(20, 142, 200, 20, '#9ccc65') + R(20, 162, 200, 20, '#4db6ac') + R(20, 182, 200, 26, '#eceff1') + '</g>' +
    C(120, 118, 88, 'none', '#455a64') + Ln(30, 118, 210, 118, '#c62828', 1.5, '5 3') + T(215, 122, 'Äquator', { s: 9, a: 'start', c: '#c62828' }) +
    T(300, 46, 'Polarzone', { s: 10, b: 1 }) + T(300, 66, 'kalte Zone (Taiga)', { s: 10 }) + T(300, 86, 'gemäßigte Zone', { s: 10 }) + T(300, 103, 'Subtropen (Wüste)', { s: 10 }) + T(300, 122, 'Tropen (Regenwald)', { s: 10, b: 1 }) +
    T(300, 160, 'Am Äquator steht die', { s: 9 }) + T(300, 172, 'Sonne steil → heiß', { s: 9 }) + T(300, 190, 'An den Polen flach → kalt', { s: 9 }));

  D['erd7-02'] = S('#e8f5e9',
    T(200, 18, 'Tropischer Regenwald', { s: 13, b: 1 }) + R(0, 195, 200, 25, '#a1887f') +
    Z.Baum(40, 195, 2.2) + Z.Baum(110, 195, 1.5) + Z.Baum(160, 195, 1.6) + R(85, 170, 8, 25, '#795548') + C(89, 160, 14, '#81c784') +
    T(195, 40, 'Urwaldriesen bis 60 m', { s: 9, a: 'end' }) + T(195, 90, 'Kronendach', { s: 9, a: 'end' }) + T(195, 165, 'Unterwuchs', { s: 9, a: 'end' }) + T(100, 212, 'Boden: wenig Licht', { s: 9, c: '#fff' }) +
    K(225, 40, 160, 30, 'Pflanzen speichern Nährstoffe', '#c8e6c9', { s: 9 }) + A(305, 72, 305, 92) + K(225, 94, 160, 30, 'Laub fällt, zersetzt schnell', '#fff9c4', { s: 9 }) + A(305, 126, 305, 146) + K(225, 148, 160, 30, 'Wurzeln nehmen sofort auf', '#ffe0b2', { s: 9 }) +
    P('M388 163 Q398 105 388 55', 'none', '#555', 1.5) + A(390, 62, 388, 55, '#555', 1.5) + T(305, 200, 'kurzer Nährstoffkreislauf', { s: 10, b: 1 }));

  D['erd7-03'] = S('#fff8e1',
    T(200, 18, 'Von der Wüste zum Regenwald', { s: 13, b: 1 }) +
    R(0, 160, 400, 60, '#e6c88a') + R(0, 160, 80, 60, '#ffe0b2') + R(80, 160, 80, 60, '#f0d9a0') + R(160, 160, 80, 60, '#dce775') + R(240, 160, 80, 60, '#aed581') + R(320, 160, 80, 60, '#66bb6a') +
    P('M10 160 q15 -20 30 0 q15 -12 30 0', '#ffcc80') + (function () { var s = ''; [95, 130].forEach(function (x) { s += Ln(x, 160, x, 140, '#8d6e63', 2) + P('M' + (x - 8) + ' 142 l16 -6', 'none', '#7cb342', 3); }); [180, 200, 220].forEach(function (x) { s += P('M' + x + ' 160 v-14 M' + (x - 10) + ' 146 h20', 'none', '#558b2f', 2) + E(x, 144, 14, 5, '#7cb342'); }); s += Z.Baum(270, 160, 0.7) + Z.Baum(300, 160, 0.6); s += Z.Baum(345, 160, 1) + Z.Baum(380, 160, 1.1); return s; })() +
    T(40, 185, 'Wüste', { s: 10, b: 1 }) + T(120, 185, 'Dornsavanne', { s: 9, b: 1 }) + T(200, 185, 'Trockensavanne', { s: 9, b: 1 }) + T(280, 185, 'Feuchtsavanne', { s: 9, b: 1 }) + T(360, 185, 'Regenwald', { s: 9, b: 1 }) +
    T(40, 200, '0–2 Monate', { s: 8 }) + T(120, 200, '2–4', { s: 8 }) + T(200, 200, '5–7', { s: 8 }) + T(280, 200, '7–9', { s: 8 }) + T(360, 200, '10–12', { s: 8 }) +
    A(20, 70, 380, 70, '#1e88e5', 2.5) + T(200, 62, 'immer mehr feuchte Monate (Regenzeit)', { s: 10, b: 1, c: '#1565c0' }) + T(40, 110, 'Kamel, Oase', { s: 9 }) + T(200, 110, 'Giraffe, Zebra', { s: 9 }));

  D['erd7-04'] = S('#e1f5fe',
    T(100, 18, 'Arktis (Nordpol)', { s: 12, b: 1 }) + T(300, 18, 'Antarktis (Südpol)', { s: 12, b: 1 }) +
    R(10, 110, 180, 80, '#0288d1') + P('M30 110 L170 110 L165 120 L35 120Z', '#fff', '#90a4ae', 1) + T(100, 150, 'Meer', { s: 10, b: 1, c: '#fff' }) + L(100, 112, 100, 70, 'Packeis: wenige Meter', 'middle') + T(100, 205, 'Eisbär, Robbe, Inuit', { s: 9 }) +
    R(210, 150, 180, 40, '#0288d1') + P('M220 150 L380 150 L370 130 Q300 60 230 130Z', '#fff', '#90a4ae', 1) + R(225, 150, 150, 20, '#8d6e63') + T(300, 164, 'Land (Kontinent)', { s: 9, b: 1, c: '#fff' }) + L(300, 95, 300, 50, 'Eispanzer bis 4 km', 'middle') + T(300, 205, 'Pinguin, Forscher', { s: 9 }));

  D['erd7-05'] = S('#fff3e0',
    T(200, 18, 'Afrika von Nord nach Süd (schematisch)', { s: 13, b: 1 }) +
    (function () { var s = '', z = [['Mittelmeer', '#81d4fa'], ['Sahara', '#ffe082'], ['Sahel', '#e6c88a'], ['Savanne', '#d4e157'], ['Regenwald', '#43a047'], ['Savanne', '#d4e157'], ['Kalahari, Namib', '#ffe082'], ['Kap', '#a5d6a7']]; z.forEach(function (x, i) { s += R(30, 32 + i * 21, 150, 20, x[1], '#fff') + T(105, 46 + i * 21, x[0], { s: 9, b: 1, c: x[0] === 'Regenwald' ? '#fff' : '#212121' }); }); return s; })() +
    Ln(20, 116, 190, 116, '#c62828', 1.5, '4 3') + T(195, 120, 'Äquator', { s: 8, a: 'start', c: '#c62828' }) +
    T(300, 50, 'Rekorde', { s: 11, b: 1 }) + T(300, 70, 'Nil: längster Fluss', { s: 10 }) + T(300, 88, 'Kilimandscharo 5895 m', { s: 10 }) + T(300, 106, 'Sahara: größte heiße Wüste', { s: 10 }) +
    T(300, 140, '54 Länder', { s: 10, b: 1 }) + T(300, 158, 'über 1,4 Mrd. Menschen', { s: 10 }) + T(300, 176, 'Hälfte unter 20 Jahre', { s: 10 }) + T(300, 200, 'spiegelbildlich zum Äquator', { s: 8 }));

  D['erd7-06'] = S('#e3f2fd',
    T(100, 18, 'Sommermonsun', { s: 12, b: 1 }) + T(300, 18, 'Wintermonsun', { s: 12, b: 1 }) +
    R(10, 130, 180, 70, '#0288d1') + P('M10 40 L190 40 L190 130 L10 130Z', '#c5e1a5') + T(100, 175, 'Meer', { s: 10, b: 1, c: '#fff' }) + T(100, 60, 'Land heiß', { s: 10, b: 1 }) +
    A(80, 180, 110, 100, '#1e88e5', 3) + E(120, 80, 30, 12, '#fff', '#90a4ae') + (function () { var s = ''; for (var i = 0; i < 4; i++) s += Ln(100 + i * 12, 94, 96 + i * 12, 108, '#1e88e5', 2); return s; })() + T(100, 122, 'feuchter Wind → Regen', { s: 9 }) +
    R(210, 130, 180, 70, '#0288d1') + P('M210 40 L390 40 L390 130 L210 130Z', '#e6c88a') + T(300, 175, 'Meer', { s: 10, b: 1, c: '#fff' }) + T(300, 60, 'Land kühl', { s: 10, b: 1 }) +
    A(320, 85, 290, 170, '#ff9800', 3) + T(300, 112, 'trockener Wind', { s: 9 }) + T(200, 213, 'Reis braucht den Monsunregen · zu viel → Überschwemmung', { s: 9 }));

  // Klasse 8
  D['erd8-01'] = S('#fff8e1',
    T(200, 18, 'Schalenbau der Erde', { s: 13, b: 1 }) +
    C(120, 125, 88, '#8d6e63') + C(120, 125, 82, '#ff8a65') + C(120, 125, 42, '#ffb74d') + C(120, 125, 20, '#fff176') + P('M120 125 L120 37 A88 88 0 0 1 208 125Z', '#efe6da') +
    L(160, 42, 240, 45, 'Erdkruste 5–70 km') + L(165, 80, 240, 75, 'Erdmantel (zähflüssig)') + L(150, 115, 240, 108, 'äußerer Kern (flüssig)') + L(128, 125, 240, 140, 'innerer Kern (fest)') +
    T(310, 175, 'Mittelpunkt: etwa 6370 km tief', { s: 9 }) + T(310, 190, 'etwa 5000–6000 °C heiß', { s: 9 }));

  D['erd8-02'] = S('#fbe9e7',
    T(200, 18, 'Aufbau eines Schichtvulkans', { s: 13, b: 1 }) +
    P('M40 190 L160 60 L240 60 L360 190Z', '#8d6e63') + P('M70 190 L165 85 M100 190 L175 105 M330 190 L235 85 M300 190 L225 105', 'none', '#6d4c41', 2) +
    E(200, 205, 70, 14, '#ff5722') + Ln(200, 195, 200, 62, '#ff5722', 12) + P('M175 60 Q200 40 225 60', '#ff7043') + P('M200 58 q-18 -18 -8 -28 q14 4 22 -3 q14 10 0 31z', '#9e9e9e').replace('/>', ' opacity=".8"/>') +
    P('M240 60 Q270 80 285 130', 'none', '#ff7043', 5) +
    L(200, 205, 290, 205, 'Magmakammer') + L(200, 130, 280, 150, '', 'start') + T(300, 154, 'Schlot', { s: 11, a: 'start' }).replace('x="300"', 'x="283"') + L(200, 58, 290, 45, 'Krater') + L(285, 125, 330, 110, 'Lava') + L(195, 40, 110, 42, 'Asche, Gase', 'end') +
    T(10, 212, 'Schichten: Lava + Asche', { s: 9, a: 'start' }));

  D['erd8-03'] = S('#f3e5f5',
    T(200, 18, 'Kreislauf der Gesteine', { s: 13, b: 1 }) +
    K(150, 32, 100, 34, 'Magma', '#ff8a65', { b: 1 }) + K(270, 95, 120, 34, 'magmatisch', '#ffccbc', { b: 1, s: 10 }) + T(330, 142, 'Granit, Basalt', { s: 8 }) +
    K(150, 165, 100, 34, 'Sediment', '#ffe082', { b: 1, s: 10 }) + T(200, 212, 'Sandstein, Kalk', { s: 8 }) + K(10, 95, 120, 34, 'metamorph', '#ce93d8', { b: 1, s: 10 }) + T(70, 142, 'Marmor, Schiefer', { s: 8 }) +
    A(250, 55, 300, 92, '#c62828') + T(290, 66, 'abkühlen', { s: 9, a: 'start' }) + A(320, 130, 250, 170, '#555') + T(300, 165, 'verwittern,', { s: 9, a: 'start' }).replace('x="300"', 'x="292"') + T(292, 177, 'ablagern', { s: 9, a: 'start' }) +
    A(150, 175, 80, 132, '#555') + T(105, 170, 'Druck, Hitze', { s: 9, a: 'end' }).replace('x="105"', 'x="112"') + A(80, 92, 148, 55, '#c62828') + T(105, 66, 'schmelzen', { s: 9, a: 'end' }) +
    T(200, 112, 'Millionen', { s: 9 }) + T(200, 124, 'Jahre', { s: 9 }));

  D['erd8-04'] = S('#e1f5fe',
    T(200, 18, 'Der Lauf eines Flusses', { s: 13, b: 1 }) +
    P('M10 60 Q80 70 130 120 Q200 170 390 180 L390 200 L10 200Z', '#a1887f') + P('M10 60 Q80 70 130 120 Q200 170 390 180', 'none', '#1e88e5', 4) +
    T(60, 50, 'Oberlauf', { s: 10, b: 1 }) + T(60, 98, 'steil, schnell', { s: 8 }) + T(60, 109, 'V-Tal, Erosion', { s: 8 }) + T(190, 130, 'Mittellauf', { s: 10, b: 1 }) + T(190, 142, 'Transport', { s: 8 }) + T(330, 160, 'Unterlauf', { s: 10, b: 1 }) + T(330, 172, 'flach, Ablagerung', { s: 8 }) +
    P('M245 55 q20 -25 40 0 t40 0 t40 0', 'none', '#1e88e5', 5) + T(310, 90, 'Mäander', { s: 10, b: 1 }) + L(262, 37, 245, 35, 'Prallhang', 'end') + L(285, 58, 285, 75, '', 'start') + T(278, 82, 'Gleithang', { s: 9, a: 'end' }) +
    T(200, 212, 'Quelle → Mündung (Delta oder Trichter)', { s: 9 }));

  D['erd8-05'] = S('#e8f5e9',
    T(200, 18, 'Nordamerika: Profil von West nach Ost', { s: 13, b: 1 }) +
    P('M0 180 L20 160 L45 80 L70 120 L95 70 L120 150 L250 165 L280 140 L300 120 L320 150 L360 170 L400 175 L400 200 L0 200Z', '#a5d6a7', '#33691e', 1.5) + P('M95 70 L88 88 L102 88Z', '#fff') + R(190, 162, 18, 8, '#1e88e5') +
    T(70, 60, 'Rocky Mountains', { s: 10, b: 1 }) + T(180, 150, 'Great Plains', { s: 10, b: 1 }) + T(199, 190, 'Mississippi', { s: 9, c: '#fff' }) + T(300, 110, 'Appalachen', { s: 10, b: 1 }) + T(20, 195, 'Pazifik', { s: 8, c: '#fff', a: 'start' }).replace('#fff', '#1b5e20') + T(390, 195, 'Atlantik', { s: 8, a: 'end' }) +
    A(200, 40, 200, 100, '#1e88e5', 3) + T(205, 50, 'kalte Polarluft', { s: 9, a: 'start', c: '#1565c0' }) + A(260, 120, 230, 80, '#e53935', 3).replace('x1="260"', 'x1="262"') + T(268, 80, 'warme Golfluft', { s: 9, a: 'start', c: '#c62828' }) +
    T(330, 50, '→ Tornados,', { s: 9 }) + T(330, 62, 'Blizzards', { s: 9 }));

  D['erd8-06'] = S('#e3f2fd',
    T(200, 18, 'Höhenstufen in den Anden', { s: 13, b: 1 }) +
    P('M30 200 L200 40 L370 200Z', '#a5d6a7') + P('M84 150 L316 150 L370 200 L30 200Z', '#66bb6a') + P('M110 125 L290 125 L316 150 L84 150Z', '#9ccc65') + P('M137 100 L263 100 L290 125 L110 125Z', '#dce775') + P('M137 100 L263 100 L200 40Z', '#eceff1') +
    T(200, 80, 'Tierra helada', { s: 9, b: 1 }) + T(200, 115, 'Tierra fría', { s: 9, b: 1 }) + T(200, 140, 'Tierra templada', { s: 9, b: 1 }) + T(200, 180, 'Tierra caliente', { s: 9, b: 1 }) +
    T(330, 70, 'Lamas, Alpakas', { s: 9, a: 'start' }).replace('x="330"', 'x="272"') + T(305, 110, 'Kartoffeln', { s: 9, a: 'start' }) + T(320, 138, 'Kaffee, Mais', { s: 9, a: 'start' }) + T(20, 180, 'Bananen,', { s: 9, a: 'start' }) + T(20, 192, 'Kakao', { s: 9, a: 'start' }) +
    T(60, 70, 'über 3800 m', { s: 8 }) + T(60, 115, '2500–3800 m', { s: 8 }) + T(60, 140, '1000–2500 m', { s: 8 }));

  // Klasse 9
  D['erd9-01'] = S('#fff',
    T(200, 18, 'Formen der Bevölkerungspyramide', { s: 13, b: 1 }) +
    pyr(70, 185, [55, 48, 41, 34, 27, 20, 14, 9, 5, 2], ['#64b5f6', '#f48fb1'], 'Pyramide') + T(70, 210, 'viele Kinder, wächst', { s: 8 }) +
    pyr(200, 185, [34, 34, 33, 32, 31, 29, 25, 19, 11, 4], ['#64b5f6', '#f48fb1'], 'Glocke') + T(200, 210, 'stabil', { s: 8 }) +
    pyr(330, 185, [22, 24, 27, 31, 36, 38, 34, 27, 17, 7], ['#64b5f6', '#f48fb1'], 'Urne') + T(330, 210, 'wenig Kinder, altert (Deutschland)', { s: 8 }) +
    T(40, 55, 'Männer', { s: 8, c: '#1565c0' }) + T(100, 55, 'Frauen', { s: 8, c: '#ad1457' }) + T(200, 50, 'oben alt, unten jung', { s: 9 }));

  D['erd9-02'] = S('#fff3e0',
    T(200, 18, 'Woran man Entwicklung misst', { s: 13, b: 1 }) +
    K(20, 45, 110, 40, 'Einkommen', '#ffe0b2', { b: 1 }) + T(75, 100, 'BIP pro Kopf', { s: 9 }) + K(145, 45, 110, 40, 'Gesundheit', '#c8e6c9', { b: 1 }) + T(200, 100, 'Lebenserwartung', { s: 9 }) + K(270, 45, 110, 40, 'Bildung', '#bbdefb', { b: 1 }) + T(325, 100, 'Schuljahre', { s: 9 }) +
    A(75, 108, 180, 140, '#555', 1.5) + A(200, 108, 200, 135, '#555', 1.5) + A(325, 108, 220, 140, '#555', 1.5) + K(140, 138, 120, 34, 'HDI', '#fff', { b: 1, s: 13 }) +
    T(200, 192, 'Industrieländer · Schwellenländer · Entwicklungsländer', { s: 9 }) + T(200, 207, 'Bildung (besonders für Mädchen) und fairer Handel helfen', { s: 9 }));

  D['erd9-03'] = S('#fffde7',
    T(100, 18, 'fossil: begrenzt', { s: 12, b: 1, c: '#5d4037' }) + T(300, 18, 'erneuerbar', { s: 12, b: 1, c: '#2e7d32' }) +
    R(30, 60, 50, 40, '#212121', null, 4) + T(55, 118, 'Kohle', { s: 10, b: 1 }) + R(115, 50, 26, 50, '#5d4037', null, 6) + T(128, 118, 'Erdöl', { s: 10, b: 1 }) + C(55, 160, 18, '#90caf9') + T(55, 195, 'Erdgas', { s: 10, b: 1 }) + T(128, 160, 'CO₂ beim', { s: 9 }) + T(128, 172, 'Verbrennen', { s: 9 }) +
    Ln(200, 35, 200, 205, '#ccc', 1) +
    Z.Sonne(245, 75, 16) + T(245, 118, 'Sonne', { s: 10, b: 1 }) + Ln(330, 110, 330, 55, '#9e9e9e', 3) + P('M330 55 l-20 -14 M330 55 l22 -10 M330 55 l-2 24', 'none', '#607d8b', 4) + T(330, 125, 'Wind', { s: 10, b: 1 }) +
    P('M220 170 q12 -10 24 0 t24 0', 'none', '#1e88e5', 3) + T(245, 195, 'Wasser', { s: 10, b: 1 }) + Z.Baum(330, 185, 0.5) + T(330, 205, 'Biomasse', { s: 10, b: 1 }) +
    T(385, 160, 'kein', { s: 9, a: 'end' }) + T(385, 172, 'Ende', { s: 9, a: 'end' }));

  D['erd9-04'] = S('#fff',
    T(200, 18, 'Beschäftigte in Deutschland nach Sektoren', { s: 13, b: 1 }) +
    (function () { function bar(x, a, b, c, lab) { var h = 150; return R(x, 40, 60, c / 100 * h, '#64b5f6') + R(x, 40 + c / 100 * h, 60, b / 100 * h, '#ffb74d') + R(x, 40 + (b + c) / 100 * h, 60, a / 100 * h, '#81c784') + T(x + 30, 205, lab, { s: 10, b: 1 }) + T(x + 30, 40 + c / 200 * h + 4, c + ' %', { s: 9 }) + T(x + 30, 40 + (c + b / 2) / 100 * h + 4, b + ' %', { s: 9 }) + (a > 5 ? T(x + 30, 40 + (b + c + a / 2) / 100 * h + 4, a + ' %', { s: 9 }) : ''); }
      return bar(90, 25, 43, 32, '1950') + bar(220, 1, 24, 75, 'heute'); })() +
    R(310, 60, 12, 10, '#81c784') + T(326, 69, 'primär', { s: 9, a: 'start' }) + R(310, 80, 12, 10, '#ffb74d') + T(326, 89, 'sekundär', { s: 9, a: 'start' }) + R(310, 100, 12, 10, '#64b5f6') + T(326, 109, 'tertiär', { s: 9, a: 'start' }) +
    T(345, 150, 'Werte gerundet', { s: 8 }) + T(345, 170, 'Strukturwandel:', { s: 9, b: 1 }) + T(345, 182, 'hin zu Dienst-', { s: 9 }) + T(345, 194, 'leistungen', { s: 9 }));

  D['erd9-05'] = S('#e3f2fd',
    T(200, 18, 'Die Weltreise einer Jeans (Beispiel)', { s: 13, b: 1 }) +
    (function () { var s = '', p = [[60, 150, 'Baumwolle: Indien'], [130, 70, 'Garn: China'], [230, 55, 'Stoff: Türkei'], [320, 110, 'Nähen: Bangladesch'], [270, 175, 'Waschen: Pakistan'], [120, 190, 'Verkauf: Deutschland']]; for (var i = 0; i < p.length; i++) { s += C(p[i][0], p[i][1], 8, '#1565c0') + T(p[i][0], p[i][1] - 13, p[i][2], { s: 9, b: 1 }); if (i < p.length - 1) s += A(p[i][0], p[i][1], p[i + 1][0], p[i + 1][1], '#e53935', 1.5); } return s; })() +
    T(200, 125, 'bis zu 50 000 km', { s: 11, b: 1, c: '#c62828' }) + T(200, 140, 'Globalisierung', { s: 10 }));

  D['erd9-06'] = S('#fff3e0',
    T(200, 18, 'Australien (schematisch)', { s: 13, b: 1 }) +
    P('M60 90 Q80 50 150 55 Q200 40 240 60 Q290 50 320 80 Q350 110 330 150 Q310 190 250 185 Q200 200 150 180 Q90 175 70 140 Q45 120 60 90Z', '#ffcc80', '#e65100', 2) +
    E(195, 120, 70, 40, '#e6a15a').replace('/>', ' opacity=".7"/>') + T(195, 118, 'Outback', { s: 11, b: 1 }) + T(195, 132, 'trocken, wenig Menschen', { s: 8 }) + C(195, 150, 6, '#bf360c') + T(205, 154, 'Uluru', { s: 8, a: 'start' }) +
    C(310, 160, 4, '#1565c0') + T(318, 164, 'Sydney', { s: 9, a: 'start' }) + C(265, 185, 4, '#1565c0') + T(268, 200, 'Melbourne', { s: 9 }) + C(75, 135, 4, '#1565c0') + T(70, 150, 'Perth', { s: 9, a: 'end' }) +
    P('M300 60 Q330 75 345 110', 'none', '#26c6da', 6) + T(355, 75, 'Great Barrier', { s: 9, a: 'start' }).replace('x="355"', 'x="318"').replace('y="75"', 'y="45"') + T(318, 57, 'Reef', { s: 9, a: 'start' }) +
    T(60, 200, 'Menschen leben meist an der Küste', { s: 9, a: 'start' }).replace('x="60"', 'x="10"'));

  // Klasse 10
  D['erd10-01'] = S('#fff',
    T(200, 18, 'Die Erde wird wärmer (schematisch)', { s: 13, b: 1 }) + Z.Ax(50, 180, 320, 140, '', 'Temperatur') +
    P('M50 160 L80 158 L110 162 L140 156 L170 158 L200 152 L230 150 L260 140 L290 128 L320 112 L350 92 L370 80', 'none', '#e53935', 3) + Ln(50, 158, 370, 158, '#999', 1, '4 3') +
    T(55, 195, '1850', { s: 9 }) + T(200, 195, '1950', { s: 9 }) + T(365, 195, 'heute', { s: 9 }) + A(375, 156, 375, 84, '#c62828', 1.5) + T(380, 120, '+1,2 °C', { s: 10, b: 1, a: 'start' }).replace('x="380"', 'x="336"').replace('y="120"', 'y="130"') +
    T(150, 60, 'Ursache: CO₂ aus Kohle,', { s: 10 }) + T(150, 74, 'Öl und Gas', { s: 10 }) + T(150, 100, 'Paris 2015: unter 2 °C,', { s: 10, b: 1 }) + T(150, 114, 'möglichst 1,5 °C', { s: 10, b: 1 }));

  D['erd10-02'] = S('#e8f5e9',
    T(200, 18, 'Drei Säulen der Nachhaltigkeit', { s: 13, b: 1 }) +
    R(60, 50, 280, 18, '#795548', null, 4) + T(200, 63, 'Nachhaltige Entwicklung', { s: 10, b: 1, c: '#fff' }) +
    R(80, 72, 50, 100, '#81c784') + R(175, 72, 50, 100, '#ffb74d') + R(270, 72, 50, 100, '#64b5f6') + R(60, 172, 280, 12, '#795548', null, 4) +
    T(105, 125, 'Umwelt', { s: 10, b: 1 }).replace('y="125"', 'y="125"') + T(200, 125, 'Wirtschaft', { s: 9, b: 1 }) + T(295, 125, 'Soziales', { s: 10, b: 1 }) +
    T(200, 205, 'Heute gut leben, ohne die Zukunft zu gefährden', { s: 10 }));

  D['erd10-03'] = S('#fff3e0',
    T(200, 18, 'Push- und Pull-Faktoren der Migration', { s: 13, b: 1 }) +
    K(20, 50, 130, 130, '', '#ffcdd2') + T(85, 70, 'Herkunftsland', { s: 10, b: 1 }) + T(85, 95, 'Krieg', { s: 9 }) + T(85, 110, 'Armut', { s: 9 }) + T(85, 125, 'Verfolgung', { s: 9 }) + T(85, 140, 'Dürre', { s: 9 }) + T(85, 165, 'PUSH', { s: 11, b: 1, c: '#c62828' }) +
    K(250, 50, 130, 130, '', '#c8e6c9') + T(315, 70, 'Zielland', { s: 10, b: 1 }) + T(315, 95, 'Sicherheit', { s: 9 }) + T(315, 110, 'Arbeit', { s: 9 }) + T(315, 125, 'Bildung', { s: 9 }) + T(315, 140, 'Familie', { s: 9 }) + T(315, 165, 'PULL', { s: 11, b: 1, c: '#2e7d32' }) +
    A(155, 115, 245, 115, '#555', 3) + T(200, 105, 'Migration', { s: 10, b: 1 }) + T(200, 205, 'freiwillig oder erzwungen (Flucht)', { s: 9 }));

  D['erd10-04'] = S('#fff',
    T(200, 18, 'Klimabelastung pro Person und km (ungefähr)', { s: 13, b: 1 }) +
    (function () { var s = '', d = [['Fahrrad', 2, '#43a047'], ['Fernzug', 12, '#66bb6a'], ['Bus', 25, '#9ccc65'], ['Auto (1 Person)', 70, '#ffa726'], ['Flugzeug (kurz)', 100, '#e53935']]; d.forEach(function (x, i) { var y = 45 + i * 30; s += T(110, y + 14, x[0], { s: 10, a: 'end', b: 1 }) + R(118, y, Math.max(3, x[1] * 2.6), 20, x[2], null, 4); }); return s; })() +
    T(200, 205, 'Werte relativ zueinander, nicht maßstäblich genau', { s: 8 }));

  D['erd10-05'] = S('#eceff1',
    T(200, 18, 'Naturgefahr und Risiko', { s: 13, b: 1 }) +
    K(20, 60, 100, 40, 'Gefahr', '#ffcdd2', { b: 1 }) + T(70, 115, 'Beben, Sturm, Flut', { s: 9 }) + T(140, 86, '×', { s: 18, b: 1 }) + K(160, 60, 110, 40, 'Verwundbarkeit', '#ffe0b2', { b: 1, s: 10 }) + T(215, 115, 'Häuser, Warnung, Hilfe', { s: 9 }) + T(290, 86, '=', { s: 18, b: 1 }) + K(305, 60, 85, 40, 'Risiko', '#e1bee7', { b: 1 }) +
    (function () { var s = ''; for (var i = 0; i < 4; i++) s += P('M' + (70 + i * 2) + ' 175 m-' + (30 - i * 7) + ' 0 a' + (30 - i * 7) + ' ' + (14 - i * 3) + ' 0 1 1 ' + 2 * (30 - i * 7) + ' 0', 'none', '#607d8b', 2); return s; })() + T(70, 205, 'Wirbelsturm', { s: 9 }) +
    T(270, 150, 'Vorsorge:', { s: 10, b: 1 }) + T(270, 165, 'Warnsysteme, Deiche,', { s: 9 }) + T(270, 178, 'sichere Bauweise', { s: 9 }) + T(270, 195, 'Warn-App NINA', { s: 9 }));

  D['erd10-06'] = S('#e8eaf6',
    T(200, 18, 'Meilensteine der Europäischen Union', { s: 13, b: 1 }) + Ln(20, 110, 380, 110, '#3949ab', 4) +
    (function () { var s = '', d = [[1951, 'Montanunion'], [1957, 'Römische Verträge'], [1993, 'EU gegründet'], [2002, 'Euro-Bargeld'], [2004, 'Osterweiterung'], [2020, 'Brexit']]; d.forEach(function (x, i) { var X = 40 + i * 64, up = i % 2 === 0; s += C(X, 110, 7, '#ffeb3b', '#3949ab') + T(X, up ? 90 : 138, x[0], { s: 11, b: 1 }) + T(X, up ? 74 : 152, x[1], { s: 8 }); }); return s; })() +
    T(200, 190, '27 Länder · Binnenmarkt · Reisen ohne Grenzkontrollen', { s: 10 }) + T(200, 205, 'Europäisches Parlament wird von den Bürgern gewählt', { s: 9 }));

  // Klasse 11
  D['erd11-01'] = S('#fff8e1',
    T(200, 18, 'Plattengrenzen im Querschnitt', { s: 13, b: 1 }) +
    R(10, 100, 120, 20, '#8d6e63') + R(10, 120, 120, 60, '#ff8a65') + P('M60 120 L70 100 L80 120Z', '#ff5722') + A(55, 110, 25, 110, '#333', 2) + A(85, 110, 115, 110, '#333', 2) + T(70, 80, 'divergent', { s: 10, b: 1 }) + T(70, 195, 'Rücken, Island', { s: 8 }) +
    R(140, 100, 120, 80, '#ff8a65') + P('M140 100 L200 100 L240 170 L230 175 L190 110 L140 110Z', '#0288d1') + P('M200 100 L260 100 L260 115 L215 115Z', '#8d6e63') + P('M215 100 L225 80 L235 100Z', '#6d4c41') + A(160, 95, 190, 95, '#333', 2) + T(200, 74, 'Subduktion', { s: 10, b: 1 }) + T(200, 195, 'Tiefseegraben, Anden', { s: 8 }) +
    R(270, 120, 120, 60, '#ff8a65') + P('M270 120 L325 120 L330 80 L335 120 L390 120 L390 110 L340 110 L330 75 L320 110 L270 110Z', '#8d6e63') + A(285, 105, 312, 105, '#333', 2) + A(375, 105, 348, 105, '#333', 2) + T(330, 64, 'Kollision', { s: 10, b: 1 }) + T(330, 195, 'Faltengebirge: Himalaya', { s: 8 }));

  D['erd11-02'] = S('#e3f2fd',
    T(200, 18, 'Globale Luftzirkulation (Nordhalbkugel)', { s: 13, b: 1 }) + R(20, 185, 360, 8, '#a1887f') +
    (function () { var s = ''; [[30, 130, '#ef9a9a'], [130, 230, '#ffe082'], [230, 330, '#90caf9']].forEach(function (c) { s += P('M' + c[0] + ' 175 L' + c[0] + ' 60 L' + c[1] + ' 60 L' + c[1] + ' 175 Z', 'none', '#607d8b', 2).replace('stroke-width="2"', 'stroke-width="2" stroke-dasharray="0"'); }); return s; })() +
    A(30, 170, 30, 70, '#e53935', 2.5) + A(130, 70, 130, 170, '#1e88e5', 2.5) + A(120, 178, 40, 178, '#555', 2) + A(40, 62, 120, 62, '#555', 1.5) +
    A(230, 170, 230, 70, '#e53935', 2.5) + A(140, 178, 220, 178, '#555', 2) + A(330, 70, 330, 170, '#1e88e5', 2.5) + A(320, 178, 240, 178, '#555', 2) +
    T(30, 205, 'Äquator', { s: 9, b: 1 }) + T(130, 205, '30°: Wüsten', { s: 9, b: 1 }) + T(230, 205, '60°: Tiefs', { s: 9, b: 1 }) + T(330, 205, 'Pol', { s: 9, b: 1 }) +
    T(80, 120, 'Passat', { s: 9 }) + T(180, 120, 'Westwinde', { s: 9 }) + T(280, 120, 'Ostwinde', { s: 9 }) + T(360, 40, 'aufsteigend = Regen · absinkend = trocken', { s: 9, a: 'end' }));

  D['erd11-03'] = S('#fff',
    T(200, 18, 'Klimadiagramm lesen: gemäßigtes Klima', { s: 13, b: 1 }) +
    klima(50, 185, 200, 140, [2, 3, 6, 10, 14, 17, 19, 18, 15, 11, 6, 3], [75, 60, 70, 55, 65, 80, 85, 75, 65, 70, 80, 85], '') +
    T(330, 55, 'Temperaturkurve unter', { s: 9 }) + T(330, 67, 'den Säulen → humid', { s: 9, b: 1, c: '#1565c0' }) + T(330, 100, 'milde Winter,', { s: 9 }) + T(330, 112, 'mäßig warme Sommer', { s: 9 }) + T(330, 145, 'Niederschlag', { s: 9 }) + T(330, 157, 'das ganze Jahr', { s: 9 }) + T(150, 212, 'Werte gerundet, typisch für Westdeutschland', { s: 8 }));

  D['erd11-04'] = S('#0d47a1',
    T(200, 18, 'Golfstrom und globales Förderband', { s: 13, b: 1, c: '#fff' }) +
    P('M60 170 Q100 120 160 110 Q240 95 300 60', 'none', '#ef5350', 8) + A(290, 66, 305, 57, '#ef5350', 3) + P('M305 75 Q240 120 170 150 Q120 170 90 195', 'none', '#42a5f5', 6) + A(98, 189, 88, 197, '#42a5f5', 3) +
    T(130, 100, 'warm, an der Oberfläche', { s: 10, b: 1, c: '#ffcdd2' }) + T(240, 160, 'kalt, in der Tiefe', { s: 10, b: 1, c: '#bbdefb' }) +
    T(330, 50, 'Europa', { s: 11, b: 1, c: '#fff' }) + T(330, 64, 'milde Winter', { s: 9, c: '#fff' }) + T(50, 190, 'Karibik', { s: 10, b: 1, c: '#fff' }) +
    T(340, 120, 'Wasser kühlt ab,', { s: 9, c: '#fff' }) + T(340, 132, 'sinkt in die Tiefe', { s: 9, c: '#fff' }));

  D['erd11-05'] = S('#efebe9',
    T(200, 18, 'Bodenprofil und Sphären', { s: 13, b: 1 }) +
    R(30, 40, 120, 18, '#4caf50') + R(30, 58, 120, 40, '#4e342e') + R(30, 98, 120, 50, '#a1887f') + R(30, 148, 120, 50, '#9e9e9e') + C(60, 170, 10, '#757575') + C(110, 180, 14, '#757575') +
    T(160, 80, 'Humus (A)', { s: 10, b: 1, a: 'start' }) + T(160, 126, 'Unterboden (B)', { s: 10, b: 1, a: 'start' }) + T(160, 176, 'Gestein (C)', { s: 10, b: 1, a: 'start' }) +
    C(320, 85, 32, '#bbdefb').replace('/>', ' opacity=".8"/>') + C(350, 125, 32, '#c8e6c9').replace('/>', ' opacity=".8"/>') + C(290, 125, 32, '#d7ccc8').replace('/>', ' opacity=".8"/>') +
    T(320, 75, 'Luft,', { s: 8 }) + T(320, 85, 'Wasser', { s: 8 }) + T(358, 135, 'Leben', { s: 8 }) + T(282, 135, 'Boden', { s: 8 }) + T(320, 180, 'alles hängt zusammen', { s: 9, b: 1 }));

  // Klasse 12
  D['erd12-01'] = S('#eceff1',
    T(200, 18, 'Stadtmodelle', { s: 13, b: 1 }) +
    C(70, 110, 55, '#c8e6c9') + C(70, 110, 38, '#ffe0b2') + C(70, 110, 20, '#ffcdd2') + T(70, 185, 'Ringmodell', { s: 10, b: 1 }) +
    (function () { var s = C(200, 110, 55, '#c8e6c9'), c = ['#ffe0b2', '#cfd8dc', '#ffe0b2', '#bbdefb', '#ffe0b2', '#cfd8dc']; for (var i = 0; i < 6; i++) { var a1 = i * Math.PI / 3, a2 = a1 + Math.PI / 3; s += P('M200 110 L' + (200 + 55 * Math.cos(a1)).toFixed(1) + ' ' + (110 + 55 * Math.sin(a1)).toFixed(1) + ' A55 55 0 0 1 ' + (200 + 55 * Math.cos(a2)).toFixed(1) + ' ' + (110 + 55 * Math.sin(a2)).toFixed(1) + 'Z', c[i], '#fff', 1.5); } return s + C(200, 110, 12, '#ffcdd2'); })() + T(200, 185, 'Sektorenmodell', { s: 10, b: 1 }) +
    R(275, 55, 110, 110, '#c8e6c9', null, 8) + C(305, 85, 14, '#ffcdd2') + C(350, 100, 12, '#ffcdd2') + C(320, 140, 12, '#ffcdd2') + E(360, 145, 16, 10, '#cfd8dc') + T(330, 185, 'Mehrkernmodell', { s: 10, b: 1 }) + T(330, 198, '(z. B. Ruhrgebiet)', { s: 8 }) +
    T(200, 210, 'rot: Zentrum · orange: Wohnen · grau: Gewerbe', { s: 8 }));

  D['erd12-02'] = S('#fff8e1',
    T(200, 18, 'Zentrale Orte nach Christaller', { s: 13, b: 1 }) +
    (function () { function hex(cx, cy, r, c) { var p = []; for (var k = 0; k < 6; k++) { var a = k * Math.PI / 3; p.push((cx + r * Math.cos(a)).toFixed(1) + ',' + (cy + r * Math.sin(a)).toFixed(1)); } return '<polygon points="' + p.join(' ') + '" fill="none" stroke="' + c + '" stroke-width="2"/>'; }
      var s = hex(130, 115, 85, '#e65100'); for (var k = 0; k < 6; k++) { var a = k * Math.PI / 3 + Math.PI / 6; s += hex(130 + 50 * Math.cos(a), 115 + 50 * Math.sin(a), 28, '#1e88e5') + C(130 + 50 * Math.cos(a), 115 + 50 * Math.sin(a), 6, '#1e88e5'); } return s + C(130, 115, 10, '#e65100'); })() +
    C(260, 70, 10, '#e65100') + T(278, 74, 'Oberzentrum: Uni, Klinik', { s: 9, a: 'start' }) + C(260, 110, 6, '#1e88e5') + T(278, 114, 'Mittelzentrum: Krankenhaus', { s: 9, a: 'start' }) + C(260, 150, 3, '#555') + T(278, 154, 'Grundzentrum: Arzt', { s: 9, a: 'start' }) +
    T(200, 205, 'Ziel: gleichwertige Lebensverhältnisse überall', { s: 10 }));

  D['erd12-03'] = S('#e3f2fd',
    T(200, 18, 'Welthandel am Beispiel Deutschland', { s: 13, b: 1 }) +
    C(200, 115, 30, '#ffe082', '#f57f17') + T(200, 119, 'D', { s: 14, b: 1 }) +
    A(232, 100, 330, 60, '#2e7d32', 2.5) + T(330, 50, 'Autos', { s: 9, b: 1, c: '#2e7d32' }) + A(232, 115, 340, 115, '#2e7d32', 2.5) + T(345, 108, 'Maschinen', { s: 9, b: 1, c: '#2e7d32' }) + A(232, 130, 330, 170, '#2e7d32', 2.5) + T(330, 185, 'Chemie', { s: 9, b: 1, c: '#2e7d32' }) +
    A(70, 60, 168, 100, '#c62828', 2.5) + T(70, 50, 'Erdöl, Gas', { s: 9, b: 1, c: '#c62828' }) + A(60, 115, 168, 115, '#c62828', 2.5) + T(40, 105, 'Elektronik', { s: 9, b: 1, c: '#c62828' }) + A(70, 170, 168, 130, '#c62828', 2.5) + T(70, 185, 'Kaffee, Kakao', { s: 9, b: 1, c: '#c62828' }) +
    T(115, 210, '← Import', { s: 10, b: 1, c: '#c62828' }) + T(285, 210, 'Export →', { s: 10, b: 1, c: '#2e7d32' }));

  D['erd12-04'] = S('#fff3e0',
    T(200, 18, 'Konflikt um Wasser: Beispiel Nil', { s: 13, b: 1 }) +
    P('M330 190 Q300 150 260 140 Q200 120 160 90 Q130 60 120 35', 'none', '#1e88e5', 6) + R(282, 140, 20, 10, '#616161') +
    T(345, 185, 'Äthiopien', { s: 10, b: 1 }) + T(345, 199, 'flussaufwärts', { s: 8 }) + L(292, 140, 330, 120, 'Staudamm', 'start') + T(205, 155, 'Sudan', { s: 10, b: 1 }) + T(95, 60, 'Ägypten', { s: 10, b: 1 }) + T(95, 74, 'flussabwärts', { s: 8 }) + T(120, 28, 'Mittelmeer', { s: 8, a: 'end' }).replace('x="120"', 'x="112"') +
    T(80, 140, 'Wer oben staut,', { s: 9 }) + T(80, 152, 'bestimmt, wie viel', { s: 9 }) + T(80, 164, 'unten ankommt', { s: 9 }) + T(200, 212, 'Lösung: Verträge und Zusammenarbeit', { s: 10, b: 1 }));

  D['erd12-05'] = S('#fff',
    T(200, 18, 'Modell des demografischen Übergangs', { s: 13, b: 1 }) + Z.Ax(40, 180, 340, 145, 'Zeit', 'Rate') +
    P('M40 55 L120 55 Q180 60 230 120 Q260 150 380 155', 'none', '#1e88e5', 3) + P('M40 60 Q90 62 110 100 Q140 140 200 145 L380 148', 'none', '#e53935', 3) +
    P('M110 100 L110 58 Q180 60 230 120 L200 145 Q140 140 110 100Z', '#c5e1a5').replace('/>', ' opacity=".5"/>') +
    (function () { var s = ''; [40, 110, 200, 270, 330].forEach(function (x, i) { s += Ln(x, 40, x, 180, '#bbb', 1, '3 3') + T(x + 20, 195, (i + 1), { s: 10, b: 1 }); }); return s; })() +
    T(330, 50, 'Geburten', { s: 9, c: '#1565c0', b: 1 }) + T(330, 64, 'Sterbefälle', { s: 9, c: '#c62828', b: 1 }) + T(170, 100, 'starkes', { s: 9 }) + T(170, 112, 'Wachstum', { s: 9 }) + T(200, 212, 'Phasen 1–5', { s: 9 }));

  // Klasse 13
  D['erd13-01'] = S('#fff',
    T(200, 18, 'Ungleichheit messen: Lorenzkurve', { s: 13, b: 1 }) + Z.Ax(50, 190, 170, 160, 'Bevölkerung %', 'Einkommen %') +
    Ln(50, 190, 210, 35, '#43a047', 2, '5 3') + P('M50 190 Q160 185 210 35', 'none', '#e53935', 3) + P('M50 190 Q160 185 210 35 L50 190Z', '#ffcdd2').replace('/>', ' opacity=".5"/>') +
    T(110, 110, 'völlige', { s: 9, c: '#2e7d32' }) + T(110, 122, 'Gleichheit', { s: 9, c: '#2e7d32' }) + T(175, 160, 'Realität', { s: 9, c: '#c62828', b: 1 }) +
    T(310, 60, 'Gini-Koeffizient', { s: 11, b: 1 }) + T(310, 78, '0 = alle gleich', { s: 10 }) + T(310, 94, '1 = einer hat alles', { s: 10 }) + T(310, 130, 'Erklärungen:', { s: 10, b: 1 }) + T(310, 146, 'Modernisierung', { s: 9 }) + T(310, 160, 'oder Dependenz', { s: 9 }));

  D['erd13-02'] = S('#e8f5e9',
    T(200, 18, 'Strategien der Nachhaltigkeit', { s: 13, b: 1 }) +
    C(90, 100, 42, '#c8e6c9', '#2e7d32') + T(90, 98, 'Effizienz', { s: 10, b: 1 }) + T(90, 112, 'weniger Energie', { s: 8 }) + T(90, 160, 'z. B. LED, Dämmung', { s: 9 }) +
    C(200, 100, 42, '#bbdefb', '#1565c0') + T(200, 98, 'Konsistenz', { s: 10, b: 1 }) + T(200, 112, 'Kreisläufe', { s: 8 }) + T(200, 160, 'z. B. Recycling, Solar', { s: 9 }) +
    C(310, 100, 42, '#ffe0b2', '#e65100') + T(310, 98, 'Suffizienz', { s: 10, b: 1 }) + T(310, 112, 'weniger verbrauchen', { s: 8 }) + T(310, 160, 'z. B. teilen, Rad', { s: 9 }) +
    T(200, 200, 'Agenda 2030: 17 Ziele · planetare Grenzen beachten', { s: 10 }));

  D['erd13-03'] = S('#eceff1',
    T(200, 18, 'GIS: Karten in Schichten', { s: 13, b: 1 }) +
    (function () { var s = '', l = [['Hochwasser', '#90caf9'], ['Gebäude', '#ffcc80'], ['Straßen', '#bdbdbd'], ['Gelände / Höhen', '#a5d6a7']]; l.forEach(function (x, i) { var y = 50 + i * 36; s += '<polygon points="60,' + (y + 20) + ' 180,' + y + ' 300,' + (y + 20) + ' 180,' + (y + 40) + '" fill="' + x[1] + '" stroke="#607d8b" opacity=".9"/>' + T(310, y + 24, x[0], { s: 10, a: 'start', b: 1 }); }); return s; })() +
    T(130, 205, 'Welche Häuser liegen im Hochwassergebiet?', { s: 9 }) + T(340, 205, 'Satellit + GPS', { s: 9 }));

  D['erd13-04'] = S('#fff8e1',
    T(200, 18, 'Wirkungsgefüge: Abholzung im Regenwald', { s: 13, b: 1 }) +
    K(140, 35, 120, 30, 'Abholzung', '#ffcdd2', { b: 1 }) + K(10, 95, 115, 30, 'weniger CO₂-Speicher', '#fff', { s: 9 }) + K(142, 95, 116, 30, 'Boden ungeschützt', '#fff', { s: 9 }) + K(275, 95, 115, 30, 'Arten verschwinden', '#fff', { s: 9 }) +
    K(10, 160, 115, 30, 'Klimawandel', '#ffe0b2', { s: 10, b: 1 }) + K(142, 160, 116, 30, 'Erosion, Hochwasser', '#ffe0b2', { s: 9 }) + K(275, 160, 115, 30, 'Indigene verlieren Land', '#ffe0b2', { s: 9 }) +
    A(160, 67, 70, 93) + A(200, 67, 200, 93) + A(240, 67, 330, 93) + A(68, 127, 68, 158) + A(200, 127, 200, 158) + A(332, 127, 332, 158) +
    T(200, 210, 'Ursache → Folge → Folgefolge', { s: 10, b: 1 }));

  D['erd13-05'] = S(BG,
    T(200, 18, 'Abitur Erdkunde: die großen Themen', { s: 13, b: 1 }) +
    C(200, 115, 34, '#fff', '#6b4420') + T(200, 112, 'Abitur', { b: 1 }) + T(200, 125, 'Erdkunde', { s: 10 }) +
    K(15, 40, 120, 30, 'Landwirtschaft', '#e6d3bd', { b: 1, s: 10 }) + K(265, 40, 120, 30, 'Industrie, Wandel', '#e6d3bd', { s: 10 }) + K(15, 160, 120, 30, 'Stadt, Bevölkerung', '#e6d3bd', { s: 10 }) + K(265, 160, 120, 30, 'Klima, Naturgefahren', '#e6d3bd', { s: 10 }) + K(145, 178, 110, 28, 'Globalisierung', '#e6d3bd', { b: 1, s: 10 }) +
    Ln(170, 100, 135, 70, '#6b4420', 1.5) + Ln(230, 100, 265, 70, '#6b4420', 1.5) + Ln(170, 130, 135, 160, '#6b4420', 1.5) + Ln(230, 130, 265, 160, '#6b4420', 1.5) + Ln(200, 149, 200, 178, '#6b4420', 1.5) +
    T(75, 110, 'verorten', { s: 10, b: 1 }) + T(75, 124, 'mit Atlas', { s: 10 }) + T(325, 110, 'mit M1, M2', { s: 10, b: 1 }) + T(325, 124, 'belegen', { s: 10 }));
})();
