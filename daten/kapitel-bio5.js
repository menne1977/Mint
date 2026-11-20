// Biologie Klasse 5 – Kapitelinhalte (eigene Texte, eigene Zeichnungen)
(function () {
  var K = window.KAPITEL = window.KAPITEL || {};
  function svg(inner) { return '<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg" role="img">' + inner + '</svg>'; }

  K['bio5-01'] = {
    bild: svg('<rect width="400" height="200" fill="#e8f5e9"/><circle cx="60" cy="50" r="28" fill="#ffd54f"/><rect x="190" y="110" width="12" height="60" fill="#795548"/><circle cx="196" cy="95" r="38" fill="#43a047"/><ellipse cx="300" cy="150" rx="36" ry="20" fill="#bcaaa4"/><circle cx="330" cy="138" r="12" fill="#bcaaa4"/><rect x="0" y="170" width="400" height="30" fill="#8bc34a"/><text x="200" y="195" font-size="12" text-anchor="middle" fill="#1b5e20">Sonne – Pflanze – Tier – Mensch: alles gehört zur Biologie</text>'),
    bildtext: 'Biologie erforscht alles, was lebt.',
    einfach: '<p>Biologie ist die Lehre vom Leben. Du lernst, wie Tiere, Pflanzen und Menschen aufgebaut sind und wie sie leben.</p><p>Was lebt, hat sieben Merkmale: Es wächst, es bewegt sich, es nimmt Nahrung auf, es atmet, es scheidet etwas aus, es reagiert auf seine Umwelt und es pflanzt sich fort.</p>',
    merke: 'Lebewesen wachsen, bewegen sich, ernähren sich, atmen, scheiden aus, reagieren auf Reize und pflanzen sich fort.',
    ausfuehrlich: '<h3>Wie forschen Biologen?</h3><p>Biologen beobachten genau, stellen eine Vermutung auf (Hypothese) und prüfen sie mit einem Versuch. Danach schreiben sie auf, was herauskam.</p><h3>Die Merkmale des Lebens genauer</h3><ul><li><b>Stoffwechsel:</b> Lebewesen nehmen Stoffe auf, bauen sie um und geben Abfallstoffe ab.</li><li><b>Wachstum und Entwicklung:</b> Aus einem Samen wird eine Pflanze, aus einem Ei ein Küken.</li><li><b>Reizbarkeit:</b> Eine Pflanze wächst zum Licht, ein Hund spitzt die Ohren bei einem Geräusch.</li><li><b>Fortpflanzung:</b> Lebewesen bekommen Nachkommen.</li></ul><h3>Was ist kein Lebewesen?</h3><p>Ein Auto bewegt sich und braucht Treibstoff, es wächst aber nicht und bekommt keine Jungen. Ein Stein ist leblos, ein Feuer ebenfalls, auch wenn es „wächst“ und „atmet“.</p><h3>Die Teilgebiete</h3><p>Zoologie (Tiere), Botanik (Pflanzen), Humanbiologie (Mensch), Ökologie (Lebewesen und Umwelt).</p>',
    folien: [
      { symbol: '🌍', titel: 'Was ist Biologie?', text: 'Die Wissenschaft vom Leben: Tiere, Pflanzen, Menschen und Pilze.' },
      { symbol: '✅', titel: 'Merkmale des Lebens', text: 'Wachsen · Bewegen · Ernähren · Atmen · Ausscheiden · Reagieren · Fortpflanzen' },
      { symbol: '🔬', titel: 'Wie forscht man?', text: 'Beobachten → Vermuten → Versuch machen → Ergebnis aufschreiben.' },
      { symbol: '🚗', titel: 'Auto oder Lebewesen?', text: 'Ein Auto bewegt sich, wächst aber nicht und hat keine Jungen. Es lebt nicht.' }
    ],
    uebungen: [
      { frage: 'Was erforscht die Biologie?', optionen: ['Das Leben', 'Die Sterne', 'Die Stoffe', 'Die Zahlen'], richtig: 0, erklaerung: 'Bio heißt Leben, logie heißt Lehre.' },
      { frage: 'Welches ist KEIN Merkmal von Lebewesen?', optionen: ['Wachstum', 'Fortpflanzung', 'Gehört einem Besitzer', 'Atmung'], richtig: 2, erklaerung: 'Einem Besitzer zu gehören ist kein Lebensmerkmal.' },
      { frage: 'Eine Blume dreht sich zum Licht. Welches Merkmal ist das?', optionen: ['Fortpflanzung', 'Reizbarkeit', 'Ausscheidung', 'Atmung'], richtig: 1, erklaerung: 'Das Licht ist der Reiz, die Blume reagiert darauf.' },
      { frage: 'Wie heißt die Wissenschaft von den Tieren?', optionen: ['Botanik', 'Zoologie', 'Ökologie', 'Geologie'], richtig: 1, erklaerung: 'Zoologie kommt von zoon = Tier.' },
      { frage: 'Was kommt zuerst beim Forschen?', optionen: ['Ergebnis', 'Beobachten', 'Zeugnis', 'Aufräumen'], richtig: 1, erklaerung: 'Erst genau hinsehen, dann Vermutungen aufstellen.' }
    ]
  };

  K['bio5-02'] = {
    bild: svg('<rect width="400" height="200" fill="#eef3fb"/><rect x="170" y="150" width="120" height="14" rx="4" fill="#546e7a"/><rect x="225" y="60" width="14" height="95" fill="#78909c"/><rect x="190" y="40" width="60" height="22" rx="6" fill="#455a64" transform="rotate(-20 220 50)"/><rect x="180" y="120" width="70" height="6" fill="#b0bec5"/><circle cx="215" cy="123" r="3" fill="#fff"/><text x="60" y="60" font-size="13" fill="#263238">Okular</text><text x="60" y="110" font-size="13" fill="#263238">Objektiv</text><text x="60" y="160" font-size="13" fill="#263238">Objekttisch</text>'),
    bildtext: 'Ein Mikroskop vergrößert Dinge, die man mit bloßem Auge nicht sieht.',
    einfach: '<p>Mit einer Lupe sieht man kleine Dinge größer, zum Beispiel ein Insektenbein oder die Adern eines Blattes. Ein Mikroskop vergrößert noch viel stärker.</p><p>Beim Mikroskopieren legst du das Objekt auf den Objekttisch, schaust durch das Okular und stellst mit dem Rad scharf. Du fängst immer mit der kleinsten Vergrößerung an.</p>',
    merke: 'Gesamtvergrößerung = Okularvergrößerung × Objektivvergrößerung.',
    ausfuehrlich: '<h3>Die Lupe</h3><p>Eine Lupe ist eine Sammellinse. Je näher du das Objekt heranführst, desto schärfer und größer erscheint es, bis zu einem bestimmten Abstand.</p><h3>Das Lichtmikroskop</h3><ul><li><b>Okular:</b> die Linse, durch die du schaust.</li><li><b>Objektiv:</b> die Linse nahe am Objekt, meist mehrere auf einem Revolver.</li><li><b>Objekttisch:</b> hier liegt der Objektträger mit dem Präparat.</li><li><b>Trieb:</b> Rad zum Scharfstellen.</li><li><b>Spiegel oder Lampe:</b> bringt Licht von unten durch das Objekt.</li></ul><h3>Rechenbeispiel</h3><p>Okular 10-fach, Objektiv 40-fach: 10 × 40 = <b>400-fache</b> Vergrößerung.</p><h3>Ein Präparat herstellen</h3><ol><li>Ein dünnes Stück Material auf den Objektträger legen.</li><li>Einen Tropfen Wasser dazugeben.</li><li>Ein Deckglas schräg auflegen, damit keine Luftblasen entstehen.</li><li>Mit kleinster Vergrößerung beginnen und vorsichtig scharfstellen.</li></ol>',
    folien: [
      { symbol: '🔎', titel: 'Die Lupe', text: 'Eine Sammellinse. Sie zeigt kleine Dinge größer.' },
      { symbol: '🔬', titel: 'Teile des Mikroskops', text: 'Okular · Objektiv · Objekttisch · Trieb · Lampe' },
      { symbol: '✖️', titel: 'Vergrößerung', text: 'Okular × Objektiv.<br>Beispiel: 10 × 40 = 400-fach' },
      { symbol: '🧪', titel: 'Präparat herstellen', text: 'Objekt – Tropfen Wasser – Deckglas schräg auflegen – kleinste Vergrößerung zuerst.' }
    ],
    uebungen: [
      { frage: 'Okular 10-fach, Objektiv 20-fach. Wie stark wird vergrößert?', optionen: ['30-fach', '200-fach', '2-fach', '120-fach'], richtig: 1, erklaerung: '10 × 20 = 200.' },
      { frage: 'Mit welcher Vergrößerung fängt man an?', optionen: ['Mit der größten', 'Mit der kleinsten', 'Egal', 'Ohne Licht'], richtig: 1, erklaerung: 'So findet man das Objekt leichter und schont das Objektiv.' },
      { frage: 'Wie heißt die Linse, durch die man schaut?', optionen: ['Objektiv', 'Okular', 'Trieb', 'Revolver'], richtig: 1, erklaerung: 'Okular = Auge.' },
      { frage: 'Wozu dient das Deckglas?', optionen: ['Schutz und flache Schicht', 'Mehr Licht', 'Zum Schreiben', 'Kühlung'], richtig: 0, erklaerung: 'Es schützt das Objektiv und macht die Schicht flach.' },
      { frage: 'Welches Teil benutzt man zum Scharfstellen?', optionen: ['Der Trieb', 'Der Objekttisch', 'Die Lampe', 'Der Fuß'], richtig: 0, erklaerung: 'Mit dem Trieb bewegt man Tisch oder Tubus.' }
    ]
  };

  K['bio5-03'] = {
    bild: svg('<rect width="400" height="200" fill="#fff3e0"/><ellipse cx="200" cy="120" rx="80" ry="38" fill="#a1887f"/><circle cx="285" cy="95" r="26" fill="#a1887f"/><polygon points="275,75 280,55 292,72" fill="#8d6e63"/><polygon points="295,72 305,55 308,78" fill="#8d6e63"/><rect x="140" y="145" width="12" height="40" fill="#8d6e63"/><rect x="170" y="148" width="12" height="38" fill="#8d6e63"/><rect x="225" y="148" width="12" height="38" fill="#8d6e63"/><rect x="250" y="145" width="12" height="40" fill="#8d6e63"/><path d="M120 110 Q95 90 105 70" stroke="#8d6e63" stroke-width="10" fill="none"/><circle cx="293" cy="92" r="3" fill="#222"/><text x="200" y="195" font-size="12" text-anchor="middle" fill="#5d4037">Fell, vier Beine, Zähne, Jungtiere werden gesäugt</text>'),
    bildtext: 'Säugetiere haben ein Fell und säugen ihre Jungen.',
    einfach: '<p>Säugetiere haben ein Fell oder Haare. Ihre Babys wachsen im Bauch der Mutter und trinken danach Milch. Dazu gehören Hund, Katze, Pferd, Kuh, Maus, Elefant und auch der Mensch.</p><p>Säugetiere sind gleichwarm: Ihre Körpertemperatur bleibt immer fast gleich, egal wie kalt es draußen ist.</p>',
    merke: 'Säugetiere: Haare, gleichwarm, lebende Junge, Milch von der Mutter.',
    ausfuehrlich: '<h3>Merkmale</h3><ul><li>Körper mit Haaren oder Fell</li><li>Gleichwarm (konstante Körpertemperatur)</li><li>Lebendgebärend (Ausnahme: Schnabeltier und Ameisenigel legen Eier)</li><li>Milchdrüsen: Die Jungen werden gesäugt</li><li>Lungenatmung</li></ul><h3>Ernährungstypen und Gebiss</h3><table><tr><th>Typ</th><th>Beispiel</th><th>Gebiss</th></tr><tr><td>Fleischfresser</td><td>Katze, Hund</td><td>Große Eckzähne, scharfe Reißzähne</td></tr><tr><td>Pflanzenfresser</td><td>Pferd, Kuh</td><td>Breite Backenzähne zum Mahlen</td></tr><tr><td>Allesfresser</td><td>Mensch, Schwein</td><td>Gemischtes Gebiss</td></tr></table><h3>Lebensräume</h3><p>Säugetiere leben an Land, im Wasser (Wale, Delfine) und sogar in der Luft (Fledermäuse).</p>',
    folien: [
      { symbol: '🐕', titel: 'Säugetiere', text: 'Fell · gleichwarm · lebende Junge · Milch' },
      { symbol: '🦷', titel: 'Gebiss verrät die Nahrung', text: 'Eckzähne und Reißzähne: Fleischfresser.<br>Backenzähne: Pflanzenfresser.' },
      { symbol: '🐬', titel: 'Auch im Wasser und in der Luft', text: 'Delfine und Wale sind Säugetiere, Fledermäuse auch.' }
    ],
    uebungen: [
      { frage: 'Was haben alle Säugetiere gemeinsam?', optionen: ['Sie säugen ihre Jungen', 'Sie legen Eier', 'Sie haben Federn', 'Sie haben Flossen'], richtig: 0, erklaerung: 'Daher der Name Säugetier.' },
      { frage: 'Welches Tier ist ein Säugetier?', optionen: ['Delfin', 'Hai', 'Frosch', 'Adler'], richtig: 0, erklaerung: 'Der Delfin atmet Luft und säugt seine Jungen.' },
      { frage: 'Ein Tier mit breiten Backenzähnen ist wahrscheinlich …', optionen: ['Pflanzenfresser', 'Fleischfresser', 'Fisch', 'Vogel'], richtig: 0, erklaerung: 'Breite Zähne mahlen Pflanzennahrung.' },
      { frage: 'Gleichwarm bedeutet …', optionen: ['Die Körpertemperatur bleibt fast gleich', 'Das Tier friert nie', 'Das Tier lebt in der Wärme', 'Das Blut ist kalt'], richtig: 0, erklaerung: 'Säugetiere halten ihre Temperatur selbst konstant.' },
      { frage: 'Welches Säugetier kann fliegen?', optionen: ['Fledermaus', 'Spatz', 'Biene', 'Schmetterling'], richtig: 0, erklaerung: 'Fledermäuse sind die einzigen Säugetiere, die richtig fliegen.' }
    ]
  };

  K['bio5-04'] = {
    bild: svg('<rect width="400" height="200" fill="#f1f8e9"/><rect x="0" y="150" width="400" height="50" fill="#9ccc65"/><ellipse cx="110" cy="115" rx="45" ry="25" fill="#fff" stroke="#555"/><circle cx="150" cy="100" r="14" fill="#fff" stroke="#555"/><ellipse cx="130" cy="110" rx="8" ry="6" fill="#222"/><ellipse cx="290" cy="130" rx="40" ry="22" fill="#f8bbd0"/><circle cx="325" cy="122" r="12" fill="#f8bbd0"/><text x="110" y="185" font-size="13" text-anchor="middle">Kuh (Nutztier)</text><text x="290" y="185" font-size="13" text-anchor="middle">Schwein (Nutztier)</text>'),
    bildtext: 'Nutztiere liefern Milch, Fleisch, Eier oder Wolle.',
    einfach: '<p>Haustiere leben bei Menschen, zum Beispiel Hund, Katze, Meerschweinchen. Nutztiere liefern uns etwas: Die Kuh Milch, das Huhn Eier, das Schaf Wolle.</p><p>Menschen müssen für Tiere sorgen: Futter, Wasser, einen sauberen Platz, Bewegung und Zuwendung.</p>',
    merke: 'Wer ein Tier hält, ist für sein Wohl verantwortlich.',
    ausfuehrlich: '<h3>Von der Wildform zum Haustier</h3><p>Vor vielen tausend Jahren wurden Wildtiere gezähmt und gezielt gezüchtet. Der Hund stammt vom Wolf ab, das Hausschwein vom Wildschwein, das Hauspferd von wilden Pferden.</p><h3>Nutztiere und ihre Produkte</h3><table><tr><th>Tier</th><th>Produkt</th></tr><tr><td>Kuh</td><td>Milch, Fleisch, Leder</td></tr><tr><td>Huhn</td><td>Eier, Fleisch</td></tr><tr><td>Schaf</td><td>Wolle, Fleisch, Milch</td></tr><tr><td>Biene</td><td>Honig, Wachs, Bestäubung</td></tr></table><h3>Artgerechte Haltung</h3><ul><li>Ausreichend Platz und Bewegung</li><li>Passendes Futter und frisches Wasser</li><li>Kontakt zu Artgenossen (Meerschweinchen nie allein!)</li><li>Tierarzt bei Krankheit</li></ul>',
    folien: [
      { symbol: '🐶', titel: 'Haustiere', text: 'Hund, Katze, Hamster, Meerschweinchen: sie leben bei uns.' },
      { symbol: '🐄', titel: 'Nutztiere', text: 'Kuh: Milch · Huhn: Eier · Schaf: Wolle · Biene: Honig' },
      { symbol: '🐺', titel: 'Herkunft', text: 'Der Hund stammt vom Wolf ab. Das Schwein vom Wildschwein.' },
      { symbol: '❤️', titel: 'Verantwortung', text: 'Futter · Wasser · Platz · Bewegung · Zuwendung' }
    ],
    uebungen: [
      { frage: 'Von welchem Wildtier stammt der Hund ab?', optionen: ['Wolf', 'Fuchs', 'Bär', 'Löwe'], richtig: 0, erklaerung: 'Der Hund wurde aus dem Wolf gezüchtet.' },
      { frage: 'Was liefert das Schaf?', optionen: ['Wolle', 'Eier', 'Honig', 'Leder aus Fischen'], richtig: 0, erklaerung: 'Schafwolle wird zu Kleidung verarbeitet.' },
      { frage: 'Warum sollte man Meerschweinchen nicht allein halten?', optionen: ['Sie brauchen Artgenossen', 'Sie fressen sonst nicht', 'Sie sind gefährlich', 'Es ist erlaubt'], richtig: 0, erklaerung: 'Meerschweinchen sind Gruppentiere.' },
      { frage: 'Welches Tier liefert Eier?', optionen: ['Huhn', 'Kuh', 'Schaf', 'Schwein'], richtig: 0, erklaerung: 'Hühner legen Eier.' }
    ]
  };

  K['bio5-05'] = {
    bild: svg('<rect width="400" height="200" fill="#e3f2fd"/><ellipse cx="200" cy="110" rx="60" ry="32" fill="#8d6e63"/><circle cx="262" cy="90" r="20" fill="#8d6e63"/><polygon points="280,90 305,95 280,100" fill="#ffb300"/><circle cx="268" cy="86" r="3" fill="#222"/><path d="M180 100 Q120 40 90 70 Q130 90 170 115 Z" fill="#6d4c41"/><path d="M140 112 L90 140 L150 128 Z" fill="#5d4037"/><line x1="200" y1="142" x2="195" y2="170" stroke="#ffb300" stroke-width="4"/><line x1="215" y1="142" x2="215" y2="170" stroke="#ffb300" stroke-width="4"/><text x="200" y="195" font-size="12" text-anchor="middle">Federn · Schnabel · Flügel · Hohlknochen</text>'),
    bildtext: 'Vögel haben Federn, Flügel und einen Schnabel.',
    einfach: '<p>Vögel haben Federn und einen Schnabel. Sie legen Eier und brüten sie aus. Die meisten können fliegen. Dafür ist ihr Körper besonders leicht gebaut.</p><p>Die Knochen der Vögel sind innen hohl und trotzdem stabil. Das macht den Vogel leicht.</p>',
    merke: 'Vögel: Federn, Schnabel, Flügel, Eier, gleichwarm, leichte Knochen.',
    ausfuehrlich: '<h3>Angepasst an das Fliegen</h3><ul><li><b>Federn:</b> Konturfedern bilden die Flügelfläche, Daunenfedern wärmen.</li><li><b>Hohle Knochen:</b> weniger Gewicht.</li><li><b>Stromlinienform:</b> wenig Luftwiderstand.</li><li><b>Starke Brustmuskeln:</b> bewegen die Flügel, sie sitzen am Brustbein mit Kamm.</li><li><b>Kein Gebiss:</b> Der Schnabel ist leichter als Zähne.</li></ul><h3>Schnabelformen</h3><table><tr><th>Vogel</th><th>Schnabel</th><th>Nahrung</th></tr><tr><td>Specht</td><td>meißelförmig</td><td>Insekten im Holz</td></tr><tr><td>Greifvogel</td><td>Hakenschnabel</td><td>Fleisch</td></tr><tr><td>Ente</td><td>flach, mit Lamellen</td><td>Wasserpflanzen, Kleintiere</td></tr><tr><td>Spatz</td><td>kurz und kräftig</td><td>Samen</td></tr></table><h3>Zugvögel</h3><p>Manche Vögel fliegen im Herbst in den Süden, weil sie dort mehr Nahrung finden, zum Beispiel Schwalben und Störche.</p>',
    folien: [
      { symbol: '🐦', titel: 'Vögel', text: 'Federn · Schnabel · Flügel · Eier' },
      { symbol: '🪶', titel: 'Leicht gebaut', text: 'Hohle Knochen, kein Gebiss, stromlinienförmiger Körper.' },
      { symbol: '🦅', titel: 'Schnabelformen', text: 'Der Schnabel passt zur Nahrung: Spatz = Samen, Greifvogel = Fleisch.' },
      { symbol: '🛫', titel: 'Zugvögel', text: 'Im Herbst fliegen sie nach Süden, im Frühjahr zurück.' }
    ],
    uebungen: [
      { frage: 'Welche Besonderheit macht den Vogelkörper leicht?', optionen: ['Hohle Knochen', 'Ein Fell', 'Schuppen', 'Flossen'], richtig: 0, erklaerung: 'Hohle, stabile Knochen sparen Gewicht.' },
      { frage: 'Welchen Schnabel hat ein Greifvogel?', optionen: ['Hakenschnabel', 'Meißelschnabel', 'Löffelschnabel', 'Keinen'], richtig: 0, erklaerung: 'Damit reißt er Fleisch.' },
      { frage: 'Wie vermehren sich Vögel?', optionen: ['Sie legen Eier', 'Sie gebären lebende Junge', 'Durch Teilung', 'Durch Samen'], richtig: 0, erklaerung: 'Sie brüten die Eier aus.' },
      { frage: 'Welcher Vogel ist ein Zugvogel?', optionen: ['Schwalbe', 'Spatz', 'Haushuhn', 'Taube in der Stadt'], richtig: 0, erklaerung: 'Schwalben überwintern in Afrika.' },
      { frage: 'Wozu dienen Daunenfedern?', optionen: ['Zum Wärmen', 'Zum Fliegen', 'Zum Schwimmen', 'Zum Sehen'], richtig: 0, erklaerung: 'Sie halten Luft und isolieren.' }
    ]
  };

  K['bio5-06'] = {
    bild: svg('<rect width="400" height="200" fill="#b3e5fc"/><ellipse cx="200" cy="100" rx="90" ry="38" fill="#ffa726"/><polygon points="290,100 340,65 340,135" fill="#fb8c00"/><polygon points="180,62 215,62 205,40" fill="#fb8c00"/><polygon points="180,138 215,138 205,160" fill="#fb8c00"/><circle cx="135" cy="93" r="6" fill="#fff"/><circle cx="133" cy="93" r="3" fill="#222"/><path d="M155 80 Q165 100 155 120" stroke="#e65100" stroke-width="3" fill="none"/><text x="200" y="190" font-size="12" text-anchor="middle">Schuppen · Flossen · Kiemen</text>'),
    bildtext: 'Fische atmen mit Kiemen und bewegen sich mit Flossen.',
    einfach: '<p>Fische leben im Wasser. Sie haben Schuppen, Flossen und atmen mit Kiemen. Mit der Schwanzflosse schwimmen sie vorwärts.</p><p>Fische sind wechselwarm: Ihre Körpertemperatur ist so wie die des Wassers.</p>',
    merke: 'Fische: Schuppen, Flossen, Kiemen, wechselwarm, meist Eier (Laich).',
    ausfuehrlich: '<h3>Körperbau</h3><ul><li><b>Stromlinienform</b> verringert den Wasserwiderstand.</li><li><b>Schuppen</b> und Schleim schützen die Haut.</li><li><b>Flossen:</b> Schwanzflosse (Antrieb), Rückenflosse (Stabilität), Brust- und Bauchflossen (Steuern).</li><li><b>Schwimmblase:</b> Gasblase zum Schweben im Wasser.</li><li><b>Seitenlinienorgan:</b> spürt Wasserbewegungen.</li></ul><h3>Atmung mit Kiemen</h3><p>Das Wasser strömt durch das Maul über die Kiemen. Dort nimmt das Blut den im Wasser gelösten Sauerstoff auf und gibt Kohlenstoffdioxid ab.</p><h3>Fortpflanzung</h3><p>Die meisten Fische legen viele Eier (Laich) ins Wasser, aus denen Larven schlüpfen.</p>',
    folien: [
      { symbol: '🐟', titel: 'Fische', text: 'Schuppen · Flossen · Kiemen · wechselwarm' },
      { symbol: '🫧', titel: 'Atmung', text: 'Wasser strömt über die Kiemen. Dort wird Sauerstoff aufgenommen.' },
      { symbol: '🌊', titel: 'Anpassungen', text: 'Stromlinienform, Schwimmblase, Seitenlinienorgan.' }
    ],
    uebungen: [
      { frage: 'Womit atmen Fische?', optionen: ['Kiemen', 'Lungen', 'Haut allein', 'Nase'], richtig: 0, erklaerung: 'Kiemen nehmen Sauerstoff aus dem Wasser auf.' },
      { frage: 'Wozu dient die Schwimmblase?', optionen: ['Zum Schweben', 'Zum Verdauen', 'Zum Hören', 'Zum Fressen'], richtig: 0, erklaerung: 'Sie hilft, in jeder Wassertiefe zu schweben.' },
      { frage: 'Wechselwarm bedeutet …', optionen: ['Körpertemperatur passt sich der Umgebung an', 'Immer 37 Grad', 'Wärme aus Nahrung', 'Fellwärme'], richtig: 0, erklaerung: 'Fische können ihre Temperatur nicht selbst halten.' },
      { frage: 'Welche Flosse sorgt vor allem für den Antrieb?', optionen: ['Schwanzflosse', 'Rückenflosse', 'Bauchflosse', 'Keine'], richtig: 0, erklaerung: 'Sie schlägt von links nach rechts.' }
    ]
  };

  K['bio5-07'] = {
    bild: svg('<rect width="400" height="200" fill="#fffde7"/><ellipse cx="80" cy="100" rx="35" ry="45" fill="#fff" stroke="#999" stroke-width="2"/><circle cx="80" cy="105" r="18" fill="#ffb300"/><text x="80" y="170" font-size="12" text-anchor="middle">Tag 1</text><ellipse cx="200" cy="100" rx="35" ry="45" fill="#fff" stroke="#999" stroke-width="2"/><path d="M185 100 Q200 70 215 100 Q200 125 185 100" fill="#ffd54f"/><text x="200" y="170" font-size="12" text-anchor="middle">Tag 10</text><ellipse cx="320" cy="110" rx="26" ry="22" fill="#ffd54f"/><circle cx="342" cy="98" r="12" fill="#ffd54f"/><polygon points="353,98 364,102 353,106" fill="#ff9800"/><text x="320" y="170" font-size="12" text-anchor="middle">Tag 21: Küken</text>'),
    bildtext: 'Nach etwa 21 Tagen Brutzeit schlüpft das Küken.',
    einfach: '<p>Ein Hühnerei hat außen eine harte Schale. Innen liegt das Eigelb mit der Keimscheibe. Wenn die Henne auf dem befruchteten Ei sitzt, bleibt es 21 Tage warm. Dann schlüpft das Küken.</p><p>Das Küken pickt mit dem Eizahn die Schale auf.</p>',
    merke: 'Brutzeit beim Huhn: etwa 21 Tage. Das Küken öffnet die Schale mit dem Eizahn.',
    ausfuehrlich: '<h3>Aufbau des Eies</h3><ul><li><b>Kalkschale</b> mit winzigen Poren: Luft kann hindurch.</li><li><b>Schalenhaut</b> und Luftkammer am stumpfen Ende.</li><li><b>Eiklar</b> (Eiweiß): Wasser und Nährstoffe.</li><li><b>Dotter</b> (Eigelb): Nahrungsvorrat.</li><li><b>Keimscheibe:</b> Hier entwickelt sich der Embryo, wenn das Ei befruchtet ist.</li><li><b>Hagelschnüre:</b> halten den Dotter in der Mitte.</li></ul><h3>Entwicklung im Ei</h3><p>Bei 37 bis 38 °C wächst der Embryo und verbraucht Dotter und Eiklar. Nach 21 Tagen durchbricht das Küken die Schale mit dem Eizahn, einem kleinen Höcker am Schnabel, der später abfällt.</p><h3>Nestflüchter und Nesthocker</h3><p>Küken sind <b>Nestflüchter</b>: Sie sind gleich nach dem Schlüpfen beweglich und laufen der Henne nach. <b>Nesthocker</b> wie Amseln werden lange im Nest gefüttert.</p>',
    folien: [
      { symbol: '🥚', titel: 'Aufbau des Eies', text: 'Schale · Eiklar · Dotter · Keimscheibe · Luftkammer' },
      { symbol: '🌡️', titel: 'Brüten', text: '21 Tage bei etwa 37 bis 38 Grad.' },
      { symbol: '🐣', titel: 'Schlüpfen', text: 'Das Küken pickt die Schale mit dem Eizahn auf.' },
      { symbol: '🐥', titel: 'Nestflüchter', text: 'Küken laufen gleich los. Amseln dagegen bleiben lange im Nest.' }
    ],
    uebungen: [
      { frage: 'Wie lange brütet ein Huhn ein Ei aus?', optionen: ['Etwa 21 Tage', 'Etwa 3 Tage', 'Etwa 60 Tage', 'Etwa 1 Jahr'], richtig: 0, erklaerung: 'Nach 21 Tagen schlüpft das Küken.' },
      { frage: 'Wo entwickelt sich das Küken?', optionen: ['An der Keimscheibe', 'In der Schale', 'In der Luftkammer', 'Im Eiklar allein'], richtig: 0, erklaerung: 'Auf dem Dotter liegt die Keimscheibe.' },
      { frage: 'Womit öffnet das Küken die Schale?', optionen: ['Eizahn', 'Flügel', 'Krallen', 'Federn'], richtig: 0, erklaerung: 'Der Eizahn fällt später ab.' },
      { frage: 'Was ist ein Nestflüchter?', optionen: ['Junge laufen sofort herum', 'Junge bleiben im Nest', 'Vogel ohne Nest', 'Zugvogel'], richtig: 0, erklaerung: 'Küken, Gänseküken und Entenküken sind Nestflüchter.' },
      { frage: 'Welcher Teil des Eies ist der Nahrungsvorrat?', optionen: ['Dotter', 'Schale', 'Luftkammer', 'Hagelschnur'], richtig: 0, erklaerung: 'Der Dotter enthält viel Nährstoff für den Embryo.' }
    ]
  };
})();
