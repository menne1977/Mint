// Chemie Klasse 5 – kindgerechte Kapitel (eigene Texte, eigene Zeichnungen)
(function () {
  var K = window.KAPITEL = window.KAPITEL || {};
  function svg(inner) { return '<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg" role="img">' + inner + '</svg>'; }

  K['che5-01'] = {
    bild: svg('<rect width="400" height="200" fill="#fbe9e7"/><path d="M90 40 h30 v50 l35 70 h-100 l35 -70 z" fill="#fff" stroke="#555" stroke-width="3"/><path d="M68 140 l22 -40 h30 l22 40 z" fill="#66bb6a"/><circle cx="100" cy="125" r="5" fill="#fff"/><circle cx="115" cy="115" r="3" fill="#fff"/><rect x="230" y="60" width="40" height="100" rx="4" fill="#fff" stroke="#555" stroke-width="3"/><rect x="232" y="110" width="36" height="48" fill="#ef5350"/><path d="M300 160 q20 -60 40 0" fill="#ffb74d"/><path d="M320 115 q-8 -15 0 -30 q8 15 0 30" fill="#ff7043"/><text x="200" y="190" font-size="12" text-anchor="middle">Stoffe verändern sich: Farbe, Blasen, Feuer</text>'),
    bildtext: 'Chemie erforscht Stoffe und wie sie sich verändern.',
    einfach: '<p>Alles um dich herum besteht aus <b>Stoffen</b>: Wasser, Zucker, Holz, Luft, Eisen. Chemie untersucht, welche Eigenschaften diese Stoffe haben und wie sie sich verändern.</p><p>Wenn Kuchen backt, Eisen rostet oder Holz verbrennt, entstehen neue Stoffe. Das ist eine <b>chemische Reaktion</b>.</p>',
    merke: 'Chemie ist die Lehre von den Stoffen und ihren Veränderungen.',
    ausfuehrlich: '<h3>Chemie im Alltag</h3><ul><li><b>Küche:</b> Backen, Kochen, Brausepulver im Wasser.</li><li><b>Bad:</b> Seife, Zahnpasta, Shampoo.</li><li><b>Draußen:</b> Rost am Fahrrad, Feuer im Grill.</li><li><b>Körper:</b> Verdauung ist auch Chemie!</li></ul><h3>Körper und Stoff</h3><p>Ein <b>Körper</b> ist ein Gegenstand, zum Beispiel ein Löffel. Der <b>Stoff</b> ist das, woraus er besteht: Metall, Holz oder Kunststoff. Ein Löffel kann aus verschiedenen Stoffen sein.</p><h3>Woran erkennt man eine Reaktion?</h3><ul><li>Die Farbe ändert sich.</li><li>Es bilden sich Gasblasen.</li><li>Es wird warm oder kalt, Licht entsteht.</li><li>Ein neuer Geruch entsteht.</li></ul><h3>Chemiker arbeiten genau</h3><p>Wie in der Physik gilt: Frage, Vermutung, Versuch, Beobachtung, Ergebnis. Alles wird im Protokoll aufgeschrieben.</p>',
    folien: [
      { symbol: '⚗️', titel: 'Was ist Chemie?', text: 'Die Lehre von den Stoffen und wie sie sich verändern.' },
      { symbol: '🥄', titel: 'Körper oder Stoff?', text: 'Löffel = Körper. Metall = Stoff.' },
      { symbol: '🫧', titel: 'Zeichen einer Reaktion', text: 'Farbe ändert sich · Blasen · Wärme · Licht · Geruch' },
      { symbol: '🍰', titel: 'Chemie im Alltag', text: 'Backen, Rost, Feuer, Seife – überall Chemie!' }
    ],
    uebungen: [
      { frage: 'Was untersucht die Chemie?', optionen: ['Stoffe und ihre Veränderungen', 'Sterne und Planeten', 'Tiere im Wald', 'Länder und Städte'], richtig: 0, erklaerung: 'Chemie dreht sich um Stoffe.' },
      { frage: 'Ein Becher ist ein …', optionen: ['Körper', 'Stoff', 'Gas', 'Element'], richtig: 0, erklaerung: 'Der Becher ist der Gegenstand, das Material ist der Stoff.' },
      { frage: 'Woran erkennst du eine chemische Reaktion?', optionen: ['Es bilden sich Gasblasen', 'Der Stoff wird nur kleiner geschnitten', 'Er wird nur verschoben', 'Er wird angemalt'], richtig: 0, erklaerung: 'Blasen zeigen, dass ein neuer Stoff (Gas) entsteht.' },
      { frage: 'Welcher Vorgang ist eine chemische Reaktion?', optionen: ['Holz verbrennt', 'Papier wird gefaltet', 'Glas wird geputzt', 'Stein wird geworfen'], richtig: 0, erklaerung: 'Beim Verbrennen entstehen Asche und Gase.' }
    ]
  };

  K['che5-02'] = {
    bild: svg('<rect width="400" height="200" fill="#fff8e1"/><ellipse cx="90" cy="95" rx="50" ry="28" fill="#90caf9" opacity=".8"/><rect x="45" y="85" width="90" height="16" fill="#1e88e5"/><text x="90" y="150" font-size="12" text-anchor="middle">Schutzbrille</text><rect x="175" y="50" width="50" height="80" rx="8" fill="#fff" stroke="#555" stroke-width="3"/><polygon points="200,65 220,100 180,100" fill="#ffeb3b" stroke="#222" stroke-width="2"/><text x="200" y="95" font-size="16" text-anchor="middle">!</text><text x="200" y="150" font-size="12" text-anchor="middle">Warnzeichen</text><path d="M290 130 h50 l-10 -60 h-30 z" fill="#ffccbc" stroke="#555"/><path d="M315 70 q-6 -14 0 -26 q6 12 0 26" fill="#ff7043"/><text x="315" y="150" font-size="12" text-anchor="middle">Brenner</text><text x="200" y="185" font-size="12" text-anchor="middle" fill="#b71c1c">Erst lesen, dann arbeiten!</text>'),
    bildtext: 'Im Chemieraum gelten feste Sicherheitsregeln.',
    einfach: '<p>Im Chemieraum gibt es Stoffe, die heiß, ätzend oder giftig sein können. Darum gibt es Regeln, die dich schützen.</p><p>Die wichtigsten: Schutzbrille tragen, nichts essen oder trinken, nur nach Anweisung arbeiten und nie an Stoffen riechen oder sie probieren.</p>',
    merke: 'Schutzbrille auf! Nichts essen, trinken oder probieren. Nur arbeiten, wenn die Lehrkraft es sagt.',
    ausfuehrlich: '<h3>Die 10 goldenen Laborregeln</h3><ol><li>Schutzbrille immer tragen, wenn experimentiert wird.</li><li>Lange Haare zusammenbinden.</li><li>Kein Essen und Trinken im Raum.</li><li>Nur mit Erlaubnis experimentieren.</li><li>Versuchsanleitung vorher genau lesen.</li><li>Nie an Stoffen schmecken.</li><li>Gerüche nur vorsichtig zufächeln, nicht direkt einatmen.</li><li>Reagenzglas beim Erhitzen nie auf Menschen richten.</li><li>Reste nur in die richtigen Behälter, nicht in den Ausguss.</li><li>Unfälle sofort melden, auch kleine.</li></ol><h3>Gefahrenzeichen</h3><p>Auf Flaschen siehst du rote Rauten mit schwarzen Bildern. Sie warnen zum Beispiel vor: entzündlich (Flamme), ätzend (Hand und Tropfen), giftig (Totenkopf), umweltgefährlich (Baum und Fisch).</p><h3>Der Gasbrenner</h3><p>Die rauschende, blaue Flamme ist sehr heiß. Die leuchtend gelbe Flamme ist kühler und rußt. Beim Anzünden: erst Streichholz, dann Gas aufdrehen.</p><h3>Notfall</h3><p>Augendusche, Feuerlöscher, Löschdecke und Not-Aus-Schalter: Lerne, wo sie im Raum sind.</p>',
    folien: [
      { symbol: '🥽', titel: 'Schutzbrille', text: 'Immer tragen, wenn experimentiert wird.' },
      { symbol: '🚫', titel: 'Verboten', text: 'Essen · Trinken · Probieren · Einfach drauflos arbeiten' },
      { symbol: '♦️', titel: 'Gefahrenzeichen', text: 'Rote Raute = Achtung! Flamme, Totenkopf, Ätzend …' },
      { symbol: '🔥', titel: 'Gasbrenner', text: 'Blaue Flamme: sehr heiß. Gelbe Flamme: kühler, rußt.' },
      { symbol: '🧯', titel: 'Notfall', text: 'Augendusche, Feuerlöscher, Not-Aus kennen. Alles sofort melden.' }
    ],
    uebungen: [
      { frage: 'Was trägst du beim Experimentieren immer?', optionen: ['Schutzbrille', 'Sonnenbrille', 'Mütze', 'Handschuhe aus Wolle'], richtig: 0, erklaerung: 'Die Schutzbrille schützt die Augen vor Spritzern.' },
      { frage: 'Wie prüft man einen Geruch richtig?', optionen: ['Vorsichtig zufächeln', 'Tief einatmen', 'Daran lecken', 'Gar nicht melden'], richtig: 0, erklaerung: 'Mit der Hand etwas Luft zur Nase wedeln.' },
      { frage: 'Welche Flamme ist heißer?', optionen: ['Die blaue rauschende', 'Die gelbe leuchtende', 'Beide gleich', 'Keine'], richtig: 0, erklaerung: 'Die blaue Flamme bekommt viel Luft und ist sehr heiß.' },
      { frage: 'Was machst du bei einem kleinen Unfall?', optionen: ['Sofort melden', 'Verstecken', 'Weiterarbeiten', 'Nach Hause gehen'], richtig: 0, erklaerung: 'Auch kleine Unfälle müssen gemeldet werden.' },
      { frage: 'Wohin gehören Chemikalienreste?', optionen: ['In die vorgesehenen Behälter', 'In den Ausguss', 'In den Mülleimer', 'Auf den Boden'], richtig: 0, erklaerung: 'So wird die Umwelt geschützt.' }
    ]
  };

  K['che5-03'] = {
    bild: svg('<rect width="400" height="200" fill="#f3e5f5"/><rect x="30" y="70" width="70" height="70" fill="#b0bec5"/><text x="65" y="160" font-size="12" text-anchor="middle">Eisen: hart, glänzt</text><rect x="160" y="80" width="80" height="60" fill="#a1887f"/><text x="200" y="160" font-size="12" text-anchor="middle">Holz: schwimmt</text><path d="M290 140 h60 l-6 -60 h-48 z" fill="#e3f2fd" stroke="#555"/><rect x="298" y="110" width="44" height="28" fill="#90caf9"/><text x="320" y="160" font-size="12" text-anchor="middle">Wasser: flüssig</text><text x="200" y="35" font-size="13" text-anchor="middle">Jeder Stoff hat seinen „Steckbrief“</text>'),
    bildtext: 'Stoffe erkennt man an ihren Eigenschaften.',
    einfach: '<p>Jeder Stoff hat besondere Eigenschaften, wie ein Steckbrief. Manche kann man mit den Sinnen erkennen: Farbe, Geruch, ob er glänzt, ob er hart oder weich ist.</p><p>Andere muss man messen oder testen: Leitet er Strom? Ist er magnetisch? Löst er sich in Wasser? Schwimmt er?</p>',
    merke: 'Stoffe erkennt man an ihren Eigenschaften: Farbe, Geruch, Härte, Löslichkeit, Magnetismus, Leitfähigkeit, Schmelztemperatur.',
    ausfuehrlich: '<h3>Mit den Sinnen</h3><ul><li><b>Sehen:</b> Farbe, Glanz, Form (Kristalle).</li><li><b>Fühlen:</b> rau, glatt, hart, weich.</li><li><b>Riechen:</b> nur vorsichtig zufächeln!</li><li><b>Schmecken:</b> im Labor niemals!</li></ul><h3>Mit Versuchen</h3><table><tr><th>Eigenschaft</th><th>Test</th><th>Beispiel</th></tr><tr><td>Löslichkeit</td><td>In Wasser rühren</td><td>Zucker löst sich, Sand nicht</td></tr><tr><td>Magnetismus</td><td>Magnet hinhalten</td><td>Eisen wird angezogen, Kupfer nicht</td></tr><tr><td>Leitfähigkeit</td><td>In Stromkreis einbauen</td><td>Metall leitet, Holz nicht</td></tr><tr><td>Dichte</td><td>Schwimmt es?</td><td>Holz schwimmt, Stein sinkt</td></tr><tr><td>Härte</td><td>Ritzen</td><td>Glas ritzt Kupfer</td></tr></table><h3>Die Aggregatzustände</h3><p>Stoffe können <b>fest</b> (Eis), <b>flüssig</b> (Wasser) oder <b>gasförmig</b> (Wasserdampf) sein. Bei welcher Temperatur ein Stoff schmilzt oder siedet, ist auch eine Eigenschaft.</p><h3>Steckbrief Zucker</h3><p>weiß, kristallin, süß (in der Küche), löst sich gut in Wasser, nicht magnetisch, leitet keinen Strom, schmilzt bei Hitze und wird zu Karamell.</p>',
    folien: [
      { symbol: '👁️', titel: 'Mit den Sinnen', text: 'Farbe · Glanz · Geruch · hart oder weich' },
      { symbol: '🧲', titel: 'Mit Versuchen', text: 'Löslich? Magnetisch? Leitet Strom? Schwimmt?' },
      { symbol: '🧊', titel: 'Aggregatzustände', text: 'fest · flüssig · gasförmig' },
      { symbol: '📋', titel: 'Steckbrief', text: 'Alle Eigenschaften zusammen verraten den Stoff.' }
    ],
    uebungen: [
      { frage: 'Welcher Stoff wird vom Magneten angezogen?', optionen: ['Eisen', 'Kupfer', 'Holz', 'Glas'], richtig: 0, erklaerung: 'Eisen, Nickel und Cobalt sind magnetisch.' },
      { frage: 'Welcher Stoff löst sich in Wasser?', optionen: ['Zucker', 'Sand', 'Öl', 'Kieselstein'], richtig: 0, erklaerung: 'Zucker verschwindet im Wasser und macht es süß.' },
      { frage: 'Welcher Stoff leitet Strom?', optionen: ['Kupfer', 'Holz', 'Gummi', 'Kunststoff'], richtig: 0, erklaerung: 'Metalle leiten Strom.' },
      { frage: 'Welche Eigenschaft darf man im Labor NICHT prüfen?', optionen: ['Geschmack', 'Farbe', 'Härte', 'Magnetismus'], richtig: 0, erklaerung: 'Im Labor wird nie etwas probiert.' },
      { frage: 'Wasserdampf ist …', optionen: ['gasförmig', 'fest', 'flüssig', 'magnetisch'], richtig: 0, erklaerung: 'Wasser wird beim Kochen zu Dampf.' }
    ]
  };

  K['che5-04'] = {
    bild: svg('<rect width="400" height="200" fill="#e0f2f1"/><path d="M60 40 h80 l-30 50 v40 h-20 v-40 z" fill="#fff" stroke="#555" stroke-width="3"/><path d="M75 50 h50 l-20 30 h-10 z" fill="#a1887f"/><rect x="90" y="140" width="20" height="40" fill="#fff" stroke="#555"/><rect x="92" y="160" width="16" height="18" fill="#81d4fa"/><text x="100" y="196" font-size="11" text-anchor="middle">Filtrieren</text><rect x="180" y="110" width="60" height="50" fill="#fff" stroke="#555" stroke-width="3"/><rect x="182" y="140" width="56" height="18" fill="#c5e1a5"/><rect x="182" y="128" width="56" height="12" fill="#ffe082"/><text x="210" y="196" font-size="11" text-anchor="middle">Absetzen</text><circle cx="320" cy="90" r="35" fill="#fff" stroke="#555" stroke-width="3"/><rect x="290" y="80" width="60" height="25" fill="#81d4fa"/><path d="M310 60 q-5 -15 5 -25 M330 60 q5 -15 -5 -25" stroke="#90a4ae" stroke-width="3" fill="none"/><path d="M300 160 l20 -30 l20 30 z" fill="#ff7043"/><text x="320" y="196" font-size="11" text-anchor="middle">Eindampfen</text>'),
    bildtext: 'Gemische kann man durch Filtrieren, Absetzen oder Eindampfen trennen.',
    einfach: '<p>Ein <b>Gemisch</b> besteht aus zwei oder mehr Stoffen, zum Beispiel Müsli, Salzwasser oder Sand mit Wasser.</p><p>Man kann Gemische wieder trennen: Sand bleibt im Filter hängen, Salz bleibt übrig, wenn das Wasser verdampft.</p>',
    merke: 'Trennverfahren: Sieben, Absetzen, Filtrieren, Eindampfen, Magnettrennung, Destillieren.',
    ausfuehrlich: '<h3>Arten von Gemischen</h3><ul><li><b>Gemenge:</b> feste Stoffe gemischt (Müsli, Sand und Kies).</li><li><b>Lösung:</b> ein Stoff ist ganz im Wasser verschwunden (Salzwasser, Zuckerwasser).</li><li><b>Suspension:</b> fester Stoff schwimmt trüb in Flüssigkeit (Schlammwasser).</li><li><b>Emulsion:</b> zwei Flüssigkeiten, die sich nicht mischen (Öl und Wasser, Milch).</li></ul><h3>Trennverfahren</h3><table><tr><th>Verfahren</th><th>Was wird getrennt?</th><th>Wie?</th></tr><tr><td>Sieben</td><td>große und kleine Teile</td><td>Kleine fallen durch</td></tr><tr><td>Magnettrennung</td><td>Eisen und andere Stoffe</td><td>Magnet zieht Eisen heraus</td></tr><tr><td>Absetzen (Dekantieren)</td><td>Schlamm und Wasser</td><td>Warten, dann Wasser abgießen</td></tr><tr><td>Filtrieren</td><td>fester Stoff und Flüssigkeit</td><td>Filterpapier hält Feststoff zurück</td></tr><tr><td>Eindampfen</td><td>gelöster Stoff und Wasser</td><td>Wasser verdampft, Salz bleibt</td></tr><tr><td>Destillieren</td><td>zwei Flüssigkeiten oder Lösung</td><td>Dampf wird gekühlt und aufgefangen</td></tr></table><h3>Versuch: Salz aus Steinsalz gewinnen</h3><ol><li>Steinsalz zerkleinern und in Wasser rühren.</li><li>Filtrieren: Sand und Steine bleiben im Filter.</li><li>Das klare Salzwasser eindampfen.</li><li>Zurück bleibt sauberes Salz.</li></ol><h3>Im Alltag</h3><p>Kaffeefilter, Nudelsieb, Kläranlage und Meersalzgewinnung in Salzgärten nutzen genau diese Verfahren.</p>',
    folien: [
      { symbol: '🥣', titel: 'Gemische', text: 'Müsli, Salzwasser, Schlammwasser, Öl und Wasser' },
      { symbol: '🧲', titel: 'Sieben und Magnet', text: 'Sieb trennt nach Größe. Magnet zieht Eisen heraus.' },
      { symbol: '☕', titel: 'Filtrieren', text: 'Der Filter hält feste Teile zurück, Flüssigkeit läuft durch.' },
      { symbol: '🧂', titel: 'Eindampfen', text: 'Wasser verdampft, das Salz bleibt übrig.' },
      { symbol: '🌊', titel: 'Im Alltag', text: 'Kaffeefilter, Nudelsieb, Kläranlage, Salzgarten am Meer' }
    ],
    uebungen: [
      { frage: 'Wie trennt man Sand von Wasser?', optionen: ['Filtrieren', 'Magnet', 'Schütteln', 'Einfrieren'], richtig: 0, erklaerung: 'Der Sand bleibt im Filterpapier hängen.' },
      { frage: 'Wie bekommt man das Salz aus Salzwasser?', optionen: ['Eindampfen', 'Filtrieren', 'Sieben', 'Magnet'], richtig: 0, erklaerung: 'Gelöstes Salz geht durch jeden Filter, aber es verdampft nicht.' },
      { frage: 'Wie trennt man Eisenspäne von Sand?', optionen: ['Mit einem Magneten', 'Mit Wasser', 'Mit Feuer', 'Gar nicht'], richtig: 0, erklaerung: 'Eisen ist magnetisch, Sand nicht.' },
      { frage: 'Öl und Wasser zusammen sind eine …', optionen: ['Emulsion', 'Lösung', 'Gemenge', 'Reinstoff'], richtig: 0, erklaerung: 'Zwei Flüssigkeiten, die sich nicht mischen.' },
      { frage: 'Welches Gerät nutzt das Filtrieren?', optionen: ['Kaffeefilter', 'Kühlschrank', 'Föhn', 'Lineal'], richtig: 0, erklaerung: 'Das Kaffeepulver bleibt im Filter.' }
    ]
  };
})();
