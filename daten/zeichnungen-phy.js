// Physik Klasse 6 bis 13 – Schaubilder
(function () {
  var Z = window.ZH, D = window.ZEICHNUNGEN, S = Z.S, T = Z.T, L = Z.L, A = Z.A, K = Z.K, C = Z.C, E = Z.E, R = Z.R, P = Z.P, Ln = Z.Ln;
  var B = '#e8eefb';
  function sinus(x0, y0, w, amp, n, c, sw) { var d = ''; for (var i = 0; i <= 80; i++) { var x = x0 + w * i / 80, y = y0 - amp * Math.sin(i / 80 * n * 2 * Math.PI); d += (i ? ' L' : 'M') + x.toFixed(1) + ' ' + y.toFixed(1); } return P(d, 'none', c || '#1565c0', sw || 2.5); }
  function batt(x, y) { return Ln(x, y - 14, x, y + 14, '#333', 2) + Ln(x + 8, y - 7, x + 8, y + 7, '#333', 4) + T(x - 6, y - 16, '+', { s: 11, b: 1 }) + T(x + 14, y - 10, '−', { s: 11, b: 1 }); }
  function lampe(x, y, r) { r = r || 11; return C(x, y, r, '#fff', '#333') + Ln(x - r * 0.7, y - r * 0.7, x + r * 0.7, y + r * 0.7, '#333', 1.5) + Ln(x - r * 0.7, y + r * 0.7, x + r * 0.7, y - r * 0.7, '#333', 1.5); }
  function messer(x, y, b) { return C(x, y, 11, '#fff', '#333') + T(x, y + 4, b, { s: 11, b: 1 }); }

  // Klasse 6
  D['phy6-01'] = S('#fff3e0',
    T(200, 18, 'Drei Wege der Wärme', { s: 13, b: 1 }) +
    P('M30 110 L40 170 L100 170 L110 110Z', '#ffccbc', '#bf360c', 1.5) + R(32, 112, 76, 14, '#8d6e63') + Ln(70, 120, 120, 50, '#9e9e9e', 5) +
    A(80, 105, 108, 62, '#e53935', 1.5) + T(70, 190, 'Leitung', { b: 1 }) + T(70, 204, 'durch Stoffe (Metall)', { s: 9 }) +
    R(155, 150, 90, 24, '#cfd8dc', '#607d8b', 3) + (function () { var s = ''; for (var i = 0; i < 6; i++) s += Ln(162 + i * 15, 152, 162 + i * 15, 172, '#90a4ae', 2); return s; })() +
    P('M170 145 Q160 100 185 70 Q210 45 230 70 Q245 100 230 145', 'none', '#ef5350', 2) + A(184, 72, 196, 60, '#ef5350') + A(232, 120, 230, 140, '#42a5f5') +
    T(200, 190, 'Strömung', { b: 1 }) + T(200, 204, 'warme Luft steigt auf', { s: 9 }) +
    Z.Sonne(300, 60, 16) + A(310, 78, 330, 140, '#ff9800', 2) + A(292, 80, 300, 140, '#ff9800', 2) + E(330, 152, 34, 10, '#ffcc80') +
    T(330, 190, 'Strahlung', { b: 1 }) + T(330, 204, 'auch durch das Weltall', { s: 9 }));

  D['phy6-02'] = S(B,
    T(200, 18, 'Aggregatzustände im Teilchenmodell', { s: 13, b: 1 }) +
    (function () {
      var s = R(20, 70, 90, 80, '#e3f2fd', '#1565c0', 6) + R(155, 70, 90, 80, '#e3f2fd', '#1565c0', 6) + R(290, 70, 90, 80, '#e3f2fd', '#1565c0', 6);
      for (var r = 0; r < 5; r++) for (var c = 0; c < 6; c++) s += C(32 + c * 13, 82 + r * 14, 5.5, '#42a5f5');
      [[168, 128], [180, 135], [195, 126], [208, 136], [222, 128], [234, 137], [172, 112], [186, 118], [200, 110], [214, 119], [230, 112], [178, 98], [205, 96], [226, 100]].forEach(function (p) { s += C(p[0], p[1], 5.5, '#42a5f5'); });
      [[300, 80], [350, 90], [320, 120], [365, 135], [305, 140], [340, 110]].forEach(function (p) { s += C(p[0], p[1], 5.5, '#42a5f5') + A(p[0], p[1], p[0] + 12, p[1] - 8, '#90a4ae', 1); });
      return s + T(65, 168, 'fest', { b: 1 }) + T(65, 182, 'Eis: geordnet', { s: 9 }) + T(200, 168, 'flüssig', { b: 1 }) + T(200, 182, 'Wasser: beweglich', { s: 9 }) + T(335, 168, 'gasförmig', { b: 1 }) + T(335, 182, 'Dampf: frei', { s: 9 });
    })() +
    A(112, 95, 152, 95, '#e53935') + T(132, 88, 'schmelzen', { s: 9 }) + A(152, 125, 112, 125, '#1e88e5') + T(132, 140, 'erstarren', { s: 9 }) +
    A(247, 95, 287, 95, '#e53935') + T(267, 88, 'verdampfen', { s: 9 }) + A(287, 125, 247, 125, '#1e88e5') + T(267, 140, 'kondensieren', { s: 9 }) +
    T(200, 205, 'Wärme zuführen → Teilchen bewegen sich schneller', { s: 10 }));

  D['phy6-03'] = S('#f5f5f5',
    T(200, 18, 'Reflexionsgesetz', { s: 13, b: 1 }) +
    R(60, 170, 280, 10, '#90caf9', '#1565c0') + (function () { var s = ''; for (var i = 0; i < 14; i++) s += Ln(66 + i * 20, 180, 58 + i * 20, 190, '#1565c0', 1); return s; })() +
    Ln(200, 170, 200, 50, '#888', 1.5, '5 4') + T(200, 44, 'Lot', { s: 10 }) +
    A(90, 60, 198, 168, '#e53935', 2.5) + A(200, 170, 308, 62, '#e53935', 2.5) +
    P('M200 130 A40 40 0 0 0 172 142', 'none', '#43a047', 2) + P('M200 130 A40 40 0 0 1 228 142', 'none', '#43a047', 2) +
    T(184, 122, 'α', { s: 14, b: 1, c: '#2e7d32' }) + T(218, 122, 'α′', { s: 14, b: 1, c: '#2e7d32' }) +
    T(90, 54, 'einfallender Strahl', { s: 10 }) + T(318, 54, 'reflektierter Strahl', { s: 10 }) + T(345, 175, 'Spiegel', { s: 10, a: 'start' }) +
    T(200, 210, 'Einfallswinkel = Reflexionswinkel', { s: 11, b: 1 }));

  D['phy6-04'] = S('#e0f7fa',
    T(100, 18, 'Brechung', { s: 13, b: 1 }) + T(300, 18, 'Sammellinse', { s: 13, b: 1 }) +
    R(10, 110, 180, 90, '#81d4fa') + T(20, 100, 'Luft', { s: 10, a: 'start' }) + T(20, 195, 'Wasser', { s: 10, a: 'start' }) + Ln(100, 40, 100, 200, '#666', 1, '4 3') +
    A(40, 45, 100, 110, '#e53935', 2.5) + A(100, 110, 130, 195, '#e53935', 2.5) + T(150, 160, 'zum Lot', { s: 9, a: 'start' }) + T(150, 172, 'hin gebrochen', { s: 9, a: 'start' }) +
    P('M300 45 Q325 115 300 185 Q275 115 300 45Z', '#b3e5fc', '#0277bd', 2) + Ln(210, 115, 395, 115, '#888', 1, '4 3') +
    Ln(215, 75, 300, 75, '#ff9800', 2) + Ln(300, 75, 360, 115, '#ff9800', 2) + Ln(215, 115, 360, 115, '#ff9800', 2) + Ln(215, 155, 300, 155, '#ff9800', 2) + Ln(300, 155, 360, 115, '#ff9800', 2) +
    C(360, 115, 4, '#e53935') + T(360, 135, 'Brennpunkt F', { s: 10, b: 1 }) + T(300, 205, 'bündelt Licht: Lupe, Auge, Kamera', { s: 9 }));

  D['phy6-05'] = S('#fff',
    T(200, 18, 'Magnetfeld eines Stabmagneten', { s: 13, b: 1 }) +
    (function () { var s = ''; [20, 38, 58].forEach(function (h) { s += P('M140 115 C140 ' + (115 - h * 2) + ' 260 ' + (115 - h * 2) + ' 260 115', 'none', '#90a4ae', 1.5) + P('M140 115 C140 ' + (115 + h * 2) + ' 260 ' + (115 + h * 2) + ' 260 115', 'none', '#90a4ae', 1.5); }); return s; })() +
    A(198, 75, 206, 75, '#607d8b') + A(198, 37, 206, 37, '#607d8b') + A(206, 155, 198, 155, '#607d8b') +
    R(120, 100, 80, 30, '#e53935', null, 4) + R(200, 100, 80, 30, '#1e88e5', null, 4) + T(160, 120, 'N', { s: 16, b: 1, c: '#fff' }) + T(240, 120, 'S', { s: 16, b: 1, c: '#fff' }) +
    T(60, 80, 'Feldlinien', { s: 10, b: 1 }) + T(60, 94, 'von N nach S', { s: 10 }) + T(340, 80, 'Gleiche Pole:', { s: 10, b: 1 }) + T(340, 94, 'abstoßen', { s: 10 }) + T(340, 150, 'Verschiedene Pole:', { s: 10, b: 1 }) + T(340, 164, 'anziehen', { s: 10 }) +
    T(200, 210, 'magnetisch: Eisen, Nickel, Cobalt', { s: 10 }));

  D['phy6-06'] = S('#fffde7',
    T(110, 18, 'Stromkreis', { s: 13, b: 1 }) + T(300, 18, 'Schaltplan', { s: 13, b: 1 }) +
    R(40, 140, 50, 30, '#ffb300', '#e65100', 4) + R(90, 148, 6, 14, '#e65100') + T(65, 160, '4,5 V', { s: 10, b: 1 }) +
    P('M65 140 L65 60 L105 60 M135 60 L175 60 L175 140 M96 155 L175 155', 'none', '#e53935', 3) + Ln(105, 60, 132, 50, '#333', 3) + C(105, 60, 3, '#333') + C(135, 60, 3, '#333') +
    C(175, 100, 14, '#fff59d', '#f9a825') + Ln(175, 114, 175, 140, '#9e9e9e', 6) + T(120, 44, 'Schalter', { s: 10 }) + T(195, 90, 'Lampe', { s: 10, a: 'start' }) + T(100, 195, 'Strom fließt nur im geschlossenen Kreis', { s: 9 }) +
    P('M250 60 L280 60 M310 60 L360 60 L360 160 L250 160 L250 60', 'none', '#333', 2) + Ln(280, 60, 305, 50, '#333', 2) + batt(300, 160).replace(/Ln\(/g, '') + lampe(360, 110) +
    R(285, 146, 30, 28, '#fffde7') + Ln(296, 146, 296, 174, '#333', 2) + Ln(304, 152, 304, 168, '#333', 4) +
    T(295, 44, 'Schalter', { s: 9 }) + T(300, 190, 'Batterie', { s: 9 }) + T(360, 140, 'Lampe', { s: 9 }));

  // Klasse 7
  D['phy7-01'] = S(B,
    T(200, 18, 'Kräfte als Pfeile', { s: 13, b: 1 }) + R(60, 110, 70, 50, '#ffcc80', '#e65100', 4) + R(0, 160, 200, 6, '#8d6e63') +
    A(130, 135, 190, 135, '#e53935', 3) + T(160, 125, 'F = 20 N', { s: 10, b: 1, c: '#c62828' }) + A(95, 160, 95, 200, '#1e88e5', 3) + T(110, 195, 'Gewichtskraft', { s: 9, a: 'start' }) +
    T(95, 60, 'Länge = Stärke', { s: 10 }) + T(95, 74, 'Spitze = Richtung', { s: 10 }) + T(95, 88, 'Anfang = Angriffspunkt', { s: 10 }) +
    R(285, 30, 30, 10, '#9e9e9e') + R(292, 40, 16, 80, '#fff', '#555', 4) + P('M300 45 l-6 5 l12 6 l-12 6 l12 6 l-12 6 l12 6 l-6 5', 'none', '#555', 1.5) + (function () { var s = ''; for (var i = 0; i < 6; i++) s += Ln(308, 50 + i * 12, 314, 50 + i * 12, '#555', 1) + T(318, 54 + i * 12, i, { s: 8, a: 'start' }); return s; })() +
    Ln(300, 120, 300, 140, '#555', 2) + R(285, 140, 30, 30, '#78909c') + T(300, 190, 'Federkraftmesser', { s: 10, b: 1 }) + T(300, 204, 'misst in Newton (N)', { s: 9 }));

  D['phy7-02'] = S('#fff',
    T(200, 18, 'Gleiches Volumen – verschiedene Masse', { s: 13, b: 1 }) +
    (function () { var s = '', d = [['Kork', '#d7ccc8', '0,2'], ['Holz', '#bcaaa4', '0,5'], ['Wasser', '#81d4fa', '1,0'], ['Aluminium', '#cfd8dc', '2,7'], ['Eisen', '#78909c', '7,9']]; d.forEach(function (x, i) { var X = 30 + i * 72; s += R(X, 60, 50, 50, x[1], '#555', 3) + T(X + 25, 128, x[0], { s: 10, b: 1 }) + T(X + 25, 142, x[2] + ' g/cm³', { s: 9 }) + R(X + 10, 190 - parseFloat(x[2].replace(',', '.')) * 5, 30, parseFloat(x[2].replace(',', '.')) * 5, '#e57373'); }); return s; })() +
    Ln(20, 190, 390, 190, '#333', 1.5) + T(200, 208, 'Dichte = Masse : Volumen   (ρ = m : V)', { s: 11, b: 1 }) + T(200, 160, 'Säulen: Masse von 1 cm³', { s: 9 }));

  D['phy7-03'] = S('#fff8e1',
    T(200, 18, 'Das Hebelgesetz', { s: 13, b: 1 }) +
    '<polygon points="200,150 185,180 215,180" fill="#8d6e63"/>' + R(40, 142, 320, 8, '#a1887f', '#5d4037', 2) +
    R(70, 102, 40, 40, '#e57373', '#c62828', 4) + T(90, 127, '600 N', { s: 10, b: 1, c: '#fff' }) + R(320, 112, 30, 30, '#64b5f6', '#1565c0', 4) + T(335, 132, '300 N', { s: 9, b: 1, c: '#fff' }) +
    Ln(90, 160, 200, 160, '#2e7d32', 2) + Ln(200, 168, 335, 168, '#2e7d32', 2) + T(145, 175, '1 m', { s: 10, b: 1 }) + T(268, 183, '2 m', { s: 10, b: 1 }) +
    A(90, 75, 90, 100, '#c62828', 2.5) + A(335, 85, 335, 110, '#1565c0', 2.5) +
    T(200, 60, '600 N · 1 m = 300 N · 2 m', { s: 12, b: 1, c: '#2e7d32' }) + T(200, 205, 'Kraft × Kraftarm = Last × Lastarm', { s: 11 }));

  D['phy7-04'] = S('#eceff1',
    T(70, 18, 'feste Rolle', { s: 12, b: 1 }) + T(200, 18, 'lose Rolle', { s: 12, b: 1 }) + T(330, 18, 'schiefe Ebene', { s: 12, b: 1 }) +
    R(20, 28, 100, 6, '#555') + Ln(70, 34, 70, 50, '#555', 2) + C(70, 62, 14, '#bdbdbd', '#424242') + Ln(56, 62, 56, 150, '#8d6e63', 2) + Ln(84, 62, 84, 120, '#8d6e63', 2) + R(70, 150, 30, 26, '#78909c').replace('x="70"', 'x="41"') +
    A(84, 120, 84, 150, '#e53935', 2.5) + T(70, 195, 'F = Last', { s: 10, b: 1 }) + T(70, 208, 'nur andere Richtung', { s: 9 }) +
    R(150, 28, 100, 6, '#555') + Ln(186, 34, 186, 120, '#8d6e63', 2) + Ln(214, 34, 214, 120, '#8d6e63', 2).replace('x2="214"', 'x2="214"') + C(200, 120, 14, '#bdbdbd', '#424242') + Ln(200, 134, 200, 148, '#555', 2) + R(185, 148, 30, 26, '#78909c') + A(214, 60, 214, 34, '#e53935', 2.5) +
    T(200, 195, 'F = halbe Last', { s: 10, b: 1 }) + T(200, 208, 'doppelter Seilweg', { s: 9 }) +
    '<polygon points="270,175 390,175 390,95" fill="#bcaaa4"/>' + '<g transform="rotate(-33.7 340 130)">' + R(325, 118, 26, 20, '#78909c') + '</g>' + A(310, 160, 345, 137, '#e53935', 2.5) +
    T(330, 195, 'weniger Kraft,', { s: 10, b: 1 }) + T(330, 208, 'längerer Weg', { s: 9 }));

  D['phy7-05'] = S('#e1f5fe',
    T(200, 18, 'Wasserdruck steigt mit der Tiefe', { s: 13, b: 1 }) +
    R(80, 40, 80, 150, '#fff', '#455a64', 2) + R(82, 55, 76, 133, '#4fc3f7') +
    P('M160 85 Q185 90 195 120', 'none', '#0288d1', 3) + P('M160 125 Q205 130 230 175', 'none', '#0288d1', 3) + P('M160 165 Q235 168 275 200', 'none', '#0288d1', 3) +
    T(205, 105, 'wenig Druck', { s: 9, a: 'start' }) + T(270, 175, 'großer Druck', { s: 9, a: 'start' }) +
    A(60, 60, 60, 180, '#555', 1.5) + T(40, 120, 'Tiefe', { s: 10 }) +
    T(320, 60, 'pro 10 m Tiefe', { s: 10, b: 1 }) + T(320, 74, 'etwa 1 bar mehr', { s: 10 }) + T(320, 110, 'Druck = Kraft : Fläche', { s: 10, b: 1 }) + T(320, 124, 'p = F : A', { s: 10 }));

  D['phy7-06'] = S('#e3f2fd',
    T(200, 18, 'Auftrieb', { s: 13, b: 1 }) + R(20, 80, 230, 120, '#4fc3f7', null, 4) +
    R(105, 100, 50, 50, '#ffcc80', '#e65100', 4) + A(130, 125, 130, 185, '#c62828', 3) + A(130, 125, 130, 60, '#2e7d32', 3) +
    T(140, 180, 'Gewichtskraft', { s: 9, a: 'start', c: '#c62828', b: 1 }) + T(140, 66, 'Auftrieb', { s: 9, a: 'start', c: '#2e7d32', b: 1 }) +
    P('M280 100 L380 100 L365 130 L295 130Z', '#ef5350', '#b71c1c', 1.5) + R(310, 80, 30, 20, '#eceff1', '#90a4ae') + R(270, 115, 125, 85, '#4fc3f7', null, 4) + P('M280 100 L380 100 L365 130 L295 130Z', '#ef5350', '#b71c1c', 1.5) +
    T(330, 150, 'verdrängt viel Wasser', { s: 9 }) + T(200, 212, 'Auftrieb = Gewicht des verdrängten Wassers (Archimedes)', { s: 10, b: 1 }));

  D['phy7-07'] = S('#fff',
    T(200, 18, 'Weg-Zeit-Diagramm', { s: 13, b: 1 }) + Z.Ax(50, 190, 320, 160, 'Zeit t in s', 'Weg s in m') +
    Ln(50, 190, 250, 50, '#e53935', 3) + Ln(50, 190, 360, 110, '#1e88e5', 3) + Ln(50, 190, 360, 175, '#43a047', 3) +
    T(255, 48, 'Auto: schnell', { s: 10, a: 'start', c: '#c62828', b: 1 }) + T(320, 105, 'Rad', { s: 10, c: '#1565c0', b: 1 }) + T(325, 168, 'Fußgänger', { s: 10, c: '#2e7d32', b: 1 }) +
    T(150, 60, 'v = s : t', { s: 14, b: 1 }) + T(150, 76, 'steiler = schneller', { s: 10 }));

  // Klasse 8
  D['phy8-01'] = S('#fffde7',
    T(200, 18, 'Elektrische Ladung', { s: 13, b: 1 }) +
    E(90, 100, 40, 50, '#ef5350') + P('M90 150 l-5 8 h10z', '#c62828') + Ln(90, 158, 92, 200, '#555', 1) +
    (function () { var s = ''; [[70, 80], [95, 75], [110, 100], [80, 110], [100, 125], [75, 135]].forEach(function (p) { s += T(p[0], p[1], '−', { s: 16, b: 1, c: '#fff' }); }); return s; })() + T(90, 210, 'Ballon: negativ', { s: 10, b: 1 }) +
    C(210, 70, 16, '#ef9a9a', '#c62828') + T(210, 76, '+', { s: 16, b: 1, c: '#c62828' }) + C(260, 70, 16, '#90caf9', '#1565c0') + T(260, 75, '−', { s: 18, b: 1, c: '#1565c0' }) + A(228, 70, 240, 70, '#2e7d32', 2) + A(242, 70, 230, 70, '#2e7d32', 2) + T(235, 102, 'ziehen sich an', { s: 10 }) +
    C(210, 150, 16, '#90caf9', '#1565c0') + T(210, 155, '−', { s: 18, b: 1, c: '#1565c0' }) + C(260, 150, 16, '#90caf9', '#1565c0') + T(260, 155, '−', { s: 18, b: 1, c: '#1565c0' }) + A(195, 150, 180, 150, '#c62828', 2) + A(275, 150, 290, 150, '#c62828', 2) + T(235, 182, 'stoßen sich ab', { s: 10 }) +
    T(345, 100, 'Beim Reiben', { s: 10, b: 1 }) + T(345, 114, 'wandern', { s: 10 }) + T(345, 128, 'Elektronen', { s: 10 }));

  D['phy8-02'] = S('#fff',
    T(200, 18, 'Stromstärke und Spannung messen', { s: 13, b: 1 }) +
    P('M80 60 L320 60 L320 180 L80 180 Z', 'none', '#333', 2) + R(70, 105, 20, 30, '#fff') + batt(76, 120) +
    R(185, 50, 30, 20, '#fff') + messer(200, 60, 'A') + R(310, 108, 20, 24, '#fff') + lampe(320, 120) +
    P('M320 95 L365 95 L365 145 L320 145', 'none', '#333', 1.5) + R(355, 108, 20, 24, '#fff') + messer(365, 120, 'V') +
    T(200, 90, 'Amperemeter in Reihe', { s: 10, b: 1 }) + T(200, 104, 'Stromstärke I in Ampere', { s: 9 }) +
    T(250, 160, 'Voltmeter parallel', { s: 10, b: 1 }) + T(250, 174, 'Spannung U in Volt', { s: 9 }).replace('y="174"', 'y="174"') +
    T(200, 205, 'Steckdose 230 V – lebensgefährlich!', { s: 10, c: '#c62828', b: 1 }));

  D['phy8-03'] = S('#f3e5f5',
    T(200, 18, 'Das ohmsche Gesetz', { s: 13, b: 1 }) + Z.Ax(40, 190, 200, 160, 'I in A', 'U in V') +
    Ln(40, 190, 220, 50, '#7b1fa2', 3) + (function () { var s = ''; for (var i = 1; i <= 4; i++) s += C(40 + i * 40, 190 - i * 31, 4, '#7b1fa2'); return s; })() + T(150, 70, 'Gerade:', { s: 10, b: 1 }) + T(150, 84, 'U ~ I', { s: 10 }) +
    '<polygon points="320,45 380,150 260,150" fill="#fff" stroke="#7b1fa2" stroke-width="2"/>' + Ln(282, 110, 358, 110, '#7b1fa2', 2) + Ln(320, 110, 320, 150, '#7b1fa2', 2) +
    T(320, 98, 'U', { s: 18, b: 1 }) + T(298, 138, 'R', { s: 16, b: 1 }) + T(342, 138, 'I', { s: 16, b: 1 }) + T(320, 172, 'U = R · I', { s: 12, b: 1 }) + T(320, 188, 'R = U : I  ·  I = U : R', { s: 10 }));

  D['phy8-04'] = S('#fffde7',
    T(105, 18, 'Reihenschaltung', { s: 12, b: 1 }) + T(300, 18, 'Parallelschaltung', { s: 12, b: 1 }) +
    P('M30 50 L180 50 L180 160 L30 160 Z', 'none', '#333', 2) + R(20, 90, 20, 30, '#fffde7') + batt(26, 105) + R(80, 40, 22, 20, '#fffde7') + lampe(91, 50) + R(130, 40, 22, 20, '#fffde7') + lampe(141, 50) +
    T(105, 185, 'ein Weg · I überall gleich', { s: 9 }) + T(105, 198, 'eine Lampe aus → alle aus', { s: 9, b: 1 }) +
    P('M225 50 L380 50 L380 160 L225 160 Z M300 50 L300 160', 'none', '#333', 2) + R(215, 90, 20, 30, '#fffde7') + batt(221, 105) + R(290, 95, 20, 22, '#fffde7') + lampe(300, 105) + R(370, 95, 20, 22, '#fffde7') + lampe(380, 105) +
    T(300, 185, 'eigene Wege · U überall gleich', { s: 9 }) + T(300, 198, 'eine aus → andere leuchten', { s: 9, b: 1 }));

  D['phy8-05'] = S('#fff',
    T(200, 18, 'Wohin geht die Energie?', { s: 13, b: 1 }) +
    T(100, 40, 'Glühlampe', { s: 11, b: 1 }) + R(20, 60, 60, 80, '#ffca28') + T(50, 104, '100 %', { s: 10, b: 1 }) +
    P('M80 60 L150 60 L150 64 L80 64Z', '#fff59d', '#f9a825', 1) + P('M80 64 Q120 64 150 120 L150 200 L80 140Z', '#ef9a9a') + T(160, 64, '5 % Licht', { s: 9, a: 'start' }) + T(160, 170, '95 % Wärme', { s: 9, a: 'start', c: '#c62828', b: 1 }) +
    T(300, 40, 'LED', { s: 11, b: 1 }) + R(220, 60, 60, 80, '#ffca28') + T(250, 104, '100 %', { s: 10, b: 1 }) +
    P('M280 60 L350 60 L350 92 L280 92Z', '#fff59d', '#f9a825', 1) + P('M280 92 L350 115 L350 165 L280 140Z', '#ef9a9a') + T(315, 80, '~35 % Licht', { s: 9 }) + T(352, 145, 'Wärme', { s: 9, a: 'start', c: '#c62828' }) +
    T(200, 212, 'Leistung P = U · I  ·  Energie E = P · t', { s: 10, b: 1 }));

  D['phy8-06'] = S(B,
    T(200, 18, 'Der Elektromagnet', { s: 13, b: 1 }) +
    R(110, 95, 180, 30, '#9e9e9e', '#616161', 3) + (function () { var s = ''; for (var i = 0; i < 12; i++) s += E(125 + i * 14, 110, 6, 22, 'none', '#d84315').replace('stroke="#d84315"', 'stroke="#d84315" stroke-width="2.5"'); return s; })() +
    (function () { var s = ''; [35, 60].forEach(function (h) { s += P('M110 110 C80 ' + (110 - h) + ' 320 ' + (110 - h) + ' 290 110', 'none', '#90a4ae', 1.2) + P('M110 110 C80 ' + (110 + h) + ' 320 ' + (110 + h) + ' 290 110', 'none', '#90a4ae', 1.2); }); return s; })() +
    T(95, 114, 'N', { s: 14, b: 1, c: '#c62828', a: 'end' }) + T(305, 114, 'S', { s: 14, b: 1, c: '#1565c0', a: 'start' }) +
    P('M125 132 L125 185 L190 185 M210 185 L278 185 L278 132', 'none', '#d84315', 2) + batt(196, 185) +
    L(200, 98, 220, 40, 'Spule mit Eisenkern') + T(70, 175, 'stärker durch:', { s: 9, b: 1 }) + T(70, 188, 'mehr Windungen,', { s: 9 }) + T(70, 200, 'mehr Strom', { s: 9 }) + T(335, 185, 'ein- und aus-', { s: 9 }) + T(335, 197, 'schaltbar', { s: 9 }));

  // Klasse 9
  D['phy9-01'] = S('#e8f5e9',
    T(200, 18, 'Energieumwandlung bei der Achterbahn', { s: 13, b: 1 }) +
    P('M20 60 Q60 50 90 80 Q140 190 200 180 Q260 170 280 110 Q300 70 330 110 Q350 140 390 150', 'none', '#795548', 4) +
    R(40, 46, 26, 14, '#e53935', null, 4) + C(46, 62, 3, '#333') + C(60, 62, 3, '#333') + R(180, 166, 26, 14, '#e53935', null, 4) +
    (function () { function bars(x, y, lage, bew) { return R(x, y - lage, 12, lage, '#42a5f5') + R(x + 14, y - bew, 12, bew, '#ff7043') + Ln(x - 2, y, x + 28, y, '#333', 1); } return bars(40, 120, 50, 2) + bars(185, 140, 3, 50) + bars(300, 140, 30, 22); })() +
    R(110, 196, 10, 8, '#42a5f5') + T(124, 204, 'Lageenergie', { s: 9, a: 'start' }) + R(210, 196, 10, 8, '#ff7043') + T(224, 204, 'Bewegungsenergie', { s: 9, a: 'start' }) +
    T(320, 40, 'Gesamtenergie', { s: 10, b: 1 }) + T(320, 54, 'bleibt gleich', { s: 10 }));

  D['phy9-02'] = S('#fff3e0',
    T(200, 18, 'Hubarbeit und Leistung', { s: 13, b: 1 }) + R(0, 190, 400, 30, '#bcaaa4') +
    R(70, 160, 40, 30, '#78909c') + R(70, 60, 40, 30, '#78909c', null).replace('fill="#78909c"', 'fill="#b0bec5"') + A(90, 155, 90, 96, '#e53935', 3) +
    Ln(130, 190, 130, 75, '#2e7d32', 2) + Ln(124, 190, 136, 190, '#2e7d32', 2) + Ln(124, 75, 136, 75, '#2e7d32', 2) + T(140, 135, 'h = 2 m', { s: 10, a: 'start', b: 1 }) + T(60, 128, 'F = 100 N', { s: 10, a: 'end', c: '#c62828', b: 1 }) +
    T(290, 70, 'Arbeit W = F · s', { s: 12, b: 1 }) + T(290, 88, '100 N · 2 m = 200 J', { s: 10 }) + T(290, 130, 'Leistung P = W : t', { s: 12, b: 1 }) + T(290, 148, '200 J : 4 s = 50 W', { s: 10 }));

  D['phy9-03'] = S('#fff',
    T(100, 18, 'v-t-Diagramm', { s: 12, b: 1 }) + T(300, 18, 's-t-Diagramm', { s: 12, b: 1 }) +
    Z.Ax(25, 190, 165, 150, 't', 'v') + Ln(25, 190, 170, 60, '#e53935', 3) + Ln(25, 120, 170, 120, '#1e88e5', 3) + T(140, 55, 'beschleunigt', { s: 9, c: '#c62828' }) + T(120, 113, 'gleichförmig', { s: 9, c: '#1565c0' }) +
    Z.Ax(220, 190, 170, 150, 't', 's') + P('M220 190 Q320 190 380 55', 'none', '#e53935', 3) + Ln(220, 190, 385, 110, '#1e88e5', 3) + T(360, 70, 'Parabel', { s: 9, c: '#c62828', a: 'end' }) + T(375, 100, 'Gerade', { s: 9, c: '#1565c0', a: 'end' }) +
    T(200, 214, 'a = Δv : Δt  ·  freier Fall: g ≈ 9,81 m/s²', { s: 9, b: 1 }));

  D['phy9-04'] = S(B,
    T(200, 18, 'Die drei Newtonschen Gesetze', { s: 13, b: 1 }) +
    R(20, 70, 100, 50, '#ffca28', '#f57f17', 6) + C(40, 122, 8, '#333') + C(100, 122, 8, '#333') + C(60, 82, 7, '#ffccbc') + Ln(60, 89, 70, 105, '#1565c0', 4) + A(80, 85, 108, 85, '#e53935', 2) + T(70, 150, '1 Trägheit', { b: 1 }) + T(70, 164, 'Bus bremst –', { s: 9 }) + T(70, 176, 'du kippst nach vorn', { s: 9 }) +
    R(160, 85, 60, 35, '#90caf9', '#1565c0', 4) + C(172, 122, 6, '#333') + C(208, 122, 6, '#333') + A(225, 102, 260, 102, '#e53935', 3) + T(243, 94, 'F', { s: 11, b: 1, c: '#c62828' }) + T(200, 150, '2 F = m · a', { b: 1 }) + T(200, 164, 'mehr Masse →', { s: 9 }) + T(200, 176, 'mehr Kraft nötig', { s: 9 }) +
    P('M320 45 Q335 60 335 100 L305 100 Q305 60 320 45Z', '#eceff1', '#607d8b', 1.5) + '<polygon points="305,100 295,115 305,110" fill="#e53935"/>' + '<polygon points="335,100 345,115 335,110" fill="#e53935"/>' +
    P('M310 102 Q320 130 330 102', '#ff9800') + A(320, 60, 320, 35, '#2e7d32', 2) + A(320, 110, 320, 135, '#e53935', 2) + T(330, 150, '3 actio = reactio', { b: 1 }) + T(330, 164, 'Gas nach unten,', { s: 9 }) + T(330, 176, 'Rakete nach oben', { s: 9 }));

  D['phy9-05'] = S('#fff8e1',
    T(200, 18, 'Der Generator', { s: 13, b: 1 }) +
    R(40, 60, 30, 100, '#e53935', null, 4) + R(170, 60, 30, 100, '#1e88e5', null, 4) + T(55, 115, 'N', { s: 14, b: 1, c: '#fff' }) + T(185, 115, 'S', { s: 14, b: 1, c: '#fff' }) +
    '<g transform="rotate(-25 120 110)">' + R(90, 80, 60, 60, 'none', '#d84315').replace('stroke="#d84315"', 'stroke="#d84315" stroke-width="4"') + '</g>' + P('M120 40 A40 12 0 1 1 150 46', 'none', '#555', 1.5) + A(146, 44, 152, 47, '#555', 1.5) +
    Ln(120, 160, 120, 190, '#d84315', 2) + T(120, 205, 'Spule dreht sich', { s: 9 }) +
    A(215, 110, 245, 110) + Ln(255, 110, 390, 110, '#999', 1) + sinus(255, 110, 135, 40, 2, '#2e7d32', 3) + T(320, 175, 'Wechselspannung', { s: 10, b: 1 }) + T(320, 189, '50 Hz in Europa', { s: 9 }));

  D['phy9-06'] = S('#eceff1',
    T(200, 18, 'Der Transformator', { s: 13, b: 1 }) +
    P('M110 50 L290 50 L290 180 L110 180 Z M140 80 L260 80 L260 150 L140 150 Z', '#9e9e9e', '#616161', 1).replace('fill="#9e9e9e"', 'fill="#9e9e9e" fill-rule="evenodd"') +
    (function () { var s = ''; for (var i = 0; i < 8; i++) s += R(100, 60 + i * 14, 50, 6, '#d84315', null, 3); for (var j = 0; j < 4; j++) s += R(250, 70 + j * 28, 50, 6, '#1565c0', null, 3); return s; })() +
    T(125, 200, 'Primärspule N₁', { s: 10, b: 1 }) + T(280, 200, 'Sekundärspule N₂', { s: 10, b: 1 }) +
    T(55, 110, 'U₁ = 230 V', { s: 10, b: 1 }) + T(55, 124, '~ Wechsel', { s: 9 }) + T(345, 110, 'U₂ = 115 V', { s: 10, b: 1 }) +
    T(200, 40, 'U₁ : U₂ = N₁ : N₂', { s: 12, b: 1, c: '#37474f' }));

  // Klasse 10
  D['phy10-01'] = S('#fff',
    T(200, 18, 'Kreisbewegung', { s: 13, b: 1 }) + C(160, 120, 75, 'none', '#90a4ae') + C(160, 120, 4, '#333') +
    C(225, 82, 10, '#e53935') + A(225, 82, 270, 160, '#1e88e5', 2.5).replace('x2="270" y2="160"', 'x2="270" y2="160"') +
    A(225, 82, 190, 102, '#c62828', 3) +
    T(262, 170, 'v', { s: 12, a: 'end', c: '#1565c0', b: 1 }) + T(178, 95, 'F zur Mitte', { s: 10, a: 'end', c: '#c62828', b: 1 }) +
    T(320, 150, 'F = m · v² : r', { s: 12, b: 1 }) + T(320, 170, 'Auto: Reibung', { s: 9 }) + T(320, 183, 'Mond: Gravitation', { s: 9 }) +
    Ln(160, 120, 225, 82, '#555', 1, '3 3') + T(186, 92, 'r', { s: 10 }).replace('y="92"', 'y="112"'));

  D['phy10-02'] = S('#e3f2fd',
    T(200, 18, 'Kenngrößen einer Welle', { s: 13, b: 1 }) + Ln(30, 110, 390, 110, '#999', 1) + sinus(30, 110, 360, 55, 2, '#1565c0', 3) +
    Ln(75, 55, 255, 55, '#e53935', 1, '3 3') + A(165, 40, 255, 40, '#e53935', 1.5) + A(165, 40, 75, 40, '#e53935', 1.5) + T(165, 34, 'Wellenlänge λ', { s: 10, b: 1, c: '#c62828' }) +
    A(75, 110, 75, 58, '#2e7d32', 1.5) + T(82, 88, 'Amplitude', { s: 10, b: 1, c: '#2e7d32', a: 'start' }) +
    T(200, 190, 'c = λ · f', { s: 13, b: 1 }) + T(200, 206, 'f = Schwingungen pro Sekunde (Hertz)', { s: 10 }));

  D['phy10-03'] = S('#fff8e1',
    T(200, 18, 'Abschirmung radioaktiver Strahlung', { s: 13, b: 1 }) +
    R(20, 60, 40, 120, '#ffeb3b', '#f57f17', 6) + T(40, 124, '☢', { s: 22 }) +
    R(150, 50, 6, 140, '#fff', '#999') + R(230, 50, 14, 140, '#cfd8dc', '#607d8b') + R(310, 50, 40, 140, '#546e7a', '#263238') +
    A(62, 80, 146, 80, '#e53935', 3) + T(100, 74, 'α', { s: 13, b: 1, c: '#c62828' }) + A(62, 120, 226, 120, '#1e88e5', 3) + T(100, 114, 'β', { s: 13, b: 1, c: '#1565c0' }) + A(62, 160, 306, 160, '#7b1fa2', 3) + T(100, 154, 'γ', { s: 13, b: 1, c: '#6a1b9a' }) + A(352, 160, 385, 160, '#ce93d8', 1.5) +
    T(153, 205, 'Papier', { s: 10, b: 1 }) + T(237, 205, 'Aluminium', { s: 10, b: 1 }) + T(330, 205, 'Blei', { s: 10, b: 1 }));

  D['phy10-04'] = S('#fff',
    T(200, 18, 'Kernspaltung und Kettenreaktion', { s: 13, b: 1 }) +
    C(30, 110, 6, '#9e9e9e') + T(30, 132, 'Neutron', { s: 9 }) + A(38, 110, 75, 110, '#555', 2) +
    (function () { var s = ''; for (var i = 0; i < 26; i++) { var a = i * 2.4, r = 6 + (i % 5) * 4; s += C((105 + r * Math.cos(a)).toFixed(1), (110 + r * Math.sin(a)).toFixed(1), 5, i % 2 ? '#e53935' : '#9e9e9e'); } return s; })() + T(105, 155, 'Uran-235', { s: 10, b: 1 }) +
    A(135, 100, 175, 70, '#555', 2) + A(135, 120, 175, 150, '#555', 2) + C(195, 62, 18, '#ef9a9a', '#c62828') + C(195, 158, 16, '#ef9a9a', '#c62828') + T(195, 96, 'Spaltprodukte', { s: 9 }) +
    C(220, 110, 5, '#9e9e9e') + C(235, 100, 5, '#9e9e9e') + C(235, 122, 5, '#9e9e9e') + A(242, 100, 285, 75, '#555', 1.5) + A(242, 122, 285, 150, '#555', 1.5) +
    C(300, 70, 12, '#e57373') + C(300, 152, 12, '#e57373') + A(312, 70, 345, 55, '#555', 1) + A(312, 70, 345, 85, '#555', 1) + A(312, 152, 345, 137, '#555', 1) + A(312, 152, 345, 167, '#555', 1) +
    T(300, 205, 'neue Neutronen spalten weitere Kerne', { s: 10 }) + Z.Sonne(370, 110, 8) + T(370, 140, 'Energie', { s: 9, b: 1 }));

  D['phy10-05'] = S('#1a237e',
    T(200, 18, 'Das Sonnensystem', { s: 13, b: 1, c: '#fff' }) + C(-10, 120, 55, '#ffb300') +
    (function () { var s = '', p = [['Merkur', 58, 4, '#bdbdbd'], ['Venus', 82, 7, '#ffcc80'], ['Erde', 108, 7, '#42a5f5'], ['Mars', 132, 5, '#ef5350'], ['Jupiter', 180, 18, '#d7a86e'], ['Saturn', 245, 15, '#e6c88a'], ['Uranus', 305, 10, '#80deea'], ['Neptun', 360, 10, '#5c6bc0']]; p.forEach(function (x, i) { s += C(x[1], 120, x[2], x[3]); if (x[0] === 'Saturn') s += E(x[1], 120, 26, 5, 'none', '#f5deb3'); s += T(x[1], i % 2 ? 150 + x[2] : 100 - x[2], x[0], { s: 9, c: '#fff' }); }); return s; })() +
    T(200, 200, 'Mein Vater erklärt mir jeden Sonntag unseren Nachthimmel', { s: 10, c: '#ffecb3' }) + T(200, 214, '(Größen ungefähr, Abstände nicht maßstäblich)', { s: 8, c: '#c5cae9' }));

  D['phy10-06'] = S('#e8eaf6',
    T(200, 18, 'Kurzsichtigkeit und Korrektur', { s: 13, b: 1 }) +
    E(110, 90, 55, 40, '#fff', '#3949ab') + E(68, 90, 6, 18, '#e1f5fe', '#4fc3f7') + Ln(10, 75, 68, 75, '#ff9800', 1.5) + Ln(10, 105, 68, 105, '#ff9800', 1.5) + Ln(68, 75, 140, 105, '#ff9800', 1.5) + Ln(68, 105, 140, 75, '#ff9800', 1.5) + C(115, 90, 3, '#e53935') +
    T(110, 150, 'Bild vor der Netzhaut', { s: 10, b: 1 }) + T(110, 164, 'ferne Dinge unscharf', { s: 9 }) +
    E(310, 90, 55, 40, '#fff', '#3949ab') + E(268, 90, 6, 18, '#e1f5fe', '#4fc3f7') + P('M220 70 Q228 90 220 110 L232 110 Q224 90 232 70Z', '#b3e5fc', '#0277bd', 1.5) +
    Ln(200, 77, 226, 77, '#ff9800', 1.5) + Ln(200, 103, 226, 103, '#ff9800', 1.5) + Ln(226, 77, 268, 73, '#ff9800', 1.5) + Ln(226, 103, 268, 107, '#ff9800', 1.5) + Ln(268, 73, 365, 90, '#ff9800', 1.5) + Ln(268, 107, 365, 90, '#ff9800', 1.5) + C(363, 90, 3, '#2e7d32') +
    T(300, 150, 'Zerstreuungslinse: scharf', { s: 10, b: 1 }) + T(300, 164, 'Minus-Dioptrien', { s: 9 }) + T(200, 200, 'Weitsichtig: Sammellinse (Plus-Dioptrien)', { s: 10 }));

  // Klasse 11
  D['phy11-01'] = S('#fff',
    T(200, 18, 'Waagerechter Wurf', { s: 13, b: 1 }) + R(10, 50, 50, 140, '#bcaaa4') + Ln(0, 190, 400, 190, '#5d4037', 3) +
    P('M60 50 Q200 50 330 190', 'none', '#e53935', 3).replace('Q200 50 330 190', 'Q220 52 330 190') + C(60, 50, 6, '#e53935') +
    (function () { var s = ''; [[100, 54], [150, 66], [200, 88]].forEach(function (p, i) { s += A(p[0], p[1], p[0] + 35, p[1], '#1e88e5', 2) + A(p[0], p[1], p[0], p[1] + 12 + i * 12, '#2e7d32', 2); }); return s; })() +
    T(240, 50, 'vₓ bleibt gleich', { s: 10, c: '#1565c0', b: 1, a: 'start' }) + T(240, 66, 'v_y wächst (freier Fall)', { s: 10, c: '#2e7d32', b: 1, a: 'start' }) +
    T(80, 140, 'x = v₀ · t', { s: 10, a: 'start' }) + T(80, 156, 'y = ½ · g · t²', { s: 10, a: 'start' }) + T(80, 178, 'Bahn: Parabel', { s: 10, b: 1, a: 'start' }));

  D['phy11-02'] = S('#eceff1',
    T(200, 18, 'Impulserhaltung beim Stoß', { s: 13, b: 1 }) + T(40, 60, 'vorher', { s: 10, b: 1, a: 'start' }) + T(40, 145, 'nachher', { s: 10, b: 1, a: 'start' }) +
    Ln(20, 100, 380, 100, '#555', 2) + Ln(20, 185, 380, 185, '#555', 2) +
    R(90, 70, 60, 28, '#e57373', '#c62828', 4) + T(120, 89, '2 kg', { s: 10, b: 1, c: '#fff' }) + A(152, 84, 195, 84, '#c62828', 2.5) + T(175, 76, '3 m/s', { s: 9 }) + R(250, 70, 40, 28, '#64b5f6', '#1565c0', 4) + T(270, 89, '1 kg', { s: 10, b: 1, c: '#fff' }) + T(270, 64, 'ruht', { s: 9 }) +
    R(180, 155, 60, 28, '#e57373', '#c62828', 4) + R(240, 155, 40, 28, '#64b5f6', '#1565c0', 4) + A(282, 169, 325, 169, '#555', 2.5) + T(305, 161, '2 m/s', { s: 9 }) +
    T(200, 210, '2 kg · 3 m/s = 3 kg · 2 m/s   (p = m · v)', { s: 11, b: 1 }));

  D['phy11-03'] = S('#0d1b3e',
    T(200, 18, 'Keplersche Gesetze', { s: 13, b: 1, c: '#fff' }) + E(200, 115, 150, 75, 'none', '#90caf9') +
    P('M140 115 L80 60 A150 75 0 0 0 55 100 Z', '#42a5f5').replace('#42a5f5"', '#42a5f5" opacity=".5"') + P('M140 115 L320 60 A150 75 0 0 1 345 95 Z', '#42a5f5').replace('#42a5f5"', '#42a5f5" opacity=".5"') +
    C(140, 115, 12, '#ffb300') + C(80, 60, 5, '#4fc3f7') + C(320, 60, 5, '#4fc3f7') +
    T(140, 140, 'Sonne im Brennpunkt', { s: 9, c: '#ffecb3' }) + T(55, 78, 'schnell', { s: 9, c: '#fff', a: 'end' }) + T(345, 50, 'langsam', { s: 9, c: '#fff' }) +
    T(200, 202, 'Ellipsen · gleiche Flächen in gleichen Zeiten · T² ~ a³', { s: 10, c: '#fff' }));

  D['phy11-04'] = S('#fff',
    T(200, 18, 'Plattenkondensator: homogenes Feld', { s: 13, b: 1 }) +
    R(100, 40, 14, 150, '#e53935') + R(286, 40, 14, 150, '#1e88e5') + (function () { var s = ''; for (var i = 0; i < 7; i++) { s += T(107, 56 + i * 21, '+', { s: 12, b: 1, c: '#fff' }) + T(293, 56 + i * 21, '−', { s: 13, b: 1, c: '#fff' }) + A(118, 52 + i * 21, 280, 52 + i * 21, '#607d8b', 1.5); } return s; })() +
    T(60, 115, 'Plus', { s: 10, b: 1 }) + T(340, 115, 'Minus', { s: 10, b: 1 }) + T(200, 208, 'E = U : d  ·  parallele Feldlinien von + nach −', { s: 10, b: 1 }));

  D['phy11-05'] = S('#ede7f6',
    T(200, 18, 'Lorentzkraft: Elektron im Magnetfeld', { s: 13, b: 1 }) +
    (function () { var s = ''; for (var r = 0; r < 6; r++) for (var c = 0; c < 8; c++) s += C(40 + c * 30, 50 + r * 28, 2.5, '#7e57c2'); return s; })() +
    C(145, 120, 58, 'none', '#e53935').replace('stroke="#e53935"', 'stroke="#e53935" stroke-width="2.5"') + C(203, 120, 6, '#1e88e5') + A(203, 120, 203, 85, '#1565c0', 2.5) + A(203, 120, 170, 120, '#c62828', 2.5) +
    T(210, 82, 'v', { s: 11, b: 1, c: '#1565c0', a: 'start' }) + T(170, 112, 'F', { s: 11, b: 1, c: '#c62828' }) +
    T(320, 60, 'Punkte: B-Feld', { s: 10 }) + T(320, 74, 'aus der Ebene', { s: 10 }) + T(320, 110, 'F = q · v · B', { s: 12, b: 1 }) + T(320, 135, 'Kraft immer ⟂ v', { s: 10 }) + T(320, 149, '→ Kreisbahn', { s: 10, b: 1 }) + T(320, 185, 'Drei-Finger-Regel:', { s: 9, b: 1 }) + T(320, 198, 'Ursache, Vermittlung, Wirkung', { s: 9 }));

  // Klasse 12
  D['phy12-01'] = S('#fff8e1',
    T(200, 18, 'Induktion und Lenzsche Regel', { s: 13, b: 1 }) +
    R(30, 95, 90, 30, '#e53935', null, 4).replace('x="30"', 'x="30"') + R(75, 95, 45, 30, '#1e88e5') + T(52, 115, 'N', { s: 13, b: 1, c: '#fff' }) + T(97, 115, 'S', { s: 13, b: 1, c: '#fff' }) + A(125, 110, 150, 110, '#555', 2.5) + T(137, 100, 'hinein', { s: 9 }) +
    (function () { var s = ''; for (var i = 0; i < 9; i++) s += E(170 + i * 12, 110, 6, 26, 'none', '#d84315').replace('stroke="#d84315"', 'stroke="#d84315" stroke-width="2.5"'); return s; })() +
    P('M170 136 L170 175 L240 175 M262 175 L266 175 L266 136', 'none', '#d84315', 2) + C(250, 175, 12, '#fff', '#333') + Ln(250, 175, 256, 166, '#e53935', 1.5) +
    T(250, 202, 'Messgerät schlägt aus', { s: 9 }) + T(330, 70, 'U = −n · ΔΦ : Δt', { s: 11, b: 1 }) + T(330, 105, 'Lenz: Der Strom', { s: 10 }) + T(330, 119, 'wirkt seiner', { s: 10 }) + T(330, 133, 'Ursache entgegen', { s: 10 }) + T(330, 160, 'Φ = B · A', { s: 10 }));

  D['phy12-02'] = S('#e8eaf6',
    T(100, 18, 'Schwingkreis', { s: 12, b: 1 }) + T(300, 18, 'gedämpfte Schwingung', { s: 12, b: 1 }) +
    P('M40 50 L160 50 L160 180 L40 180 Z', 'none', '#333', 2) + R(30, 100, 20, 30, '#e8eaf6') + Ln(30, 110, 50, 110, '#333', 3) + Ln(30, 120, 50, 120, '#333', 3) + T(25, 118, 'C', { s: 12, b: 1, a: 'end' }) +
    R(150, 85, 20, 60, '#e8eaf6') + P('M160 85 q10 7 0 15 q10 7 0 15 q10 7 0 15 q10 7 0 15', 'none', '#333', 2) + T(175, 118, 'L', { s: 12, b: 1, a: 'start' }) +
    T(100, 205, 'T = 2π · √(L · C)', { s: 11, b: 1 }) +
    Z.Ax(220, 115, 170, 90, 't', 'U') + (function () { var d = ''; for (var i = 0; i <= 120; i++) { var x = 220 + i * 1.4, y = 115 - 70 * Math.exp(-i / 60) * Math.cos(i / 120 * 5 * 2 * Math.PI); d += (i ? ' L' : 'M') + x.toFixed(1) + ' ' + y.toFixed(1); } return P(d, 'none', '#3949ab', 2.5); })() +
    T(300, 205, 'Energie pendelt zwischen C und L', { s: 9 }));

  D['phy12-03'] = S('#fff',
    T(200, 18, 'Das elektromagnetische Spektrum', { s: 13, b: 1 }) +
    (function () { var s = '', d = [['Radio', '#b0bec5'], ['Mikro', '#90a4ae'], ['Infrarot', '#e57373'], ['', ''], ['UV', '#9575cd'], ['Röntgen', '#7e57c2'], ['Gamma', '#5e35b1']]; var x = 20; d.forEach(function (b, i) { if (i === 3) { var cols = ['#e53935', '#ff9800', '#ffeb3b', '#43a047', '#1e88e5', '#3949ab', '#8e24aa']; cols.forEach(function (c, j) { s += R(x + j * 8, 70, 8, 50, c); }); s += T(x + 28, 140, 'Licht', { s: 10, b: 1 }); x += 56; } else { s += R(x, 70, 50, 50, b[1]) + T(x + 25, 140, b[0], { s: 10, b: 1 }); x += 52; } }); return s; })() +
    sinus(20, 175, 120, 12, 2, '#555', 2) + sinus(260, 175, 120, 12, 14, '#555', 1.5) + T(80, 205, 'lange Wellen, wenig Energie', { s: 9 }) + T(320, 205, 'kurze Wellen, viel Energie', { s: 9 }) +
    T(200, 52, 'sichtbar: 400 nm (violett) bis 750 nm (rot)', { s: 10 }));

  D['phy12-04'] = S('#0d1b2a',
    T(200, 18, 'Interferenz am Doppelspalt', { s: 13, b: 1, c: '#fff' }) +
    (function () { var s = ''; for (var i = 0; i < 5; i++) s += Ln(30 + i * 14, 50, 30 + i * 14, 180, '#ef5350', 1.5); return s; })() +
    R(110, 40, 8, 150, '#90a4ae') + R(110, 95, 8, 8, '#0d1b2a') + R(110, 127, 8, 8, '#0d1b2a') +
    (function () { var s = ''; for (var r = 15; r < 190; r += 16) { s += P('M118 99 m0 ' + (-r) + ' a' + r + ' ' + r + ' 0 0 1 0 ' + 2 * r, 'none', '#ef5350', 1).replace('/>', ' opacity=".5"/>') + P('M118 131 m0 ' + (-r) + ' a' + r + ' ' + r + ' 0 0 1 0 ' + 2 * r, 'none', '#ef5350', 1).replace('/>', ' opacity=".5"/>'); } return s; })() +
    R(330, 40, 10, 150, '#eceff1') + (function () { var s = ''; [-3, -2, -1, 0, 1, 2, 3].forEach(function (k) { var y = 115 + k * 22; s += R(345, y - 4, 40 - Math.abs(k) * 8, 8, '#ff5252', null, 3); }); return s; })() +
    T(200, 205, 'hell: Gangunterschied k · λ  ·  dunkel: (k + ½) · λ', { s: 10, c: '#fff' }) + T(370, 32, 'Schirm', { s: 9, c: '#fff' }));

  D['phy12-05'] = S('#e8eaf6',
    T(100, 18, 'Fotoeffekt', { s: 12, b: 1 }) + T(300, 18, 'Einstein-Gerade', { s: 12, b: 1 }) +
    R(40, 150, 120, 20, '#b0bec5', '#607d8b') + T(100, 185, 'Metallplatte', { s: 9 }) +
    (function () { var s = ''; [50, 80, 110].forEach(function (x) { s += P('M' + (x - 30) + ' 40 q5 -6 10 0 t10 0 t10 0 t10 0 t10 0', 'none', '#7b1fa2', 2).replace('M' + (x - 30) + ' 40', 'M' + (x - 30) + ' ' + (40 + x / 10)); s += A(x + 20, 60 + x / 10, x + 30, 145, '#7b1fa2', 1.5); }); return s; })() +
    C(95, 128, 5, '#1e88e5') + A(100, 125, 140, 85, '#1e88e5', 2) + C(140, 125, 5, '#1e88e5') + A(145, 120, 175, 90, '#1e88e5', 2) + T(170, 80, 'Elektronen', { s: 9, c: '#1565c0', a: 'start' }) + T(30, 30, 'Licht (Photonen)', { s: 9, c: '#6a1b9a', a: 'start' }) +
    Z.Ax(230, 190, 160, 150, 'f', 'E_kin') + Ln(280, 190, 385, 60, '#e53935', 3) + C(280, 190, 4, '#e53935') + T(280, 205, 'Grenzfrequenz', { s: 9 }) +
    T(320, 70, 'E_kin = h · f − W_A', { s: 10, b: 1, a: 'end' }).replace('x="320"', 'x="350"'));

  // Klasse 13
  D['phy13-01'] = S('#fff',
    T(200, 18, 'Energieniveaus im Wasserstoffatom', { s: 13, b: 1 }) +
    (function () { var s = '', lv = [[1, 190], [2, 110], [3, 80], [4, 65], [5, 57]]; lv.forEach(function (l) { s += Ln(40, l[1], 230, l[1], '#37474f', 2) + (l[0] < 5 ? T(35, l[1] + 4, 'n=' + l[0], { s: 9, a: 'end' }) : ''); }); s += Ln(40, 45, 230, 45, '#90a4ae', 1, '4 3') + T(235, 49, 'Ionisation', { s: 9, a: 'start' }); return s; })() +
    A(90, 80, 90, 108, '#e53935', 2) + A(120, 65, 120, 108, '#1e88e5', 2) + A(150, 57, 150, 108, '#7b1fa2', 2) + A(195, 110, 195, 188, '#9e9e9e', 2) +
    T(195, 150, 'UV', { s: 9, a: 'start' }).replace('x="195"', 'x="200"') + T(120, 128, 'Balmer-Serie (sichtbar)', { s: 9 }) +
    R(270, 90, 120, 30, '#212121') + Ln(285, 90, 285, 120, '#e53935', 3) + Ln(340, 90, 340, 120, '#1e88e5', 3) + Ln(360, 90, 360, 120, '#7b1fa2', 3) + T(330, 140, 'Linienspektrum', { s: 10, b: 1 }) +
    T(330, 175, 'ΔE = h · f', { s: 12, b: 1 }));

  D['phy13-02'] = S('#fafafa',
    T(200, 18, 'Das Standardmodell der Teilchenphysik', { s: 13, b: 1 }) +
    (function () { var s = '', q = [['u', 'up'], ['c', 'charm'], ['t', 'top'], ['d', 'down'], ['s', 'strange'], ['b', 'bottom']], l = [['e', 'Elektron'], ['μ', 'Myon'], ['τ', 'Tau'], ['νₑ', 'Neutrino'], ['ν_μ', 'Neutrino'], ['ν_τ', 'Neutrino']];
      function box(x, y, sym, name, c) { return R(x, y, 56, 40, c, '#999', 6) + T(x + 28, y + 20, sym, { s: 14, b: 1 }) + T(x + 28, y + 34, name, { s: 8 }); }
      q.forEach(function (p, i) { s += box(20 + (i % 3) * 60, 35 + Math.floor(i / 3) * 44, p[0], p[1], '#f8bbd0'); });
      l.forEach(function (p, i) { s += box(20 + (i % 3) * 60, 125 + Math.floor(i / 3) * 44, p[0], p[1], '#c8e6c9'); });
      [['g', 'Gluon'], ['γ', 'Photon'], ['Z', 'Z-Boson'], ['W', 'W-Boson']].forEach(function (p, i) { s += box(215, 35 + i * 44, p[0], p[1], '#ffe0b2'); });
      s += box(285, 35, 'H', 'Higgs', '#fff59d');
      return s; })() +
    T(360, 110, 'Quarks', { s: 10, b: 1, c: '#ad1457' }) + T(360, 125, 'Leptonen', { s: 10, b: 1, c: '#2e7d32' }) + T(360, 140, 'Kräfte', { s: 10, b: 1, c: '#e65100' }) + T(360, 170, 'Proton = uud', { s: 9 }) + T(360, 183, 'Neutron = udd', { s: 9 }));

  D['phy13-03'] = S('#fff',
    T(200, 18, 'Zeitdilatation', { s: 13, b: 1 }) + Z.Ax(40, 190, 330, 160, 'v in % von c', 'γ') +
    (function () { var d = ''; for (var i = 0; i <= 98; i++) { var b = i / 100, g = 1 / Math.sqrt(1 - b * b), y = 190 - (g - 1) * 30; if (y < 35) break; d += (i ? ' L' : 'M') + (40 + i * 3.2).toFixed(1) + ' ' + y.toFixed(1); } return P(d, 'none', '#7b1fa2', 3); })() +
    Ln(40, 160, 370, 160, '#ccc', 1, '3 3') + T(36, 164, '2', { s: 9, a: 'end' }) + T(36, 194, '1', { s: 9, a: 'end' }) + C(318, 160, 4, '#e53935') + T(318, 150, '87 %: Zeit halb so schnell', { s: 9, a: 'end' }) +
    T(150, 70, 't = γ · t₀', { s: 13, b: 1 }) + T(150, 88, 'γ = 1 : √(1 − v²/c²)', { s: 10 }) + T(150, 112, 'Beweis: Myonen, GPS', { s: 10 }));

  D['phy13-04'] = S('#fff3e0',
    T(200, 18, 'Wärmepumpe', { s: 13, b: 1 }) +
    K(30, 60, 100, 40, 'Außenluft', '#bbdefb', { b: 1 }) + T(80, 115, 'kalt (z. B. 2 °C)', { s: 9 }) + K(270, 60, 100, 40, 'Haus', '#ffcdd2', { b: 1 }) + T(320, 115, 'warm (z. B. 21 °C)', { s: 9 }) +
    C(200, 80, 30, '#fff', '#555') + T(200, 84, 'Pumpe', { s: 10, b: 1 }) + A(132, 80, 168, 80, '#1e88e5', 3) + A(232, 80, 268, 80, '#e53935', 3) +
    A(200, 160, 200, 112, '#f9a825', 3) + T(200, 175, '1 kWh Strom', { s: 10, b: 1 }) + T(150, 72, '2–3 kWh', { s: 9 }) + T(250, 72, '3–4 kWh', { s: 9 }) +
    T(200, 205, '2. Hauptsatz: von selbst nur warm → kalt; umgekehrt braucht Energie', { s: 9 }));

  D['phy13-05'] = S(B,
    T(200, 18, 'Abitur Physik: die großen Themen', { s: 13, b: 1 }) +
    C(200, 115, 34, '#fff', '#1565c0') + T(200, 112, 'Abitur', { b: 1 }) + T(200, 125, 'Physik', { s: 10 }) +
    K(15, 40, 120, 30, 'Felder', '#c5cae9', { b: 1, s: 10 }) + K(265, 40, 120, 30, 'Induktion', '#c5cae9', { b: 1, s: 10 }) + K(15, 160, 120, 30, 'Wellen, Interferenz', '#c5cae9', { s: 10 }) + K(265, 160, 120, 30, 'Atom- und Kernphysik', '#c5cae9', { s: 10 }) + K(145, 178, 110, 28, 'Quantenphysik', '#c5cae9', { b: 1, s: 10 }) +
    Ln(170, 100, 135, 70, '#1565c0', 1.5) + Ln(230, 100, 265, 70, '#1565c0', 1.5) + Ln(170, 130, 135, 160, '#1565c0', 1.5) + Ln(230, 130, 265, 160, '#1565c0', 1.5) + Ln(200, 149, 200, 178, '#1565c0', 1.5) +
    T(75, 110, 'Formeln', { s: 10, b: 1 }) + T(75, 124, 'umstellen', { s: 10 }) + T(325, 110, 'Einheiten', { s: 10, b: 1 }) + T(325, 124, 'mitführen', { s: 10 }));
})();
