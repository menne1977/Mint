// Erdkunde Klasse 5 – kindgerechte Kapitel (eigene Texte, eigene Zeichnungen)
(function () {
  var K = window.KAPITEL = window.KAPITEL || {};
  function svg(inner) { return '<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg" role="img">' + inner + '</svg>'; }

  K['erd5-01'] = {
    bild: svg('<rect width="400" height="200" fill="#e3f2fd"/><circle cx="90" cy="95" r="60" fill="#64b5f6"/><path d="M60 60 q20 -10 35 5 q10 20 -10 30 q-25 5 -25 -35z" fill="#81c784"/><path d="M100 110 q20 0 25 20 q-15 15 -30 0z" fill="#81c784"/><ellipse cx="90" cy="95" rx="60" ry="18" fill="none" stroke="#fff" stroke-dasharray="4"/><text x="90" y="180" font-size="12" text-anchor="middle">Globus</text><rect x="200" y="40" width="170" height="110" fill="#fffde7" stroke="#8d6e63" stroke-width="3"/><path d="M215 120 q30 -50 60 -20 q30 30 80 -30" stroke="#1e88e5" stroke-width="4" fill="none"/><rect x="260" y="70" width="25" height="18" fill="#e57373"/><path d="M320 120 l15 -25 l15 25z" fill="#8d6e63"/><text x="285" y="180" font-size="12" text-anchor="middle">Karte</text>'),
    bildtext: 'Der Globus ist ein kleines Modell der Erde, die Karte ein flaches Bild.',
    einfach: '<p>Ein <b>Globus</b> ist eine kleine Kugel, die aussieht wie die Erde. Eine <b>Karte</b> zeigt ein Stück der Erde flach auf Papier, von oben gesehen.</p><p>Im <b>Atlas</b> sind viele Karten in einem Buch gesammelt. Mit dem Register hinten findest du jeden Ort.</p>',
    merke: 'Globus = Erde als Kugel. Karte = flaches Bild von oben. Atlas = Buch mit vielen Karten.',
    ausfuehrlich: '<h3>Der Globus</h3><p>Er zeigt die Erde ohne Verzerrung: Formen und Größen der Länder stimmen. Aber er ist unpraktisch zum Mitnehmen und zeigt keine kleinen Details.</p><h3>Die Karte</h3><p>Eine Karte ist handlich und kann viele Einzelheiten zeigen. Weil man eine Kugel nicht ohne Verzerrung flach machen kann, sind große Weltkarten an den Rändern verzogen. Grönland sieht dort zum Beispiel viel zu groß aus.</p><h3>Kartenarten</h3><ul><li><b>Physische Karte:</b> zeigt Höhen mit Farben (grün = tief, braun = hoch), Flüsse, Gebirge.</li><li><b>Thematische Karte:</b> zeigt ein bestimmtes Thema, zum Beispiel Klima, Bevölkerung oder Landwirtschaft.</li><li><b>Stadtplan:</b> Straßen und Gebäude einer Stadt.</li></ul><h3>Die Legende</h3><p>Die <b>Legende</b> erklärt die Zeichen und Farben der Karte, zum Beispiel: blaue Linie = Fluss, roter Punkt = Stadt.</p><h3>Arbeiten mit dem Atlas</h3><ol><li>Ort im Register (hinten) suchen.</li><li>Dort steht Seite und Planquadrat, zum Beispiel „34 C4“.</li><li>Seite aufschlagen, Buchstabe oben und Zahl an der Seite suchen.</li><li>Im Kästchen findest du den Ort.</li></ol>',
    folien: [
      { symbol: '🌐', titel: 'Globus', text: 'Die Erde als kleine Kugel. Alles stimmt, aber unhandlich.' },
      { symbol: '🗺️', titel: 'Karte', text: 'Flaches Bild von oben. Handlich, aber etwas verzerrt.' },
      { symbol: '🎨', titel: 'Farben der Karte', text: 'Grün = tief · Gelb/Braun = hoch · Blau = Wasser' },
      { symbol: '🔑', titel: 'Legende', text: 'Sie erklärt alle Zeichen auf der Karte.' },
      { symbol: '📖', titel: 'Atlas-Register', text: 'Ort suchen → Seite und Planquadrat, z. B. 34 C4' }
    ],
    uebungen: [
      { frage: 'Was ist ein Globus?', optionen: ['Ein Modell der Erde als Kugel', 'Ein Buch mit Karten', 'Ein Kompass', 'Ein Stadtplan'], richtig: 0, erklaerung: 'Globus kommt von lateinisch globus = Kugel.' },
      { frage: 'Was erklärt die Legende?', optionen: ['Die Zeichen und Farben der Karte', 'Die Geschichte des Landes', 'Das Wetter', 'Die Seitenzahl'], richtig: 0, erklaerung: 'Ohne Legende versteht man die Karte nicht.' },
      { frage: 'Was bedeutet Braun auf einer physischen Karte?', optionen: ['Hohes Gebirge', 'Meer', 'Tiefland', 'Stadt'], richtig: 0, erklaerung: 'Je höher, desto dunkler braun.' },
      { frage: 'Wo findest du im Atlas einen bestimmten Ort?', optionen: ['Im Register', 'Auf dem Umschlag', 'In der Legende', 'Im Vorwort'], richtig: 0, erklaerung: 'Das Register ist alphabetisch geordnet.' },
      { frage: 'Warum sind Weltkarten am Rand verzerrt?', optionen: ['Eine Kugel lässt sich nicht ohne Verzerrung flach machen', 'Weil der Drucker schlecht ist', 'Weil die Länder wachsen', 'Gar nicht'], richtig: 0, erklaerung: 'Denk an eine Orangenschale, die man flach drücken will.' }
    ]
  };

  K['erd5-02'] = {
    bild: svg('<rect width="400" height="200" fill="#f1f8e9"/><circle cx="110" cy="100" r="70" fill="#fff" stroke="#33691e" stroke-width="4"/><polygon points="110,35 120,100 110,90 100,100" fill="#e53935"/><polygon points="110,165 120,100 110,110 100,100" fill="#90a4ae"/><g font-size="16" font-weight="700" text-anchor="middle" fill="#1b5e20"><text x="110" y="28">N</text><text x="110" y="190">S</text><text x="192" y="106">O</text><text x="28" y="106">W</text></g><rect x="230" y="70" width="150" height="10" fill="#fff" stroke="#333"/><rect x="230" y="70" width="37.5" height="10" fill="#333"/><rect x="305" y="70" width="37.5" height="10" fill="#333"/><text x="230" y="98" font-size="11">0</text><text x="370" y="98" font-size="11">2 km</text><text x="305" y="130" font-size="13" text-anchor="middle">Maßstab 1 : 25 000</text><text x="305" y="150" font-size="11" text-anchor="middle">1 cm auf der Karte = 250 m</text>'),
    bildtext: 'Kompassrose mit den vier Himmelsrichtungen und eine Maßstabsleiste.',
    einfach: '<p>Es gibt vier <b>Himmelsrichtungen</b>: Norden, Osten, Süden und Westen. Merkspruch im Uhrzeigersinn: <b>N</b>ie <b>O</b>hne <b>S</b>eife <b>W</b>aschen.</p><p>Der <b>Maßstab</b> sagt, wie stark eine Karte verkleinert ist. 1 : 100 000 heißt: 1 cm auf der Karte sind 100 000 cm (= 1 km) in Wirklichkeit.</p>',
    merke: 'Nie Ohne Seife Waschen: Norden, Osten, Süden, Westen. Die Sonne geht im Osten auf und im Westen unter.',
    ausfuehrlich: '<h3>Himmelsrichtungen bestimmen</h3><ul><li><b>Kompass:</b> Die Nadel zeigt immer nach Norden.</li><li><b>Sonne:</b> Morgens im Osten, mittags im Süden, abends im Westen.</li><li><b>Karte:</b> Oben ist fast immer Norden.</li></ul><h3>Zwischenrichtungen</h3><p>Zwischen Norden und Osten liegt <b>Nordosten (NO)</b>. Ebenso gibt es Südosten (SO), Südwesten (SW) und Nordwesten (NW).</p><h3>Den Maßstab verstehen</h3><table><tr><th>Maßstab</th><th>1 cm auf der Karte sind …</th><th>Beispiel</th></tr><tr><td>1 : 10 000</td><td>100 m</td><td>Stadtplan</td></tr><tr><td>1 : 100 000</td><td>1 km</td><td>Wanderkarte, Landkreis</td></tr><tr><td>1 : 1 000 000</td><td>10 km</td><td>Deutschland-Karte</td></tr><tr><td>1 : 50 000 000</td><td>500 km</td><td>Weltkarte</td></tr></table><h3>So rechnest du Entfernungen</h3><p>Miss die Strecke auf der Karte mit dem Lineal. Beispiel: 4 cm bei 1 : 100 000. Dann ist die echte Strecke 4 × 1 km = <b>4 km</b>.</p><p>Tipp: Bei 1 : 100 000 einfach die letzten fünf Nullen streichen, dann hast du Kilometer.</p>',
    folien: [
      { symbol: '🧭', titel: 'Vier Himmelsrichtungen', text: 'Nie Ohne Seife Waschen<br>Norden · Osten · Süden · Westen' },
      { symbol: '🌞', titel: 'Die Sonne zeigt den Weg', text: 'Osten: Aufgang · Süden: Mittag · Westen: Untergang' },
      { symbol: '↗️', titel: 'Zwischenrichtungen', text: 'NO · SO · SW · NW' },
      { symbol: '📐', titel: 'Maßstab', text: '1 : 100 000 heißt: 1 cm = 1 km' },
      { symbol: '🧮', titel: 'Rechnen', text: '4 cm × 1 km = 4 km in echt' }
    ],
    uebungen: [
      { frage: 'Wo geht die Sonne auf?', optionen: ['Im Osten', 'Im Westen', 'Im Norden', 'Im Süden'], richtig: 0, erklaerung: 'Morgens steht die Sonne im Osten.' },
      { frage: 'Welche Richtung liegt zwischen Süden und Westen?', optionen: ['Südwesten', 'Nordosten', 'Südosten', 'Nordwesten'], richtig: 0, erklaerung: 'Süd + West = Südwest.' },
      { frage: 'Maßstab 1 : 100 000. Auf der Karte sind es 3 cm. Wie weit ist es wirklich?', optionen: ['3 km', '30 km', '300 m', '3 m'], richtig: 0, erklaerung: '1 cm = 1 km, also 3 cm = 3 km.' },
      { frage: 'Wohin zeigt die Kompassnadel?', optionen: ['Nach Norden', 'Nach Süden', 'Nach oben', 'Zur Sonne'], richtig: 0, erklaerung: 'Die Nadel richtet sich am Magnetfeld der Erde aus.' },
      { frage: 'Welcher Maßstab passt zu einem Stadtplan?', optionen: ['1 : 10 000', '1 : 50 000 000', '1 : 1 000 000', '1 : 1'], richtig: 0, erklaerung: 'Ein Stadtplan zeigt viele Einzelheiten, also wenig verkleinert.' }
    ]
  };

  K['erd5-03'] = {
    bild: svg('<rect width="400" height="200" fill="#e8f5e9"/><path d="M170 20 l40 10 l20 30 l-5 30 l15 25 l-10 40 l-30 25 l-35 -5 l-10 -30 l-25 -15 l10 -40 l-10 -30 z" fill="#c8e6c9" stroke="#2e7d32" stroke-width="3"/><circle cx="210" cy="60" r="5" fill="#e53935"/><text x="218" y="58" font-size="11">Berlin</text><circle cx="160" cy="95" r="4" fill="#1e88e5"/><text x="80" y="98" font-size="11">Gelsenkirchen</text><circle cx="200" cy="150" r="4" fill="#333"/><text x="208" y="153" font-size="11">München</text><circle cx="185" cy="35" r="4" fill="#333"/><text x="125" y="32" font-size="11">Hamburg</text><text x="320" y="100" font-size="30">🇩🇪</text><text x="320" y="130" font-size="12" text-anchor="middle">16 Bundesländer</text>'),
    bildtext: 'Deutschland mit der Hauptstadt Berlin und einigen großen Städten.',
    einfach: '<p>Deutschland liegt mitten in Europa. Die Hauptstadt ist <b>Berlin</b>. Deutschland hat <b>16 Bundesländer</b>, zum Beispiel Nordrhein-Westfalen, Bayern und Niedersachsen.</p><p>Im Norden liegen Nordsee und Ostsee, im Süden die Alpen. Etwa 84 Millionen Menschen leben hier.</p>',
    merke: 'Deutschland: Hauptstadt Berlin, 16 Bundesländer, 9 Nachbarländer, Meer im Norden, Alpen im Süden.',
    ausfuehrlich: '<h3>Die 16 Bundesländer und ihre Hauptstädte</h3><table><tr><th>Bundesland</th><th>Hauptstadt</th></tr><tr><td>Baden-Württemberg</td><td>Stuttgart</td></tr><tr><td>Bayern</td><td>München</td></tr><tr><td>Berlin</td><td>Berlin</td></tr><tr><td>Brandenburg</td><td>Potsdam</td></tr><tr><td>Bremen</td><td>Bremen</td></tr><tr><td>Hamburg</td><td>Hamburg</td></tr><tr><td>Hessen</td><td>Wiesbaden</td></tr><tr><td>Mecklenburg-Vorpommern</td><td>Schwerin</td></tr><tr><td>Niedersachsen</td><td>Hannover</td></tr><tr><td>Nordrhein-Westfalen</td><td>Düsseldorf</td></tr><tr><td>Rheinland-Pfalz</td><td>Mainz</td></tr><tr><td>Saarland</td><td>Saarbrücken</td></tr><tr><td>Sachsen</td><td>Dresden</td></tr><tr><td>Sachsen-Anhalt</td><td>Magdeburg</td></tr><tr><td>Schleswig-Holstein</td><td>Kiel</td></tr><tr><td>Thüringen</td><td>Erfurt</td></tr></table><h3>Die 9 Nachbarländer</h3><p>Dänemark, Polen, Tschechien, Österreich, Schweiz, Frankreich, Luxemburg, Belgien, Niederlande.</p><h3>Große Flüsse</h3><p>Rhein, Elbe, Donau, Weser, Main und Oder. Der Rhein fließt auch durch Nordrhein-Westfalen.</p><h3>Das Ruhrgebiet</h3><p>In Nordrhein-Westfalen liegt das Ruhrgebiet mit Städten wie Dortmund, Essen, Bochum und Gelsenkirchen. Früher wurde hier viel Kohle abgebaut. Heute gibt es dort Universitäten, Firmen und viel Grün.</p>',
    folien: [
      { symbol: '🇩🇪', titel: 'Deutschland', text: 'Mitten in Europa · Hauptstadt Berlin · etwa 84 Millionen Menschen' },
      { symbol: '🗂️', titel: '16 Bundesländer', text: 'Zum Beispiel NRW mit Düsseldorf, Bayern mit München.' },
      { symbol: '🤝', titel: '9 Nachbarn', text: 'DK · PL · CZ · AT · CH · FR · LU · BE · NL' },
      { symbol: '🏞️', titel: 'Flüsse', text: 'Rhein · Elbe · Donau · Weser · Main · Oder' },
      { symbol: '⛏️', titel: 'Ruhrgebiet', text: 'Früher Kohle und Stahl, heute Wissen, Firmen und Parks.' }
    ],
    uebungen: [
      { frage: 'Was ist die Hauptstadt von Deutschland?', optionen: ['Berlin', 'München', 'Hamburg', 'Bonn'], richtig: 0, erklaerung: 'Berlin ist Hauptstadt und auch ein Bundesland.' },
      { frage: 'Wie viele Bundesländer hat Deutschland?', optionen: ['16', '9', '12', '20'], richtig: 0, erklaerung: 'Es sind 16 Bundesländer.' },
      { frage: 'Was ist die Hauptstadt von Nordrhein-Westfalen?', optionen: ['Düsseldorf', 'Köln', 'Dortmund', 'Gelsenkirchen'], richtig: 0, erklaerung: 'Köln ist die größte Stadt, aber Düsseldorf die Hauptstadt.' },
      { frage: 'Wie viele Nachbarländer hat Deutschland?', optionen: ['9', '4', '12', '16'], richtig: 0, erklaerung: 'So viele wie kaum ein anderes Land in Europa.' },
      { frage: 'Was liegt im Süden Deutschlands?', optionen: ['Die Alpen', 'Die Nordsee', 'Die Ostsee', 'Die Wüste'], richtig: 0, erklaerung: 'Die Zugspitze in den Alpen ist der höchste Berg Deutschlands.' }
    ]
  };

  K['erd5-04'] = {
    bild: svg('<rect width="400" height="200" fill="#e3f2fd"/><rect x="0" y="40" width="400" height="20" fill="#64b5f6"/><text x="200" y="55" font-size="11" text-anchor="middle" fill="#fff">Nord- und Ostsee</text><rect x="0" y="60" width="400" height="40" fill="#a5d6a7"/><text x="200" y="85" font-size="11" text-anchor="middle">Norddeutsches Tiefland</text><path d="M0 140 q50 -40 100 -10 q50 -40 100 -10 q50 -40 100 -10 q50 -40 100 -10 v-30 h-400z" fill="#dce775"/><text x="200" y="118" font-size="11" text-anchor="middle">Mittelgebirge</text><rect x="0" y="140" width="400" height="20" fill="#ffe082"/><text x="200" y="154" font-size="11" text-anchor="middle">Alpenvorland</text><path d="M0 200 l40 -40 l30 25 l40 -40 l40 40 l35 -30 l40 35 l45 -45 l40 40 l40 -30 l50 45z" fill="#a1887f"/><polygon points="155,145 165,160 145,160" fill="#fff"/><text x="200" y="195" font-size="11" text-anchor="middle" fill="#fff">Alpen</text>'),
    bildtext: 'Von Norden nach Süden: Küste, Tiefland, Mittelgebirge, Alpenvorland, Alpen.',
    einfach: '<p>Deutschland hat fünf große Landschaften. Von Norden nach Süden sind das: <b>Küste</b>, <b>Norddeutsches Tiefland</b>, <b>Mittelgebirge</b>, <b>Alpenvorland</b> und <b>Alpen</b>.</p><p>Im Norden ist es flach, nach Süden wird es immer höher.</p>',
    merke: 'Von Nord nach Süd: Küste – Tiefland – Mittelgebirge – Alpenvorland – Alpen. Es wird immer höher.',
    ausfuehrlich: '<h3>Küste</h3><p>An der <b>Nordsee</b> gibt es Ebbe und Flut und das <b>Wattenmeer</b>, ein Nationalpark und UNESCO-Welterbe. Die <b>Ostsee</b> hat kaum Ebbe und Flut, dafür Steilküsten wie auf Rügen.</p><h3>Norddeutsches Tiefland</h3><p>Flaches Land unter 200 Meter Höhe. Viele Felder, Wiesen und Seen. Große Städte: Hamburg, Berlin, Hannover.</p><h3>Mittelgebirge</h3><p>Berge zwischen 200 und 1500 Meter, oft mit Wald bedeckt: Harz, Sauerland, Eifel, Schwarzwald, Bayerischer Wald. Das Sauerland liegt in Nordrhein-Westfalen.</p><h3>Alpenvorland</h3><p>Hügeliges Land mit vielen Seen, die nach der Eiszeit entstanden sind, zum Beispiel Chiemsee und Bodensee.</p><h3>Alpen</h3><p>Das Hochgebirge mit Gipfeln über 2000 Meter. Höchster Berg Deutschlands: die <b>Zugspitze</b> mit 2962 Meter.</p><h3>Höhen auf der Karte</h3><table><tr><th>Farbe</th><th>Höhe</th></tr><tr><td>Grün</td><td>0–200 m (Tiefland)</td></tr><tr><td>Gelb bis Hellbraun</td><td>200–1500 m (Mittelgebirge)</td></tr><tr><td>Dunkelbraun</td><td>über 1500 m (Hochgebirge)</td></tr></table>',
    folien: [
      { symbol: '🌊', titel: 'Küste', text: 'Nordsee mit Watt, Ebbe und Flut. Ostsee mit Steilküsten.' },
      { symbol: '🌾', titel: 'Tiefland', text: 'Flach, unter 200 m. Felder, Seen, große Städte.' },
      { symbol: '🌲', titel: 'Mittelgebirge', text: 'Harz, Sauerland, Eifel, Schwarzwald: viel Wald.' },
      { symbol: '🏞️', titel: 'Alpenvorland', text: 'Hügel und Seen aus der Eiszeit.' },
      { symbol: '🏔️', titel: 'Alpen', text: 'Hochgebirge. Zugspitze: 2962 m.' }
    ],
    uebungen: [
      { frage: 'Wie heißt der höchste Berg Deutschlands?', optionen: ['Zugspitze', 'Brocken', 'Feldberg', 'Kahler Asten'], richtig: 0, erklaerung: 'Die Zugspitze ist 2962 m hoch.' },
      { frage: 'Welche Landschaft liegt ganz im Norden?', optionen: ['Küste', 'Alpen', 'Mittelgebirge', 'Alpenvorland'], richtig: 0, erklaerung: 'Im Norden liegen Nord- und Ostsee.' },
      { frage: 'Wo gibt es das Wattenmeer?', optionen: ['An der Nordsee', 'In den Alpen', 'Am Bodensee', 'Im Sauerland'], richtig: 0, erklaerung: 'Bei Ebbe liegt dort der Meeresboden frei.' },
      { frage: 'Zu welcher Landschaft gehört das Sauerland?', optionen: ['Mittelgebirge', 'Tiefland', 'Alpen', 'Küste'], richtig: 0, erklaerung: 'Das Sauerland ist ein Mittelgebirge in NRW.' },
      { frage: 'Welche Farbe hat Tiefland auf der Karte?', optionen: ['Grün', 'Dunkelbraun', 'Weiß', 'Rot'], richtig: 0, erklaerung: 'Grün steht für niedrige Höhen.' }
    ]
  };

  K['erd5-05'] = {
    bild: svg('<rect width="400" height="200" fill="#4fc3f7"/><path d="M40 40 q30 -15 60 5 q10 25 -20 45 q-20 5 -40 -10z" fill="#aed581"/><text x="65" y="60" font-size="9" text-anchor="middle">N-Amerika</text><path d="M85 110 q20 -5 25 20 q-5 35 -20 45 q-15 -30 -5 -65z" fill="#aed581"/><text x="98" y="140" font-size="9" text-anchor="middle">S-Amerika</text><path d="M185 40 q20 -5 30 10 l-10 15 q-15 0 -20 -25z" fill="#aed581"/><text x="200" y="35" font-size="9" text-anchor="middle">Europa</text><path d="M180 75 q30 -5 40 25 q-5 45 -25 50 q-20 -30 -15 -75z" fill="#aed581"/><text x="200" y="110" font-size="9" text-anchor="middle">Afrika</text><path d="M225 35 q60 -15 110 10 q5 35 -40 50 q-40 0 -70 -60z" fill="#aed581"/><text x="280" y="60" font-size="9" text-anchor="middle">Asien</text><path d="M310 130 q30 -10 45 10 q-5 20 -40 15z" fill="#aed581"/><text x="333" y="143" font-size="9" text-anchor="middle">Australien</text><rect x="60" y="182" width="280" height="14" fill="#fff"/><text x="200" y="193" font-size="9" text-anchor="middle">Antarktis</text>'),
    bildtext: 'Die sieben Kontinente und die großen Ozeane.',
    einfach: '<p>Die Erde ist zu etwa zwei Dritteln mit Wasser bedeckt. Die großen Landmassen heißen <b>Kontinente</b>. Es gibt sieben: Afrika, Antarktis, Asien, Australien, Europa, Nordamerika und Südamerika.</p><p>Die großen Meere heißen <b>Ozeane</b>: Pazifik, Atlantik, Indischer Ozean, Arktischer und Südlicher Ozean.</p>',
    merke: '7 Kontinente, 5 Ozeane. Größter Kontinent: Asien. Größter Ozean: Pazifik. Wir leben in Europa.',
    ausfuehrlich: '<h3>Die Kontinente nach Größe</h3><table><tr><th>Platz</th><th>Kontinent</th><th>Besonderheit</th></tr><tr><td>1</td><td>Asien</td><td>Die meisten Menschen, höchster Berg (Mount Everest)</td></tr><tr><td>2</td><td>Afrika</td><td>Längster Fluss (Nil), größte heiße Wüste (Sahara)</td></tr><tr><td>3</td><td>Nordamerika</td><td>Große Seen, Rocky Mountains</td></tr><tr><td>4</td><td>Südamerika</td><td>Amazonas-Regenwald, Anden</td></tr><tr><td>5</td><td>Antarktis</td><td>Fast ganz mit Eis bedeckt, kälteste Region</td></tr><tr><td>6</td><td>Europa</td><td>Viele kleine Länder, auch Deutschland</td></tr><tr><td>7</td><td>Australien</td><td>Kängurus, Koalas, großes Korallenriff</td></tr></table><h3>Die Ozeane</h3><ul><li><b>Pazifik:</b> der größte und tiefste (Marianengraben, fast 11 km tief).</li><li><b>Atlantik:</b> zwischen Amerika und Europa/Afrika.</li><li><b>Indischer Ozean:</b> zwischen Afrika, Asien und Australien.</li><li><b>Arktischer Ozean:</b> rund um den Nordpol.</li><li><b>Südlicher Ozean:</b> rund um die Antarktis.</li></ul><h3>Äquator und Pole</h3><p>Der <b>Äquator</b> ist eine gedachte Linie rund um die Mitte der Erde. Er teilt sie in Nord- und Südhalbkugel. Ganz oben liegt der Nordpol, ganz unten der Südpol.</p>',
    folien: [
      { symbol: '🌍', titel: 'Viel Wasser', text: 'Etwa zwei Drittel der Erde sind Wasser.' },
      { symbol: '7️⃣', titel: '7 Kontinente', text: 'Asien · Afrika · Nordamerika · Südamerika · Antarktis · Europa · Australien' },
      { symbol: '🌊', titel: '5 Ozeane', text: 'Pazifik · Atlantik · Indischer · Arktischer · Südlicher Ozean' },
      { symbol: '🏆', titel: 'Rekorde', text: 'Größter Kontinent: Asien. Größter Ozean: Pazifik.' },
      { symbol: '〰️', titel: 'Äquator', text: 'Teilt die Erde in Nord- und Südhalbkugel.' }
    ],
    uebungen: [
      { frage: 'Wie viele Kontinente gibt es?', optionen: ['7', '5', '9', '12'], richtig: 0, erklaerung: 'Sieben Kontinente.' },
      { frage: 'Welcher Kontinent ist der größte?', optionen: ['Asien', 'Afrika', 'Europa', 'Australien'], richtig: 0, erklaerung: 'In Asien leben auch die meisten Menschen.' },
      { frage: 'Welcher Ozean ist der größte?', optionen: ['Pazifik', 'Atlantik', 'Indischer Ozean', 'Arktischer Ozean'], richtig: 0, erklaerung: 'Der Pazifik ist größer als alle Kontinente zusammen.' },
      { frage: 'Auf welchem Kontinent liegt Deutschland?', optionen: ['Europa', 'Asien', 'Afrika', 'Nordamerika'], richtig: 0, erklaerung: 'Deutschland liegt in Mitteleuropa.' },
      { frage: 'Welcher Kontinent ist fast ganz mit Eis bedeckt?', optionen: ['Antarktis', 'Australien', 'Südamerika', 'Europa'], richtig: 0, erklaerung: 'Die Antarktis liegt am Südpol.' }
    ]
  };

  K['erd5-06'] = {
    bild: svg('<rect width="400" height="200" fill="#e1f5fe"/><circle cx="70" cy="60" r="28" fill="#ffd54f"/><ellipse cx="200" cy="55" rx="55" ry="22" fill="#fff"/><ellipse cx="170" cy="62" rx="30" ry="18" fill="#fff"/><ellipse cx="300" cy="65" rx="50" ry="22" fill="#90a4ae"/><g stroke="#1e88e5" stroke-width="3"><line x1="280" y1="95" x2="275" y2="115"/><line x1="300" y1="95" x2="295" y2="115"/><line x1="320" y1="95" x2="315" y2="115"/></g><rect x="60" y="120" width="10" height="60" fill="#78909c"/><circle cx="65" cy="120" r="6" fill="#e53935"/><path d="M200 180 v-50 l25 10 l-25 10" fill="#ef5350" stroke="#555"/><text x="65" y="196" font-size="11" text-anchor="middle">Thermometer</text><text x="215" y="196" font-size="11" text-anchor="middle">Windfahne</text><text x="300" y="150" font-size="11" text-anchor="middle">Niederschlag</text>'),
    bildtext: 'Wetter: Sonne, Wolken, Regen, Wind und Temperatur.',
    einfach: '<p><b>Wetter</b> ist, wie es draußen gerade ist: sonnig, regnerisch, windig, warm oder kalt. Es ändert sich oft, manchmal sogar stündlich.</p><p><b>Klima</b> ist das durchschnittliche Wetter an einem Ort über viele Jahre. In der Wüste ist das Klima heiß und trocken, bei uns gemäßigt.</p>',
    merke: 'Wetter = jetzt, kurz. Klima = Durchschnitt über mindestens 30 Jahre.',
    ausfuehrlich: '<h3>Die Wetterelemente</h3><table><tr><th>Element</th><th>Messgerät</th><th>Einheit</th></tr><tr><td>Temperatur</td><td>Thermometer</td><td>°C</td></tr><tr><td>Niederschlag (Regen, Schnee)</td><td>Regenmesser</td><td>mm (Liter pro m²)</td></tr><tr><td>Wind</td><td>Windfahne, Windmesser</td><td>Richtung, km/h</td></tr><tr><td>Luftdruck</td><td>Barometer</td><td>Hektopascal (hPa)</td></tr><tr><td>Bewölkung</td><td>Beobachten</td><td>Achtel</td></tr></table><h3>Der Wasserkreislauf</h3><p>Die Sonne erwärmt das Meer, Wasser verdunstet. Der Dampf steigt auf, kühlt ab und bildet Wolken. Daraus fällt Regen oder Schnee. Das Wasser fließt über Flüsse zurück ins Meer.</p><h3>Das Klimadiagramm</h3><p>Ein Klimadiagramm zeigt für jeden Monat die Durchschnittstemperatur (rote Linie) und den Niederschlag (blaue Säulen). So sieht man auf einen Blick, wann es warm, kalt, nass oder trocken ist.</p><h3>Unser Klima</h3><p>Deutschland liegt in der <b>gemäßigten Zone</b>: vier Jahreszeiten, Regen das ganze Jahr, nicht zu heiß und nicht zu kalt.</p><h3>Wetterbericht verstehen</h3><p>Wetterdienste messen an vielen Stationen, mit Satelliten und Wetterballons. Computer berechnen daraus die Vorhersage.</p>',
    folien: [
      { symbol: '🌦️', titel: 'Wetter', text: 'Wie es jetzt gerade draußen ist. Ändert sich oft.' },
      { symbol: '📊', titel: 'Klima', text: 'Durchschnitt des Wetters über mindestens 30 Jahre.' },
      { symbol: '🌡️', titel: 'Wetterelemente', text: 'Temperatur · Niederschlag · Wind · Luftdruck · Bewölkung' },
      { symbol: '🔄', titel: 'Wasserkreislauf', text: 'Verdunsten → Wolken → Regen → Fluss → Meer' },
      { symbol: '🍂', titel: 'Unser Klima', text: 'Gemäßigt, vier Jahreszeiten, Regen das ganze Jahr.' }
    ],
    uebungen: [
      { frage: 'Was ist der Unterschied zwischen Wetter und Klima?', optionen: ['Wetter ist jetzt, Klima ist der Durchschnitt über viele Jahre', 'Es gibt keinen', 'Klima ist nur im Winter', 'Wetter gibt es nur in der Stadt'], richtig: 0, erklaerung: 'Klima beschreibt das Wetter über mindestens 30 Jahre.' },
      { frage: 'Womit misst man die Regenmenge?', optionen: ['Regenmesser', 'Thermometer', 'Kompass', 'Windfahne'], richtig: 0, erklaerung: 'Er fängt den Regen in einem Gefäß auf.' },
      { frage: 'Wie entstehen Wolken?', optionen: ['Wasserdampf steigt auf und kühlt ab', 'Aus Rauch von Fabriken', 'Aus Sand', 'Aus Schnee am Boden'], richtig: 0, erklaerung: 'Abgekühlter Dampf wird zu winzigen Tröpfchen.' },
      { frage: 'Was zeigen die blauen Säulen im Klimadiagramm?', optionen: ['Niederschlag', 'Temperatur', 'Wind', 'Sonnenstunden'], richtig: 0, erklaerung: 'Rote Linie = Temperatur, blaue Säulen = Niederschlag.' },
      { frage: 'In welcher Klimazone liegt Deutschland?', optionen: ['Gemäßigte Zone', 'Tropen', 'Polarzone', 'Wüstenzone'], richtig: 0, erklaerung: 'Mit vier Jahreszeiten und Regen über das ganze Jahr.' }
    ]
  };
})();
