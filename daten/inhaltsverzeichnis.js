// Inhaltsverzeichnis der drei Bücher (Klasse 5 bis 13).
// Jedes Kapitel: [id-Endung, Titel]. Die Inhalte stehen in daten/kapitel-*.js
window.KAPITEL = window.KAPITEL || {};
function mk(prefix, klassen) {
  const out = {};
  Object.keys(klassen).forEach(k => {
    out[k] = klassen[k].map((t, i) => ({ id: prefix + k + '-' + String(i + 1).padStart(2, '0'), titel: t }));
  });
  return out;
}
window.BUECHER = {
  biologie: {
    name: 'Biologie', farbe: '#2e8b57', symbol: '🌱',
    klassen: mk('bio', {
      5: ['Was ist Biologie?', 'Arbeiten mit Lupe und Mikroskop', 'Säugetiere: Hund, Katze, Pferd', 'Haustiere und Nutztiere', 'Vögel und ihr Körperbau', 'Fische und ihr Leben im Wasser', 'Vom Ei zum Küken', 'Kennzeichen der Lebewesen', 'Vom Wolf zum Hund', 'Katzen sind Schleichjäger', 'Rinder sind Nutztiere'],
      6: ['Amphibien: Frosch und Co.', 'Reptilien', 'Insekten', 'Spinnen und andere Gliedertiere', 'Bau der Blütenpflanzen', 'Samen und Keimung', 'Fortpflanzung der Pflanzen', 'Lebensraum Wald', 'Lebensraum Wiese und Gewässer', 'Tiere und Pflanzen im Jahreslauf', 'Pilze', 'Wie sich Pflanzen verbreiten', 'Die Kartoffel', 'Getreide und Mehl', 'Pflanzen ordnen und bestimmen', 'Pflanzenorgane und ihre Funktion', 'Der Baum als Lebensraum', 'Die Hecke als Lebensraum', 'Wirbellose Tiere', 'Nützlinge und Schädlinge', 'Säugetiere im Winter', 'Zugvögel und Standvögel', 'Wechselwarme Tiere im Winter', 'Fledermäuse', 'Leben in extremen Lebensräumen'],
      7: ['Das Skelett', 'Muskeln und Bewegung', 'Ernährung und gesunde Kost', 'Verdauung', 'Atmung', 'Herz und Blutkreislauf', 'Die Sinnesorgane', 'Pubertät', 'Fortpflanzung und Entwicklung des Menschen', 'Sucht: Alkohol, Nikotin und Co.', 'Zähne und Zahnpflege', 'Das Blut', 'Erste Hilfe', 'Das Auge', 'Das Ohr und Hören', 'Die Haut als Sinnesorgan', 'Sinne im Tierreich', 'Der Zyklus und die Menstruation'],
      8: ['Die Zelle', 'Zellteilung', 'Fotosynthese', 'Zellatmung', 'Ökosysteme', 'Nahrungsketten und Nahrungsnetze', 'Stoffkreisläufe', 'Umwelt- und Naturschutz', 'Bodenlebewesen', 'Artenvielfalt und Artenschutz', 'Bakterien', 'Viren'],
      9: ['Grundlagen der Vererbung', 'Mendelsche Regeln', 'Kreuzungsschemata', 'Gene und Chromosomen', 'Erbkrankheiten', 'Immunsystem', 'Krankheiten und Impfungen', 'Hormone', 'Verhütung und Familienplanung', 'Blutzucker und Diabetes', 'Evolution des Menschen'],
      10: ['Evolution und Darwin', 'Entstehung der Arten', 'Stammesgeschichte', 'Verhaltensbiologie', 'Das Nervensystem', 'Gentechnik im Überblick'],
      11: ['Zellbiologie vertieft', 'Enzyme', 'Stoffwechsel', 'Fotosynthese molekular', 'Zellatmung molekular', 'Ökologie: Populationen'],
      12: ['Aufbau der DNA', 'Replikation', 'Proteinbiosynthese', 'Mutationen', 'Die Nervenzelle', 'Aktionspotenzial', 'Synapsen'],
      13: ['Evolution vertieft', 'Humangenetik', 'Gentechnik und Biotechnologie', 'Ethik in der Biologie', 'Abiturvorbereitung Biologie']
    })
  },
  physik: {
    name: 'Physik', farbe: '#3b6fd4', symbol: '⚡',
    klassen: mk('phy', {
      5: ['Was ist Physik?', 'Messen: Länge, Masse, Zeit', 'Temperatur und Thermometer', 'Licht und Schatten', 'Schall und Hören'],
      6: ['Wärme und Wärmeausbreitung', 'Aggregatzustände', 'Spiegel und Reflexion', 'Brechung und Linsen', 'Magnetismus', 'Einfacher Stromkreis', 'Energieformen und Energieumwandlung', 'Mondphasen und Finsternisse', 'Tag, Nacht und Jahreszeiten', 'Schwingungen, Frequenz und Lautstärke'],
      7: ['Kräfte und ihre Wirkung', 'Gewicht, Masse und Dichte', 'Hebel und Drehmoment', 'Einfache Maschinen', 'Druck in Flüssigkeiten und Gasen', 'Auftrieb', 'Geschwindigkeit', 'Reibung', 'Rolle und Flaschenzug'],
      8: ['Elektrische Ladung', 'Stromstärke und Spannung', 'Widerstand und Ohmsches Gesetz', 'Reihen- und Parallelschaltung', 'Elektrische Leistung und Energie', 'Magnetfelder und Elektromagnet', 'Farben und Farbmischung', 'Mikroskop und Fernrohr'],
      9: ['Energie und Energieerhaltung', 'Arbeit und Leistung', 'Bewegungen und Beschleunigung', 'Newtonsche Gesetze', 'Induktion und Generator', 'Transformator', 'Wirkungsgrad und Wärmekraftmaschinen'],
      10: ['Kreisbewegung', 'Schwingungen und Wellen', 'Radioaktivität', 'Kernenergie', 'Astronomie und Sonnensystem', 'Optische Geräte', 'Energieversorgung und Energiewende', 'Sterne und ihre Entwicklung'],
      11: ['Mechanik vertieft', 'Impuls und Stöße', 'Gravitation', 'Elektrisches Feld', 'Magnetisches Feld und Lorentzkraft'],
      12: ['Elektromagnetische Induktion', 'Schwingkreis und Wechselstrom', 'Wellenoptik', 'Interferenz und Beugung', 'Quantenphysik: Photoeffekt'],
      13: ['Atomphysik', 'Kern- und Teilchenphysik', 'Spezielle Relativitätstheorie', 'Thermodynamik', 'Abiturvorbereitung Physik']
    })
  },
  chemie: {
    name: 'Chemie', farbe: '#c0562a', symbol: '⚗️',
    klassen: mk('che', {
      5: ['Was ist Chemie?', 'Sicher arbeiten im Labor', 'Stoffe und ihre Eigenschaften', 'Stoffgemische und Trennverfahren'],
      6: ['Reinstoffe und Gemische', 'Luft und Sauerstoff', 'Wasser', 'Verbrennung', 'Aggregatzustände und Teilchenmodell'],
      7: ['Chemische Reaktion', 'Elemente und Verbindungen', 'Atome und Atombau', 'Das Periodensystem', 'Metalle', 'Oxidation und Reduktion', 'Nachweisreaktionen', 'Massenerhaltung', 'Metallgewinnung und Recycling'],
      8: ['Atombindung', 'Ionenbindung', 'Salze', 'Säuren und Laugen', 'Neutralisation und pH-Wert', 'Reaktionsgleichungen', 'Elementfamilien', 'Aktivierungsenergie und Katalysator'],
      9: ['Stoffmenge und Molare Masse', 'Chemisches Rechnen', 'Elektrolyse', 'Batterien und Korrosion', 'Kohlenwasserstoffe', 'Alkohole und Carbonsäuren'],
      10: ['Chemisches Gleichgewicht', 'Reaktionsgeschwindigkeit', 'Organische Chemie', 'Kunststoffe', 'Fette, Kohlenhydrate, Eiweiße', 'Chemie im Alltag und Umwelt', 'Alkane und Alkanole', 'Treibhauseffekt und Klimawandel'],
      11: ['Atommodelle und Orbitale', 'Bindungslehre vertieft', 'Säure-Base-Gleichgewichte', 'Redoxreaktionen vertieft', 'Energetik'],
      12: ['Organische Stoffklassen', 'Reaktionsmechanismen', 'Aromaten', 'Elektrochemie', 'Analytik'],
      13: ['Naturstoffe und Biomoleküle', 'Farbstoffe', 'Polymere', 'Technische Chemie', 'Abiturvorbereitung Chemie']
    })
  },
  erdkunde: {
    name: 'Erdkunde', farbe: '#8a5a2b', symbol: '🌍',
    klassen: mk('erd', {
      5: ['Orientierung: Karte, Atlas und Globus', 'Himmelsrichtungen und Maßstab', 'Unsere Heimat und Deutschland', 'Landschaften in Deutschland', 'Die Kontinente und Ozeane', 'Wetter und Klima'],
      6: ['Europa im Überblick', 'Gebirge und Tiefland', 'Landwirtschaft in Deutschland', 'Städte und Dörfer', 'Mittelmeerraum', 'Nordeuropa'],
      7: ['Klima- und Vegetationszonen', 'Tropischer Regenwald', 'Wüsten und Savannen', 'Polargebiete', 'Afrika', 'Asien'],
      8: ['Aufbau der Erde und Plattentektonik', 'Vulkane und Erdbeben', 'Gesteine und Bodenbildung', 'Wasserkreislauf und Flüsse', 'Nordamerika', 'Südamerika'],
      9: ['Bevölkerung und Verstädterung', 'Entwicklungsländer und Industrieländer', 'Rohstoffe und Energie', 'Industrie und Dienstleistungen', 'Globalisierung', 'Australien und Ozeanien'],
      10: ['Klimawandel', 'Nachhaltigkeit und Umweltschutz', 'Migration', 'Verkehr und Tourismus', 'Naturgefahren und Katastrophen', 'Deutschland und die EU'],
      11: ['Geosphäre vertieft', 'Atmosphäre und Zirkulation', 'Klimazonen vertieft', 'Hydrosphäre und Ozeane', 'Landschaftsökologie'],
      12: ['Stadtgeographie', 'Raumplanung', 'Weltwirtschaft und Handel', 'Ressourcenkonflikte', 'Bevölkerungsentwicklung'],
      13: ['Globale Disparitäten', 'Nachhaltige Entwicklung', 'Geoinformation und Fernerkundung', 'Regionale Fallstudien', 'Abiturvorbereitung Erdkunde']
    })
  }
};
