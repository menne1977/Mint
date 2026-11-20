# Schulbuch Naturwissenschaften

Biologie, Physik, Chemie und Erdkunde für Klasse 5 bis 13. Läuft im Browser und offline (installierbar als App).

- `index.html`, `app.js`, `style.css`: die Lese-App
- `daten/inhaltsverzeichnis.js`: alle Kapitel der drei Bücher
- `daten/kapitel-*.js`: die Inhalte (einfach, ausführlich, Folien, Übungen, Bild)

Fertig: alle 216 Kapitel in Biologie, Physik, Chemie und Erdkunde, Klasse 5 bis 13 – jeweils mit beschriftetem Schaubild, einfacher und ausführlicher Erklärung, Merksatz, Folien und Übungen.

Neue Kapiteldateien mit `python3 werkzeuge/einbinden.py` einbinden und mit `node werkzeuge/pruefen.js` prüfen.

## Online stellen

In GitHub unter Settings → Pages den Branch `main` wählen. Danach ist das Buch unter einem Link erreichbar und lässt sich auf Handy und iPad zum Startbildschirm hinzufügen. Nach dem ersten Öffnen funktioniert es offline.

## Zeichnungen

`daten/zeichnungen.js` enthält die Zeichenwerkzeuge, `daten/zeichnungen-bio-a.js`, `-bio-b.js`, `-phy.js`, `-che.js`, `-erd.js` die Schaubilder (SVG) für Klasse 6–13. Klasse 5 hat ihre Zeichnungen direkt in den Kapiteldateien.
