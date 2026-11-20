// Physik Klasse 5 – kindgerechte Kapitel (eigene Texte, eigene Zeichnungen)
(function () {
  var K = window.KAPITEL = window.KAPITEL || {};
  function svg(inner) { return '<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg" role="img">' + inner + '</svg>'; }

  K['phy5-01'] = {
    bild: svg('<rect width="400" height="200" fill="#e8eefb"/><circle cx="70" cy="60" r="26" fill="#ffd54f"/><path d="M60 140 Q100 60 140 140" stroke="#3b6fd4" stroke-width="5" fill="none"/><circle cx="140" cy="140" r="10" fill="#e53935"/><rect x="220" y="90" width="50" height="70" rx="6" fill="#90a4ae"/><rect x="236" y="70" width="18" height="22" fill="#cfd8dc"/><path d="M300 150 l15 -40 l15 40 z" fill="#ffb300"/><path d="M315 105 v-30" stroke="#ff7043" stroke-width="4"/><text x="200" y="190" font-size="12" text-anchor="middle" fill="#1a237e">Licht · Bewegung · Wärme · Strom · Schall</text>'),
    bildtext: 'Physik steckt überall: in Licht, Bewegung, Wärme und Strom.',
    einfach: '<p>Physik erklärt, wie die Welt funktioniert. Warum fällt ein Ball nach unten? Warum leuchtet eine Lampe? Warum hören wir Musik?</p><p>In Physik beobachtest du genau, misst nach und machst kleine Versuche. So findest du heraus, warum etwas passiert.</p>',
    merke: 'Physik untersucht Bewegung, Kräfte, Licht, Schall, Wärme, Strom und Magnetismus.',
    ausfuehrlich: '<h3>Die großen Gebiete der Physik</h3><ul><li><b>Mechanik:</b> Bewegung und Kräfte, zum Beispiel beim Fahrradfahren.</li><li><b>Optik:</b> Licht, Spiegel und Linsen.</li><li><b>Akustik:</b> Schall und Töne.</li><li><b>Wärmelehre:</b> warm, kalt, schmelzen, kochen.</li><li><b>Elektrizität:</b> Strom, Batterie, Lampe.</li><li><b>Magnetismus:</b> Magnete und Kompass.</li></ul><h3>So arbeitest du wie ein Forscher</h3><ol><li><b>Frage stellen:</b> Was will ich wissen?</li><li><b>Vermutung:</b> Was glaube ich, passiert?</li><li><b>Versuch:</b> Ich probiere es aus und messe.</li><li><b>Ergebnis:</b> Stimmte meine Vermutung?</li></ol><h3>Ein Versuchsprotokoll</h3><p>Schreibe immer auf: Frage, Vermutung, Material, Durchführung, Beobachtung und Ergebnis. So können andere deinen Versuch nachmachen.</p>',
    folien: [
      { symbol: '🔭', titel: 'Was ist Physik?', text: 'Physik erklärt, wie die Dinge um uns herum funktionieren.' },
      { symbol: '🧩', titel: 'Die Gebiete', text: 'Mechanik · Optik · Akustik · Wärme · Elektrizität · Magnetismus' },
      { symbol: '🧪', titel: 'Forscher-Weg', text: 'Frage → Vermutung → Versuch → Ergebnis' },
      { symbol: '📝', titel: 'Protokoll', text: 'Alles aufschreiben, damit andere es nachmachen können.' }
    ],
    uebungen: [
      { frage: 'Was untersucht die Physik?', optionen: ['Wie die Welt funktioniert', 'Wie man Wörter schreibt', 'Was Tiere fressen', 'Wann Könige lebten'], richtig: 0, erklaerung: 'Physik erklärt Vorgänge in der Natur und Technik.' },
      { frage: 'Zu welchem Gebiet gehört das Licht?', optionen: ['Optik', 'Akustik', 'Mechanik', 'Magnetismus'], richtig: 0, erklaerung: 'Optik ist die Lehre vom Licht.' },
      { frage: 'Was kommt nach der Vermutung?', optionen: ['Der Versuch', 'Das Ergebnis', 'Die Frage', 'Die Pause'], richtig: 0, erklaerung: 'Mit dem Versuch prüfst du deine Vermutung.' },
      { frage: 'Akustik ist die Lehre vom …', optionen: ['Schall', 'Strom', 'Licht', 'Wasser'], richtig: 0, erklaerung: 'Alles, was wir hören können, gehört zur Akustik.' },
      { frage: 'Warum schreibt man ein Protokoll?', optionen: ['Damit andere den Versuch nachmachen können', 'Damit es schön aussieht', 'Weil es Spaß macht', 'Ohne Grund'], richtig: 0, erklaerung: 'Ein Versuch soll wiederholbar sein.' }
    ]
  };

  K['phy5-02'] = {
    bild: svg('<rect width="400" height="200" fill="#fffde7"/><rect x="20" y="40" width="200" height="30" fill="#ffe082" stroke="#8d6e63"/><g stroke="#5d4037">' + (function(){var s='';for(var i=0;i<=20;i++){s+='<line x1="'+(20+i*10)+'" y1="40" x2="'+(20+i*10)+'" y2="'+(i%5===0?62:52)+'"/>';}return s;})() + '</g><text x="120" y="88" font-size="12" text-anchor="middle">Lineal: Länge in cm</text><rect x="250" y="110" width="110" height="12" fill="#78909c"/><polygon points="305,122 290,160 320,160" fill="#90a4ae"/><rect x="265" y="90" width="30" height="20" fill="#e57373"/><text x="305" y="180" font-size="12" text-anchor="middle">Waage: Masse in kg</text><circle cx="90" cy="145" r="30" fill="#fff" stroke="#3b6fd4" stroke-width="4"/><line x1="90" y1="145" x2="90" y2="122" stroke="#222" stroke-width="3"/><line x1="90" y1="145" x2="106" y2="150" stroke="#222" stroke-width="2"/><text x="90" y="192" font-size="12" text-anchor="middle">Uhr: Zeit in s</text>'),
    bildtext: 'Mit Lineal, Waage und Uhr misst man Länge, Masse und Zeit.',
    einfach: '<p>Messen heißt vergleichen. Wenn du wissen willst, wie lang dein Tisch ist, legst du ein Lineal oder Maßband an.</p><p>Jede Messung hat eine <b>Zahl</b> und eine <b>Einheit</b>: zum Beispiel 2 Meter, 5 Kilogramm oder 30 Sekunden. Ohne Einheit weiß niemand, was gemeint ist.</p>',
    merke: 'Länge in Meter (m), Masse in Kilogramm (kg), Zeit in Sekunden (s). Immer Zahl und Einheit angeben!',
    ausfuehrlich: '<h3>Die Länge</h3><table><tr><th>Einheit</th><th>Umrechnung</th><th>Beispiel</th></tr><tr><td>1 Kilometer (km)</td><td>1000 m</td><td>Schulweg</td></tr><tr><td>1 Meter (m)</td><td>100 cm</td><td>großer Schritt</td></tr><tr><td>1 Zentimeter (cm)</td><td>10 mm</td><td>Fingernagel breit</td></tr><tr><td>1 Millimeter (mm)</td><td>–</td><td>Dicke einer Münze etwa</td></tr></table><h3>Die Masse</h3><p>Die Masse sagt, wie viel Stoff in einem Körper steckt. 1 Kilogramm = 1000 Gramm. Eine Tafel Schokolade hat etwa 100 g, ein Liter Wasser etwa 1 kg.</p><h3>Die Zeit</h3><p>1 Stunde = 60 Minuten, 1 Minute = 60 Sekunden. Für kurze Zeiten benutzt man eine Stoppuhr.</p><h3>Richtig messen</h3><ul><li>Lineal genau am Anfang (bei 0) anlegen.</li><li>Gerade von oben ablesen, nicht schräg.</li><li>Lieber mehrmals messen und den Mittelwert nehmen.</li></ul>',
    folien: [
      { symbol: '📏', titel: 'Messen heißt vergleichen', text: 'Wir vergleichen mit einer festen Einheit, zum Beispiel dem Meter.' },
      { symbol: '🔢', titel: 'Zahl + Einheit', text: '2 m · 5 kg · 30 s<br>Ohne Einheit ist die Zahl wertlos.' },
      { symbol: '🔁', titel: 'Umrechnen', text: '1 km = 1000 m · 1 m = 100 cm · 1 kg = 1000 g · 1 min = 60 s' },
      { symbol: '👀', titel: 'Richtig ablesen', text: 'Bei 0 anlegen, gerade draufschauen, mehrmals messen.' }
    ],
    uebungen: [
      { frage: 'Wie viele Zentimeter sind 1 Meter?', optionen: ['100', '10', '1000', '60'], richtig: 0, erklaerung: '1 m = 100 cm.' },
      { frage: 'In welcher Einheit misst man die Masse?', optionen: ['Kilogramm', 'Meter', 'Sekunde', 'Grad'], richtig: 0, erklaerung: 'Masse misst man in kg oder g.' },
      { frage: 'Wie viele Sekunden hat eine Minute?', optionen: ['60', '100', '30', '24'], richtig: 0, erklaerung: '1 min = 60 s.' },
      { frage: '3 km sind wie viele Meter?', optionen: ['3000 m', '300 m', '30 m', '30 000 m'], richtig: 0, erklaerung: '3 × 1000 = 3000.' },
      { frage: 'Was ist falsch beim Messen?', optionen: ['Schräg von der Seite ablesen', 'Bei 0 anlegen', 'Mehrmals messen', 'Einheit aufschreiben'], richtig: 0, erklaerung: 'Schräges Ablesen führt zu Fehlern.' }
    ]
  };

  K['phy5-03'] = {
    bild: svg('<rect width="400" height="200" fill="#fff3e0"/><rect x="185" y="20" width="30" height="140" rx="15" fill="#fff" stroke="#555" stroke-width="3"/><circle cx="200" cy="165" r="22" fill="#e53935" stroke="#555" stroke-width="3"/><rect x="194" y="80" width="12" height="85" fill="#e53935"/><g font-size="11" fill="#333"><text x="222" y="40">100 °C Wasser kocht</text><text x="222" y="85">37 °C Körper</text><text x="222" y="120">20 °C Zimmer</text><text x="222" y="150">0 °C Eis</text></g><g stroke="#555"><line x1="215" y1="36" x2="222" y2="36"/><line x1="215" y1="81" x2="222" y2="81"/><line x1="215" y1="116" x2="222" y2="116"/><line x1="215" y1="146" x2="222" y2="146"/></g><text x="80" y="100" font-size="40">🌡️</text>'),
    bildtext: 'Das Thermometer zeigt die Temperatur in Grad Celsius.',
    einfach: '<p>Mit der Hand kannst du nur fühlen, ob etwas warm oder kalt ist. Das kann täuschen! Ein Thermometer misst die Temperatur genau.</p><p>Wir messen in <b>Grad Celsius</b> (°C). Bei 0 °C gefriert Wasser zu Eis, bei 100 °C kocht es.</p>',
    merke: '0 °C: Wasser gefriert. 100 °C: Wasser kocht. Unser Körper hat etwa 37 °C.',
    ausfuehrlich: '<h3>Warum täuscht die Hand?</h3><p>Versuch: Lege eine Hand in kaltes und eine in warmes Wasser. Nach einer Minute legst du beide in lauwarmes Wasser. Die eine Hand fühlt es warm, die andere kalt! Deshalb brauchen wir ein Messgerät.</p><h3>So funktioniert ein Flüssigkeitsthermometer</h3><p>Im Glasröhrchen ist eine Flüssigkeit (meist gefärbter Alkohol). Wird sie warm, dehnt sie sich aus und steigt nach oben. Wird sie kalt, zieht sie sich zusammen und sinkt.</p><h3>Die Celsius-Skala</h3><p>Der Forscher Anders Celsius legte zwei feste Punkte fest: Gefrierpunkt (0 °C) und Siedepunkt (100 °C) von Wasser. Dazwischen teilte er in 100 gleiche Teile.</p><h3>Minusgrade</h3><p>Ist es kälter als 0 °C, schreibt man ein Minus davor: −5 °C. Im Winter kann es so kalt werden.</p><h3>Andere Thermometer</h3><ul><li>Fieberthermometer (digital)</li><li>Außenthermometer</li><li>Bratenthermometer in der Küche</li></ul>',
    folien: [
      { symbol: '✋', titel: 'Die Hand täuscht', text: 'Warm und kalt fühlt jeder anders. Ein Thermometer misst genau.' },
      { symbol: '🌡️', titel: 'Wie es funktioniert', text: 'Warm: Flüssigkeit dehnt sich aus und steigt.<br>Kalt: sie sinkt.' },
      { symbol: '🧊', titel: 'Feste Punkte', text: '0 °C Eis · 37 °C Körper · 100 °C kochendes Wasser' },
      { symbol: '❄️', titel: 'Minusgrade', text: 'Kälter als 0 °C: −5 °C, −10 °C …' }
    ],
    uebungen: [
      { frage: 'Bei wie viel Grad gefriert Wasser?', optionen: ['0 °C', '100 °C', '37 °C', '10 °C'], richtig: 0, erklaerung: 'Bei 0 °C wird Wasser zu Eis.' },
      { frage: 'Warum steigt die Flüssigkeit im Thermometer?', optionen: ['Sie dehnt sich bei Wärme aus', 'Sie wird schwerer', 'Sie verdunstet', 'Sie wird bunt'], richtig: 0, erklaerung: 'Wärme lässt Flüssigkeiten sich ausdehnen.' },
      { frage: 'Welche Temperatur hat ein gesunder Mensch etwa?', optionen: ['37 °C', '20 °C', '50 °C', '0 °C'], richtig: 0, erklaerung: 'Ab etwa 38 °C hat man Fieber.' },
      { frage: 'Was bedeutet −3 °C?', optionen: ['3 Grad kälter als 0 °C', '3 Grad wärmer als 0 °C', 'Genau 3 °C', 'Kochendes Wasser'], richtig: 0, erklaerung: 'Minus heißt unter dem Gefrierpunkt.' },
      { frage: 'Warum ist die Hand kein gutes Messgerät?', optionen: ['Sie täuscht sich', 'Sie ist zu klein', 'Sie ist immer kalt', 'Sie ist zu langsam'], richtig: 0, erklaerung: 'Das zeigt der Versuch mit den drei Schüsseln.' }
    ]
  };

  K['phy5-04'] = {
    bild: svg('<rect width="400" height="200" fill="#f5f5f5"/><circle cx="50" cy="70" r="22" fill="#ffd54f"/><g stroke="#ffca28" stroke-width="3"><line x1="72" y1="70" x2="170" y2="70"/><line x1="70" y1="78" x2="170" y2="110"/><line x1="70" y1="62" x2="170" y2="40"/></g><rect x="170" y="60" width="20" height="60" fill="#5d4037"/><polygon points="190,60 380,20 380,175 190,120" fill="#9e9e9e" opacity=".6"/><text x="290" y="105" font-size="13" text-anchor="middle" fill="#222">Schatten</text><text x="110" y="160" font-size="12" text-anchor="middle">Licht geht geradeaus</text>'),
    bildtext: 'Hinter einem Gegenstand entsteht ein Schatten, weil Licht geradeaus geht.',
    einfach: '<p>Licht kommt von einer <b>Lichtquelle</b>, zum Beispiel der Sonne, einer Lampe oder einer Kerze. Das Licht geht immer geradeaus.</p><p>Steht etwas im Weg, kommt dahinter kein Licht hin. Dort entsteht ein <b>Schatten</b>.</p>',
    merke: 'Licht breitet sich geradlinig aus. Hinter einem undurchsichtigen Körper entsteht ein Schatten.',
    ausfuehrlich: '<h3>Lichtquellen und beleuchtete Körper</h3><p><b>Selbstleuchtend</b> sind Sonne, Lampe, Feuer, Bildschirm. <b>Beleuchtete Körper</b> leuchten nicht selbst, sie werfen nur Licht zurück, zum Beispiel der Mond, ein Buch oder dein Gesicht.</p><h3>Wie sehen wir?</h3><p>Licht fällt auf einen Gegenstand, wird zurückgeworfen und gelangt in unser Auge. Ohne Licht sehen wir nichts.</p><h3>Durchsichtig, durchscheinend, undurchsichtig</h3><table><tr><th>Art</th><th>Beispiel</th><th>Schatten?</th></tr><tr><td>durchsichtig</td><td>Fensterglas</td><td>fast keiner</td></tr><tr><td>durchscheinend</td><td>Butterbrotpapier</td><td>schwach</td></tr><tr><td>undurchsichtig</td><td>Holz, Hand</td><td>deutlich</td></tr></table><h3>Wie groß ist der Schatten?</h3><p>Je näher der Gegenstand an der Lampe ist, desto größer wird sein Schatten. Steht die Sonne tief (morgens und abends), sind die Schatten lang. Mittags sind sie kurz.</p><h3>Schattenspiel</h3><p>Mit den Händen vor einer Lampe kannst du Tierfiguren an die Wand werfen.</p>',
    folien: [
      { symbol: '💡', titel: 'Lichtquellen', text: 'Sonne, Lampe, Kerze, Bildschirm leuchten selbst.' },
      { symbol: '➡️', titel: 'Licht geht geradeaus', text: 'Man zeichnet es als gerade Linie mit Pfeil: den Lichtstrahl.' },
      { symbol: '🌑', titel: 'Schatten', text: 'Hinter undurchsichtigen Körpern kommt kein Licht an.' },
      { symbol: '🌅', titel: 'Lange und kurze Schatten', text: 'Sonne tief: lange Schatten. Sonne hoch: kurze Schatten.' }
    ],
    uebungen: [
      { frage: 'Welcher Körper leuchtet selbst?', optionen: ['Die Sonne', 'Der Mond', 'Ein Spiegel', 'Ein Buch'], richtig: 0, erklaerung: 'Der Mond wird nur von der Sonne angestrahlt.' },
      { frage: 'Wie breitet sich Licht aus?', optionen: ['Geradeaus', 'Im Kreis', 'Im Zickzack', 'Nur nach oben'], richtig: 0, erklaerung: 'Darum entstehen Schatten.' },
      { frage: 'Welches Material ist durchscheinend?', optionen: ['Butterbrotpapier', 'Holz', 'Fensterglas', 'Metall'], richtig: 0, erklaerung: 'Es lässt etwas Licht durch, aber man sieht nicht klar hindurch.' },
      { frage: 'Wann sind Schatten am kürzesten?', optionen: ['Mittags', 'Morgens', 'Abends', 'Nachts'], richtig: 0, erklaerung: 'Mittags steht die Sonne am höchsten.' },
      { frage: 'Was passiert, wenn du die Hand näher zur Lampe hältst?', optionen: ['Der Schatten wird größer', 'Der Schatten wird kleiner', 'Kein Schatten', 'Der Schatten wird bunt'], richtig: 0, erklaerung: 'Die Hand verdeckt dann mehr Licht.' }
    ]
  };

  K['phy5-05'] = {
    bild: svg('<rect width="400" height="200" fill="#ede7f6"/><rect x="40" y="80" width="40" height="40" fill="#7e57c2"/><polygon points="80,80 120,50 120,150 80,120" fill="#9575cd"/><g fill="none" stroke="#5e35b1" stroke-width="3"><path d="M140 70 Q160 100 140 130"/><path d="M165 55 Q195 100 165 145"/><path d="M190 40 Q230 100 190 160"/></g><ellipse cx="320" cy="100" rx="22" ry="34" fill="#ffccbc"/><path d="M312 85 Q300 100 312 115" stroke="#8d6e63" stroke-width="3" fill="none"/><text x="200" y="190" font-size="12" text-anchor="middle">Lautsprecher schwingt → Luft schwingt → Ohr hört</text>'),
    bildtext: 'Schall sind Schwingungen, die durch die Luft zu unserem Ohr wandern.',
    einfach: '<p>Wenn du gegen eine Trommel schlägst, zittert das Fell ganz schnell hin und her. Das nennt man <b>schwingen</b>. Die Schwingung stößt die Luft an, und die Luft trägt den Schall bis zu deinem Ohr.</p><p>Ohne Luft gibt es keinen Schall. Im Weltall ist es deshalb ganz still.</p>',
    merke: 'Schall entsteht durch Schwingungen. Er braucht einen Stoff (Luft, Wasser, Holz), um sich auszubreiten.',
    ausfuehrlich: '<h3>Schallquelle, Ausbreitung, Empfänger</h3><ul><li><b>Schallquelle:</b> etwas, das schwingt, zum Beispiel Gitarrensaite, Stimmbänder, Lautsprecher.</li><li><b>Ausbreitung:</b> durch Luft, Wasser oder feste Stoffe.</li><li><b>Empfänger:</b> unser Ohr oder ein Mikrofon.</li></ul><h3>Laut und leise</h3><p>Schwingt etwas stark (große Auslenkung), ist der Ton laut. Schwingt es schwach, ist er leise. Die Lautstärke misst man in <b>Dezibel (dB)</b>.</p><h3>Hoch und tief</h3><p>Schwingt etwas sehr schnell, hören wir einen hohen Ton. Schwingt es langsam, ist der Ton tief. Eine kurze, straffe Saite klingt höher als eine lange, lockere.</p><h3>Wie schnell ist Schall?</h3><p>In Luft legt Schall etwa 340 Meter pro Sekunde zurück. Darum hörst du beim Gewitter den Donner erst nach dem Blitz: Licht ist viel schneller.</p><h3>Lärm schadet</h3><p>Sehr laute Geräusche können das Gehör für immer schädigen. Kopfhörer deshalb nicht zu laut stellen!</p>',
    folien: [
      { symbol: '🥁', titel: 'Schall entsteht', text: 'Etwas schwingt schnell hin und her.' },
      { symbol: '🌬️', titel: 'Schall wandert', text: 'Durch Luft, Wasser und feste Stoffe. Im Weltall nicht.' },
      { symbol: '🎵', titel: 'Hoch und tief', text: 'Schnelle Schwingung: hoch. Langsame Schwingung: tief.' },
      { symbol: '⛈️', titel: 'Blitz und Donner', text: 'Schall ist langsamer als Licht: etwa 340 m pro Sekunde.' },
      { symbol: '🎧', titel: 'Ohren schützen', text: 'Zu laut macht das Gehör kaputt.' }
    ],
    uebungen: [
      { frage: 'Wie entsteht Schall?', optionen: ['Durch Schwingungen', 'Durch Licht', 'Durch Kälte', 'Durch Magnete'], richtig: 0, erklaerung: 'Eine Schallquelle schwingt hin und her.' },
      { frage: 'Warum ist es im Weltall still?', optionen: ['Es gibt keine Luft', 'Es ist zu dunkel', 'Es ist zu kalt', 'Niemand redet'], richtig: 0, erklaerung: 'Schall braucht einen Stoff zur Ausbreitung.' },
      { frage: 'Eine Saite schwingt sehr schnell. Wie klingt der Ton?', optionen: ['Hoch', 'Tief', 'Leise', 'Gar nicht'], richtig: 0, erklaerung: 'Viele Schwingungen pro Sekunde ergeben einen hohen Ton.' },
      { frage: 'Warum hört man den Donner nach dem Blitz?', optionen: ['Schall ist langsamer als Licht', 'Donner ist weiter weg', 'Blitz ist lauter', 'Zufall'], richtig: 0, erklaerung: 'Licht ist fast eine Million Mal schneller.' },
      { frage: 'In welcher Einheit misst man die Lautstärke?', optionen: ['Dezibel', 'Meter', 'Grad', 'Kilogramm'], richtig: 0, erklaerung: 'Abgekürzt dB.' }
    ]
  };
})();
