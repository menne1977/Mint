// Schaubilder zu den Ergänzungskapiteln (Biologie, Physik, Chemie)
(function () {
  var Z = window.ZH, D = window.ZEICHNUNGEN, S = Z.S, T = Z.T, L = Z.L, A = Z.A, K = Z.K, C = Z.C, E = Z.E, R = Z.R, P = Z.P, Ln = Z.Ln;
  function T0(s) { return T(200, 18, s, { s: 13, b: 1 }); }

  // ---------- Biologie ----------
  D['bio6-11'] = S('#efebe9',
    T0('Bau eines Pilzes') + R(0, 140, 400, 80, '#8d6e63') +
    E(130, 100, 55, 30, '#d84315') + C(105, 92, 6, '#fff') + C(135, 85, 7, '#fff') + C(155, 100, 5, '#fff') +
    R(120, 100, 20, 42, '#fff8e1', '#bcaaa4') +
    P('M130 142 Q100 160 70 170 M130 142 Q130 170 125 195 M130 142 Q160 165 195 175 M100 160 Q85 185 60 195 M160 165 Q180 190 200 200', 'none', '#fff8e1', 3) +
    L(165, 80, 240, 55, 'Hut') + L(140, 120, 240, 105, 'Stiel') + L(95, 172, 240, 165, 'Myzel (Pilzfäden)') +
    T(245, 132, 'Hut + Stiel = Fruchtkörper', { s: 9, a: 'start', c: '#bf360c', b: 1 }) + T(320, 195, 'im Boden', { s: 11, b: 1, c: '#fff' }));

  D['bio7-10'] = S('#fff3e0',
    T0('Sucht und das Gehirn') +
    E(110, 100, 70, 55, '#f8bbd0', '#ad1457') + P('M70 100 Q90 70 110 100 Q130 70 150 100', 'none', '#ad1457', 2) +
    C(110, 95, 12, '#ffd54f') + L(110, 95, 110, 175, 'Belohnungssystem', 'middle') +
    K(250, 45, 130, 34, 'Suchtstoff', '#ffcdd2') + A(315, 80, 315, 110, '#c62828', 2.5) +
    K(250, 112, 130, 34, 'Glücksgefühl, kurz', '#fff9c4') + A(315, 147, 315, 172, '#c62828', 2.5) +
    K(250, 174, 130, 34, 'Gehirn will mehr', '#ffccbc'));

  D['bio8-09'] = S('#efebe9',
    T0('Wer lebt im Boden?') + R(0, 60, 400, 20, '#66bb6a') + R(0, 80, 400, 140, '#8d6e63') + R(0, 80, 400, 22, '#5d4037') +
    P('M60 120 Q90 100 120 125 Q150 150 180 130', 'none', '#e57373', 7) + L(120, 125, 120, 180, 'Regenwurm', 'middle') +
    E(260, 112, 20, 8, '#9e9e9e', '#616161') + L(260, 120, 310, 150, 'Assel') +
    C(320, 185, 3, '#fff8e1') + C(335, 190, 3, '#fff8e1') + C(345, 180, 3, '#fff8e1') + L(335, 185, 335, 205, 'Bakterien', 'middle') +
    T(40, 98, 'Laub', { s: 10, c: '#fff', b: 1 }) + T(40, 210, 'Zersetzer machen aus Laub Humus', { s: 10, c: '#fff', b: 1, a: 'start' }));

  D['bio8-10'] = S('#e8f5e9',
    T0('Drei Ebenen der Vielfalt') +
    C(90, 105, 52, '#c8e6c9', '#2e7d32') + T(90, 100, 'Arten', { s: 13, b: 1 }) + T(90, 116, 'viele Arten', { s: 9 }) +
    C(200, 105, 52, '#fff9c4', '#f9a825') + T(200, 100, 'Gene', { s: 13, b: 1 }) + T(200, 116, 'in einer Art', { s: 9 }) +
    C(310, 105, 52, '#bbdefb', '#1565c0') + T(310, 100, 'Lebens-', { s: 13, b: 1 }) + T(310, 116, 'räume', { s: 13, b: 1 }) +
    T(200, 188, 'Alle drei schützen heißt Natur erhalten', { s: 11, b: 1 }) + T(200, 205, 'Gefahr: Lebensraum geht verloren', { s: 10, c: '#c62828' }));

  D['bio8-11'] = S('#e0f7fa',
    T0('Bau einer Bakterienzelle') +
    E(190, 115, 100, 52, '#fff9c4', '#f57f17') + E(190, 115, 92, 44, '#fff59d', '#fbc02d') + E(190, 115, 84, 37, '#ffe082') +
    P('M150 115 Q170 95 190 115 Q210 135 230 115', 'none', '#6a1b9a', 3) +
    P('M290 118 Q315 100 335 120 Q350 135 370 118', 'none', '#795548', 2) +
    L(150, 115, 30, 70, 'DNA-Ring', 'start') + L(190, 70, 190, 38, 'Zellwand', 'middle') + L(240, 150, 300, 185, 'Zellplasma') +
    L(300, 112, 320, 70, 'Geißel') + T(60, 205, 'kein Zellkern', { s: 11, b: 1, c: '#c62828' }));

  D['bio8-12'] = S('#fce4ec',
    T0('Wie sich ein Virus vermehrt') +
    K(20, 40, 160, 30, '1 Andocken an die Zelle', '#fff') + K(220, 40, 160, 30, '2 Erbgut dringt ein', '#fff') +
    K(220, 150, 160, 30, '3 Zelle baut neue Viren', '#fff') + K(20, 150, 160, 30, '4 Zelle platzt', '#fff') +
    A(180, 55, 220, 55, '#c2185b', 2.5) + A(300, 72, 300, 148, '#c2185b', 2.5) + A(220, 165, 180, 165, '#c2185b', 2.5) +
    C(70, 110, 18, '#f48fb1', '#ad1457') + Ln(70, 92, 70, 84, '#ad1457', 2) + Ln(55, 98, 49, 92, '#ad1457', 2) + Ln(85, 98, 91, 92, '#ad1457', 2) + T(70, 114, 'Virus', { s: 9, b: 1 }) +
    T(200, 205, 'Ohne Wirtszelle kann sich ein Virus nicht vermehren', { s: 10, b: 1 }));

  D['bio9-09'] = S('#e8f5e9',
    T0('Verhütung: drei Beispiele') +
    K(20, 50, 110, 60, 'Kondom', '#fff', { b: 1 }) + K(145, 50, 110, 60, 'Pille', '#fff', { b: 1 }) + K(270, 50, 110, 60, 'Spirale', '#fff', { b: 1 }) +
    T(75, 135, 'Barriere', { s: 10 }) + T(75, 150, 'schützt auch vor', { s: 9 }) + T(75, 164, 'Infektionen', { s: 9 }) +
    T(200, 135, 'Hormone', { s: 10 }) + T(200, 150, 'verhindern den', { s: 9 }) + T(200, 164, 'Eisprung', { s: 9 }) +
    T(325, 135, 'in der', { s: 10 }) + T(325, 150, 'Gebärmutter', { s: 9 }) + T(325, 164, 'vom Arzt eingesetzt', { s: 9 }) +
    T(200, 200, 'Beide Partner sind verantwortlich', { s: 11, b: 1, c: '#2e7d32' }));

  D['bio9-10'] = S('#fff8e1',
    T0('Regelkreis Blutzucker') +
    K(150, 30, 100, 32, 'Bauchspeicheldrüse', '#ffe0b2', { s: 10 }) +
    K(20, 100, 120, 32, 'Zucker zu hoch', '#ffcdd2') + K(260, 100, 120, 32, 'Zucker zu niedrig', '#bbdefb') +
    A(175, 64, 100, 98, '#c62828', 2.5) + A(225, 64, 300, 98, '#1565c0', 2.5) +
    T(110, 85, 'Insulin', { s: 11, b: 1, c: '#c62828', a: 'end' }) + T(290, 85, 'Glukagon', { s: 11, b: 1, c: '#1565c0', a: 'start' }) +
    A(80, 134, 80, 175, '#c62828', 2.5) + A(320, 134, 320, 175, '#1565c0', 2.5) +
    T(80, 192, 'Zucker in die Zellen', { s: 10 }) + T(80, 206, 'und in die Leber', { s: 10 }) + T(320, 192, 'Leber gibt', { s: 10 }) + T(320, 206, 'Zucker ab', { s: 10 }));

  D['bio9-11'] = S('#efebe9',
    T0('Wege zum heutigen Menschen') +
    Ln(30, 160, 370, 160, '#6d4c41', 2) +
    [['Lucy', 'Australopithecus', 55, '3 Mio.'], ['Homo habilis', 'Werkzeug', 140, '2 Mio.'], ['Homo erectus', 'Feuer', 225, '1 Mio.'], ['Homo sapiens', 'heute', 335, '300 000 J.']].map(function (x) {
      return C(x[2], 160, 8, '#a1887f', '#5d4037') + T(x[2], 140, x[0], { s: 10, b: 1 }) + T(x[2], 126, x[1], { s: 9 }) + T(x[2], 182, x[3], { s: 9 });
    }).join('') +
    T(200, 210, 'vor Jahren, von links nach rechts', { s: 9 }));

  // ---------- Physik ----------
  D['phy6-07'] = S('#fffde7',
    T0('Energie wandelt sich um') +
    K(20, 70, 90, 40, 'Strom', '#fff9c4', { b: 1 }) + A(110, 90, 150, 90, '#555', 2.5) + K(150, 70, 100, 40, 'Glühlampe', '#fff') + A(250, 80, 285, 55, '#f9a825', 2.5) + A(250, 100, 285, 130, '#e53935', 2.5) +
    K(290, 40, 90, 32, 'Licht', '#fff59d', { b: 1 }) + K(290, 120, 90, 32, 'Wärme', '#ffcdd2', { b: 1 }) +
    T(200, 175, 'Gesamtenergie bleibt gleich', { s: 11, b: 1 }) + T(200, 195, 'Ein großer Teil wird zu Wärme', { s: 10 }));

  D['phy6-08'] = S('#212121',
    T(200, 18, 'Mondphasen', { s: 13, b: 1, c: '#fff' }) +
    [['Neumond', 50], ['zunehmend', 125], ['Vollmond', 200], ['abnehmend', 275], ['Neumond', 350]].map(function (x, i) {
      var c = x[1], s = C(c, 90, 28, '#424242', '#757575');
      if (i === 2) s = C(c, 90, 28, '#fff59d', '#fff');
      if (i === 1) s = C(c, 90, 28, '#424242', '#757575') + P('M' + c + ' 62 A28 28 0 0 1 ' + c + ' 118 A16 28 0 0 0 ' + c + ' 62', '#fff59d');
      if (i === 3) s = C(c, 90, 28, '#424242', '#757575') + P('M' + c + ' 62 A28 28 0 0 0 ' + c + ' 118 A16 28 0 0 1 ' + c + ' 62', '#fff59d');
      return s + T(c, 140, x[0], { s: 10, c: '#fff' });
    }).join('') +
    T(200, 175, 'Ein Umlauf dauert etwa 29,5 Tage', { s: 11, b: 1, c: '#ffe082' }) + T(200, 195, 'Die Sonne beleuchtet immer eine Hälfte', { s: 10, c: '#fff' }));

  D['phy6-09'] = S('#e3f2fd',
    T0('Neigung der Erdachse') +
    Z.Sonne(55, 110, 20) +
    C(230, 110, 40, '#42a5f5', '#1565c0') + P('M215 85 Q235 95 245 80 Q255 100 240 115 Q225 105 215 85Z', '#66bb6a') +
    Ln(212, 160, 248, 60, '#c62828', 2.5, '4 3') +
    A(100, 100, 175, 100, '#f9a825', 2) + A(100, 120, 175, 120, '#f9a825', 2) +
    T(230, 175, 'Achse 23,5° geneigt', { s: 10, b: 1, c: '#c62828' }) +
    T(330, 80, 'Sommer: Sonne', { s: 10 }) + T(330, 94, 'steht hoch', { s: 10 }) +
    T(330, 130, 'Winter: Sonne', { s: 10 }) + T(330, 144, 'steht flach', { s: 10 }) +
    T(200, 210, 'Drehung: 24 h = Tag und Nacht', { s: 10, b: 1 }));

  D['phy6-10'] = S('#f3e5f5',
    T0('Frequenz und Amplitude') +
    (function () { var d = '', e = '', f = ''; for (var i = 0; i <= 60; i++) { var x = 30 + 150 * i / 60; d += (i ? ' L' : 'M') + x.toFixed(1) + ' ' + (75 - 22 * Math.sin(i / 60 * 4 * 2 * Math.PI)).toFixed(1); } for (var j = 0; j <= 60; j++) { var x2 = 220 + 150 * j / 60; e += (j ? ' L' : 'M') + x2.toFixed(1) + ' ' + (75 - 22 * Math.sin(j / 60 * 8 * 2 * Math.PI)).toFixed(1); } for (var k = 0; k <= 60; k++) { var x3 = 30 + 150 * k / 60; f += (k ? ' L' : 'M') + x3.toFixed(1) + ' ' + (160 - 8 * Math.sin(k / 60 * 4 * 2 * Math.PI)).toFixed(1); } var g = ''; for (var m = 0; m <= 60; m++) { var x4 = 220 + 150 * m / 60; g += (m ? ' L' : 'M') + x4.toFixed(1) + ' ' + (160 - 22 * Math.sin(m / 60 * 4 * 2 * Math.PI)).toFixed(1); } return P(d, 'none', '#7b1fa2', 2.5) + P(e, 'none', '#7b1fa2', 2.5) + P(f, 'none', '#1565c0', 2.5) + P(g, 'none', '#1565c0', 2.5); })() +
    T(105, 115, 'tiefer Ton', { s: 10, b: 1 }) + T(295, 115, 'hoher Ton', { s: 10, b: 1 }) +
    T(105, 195, 'leise', { s: 10, b: 1 }) + T(295, 195, 'laut', { s: 10, b: 1 }) +
    T(200, 40, 'Frequenz = Tonhöhe', { s: 10, c: '#7b1fa2' }) + T(200, 126, 'Amplitude = Lautstärke', { s: 10, c: '#1565c0' }));

  D['phy7-08'] = S('#fbe9e7',
    T0('Reibung bremst') +
    R(40, 120, 320, 14, '#8d6e63') + R(100, 80, 70, 40, '#ffcc80', '#e65100', 4) +
    A(172, 100, 260, 100, '#2e7d32', 3) + A(100, 100, 40, 100, '#c62828', 3) +
    T(230, 90, 'Zugkraft', { s: 10, b: 1, c: '#2e7d32' }) + T(70, 90, 'Reibung', { s: 10, b: 1, c: '#c62828' }) +
    T(120, 165, 'Haft > Gleit > Roll', { s: 11, b: 1 }) + T(120, 182, 'Rollreibung ist am kleinsten', { s: 10 }) +
    C(285, 170, 14, '#bdbdbd', '#616161') + C(325, 170, 14, '#bdbdbd', '#616161') + R(272, 148, 66, 8, '#ffcc80', '#e65100') + T(305, 200, 'Räder rollen', { s: 10 }));

  D['phy7-09'] = S('#e8f5e9',
    T0('Rolle und Flaschenzug') +
    Ln(40, 35, 140, 35, '#555', 4) + C(90, 70, 20, '#fff', '#555') + Ln(70, 70, 70, 150, '#795548', 2) + Ln(110, 70, 110, 100, '#795548', 2) + R(98, 100, 24, 20, '#ffb74d', '#e65100') +
    T(90, 175, 'feste Rolle', { s: 10, b: 1 }) + T(90, 190, 'nur Richtung', { s: 9 }) +
    Ln(210, 35, 330, 35, '#555', 4) + C(250, 70, 14, '#fff', '#555') + C(290, 100, 14, '#fff', '#555') + Ln(236, 70, 236, 125, '#795548', 2) + Ln(264, 70, 264, 100, '#795548', 2) + Ln(276, 100, 276, 130, '#795548', 2) + Ln(304, 100, 304, 125, '#795548', 2) +
    R(262, 135, 30, 22, '#ffb74d', '#e65100') + T(270, 175, 'Flaschenzug', { s: 10, b: 1 }) + T(270, 190, 'F = G : n', { s: 10 }) + T(270, 205, 'mehr Weg', { s: 9 }));

  D['phy8-07'] = S('#212121',
    T(200, 18, 'Additive Farbmischung', { s: 13, b: 1, c: '#fff' }) +
    '<circle cx="165" cy="95" r="45" fill="#f00" opacity=".8"/><circle cx="235" cy="95" r="45" fill="#0f0" opacity=".8" style="mix-blend-mode:screen"/><circle cx="200" cy="140" r="45" fill="#00f" opacity=".8" style="mix-blend-mode:screen"/>' +
    '<circle cx="165" cy="95" r="45" fill="#f00" opacity=".6" style="mix-blend-mode:screen"/>' +
    T(140, 80, 'Rot', { s: 11, b: 1, c: '#fff' }) + T(262, 80, 'Grün', { s: 11, b: 1, c: '#000' }) + T(200, 165, 'Blau', { s: 11, b: 1, c: '#fff' }) +
    T(200, 100, 'Weiß', { s: 10, b: 1, c: '#000' }) + T(200, 207, 'Rot + Grün + Blau = Weiß', { s: 11, c: '#fff', b: 1 }));

  D['phy8-08'] = S('#e8eaf6',
    T0('Mikroskop und Fernrohr') +
    R(40, 70, 120, 18, '#9fa8da', '#3949ab', 3) + E(50, 95, 8, 20, '#b3e5fc', '#0288d1') + E(150, 55, 8, 20, '#b3e5fc', '#0288d1') +
    L(50, 100, 50, 150, 'Objektiv', 'middle') + L(150, 50, 160, 30, 'Okular') + T(100, 190, 'Mikroskop', { s: 11, b: 1 }) +
    R(220, 90, 150, 22, '#9fa8da', '#3949ab', 3) + E(225, 101, 6, 22, '#b3e5fc', '#0288d1') + E(365, 101, 5, 14, '#b3e5fc', '#0288d1') +
    L(225, 120, 245, 150, 'Objektiv') + L(365, 108, 340, 150, 'Okular', 'end') + T(300, 190, 'Fernrohr', { s: 11, b: 1 }));

  D['phy9-07'] = S('#fff3e0',
    T0('Wirkungsgrad') +
    K(20, 80, 100, 46, '1000 J', '#fff9c4', { b: 1 }) + T(70, 70, 'zugeführt', { s: 10 }) +
    K(150, 80, 80, 46, 'Motor', '#cfd8dc', { b: 1 }) + A(120, 103, 150, 103, '#555', 2.5) +
    A(230, 92, 270, 60, '#2e7d32', 2.5) + A(230, 115, 270, 148, '#c62828', 2.5) +
    K(272, 42, 108, 32, '300 J nutzbar', '#c8e6c9') + K(272, 135, 108, 32, '700 J Abwärme', '#ffcdd2') +
    T(200, 195, 'η = 300 : 1000 = 30 %', { s: 12, b: 1 }));

  D['phy10-07'] = S('#e8f5e9',
    T0('Woher kommt der Strom?') +
    Z.Sonne(50, 60, 14) + T(50, 100, 'Sonne', { s: 10 }) +
    Ln(130, 120, 130, 70, '#757575', 4) + P('M130 70 L115 55 M130 70 L145 55 M130 70 L130 45', 'none', '#757575', 3) + T(130, 135, 'Wind', { s: 10 }) +
    P('M200 60 Q230 75 260 60 Q290 45 320 60', 'none', '#1976d2', 4) + T(260, 90, 'Wasser', { s: 10 }) +
    R(45, 160, 70, 34, '#cfd8dc', '#455a64', 4) + T(80, 182, 'Speicher', { s: 10, b: 1 }) +
    R(150, 160, 90, 34, '#fff9c4', '#f9a825', 4) + T(195, 182, 'Stromnetz', { s: 10, b: 1 }) +
    R(280, 160, 90, 34, '#bbdefb', '#1565c0', 4) + T(325, 182, 'Zuhause', { s: 10, b: 1 }) +
    A(115, 177, 150, 177, '#555', 2) + A(240, 177, 280, 177, '#555', 2));

  D['phy10-08'] = S('#0d1b2a',
    T(200, 18, 'Das Leben eines Sterns', { s: 13, b: 1, c: '#fff' }) +
    K(15, 80, 70, 36, 'Gaswolke', '#e1bee7', { s: 10 }) + K(105, 80, 70, 36, 'Stern', '#fff59d', { s: 10, b: 1 }) + K(195, 80, 80, 36, 'Roter Riese', '#ffab91', { s: 10 }) +
    A(85, 98, 105, 98, '#fff', 2) + A(175, 98, 195, 98, '#fff', 2) +
    A(275, 90, 300, 60, '#fff', 2) + A(275, 106, 300, 140, '#fff', 2) +
    K(300, 40, 85, 32, 'Weißer Zwerg', '#e0e0e0', { s: 10 }) + K(300, 140, 85, 32, 'Supernova', '#ff8a65', { s: 10, b: 1 }) +
    T(200, 195, 'Sonne: klein → Weißer Zwerg', { s: 10, c: '#fff' }) + T(200, 210, 'Sehr große Sterne: Supernova', { s: 10, c: '#fff' }));

  // ---------- Chemie ----------
  D['che7-07'] = S('#fbe9e7',
    T0('Nachweisreaktionen') +
    K(15, 40, 115, 44, 'Sauerstoff', '#fff', { b: 1 }) + T(72, 100, 'Glimmspan', { s: 10 }) + T(72, 114, 'flammt auf', { s: 10 }) +
    K(142, 40, 115, 44, 'Wasserstoff', '#fff', { b: 1 }) + T(200, 100, 'Knallgasprobe', { s: 10 }) + T(200, 114, 'es knallt', { s: 10 }) +
    K(270, 40, 115, 44, 'Kohlenstoffdioxid', '#fff', { b: 1, s: 10 }) + T(327, 100, 'Kalkwasser', { s: 10 }) + T(327, 114, 'wird trüb', { s: 10 }) +
    T(200, 160, 'Jeder Stoff hat seine eigene Probe', { s: 11, b: 1 }) + T(200, 180, 'Schutzbrille tragen!', { s: 11, b: 1, c: '#c62828' }));

  D['che7-08'] = S('#e3f2fd',
    T0('Masse bleibt erhalten') +
    R(40, 120, 100, 14, '#90a4ae') + T(90, 150, 'vorher', { s: 11, b: 1 }) + K(55, 70, 70, 40, '24 g + 16 g', '#fff', { s: 10 }) +
    A(150, 95, 220, 95, '#555', 2.5) + T(185, 85, 'Reaktion', { s: 10 }) +
    R(240, 120, 100, 14, '#90a4ae') + T(290, 150, 'nachher', { s: 11, b: 1 }) + K(255, 70, 70, 40, '40 g', '#fff', { b: 1 }) +
    T(200, 190, '24 g + 16 g = 40 g', { s: 12, b: 1 }) + T(200, 207, 'Atome werden nur neu sortiert', { s: 10 }));

  D['che7-09'] = S('#efebe9',
    T0('Vom Erz zum Metall') +
    K(15, 50, 80, 36, 'Erz', '#bcaaa4', { b: 1 }) + A(95, 68, 125, 68, '#555', 2.5) + K(125, 50, 95, 36, 'Hochofen', '#ffccbc', { b: 1 }) + A(220, 68, 250, 68, '#555', 2.5) + K(250, 50, 80, 36, 'Eisen', '#cfd8dc', { b: 1 }) +
    A(290, 88, 290, 130, '#555', 2) + K(240, 132, 100, 34, 'Produkte', '#fff') + A(240, 149, 60, 149, '#2e7d32', 2.5) + K(15, 132, 45, 34, 'Schrott', '#e0e0e0', { s: 9 }) +
    T(150, 190, 'Recycling spart Energie', { s: 11, b: 1, c: '#2e7d32' }) + T(150, 205, 'und Rohstoffe', { s: 10 }));

  D['che8-07'] = S('#e8eaf6',
    T0('Elementfamilien') +
    K(15, 45, 82, 48, 'Alkali-', '#ffccbc', { b: 1 }) + K(107, 45, 82, 48, 'Erdalkali-', '#ffe0b2', { b: 1, s: 10 }) + K(209, 45, 82, 48, 'Halogene', '#fff59d', { b: 1, s: 10 }) + K(301, 45, 82, 48, 'Edelgase', '#c8e6c9', { b: 1, s: 10 }) +
    T(56, 115, 'Gruppe 1', { s: 10 }) + T(148, 115, 'Gruppe 2', { s: 10 }) + T(250, 115, 'Gruppe 7', { s: 10 }) + T(342, 115, 'Gruppe 8', { s: 10 }) +
    T(56, 135, 'Natrium', { s: 9 }) + T(148, 135, 'Magnesium', { s: 9 }) + T(250, 135, 'Chlor', { s: 9 }) + T(342, 135, 'Helium', { s: 9 }) +
    T(200, 180, 'Gleiche Gruppe, gleich viele Außenelektronen', { s: 10, b: 1 }) + T(200, 197, 'darum ähnliches Verhalten', { s: 10 }));

  D['che8-08'] = S('#fff3e0',
    T0('Aktivierungsenergie') +
    Z.Ax(40, 185, 330, 150, 'Reaktionsverlauf', 'Energie') +
    P('M50 140 Q100 140 130 70 Q155 30 185 90 Q215 145 360 150', 'none', '#e53935', 3) +
    P('M50 140 Q100 140 130 110 Q155 85 185 120 Q215 148 360 150', 'none', '#1565c0', 3, '') +
    T(75, 130, 'Edukte', { s: 10 }) + T(335, 142, 'Produkte', { s: 10 }) +
    T(155, 45, 'ohne Katalysator', { s: 10, c: '#e53935', b: 1 }) + T(285, 128, 'mit Katalysator', { s: 10, c: '#1565c0', b: 1 }));

  D['che10-07'] = S('#e0f2f1',
    T0('Alkane und Alkanole') +
    K(15, 50, 70, 34, 'CH₄', '#fff', { b: 1, s: 13 }) + K(95, 50, 70, 34, 'C₂H₆', '#fff', { b: 1, s: 13 }) + K(175, 50, 70, 34, 'C₃H₈', '#fff', { b: 1, s: 13 }) + K(255, 50, 70, 34, 'C₄H₁₀', '#fff', { b: 1, s: 13 }) +
    T(50, 100, 'Methan', { s: 10 }) + T(130, 100, 'Ethan', { s: 10 }) + T(210, 100, 'Propan', { s: 10 }) + T(290, 100, 'Butan', { s: 10 }) +
    K(335, 50, 55, 34, '+ OH', '#ffe0b2', { b: 1 }) + T(362, 100, 'Alkanol', { s: 10, b: 1 }) +
    T(200, 150, 'Allgemein: CₙH₂ₙ₊₂', { s: 12, b: 1 }) + T(200, 172, 'Ethanol: C₂H₅OH', { s: 11 }) + T(200, 195, 'Je länger die Kette, desto höher der Siedepunkt', { s: 10 }));

  D['che10-08'] = S('#e3f2fd',
    T0('Treibhauseffekt') +
    Z.Sonne(45, 50, 16) + A(70, 70, 150, 150, '#f9a825', 2.5) +
    P('M0 90 Q200 70 400 90', 'none', '#81d4fa', 12) + T(300, 70, 'Treibhausgase (CO₂)', { s: 10, b: 1, c: '#0277bd' }) +
    R(0, 170, 400, 50, '#66bb6a') + A(160, 160, 250, 105, '#e53935', 2.5) + A(250, 105, 330, 150, '#e53935', 2.5) + T(358, 112, 'Wärme zurück', { s: 10, c: '#c62828', b: 1 }) +
    T(200, 205, 'Mehr CO₂ = mehr Wärme bleibt in der Luft', { s: 11, b: 1 }));
})();
