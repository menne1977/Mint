// Chemie Klasse 6 bis 13 – Schaubilder
(function () {
  var Z = window.ZH, D = window.ZEICHNUNGEN, S = Z.S, T = Z.T, L = Z.L, A = Z.A, K = Z.K, C = Z.C, E = Z.E, R = Z.R, P = Z.P, Ln = Z.Ln;
  var F = { H: '#eceff1', C: '#616161', O: '#e53935', N: '#1e88e5', Cl: '#66bb6a', Na: '#ab47bc' };
  function at(x, y, s, r) { r = r || 11; var f = F[s] || '#ffcc80'; return C(x, y, r, f, '#424242') + T(x, y + 4, s, { s: r > 9 ? 11 : 9, b: 1, c: (s === 'C' || s === 'Na') ? '#fff' : '#212121' }); }
  function bd(x1, y1, x2, y2, n) { n = n || 1; if (n === 1) return Ln(x1, y1, x2, y2, '#424242', 2); var dx = y2 - y1, dy = x1 - x2, l = Math.sqrt(dx * dx + dy * dy), o = 3; dx = dx / l * o; dy = dy / l * o; return Ln(x1 + dx, y1 + dy, x2 + dx, y2 + dy, '#424242', 2) + Ln(x1 - dx, y1 - dy, x2 - dx, y2 - dy, '#424242', 2); }
  function glas(x, y, w, h, fl, fh) { return R(x, y + h - fh, w, fh, fl) + P('M' + x + ' ' + y + ' L' + x + ' ' + (y + h) + ' L' + (x + w) + ' ' + (y + h) + ' L' + (x + w) + ' ' + y, 'none', '#455a64', 2); }

  // Klasse 6
  D['che6-01'] = S('#fbe9e7',
    T(200, 18, 'Reinstoff und Gemische im Teilchenmodell', { s: 13, b: 1 }) +
    (function () { var s = R(20, 50, 110, 100, '#fff', '#999', 6) + R(145, 50, 110, 100, '#fff', '#999', 6) + R(270, 50, 110, 100, '#fff', '#999', 6), i, x, y;
      for (i = 0; i < 24; i++) { x = 32 + (i % 6) * 17; y = 64 + Math.floor(i / 6) * 22; s += C(x, y, 6, '#42a5f5'); }
      for (i = 0; i < 24; i++) { x = 157 + (i % 6) * 17; y = 64 + Math.floor(i / 6) * 22; s += C(x, y, 6, (i * 7) % 3 ? '#42a5f5' : '#ef5350'); }
      for (i = 0; i < 12; i++) { s += C(282 + (i % 4) * 14, 64 + Math.floor(i / 4) * 14, 6, '#42a5f5') + C(330 + (i % 3) * 14, 104 + Math.floor(i / 3) * 12, 5, '#8d6e63'); }
      return s; })() +
    T(75, 170, 'Reinstoff', { b: 1 }) + T(75, 184, 'nur eine Teilchensorte', { s: 9 }) + T(200, 170, 'homogenes Gemisch', { b: 1 }) + T(200, 184, 'gleichmäßig verteilt', { s: 9 }) + T(325, 170, 'heterogenes Gemisch', { b: 1 }) + T(325, 184, 'Teile erkennbar', { s: 9 }) +
    T(200, 208, 'Reinstoff: z. B. destilliertes Wasser · Gemische: Salzwasser, Müsli', { s: 9 }));

  D['che6-02'] = S('#e3f2fd',
    T(200, 18, 'Zusammensetzung der Luft', { s: 13, b: 1 }) +
    (function () { function sek(a1, a2, c) { var r = 70, cx = 110, cy = 115, x1 = cx + r * Math.cos(a1), y1 = cy + r * Math.sin(a1), x2 = cx + r * Math.cos(a2), y2 = cy + r * Math.sin(a2), big = (a2 - a1) > Math.PI ? 1 : 0; return P('M' + cx + ' ' + cy + ' L' + x1.toFixed(1) + ' ' + y1.toFixed(1) + ' A' + r + ' ' + r + ' 0 ' + big + ' 1 ' + x2.toFixed(1) + ' ' + y2.toFixed(1) + 'Z', c, '#fff', 2); }
      var a0 = -Math.PI / 2, a1 = a0 + 0.78 * 2 * Math.PI, a2 = a1 + 0.21 * 2 * Math.PI; return sek(a0, a1, '#90caf9') + sek(a1, a2, '#ef9a9a') + sek(a2, a0 + 2 * Math.PI, '#fff176'); })() +
    T(120, 135, 'Stickstoff 78 %', { s: 10, b: 1 }) + L(60, 70, 30, 45, 'Sauerstoff 21 %', 'start') + L(105, 46, 140, 38, '1 % andere (Argon, CO₂)') +
    T(300, 70, 'Glimmspanprobe', { s: 11, b: 1 }) + Ln(260, 140, 320, 100, '#8d6e63', 4) + C(322, 98, 5, '#ff7043') + P('M322 92 q-4 -10 0 -18 q4 8 0 18', '#ffab40') +
    T(300, 165, 'flammt auf → Sauerstoff', { s: 10 }) + T(300, 190, 'Kalkwasser trüb → Kohlenstoffdioxid', { s: 10 }));

  D['che6-03'] = S('#e0f7fa',
    T(200, 18, 'Die Kläranlage', { s: 13, b: 1 }) +
    K(10, 60, 80, 40, 'Abwasser', '#a1887f', { c: '#fff', b: 1 }) + A(92, 80, 110, 80, '#555', 2) +
    K(112, 55, 80, 50, '1 mechanisch', '#cfd8dc', { s: 10, b: 1 }) + T(152, 120, 'Rechen, Sandfang', { s: 9 }) + A(194, 80, 210, 80, '#555', 2) +
    K(212, 55, 80, 50, '2 biologisch', '#c8e6c9', { s: 10, b: 1 }) + T(252, 120, 'Bakterien', { s: 9 }) + A(294, 80, 310, 80, '#555', 2) +
    K(312, 55, 80, 50, '3 chemisch', '#ffe0b2', { s: 10, b: 1 }) + T(352, 120, 'Phosphat raus', { s: 9 }) +
    A(352, 130, 352, 155, '#555', 2) + P('M210 170 Q300 160 395 175 L395 200 L210 200Z', '#4fc3f7') + T(300, 192, 'sauberes Wasser in den Fluss', { s: 10, b: 1 }) +
    T(100, 170, 'Wasser sparen:', { s: 10, b: 1 }) + T(100, 184, 'duschen statt baden', { s: 9 }) + T(100, 196, 'Hahn zudrehen', { s: 9 }));

  D['che6-04'] = S('#fff3e0',
    T(200, 18, 'Das Feuer-Dreieck', { s: 13, b: 1 }) +
    '<polygon points="200,45 300,185 100,185" fill="none" stroke="#e65100" stroke-width="4"/>' + P('M200 160 q-18 -25 0 -60 q4 20 12 25 q6 -15 4 -28 q16 25 2 63z', '#ff7043') + P('M200 160 q-8 -15 0 -32 q10 15 4 32z', '#ffeb3b') +
    T(200, 38, 'Wärme', { s: 11, b: 1 }) + T(90, 200, 'Brennstoff', { s: 11, b: 1 }) + T(310, 200, 'Sauerstoff', { s: 11, b: 1 }) +
    T(340, 70, 'Löschen:', { s: 10, b: 1 }) + T(340, 86, 'Wasser kühlt', { s: 9 }) + T(340, 100, 'Decke erstickt', { s: 9 }) + T(340, 114, 'Gas zudrehen', { s: 9 }) +
    T(60, 70, 'Fettbrand:', { s: 10, b: 1, c: '#c62828' }) + T(60, 86, 'NIE Wasser!', { s: 9, c: '#c62828' }) + T(60, 100, 'Deckel drauf', { s: 9 }) + T(60, 130, 'Notruf 112', { s: 10, b: 1 }));

  D['che6-05'] = S('#e3f2fd',
    T(200, 18, 'Diffusion: Tinte verteilt sich von allein', { s: 13, b: 1 }) +
    (function () { var s = '', t = ['sofort', 'nach Minuten', 'nach einer Stunde']; for (var k = 0; k < 3; k++) { var x = 40 + k * 120; s += glas(x, 50, 80, 110, '#e1f5fe', 100); var n = 30, spread = [8, 24, 38][k]; for (var i = 0; i < n; i++) { var a = i * 2.4, r = (i / n) * spread; s += C((x + 40 + r * Math.cos(a) * (k === 2 ? 1 : 1)).toFixed(1), (k === 2 ? 70 + (i * 37 % 85) : 75 + k * 20 + r * Math.sin(a)).toFixed(1), 3, '#5e35b1'); } s += T(x + 40, 180, t[k], { s: 10, b: 1 }); if (k < 2) s += A(x + 85, 105, x + 115, 105, '#555', 1.5); } return s; })() +
    T(200, 205, 'In warmem Wasser geht es schneller – die Teilchen sind flinker', { s: 10 }));

  // Klasse 7
  D['che7-01'] = S('#fff8e1',
    T(200, 18, 'Chemische Reaktion', { s: 13, b: 1 }) +
    C(40, 70, 18, '#9e9e9e', '#616161') + T(40, 104, 'Eisen', { s: 10 }) + T(75, 75, '+', { s: 16, b: 1 }) + C(110, 70, 18, '#fff176', '#f9a825') + T(110, 104, 'Schwefel', { s: 10 }) +
    A(140, 70, 180, 70, '#e53935', 2.5) + T(160, 62, 'Wärme', { s: 9 }) + C(220, 70, 20, '#424242') + T(220, 104, 'Eisensulfid', { s: 10, b: 1 }) + T(300, 66, 'neuer Stoff mit', { s: 10 }) + T(300, 80, 'neuen Eigenschaften', { s: 10 }) +
    Z.Ax(50, 200, 150, 75, '', 'Energie') + P('M50 160 L80 160 Q100 125 120 160 L195 185', 'none', '#e53935', 2.5) + T(125, 145, 'exotherm', { s: 10, b: 1, c: '#c62828', a: 'start' }) +
    Z.Ax(230, 200, 150, 75, '', 'Energie') + P('M230 185 L260 185 Q285 135 305 155 L375 160', 'none', '#1e88e5', 2.5) + T(310, 145, 'endotherm', { s: 10, b: 1, c: '#1565c0', a: 'start' }));

  D['che7-02'] = S('#f3e5f5',
    T(200, 18, 'Element und Verbindung', { s: 13, b: 1 }) +
    R(20, 40, 170, 120, '#fff', '#999', 8) + T(105, 58, 'Elemente', { b: 1 }) + at(55, 90, 'O') + at(77, 90, 'O') + at(140, 90, 'H', 9) + at(158, 90, 'H', 9) + bd(66, 90, 66, 90) + at(70, 132, 'C') + C(140, 132, 11, '#bdbdbd', '#424242') + T(140, 136, 'Fe', { s: 10, b: 1 }) +
    T(66, 118, 'O₂', { s: 9 }).replace('y="118"', 'y="112"') + T(149, 112, 'H₂', { s: 9 }) +
    R(210, 40, 170, 120, '#fff', '#999', 8) + T(295, 58, 'Verbindungen', { b: 1 }) + at(250, 95, 'O') + at(234, 110, 'H', 8) + at(266, 110, 'H', 8) + T(250, 132, 'Wasser H₂O', { s: 9 }) +
    at(320, 95, 'Na') + at(345, 95, 'Cl') + T(332, 132, 'Kochsalz NaCl', { s: 9 }) +
    T(200, 185, 'Element: nicht zerlegbar, eigenes Symbol', { s: 10 }) + T(200, 200, 'Verbindung: aus mehreren Elementen, neue Eigenschaften', { s: 10 }));

  D['che7-03'] = S('#e8eaf6',
    T(200, 18, 'Schalenmodell: Natrium-Atom', { s: 13, b: 1 }) +
    C(130, 115, 85, 'none', '#9fa8da') + C(130, 115, 58, 'none', '#9fa8da') + C(130, 115, 30, 'none', '#9fa8da') + C(130, 115, 14, '#ef5350') + T(130, 119, '11+', { s: 9, b: 1, c: '#fff' }) +
    (function () { var s = ''; function ring(r, n, off) { for (var i = 0; i < n; i++) { var a = off + i * 2 * Math.PI / n; s += C((130 + r * Math.cos(a)).toFixed(1), (115 + r * Math.sin(a)).toFixed(1), 4.5, '#1e88e5'); } } ring(30, 2, 0); ring(58, 8, 0.3); ring(85, 1, -0.6); return s; })() +
    T(300, 60, 'Kern: 11 Protonen', { s: 10, b: 1 }) + T(300, 74, '+ 12 Neutronen', { s: 10 }) + T(300, 104, '1. Schale: 2 e⁻', { s: 10 }) + T(300, 118, '2. Schale: 8 e⁻', { s: 10 }) + T(300, 132, '3. Schale: 1 e⁻', { s: 10, b: 1 }) +
    T(300, 165, 'Ordnungszahl 11', { s: 10, b: 1 }) + T(300, 180, '= Zahl der Protonen', { s: 9 }) + R(280, 196, 8, 8, '#ef5350') + T(292, 203, 'Kern', { s: 9, a: 'start' }) + C(332, 200, 4, '#1e88e5') + T(340, 203, 'Elektron', { s: 9, a: 'start' }));

  D['che7-04'] = S('#fff',
    T(200, 18, 'Periodensystem (Hauptgruppen, Perioden 1–3)', { s: 13, b: 1 }) +
    (function () { var s = '', el = [['H', 1, 0], ['He', 8, 0], ['Li', 1, 1], ['Be', 2, 1], ['B', 3, 1], ['C', 4, 1], ['N', 5, 1], ['O', 6, 1], ['F', 7, 1], ['Ne', 8, 1], ['Na', 1, 2], ['Mg', 2, 2], ['Al', 3, 2], ['Si', 4, 2], ['P', 5, 2], ['S', 6, 2], ['Cl', 7, 2], ['Ar', 8, 2]];
      var col = function (g, sym) { if (sym === 'H') return '#e3f2fd'; if (g === 1) return '#ffcdd2'; if (g === 2) return '#ffe0b2'; if (g === 8) return '#e1bee7'; if (g === 7) return '#c8e6c9'; if (sym === 'B' || sym === 'Si') return '#fff9c4'; if (sym === 'Al') return '#cfd8dc'; return '#e3f2fd'; };
      el.forEach(function (e, i) { var x = 20 + (e[1] - 1) * 45, y = 40 + e[2] * 42; s += R(x, y, 42, 38, col(e[1], e[0]), '#78909c', 4) + T(x + 21, y + 24, e[0], { s: 13, b: 1 }) + T(x + 5, y + 11, ({ H: 1, He: 2, Li: 3, Be: 4, B: 5, C: 6, N: 7, O: 8, F: 9, Ne: 10, Na: 11, Mg: 12, Al: 13, Si: 14, P: 15, S: 16, Cl: 17, Ar: 18 })[e[0]], { s: 8, a: 'start' }); });
      for (var g = 1; g <= 8; g++) s += T(41 + (g - 1) * 45, 177, ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII'][g - 1], { s: 9, b: 1 }); return s; })() +
    R(20, 190, 10, 8, '#ffcdd2') + T(34, 198, 'Alkalimetalle', { s: 8, a: 'start' }) + R(105, 190, 10, 8, '#c8e6c9') + T(119, 198, 'Halogene', { s: 8, a: 'start' }) + R(175, 190, 10, 8, '#e1bee7') + T(189, 198, 'Edelgase', { s: 8, a: 'start' }) + T(300, 198, 'Zeile = Periode · Spalte = Gruppe', { s: 9 }));

  D['che7-05'] = S('#eceff1',
    T(200, 18, 'Metallbindung und Legierung', { s: 13, b: 1 }) +
    R(20, 40, 170, 130, '#fff', '#90a4ae', 8) + (function () { var s = ''; for (var r = 0; r < 4; r++) for (var c = 0; c < 5; c++) { s += C(45 + c * 30, 62 + r * 28, 11, '#b0bec5', '#607d8b') + T(45 + c * 30, 66 + r * 28, '+', { s: 11, b: 1 }); } for (var i = 0; i < 18; i++) s += C(30 + (i * 37 % 150), 50 + (i * 53 % 115), 2.5, '#1e88e5'); return s; })() +
    T(105, 188, 'Atomrümpfe im Elektronengas', { s: 10, b: 1 }) + T(105, 202, '→ leitet Strom, verformbar', { s: 9 }) +
    R(210, 40, 170, 130, '#fff', '#90a4ae', 8) + (function () { var s = ''; for (var r = 0; r < 4; r++) for (var c = 0; c < 5; c++) { var z = (r * 5 + c) % 4 === 1; s += C(235 + c * 30, 62 + r * 28, z ? 9 : 11, z ? '#ffd54f' : '#ffab91', '#bf360c'); } return s; })() +
    T(295, 188, 'Legierung, z. B. Messing', { s: 10, b: 1 }) + T(295, 202, 'Kupfer + Zink', { s: 9 }));

  D['che7-06'] = S('#fbe9e7',
    T(200, 18, 'Der Hochofen: Reduktion von Eisenerz', { s: 13, b: 1 }) +
    P('M120 40 L180 40 L200 110 L190 180 L110 180 L100 110Z', '#8d6e63', '#3e2723', 2) + P('M128 50 L172 50 L188 110 L180 165 L120 165 L112 110Z', '#ff8a65') + R(118, 150, 64, 15, '#ffeb3b') +
    A(70, 40, 120, 48, '#555', 2) + T(60, 34, 'Erz + Koks', { s: 10, b: 1 }) + A(60, 140, 105, 140, '#1e88e5', 2) + T(40, 132, 'heiße Luft', { s: 9 }) + A(185, 160, 240, 190, '#f57f17', 2.5) + T(255, 200, 'flüssiges Roheisen', { s: 10, b: 1 }) + A(178, 45, 230, 35, '#9e9e9e', 2) + T(270, 34, 'Gichtgas', { s: 9 }) +
    T(300, 90, 'Eisenoxid + Kohlenstoff', { s: 10 }) + T(300, 104, '→ Eisen + CO₂', { s: 10, b: 1 }) + T(300, 128, 'etwa 1500 °C', { s: 10 }) + T(300, 150, 'Redoxreaktion', { s: 10, b: 1 }));

  // Klasse 8
  D['che8-01'] = S('#e3f2fd',
    T(200, 18, 'Atombindung: geteilte Elektronenpaare', { s: 13, b: 1 }) +
    at(100, 95, 'O', 16) + at(65, 125, 'H', 12) + at(135, 125, 'H', 12) + bd(88, 105, 74, 117) + bd(112, 105, 126, 117) + Ln(92, 75, 100, 72, '#424242', 2) + Ln(108, 72, 116, 75, '#424242', 2).replace('x1="108"', 'x1="104"') +
    T(100, 160, 'Wasser H₂O', { b: 1 }) + T(100, 175, 'gewinkelt (104,5°)', { s: 9 }) + T(100, 190, 'Dipol', { s: 9 }) +
    at(290, 105, 'C', 14) + at(290, 60, 'H', 10) + at(290, 150, 'H', 10) + at(245, 105, 'H', 10) + at(335, 105, 'H', 10) + bd(290, 91, 290, 70) + bd(290, 119, 290, 140) + bd(276, 105, 255, 105) + bd(304, 105, 325, 105) +
    T(290, 180, 'Methan CH₄', { b: 1 }) + T(200, 207, 'H: 1 · O: 2 · N: 3 · C: 4 Bindungen', { s: 10 }));

  D['che8-02'] = S('#f3e5f5',
    T(200, 18, 'Ionenbindung: Elektronenübergang', { s: 13, b: 1 }) +
    C(80, 90, 40, 'none', '#ce93d8') + C(80, 90, 12, '#ab47bc') + T(80, 94, 'Na', { s: 9, b: 1, c: '#fff' }) + C(120, 90, 5, '#1e88e5') +
    C(260, 90, 34, 'none', '#a5d6a7') + C(260, 90, 12, '#66bb6a') + T(260, 94, 'Cl', { s: 9, b: 1 }) + (function () { var s = ''; for (var i = 0; i < 7; i++) { var a = i * 2 * Math.PI / 8 + 0.4; s += C((260 + 34 * Math.cos(a)).toFixed(1), (90 + 34 * Math.sin(a)).toFixed(1), 4, '#1e88e5'); } return s; })() +
    P('M125 85 Q175 50 222 82', 'none', '#e53935', 2) + A(214, 76, 222, 82, '#e53935', 2) + T(175, 52, 'e⁻', { s: 11, b: 1, c: '#c62828' }) +
    C(110, 170, 18, '#ab47bc') + T(110, 175, 'Na⁺', { s: 11, b: 1, c: '#fff' }) + C(240, 170, 24, '#66bb6a') + T(240, 175, 'Cl⁻', { s: 11, b: 1 }) + A(135, 170, 210, 170, '#555', 1.5) + A(210, 170, 135, 170, '#555', 1.5) + T(172, 162, 'ziehen sich an', { s: 9 }) +
    T(340, 160, 'Metall gibt ab', { s: 9 }) + T(340, 173, 'Nichtmetall', { s: 9 }) + T(340, 185, 'nimmt auf', { s: 9 }));

  D['che8-03'] = S('#fff',
    T(200, 18, 'Ionengitter von Kochsalz', { s: 13, b: 1 }) +
    (function () { var s = ''; for (var r = 0; r < 5; r++) for (var c = 0; c < 6; c++) { var na = (r + c) % 2 === 0, x = 50 + c * 34, y = 45 + r * 32; if (c < 5) s += Ln(x, y, x + 34, y, '#cfd8dc', 1.5); if (r < 4) s += Ln(x, y, x, y + 32, '#cfd8dc', 1.5); s += C(x, y, na ? 9 : 14, na ? '#ab47bc' : '#66bb6a') + T(x, y + 4, na ? '+' : '−', { s: 11, b: 1, c: na ? '#fff' : '#1b5e20' }); } return s; })() +
    C(300, 70, 9, '#ab47bc') + T(315, 74, 'Na⁺', { s: 10, a: 'start' }) + C(300, 100, 14, '#66bb6a') + T(320, 104, 'Cl⁻', { s: 10, a: 'start' }) +
    T(320, 140, 'abwechselnd + und −', { s: 9 }) + T(320, 155, 'Würfelkristalle', { s: 9 }) + T(320, 170, 'Schmelzpunkt 801 °C', { s: 9 }) + T(320, 185, 'gelöst: leitet Strom', { s: 9 }));

  D['che8-04'] = S('#fff',
    T(200, 18, 'Die pH-Skala', { s: 13, b: 1 }) +
    (function () { var s = '', c = ['#d50000', '#ff1744', '#ff6d00', '#ff9100', '#ffc400', '#ffea00', '#c6ff00', '#00e676', '#00bfa5', '#00b8d4', '#2979ff', '#3d5afe', '#651fff', '#6200ea', '#4a148c']; for (var i = 0; i < 15; i++) { s += R(20 + i * 24, 70, 24, 40, c[i]) + T(32 + i * 24, 125, i, { s: 10, b: 1 }); } return s; })() +
    T(80, 60, 'sauer', { b: 1, c: '#c62828' }) + T(200, 60, 'neutral', { b: 1, c: '#2e7d32' }) + T(320, 60, 'alkalisch', { b: 1, c: '#4527a0' }) +
    L(44, 115, 44, 150, 'Magensaft 1', 'middle') + L(80, 115, 80, 168, 'Zitrone 2–3', 'middle') + L(188, 115, 188, 150, 'Wasser 7', 'middle') + L(285, 115, 285, 168, 'Seife 9–10', 'middle') + L(356, 115, 356, 150, 'Rohrreiniger 14', 'middle').replace('x="359"', 'x="350"') +
    T(200, 205, 'Jede Stufe = zehnmal saurer bzw. alkalischer', { s: 10 }));

  D['che8-05'] = S('#e8f5e9',
    T(200, 18, 'Neutralisation', { s: 13, b: 1 }) +
    K(20, 50, 100, 34, 'Salzsäure HCl', '#ffcdd2', { s: 10, b: 1 }) + T(140, 72, '+', { s: 16, b: 1 }) + K(160, 50, 100, 34, 'Natronlauge NaOH', '#c5cae9', { s: 10, b: 1 }) + A(265, 67, 290, 67) + K(295, 50, 95, 34, 'NaCl + H₂O', '#fff', { s: 10, b: 1 }) +
    C(120, 140, 14, '#ef9a9a') + T(120, 145, 'H⁺', { s: 11, b: 1 }) + T(150, 146, '+', { s: 16, b: 1 }) + C(185, 140, 16, '#9fa8da') + T(185, 145, 'OH⁻', { s: 10, b: 1 }) + A(210, 140, 240, 140) + at(270, 135, 'O', 12) + at(256, 150, 'H', 8) + at(284, 150, 'H', 8) +
    T(200, 185, 'Säure + Lauge → Salz + Wasser', { s: 11, b: 1 }) + T(200, 200, 'es wird warm · pH geht Richtung 7', { s: 9 }));

  D['che8-06'] = S('#fffde7',
    T(200, 18, 'Reaktionsgleichung ausgleichen', { s: 13, b: 1 }) +
    at(40, 80, 'H', 9) + at(56, 80, 'H', 9) + at(40, 110, 'H', 9) + at(56, 110, 'H', 9) + T(85, 100, '+', { s: 16, b: 1 }) + at(115, 95, 'O', 11) + at(137, 95, 'O', 11) + A(165, 95, 205, 95) +
    at(245, 80, 'O', 11) + at(231, 92, 'H', 7) + at(259, 92, 'H', 7) + at(245, 120, 'O', 11) + at(231, 132, 'H', 7) + at(259, 132, 'H', 7) +
    T(48, 145, '2 H₂', { s: 12, b: 1 }) + T(126, 145, 'O₂', { s: 12, b: 1 }) + T(245, 160, '2 H₂O', { s: 12, b: 1 }) +
    T(330, 80, 'links: 4 H, 2 O', { s: 10 }) + T(330, 96, 'rechts: 4 H, 2 O', { s: 10 }) + T(330, 116, '✓ ausgeglichen', { s: 11, b: 1, c: '#2e7d32' }) +
    T(200, 195, 'Nur die Zahlen VOR den Formeln ändern!', { s: 11, b: 1, c: '#c62828' }));

  // Klasse 9
  D['che9-01'] = S('#fff3e0',
    T(200, 18, '1 Mol = 6 · 10²³ Teilchen', { s: 13, b: 1 }) +
    (function () { var s = '', d = [['Kohlenstoff', '12 g', '#616161', 30], ['Wasser', '18 g', '#4fc3f7', 40], ['Kochsalz', '58,5 g', '#f5f5f5', 55], ['Eisen', '56 g', '#90a4ae', 52]]; d.forEach(function (x, i) { var X = 55 + i * 95; s += P('M' + (X - 32) + ' 150 L' + (X + 32) + ' 150 L' + (X + 22) + ' 160 L' + (X - 22) + ' 160Z', '#cfd8dc') + E(X, 150 - x[3] / 3, x[3] / 2 + 4, x[3] / 3, x[2], '#757575') + T(X, 182, x[0], { s: 10, b: 1 }) + T(X, 197, x[1], { s: 10 }); }); return s; })() +
    T(200, 48, 'n = m : M', { s: 13, b: 1 }) + T(200, 66, 'Molare Masse M aus dem Periodensystem', { s: 9 }));

  D['che9-02'] = S('#fff',
    T(200, 18, 'Chemisches Rechnen: der Weg', { s: 13, b: 1 }) +
    K(10, 60, 70, 40, 'Masse (g)', '#ffe0b2', { s: 10, b: 1 }) + A(82, 80, 102, 80) + K(104, 60, 70, 40, 'Stoffmenge', '#c8e6c9', { s: 10, b: 1 }) + A(176, 80, 196, 80) +
    K(198, 60, 70, 40, 'Verhältnis', '#bbdefb', { s: 10, b: 1 }) + A(270, 80, 290, 80) + K(292, 60, 50, 40, 'mol', '#c8e6c9', { s: 10, b: 1 }) + A(344, 80, 356, 80) + K(358, 60, 36, 40, 'g', '#ffe0b2', { s: 10, b: 1 }) +
    T(45, 115, '24 g C', { s: 9 }) + T(140, 115, ': 12 g/mol = 2 mol', { s: 9 }) + T(233, 115, 'C : CO₂ = 1 : 1', { s: 9 }) + T(317, 115, '2 mol', { s: 9 }) + T(376, 115, '88 g', { s: 9 }) +
    T(200, 150, 'C + O₂ → CO₂', { s: 13, b: 1 }) + T(200, 172, '2 mol · 44 g/mol = 88 g CO₂', { s: 11 }) + T(200, 200, 'Konzentration: c = n : V (mol/L)', { s: 10 }));

  D['che9-03'] = S('#e3f2fd',
    T(200, 18, 'Elektrolyse von Wasser', { s: 13, b: 1 }) +
    R(110, 40, 30, 130, '#e1f5fe', '#455a64') + R(210, 40, 30, 130, '#e1f5fe', '#455a64') + R(110, 105, 30, 65, '#4fc3f7') + R(210, 72, 30, 98, '#4fc3f7') + R(110, 160, 130, 25, '#4fc3f7', '#455a64') +
    R(120, 130, 10, 40, '#424242') + R(220, 130, 10, 40, '#424242') + P('M125 185 L125 200 L165 200 M185 200 L225 200 L225 185', 'none', '#e53935', 2) + Ln(170, 192, 170, 208, '#333', 2) + Ln(178, 196, 178, 204, '#333', 4) +
    T(125, 62, 'H₂', { s: 12, b: 1 }) + T(225, 62, 'O₂', { s: 12, b: 1 }) + T(80, 140, 'Minuspol', { s: 9 }) + T(80, 152, '(Kathode)', { s: 8 }) + T(275, 140, 'Pluspol', { s: 9 }) + T(275, 152, '(Anode)', { s: 8 }) +
    T(330, 70, '2 H₂O →', { s: 11, b: 1 }) + T(330, 86, '2 H₂ + O₂', { s: 11, b: 1 }) + T(330, 110, 'doppelt so viel', { s: 9 }) + T(330, 122, 'Wasserstoff', { s: 9 }) + T(330, 160, 'grüner Wasserstoff', { s: 9, b: 1, c: '#2e7d32' }) + T(330, 172, 'mit Ökostrom', { s: 9 }));

  D['che9-04'] = S('#fffde7',
    T(200, 18, 'Die Zitronenbatterie', { s: 13, b: 1 }) + E(150, 135, 85, 55, '#fff176', '#f9a825') + E(150, 135, 70, 42, '#fff59d') +
    R(108, 65, 12, 85, '#b0bec5', '#607d8b') + R(180, 65, 12, 85, '#ff8a65', '#bf360c') + T(114, 60, 'Zink', { s: 10, b: 1 }) + T(186, 60, 'Kupfer', { s: 10, b: 1 }) +
    P('M114 65 L114 40 L135 40 M165 40 L186 40 L186 65', 'none', '#333', 2) + C(150, 40, 13, '#fff', '#333') + T(150, 44, 'V', { s: 11, b: 1 }) +
    A(128, 33, 140, 33, '#1e88e5', 1.5) + T(100, 28, 'e⁻', { s: 10, b: 1, c: '#1565c0' }) + T(114, 200, '− Pol', { s: 10, b: 1 }) + T(186, 200, '+ Pol', { s: 10, b: 1 }) +
    T(320, 70, 'unedles Metall', { s: 10 }) + T(320, 84, 'gibt Elektronen ab', { s: 10 }) + T(320, 120, 'Akku: wiederaufladbar', { s: 10, b: 1 }) + T(320, 150, 'Batterien in die', { s: 9 }) + T(320, 162, 'Sammelbox!', { s: 9, b: 1 }));

  D['che9-05'] = S('#eceff1',
    T(200, 18, 'Fraktionierte Destillation von Erdöl', { s: 13, b: 1 }) +
    R(150, 35, 70, 165, '#cfd8dc', '#455a64', 6) + (function () { var s = '', f = [['Gase', '#e3f2fd'], ['Benzin', '#fff9c4'], ['Kerosin', '#ffe0b2'], ['Diesel', '#ffcc80'], ['Heizöl', '#bcaaa4'], ['Bitumen', '#5d4037']]; f.forEach(function (x, i) { var y = 50 + i * 25; s += Ln(150, y + 18, 220, y + 18, '#90a4ae', 1) + A(222, y + 8, 260, y + 8, '#555', 1.5) + R(262, y, 70, 16, x[1], '#999', 4) + T(297, y + 12, x[0], { s: 9, b: 1, c: i === 5 ? '#fff' : '#212121' }); }); return s; })() +
    A(80, 185, 145, 185, '#e65100', 2.5) + T(70, 175, 'heißes Erdöl', { s: 10, b: 1 }) + T(70, 190, '≈ 400 °C', { s: 9 }) +
    T(60, 60, 'oben kühl:', { s: 9 }) + T(60, 72, 'kurze Ketten', { s: 9 }) + T(60, 130, 'unten heiß:', { s: 9 }) + T(60, 142, 'lange Ketten', { s: 9 }));

  D['che9-06'] = S('#fff',
    T(200, 18, 'Alkohol und Carbonsäure', { s: 13, b: 1 }) +
    at(50, 100, 'C') + at(100, 100, 'C') + at(150, 100, 'O') + at(180, 100, 'H', 8) + bd(61, 100, 89, 100) + bd(111, 100, 139, 100) + bd(161, 100, 172, 100) +
    at(50, 68, 'H', 8) + at(50, 132, 'H', 8) + at(22, 100, 'H', 8) + at(100, 68, 'H', 8) + at(100, 132, 'H', 8) + bd(50, 89, 50, 76) + bd(50, 111, 50, 124) + bd(39, 100, 30, 100) + bd(100, 89, 100, 76) + bd(100, 111, 100, 124) +
    R(135, 85, 55, 30, 'none', '#e53935').replace('stroke="#e53935"', 'stroke="#e53935" stroke-dasharray="4 3"') + T(100, 160, 'Ethanol', { b: 1 }) + T(100, 174, '–OH-Gruppe', { s: 9, c: '#c62828' }) +
    at(250, 100, 'C') + at(300, 100, 'C') + at(300, 65, 'O') + at(345, 110, 'O') + at(372, 110, 'H', 8) + bd(261, 100, 289, 100) + bd(300, 89, 300, 76, 2) + bd(310, 104, 334, 108) + bd(356, 110, 364, 110) +
    at(250, 68, 'H', 8) + at(250, 132, 'H', 8) + at(222, 100, 'H', 8) + bd(250, 89, 250, 76) + bd(250, 111, 250, 124) + bd(239, 100, 230, 100) +
    R(286, 52, 98, 72, 'none', '#1e88e5').replace('stroke="#1e88e5"', 'stroke="#1e88e5" stroke-dasharray="4 3"') + T(300, 160, 'Essigsäure', { b: 1 }) + T(300, 174, '–COOH-Gruppe', { s: 9, c: '#1565c0' }) +
    T(200, 205, 'Alkohol + Carbonsäure → Ester + Wasser', { s: 10 }));

  // Klasse 10
  D['che10-01'] = S('#e8eaf6',
    T(200, 18, 'Einstellung des Gleichgewichts', { s: 13, b: 1 }) + Z.Ax(40, 190, 330, 160, 'Zeit', 'Konzentration') +
    P('M40 45 Q110 100 180 120 L370 120', 'none', '#e53935', 3) + P('M40 188 Q110 125 180 98 L370 98', 'none', '#1e88e5', 3) + Ln(180, 40, 180, 190, '#999', 1, '4 3') +
    T(70, 58, 'Ausgangsstoffe', { s: 10, c: '#c62828', b: 1, a: 'start' }) + T(60, 175, 'Produkte', { s: 10, c: '#1565c0', b: 1, a: 'start' }) + T(275, 75, 'Gleichgewicht:', { s: 10, b: 1 }) + T(275, 89, 'Mengen bleiben gleich', { s: 9 }) +
    T(275, 155, 'A + B ⇌ C', { s: 13, b: 1 }) + T(275, 172, 'hin und zurück gleich schnell', { s: 9 }));

  D['che10-02'] = S('#fff',
    T(200, 18, 'Katalysator senkt die Aktivierungsenergie', { s: 13, b: 1 }) + Z.Ax(40, 195, 330, 165, 'Reaktionsverlauf', 'Energie') +
    P('M40 130 L90 130 Q150 30 210 160 L370 165', 'none', '#e53935', 3) + P('M40 130 L90 130 Q150 85 210 160 L370 165', 'none', '#43a047', 3).replace('/>', ' stroke-dasharray="6 4"/>') +
    A(70, 130, 70, 62, '#c62828', 1.5) + T(66, 95, 'ohne', { s: 9, a: 'end' }) + A(110, 130, 110, 100, '#2e7d32', 1.5) + T(116, 118, 'mit', { s: 9, a: 'start' }) +
    T(280, 60, 'schneller durch:', { s: 10, b: 1 }) + T(280, 76, 'Wärme', { s: 9 }) + T(280, 89, 'große Oberfläche', { s: 9 }) + T(280, 102, 'hohe Konzentration', { s: 9 }) + T(280, 115, 'Katalysator', { s: 9, b: 1, c: '#2e7d32' }));

  D['che10-03'] = S('#fff8e1',
    T(200, 18, 'Wichtige organische Stoffklassen', { s: 13, b: 1 }) +
    at(60, 95, 'C') + at(60, 62, 'H', 8) + at(60, 128, 'H', 8) + at(28, 95, 'H', 8) + at(92, 95, 'H', 8) + bd(60, 84, 60, 70) + bd(60, 106, 60, 120) + bd(49, 95, 36, 95) + bd(71, 95, 84, 95) + T(60, 158, 'Methan', { b: 1 }) + T(60, 172, 'Alkan: Einfachbindung', { s: 8 }) +
    at(175, 95, 'C') + at(220, 95, 'C') + bd(186, 95, 209, 95, 2) + at(155, 75, 'H', 8) + at(155, 115, 'H', 8) + at(240, 75, 'H', 8) + at(240, 115, 'H', 8) + bd(166, 89, 161, 81) + bd(166, 101, 161, 109) + bd(229, 89, 234, 81) + bd(229, 101, 234, 109) + T(198, 158, 'Ethen', { b: 1 }) + T(198, 172, 'Alken: C=C', { s: 8 }) +
    at(300, 95, 'C') + at(340, 95, 'O') + at(366, 95, 'H', 8) + bd(311, 95, 329, 95) + bd(351, 95, 358, 95) + at(300, 62, 'H', 8) + at(300, 128, 'H', 8) + at(268, 95, 'H', 8) + bd(300, 84, 300, 70) + bd(300, 106, 300, 120) + bd(289, 95, 276, 95) + T(320, 158, 'Methanol', { b: 1 }) + T(320, 172, 'Alkohol: –OH', { s: 8 }) +
    T(200, 205, 'meth 1 · eth 2 · prop 3 · but 4 · pent 5 · hex 6', { s: 10 }));

  D['che10-04'] = S('#f3e5f5',
    T(200, 18, 'Polymere: lange Ketten', { s: 13, b: 1 }) +
    (function () { var s = ''; for (var i = 0; i < 5; i++) s += C(30 + i * 22, 60, 8, '#ab47bc'); s += A(140, 60, 170, 60); for (var j = 0; j < 9; j++) s += C(180 + j * 22, 60, 8, '#ab47bc') + (j < 8 ? Ln(188 + j * 22, 60, 194 + j * 22, 60, '#4a148c', 3) : ''); return s + T(75, 85, 'Monomere', { s: 9 }) + T(270, 85, 'Polymer (Kunststoff)', { s: 9 }); })() +
    P('M20 120 q20 -15 40 0 t40 0 t40 0 M20 140 q20 15 40 0 t40 0 t40 0 M20 160 q20 -15 40 0 t40 0 t40 0', 'none', '#7b1fa2', 2.5) + T(80, 190, 'Thermoplast', { s: 10, b: 1 }) + T(80, 204, 'schmelzbar', { s: 8 }) +
    P('M150 120 L250 120 M150 145 L250 145 M150 170 L250 170 M165 120 L175 145 L165 170 M200 120 L210 145 L195 170 M235 120 L230 145 L240 170', 'none', '#7b1fa2', 2.5) + T(200, 190, 'Duroplast', { s: 10, b: 1 }) + T(200, 204, 'eng vernetzt', { s: 8 }) +
    P('M280 125 q20 -10 40 0 t40 0 M280 165 q20 10 40 0 t40 0 M300 120 L305 168 M350 128 L345 166', 'none', '#7b1fa2', 2.5) + T(320, 190, 'Elastomer', { s: 10, b: 1 }) + T(320, 204, 'locker vernetzt', { s: 8 }));

  D['che10-05'] = S('#fff8e1',
    T(200, 18, 'Bausteine der Nährstoffe', { s: 13, b: 1 }) +
    R(20, 50, 22, 80, '#ffcc80', '#e65100', 4) + T(31, 145, 'Glycerin', { s: 9 }) + (function () { var s = ''; for (var i = 0; i < 3; i++) s += P('M42 ' + (60 + i * 28) + ' l14 -6 l14 6 l14 -6 l14 6 l14 -6 l14 6 l14 -6 l14 6', 'none', '#f9a825', 3); return s; })() + T(100, 160, 'Fett', { s: 11, b: 1 }) + T(100, 174, 'Glycerin + 3 Fettsäuren', { s: 9 }) +
    (function () { var s = '', c = ['#ef5350', '#42a5f5', '#66bb6a', '#ffca28', '#ab47bc', '#26a69a']; for (var i = 0; i < 6; i++) s += C(225 + i * 26, 80, 10, c[i]) + (i < 5 ? Ln(235 + i * 26, 80, 241 + i * 26, 80, '#424242', 2) : ''); return s; })() + T(290, 115, 'Eiweiß', { s: 11, b: 1 }) + T(290, 129, 'Kette aus Aminosäuren', { s: 9 }) +
    (function () { var s = ''; for (var i = 0; i < 4; i++) s += '<polygon points="' + [0, 1, 2, 3, 4, 5].map(function (k) { var a = k * Math.PI / 3; return (240 + i * 34 + 12 * Math.cos(a)).toFixed(1) + ',' + (165 + 12 * Math.sin(a)).toFixed(1); }).join(' ') + '" fill="#fff59d" stroke="#f9a825"/>' + (i < 3 ? Ln(252 + i * 34, 165, 262 + i * 34, 165, '#424242', 2) : ''); return s; })() + T(290, 195, 'Stärke: Zuckerbausteine', { s: 9, b: 1 }));

  D['che10-06'] = S('#e3f2fd',
    T(200, 18, 'Der Treibhauseffekt', { s: 13, b: 1 }) + Z.Sonne(45, 50, 16) +
    P('M0 175 Q200 160 400 175 L400 220 L0 220Z', '#81c784') + P('M0 80 Q200 60 400 80', 'none', '#90a4ae', 10).replace('/>', ' opacity=".5"/>') + T(330, 60, 'Treibhausgase (CO₂, Methan)', { s: 9 }) +
    A(60, 70, 140, 165, '#f9a825', 2.5) + T(110, 105, 'Sonnenlicht', { s: 9, a: 'end' }) + A(170, 165, 220, 85, '#e53935', 2) + A(220, 85, 255, 160, '#e53935', 2) + A(280, 165, 300, 55, '#e53935', 1.5) +
    T(240, 120, 'Wärme wird', { s: 9, a: 'start' }) + T(240, 132, 'zurückgehalten', { s: 9, a: 'start' }) + R(345, 150, 30, 30, '#78909c') + P('M360 148 q-6 -10 0 -18 q6 -8 0 -16', 'none', '#b0bec5', 3) + T(200, 205, 'mehr CO₂ → wärmere Erde', { s: 10, b: 1 }));

  // Klasse 11
  D['che11-01'] = S('#ede7f6',
    T(200, 18, 'Orbitale', { s: 13, b: 1 }) +
    C(60, 100, 30, '#9fa8da').replace('/>', ' opacity=".7"/>') + C(60, 100, 3, '#333') + T(60, 150, 's-Orbital', { b: 1 }) + T(60, 164, 'kugelförmig', { s: 9 }) +
    E(170, 70, 14, 28, '#ef9a9a').replace('/>', ' opacity=".8"/>') + E(170, 130, 14, 28, '#ef9a9a').replace('/>', ' opacity=".8"/>') + C(170, 100, 3, '#333') + T(170, 175, 'p-Orbital', { b: 1 }) + T(170, 189, 'hantelförmig, 3 Stück', { s: 9 }) +
    (function () { var s = '', lv = [['1s', 190, 1], ['2s', 150, 1], ['2p', 130, 3], ['3s', 95, 1], ['3p', 75, 3]], e = { '1s': 2, '2s': 2, '2p': 4 }; lv.forEach(function (l) { for (var i = 0; i < l[2]; i++) { var x = 270 + i * 34; s += R(x, l[1] - 12, 28, 16, '#fff', '#5e35b1'); var n = e[l[0]] || 0, here = l[2] === 1 ? n : (n >= l[2] + i + 1 ? 2 : (n > i ? 1 : 0)); if (here >= 1) s += T(x + 9, l[1] + 1, '↑', { s: 11, b: 1 }); if (here === 2) s += T(x + 19, l[1] + 1, '↓', { s: 11, b: 1 }); } s += T(262, l[1], l[0], { s: 9, a: 'end' }); }); return s; })() +
    T(320, 40, 'Sauerstoff: 1s² 2s² 2p⁴', { s: 10, b: 1 }) + T(320, 210, 'max. 2 e⁻ pro Kästchen', { s: 9 }));

  D['che11-02'] = S('#e1f5fe',
    T(200, 18, 'Wasserstoffbrücken zwischen Wassermolekülen', { s: 13, b: 1 }) +
    (function () { function w(x, y, r) { var a = r * Math.PI / 180; function p(dx, dy) { return [(x + dx * Math.cos(a) - dy * Math.sin(a)).toFixed(1), (y + dx * Math.sin(a) + dy * Math.cos(a)).toFixed(1)]; } var h1 = p(-20, 16), h2 = p(20, 16); return bd(x, y, +h1[0], +h1[1]) + bd(x, y, +h2[0], +h2[1]) + at(x, y, 'O', 13) + at(+h1[0], +h1[1], 'H', 8) + at(+h2[0], +h2[1], 'H', 8) + T(x, y - 18, 'δ−', { s: 9, c: '#c62828' }); }
      return w(90, 80, 0) + w(200, 130, 30) + w(310, 80, -20) + w(110, 170, 160); })() +
    Ln(110, 96, 185, 124, '#1e88e5', 2, '3 3') + Ln(222, 140, 292, 92, '#1e88e5', 2, '3 3') + Ln(126, 156, 185, 138, '#1e88e5', 2, '3 3') +
    T(320, 160, '- - - Wasserstoffbrücke', { s: 10, c: '#1565c0', b: 1 }) + T(320, 178, '→ hoher Siedepunkt', { s: 9 }) + T(320, 192, '→ Eis schwimmt', { s: 9 }));

  D['che11-03'] = S('#fff',
    T(200, 18, 'Titrationskurve: starke Säure mit Lauge', { s: 13, b: 1 }) + Z.Ax(50, 195, 320, 165, 'zugegebene Lauge in mL', 'pH') +
    P('M50 175 Q150 170 190 160 Q205 150 210 110 Q215 70 230 60 Q280 50 370 45', 'none', '#7b1fa2', 3) +
    Ln(50, 110, 370, 110, '#43a047', 1, '4 3') + C(210, 110, 5, '#e53935') + T(218, 115, 'Äquivalenzpunkt (pH 7)', { s: 10, a: 'start', b: 1 }) + T(46, 179, '1', { s: 9, a: 'end' }) + T(46, 114, '7', { s: 9, a: 'end' }) + T(46, 49, '13', { s: 9, a: 'end' }) +
    T(120, 150, 'sauer', { s: 9, c: '#c62828' }) + T(310, 38, 'alkalisch', { s: 9, c: '#4527a0' }));

  D['che11-04'] = S('#fff3e0',
    T(200, 18, 'Redoxreihe der Metalle', { s: 13, b: 1 }) +
    (function () { var s = '', m = [['Li', '#ffcdd2'], ['K', '#ffcdd2'], ['Na', '#ffcdd2'], ['Mg', '#ffe0b2'], ['Al', '#ffe0b2'], ['Zn', '#fff9c4'], ['Fe', '#fff9c4'], ['Pb', '#f0f4c3'], ['H₂', '#e3f2fd'], ['Cu', '#dcedc8'], ['Ag', '#c8e6c9'], ['Au', '#a5d6a7']]; m.forEach(function (x, i) { s += R(14 + i * 31, 70, 29, 40, x[1], '#999', 4) + T(28 + i * 31, 95, x[0], { s: 11, b: 1 }); }); return s; })() +
    A(20, 130, 380, 130, '#555', 2) + T(20, 150, 'unedel: gibt leicht Elektronen ab', { s: 10, a: 'start', c: '#c62828' }) + T(380, 165, 'edel: behält Elektronen', { s: 10, a: 'end', c: '#2e7d32' }) +
    T(200, 200, 'Fe + Cu²⁺ → Fe²⁺ + Cu  (Eisennagel wird verkupfert)', { s: 10, b: 1 }));

  D['che11-05'] = S('#fff',
    T(200, 18, 'Energiediagramm: exotherme Reaktion', { s: 13, b: 1 }) + Z.Ax(40, 195, 330, 165, 'Reaktionsverlauf', 'Enthalpie H') +
    P('M40 90 L100 90 Q160 30 220 150 L370 150', 'none', '#e53935', 3) + Ln(100, 90, 370, 90, '#999', 1, '4 3') + A(320, 92, 320, 148, '#1565c0', 2) + T(326, 125, 'ΔH < 0', { s: 11, b: 1, a: 'start', c: '#1565c0' }) +
    A(130, 90, 130, 55, '#555', 1.5) + T(136, 70, 'Aktivierungsenergie', { s: 9, a: 'start' }) + T(70, 84, 'Edukte', { s: 10 }) + T(260, 168, 'Produkte', { s: 10 }) +
    T(285, 62, 'ΔG = ΔH − T·ΔS · ΔG < 0: freiwillig', { s: 9 }));

  // Klasse 12
  D['che12-01'] = S('#fff8e1',
    T(200, 18, 'Oxidationsreihe der Alkohole', { s: 13, b: 1 }) +
    T(60, 70, 'R–CH₂–OH', { s: 13, b: 1 }) + T(60, 92, 'primärer Alkohol', { s: 9 }) + A(110, 70, 150, 70, '#e65100', 2) + T(130, 60, 'Ox.', { s: 9 }) +
    T(200, 70, 'R–CHO', { s: 13, b: 1 }) + T(200, 92, 'Aldehyd', { s: 9 }) + A(240, 70, 280, 70, '#e65100', 2) + T(260, 60, 'Ox.', { s: 9 }) + T(335, 70, 'R–COOH', { s: 13, b: 1 }) + T(335, 92, 'Carbonsäure', { s: 9 }) +
    T(60, 140, 'sekundärer Alkohol', { s: 10 }) + A(115, 136, 150, 136, '#e65100', 2) + T(200, 140, 'Keton', { s: 10, b: 1 }) +
    R(250, 120, 130, 60, '#fff', '#c62828', 6) + T(315, 140, 'Fehling-Probe:', { s: 10, b: 1 }) + T(315, 155, 'Aldehyd →', { s: 9 }) + T(315, 168, 'ziegelrot', { s: 9, c: '#c62828', b: 1 }) +
    T(200, 205, '-ol · -al · -on · -säure · -ester · -amin', { s: 10 }));

  D['che12-02'] = S('#f3e5f5',
    T(200, 18, 'Elektrophile Addition: Brom an Ethen', { s: 13, b: 1 }) +
    at(40, 100, 'C') + at(80, 100, 'C') + bd(51, 100, 69, 100, 2) + T(60, 140, 'Ethen', { s: 9 }) + T(110, 106, '+', { s: 16, b: 1 }) +
    C(140, 100, 11, '#a1887f') + T(140, 104, 'Br', { s: 9, b: 1, c: '#fff' }) + C(165, 100, 11, '#a1887f') + T(165, 104, 'Br', { s: 9, b: 1, c: '#fff' }) + Ln(151, 100, 154, 100, '#424242', 2) + T(152, 140, 'Brom (braun)', { s: 9 }) +
    A(190, 100, 225, 100) +
    at(255, 100, 'C') + at(295, 100, 'C') + bd(266, 100, 284, 100) + C(255, 65, 11, '#a1887f') + T(255, 69, 'Br', { s: 9, b: 1, c: '#fff' }) + C(295, 135, 11, '#a1887f') + T(295, 139, 'Br', { s: 9, b: 1, c: '#fff' }) + bd(255, 89, 255, 76) + bd(295, 111, 295, 124) + T(275, 165, 'Dibromethan (farblos)', { s: 9 }) +
    T(355, 80, 'Doppelbindung', { s: 9 }) + T(355, 92, 'wird zu', { s: 9 }) + T(355, 104, 'Einfachbindung', { s: 9 }) +
    T(200, 200, 'Bromwasser entfärbt sich → Nachweis für C=C', { s: 10, b: 1 }));

  D['che12-03'] = S('#fff',
    T(200, 18, 'Benzol C₆H₆', { s: 13, b: 1 }) +
    (function () { function ring(cx, cy, mode) { var pts = [], s = ''; for (var k = 0; k < 6; k++) { var a = Math.PI / 6 + k * Math.PI / 3; pts.push([cx + 34 * Math.cos(a), cy + 34 * Math.sin(a)]); } for (var i = 0; i < 6; i++) { var p = pts[i], q = pts[(i + 1) % 6]; s += Ln(p[0].toFixed(1), p[1].toFixed(1), q[0].toFixed(1), q[1].toFixed(1), '#424242', 2.5); if ((mode === 1 && i % 2 === 0) || (mode === 2 && i % 2 === 1)) { var mx = cx + (p[0] + q[0] - 2 * cx) * 0.4, my = cy + (p[1] + q[1] - 2 * cy) * 0.4; var dx = (q[0] - p[0]) * 0.3, dy = (q[1] - p[1]) * 0.3; s += Ln((mx - dx).toFixed(1), (my - dy).toFixed(1), (mx + dx).toFixed(1), (my + dy).toFixed(1), '#424242', 2.5); } } if (mode === 3) s += C(cx, cy, 20, 'none', '#1e88e5').replace('stroke="#1e88e5"', 'stroke="#1e88e5" stroke-width="2.5"'); return s; }
      return ring(70, 100, 1) + T(125, 105, '↔', { s: 18 }) + ring(180, 100, 2) + T(240, 105, '=', { s: 18 }) + ring(310, 100, 3); })() +
    T(125, 160, 'Kekulé-Grenzformeln', { s: 10, b: 1 }) + T(310, 160, 'delokalisierte Elektronen', { s: 10, b: 1, c: '#1565c0' }) + T(200, 195, 'stabiler Ring · 6 π-Elektronen · reagiert durch Substitution', { s: 10 }));

  D['che12-04'] = S('#eceff1',
    T(200, 18, 'Daniell-Element', { s: 13, b: 1 }) +
    glas(40, 90, 110, 90, '#e0e0e0', 70) + glas(250, 90, 110, 90, '#90caf9', 70) + R(85, 70, 16, 100, '#9e9e9e', '#616161') + R(300, 70, 16, 100, '#ff8a65', '#bf360c') +
    P('M130 115 L130 80 L270 80 L270 115', 'none', '#fff8e1', 14) + P('M130 115 L130 80 L270 80 L270 115', 'none', '#bcaaa4', 2) + T(200, 74, 'Salzbrücke', { s: 9 }) +
    P('M93 70 L93 45 L180 45 M220 45 L308 45 L308 70', 'none', '#333', 2) + C(200, 45, 14, '#fff', '#333') + T(200, 49, '1,1 V', { s: 9, b: 1 }) + A(150, 38, 175, 38, '#1e88e5', 1.5) + T(140, 34, 'e⁻', { s: 10, b: 1, c: '#1565c0' }) +
    T(93, 196, 'Zink: − Pol', { s: 10, b: 1 }) + T(93, 210, 'Zn → Zn²⁺ + 2e⁻', { s: 9 }) + T(308, 196, 'Kupfer: + Pol', { s: 10, b: 1 }) + T(308, 210, 'Cu²⁺ + 2e⁻ → Cu', { s: 9 }));

  D['che12-05'] = S('#fff',
    T(200, 18, 'Papierchromatografie', { s: 13, b: 1 }) +
    glas(60, 40, 120, 160, '#e1f5fe', 25) + R(80, 30, 80, 160, '#fafafa', '#bdbdbd') + Ln(80, 160, 160, 160, '#9e9e9e', 1, '3 3') + Ln(80, 60, 160, 60, '#90a4ae', 1, '3 3') +
    C(105, 160, 4, '#424242') + C(105, 140, 5, '#ffeb3b') + C(105, 110, 6, '#42a5f5') + C(105, 78, 5, '#ec407a') + C(140, 160, 4, '#43a047') + C(140, 120, 6, '#43a047') +
    T(45, 164, 'Start', { s: 9, a: 'end' }) + T(56, 64, 'Front', { s: 9, a: 'end' }) +
    T(290, 60, 'Schwarzer Filzstift', { s: 10, b: 1 }) + T(290, 74, '= Gemisch aus Farben', { s: 10 }) + T(290, 110, 'Stoffe wandern', { s: 10 }) + T(290, 124, 'verschieden schnell', { s: 10 }) + T(290, 160, 'Flammenfärbung:', { s: 10, b: 1 }) + T(290, 174, 'Na gelb · K violett', { s: 9 }) + T(290, 187, 'Li rot · Cu grün', { s: 9 }));

  // Klasse 13
  D['che13-01'] = S('#e8f5e9',
    T(200, 18, 'Proteinstruktur', { s: 13, b: 1 }) +
    (function () { var s = '', c = ['#ef5350', '#42a5f5', '#66bb6a', '#ffca28', '#ab47bc']; for (var i = 0; i < 5; i++) s += C(20 + i * 16, 60, 7, c[i]); return s; })() + T(55, 85, 'Primärstruktur', { s: 9, b: 1 }) + T(55, 97, 'Reihenfolge', { s: 8 }) +
    (function () { var d = ''; for (var i = 0; i <= 60; i++) { var x = 120 + i * 1.3, y = 60 + 14 * Math.sin(i / 60 * 5 * 2 * Math.PI); d += (i ? ' L' : 'M') + x.toFixed(1) + ' ' + y.toFixed(1); } return P(d, 'none', '#1e88e5', 3); })() + T(160, 85, 'Sekundär', { s: 9, b: 1 }) + T(160, 97, 'α-Helix', { s: 8 }) +
    P('M230 40 Q290 30 280 70 Q270 100 240 80 Q215 60 250 55 Q285 52 265 85', 'none', '#43a047', 3) + T(260, 110, 'Tertiär', { s: 9, b: 1 }) + T(260, 122, 'Faltung', { s: 8 }) +
    C(330, 55, 16, '#ffcdd2', '#c62828') + C(360, 55, 16, '#c5cae9', '#3949ab') + C(330, 85, 16, '#c5cae9', '#3949ab') + C(360, 85, 16, '#ffcdd2', '#c62828') + T(345, 115, 'Quartär', { s: 9, b: 1 }) + T(345, 127, 'Hämoglobin', { s: 8 }) +
    T(120, 160, '–CO–NH–', { s: 14, b: 1 }) + T(120, 178, 'Peptidbindung', { s: 10 }) + T(300, 160, 'Hitze zerstört die Form', { s: 10 }) + T(300, 174, '= Denaturierung', { s: 10, b: 1 }) + T(300, 195, 'Nachweis: Biuret (violett)', { s: 9 }));

  D['che13-02'] = S('#fff',
    T(200, 18, 'Farbe durch Absorption', { s: 13, b: 1 }) +
    (function () { var s = '', c = ['#e53935', '#ff9800', '#ffeb3b', '#43a047', '#1e88e5', '#7b1fa2']; for (var i = 0; i < 6; i++) { var a1 = -Math.PI / 2 + i * Math.PI / 3, a2 = a1 + Math.PI / 3, r = 60, cx = 100, cy = 115; s += P('M' + cx + ' ' + cy + ' L' + (cx + r * Math.cos(a1)).toFixed(1) + ' ' + (cy + r * Math.sin(a1)).toFixed(1) + ' A' + r + ' ' + r + ' 0 0 1 ' + (cx + r * Math.cos(a2)).toFixed(1) + ' ' + (cy + r * Math.sin(a2)).toFixed(1) + 'Z', c[i], '#fff', 2); } return s; })() +
    T(100, 195, 'gegenüber = Komplementärfarbe', { s: 9 }) +
    C(290, 100, 26, '#e53935') + T(290, 145, 'Tomate', { s: 10, b: 1 }) + T(290, 159, 'schluckt Blau-Grün', { s: 9 }) + T(290, 172, '→ wir sehen Rot', { s: 9 }) +
    T(300, 48, 'Konjugierte Doppelbindungen', { s: 9, b: 1 }) + T(300, 60, '= Farbstoff', { s: 9 }));

  D['che13-03'] = S('#f3e5f5',
    T(200, 18, 'Wie Polymere entstehen', { s: 13, b: 1 }) +
    K(20, 45, 360, 40, '', '#fff') + T(40, 70, 'Polymerisation:', { s: 10, b: 1, a: 'start' }) + T(150, 70, 'n · CH₂=CH₂  →  (–CH₂–CH₂–)ₙ   (Polyethylen)', { s: 10, a: 'start' }) +
    K(20, 95, 360, 40, '', '#fff') + T(40, 120, 'Polykondensation:', { s: 10, b: 1, a: 'start' }) + T(170, 120, 'Säure + Alkohol → Polyester + H₂O', { s: 10, a: 'start' }) +
    K(20, 145, 360, 40, '', '#fff') + T(40, 170, 'Polyaddition:', { s: 10, b: 1, a: 'start' }) + T(150, 170, 'ohne Abspaltung → Polyurethan', { s: 10, a: 'start' }) +
    T(200, 205, 'Recycling: werkstofflich · rohstofflich · energetisch', { s: 10 }));

  D['che13-04'] = S('#eceff1',
    T(200, 18, 'Haber-Bosch-Verfahren', { s: 13, b: 1 }) +
    K(10, 60, 70, 34, 'N₂ aus Luft', '#bbdefb', { s: 9, b: 1 }) + K(10, 110, 70, 34, 'H₂', '#e1f5fe', { s: 10, b: 1 }) + A(82, 77, 115, 95, '#555', 1.5) + A(82, 127, 115, 110, '#555', 1.5) +
    K(118, 80, 70, 40, 'Verdichter', '#cfd8dc', { s: 9 }) + T(153, 135, '≈ 200 bar', { s: 9 }) + A(190, 100, 215, 100) +
    R(218, 55, 60, 95, '#ffccbc', '#bf360c', 8) + T(248, 95, 'Reaktor', { s: 9, b: 1 }) + T(248, 110, '450 °C', { s: 9 }) + T(248, 125, 'Fe-Kat.', { s: 9 }) + A(280, 100, 305, 100) +
    K(308, 80, 80, 40, 'Kühler', '#b3e5fc', { s: 9 }) + A(348, 122, 348, 155) + K(308, 158, 80, 30, 'NH₃ flüssig', '#c8e6c9', { s: 9, b: 1 }) +
    P('M348 80 L348 40 L153 40 L153 78', 'none', '#e65100', 2) + A(153, 70, 153, 78, '#e65100', 2) + T(250, 34, 'Kreislauf: Rest zurück', { s: 9, c: '#e65100' }) +
    T(130, 200, 'N₂ + 3 H₂ ⇌ 2 NH₃', { s: 12, b: 1 }));

  D['che13-05'] = S('#fbe9e7',
    T(200, 18, 'Abitur Chemie: die großen Themen', { s: 13, b: 1 }) +
    C(200, 115, 34, '#fff', '#bf360c') + T(200, 112, 'Abitur', { b: 1 }) + T(200, 125, 'Chemie', { s: 10 }) +
    K(15, 40, 120, 30, 'Gleichgewicht', '#ffccbc', { b: 1, s: 10 }) + K(265, 40, 120, 30, 'Säure-Base', '#ffccbc', { b: 1, s: 10 }) + K(15, 160, 120, 30, 'Redox, Elektrochemie', '#ffccbc', { s: 10 }) + K(265, 160, 120, 30, 'Organische Chemie', '#ffccbc', { b: 1, s: 10 }) + K(140, 178, 120, 28, 'Farbstoffe, Polymere', '#ffccbc', { s: 9 }) +
    Ln(170, 100, 135, 70, '#bf360c', 1.5) + Ln(230, 100, 265, 70, '#bf360c', 1.5) + Ln(170, 130, 135, 160, '#bf360c', 1.5) + Ln(230, 130, 265, 160, '#bf360c', 1.5) + Ln(200, 149, 200, 178, '#bf360c', 1.5) +
    T(75, 110, 'Teilchenebene', { s: 10, b: 1 }) + T(75, 124, 'erklären', { s: 10 }) + T(325, 110, 'Gleichungen', { s: 10, b: 1 }) + T(325, 124, 'ausgleichen', { s: 10 }));
})();
