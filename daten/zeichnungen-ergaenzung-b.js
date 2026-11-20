// Schaubilder zu den Biologie-Ergänzungen Klasse 5–7
(function () {
  var Z = window.ZH, D = window.ZEICHNUNGEN, S = Z.S, T = Z.T, L = Z.L, A = Z.A, K = Z.K, C = Z.C, E = Z.E, R = Z.R, P = Z.P, Ln = Z.Ln;
  function T0(s) { return T(200, 18, s, { s: 13, b: 1 }); }

  D['bio5-08'] = S('#e8f5e9',
    T0('Kennzeichen der Lebewesen') +
    K(15, 40, 120, 40, 'Stoffwechsel', '#fff', { b: 1 }) + K(140, 40, 120, 40, 'Wachstum', '#fff', { b: 1 }) + K(265, 40, 120, 40, 'Fortpflanzung', '#fff', { b: 1 }) +
    K(15, 100, 120, 40, 'Reizbarkeit', '#fff', { b: 1 }) + K(140, 100, 120, 40, 'Bewegung', '#fff', { b: 1 }) + K(265, 100, 120, 40, 'Zellen', '#fff', { b: 1 }) +
    T(200, 175, 'Lebewesen haben alle diese Kennzeichen', { s: 11, b: 1 }) + T(200, 195, 'Ein Stein oder ein Feuer nicht', { s: 10 }));

  D['bio5-09'] = S('#fff8e1',
    T0('Vom Wolf zum Hund') +
    E(70, 100, 38, 24, '#9e9e9e', '#616161') + P('M40 90 L45 70 L58 85Z M100 90 L95 70 L82 85Z', '#9e9e9e', '#616161', 1) + C(50, 98, 3, '#fff') + C(90, 98, 3, '#fff') + T(70, 150, 'Wolf', { s: 11, b: 1 }) +
    A(115, 100, 185, 100, '#555', 2.5) + T(150, 90, 'Zähmung', { s: 10 }) + T(150, 118, 'und Zucht', { s: 10 }) +
    K(195, 40, 88, 28, 'Dackel', '#ffe0b2') + K(195, 75, 88, 28, 'Schäferhund', '#ffe0b2', { s: 10 }) + K(195, 110, 88, 28, 'Pudel', '#ffe0b2') + K(195, 145, 88, 28, 'Dogge', '#ffe0b2') +
    T(335, 90, 'über 300', { s: 12, b: 1 }) + T(335, 108, 'Rassen', { s: 11, b: 1 }) + T(335, 130, 'Hund', { s: 10 }));

  D['bio5-10'] = S('#fff3e0',
    T0('Die Katze als Schleichjäger') +
    E(160, 115, 60, 52, '#ffcc80', '#e65100') + P('M110 85 L112 50 L138 70Z M210 85 L208 50 L182 70Z', '#ffcc80', '#e65100', 1.5) +
    E(140, 108, 9, 12, '#fff59d') + E(180, 108, 9, 12, '#fff59d') + Ln(140, 98, 140, 120, '#212121', 2) + Ln(180, 98, 180, 120, '#212121', 2) + P('M155 128 L165 128 L160 135Z', '#e91e63') +
    Ln(120, 130, 70, 122, '#555', 1) + Ln(120, 136, 70, 140, '#555', 1) + Ln(200, 130, 250, 122, '#555', 1) + Ln(200, 136, 250, 140, '#555', 1) +
    L(182, 108, 285, 62, 'Nachtsicht') + L(208, 58, 285, 40, 'Ohren') + L(240, 124, 285, 112, 'Schnurrhaare') + L(160, 133, 285, 160, 'Reißzähne') +
    T(200, 205, 'Pfoten: weich, Krallen einziehbar', { s: 10, b: 1 }));

  D['bio5-11'] = S('#e8f5e9',
    T0('Die vier Mägen des Rindes') +
    K(15, 80, 80, 40, 'Pansen', '#c8e6c9', { b: 1 }) + K(115, 80, 85, 40, 'Netzmagen', '#c8e6c9', { b: 1, s: 10 }) + K(215, 80, 90, 40, 'Blättermagen', '#c8e6c9', { b: 1, s: 10 }) + K(320, 80, 70, 40, 'Labmagen', '#c8e6c9', { b: 1, s: 10 }) +
    A(95, 100, 115, 100, '#555', 2) + A(200, 100, 215, 100, '#555', 2) + A(305, 100, 320, 100, '#555', 2) +
    T(55, 140, 'Gärraum', { s: 9 }) + T(157, 140, 'formt Ballen', { s: 9 }) + T(260, 140, 'entzieht Wasser', { s: 9 }) + T(355, 140, 'Verdauung', { s: 9 }) +
    P('M55 78 Q55 40 200 40 Q300 40 150 76', 'none', '#2e7d32', 2) + A(150, 76, 148, 70, '#2e7d32', 1.5) + T(210, 34, 'Wiederkäuen', { s: 10, b: 1, c: '#2e7d32' }) +
    T(200, 190, 'Gras → Pansen → hochwürgen → nochmals kauen', { s: 10 }));

  D['bio6-12'] = S('#e1f5fe',
    T0('Wie Samen reisen') +
    K(15, 45, 85, 60, 'Wind', '#fff', { b: 1 }) + K(110, 45, 85, 60, 'Wasser', '#fff', { b: 1 }) + K(205, 45, 85, 60, 'Tiere', '#fff', { b: 1 }) + K(300, 45, 85, 60, 'Schleudern', '#fff', { b: 1, s: 10 }) +
    T(57, 128, 'Löwenzahn', { s: 10 }) + T(57, 143, 'Ahorn', { s: 10 }) + T(152, 128, 'Kokosnuss', { s: 10 }) + T(152, 143, 'Erle', { s: 10 }) +
    T(247, 128, 'Klette', { s: 10 }) + T(247, 143, 'Kirsche', { s: 10 }) + T(342, 128, 'Springkraut', { s: 10 }) + T(342, 143, 'Ginster', { s: 10 }) +
    T(200, 190, 'Jede Pflanze hat ihre eigene Verbreitung', { s: 11, b: 1 }));

  D['bio6-13'] = S('#efebe9',
    T0('Die Kartoffelpflanze') +
    R(0, 100, 400, 120, '#8d6e63') + Ln(200, 100, 200, 40, '#2e7d32', 4) + E(170, 55, 28, 12, '#66bb6a') + E(230, 55, 28, 12, '#66bb6a') + E(200, 38, 12, 20, '#66bb6a') +
    Ln(200, 100, 130, 140, '#c8b69b', 2) + Ln(200, 100, 270, 140, '#c8b69b', 2) + Ln(200, 100, 200, 170, '#c8b69b', 2) +
    E(125, 148, 22, 15, '#d7b98e', '#8d6e4b') + E(275, 148, 22, 15, '#d7b98e', '#8d6e4b') + E(200, 178, 22, 15, '#d7b98e', '#8d6e4b') +
    L(125, 148, 40, 175, 'Knolle', 'start') + L(230, 55, 320, 45, 'Blätter (giftig)') + L(200, 115, 320, 100, 'Ausläufer') +
    T(310, 195, 'speichert Stärke', { s: 10, b: 1, c: '#fff' }));

  D['bio6-14'] = S('#fffde7',
    T0('Getreide: Ähre und Korn') +
    Ln(80, 190, 80, 80, '#9e9d24', 3) + [[78, 70], [84, 90], [76, 110], [86, 130]].map(function (p) { return E(p[0] - 12, p[1], 6, 12, '#fbc02d', '#f57f17') + E(p[0] + 12, p[1], 6, 12, '#fbc02d', '#f57f17'); }).join('') + E(80, 50, 6, 14, '#fbc02d', '#f57f17') + T(80, 207, 'Ähre', { s: 11, b: 1 }) +
    E(290, 105, 45, 62, '#ffe082', '#f9a825') + E(290, 110, 34, 50, '#fff8e1') + E(290, 158, 14, 12, '#a5d6a7', '#2e7d32') +
    L(262, 80, 190, 70, 'Schale (Kleie)', 'end') + L(290, 100, 332, 60, 'Mehlkörper') + L(292, 158, 332, 175, 'Keimling') +
    T(290, 207, 'Weizenkorn im Schnitt', { s: 10, b: 1 }));

  D['bio6-15'] = S('#f1f8e9',
    T0('Bestimmungsschlüssel') +
    K(130, 35, 140, 30, 'Blüten gelb?', '#fff') + A(165, 66, 100, 100, '#555', 2) + A(235, 66, 300, 100, '#555', 2) +
    T(120, 85, 'ja', { s: 10, b: 1 }) + T(285, 85, 'nein', { s: 10, b: 1 }) +
    K(35, 100, 130, 30, 'Viele Blüten im Körbchen?', '#fff', { s: 9 }) + K(235, 100, 130, 30, 'Vier Blütenblätter?', '#fff', { s: 10 }) +
    A(70, 132, 50, 165, '#555', 2) + A(150, 132, 160, 165, '#555', 2) + A(270, 132, 260, 165, '#555', 2) + A(340, 132, 350, 165, '#555', 2) +
    K(5, 165, 85, 28, 'Löwenzahn', '#fff9c4', { s: 10, b: 1 }) + K(115, 165, 90, 28, 'Hahnenfuß', '#fff9c4', { s: 10, b: 1 }) + K(215, 165, 70, 28, 'Raps', '#fff9c4', { s: 10, b: 1 }) + K(300, 165, 95, 28, 'Rose', '#f8bbd0', { s: 10, b: 1 }));

  D['bio6-16'] = S('#e8f5e9',
    T0('Die Organe einer Pflanze') +
    R(0, 140, 400, 80, '#8d6e63') + Ln(160, 140, 160, 60, '#2e7d32', 5) +
    E(125, 95, 28, 12, '#66bb6a') + E(195, 85, 28, 12, '#66bb6a') + C(160, 50, 14, '#f48fb1', '#ad1457') + C(160, 50, 5, '#ffd54f') +
    P('M160 140 Q130 165 110 195 M160 140 Q160 170 165 205 M160 140 Q190 165 215 195', 'none', '#d7ccc8', 3) +
    L(165, 45, 262, 35, 'Blüte: Fortpflanzung') + L(200, 85, 262, 70, 'Blatt: Fotosynthese') + L(160, 110, 262, 105, 'Spross: Stütze, Leitung') + L(190, 175, 262, 170, 'Wurzel: Aufnahme', 'start'));

  D['bio6-17'] = S('#e3f2fd',
    T0('Stockwerke im Baum') +
    Z.Baum(120, 190, 1.6) + R(0, 190, 400, 30, '#8d6e63') +
    L(120, 70, 250, 40, 'Krone: Vögel, Raupen') + L(118, 130, 250, 95, 'Stamm: Käfer, Specht') + L(116, 160, 250, 140, 'Höhle: Meise, Fledermaus') + L(122, 200, 250, 178, 'Boden: Würmer, Pilze', 'start') +
    T(330, 212, 'Totholz lebt', { s: 10, b: 1, c: '#fff' }));

  D['bio6-18'] = S('#f1f8e9',
    T0('Die Hecke') +
    R(0, 170, 400, 50, '#8bc34a') + E(120, 140, 70, 40, '#2e7d32') + E(200, 130, 70, 50, '#388e3c') + E(280, 140, 70, 40, '#2e7d32') +
    C(110, 130, 4, '#c62828') + C(150, 120, 4, '#c62828') + C(220, 120, 4, '#1a237e') + C(260, 135, 4, '#1a237e') + C(190, 100, 4, '#c62828') +
    E(310, 185, 16, 9, '#8d6e63') + C(325, 183, 3, '#212121') +
    L(220, 100, 270, 45, 'Mantel: Sträucher') + L(190, 130, 40, 60, 'Kern: Nistplätze', 'start') + L(310, 186, 340, 205, 'Igel') + L(120, 185, 60, 205, 'Saum: Blumen', 'start'));

  D['bio6-19'] = S('#e0f2f1',
    T0('Wirbellose Tiere') +
    K(15, 40, 112, 44, 'Weichtiere', '#fff', { b: 1 }) + K(144, 40, 112, 44, 'Ringelwürmer', '#fff', { b: 1, s: 10 }) + K(273, 40, 112, 44, 'Gliederfüßer', '#fff', { b: 1, s: 10 }) +
    T(71, 102, 'Schnecke', { s: 10 }) + T(71, 116, 'Muschel', { s: 10 }) + T(200, 102, 'Regenwurm', { s: 10 }) + T(200, 116, 'Blutegel', { s: 10 }) + T(329, 102, 'Insekten', { s: 10 }) + T(329, 116, 'Spinnen, Krebse', { s: 10 }) +
    K(80, 135, 112, 36, 'Nesseltiere', '#fff', { b: 1, s: 10 }) + K(210, 135, 112, 36, 'Stachelhäuter', '#fff', { b: 1, s: 10 }) +
    T(200, 200, 'Kein Wirbel: über 95 von 100 Tierarten', { s: 10, b: 1 }));

  D['bio6-20'] = S('#fff3e0',
    T0('Nützling frisst Schädling') +
    C(70, 100, 24, '#e53935') + C(62, 94, 4, '#212121') + C(80, 100, 4, '#212121') + C(70, 112, 4, '#212121') + T(70, 145, 'Marienkäfer', { s: 10, b: 1 }) +
    A(100, 100, 170, 100, '#555', 2.5) + T(135, 90, 'frisst', { s: 10 }) +
    E(210, 100, 25, 14, '#8bc34a', '#558b2f') + T(210, 145, 'Blattlaus', { s: 10, b: 1 }) +
    A(240, 100, 300, 100, '#555', 2.5) + T(270, 90, 'saugt an', { s: 10 }) +
    Ln(345, 130, 345, 60, '#2e7d32', 4) + E(330, 70, 14, 7, '#66bb6a') + E(360, 85, 14, 7, '#66bb6a') + T(345, 145, 'Pflanze', { s: 10, b: 1 }) +
    T(200, 190, 'Nützlinge helfen ohne Gift', { s: 11, b: 1, c: '#2e7d32' }));

  D['bio6-21'] = S('#e3f2fd',
    T0('Säugetiere im Winter') +
    K(15, 40, 112, 50, 'Winterschlaf', '#bbdefb', { b: 1, s: 10 }) + K(144, 40, 112, 50, 'Winterruhe', '#c8e6c9', { b: 1, s: 10 }) + K(273, 40, 112, 50, 'Winteraktiv', '#ffe0b2', { b: 1, s: 10 }) +
    T(71, 110, 'Igel, Fledermaus', { s: 10 }) + T(71, 126, 'Temperatur sinkt', { s: 9 }) + T(71, 140, 'stark', { s: 9 }) +
    T(200, 110, 'Eichhörnchen, Dachs', { s: 10 }) + T(200, 126, 'wachen zum', { s: 9 }) + T(200, 140, 'Fressen auf', { s: 9 }) +
    T(329, 110, 'Reh, Fuchs, Hase', { s: 10 }) + T(329, 126, 'Winterfell', { s: 9 }) +
    T(200, 190, 'Drei Strategien gegen Kälte und Futtermangel', { s: 10, b: 1 }));

  D['bio6-22'] = S('#e1f5fe',
    T0('Vogelzug') +
    R(20, 40, 360, 55, '#c8e6c9', null, 8) + T(200, 70, 'Europa: Sommer, Brutgebiet', { s: 11, b: 1 }) +
    R(20, 150, 360, 55, '#ffe0b2', null, 8) + T(200, 182, 'Afrika: Winterquartier', { s: 11, b: 1 }) +
    A(110, 98, 110, 148, '#1565c0', 3) + T(110, 125, 'Herbst', { s: 10, c: '#1565c0', b: 1, a: 'start' }).replace('x="110"', 'x="120"') +
    A(290, 148, 290, 98, '#c62828', 3) + T(280, 125, 'Frühling', { s: 10, c: '#c62828', b: 1, a: 'end' }));

  D['bio6-23'] = S('#e8eaf6',
    T0('Wechselwarm und gleichwarm') +
    Z.Ax(40, 185, 330, 140, 'Außentemperatur', 'Körpertemperatur') +
    Ln(60, 160, 350, 40, '#c62828', 3) + Ln(60, 85, 350, 85, '#1565c0', 3) +
    T(130, 75, 'gleichwarm', { s: 10, b: 1, c: '#1565c0' }) + T(130, 62, 'Vögel, Säugetiere', { s: 9, c: '#1565c0' }) +
    T(230, 170, 'wechselwarm', { s: 10, b: 1, c: '#c62828' }) + T(230, 155, 'Frosch, Eidechse', { s: 9, c: '#c62828' }));

  D['bio6-24'] = S('#212121',
    T(200, 18, 'Echoortung der Fledermaus', { s: 13, b: 1, c: '#fff' }) +
    P('M40 100 Q60 70 85 95 Q100 80 115 100 Q85 112 70 108 Q55 115 40 100Z', '#8d6e63', '#bcaaa4', 1.5) + C(85, 98, 6, '#795548') +
    P('M125 90 Q150 80 150 100 Q150 120 125 110', 'none', '#ffd54f', 2) + P('M150 80 Q185 70 185 100 Q185 130 150 120', 'none', '#ffd54f', 2) +
    E(300, 100, 14, 8, '#8bc34a', '#c5e1a5') + T(300, 130, 'Insekt', { s: 10, c: '#fff', b: 1 }) +
    P('M285 90 Q270 100 285 110', 'none', '#81d4fa', 2) + P('M265 85 Q245 100 265 115', 'none', '#81d4fa', 2) +
    T(180, 55, 'Ruf (Ultraschall)', { s: 10, c: '#ffd54f' }) + T(240, 160, 'Echo', { s: 10, c: '#81d4fa', b: 1 }) +
    T(200, 200, 'Aus der Zeit bis zum Echo berechnet sie den Abstand', { s: 10, c: '#fff' }));

  D['bio6-25'] = S('#fff3e0',
    T0('Extreme Lebensräume') +
    K(15, 40, 112, 50, 'Wüste', '#ffe082', { b: 1 }) + K(144, 40, 112, 50, 'Polarregion', '#e1f5fe', { b: 1, s: 10 }) + K(273, 40, 112, 50, 'Hochgebirge', '#d7ccc8', { b: 1, s: 10 }) +
    T(71, 112, 'Kamel: Fett im', { s: 10 }) + T(71, 126, 'Höcker', { s: 10 }) + T(71, 146, 'Fennek: große Ohren', { s: 9 }) +
    T(200, 112, 'Eisbär: Fettschicht', { s: 10 }) + T(200, 126, 'und dichtes Fell', { s: 10 }) + T(200, 146, 'Pinguin: Federn', { s: 9 }) +
    T(329, 112, 'Steinbock:', { s: 10 }) + T(329, 126, 'Klettern', { s: 10 }) + T(329, 146, 'Murmeltier: Schlaf', { s: 9 }) +
    T(200, 190, 'Angepasstheiten sichern das Überleben', { s: 11, b: 1 }));

  D['bio7-11'] = S('#e0f7fa',
    T0('Bau eines Zahns') +
    P('M130 40 Q110 40 110 70 Q110 100 130 110 L135 190 L165 190 L170 150 L200 190 L230 190 L240 110 Q260 100 260 70 Q260 40 240 40Z', '#fff', '#37474f', 2) +
    P('M122 45 Q113 45 113 70 Q113 92 128 100 L244 100 Q257 92 257 70 Q257 45 248 45Z', '#eceff1', '#90a4ae', 1.5) +
    P('M150 100 L150 160 M220 100 L220 160', 'none', '#ef9a9a', 3) + R(150, 105, 70, 40, '#ffcdd2') +
    L(190, 44, 300, 35, 'Zahnschmelz') + L(185, 90, 300, 70, 'Zahnbein') + L(190, 125, 275, 115, 'Zahnmark') + L(215, 175, 300, 165, 'Wurzel im Kiefer') +
    T(70, 100, 'Krone', { s: 10, b: 1, c: '#546e7a' }));

  D['bio7-12'] = S('#ffebee',
    T0('Bestandteile des Blutes') +
    R(150, 40, 100, 150, '#ffcdd2', '#c62828', 12) + R(150, 70, 100, 50, '#fff9c4', null, 0) +
    C(175, 150, 8, '#c62828') + C(200, 165, 8, '#c62828') + C(225, 148, 8, '#c62828') + C(190, 175, 8, '#c62828') +
    C(215, 125, 6, '#fff', '#9e9e9e') + C(180, 130, 5, '#9e9e9e') +
    L(150, 90, 40, 60, 'Blutplasma', 'start') + L(175, 150, 40, 120, 'Rote Zellen', 'start') + L(215, 125, 310, 90, 'Weiße Zellen') + L(180, 130, 310, 130, 'Blutplättchen'));

  D['bio7-13'] = S('#ffebee',
    T0('Erste Hilfe in vier Schritten') +
    K(15, 45, 85, 70, '1', '#fff', { b: 1, s: 22 }) + K(110, 45, 85, 70, '2', '#fff', { b: 1, s: 22 }) + K(205, 45, 85, 70, '3', '#fff', { b: 1, s: 22 }) + K(300, 45, 85, 70, '4', '#fff', { b: 1, s: 22 }) +
    T(57, 140, 'Selbst', { s: 10, b: 1 }) + T(57, 154, 'schützen', { s: 10, b: 1 }) + T(152, 140, 'Absichern', { s: 10, b: 1 }) + T(247, 140, 'Notruf', { s: 11, b: 1, c: '#c62828' }) + T(247, 156, '112', { s: 14, b: 1, c: '#c62828' }) + T(342, 140, 'Helfen und', { s: 10, b: 1 }) + T(342, 154, 'trösten', { s: 10, b: 1 }) +
    T(200, 195, 'Nichts tun ist der größte Fehler', { s: 11, b: 1 }));

  D['bio7-14'] = S('#e3f2fd',
    T0('Das Auge im Schnitt') +
    E(180, 115, 80, 62, '#fff', '#37474f') + P('M100 115 Q110 75 130 70 Q122 115 130 160 Q110 155 100 115', '#b3e5fc', '#0288d1', 1.5) +
    E(150, 115, 8, 24, '#ffd54f', '#f9a825') + Ln(138, 90, 138, 100, '#795548', 6) + Ln(138, 130, 138, 140, '#795548', 6) +
    P('M240 80 Q262 115 240 150', 'none', '#e53935', 4) + Ln(260, 115, 320, 115, '#fbc02d', 5) +
    L(138, 92, 70, 45, 'Iris', 'end') + L(108, 135, 30, 165, 'Hornhaut', 'start') + L(152, 130, 110, 195, 'Linse', 'middle') + L(190, 125, 200, 205, 'Glaskörper', 'middle') + L(250, 115, 300, 70, 'Netzhaut') + L(300, 115, 320, 150, 'Sehnerv'));

  D['bio7-15'] = S('#f3e5f5',
    T0('Das Ohr') +
    P('M40 60 Q15 90 40 130 Q55 140 65 110 Q75 90 65 80Z', '#ffccbc', '#bf360c', 1.5) + Ln(65, 105, 140, 105, '#795548', 6) +
    Ln(140, 85, 140, 125, '#fff', 4) + R(145, 90, 14, 6, '#b39ddb') + R(160, 86, 14, 6, '#b39ddb') + R(175, 90, 14, 6, '#b39ddb') +
    C(225, 105, 24, '#ffe0b2', '#ef6c00') + P('M225 105 m-14 0 a14 14 0 1 1 14 14', 'none', '#ef6c00', 2) +
    P('M210 80 Q200 60 215 55 M235 80 Q245 60 230 55', 'none', '#7b1fa2', 4) +
    L(40, 95, 20, 165, 'Ohrmuschel', 'start') + L(140, 105, 120, 165, 'Trommelfell', 'middle') + L(165, 90, 190, 165, 'Hammer, Amboss, Steigbügel', 'start') + L(225, 105, 285, 85, 'Hörschnecke') + L(222, 58, 285, 45, 'Bogengänge'));

  D['bio7-16'] = S('#fbe9e7',
    T0('Die Haut im Schnitt') +
    R(40, 60, 240, 30, '#ffccbc', '#bf360c') + R(40, 90, 240, 50, '#ffab91', '#bf360c') + R(40, 140, 240, 40, '#fff9c4', '#f9a825') +
    Ln(110, 40, 110, 120, '#4e342e', 3) + C(190, 115, 8, '#fff', '#c62828') + Ln(220, 90, 220, 170, '#1565c0', 2) + C(150, 100, 6, '#ffee58', '#f9a825') +
    L(60, 75, 300, 55, 'Oberhaut') + L(250, 112, 300, 105, 'Lederhaut') + L(250, 160, 300, 160, 'Unterhaut: Fett') + L(110, 55, 300, 30, 'Haar') + L(190, 115, 40, 195, 'Schweißdrüse', 'start') + L(150, 100, 140, 195, 'Tastsinneszelle', 'start'));

  D['bio7-17'] = S('#fff8e1',
    T0('Besondere Sinne') +
    K(15, 40, 112, 50, 'Hund', '#fff', { b: 1 }) + K(144, 40, 112, 50, 'Fledermaus', '#fff', { b: 1, s: 10 }) + K(273, 40, 112, 50, 'Biene', '#fff', { b: 1 }) +
    T(71, 112, 'riecht 40-fach', { s: 10 }) + T(71, 126, 'besser', { s: 10 }) + T(200, 112, 'hört Ultraschall', { s: 10 }) + T(329, 112, 'sieht UV-Licht', { s: 10 }) +
    K(80, 140, 112, 40, 'Schlange', '#fff', { b: 1 }) + K(210, 140, 112, 40, 'Hai', '#fff', { b: 1 }) +
    T(136, 195, 'spürt Wärme', { s: 10 }) + T(266, 195, 'spürt Strom', { s: 10 }));

  D['bio7-18'] = S('#fce4ec',
    T0('Der Zyklus') +
    C(110, 115, 62, 'none', '#ad1457') + P('M110 53 A62 62 0 0 1 172 115', 'none', '#f48fb1', 12) + P('M172 115 A62 62 0 0 1 110 177', 'none', '#ce93d8', 12) + P('M110 177 A62 62 0 0 1 48 115', 'none', '#ffcc80', 12) + P('M48 115 A62 62 0 0 1 110 53', 'none', '#ef9a9a', 12) +
    T(110, 118, 'ca. 28 Tage', { s: 11, b: 1 }) +
    T(255, 55, 'Menstruation', { s: 10, b: 1, a: 'start' }) + T(255, 70, 'Tag 1 bis 5', { s: 9, a: 'start' }) +
    T(255, 100, 'Aufbau', { s: 10, b: 1, a: 'start' }) + T(255, 115, 'Eizelle reift', { s: 9, a: 'start' }) +
    T(255, 145, 'Eisprung', { s: 10, b: 1, a: 'start' }) + T(255, 160, 'etwa Zyklusmitte', { s: 9, a: 'start' }) +
    T(255, 190, 'Schleimhaut bereit', { s: 10, b: 1, a: 'start' }));
})();
