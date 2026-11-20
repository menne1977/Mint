// Biologie Klasse 10 bis 13 – Schaubilder
(function () {
  var Z = window.ZH, D = window.ZEICHNUNGEN, S = Z.S, T = Z.T, L = Z.L, A = Z.A, K = Z.K, C = Z.C, E = Z.E, R = Z.R, P = Z.P, Ln = Z.Ln;

  function fink(x, y, schnabel) {
    return E(x, y, 22, 15, '#8d6e63') + C(x + 18, y - 10, 11, '#795548') + C(x + 22, y - 12, 2, '#fff') + schnabel +
      P('M' + (x - 20) + ' ' + y + ' l-14 6 l12 2z', '#6d4c41') + Ln(x - 4, y + 14, x - 6, y + 26, '#5d4037', 2) + Ln(x + 6, y + 14, x + 8, y + 26, '#5d4037', 2);
  }

  // Klasse 10
  D['bio10-01'] = S('#fff8e1',
    T(200, 18, 'Darwinfinken: Schnabel passt zur Nahrung', { s: 13, b: 1 }) +
    fink(60, 90, '<polygon points="88,76 108,82 88,88" fill="#ffb300"/>') + T(70, 140, 'kräftig, kurz', { b: 1 }) + T(70, 154, 'knackt Samen', { s: 10 }) +
    fink(185, 90, '<polygon points="213,76 245,80 213,84" fill="#ffb300"/>') + T(195, 140, 'lang, spitz', { b: 1 }) + T(195, 154, 'fängt Insekten', { s: 10 }) +
    fink(310, 90, '<polygon points="338,74 352,80 338,90" fill="#ffb300"/>') + T(320, 140, 'dick, gebogen', { b: 1 }) + T(320, 154, 'frisst Früchte', { s: 10 }) +
    T(200, 185, 'Überproduktion → Variation → Selektion → Vererbung', { s: 11, b: 1, c: '#e65100' }) + T(200, 203, 'Die am besten Angepassten haben die meisten Nachkommen', { s: 10 }));

  D['bio10-02'] = S('#e3f2fd',
    T(200, 18, 'Neue Arten durch Trennung', { s: 13, b: 1 }) +
    E(70, 110, 55, 40, '#c5e1a5', '#558b2f') + (function () { var s = ''; for (var i = 0; i < 6; i++) s += C(50 + (i % 3) * 20, 100 + Math.floor(i / 3) * 20, 6, '#8d6e63'); return s; })() + T(70, 170, '1 eine Art', { b: 1 }) +
    A(130, 110, 155, 110) +
    E(220, 110, 55, 40, '#c5e1a5', '#558b2f') + R(214, 68, 12, 84, '#4fc3f7') + (function () { var s = ''; for (var i = 0; i < 3; i++) s += C(190, 92 + i * 18, 6, '#8d6e63') + C(250, 92 + i * 18, 6, '#8d6e63'); return s; })() + T(220, 170, '2 Trennung (Fluss, Meer)', { b: 1 }) +
    A(280, 110, 305, 110) +
    E(345, 85, 38, 26, '#c5e1a5', '#558b2f') + E(345, 140, 38, 26, '#fff9c4', '#f9a825') + C(335, 85, 6, '#5d4037') + C(355, 85, 6, '#5d4037') + C(335, 140, 6, '#ff8a65') + C(355, 140, 6, '#ff8a65') + T(345, 182, '3 zwei Arten', { b: 1 }) +
    T(200, 205, 'Mutation + Selektion + Isolation → keine fruchtbaren Nachkommen mehr', { s: 10 }));

  D['bio10-03'] = S('#fff',
    T(200, 18, 'Homologe Organe: gleicher Bauplan', { s: 13, b: 1 }) +
    (function () {
      function glied(x, y, k) { // Oberarm rot, Unterarm blau, Hand grün
        return Ln(x, y, x + k[0], y + k[1], '#e53935', 7) + Ln(x + k[0], y + k[1], x + k[2], y + k[3], '#1e88e5', 5) + Ln(x + k[0], y + k[1] + 3, x + k[2] + 2, y + k[3] + 4, '#1e88e5', 3) +
          k[4].map(function (f) { return Ln(x + k[2], y + k[3], x + f[0], y + f[1], '#43a047', 3); }).join('');
      }
      return glied(40, 45, [18, 38, 26, 76, [[16, 100], [24, 104], [32, 103], [40, 100], [46, 94]]]) + T(70, 175, 'Mensch: Arm', { b: 1 }) +
        glied(150, 60, [30, 30, 70, 30, [[120, 0], [125, 30], [118, 60], [100, 75]]]) + P('M220 60 L270 60 L275 90 L250 105 L180 92Z', '#e3f2fd', '#90a4ae', 1) + T(200, 175, 'Fledermaus: Flügel', { b: 1 }) +
        glied(300, 70, [14, 18, 28, 36, [[44, 70], [52, 72], [58, 68], [62, 60]]]) + P('M325 100 Q350 130 365 140 Q340 145 318 112Z', '#b3e5fc', '#4fc3f7', 1) + T(335, 175, 'Wal: Flosse', { b: 1 });
    })() +
    R(70, 190, 10, 8, '#e53935') + T(84, 198, 'Oberarm', { a: 'start', s: 10 }) + R(160, 190, 10, 8, '#1e88e5') + T(174, 198, 'Elle, Speiche', { a: 'start', s: 10 }) + R(270, 190, 10, 8, '#43a047') + T(284, 198, 'Hand / Finger', { a: 'start', s: 10 }) +
    T(200, 214, 'Gemeinsamer Vorfahr – andere Funktion', { s: 9 }));

  D['bio10-04'] = S('#f3e5f5',
    T(200, 18, 'Klassische Konditionierung (Pawlow)', { s: 13, b: 1 }) +
    (function () {
      function hund(x, y) { return E(x, y, 26, 14, '#bcaaa4') + C(x + 26, y - 10, 11, '#bcaaa4') + E(x + 22, y - 20, 4, 8, '#8d6e63') + C(x + 30, y - 12, 1.8, '#222') + Ln(x - 16, y + 10, x - 18, y + 26, '#8d6e63', 3) + Ln(x + 14, y + 10, x + 16, y + 26, '#8d6e63', 3) + P('M' + (x - 26) + ' ' + y + ' q-10 -8 -8 -16', 'none', '#bcaaa4', 3); }
      function glocke(x, y) { return P('M' + (x - 9) + ' ' + (y + 8) + ' Q' + (x - 9) + ' ' + (y - 10) + ' ' + x + ' ' + (y - 10) + ' Q' + (x + 9) + ' ' + (y - 10) + ' ' + (x + 9) + ' ' + (y + 8) + 'Z', '#ffca28', '#f57f17', 1) + C(x, y + 10, 2.5, '#f57f17'); }
      function napf(x, y) { return P('M' + (x - 12) + ' ' + y + ' L' + (x + 12) + ' ' + y + ' L' + (x + 8) + ' ' + (y + 8) + ' L' + (x - 8) + ' ' + (y + 8) + 'Z', '#e57373'); }
      function tropf(x, y) { return P('M' + x + ' ' + y + ' q-4 6 0 9 q4 -3 0 -9z', '#4fc3f7'); }
      return hund(50, 105) + napf(95, 125) + tropf(80, 100) + T(60, 160, '1 Futter →', { s: 10, b: 1 }) + T(60, 173, 'Speichel (angeboren)', { s: 9 }) +
        hund(175, 105) + napf(220, 125) + glocke(200, 70) + tropf(205, 100) + T(185, 160, '2 Glocke + Futter', { s: 10, b: 1 }) + T(185, 173, 'viele Male', { s: 9 }) +
        hund(305, 105) + glocke(335, 70) + tropf(335, 100) + T(320, 160, '3 nur Glocke →', { s: 10, b: 1 }) + T(320, 173, 'Speichel (gelernt)', { s: 9 });
    })() +
    T(200, 203, 'Ein neutraler Reiz wird mit dem Futter verknüpft', { s: 10 }));

  D['bio10-05'] = S('#ede7f6',
    T(200, 18, 'Das Gehirn', { s: 13, b: 1 }) +
    P('M50 120 Q40 50 120 40 Q200 35 215 90 Q222 125 190 135 L80 135 Q55 135 50 120Z', '#f8bbd0', '#ad1457', 2) +
    P('M80 70 q15 -10 25 5 M120 55 q10 15 25 5 M150 80 q15 -10 30 5 M90 100 q20 10 35 -5 M150 110 q10 -10 25 0', 'none', '#ad1457', 1.5) +
    P('M150 135 Q190 132 205 150 Q190 172 150 165 Q140 150 150 135Z', '#ce93d8', '#6a1b9a', 1.5) + P('M155 145 l40 5 M155 155 l38 2', 'none', '#6a1b9a', 1) +
    P('M118 135 L126 135 L130 205 L118 205Z', '#b39ddb', '#4527a0', 1) + E(122, 128, 12, 8, '#e1bee7', '#6a1b9a') +
    L(100, 60, 60, 35, 'Großhirn: Denken, Sprache, Sinne', 'start') + L(190, 152, 240, 150, 'Kleinhirn: Gleichgewicht') + L(122, 128, 240, 120, 'Zwischenhirn: Gefühle') + L(126, 180, 240, 185, 'Hirnstamm: Atmung, Herz') +
    T(320, 70, 'ZNS = Gehirn + Rückenmark', { s: 10, b: 1, c: '#4527a0' }));

  D['bio10-06'] = S('#e0f2f1',
    T(200, 18, 'Gentechnik: Insulin aus Bakterien', { s: 13, b: 1 }) +
    Ln(20, 60, 110, 60, '#7e57c2', 6) + R(55, 55, 22, 10, '#e53935') + T(66, 50, 'Insulin-Gen', { s: 9 }) + T(65, 80, '1 Gen herausschneiden', { s: 9 }) +
    A(115, 60, 145, 60, '#555', 1.5) +
    C(190, 60, 26, 'none', '#00897b') + P('M182 34 A26 26 0 0 1 206 37', 'none', '#e53935', 6) + T(190, 100, '2 in Plasmid einbauen', { s: 9 }) +
    A(225, 60, 255, 60, '#555', 1.5) +
    E(310, 60, 40, 22, '#c8e6c9', '#2e7d32') + C(310, 60, 8, 'none', '#00897b') + T(310, 100, '3 in Bakterium', { s: 9 }) +
    A(310, 110, 310, 135, '#555', 1.5) +
    (function () { var s = ''; for (var i = 0; i < 5; i++) s += E(210 + i * 40, 160, 16, 9, '#c8e6c9', '#2e7d32') + C(210 + i * 40, 160, 3, '#e53935'); return s; })() +
    T(300, 190, '4 Bakterien vermehren sich', { s: 9 }) + T(300, 203, 'und bilden Insulin', { s: 9 }) +
    T(70, 150, 'Werkzeuge:', { s: 10, b: 1 }) + T(70, 164, 'Enzym-Scheren,', { s: 9 }) + T(70, 176, 'Ligase, Plasmide,', { s: 9 }) + T(70, 188, 'Genschere CRISPR', { s: 9 }));

  // Klasse 11
  D['bio11-01'] = S('#e1f5fe',
    T(200, 18, 'Die Biomembran (Flüssig-Mosaik-Modell)', { s: 13, b: 1 }) +
    (function () { var s = ''; for (var i = 0; i < 20; i++) { var x = 20 + i * 18; if (i === 6 || i === 7 || i === 13) continue; s += C(x, 80, 6, '#ffb74d') + Ln(x - 2, 86, x - 2, 108, '#ffcc80', 2) + Ln(x + 2, 86, x + 2, 108, '#ffcc80', 2) + C(x, 150, 6, '#ffb74d') + Ln(x - 2, 144, x - 2, 122, '#ffcc80', 2) + Ln(x + 2, 144, x + 2, 122, '#ffcc80', 2); } return s; })() +
    R(122, 66, 36, 98, '#7986cb', '#3949ab', 14) + R(128, 90, 24, 50, '#e8eaf6', null, 8) + E(254, 95, 18, 22, '#9575cd', '#5e35b1') +
    L(20, 80, 30, 45, 'wasserliebender Kopf', 'start') + L(56, 100, 90, 186, 'wasserabweisende Schwänze') + L(140, 115, 200, 48, 'Kanalprotein (Transport)', 'start') + L(254, 95, 300, 186, 'Membranprotein') +
    T(380, 80, 'außen', { s: 10, a: 'end' }) + T(380, 160, 'innen', { s: 10, a: 'end' }) +
    A(140, 50, 140, 75, '#e53935', 1.5) + T(140, 210, 'Stoffe passieren nur kontrolliert', { s: 10 }));

  D['bio11-02'] = S('#fff8e1',
    T(200, 18, 'Enzym: Schlüssel-Schloss-Prinzip', { s: 13, b: 1 }) +
    P('M30 120 L30 170 L110 170 L110 120 L85 120 L80 105 L60 105 L55 120Z', '#80cbc4', '#00695c', 1.5) + '<polygon points="56,70 84,70 80,100 60,100" fill="#ffb74d" stroke="#e65100"/>' +
    T(70, 190, '1 Enzym + Substrat', { s: 10, b: 1 }) + L(60, 80, 25, 60, 'Substrat', 'start') +
    A(125, 140, 150, 140) +
    P('M160 120 L160 170 L240 170 L240 120 L215 120 L210 105 L190 105 L185 120Z', '#80cbc4', '#00695c', 1.5) + '<polygon points="186,102 214,102 210,122 190,122" fill="#ffb74d" stroke="#e65100"/>' +
    T(200, 190, '2 Komplex', { s: 10, b: 1 }) + L(200, 112, 200, 62, 'aktives Zentrum', 'middle') +
    A(255, 140, 280, 140) +
    P('M290 120 L290 170 L370 170 L370 120 L345 120 L340 105 L320 105 L315 120Z', '#80cbc4', '#00695c', 1.5) + '<polygon points="300,70 318,70 316,95 302,95" fill="#ff8a65"/>' + '<polygon points="342,70 360,70 358,95 344,95" fill="#ff8a65"/>' +
    T(330, 190, '3 Produkte + Enzym', { s: 10, b: 1 }) + T(330, 205, 'Enzym unverändert', { s: 9 }));

  D['bio11-03'] = S('#fff3e0',
    T(200, 18, 'ATP: der Energieakku der Zelle', { s: 13, b: 1 }) +
    K(60, 80, 100, 50, 'ATP', '#ffcc80', { b: 1, s: 16 }) + K(240, 80, 100, 50, 'ADP + P', '#ffe0b2', { b: 1, s: 14 }) +
    P('M160 90 Q200 60 240 90', 'none', '#e53935', 3) + A(232, 84, 240, 90, '#e53935') + T(200, 58, 'Energie wird frei', { s: 10, c: '#c62828', b: 1 }) + T(200, 44, 'für Bewegung, Aufbau, Transport', { s: 9 }) +
    P('M240 122 Q200 152 160 122', 'none', '#2e7d32', 3) + A(168, 128, 160, 122, '#2e7d32') + T(200, 168, 'Energie aus der Zellatmung', { s: 10, c: '#2e7d32', b: 1 }) +
    T(110, 150, 'aufgeladen', { s: 10 }) + T(290, 150, 'entladen', { s: 10 }) + T(200, 200, 'Abbau setzt Energie frei · Aufbau verbraucht Energie', { s: 10 }));

  D['bio11-04'] = S('#e8f5e9',
    T(200, 18, 'Fotosynthese im Chloroplasten', { s: 13, b: 1 }) +
    E(200, 115, 170, 75, '#c8e6c9', '#2e7d32') +
    (function () { var s = ''; [[95, 95], [95, 135], [150, 80], [150, 120]].forEach(function (p) { for (var i = 0; i < 4; i++) s += E(p[0], p[1] + i * 6 - 8, 20, 4, '#43a047', '#1b5e20'); }); return s; })() +
    T(122, 172, 'Lichtreaktion', { b: 1, c: '#1b5e20' }) + T(122, 185, '(Thylakoide)', { s: 9 }) +
    C(285, 112, 34, 'none', '#ff8f00') + A(300, 82, 312, 92, '#ff8f00') + A(270, 142, 258, 132, '#ff8f00') + T(285, 116, 'Calvin-', { s: 10, b: 1 }) + T(285, 128, 'Zyklus', { s: 10, b: 1 }) + T(285, 172, '(Stroma)', { s: 9 }) +
    A(175, 105, 245, 105, '#e65100', 2) + T(210, 98, 'ATP, NADPH', { s: 9, b: 1 }) +
    A(40, 50, 80, 80, '#f9a825', 2.5) + T(40, 44, 'Licht', { s: 10, b: 1 }) + A(60, 205, 85, 150, '#1e88e5', 2) + T(40, 212, 'H₂O', { s: 10, b: 1 }) + A(110, 70, 95, 35, '#43a047', 2) + T(120, 34, 'O₂', { s: 10, b: 1, a: 'start' }) +
    A(370, 45, 310, 78, '#607d8b', 2) + T(370, 40, 'CO₂', { s: 10, b: 1 }) + A(305, 150, 360, 195, '#8d6e63', 2) + T(360, 210, 'Glucose', { s: 10, b: 1 }));

  D['bio11-05'] = S('#fbe9e7',
    T(200, 18, 'Zellatmung in vier Schritten', { s: 13, b: 1 }) +
    K(10, 45, 110, 40, '1 Glykolyse', '#ffe0b2', { b: 1 }) + T(65, 98, 'Zellplasma · 2 ATP', { s: 9 }) +
    E(265, 120, 125, 75, '#ffccbc', '#d84315') + P('M150 120 q10 -25 20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0', 'none', '#d84315', 1.5) +
    K(160, 55, 100, 28, '2 Pyruvat → Acetyl-CoA', '#fff', { s: 9 }) + C(225, 145, 26, '#fff3e0', '#e65100') + T(225, 142, '3 Citrat-', { s: 9, b: 1 }) + T(225, 154, 'zyklus', { s: 9, b: 1 }) +
    K(275, 130, 110, 30, '4 Atmungskette', '#ffab91', { b: 1, s: 10 }) + T(330, 175, '≈ 26–28 ATP', { s: 10, b: 1, c: '#bf360c' }) +
    A(120, 65, 158, 68, '#555', 1.5) + A(215, 85, 222, 116, '#555', 1.5) + A(252, 145, 272, 145, '#555', 1.5) +
    T(65, 140, 'Glucose + O₂', { s: 10 }) + T(65, 154, '→ CO₂ + H₂O', { s: 10 }) + T(65, 175, 'gesamt ≈ 30–32 ATP', { s: 10, b: 1 }) + T(265, 210, 'Mitochondrium', { s: 10 }));

  D['bio11-06'] = S('#fff',
    T(100, 18, 'Wachstum einer Population', { s: 12, b: 1 }) + T(300, 18, 'Räuber und Beute', { s: 12, b: 1 }) +
    Z.Ax(20, 190, 165, 150, 'Zeit', 'Anzahl') + Ln(20, 70, 185, 70, '#e53935', 1, '5 4') + T(180, 64, 'Kapazität K', { s: 9, a: 'end', c: '#c62828' }) +
    P('M20 185 Q90 185 120 60 L122 40', 'none', '#90caf9', 2.5) + P('M20 185 Q70 180 95 125 Q120 72 185 72', 'none', '#1565c0', 3) +
    T(118, 34, 'exponentiell', { s: 9, a: 'end' }) + T(150, 90, 'logistisch', { s: 9 }) +
    Z.Ax(215, 190, 175, 150, 'Zeit', 'Anzahl') +
    P('M215 120 Q240 60 260 110 Q280 160 300 110 Q320 60 340 110 Q360 160 385 110', 'none', '#66bb6a', 2.5) +
    P('M215 160 Q245 150 265 115 Q285 85 305 140 Q320 170 345 125 Q365 85 385 140', 'none', '#e53935', 2.5) +
    R(300, 34, 10, 6, '#66bb6a') + T(313, 41, 'Beute', { s: 9, a: 'start' }) + R(345, 34, 10, 6, '#e53935') + T(358, 41, 'Räuber', { s: 9, a: 'start' }));

  // Klasse 12
  D['bio12-01'] = S('#ede7f6',
    T(200, 18, 'Aufbau der DNA', { s: 13, b: 1 }) +
    (function () {
      var s = '', b = [['A', 'T'], ['G', 'C'], ['T', 'A'], ['C', 'G'], ['A', 'T'], ['G', 'C']], col = { A: '#ef5350', T: '#42a5f5', G: '#66bb6a', C: '#ffca28' };
      b.forEach(function (p, i) { var y = 40 + i * 26; s += R(60, y, 18, 18, '#b39ddb', '#5e35b1', 3) + C(52, y + 9, 5, '#ffa726') + R(80, y + 4, 44, 10, col[p[0]], null, 2) + R(126, y + 4, 44, 10, col[p[1]], null, 2) + T(102, y + 13, p[0], { s: 9, b: 1 }) + T(148, y + 13, p[1], { s: 9, b: 1 }) + R(172, y, 18, 18, '#b39ddb', '#5e35b1', 3) + C(198, y + 9, 5, '#ffa726'); if (i < 5) s += Ln(52, y + 14, 52, y + 30, '#ffa726', 2) + Ln(198, y + 14, 198, y + 30, '#ffa726', 2); });
      return s;
    })() +
    T(52, 210, "5′→3′", { s: 9 }) + T(198, 210, "3′←5′", { s: 9 }) +
    L(60, 48, 30, 30, 'Zucker', 'start') + L(125, 48, 240, 50, 'Wasserstoffbrücken') +
    T(300, 80, 'Nukleotid = Zucker', { s: 10 }) + T(300, 94, '+ Phosphat + Base', { s: 10 }) + T(300, 125, 'A – T (2 Brücken)', { s: 10, b: 1 }) + T(300, 140, 'G – C (3 Brücken)', { s: 10, b: 1 }) + T(300, 170, 'Stränge antiparallel', { s: 10 }) +
    C(240, 195, 4, '#ffa726') + T(248, 199, 'Phosphat', { s: 9, a: 'start' }));

  D['bio12-02'] = S('#f3e5f5',
    T(200, 18, 'Replikation der DNA', { s: 13, b: 1 }) +
    (function () { var s = ''; for (var i = 0; i < 6; i++) s += Ln(20 + i * 12, 105, 20 + i * 12, 125, '#9575cd', 3); return s; })() + Ln(15, 103, 140, 103, '#5e35b1', 3) + Ln(15, 127, 140, 127, '#5e35b1', 3) +
    P('M140 103 Q180 95 380 50', 'none', '#5e35b1', 3) + P('M140 127 Q180 135 380 180', 'none', '#5e35b1', 3) +
    P('M200 98 Q260 80 360 60', 'none', '#e53935', 3) + A(330, 66, 362, 59, '#e53935') +
    P('M330 172 L280 158 M265 154 L215 141', 'none', '#e53935', 3) + A(300, 164, 280, 158, '#e53935') + A(240, 148, 215, 141, '#e53935') +
    E(145, 115, 14, 18, '#ffca28', '#f57f17') + L(145, 115, 130, 175, 'Helicase öffnet', 'end') +
    L(280, 75, 290, 32, 'Leitstrang: durchgehend', 'end') + L(260, 154, 260, 205, 'Folgestrang: Okazaki-Stücke', 'middle') +
    T(330, 120, 'alt + neu', { s: 10, b: 1 }) + T(330, 134, '= semikonservativ', { s: 10 }) +
    R(20, 190, 12, 4, '#5e35b1') + T(36, 194, 'alter Strang', { s: 9, a: 'start' }) + R(20, 200, 12, 4, '#e53935') + T(36, 204, 'neuer Strang', { s: 9, a: 'start' }));

  D['bio12-03'] = S('#e8f5e9',
    T(200, 18, 'Proteinbiosynthese', { s: 13, b: 1 }) +
    E(90, 115, 75, 70, '#e1bee7', '#8e24aa') + T(90, 60, 'Zellkern', { s: 10, b: 1 }) +
    Ln(40, 100, 140, 100, '#5e35b1', 4) + Ln(40, 110, 140, 110, '#5e35b1', 4) + T(90, 92, 'DNA', { s: 10 }) +
    Ln(55, 130, 125, 130, '#e53935', 3) + T(90, 145, 'mRNA', { s: 10, c: '#c62828', b: 1 }) + A(90, 113, 90, 125, '#555', 1) + T(90, 168, '1 Transkription', { s: 10, b: 1 }) +
    P('M140 135 Q180 150 220 150 L360 150', 'none', '#e53935', 3) +
    E(270, 140, 36, 18, '#a5d6a7', '#2e7d32') + E(270, 162, 40, 16, '#81c784', '#2e7d32') + T(270, 195, '2 Translation am Ribosom', { s: 10, b: 1 }) +
    P('M262 120 L262 98 L252 88 L272 88 L262 98', '#ffcc80', '#e65100', 1.5) + C(262, 80, 7, '#7e57c2') + L(252, 92, 220, 70, 'tRNA', 'end') +
    C(300, 80, 7, '#7e57c2') + C(316, 72, 7, '#26a69a') + C(332, 66, 7, '#ff7043') + C(348, 62, 7, '#ffca28') + Ln(262, 80, 300, 80, '#555', 1) + T(325, 48, 'Aminosäurekette', { s: 10 }) +
    T(90, 198, 'AUG = Start', { s: 9 }) + T(90, 210, '3 Basen = 1 Aminosäure', { s: 9 }));

  D['bio12-04'] = S('#fff',
    T(200, 18, 'Genmutationen', { s: 13, b: 1 }) +
    (function () {
      function reihe(y, seq, mark, label, eff) { var s = T(14, y + 14, label, { s: 10, a: 'start', b: 1 }); seq.split('').forEach(function (b, i) { var x = 92 + i * 18; s += R(x, y, 16, 20, mark.indexOf(i) >= 0 ? '#ffcdd2' : '#e3f2fd', '#90a4ae', 3) + T(x + 8, y + 14, b, { s: 11, b: 1 }); if (i % 3 === 2 && i < seq.length - 1) s += Ln(x + 17, y - 2, x + 17, y + 22, '#999', 1); }); return s + T(395, y + 14, eff, { s: 8, a: 'end' }); }
      return reihe(40, 'AUGCCAGAAUAG', [], 'Original', 'Met-Pro-Glu-Stopp') +
        reihe(80, 'AUGCCGGAAUAG', [5], 'stumm', 'gleiches Protein') +
        reihe(120, 'AUGCCAAAAUAG', [6], 'Missense', 'Glu → Lys') +
        reihe(160, 'AUGCAGAAUAG', [4], 'Rasterschub', 'alles verschoben');
    })() + T(200, 205, 'Eine fehlende Base verschiebt das ganze Leseraster', { s: 10 }));

  D['bio12-05'] = S('#ede7f6',
    T(200, 18, 'Die Nervenzelle', { s: 13, b: 1 }) +
    (function () { var s = ''; for (var i = 0; i < 7; i++) { var a = -1.3 + i * 0.4 + Math.PI; s += P('M' + (60 + 18 * Math.cos(a)).toFixed(0) + ' ' + (110 + 18 * Math.sin(a)).toFixed(0) + ' L' + (60 + 45 * Math.cos(a)).toFixed(0) + ' ' + (110 + 45 * Math.sin(a)).toFixed(0) + ' l' + (8 * Math.cos(a + 0.5)).toFixed(0) + ' ' + (8 * Math.sin(a + 0.5)).toFixed(0), 'none', '#7e57c2', 2.5); } return s; })() +
    C(60, 110, 22, '#b39ddb', '#5e35b1') + C(58, 108, 7, '#4527a0') + '<polygon points="80,104 96,108 96,112 80,116" fill="#9575cd"/>' + Ln(96, 110, 330, 110, '#7e57c2', 4) +
    (function () { var s = ''; for (var i = 0; i < 5; i++) s += R(108 + i * 44, 101, 36, 18, '#fff9c4', '#f9a825', 9); return s; })() +
    P('M330 110 L355 90 M330 110 L360 110 M330 110 L355 130', 'none', '#7e57c2', 2.5) + C(357, 89, 5, '#7e57c2') + C(362, 110, 5, '#7e57c2') + C(357, 131, 5, '#7e57c2') +
    L(32, 78, 25, 45, 'Dendriten', 'start') + L(58, 108, 30, 180, 'Zellkörper', 'start') + L(90, 110, 100, 160, 'Axonhügel') + L(150, 101, 160, 55, 'Myelinscheide') + L(196, 110, 205, 160, 'Schnürring') + L(362, 110, 345, 175, 'Endknöpfchen', 'end') + L(300, 110, 300, 55, 'Axon') +
    A(120, 200, 300, 200, '#e53935', 2) + T(210, 194, 'Signalrichtung', { s: 9, c: '#c62828' }));

  D['bio12-06'] = S('#fff',
    T(200, 18, 'Das Aktionspotenzial', { s: 13, b: 1 }) + Z.Ax(50, 200, 330, 175, 'Zeit (ms)', 'Spannung (mV)') +
    Ln(50, 150, 380, 150, '#90a4ae', 1, '4 3') + T(46, 154, '−70', { s: 9, a: 'end' }) + Ln(50, 130, 380, 130, '#e53935', 1, '2 3') + T(46, 134, '−50', { s: 9, a: 'end' }) + Ln(50, 80, 380, 80, '#ccc', 1) + T(46, 84, '0', { s: 9, a: 'end' }) + T(46, 54, '+30', { s: 9, a: 'end' }) +
    P('M50 150 L120 150 Q130 150 135 130 L150 50 Q155 45 160 55 L185 160 Q190 170 200 165 L240 152 L380 150', 'none', '#1565c0', 3) +
    T(120, 125, 'Schwelle', { s: 9, a: 'end', c: '#c62828' }) + L(147, 70, 230, 62, 'Depolarisation: Na⁺ ein') + L(172, 110, 230, 95, 'Repolarisation: K⁺ aus') + L(195, 166, 250, 185, 'Hyperpolarisation') + T(330, 140, 'Ruhepotenzial', { s: 9 }));

  D['bio12-07'] = S('#fce4ec',
    T(200, 18, 'Die Synapse', { s: 13, b: 1 }) +
    P('M80 30 L80 70 Q60 90 70 130 Q90 160 200 155 L200 60 Q150 40 120 70 L120 30Z', '#e1bee7', '#8e24aa', 2) +
    P('M80 210 L80 180 Q120 168 200 172 L330 172 Q360 172 360 190 L360 210Z', '#c5cae9', '#3949ab', 2) +
    (function () { var s = ''; [[110, 100], [140, 90], [160, 120], [125, 130], [175, 95]].forEach(function (p) { s += C(p[0], p[1], 10, '#fff', '#8e24aa'); for (var k = 0; k < 4; k++) s += C(p[0] - 4 + (k % 2) * 8, p[1] - 3 + Math.floor(k / 2) * 6, 1.8, '#ff7043'); }); return s; })() +
    (function () { var s = ''; for (var i = 0; i < 6; i++) s += C(110 + i * 15, 163 + (i % 2) * 2, 1.8, '#ff7043'); for (var j = 0; j < 4; j++) s += R(105 + j * 25, 170, 10, 6, '#3949ab'); return s; })() +
    L(140, 90, 240, 70, 'Bläschen mit Transmitter') + L(150, 164, 240, 125, 'synaptischer Spalt') + L(130, 173, 240, 195, 'Rezeptoren') + L(100, 45, 140, 35, 'Axon-Ende').replace("text-anchor=\"end\"", "text-anchor=\"end\"") +
    A(40, 60, 40, 120, '#e53935', 2) + T(40, 135, 'Signal', { s: 9 }) + T(320, 40, 'elektrisch → chemisch', { s: 10, b: 1 }) + T(320, 54, '→ elektrisch', { s: 10, b: 1 }));

  // Klasse 13
  D['bio13-01'] = S('#fff',
    T(200, 18, 'Formen der Selektion', { s: 13, b: 1 }) +
    (function () {
      function glocke(x0, cx, w, c, dash) { var d = ''; for (var i = 0; i <= 40; i++) { var x = x0 + i * 2.75, y = 170 - 90 * Math.exp(-Math.pow((x - cx) / w, 2)); d += (i ? ' L' : 'M') + x.toFixed(1) + ' ' + y.toFixed(1); } return P(d, 'none', c, dash ? 2 : 3).replace('/>', dash ? ' stroke-dasharray="4 3"/>' : '/>'); }
      function zwei(x0, c) { var d = ''; for (var i = 0; i <= 40; i++) { var x = x0 + i * 2.75, y = 170 - 70 * (Math.exp(-Math.pow((x - x0 - 25) / 14, 2)) + Math.exp(-Math.pow((x - x0 - 85) / 14, 2))); d += (i ? ' L' : 'M') + x.toFixed(1) + ' ' + y.toFixed(1); } return P(d, 'none', c, 3); }
      return Ln(15, 170, 125, 170, '#333', 1.5) + glocke(15, 70, 30, '#90a4ae', 1) + glocke(15, 70, 14, '#1565c0') + T(70, 195, 'stabilisierend', { b: 1 }) +
        Ln(145, 170, 255, 170, '#333', 1.5) + glocke(145, 185, 22, '#90a4ae', 1) + glocke(145, 220, 22, '#1565c0') + A(190, 60, 225, 60, '#e53935', 2) + T(200, 195, 'gerichtet', { b: 1 }) +
        Ln(275, 170, 385, 170, '#333', 1.5) + glocke(275, 330, 26, '#90a4ae', 1) + zwei(275, '#1565c0') + T(330, 195, 'disruptiv', { b: 1 });
    })() + T(200, 212, 'gestrichelt: vorher · durchgezogen: nach vielen Generationen', { s: 9 }));

  D['bio13-02'] = S('#fff',
    T(200, 18, 'X-chromosomal-rezessiver Erbgang', { s: 13, b: 1 }) +
    R(110, 40, 26, 26, '#fff', '#333') + C(273, 53, 13, '#fff', '#333') + C(273, 53, 5, '#455a64') + Ln(136, 53, 260, 53, '#333', 1.5) + Ln(200, 53, 200, 90, '#333', 1.5) + Ln(90, 90, 310, 90, '#333', 1.5) +
    [90, 160, 240, 310].map(function (x) { return Ln(x, 90, x, 110, '#333', 1.5); }).join('') +
    R(77, 110, 26, 26, '#455a64', '#333') + C(160, 123, 13, '#fff', '#333') + C(160, 123, 5, '#455a64') + R(227, 110, 26, 26, '#fff', '#333') + C(310, 123, 13, '#fff', '#333') +
    T(123, 32, 'XY', { s: 10 }) + T(273, 32, 'XᴬXᵃ', { s: 10 }) + T(90, 152, 'XᵃY', { s: 10 }) + T(160, 152, 'XᴬXᵃ', { s: 10 }) + T(240, 152, 'XᴬY', { s: 10 }) + T(310, 152, 'XᴬXᴬ', { s: 10 }) +
    T(200, 180, 'Söhne erben ihr X von der Mutter', { s: 10, b: 1 }) + T(200, 195, 'Träger-Mütter (Konduktorinnen) sind gesund', { s: 10 }) + T(200, 210, 'Beispiele: Bluterkrankheit, Rot-Grün-Sehschwäche', { s: 9 }));

  D['bio13-03'] = S('#e0f7fa',
    T(200, 18, 'Gelelektrophorese: genetischer Fingerabdruck', { s: 13, b: 1 }) +
    R(60, 40, 280, 150, '#b2ebf2', '#00838f', 8) + R(60, 40, 280, 14, '#455a64') + T(200, 51, '− Minuspol', { s: 9, c: '#fff' }) + R(60, 176, 280, 14, '#c62828') + T(200, 187, '+ Pluspol', { s: 9, c: '#fff' }) +
    (function () { var s = '', bands = [[70, 95, 140], [80, 120, 150], [70, 95, 140], [90, 110, 160]], names = ['Spur', 'Probe A', 'Tatort', 'Probe B']; bands.forEach(function (b, i) { var x = 90 + i * 65; s += R(x, 56, 34, 6, '#263238', null, 2); b.forEach(function (y) { s += R(x, y, 34, 5, '#00695c', null, 2); }); s += T(x + 17, 210, names[i], { s: 9, b: 1 }); }); return s; })() +
    A(370, 70, 370, 160, '#555', 1.5) + T(363, 120, 'kleine', { s: 8, a: 'start' }) + T(363, 130, 'Stücke', { s: 8, a: 'start' }) + T(363, 140, 'weiter', { s: 8, a: 'start' }) +
    T(30, 120, 'DNA', { s: 9 }) + T(30, 132, 'wandert', { s: 9 }));

  D['bio13-04'] = S('#fffde7',
    T(200, 18, 'Ethisch urteilen: abwägen', { s: 13, b: 1 }) +
    '<polygon points="200,60 188,190 212,190" fill="#8d6e63"/>' + Ln(80, 80, 320, 70, '#5d4037', 5) + C(200, 75, 6, '#5d4037') +
    Ln(90, 80, 70, 120, '#795548', 1.5) + Ln(90, 80, 110, 120, '#795548', 1.5) + P('M60 120 Q90 140 120 120Z', '#ffcc80', '#e65100') +
    Ln(310, 70, 290, 110, '#795548', 1.5) + Ln(310, 70, 330, 110, '#795548', 1.5) + P('M280 110 Q310 130 340 110Z', '#b3e5fc', '#0277bd') +
    T(90, 152, 'Chancen', { b: 1 }) + T(90, 166, 'Heilung, Gesundheit', { s: 9 }) + T(310, 142, 'Risiken', { b: 1 }) + T(310, 156, 'Würde, Natur, Folgen', { s: 9 }) +
    T(200, 208, 'Fakten → Werte → Abwägen → begründetes Urteil', { s: 10, b: 1 }));

  D['bio13-05'] = S('#e8f5e9',
    T(200, 18, 'Abitur Biologie: die großen Themen', { s: 13, b: 1 }) +
    C(200, 115, 34, '#fff', '#2e7d32') + T(200, 112, 'Abitur', { b: 1 }) + T(200, 125, 'Biologie', { s: 10 }) +
    K(20, 40, 120, 30, 'Zelle, Stoffwechsel', '#c8e6c9', { s: 10 }) + K(260, 40, 120, 30, 'Genetik', '#c8e6c9', { s: 10, b: 1 }) + K(20, 160, 120, 30, 'Neurobiologie', '#c8e6c9', { s: 10, b: 1 }) + K(260, 160, 120, 30, 'Evolution', '#c8e6c9', { s: 10, b: 1 }) + K(145, 175, 110, 28, 'Ökologie', '#c8e6c9', { s: 10, b: 1 }) +
    Ln(170, 100, 140, 70, '#2e7d32', 1.5) + Ln(230, 100, 260, 70, '#2e7d32', 1.5) + Ln(170, 130, 140, 160, '#2e7d32', 1.5) + Ln(230, 130, 260, 160, '#2e7d32', 1.5) + Ln(200, 149, 200, 175, '#2e7d32', 1.5) +
    T(80, 110, 'Operatoren', { s: 10, b: 1 }) + T(80, 124, 'beachten!', { s: 10 }) + T(320, 110, 'Material', { s: 10, b: 1 }) + T(320, 124, 'auswerten', { s: 10 }));
})();
