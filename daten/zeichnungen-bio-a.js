// Biologie Klasse 6 bis 9 – Schaubilder
(function () {
  var Z = window.ZH, D = window.ZEICHNUNGEN, S = Z.S, T = Z.T, L = Z.L, A = Z.A, K = Z.K, C = Z.C, E = Z.E, R = Z.R, P = Z.P, Ln = Z.Ln;
  var G = '#eef7ee';

  // Klasse 6
  D['bio6-01'] = S('#e3f2fd',
    T(200, 20, 'Entwicklung des Frosches (Metamorphose)', { s: 13, b: 1 }) +
    // Laich
    C(70, 70, 7, '#fff', '#555') + C(80, 64, 7, '#fff', '#555') + C(78, 76, 7, '#fff', '#555') + C(70, 70, 2.5, '#222') + C(80, 64, 2.5, '#222') + C(78, 76, 2.5, '#222') + T(75, 100, '1 Laich') +
    // Kaulquappe
    E(190, 66, 13, 9, '#5d4037') + P('M203 66 Q220 58 232 68 Q220 72 203 68Z', '#6d4c41') + T(205, 100, '2 Kaulquappe') +
    // Kaulquappe mit Beinen
    E(330, 70, 13, 9, '#5d4037') + P('M343 70 Q360 62 370 72 Q360 75 343 72Z', '#6d4c41') + Ln(325, 78, 318, 88, '#5d4037', 3) + Ln(335, 78, 342, 88, '#5d4037', 3) + T(335, 100, '3 Hinterbeine') +
    // Jungfrosch
    E(330, 165, 16, 11, '#7cb342') + Ln(320, 172, 310, 182, '#7cb342', 3) + Ln(340, 172, 350, 182, '#7cb342', 3) + Ln(322, 158, 314, 152, '#7cb342', 3) + P('M346 165 Q356 163 362 167', 'none', '#7cb342', 3) + T(330, 200, '4 Jungfrosch') +
    // Frosch
    E(150, 165, 26, 16, '#558b2f') + C(135, 150, 6, '#fff', '#33691e') + C(160, 150, 6, '#fff', '#33691e') + C(135, 150, 2.5, '#222') + C(160, 150, 2.5, '#222') +
    P('M128 176 Q110 190 100 186', 'none', '#558b2f', 4) + P('M172 176 Q190 190 200 186', 'none', '#558b2f', 4) + T(150, 205, '5 Frosch: Lunge und Beine') +
    A(95, 70, 170, 66) + A(240, 68, 310, 70) + A(335, 108, 335, 148) + A(305, 165, 190, 165) + A(110, 150, 78, 90));

  D['bio6-02'] = S('#fff3e0',
    T(200, 20, 'Zauneidechse – ein Reptil', { s: 13, b: 1 }) +
    P('M60 120 Q100 100 160 108 Q220 112 250 118 Q300 126 360 150 Q300 132 250 132 Q200 136 160 134 Q100 134 60 120Z', '#8d6e63', '#5d4037', 1.5) +
    P('M60 120 L40 116 Q36 120 40 124Z', '#8d6e63') + C(70, 116, 2.5, '#222') +
    Ln(120, 130, 108, 156, '#5d4037', 4) + Ln(108, 156, 98, 160, '#5d4037', 2) + Ln(200, 132, 214, 158, '#5d4037', 4) + Ln(214, 158, 224, 162, '#5d4037', 2) +
    Ln(130, 108, 118, 86, '#5d4037', 4) + Ln(205, 112, 218, 90, '#5d4037', 4) +
    (function () { var s = ''; for (var i = 0; i < 9; i++) s += '<path d="M' + (95 + i * 14) + ' 112 l6 4 l-6 4 l-6 -4z" fill="#6d4c41"/>'; return s; })() +
    L(150, 116, 150, 60, 'Hornschuppen: trockene Haut') + L(98, 160, 70, 190, 'Krallen') + L(330, 142, 300, 185, 'langer Schwanz', 'end') + L(70, 116, 40, 66, 'Lungenatmung', 'start') +
    E(355, 72, 18, 24, '#fffde7', '#a1887f') + T(355, 108, 'Ei mit ledriger', { s: 10 }) + T(355, 120, 'Schale an Land', { s: 10 }));

  D['bio6-03'] = S('#fffde7',
    T(200, 20, 'Bauplan eines Insekts', { s: 13, b: 1 }) +
    E(130, 110, 22, 20, '#6d4c41') + E(195, 110, 32, 22, '#8d6e63') + E(280, 110, 52, 26, '#a1887f') +
    (function () { var s = ''; for (var i = 0; i < 4; i++) s += Ln(250 + i * 16, 88, 250 + i * 16, 132, '#8d6e63', 1); return s; })() +
    P('M118 92 Q100 60 80 50', 'none', '#4e342e', 2) + P('M128 90 Q120 55 110 40', 'none', '#4e342e', 2) +
    C(120, 106, 7, '#37474f') +
    P('M180 92 Q210 40 260 46 Q230 70 196 94Z', '#bbdefb', '#90a4ae', 1) + P('M200 92 Q250 55 300 64 Q260 82 210 96Z', '#e3f2fd', '#90a4ae', 1) +
    Ln(180, 128, 160, 165, '#4e342e', 3) + Ln(195, 130, 195, 172, '#4e342e', 3) + Ln(210, 128, 232, 165, '#4e342e', 3) +
    Ln(180, 92, 165, 80, '#4e342e', 0) +
    T(130, 150, 'Kopf', { b: 1 }) + T(195, 190, 'Brust', { b: 1 }) + T(285, 150, 'Hinterleib', { b: 1 }) +
    L(105, 45, 50, 40, 'Fühler') + L(118, 106, 80, 128, 'Facettenauge') + L(240, 55, 300, 34, '4 Flügel') + L(232, 165, 290, 190, '6 Beine') +
    T(365, 160, 'Außen-', { s: 10 }) + T(365, 172, 'skelett', { s: 10 }));

  D['bio6-04'] = S('#f3e5f5',
    T(200, 20, 'Kreuzspinne – ein Spinnentier', { s: 13, b: 1 }) +
    (function () { var s = '', cx = 300, cy = 120; for (var i = 0; i < 12; i++) { var a = i * Math.PI / 6; s += Ln(cx, cy, (cx + 85 * Math.cos(a)).toFixed(0), (cy + 85 * Math.sin(a)).toFixed(0), '#b0bec5', 1); } for (var r = 15; r < 85; r += 12) s += C(cx, cy, r, 'none', '#cfd8dc'); return s; })() +
    E(130, 105, 20, 17, '#5d4037') + E(130, 145, 26, 30, '#795548') + P('M122 140 h16 M130 132 v16', 'none', '#fff', 2) +
    (function () { var s = ''; [[-1, 92], [-1, 100], [-1, 108], [-1, 116], [1, 92], [1, 100], [1, 108], [1, 116]].forEach(function (p, i) { var x = 130 + p[0] * 18, y = p[1]; var k = i % 4; s += P('M' + x + ' ' + y + ' Q' + (x + p[0] * 30) + ' ' + (y - 25 + k * 12) + ' ' + (x + p[0] * 50) + ' ' + (y - 5 + k * 20), 'none', '#4e342e', 2.5); }); return s; })() +
    L(130, 100, 30, 60, 'Kopfbrust', 'start') + L(140, 160, 60, 190, 'Hinterleib') + L(178, 140, 210, 190, '8 Beine') + L(130, 174, 130, 205, 'Spinnwarzen') +
    T(300, 215, 'Radnetz aus Spinnseide', { s: 10 }));

  D['bio6-05'] = S(G,
    T(200, 20, 'Aufbau einer Blütenpflanze', { s: 13, b: 1 }) +
    R(0, 160, 400, 60, '#d7ccc8') +
    P('M110 160 Q100 180 85 200 M110 160 Q112 185 108 210 M110 160 Q125 182 140 198 M108 180 Q95 186 90 192', 'none', '#8d6e63', 2) +
    Ln(110, 160, 110, 70, '#388e3c', 4) +
    P('M110 130 Q75 115 70 135 Q90 142 110 130Z', '#66bb6a') + P('M110 110 Q148 95 152 115 Q130 122 110 110Z', '#66bb6a') +
    (function () { var s = ''; for (var i = 0; i < 6; i++) { var a = i * Math.PI / 3; s += E((110 + 16 * Math.cos(a)).toFixed(1), (58 + 16 * Math.sin(a)).toFixed(1), 12, 8, '#ec407a'); } return s + C(110, 58, 8, '#ffeb3b'); })() +
    L(124, 52, 170, 40, 'Blüte') + L(148, 110, 175, 95, 'Laubblatt') + L(110, 145, 165, 150, 'Sprossachse') + L(130, 190, 170, 195, 'Wurzel') +
    // Blütenschnitt
    T(320, 44, 'Blüte im Schnitt', { b: 1 }) +
    P('M280 160 Q320 175 360 160', 'none', '#43a047', 3) + P('M285 150 Q270 100 300 80', 'none', '#ec407a', 6) + P('M355 150 Q370 100 340 80', 'none', '#ec407a', 6) +
    E(320, 145, 12, 14, '#aed581', '#558b2f') + Ln(320, 132, 320, 90, '#7cb342', 3) + E(320, 88, 6, 3, '#9ccc65') +
    Ln(305, 150, 300, 100, '#fbc02d', 2) + C(300, 98, 4, '#f9a825') + Ln(335, 150, 340, 100, '#fbc02d', 2) + C(340, 98, 4, '#f9a825') +
    L(322, 88, 350, 62, 'Narbe') + L(318, 152, 300, 200, 'Fruchtknoten', 'end') + L(300, 98, 262, 66, 'Staubblatt', 'end') + L(284, 125, 262, 118, 'Kronblatt', 'end'));

  D['bio6-06'] = S('#fff8e1',
    T(200, 20, 'Keimung einer Bohne', { s: 13, b: 1 }) + R(0, 120, 400, 100, '#d7ccc8') +
    E(60, 110, 20, 13, '#c8a165', '#8d6e63') + T(60, 205, '1 Samen quillt') +
    E(150, 110, 20, 13, '#c8a165', '#8d6e63') + P('M150 122 Q148 150 140 170', 'none', '#fff8e1', 3) + T(150, 205, '2 Keimwurzel') +
    E(245, 108, 18, 12, '#c8a165', '#8d6e63') + P('M245 120 Q244 150 238 175 M243 150 Q232 160 228 168 M244 160 Q255 168 258 176', 'none', '#fff8e1', 2.5) + P('M245 98 Q240 75 250 60', 'none', '#9ccc65', 4) + T(245, 205, '3 Spross wächst') +
    P('M345 120 Q344 150 338 180 M343 150 Q330 160 326 170 M344 160 Q356 168 360 178', 'none', '#fff8e1', 2.5) + Ln(345, 120, 345, 55, '#7cb342', 4) +
    P('M345 70 Q320 55 318 75 Q332 80 345 70Z', '#66bb6a') + P('M345 62 Q372 48 374 68 Q358 74 345 62Z', '#66bb6a') + E(337, 112, 8, 5, '#c8a165') + E(353, 112, 8, 5, '#c8a165') + T(345, 205, '4 Laubblätter') +
    L(337, 112, 300, 140, 'Keimblätter') +
    T(200, 42, 'Braucht: Wasser · Wärme · Sauerstoff', { s: 11, c: '#6d4c41' }));

  D['bio6-07'] = S('#fce4ec',
    T(200, 20, 'Bestäubung und Befruchtung', { s: 13, b: 1 }) +
    // Blüte 1
    P('M60 170 Q60 120 70 90', 'none', '#43a047', 3) + C(70, 82, 18, '#f48fb1') + C(70, 82, 7, '#ffeb3b') +
    // Biene
    E(130, 70, 13, 8, '#fbc02d') + R(124, 62, 3, 16, '#333') + R(132, 62, 3, 16, '#333') + E(126, 60, 7, 5, '#e3f2fd', '#90a4ae') + E(136, 60, 7, 5, '#e3f2fd', '#90a4ae') +
    A(95, 76, 115, 72, '#f57f17', 1.5) + A(148, 72, 200, 80, '#f57f17', 1.5) + T(150, 100, 'Pollen wird übertragen', { s: 10 }) +
    // Blüte 2 Schnitt mit Pollenschlauch
    E(240, 170, 16, 18, '#aed581', '#558b2f') + Ln(240, 152, 240, 92, '#7cb342', 3) + E(240, 90, 9, 4, '#9ccc65') + C(240, 86, 3, '#f9a825') +
    P('M240 88 Q244 120 240 168', 'none', '#f57f17', 2) + C(240, 172, 4, '#fff', '#555') +
    L(240, 90, 280, 60, 'Narbe') + L(242, 130, 285, 120, 'Pollenschlauch') + L(240, 172, 262, 205, 'Eizelle') +
    A(300, 150, 330, 150) +
    // Frucht
    C(355, 150, 22, '#c62828') + Ln(355, 128, 360, 110, '#5d4037', 2) + E(355, 152, 7, 9, '#fff8e1') + T(348, 185, 'Frucht mit Samen'));

  D['bio6-08'] = S('#e8f5e9',
    T(200, 18, 'Stockwerke des Waldes', { s: 13, b: 1 }) +
    R(0, 180, 400, 40, '#a1887f') + P('M60 180 Q55 195 45 210 M60 180 Q66 196 72 212 M180 180 Q175 196 168 210 M180 180 Q188 195 196 212', 'none', '#5d4037', 2) +
    Z.Baum(60, 180, 1.6) + Z.Tanne(180, 180, 1.9) +
    C(270, 158, 18, '#81c784') + C(250, 165, 13, '#66bb6a') + C(290, 166, 13, '#66bb6a') +
    P('M320 180 Q318 165 325 158 M330 180 Q332 166 340 160 M340 180 Q345 168 352 166', 'none', '#558b2f', 2) + C(325, 156, 3, '#fff') + C(340, 158, 3, '#fff') +
    E(110, 178, 14, 4, '#7cb342') + E(230, 178, 16, 4, '#7cb342') +
    Ln(0, 45, 400, 45, '#999', 1, '4 3') + Ln(0, 130, 400, 130, '#999', 1, '4 3') + Ln(0, 160, 400, 160, '#999', 1, '4 3') + Ln(0, 175, 400, 175, '#999', 1, '4 3') +
    T(395, 60, 'Baumschicht', { a: 'end', b: 1 }) + T(395, 145, 'Strauchschicht', { a: 'end', b: 1 }) + T(395, 170, 'Krautschicht', { a: 'end', s: 10, b: 1 }) +
    T(395, 190, 'Moosschicht', { a: 'end', s: 10, b: 1 }) + T(395, 212, 'Wurzelschicht', { a: 'end', s: 10, b: 1, c: '#fff' }));

  D['bio6-09'] = S('#e1f5fe',
    T(200, 18, 'Pflanzenzonen am Teich', { s: 13, b: 1 }) +
    P('M0 80 L70 80 Q140 90 180 140 Q240 200 400 200 L400 220 L0 220Z', '#a1887f') +
    P('M70 82 Q140 92 180 140 Q240 198 400 198 L400 82Z', '#4fc3f7', null) +
    Z.Baum(30, 82, 0.9) +
    (function () { var s = ''; for (var i = 0; i < 6; i++) s += Ln(95 + i * 9, 92, 95 + i * 9, 40, '#7cb342', 2) + E(95 + i * 9, 50, 2.5, 8, '#6d4c41'); return s; })() +
    E(205, 83, 16, 3, '#43a047') + C(208, 79, 5, '#f8bbd0') + Ln(205, 85, 205, 165, '#7cb342', 1.5) + E(240, 83, 13, 3, '#43a047') +
    P('M270 196 Q268 170 278 150 M280 196 Q284 172 276 150 M290 196 Q286 174 296 156', 'none', '#2e7d32', 2) +
    C(350, 120, 2, '#c5e1a5') + C(330, 140, 2, '#c5e1a5') + C(365, 150, 2, '#c5e1a5') +
    T(30, 100, 'Uferzone', { s: 10, b: 1 }) + T(115, 112, 'Röhricht', { s: 10, b: 1 }) + T(222, 106, 'Schwimmblatt', { s: 10, b: 1 }) + T(280, 140, 'Unterwasser', { s: 10, b: 1 }) + T(350, 100, 'Freiwasser', { s: 10, b: 1 }) +
    T(30, 120, 'Erle, Weide', { s: 9 }) + T(115, 126, 'Schilf', { s: 9 }) + T(222, 120, 'Seerose', { s: 9 }) + T(350, 113, 'Plankton', { s: 9 }));

  D['bio6-10'] = S('#fafafa',
    T(200, 18, 'Pflanzen und Tiere im Jahreslauf', { s: 13, b: 1 }) +
    Ln(200, 30, 200, 210, '#ccc', 1) + Ln(10, 120, 390, 120, '#ccc', 1) +
    Z.Baum(70, 105, 0.9, '#a5d6a7') + C(54, 52, 3, '#f8bbd0') + C(82, 48, 3, '#f8bbd0') + C(70, 40, 3, '#f8bbd0') + T(140, 60, 'Frühling', { b: 1 }) + T(140, 76, 'Frühblüher,', { s: 10 }) + T(140, 88, 'Zugvögel kommen', { s: 10 }) +
    Z.Baum(270, 105, 0.9, '#2e7d32') + T(345, 60, 'Sommer', { b: 1 }) + T(345, 76, 'Wachstum,', { s: 10 }) + T(345, 88, 'Jungtiere', { s: 10 }) +
    Z.Baum(70, 205, 0.9, '#ff9800') + C(50, 200, 3, '#e65100') + C(95, 195, 3, '#ef6c00') + T(140, 150, 'Herbst', { b: 1 }) + T(140, 166, 'Laubfall,', { s: 10 }) + T(140, 178, 'Vorräte sammeln', { s: 10 }) +
    R(265, 165, 10, 40, '#795548') + P('M270 165 L250 140 M270 160 L292 138 M270 175 L255 160 M270 172 L288 158', 'none', '#795548', 3) + R(230, 200, 80, 6, '#fff', '#ddd') +
    T(345, 150, 'Winter', { b: 1 }) + T(338, 166, 'Igel: Winterschlaf', { s: 9 }) + T(338, 178, 'Eichhörnchen: Winterruhe', { s: 9 }) + T(338, 190, 'Frosch: Kältestarre', { s: 9 }));

  // Klasse 7
  D['bio7-01'] = S('#f5f5f5',
    T(200, 18, 'Das Skelett des Menschen', { s: 13, b: 1 }) +
    E(150, 42, 16, 18, '#fff', '#888') + C(144, 40, 3, '#888') + C(156, 40, 3, '#888') +
    (function () { var s = ''; for (var i = 0; i < 9; i++) s += R(146, 62 + i * 10, 8, 7, '#fff', '#888', 2); return s; })() +
    (function () { var s = ''; for (var i = 0; i < 5; i++) s += P('M150 ' + (70 + i * 9) + ' Q125 ' + (74 + i * 9) + ' 128 ' + (86 + i * 9) + ' M150 ' + (70 + i * 9) + ' Q175 ' + (74 + i * 9) + ' 172 ' + (86 + i * 9), 'none', '#888', 2); return s; })() +
    Ln(126, 66, 174, 66, '#888', 3) + Ln(126, 66, 112, 120, '#888', 4) + Ln(112, 120, 104, 165, '#888', 3) + Ln(174, 66, 188, 120, '#888', 4) + Ln(188, 120, 196, 165, '#888', 3) +
    P('M130 150 Q150 140 170 150 Q170 165 150 168 Q130 165 130 150Z', '#fff', '#888', 2) +
    Ln(138, 166, 132, 200, '#888', 5) + Ln(162, 166, 168, 200, '#888', 5) + Ln(132, 200, 130, 215, '#888', 3) + Ln(168, 200, 170, 215, '#888', 3) + C(132, 200, 4, '#fff', '#888') + C(168, 200, 4, '#fff', '#888') +
    L(166, 40, 230, 32, 'Schädel: schützt Gehirn') + L(172, 82, 230, 70, 'Brustkorb: Herz, Lunge') + L(154, 110, 230, 108, 'Wirbelsäule: doppelt S-förmig') +
    L(170, 155, 230, 145, 'Becken') + L(165, 185, 230, 180, 'Oberschenkelknochen') + L(168, 200, 230, 205, 'Kniegelenk (Scharniergelenk)') + L(126, 66, 85, 48, 'Schulter'));

  D['bio7-02'] = S('#fbe9e7',
    T(200, 18, 'Gegenspieler: Bizeps und Trizeps', { s: 13, b: 1 }) +
    Ln(80, 60, 80, 150, '#bdbdbd', 10) + C(80, 152, 7, '#e0e0e0', '#999') + Ln(80, 152, 170, 100, '#bdbdbd', 8) + C(178, 96, 10, '#ffccbc') +
    P('M86 70 Q120 100 110 140 Q102 146 96 150', '#e57373', '#c62828', 1.5) + P('M74 70 Q50 110 72 156', '#ef9a9a', '#c62828', 1.5) +
    L(108, 110, 140, 50, 'Bizeps zieht') + L(60, 100, 12, 40, 'Trizeps locker', 'start') + L(80, 152, 100, 182, 'Gelenk') +
    T(80, 205, 'Arm beugen', { b: 1 }) +
    Ln(260, 60, 260, 150, '#bdbdbd', 10) + C(260, 152, 7, '#e0e0e0', '#999') + Ln(260, 152, 270, 210, '#bdbdbd', 8) +
    P('M266 70 Q280 110 268 150', '#ef9a9a', '#c62828', 1.5) + P('M254 70 Q228 110 252 158', '#e57373', '#c62828', 1.5) +
    L(238, 135, 222, 178, 'Trizeps zieht', 'end') + L(274, 100, 296, 70, 'Bizeps locker') + T(330, 200, 'Arm strecken', { b: 1 }) +
    T(340, 140, 'Muskeln können', { s: 10 }) + T(340, 152, 'nur ziehen!', { s: 10, b: 1 }));

  D['bio7-03'] = S('#fffde7',
    T(200, 18, 'Ernährungspyramide', { s: 13, b: 1 }) +
    '<polygon points="200,30 330,205 70,205" fill="#fff" stroke="#999"/>' +
    '<polygon points="200,30 222,60 178,60" fill="#ef9a9a"/>' + '<polygon points="178,60 222,60 252,100 148,100" fill="#ffe082"/>' +
    '<polygon points="148,100 252,100 282,140 118,140" fill="#ffcc80"/>' + '<polygon points="118,140 282,140 304,170 96,170" fill="#a5d6a7"/>' + '<polygon points="96,170 304,170 330,205 70,205" fill="#90caf9"/>' +
    T(200, 54, 'Süßes', { s: 9 }) + T(200, 85, 'Fette, Öle', { s: 10 }) + T(200, 124, 'Milch, Fisch, Ei, Fleisch', { s: 10 }) + T(200, 160, 'Obst, Gemüse, Getreide', { s: 10 }) + T(200, 192, 'Getränke: Wasser, Tee', { s: 10 }) +
    T(350, 50, 'wenig', { a: 'start', b: 1, c: '#c62828' }) + A(345, 190, 345, 60, '#888', 1.5) + T(350, 196, 'viel', { a: 'start', b: 1, c: '#2e7d32' }));

  D['bio7-04'] = S('#fff3e0',
    T(200, 18, 'Der Weg der Nahrung', { s: 13, b: 1 }) +
    P('M150 40 Q130 40 128 60 Q126 75 140 80 L140 95 Q100 100 95 140 L95 210 L205 210 L205 140 Q200 100 160 95 L160 80 Q174 75 172 60 Q170 40 150 40Z', '#ffe0b2', '#bcaaa4', 1.5) +
    E(150, 68, 8, 4, '#e57373') + Ln(150, 72, 150, 108, '#e57373', 4) +
    P('M150 108 Q175 102 182 115 Q186 132 165 135 Q148 136 146 122Z', '#ef9a9a', '#c62828', 1) +
    P('M118 108 Q140 100 148 112 Q136 124 115 120Z', '#a1887f') +
    P('M150 150 q-20 5 -10 15 t15 10 t-15 10 t15 10', 'none', '#f48fb1', 6) +
    P('M112 150 L112 200 L188 200 L188 145', 'none', '#ce93d8', 9) +
    L(150, 68, 240, 50, 'Mund: kauen, Speichel') + L(150, 92, 240, 80, 'Speiseröhre') + L(178, 120, 240, 112, 'Magen: Magensäure') + L(118, 112, 85, 85, 'Leber') +
    L(150, 170, 240, 160, 'Dünndarm: ins Blut') + L(188, 195, 240, 200, 'Dickdarm: Wasser zurück'));

  D['bio7-05'] = S('#e3f2fd',
    T(200, 18, 'Atmungsorgane', { s: 13, b: 1 }) +
    Ln(150, 35, 150, 80, '#90a4ae', 10) + (function () { var s = ''; for (var i = 0; i < 5; i++) s += Ln(144, 40 + i * 9, 156, 40 + i * 9, '#cfd8dc', 2); return s; })() +
    P('M150 80 L125 95 L110 115 M150 80 L175 95 L190 115 M125 95 L120 125 M175 95 L182 128', 'none', '#90a4ae', 4) +
    P('M140 85 Q90 80 85 140 Q86 180 140 175Z', '#f8bbd0', '#ec407a', 1.5, 0.5) + P('M160 85 Q210 80 215 140 Q214 180 160 175Z', '#f8bbd0', '#ec407a', 1.5) +
    P('M80 182 Q150 160 220 182', 'none', '#8d6e63', 4) +
    L(150, 55, 240, 40, 'Luftröhre mit Knorpelringen') + L(178, 100, 240, 80, 'Bronchien') + L(208, 155, 240, 162, 'Lungenflügel') + L(200, 178, 240, 185, 'Zwerchfell') +
    C(330, 160, 26, '#fce4ec', '#ec407a') + C(318, 150, 7, '#f8bbd0', '#ec407a') + C(338, 148, 8, '#f8bbd0', '#ec407a') + C(330, 168, 8, '#f8bbd0', '#ec407a') +
    P('M300 175 Q330 140 360 175', 'none', '#e53935', 2) + T(330, 205, 'Lungenbläschen', { s: 10 }) + A(318, 140, 305, 120, '#1e88e5', 1.5) + T(300, 115, 'CO₂ hinaus', { s: 9, a: 'end' }) + A(350, 120, 340, 140, '#e53935', 1.5) + T(352, 115, 'O₂ ins Blut', { s: 9, a: 'start' }) +
    Ln(220, 140, 304, 160, '#999', 1, '3 3'));

  D['bio7-06'] = S('#fff',
    T(200, 18, 'Der doppelte Blutkreislauf', { s: 13, b: 1 }) +
    K(150, 32, 100, 30, 'Lunge', '#f8bbd0') + K(150, 165, 100, 34, 'Körper (Organe)', '#ffe0b2') +
    P('M175 110 Q160 90 180 80 Q200 75 200 90 Q200 75 220 80 Q240 90 225 110 L200 130Z', '#e53935', '#b71c1c', 1.5) + Ln(200, 88, 200, 128, '#fff', 1.5) +
    T(185, 108, 'R', { s: 9, c: '#fff', b: 1 }) + T(215, 108, 'L', { s: 9, c: '#fff', b: 1 }) +
    P('M180 85 Q120 80 160 62', 'none', '#1e88e5', 5) + P('M240 62 Q280 80 220 88', 'none', '#e53935', 5) +
    P('M225 115 Q320 140 250 175', 'none', '#e53935', 5) + P('M150 180 Q80 140 178 112', 'none', '#1e88e5', 5) +
    A(132, 72, 152, 62, '#1e88e5') + A(250, 72, 234, 86, '#e53935') + A(270, 160, 252, 176, '#e53935') + A(115, 140, 168, 118, '#1e88e5') +
    T(70, 60, 'Lungenkreislauf', { b: 1 }) + T(70, 195, 'Körperkreislauf', { b: 1 }) +
    R(300, 40, 12, 8, '#e53935') + T(316, 48, 'sauerstoffreich', { a: 'start', s: 10 }) + R(300, 56, 12, 8, '#1e88e5') + T(316, 64, 'sauerstoffarm', { a: 'start', s: 10 }) +
    T(330, 125, 'Arterien: vom Herzen weg', { s: 10 }) + T(330, 139, 'Venen: zum Herzen hin', { s: 10 }));

  D['bio7-07'] = S('#e8eaf6',
    T(200, 18, 'Das Auge im Schnitt', { s: 13, b: 1 }) +
    C(220, 115, 70, '#fff', '#5c6bc0') + P('M220 45 A70 70 0 0 1 220 185', 'none', '#ef9a9a', 6) +
    P('M156 85 Q140 115 156 145', 'none', '#90caf9', 4) + R(160, 88, 6, 20, '#6d4c41') + R(160, 122, 6, 20, '#6d4c41') +
    E(178, 115, 9, 20, '#e1f5fe', '#4fc3f7') + Ln(288, 108, 340, 105, '#fbc02d', 6) +
    // Lichtstrahlen und Bild
    Ln(60, 80, 178, 100, '#ff9800', 1.5) + Ln(60, 150, 178, 130, '#ff9800', 1.5) + Ln(178, 100, 288, 140, '#ff9800', 1.5) + Ln(178, 130, 288, 92, '#ff9800', 1.5) +
    Ln(60, 80, 60, 150, '#2e7d32', 4) + '<polygon points="54,80 66,80 60,70" fill="#2e7d32"/>' + Ln(286, 92, 286, 140, '#2e7d32', 3) + '<polygon points="281,140 291,140 286,148" fill="#2e7d32"/>' +
    L(150, 140, 110, 190, 'Hornhaut') + L(163, 95, 120, 45, 'Iris mit Pupille') + L(180, 125, 150, 205, 'Linse') + L(270, 60, 320, 40, 'Netzhaut') + L(320, 106, 340, 140, 'Sehnerv') +
    T(330, 175, 'Bild steht auf dem Kopf –', { s: 10 }) + T(330, 188, 'das Gehirn dreht es um', { s: 10 }));

  D['bio7-08'] = S('#f3e5f5',
    T(200, 18, 'Pubertät: vom Kind zum Erwachsenen', { s: 13, b: 1 }) +
    (function () { function person(x, h, c) { var top = 200 - h; return C(x, top + h * 0.09, h * 0.08, '#ffccbc') + R(x - h * 0.09, top + h * 0.18, h * 0.18, h * 0.42, c, null, 6) + Ln(x - h * 0.05, top + h * 0.6, x - h * 0.06, 200, '#5d4037', 4) + Ln(x + h * 0.05, top + h * 0.6, x + h * 0.06, 200, '#5d4037', 4); } return person(70, 100, '#90caf9') + person(150, 135, '#a5d6a7') + person(230, 165, '#ffcc80'); })() +
    T(70, 214, 'Kind', { s: 10 }) + T(150, 214, 'Jugendliche/r', { s: 10 }) + T(230, 214, 'Erwachsene/r', { s: 10 }) +
    A(95, 120, 125, 100, '#7b1fa2') + A(175, 90, 205, 70, '#7b1fa2') +
    K(280, 40, 110, 28, 'Hirnanhangdrüse', '#e1bee7', { s: 10 }) + A(335, 68, 335, 88, '#7b1fa2') + K(280, 90, 110, 28, 'Hormone', '#e1bee7', { s: 10, b: 1 }) +
    T(335, 136, 'Wachstum', { s: 10 }) + T(335, 150, 'Körperbehaarung', { s: 10 }) + T(335, 164, 'Stimme, Brust, Regel', { s: 10 }) + T(335, 178, 'neue Gefühle', { s: 10 }) + T(335, 194, 'Jeder hat sein Tempo!', { s: 10, b: 1 }));

  D['bio7-09'] = S('#fce4ec',
    T(200, 18, 'Entwicklung in der Gebärmutter', { s: 13, b: 1 }) +
    (function () { var s = '', d = [[50, 6, '1. Monat', 'Herz schlägt'], [140, 14, '3. Monat', 'etwa 6 cm'], [240, 24, '5. Monat', 'bewegt sich'], [340, 36, '9. Monat', 'etwa 50 cm']]; d.forEach(function (x) { s += C(x[0], 110, x[1] + 14, '#f8bbd0', '#ec407a') + C(x[0], 110 - x[1] * 0.35, x[1] * 0.45, '#ffccbc') + E(x[0] + x[1] * 0.1, 110 + x[1] * 0.25, x[1] * 0.4, x[1] * 0.45, '#ffccbc') + T(x[0], 175, x[2], { b: 1 }) + T(x[0], 190, x[3], { s: 10 }); }); return s; })() +
    A(75, 110, 115, 110, '#ad1457', 1.5) + A(165, 110, 200, 110, '#ad1457', 1.5) + A(275, 110, 295, 110, '#ad1457', 1.5) +
    T(200, 210, 'Versorgung über Plazenta und Nabelschnur', { s: 10 }));

  // Klasse 8
  D['bio8-01'] = S('#f1f8e9',
    T(100, 18, 'Tierzelle', { s: 13, b: 1 }) + T(300, 18, 'Pflanzenzelle', { s: 13, b: 1 }) +
    P('M30 110 Q30 40 100 45 Q175 50 170 115 Q165 185 95 180 Q25 175 30 110Z', '#ffe0b2', '#e65100', 2) + C(95, 110, 22, '#ce93d8', '#6a1b9a') + C(92, 106, 6, '#6a1b9a') +
    E(60, 80, 12, 6, '#ef9a9a', '#c62828') + E(140, 150, 12, 6, '#ef9a9a', '#c62828') +
    L(112, 104, 140, 70, 'Zellkern', 'start') + L(58, 78, 38, 60, 'Mitochondrium', 'start') + L(150, 168, 170, 205, 'Zellmembran', 'start') + L(70, 150, 40, 195, 'Zellplasma', 'start') +
    R(225, 40, 150, 150, '#c5e1a5', '#33691e', 6) + R(232, 47, 136, 136, '#f1f8e9', '#7cb342', 4) + R(260, 70, 90, 80, '#e1f5fe', '#4fc3f7', 20) +
    C(250, 160, 14, '#ce93d8', '#6a1b9a') + E(245, 62, 9, 5, '#66bb6a', '#2e7d32') + E(350, 165, 9, 5, '#66bb6a', '#2e7d32') + E(345, 60, 9, 5, '#66bb6a', '#2e7d32') + E(300, 168, 8, 4, '#ef9a9a', '#c62828') +
    T(305, 114, 'Vakuole') + L(250, 160, 270, 205, 'Zellkern', 'start') + L(345, 58, 330, 32, 'Chloroplast', 'end') + L(374, 190, 382, 208, 'Zellwand', 'end'));

  D['bio8-02'] = S('#ede7f6',
    T(200, 18, 'Die Mitose', { s: 13, b: 1 }) +
    (function () {
      var s = '', xs = [45, 125, 205, 285, 360], names = ['Interphase', 'Prophase', 'Metaphase', 'Anaphase', 'Telophase'];
      xs.forEach(function (x, i) {
        if (i < 4) s += C(x, 105, 32, '#fff', '#7e57c2'); else s += E(x - 2, 80, 26, 22, '#fff', '#7e57c2') + E(x - 2, 132, 26, 22, '#fff', '#7e57c2');
        if (i === 0) s += C(x, 105, 15, '#e1bee7', '#8e24aa') + P('M' + (x - 8) + ' 100 q4 -6 8 0 t8 4', 'none', '#6a1b9a', 1.5);
        if (i === 1) s += P('M' + (x - 14) + ' 95 l8 14 M' + (x - 6) + ' 95 l-8 14 M' + (x + 6) + ' 96 l6 16 M' + (x + 12) + ' 96 l-6 16', 'none', '#c62828', 3);
        if (i === 2) { for (var k = 0; k < 4; k++) s += Ln(x - 4, 88 + k * 9, x + 4, 88 + k * 9, '#c62828', 3); s += Ln(x - 30, 105, x - 5, 92, '#9e9e9e', 0.8) + Ln(x + 30, 105, x + 5, 92, '#9e9e9e', 0.8) + Ln(x - 30, 105, x - 5, 118, '#9e9e9e', 0.8) + Ln(x + 30, 105, x + 5, 118, '#9e9e9e', 0.8); }
        if (i === 3) { for (var k2 = 0; k2 < 4; k2++) { s += P('M' + (x - 22) + ' ' + (93 + k2 * 7) + ' l6 -3', 'none', '#c62828', 3) + P('M' + (x + 22) + ' ' + (93 + k2 * 7) + ' l-6 -3', 'none', '#c62828', 3); } s += A(x - 6, 105, x - 18, 105, '#555', 1) + A(x + 6, 105, x + 18, 105, '#555', 1); }
        if (i === 4) s += C(x - 2, 80, 10, '#e1bee7', '#8e24aa') + C(x - 2, 132, 10, '#e1bee7', '#8e24aa');
        s += T(x, 180, names[i], { s: 10, b: 1 });
      }); return s;
    })() +
    T(200, 205, 'Aus einer Zelle werden zwei erbgleiche Tochterzellen', { s: 10 }));

  D['bio8-03'] = S('#e8f5e9',
    T(200, 18, 'Fotosynthese', { s: 13, b: 1 }) + Z.Sonne(50, 55, 20) +
    P('M140 160 Q160 80 260 70 Q280 140 180 170Z', '#66bb6a', '#2e7d32', 2) + P('M160 160 Q210 120 255 78', 'none', '#2e7d32', 1.5) +
    A(75, 70, 150, 105, '#f9a825', 3) + T(110, 75, 'Licht', { s: 10, b: 1 }) +
    A(330, 60, 260, 100, '#607d8b', 2.5) + T(345, 52, 'Kohlenstoffdioxid', { s: 10, b: 1 }) +
    A(190, 210, 190, 165, '#1e88e5', 2.5) + T(230, 205, 'Wasser aus der Wurzel', { s: 10, b: 1, a: 'start' }) +
    A(250, 130, 330, 140, '#43a047', 2.5) + T(345, 145, 'Sauerstoff', { s: 10, b: 1 }) +
    A(165, 150, 100, 180, '#8d6e63', 2.5) + T(70, 195, 'Traubenzucker', { s: 10, b: 1 }) +
    T(200, 40, 'CO₂ + Wasser  →  Zucker + Sauerstoff', { s: 11, c: '#2e7d32', b: 1 }));

  D['bio8-04'] = S('#fff3e0',
    T(200, 18, 'Zellatmung im Mitochondrium', { s: 13, b: 1 }) +
    E(200, 115, 95, 55, '#ffccbc', '#d84315') + P('M120 115 q10 -30 20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0', 'none', '#d84315', 2) +
    A(30, 85, 105, 100, '#8d6e63', 2.5) + T(60, 78, 'Traubenzucker', { s: 10, b: 1 }) + A(30, 150, 105, 130, '#1e88e5', 2.5) + T(55, 165, 'Sauerstoff', { s: 10, b: 1 }) +
    A(295, 95, 365, 70, '#607d8b', 2.5) + T(335, 60, 'Kohlenstoffdioxid', { s: 10, b: 1 }) + A(295, 125, 365, 125, '#4fc3f7', 2.5) + T(335, 117, 'Wasser', { s: 10, b: 1 }) +
    A(270, 155, 340, 190, '#f9a825', 3) + T(345, 205, 'Energie (ATP)', { s: 11, b: 1, c: '#e65100' }) +
    T(200, 205, 'Zucker + O₂ → CO₂ + Wasser + Energie', { s: 10, a: 'end' }));

  D['bio8-05'] = S('#f1f8e9',
    T(200, 18, 'Kreislauf im Ökosystem', { s: 13, b: 1 }) +
    K(150, 32, 100, 40, 'Produzenten', '#c5e1a5', { b: 1 }) + T(200, 84, 'Pflanzen', { s: 10 }) +
    K(280, 130, 110, 40, 'Konsumenten', '#ffe0b2', { b: 1 }) + T(335, 182, 'Tiere', { s: 10 }) +
    K(10, 130, 110, 40, 'Destruenten', '#d7ccc8', { b: 1 }) + T(65, 182, 'Pilze, Bakterien', { s: 10 }) +
    A(255, 60, 320, 125) + T(310, 85, 'werden gefressen', { s: 10, a: 'start' }) +
    A(275, 160, 125, 160) + T(200, 150, 'tote Reste', { s: 10 }) +
    A(70, 125, 145, 62) + T(80, 85, 'Mineralstoffe', { s: 10, a: 'end' }) +
    Z.Sonne(370, 40, 13) + A(350, 45, 260, 45, '#f9a825', 1.5) + T(200, 205, 'Stoffe kreisen – Energie kommt von der Sonne', { s: 10 }));

  D['bio8-06'] = S('#fff8e1',
    T(110, 18, 'Nahrungskette', { s: 13, b: 1 }) + T(300, 18, 'Nahrungspyramide', { s: 13, b: 1 }) +
    K(20, 170, 80, 26, 'Gras', '#c5e1a5') + K(20, 120, 80, 26, 'Heuschrecke', '#fff59d') + K(20, 70, 80, 26, 'Spitzmaus', '#d7ccc8') + K(20, 30, 80, 26, 'Eule', '#bcaaa4') +
    A(60, 168, 60, 148) + A(60, 118, 60, 98) + A(60, 68, 60, 58) + T(110, 160, 'Produzent', { s: 9, a: 'start' }) + T(110, 110, 'Pflanzenfresser', { s: 9, a: 'start' }) + T(110, 60, 'Fleischfresser', { s: 9, a: 'start' }) + T(110, 48, 'Endkonsument', { s: 9, a: 'start' }) +
    '<polygon points="300,35 330,75 270,75" fill="#bcaaa4"/>' + '<polygon points="270,75 330,75 355,115 245,115" fill="#d7ccc8"/>' + '<polygon points="245,115 355,115 380,155 220,155" fill="#fff59d"/>' + '<polygon points="220,155 380,155 395,195 205,195" fill="#c5e1a5"/>' +
    T(300, 68, '0,1 %', { s: 9 }) + T(300, 100, '1 %', { s: 9 }) + T(300, 140, '10 %', { s: 9 }) + T(300, 180, '100 % Energie', { s: 9 }) + T(300, 212, 'Pro Stufe nur etwa 10 % weiter', { s: 9 }));

  D['bio8-07'] = S('#e3f2fd',
    T(200, 18, 'Kohlenstoffkreislauf', { s: 13, b: 1 }) + E(200, 50, 90, 20, '#fff', '#90a4ae') + T(200, 54, 'CO₂ in der Luft', { b: 1 }) +
    Z.Baum(70, 190, 1) + R(140, 175, 40, 18, '#bcaaa4', null, 6) + C(178, 172, 8, '#bcaaa4') + R(300, 150, 40, 45, '#78909c') + R(325, 120, 8, 30, '#78909c') + P('M329 118 q-8 -10 0 -18 q8 -8 0 -16', 'none', '#b0bec5', 3) +
    R(0, 195, 400, 25, '#8d6e63') + R(230, 205, 60, 10, '#212121') + T(260, 214, 'Kohle, Öl', { s: 9, c: '#fff' }) +
    A(150, 62, 90, 115, '#2e7d32') + T(95, 90, 'Fotosynthese', { s: 10, a: 'end' }) +
    A(165, 168, 190, 72, '#c62828') + T(185, 125, 'Atmung', { s: 10, a: 'start' }) +
    A(330, 98, 270, 65, '#c62828') + T(345, 90, 'Verbrennung', { s: 10 }) +
    A(100, 175, 135, 180, '#795548', 1.5) + T(118, 168, 'Nahrung', { s: 9 }) + A(260, 203, 300, 175, '#555', 1.5));

  D['bio8-08'] = S('#e8f5e9',
    T(200, 18, 'Natur schützen – jeder kann helfen', { s: 13, b: 1 }) +
    P('M60 40 L110 50 L110 110 Q110 150 60 170 Q10 150 10 110 L10 50Z', '#a5d6a7', '#2e7d32', 2) + Z.Baum(60, 140, 0.8) + T(60, 190, 'Schutzgebiet', { b: 1 }) +
    R(150, 60, 70, 90, '#a1887f', '#5d4037', 3) + (function () { var s = ''; for (var r = 0; r < 3; r++) for (var c = 0; c < 3; c++) s += C(165 + c * 20, 80 + r * 25, 6, '#5d4037'); return s; })() + '<polygon points="145,60 185,35 225,60" fill="#8d6e63"/>' + T(185, 170, 'Insektenhotel', { b: 1 }) +
    (function () { var s = ''; for (var i = 0; i < 6; i++) s += Ln(260 + i * 15, 150, 258 + i * 15, 110, '#558b2f', 2) + C(258 + i * 15, 106, 5, ['#ec407a', '#ffeb3b', '#7e57c2'][i % 3]); return s; })() + T(300, 170, 'Blühwiese', { b: 1 }) +
    T(200, 200, 'Müll vermeiden · Energie sparen · Rad und Bus · Lebensräume erhalten', { s: 10 }));

  // Klasse 9
  D['bio9-01'] = S('#fff',
    T(200, 18, 'Je ein Allel von Mutter und Vater', { s: 13, b: 1 }) +
    K(60, 40, 90, 40, 'Mutter  Aa', '#f8bbd0', { b: 1 }) + K(250, 40, 90, 40, 'Vater  Aa', '#bbdefb', { b: 1 }) +
    A(105, 82, 175, 128, '#ad1457') + A(295, 82, 225, 128, '#1565c0') + T(120, 112, 'A oder a', { s: 10, a: 'end' }) + T(280, 112, 'A oder a', { s: 10, a: 'start' }) +
    K(150, 130, 100, 40, 'Kind  Aa', '#e1bee7', { b: 1 }) +
    T(200, 190, 'Genotyp: Aa (mischerbig)  ·  Phänotyp: das sichtbare Merkmal', { s: 10 }) + T(200, 206, 'A = dominant (setzt sich durch)  ·  a = rezessiv', { s: 10 }));

  D['bio9-02'] = S('#fce4ec',
    T(200, 18, 'Mendels Erbsenversuch', { s: 13, b: 1 }) +
    (function () { function bl(x, y, c) { var s = ''; for (var i = 0; i < 5; i++) { var a = i * 1.2566; s += C((x + 8 * Math.cos(a)).toFixed(1), (y + 8 * Math.sin(a)).toFixed(1), 6, c); } return s + C(x, y, 4, '#ffeb3b'); }
      var s = T(30, 55, 'P', { b: 1 }) + bl(120, 50, '#c2185b') + T(120, 75, 'RR') + T(200, 54, '×', { s: 16 }) + bl(280, 50, '#f5f5f5') + T(280, 75, 'rr');
      s += T(30, 120, 'F1', { b: 1 }); for (var i = 0; i < 4; i++) s += bl(140 + i * 40, 115, '#c2185b') + T(140 + i * 40, 140, 'Rr', { s: 9 });
      s += T(30, 185, 'F2', { b: 1 }); var g = ['RR', 'Rr', 'Rr', 'rr'], c = ['#c2185b', '#c2185b', '#c2185b', '#f5f5f5']; for (var j = 0; j < 4; j++) s += bl(140 + j * 40, 180, c[j]) + T(140 + j * 40, 205, g[j], { s: 9 });
      return s + A(200, 80, 200, 100, '#555', 1.5) + A(200, 145, 200, 165, '#555', 1.5) + T(320, 120, 'alle gleich', { s: 10, a: 'start' }) + T(320, 185, '3 rot : 1 weiß', { s: 11, a: 'start', b: 1 }); })());

  D['bio9-03'] = S('#fff',
    T(200, 18, 'Kreuzungsschema Rr × Rr', { s: 13, b: 1 }) +
    R(130, 60, 80, 60, '#f8bbd0', '#999') + R(210, 60, 80, 60, '#f8bbd0', '#999') + R(130, 120, 80, 60, '#f8bbd0', '#999') + R(210, 120, 80, 60, '#fff', '#999') +
    T(170, 50, 'R', { s: 14, b: 1 }) + T(250, 50, 'r', { s: 14, b: 1 }) + T(115, 95, 'R', { s: 14, b: 1 }) + T(115, 155, 'r', { s: 14, b: 1 }) +
    T(170, 95, 'RR', { s: 14 }) + T(250, 95, 'Rr', { s: 14 }) + T(170, 155, 'Rr', { s: 14 }) + T(250, 155, 'rr', { s: 14 }) +
    T(210, 31, 'Keimzellen Vater', { s: 10, c: '#1565c0' }) + T(80, 125, 'Keimzellen', { s: 10, c: '#ad1457' }) + T(80, 137, 'Mutter', { s: 10, c: '#ad1457' }) +
    T(340, 90, 'Genotypen:', { s: 10, b: 1 }) + T(340, 104, '1 RR : 2 Rr : 1 rr', { s: 10 }) + T(340, 130, 'Phänotypen:', { s: 10, b: 1 }) + T(340, 144, '3 rot : 1 weiß', { s: 10 }) + T(210, 205, 'Jedes Kind: 75 % rot, 25 % weiß', { s: 10 }));

  D['bio9-04'] = S('#ede7f6',
    T(200, 18, 'Vom Chromosom zur DNA', { s: 13, b: 1 }) +
    P('M60 50 Q70 110 55 170 L75 170 Q85 110 80 50Z', '#9575cd') + P('M110 50 Q100 110 115 170 L95 170 Q85 110 90 50Z', '#7e57c2') + C(85, 108, 7, '#4527a0') +
    T(85, 195, 'Chromosom', { b: 1 }) + A(130, 110, 175, 110) +
    (function () { var s = '', cols = ['#ef5350', '#42a5f5', '#66bb6a', '#ffca28']; for (var i = 0; i < 12; i++) { var y = 40 + i * 13, ph = i * 0.6, x1 = 260 + 45 * Math.sin(ph), x2 = 260 - 45 * Math.sin(ph); s += Ln(x1.toFixed(1), y, x2.toFixed(1), y, cols[i % 4], 4); } s += P((function () { var d = ''; for (var i = 0; i <= 24; i++) { var y = 40 + i * 6.5, x = 260 + 45 * Math.sin(i * 0.3); d += (i ? ' L' : 'M') + x.toFixed(1) + ' ' + y; } return d; })(), 'none', '#5e35b1', 3); s += P((function () { var d = ''; for (var i = 0; i <= 24; i++) { var y = 40 + i * 6.5, x = 260 - 45 * Math.sin(i * 0.3); d += (i ? ' L' : 'M') + x.toFixed(1) + ' ' + y; } return d; })(), 'none', '#5e35b1', 3); return s; })() +
    T(260, 205, 'DNA-Doppelhelix', { b: 1 }) + T(350, 70, 'Basen:', { s: 10, b: 1 }) + T(350, 86, 'A – T', { s: 10 }) + T(350, 100, 'G – C', { s: 10 }) + T(350, 150, 'Gen =', { s: 10, b: 1 }) + T(350, 164, 'Abschnitt', { s: 10 }) + T(350, 176, 'der DNA', { s: 10 }));

  D['bio9-05'] = S('#fff',
    T(200, 18, 'Stammbaum einer Familie', { s: 13, b: 1 }) +
    R(110, 40, 26, 26, '#fff', '#333') + C(273, 53, 13, '#fff', '#333') + Ln(136, 53, 260, 53, '#333', 1.5) + Ln(200, 53, 200, 90, '#333', 1.5) + Ln(90, 90, 310, 90, '#333', 1.5) +
    Ln(90, 90, 90, 110, '#333', 1.5) + Ln(160, 90, 160, 110, '#333', 1.5) + Ln(240, 90, 240, 110, '#333', 1.5) + Ln(310, 90, 310, 110, '#333', 1.5) +
    R(77, 110, 26, 26, '#455a64', '#333') + C(160, 123, 13, '#fff', '#333') + R(227, 110, 26, 26, '#fff', '#333') + C(310, 123, 13, '#fff', '#333') + C(306, 123, 5, '#455a64') +
    T(123, 32, 'Aa', { s: 10 }) + T(273, 32, 'Aa', { s: 10 }) + T(90, 152, 'aa', { s: 10 }) +
    R(40, 175, 14, 14, '#fff', '#333') + T(58, 186, 'Mann', { a: 'start', s: 10 }) + C(115, 182, 7, '#fff', '#333') + T(126, 186, 'Frau', { a: 'start', s: 10 }) + R(170, 175, 14, 14, '#455a64') + T(188, 186, 'betroffen', { a: 'start', s: 10 }) + C(265, 182, 7, '#fff', '#333') + C(265, 182, 3, '#455a64') + T(276, 186, 'Trägerin', { a: 'start', s: 10 }) +
    T(200, 210, 'Gesunde Eltern, krankes Kind → rezessiver Erbgang', { s: 10 }));

  D['bio9-06'] = S('#e8eaf6',
    T(200, 18, 'Das Immunsystem wehrt Erreger ab', { s: 13, b: 1 }) +
    (function () { function virus(x, y) { var s = C(x, y, 12, '#ef5350'); for (var i = 0; i < 8; i++) { var a = i * Math.PI / 4; s += Ln((x + 12 * Math.cos(a)).toFixed(1), (y + 12 * Math.sin(a)).toFixed(1), (x + 18 * Math.cos(a)).toFixed(1), (y + 18 * Math.sin(a)).toFixed(1), '#c62828', 2) + C((x + 19 * Math.cos(a)).toFixed(1), (y + 19 * Math.sin(a)).toFixed(1), 2.5, '#c62828'); } return s; }
      function ak(x, y, r) { return '<g transform="translate(' + x + ' ' + y + ') rotate(' + r + ')">' + Ln(0, 0, 0, 14, '#1e88e5', 3) + Ln(0, 0, -8, -10, '#1e88e5', 3) + Ln(0, 0, 8, -10, '#1e88e5', 3) + '</g>'; }
      return virus(80, 90) + T(80, 135, 'Virus', { b: 1 }) + C(200, 100, 34, '#c5cae9', '#3949ab') + C(205, 95, 10, '#7986cb') + virus(190, 110).replace(/#ef5350/g, '#e57373') + T(200, 155, 'Fresszelle', { b: 1 }) + T(200, 168, 'frisst Erreger', { s: 10 }) +
        virus(320, 95) + ak(320, 60, 180) + ak(355, 95, 270) + ak(285, 95, 90) + ak(320, 130, 0) + T(320, 165, 'Antikörper', { b: 1 }) + T(320, 178, 'markieren Erreger', { s: 10 }); })() +
    T(200, 205, 'Gedächtniszellen merken sich den Erreger → Immunität', { s: 10 }));

  D['bio9-07'] = S('#fff',
    T(200, 18, 'Wirkung einer Impfung', { s: 13, b: 1 }) + Z.Ax(40, 190, 340, 160, 'Zeit', 'Antikörper') +
    P('M40 190 Q90 190 110 140 Q130 120 160 175 L200 185', 'none', '#42a5f5', 3) + P('M200 185 Q230 185 245 60 Q260 40 300 90 Q340 130 380 140', 'none', '#1565c0', 3) +
    Ln(80, 190, 80, 40, '#ef5350', 1.5, '4 3') + Ln(235, 190, 235, 40, '#ef5350', 1.5, '4 3') + T(84, 52, 'Impfung', { s: 10, c: '#c62828', a: 'start' }) + T(235, 34, 'echter Erreger', { s: 10, c: '#c62828' }) +
    T(130, 110, 'langsam, wenig', { s: 10 }) + T(320, 70, 'schnell und stark', { s: 10, b: 1 }) + T(320, 84, 'dank Gedächtniszellen', { s: 10 }));

  D['bio9-08'] = S('#fff8e1',
    T(200, 18, 'Regelung des Blutzuckers', { s: 13, b: 1 }) +
    K(140, 90, 120, 40, 'Blutzucker', '#fff', { b: 1 }) +
    K(10, 40, 120, 34, 'Blutzucker hoch', '#ffcdd2', { s: 10 }) + K(270, 40, 120, 34, 'Insulin', '#c8e6c9', { b: 1 }) + T(330, 88, 'Zellen nehmen Zucker auf', { s: 10 }) + T(330, 100, '→ Blutzucker sinkt', { s: 10 }) +
    K(10, 160, 120, 34, 'Blutzucker niedrig', '#bbdefb', { s: 10 }) + K(270, 160, 120, 34, 'Glukagon', '#ffe0b2', { b: 1 }) + T(330, 150, 'Leber gibt Zucker ab', { s: 10 }) + T(330, 207, '→ Blutzucker steigt', { s: 10 }) +
    A(135, 57, 265, 57, '#2e7d32') + A(135, 177, 265, 177, '#e65100') + A(270, 75, 230, 92, '#2e7d32') + A(270, 160, 230, 128, '#e65100') +
    T(200, 50, 'Bauchspeicheldrüse', { s: 9 }) + T(200, 195, 'Bauchspeicheldrüse', { s: 9 }));
})();
