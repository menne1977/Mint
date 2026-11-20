// Prüft alle Kapitel: vollständig, IDs passen zum Inhaltsverzeichnis, Antworten gültig.
const fs = require('fs'), path = require('path');
const root = path.join(__dirname, '..');
global.window = global;
global.Intl = Intl;
require(path.join(root, 'daten/inhaltsverzeichnis.js'));
require(path.join(root, 'daten/helfer.js'));
for (const f of fs.readdirSync(path.join(root, 'daten')).filter(f => f.startsWith('kapitel-')))
  require(path.join(root, 'daten', f));
const K = window.KAPITEL, B = window.BUECHER;
const ids = new Map();
for (const b in B) for (const k in B[b].klassen) B[b].klassen[k].forEach(c => ids.set(c.id, b + ' ' + k));
let fehler = 0, n = 0;
for (const id in K) {
  const c = K[id];
  if (!ids.has(id)) { console.log('Nicht im Verzeichnis:', id); fehler++; }
  if (!c.einfach || !c.ausfuehrlich || !c.merke || !c.bild) { console.log('Unvollständig:', id); fehler++; }
  if (!c.folien || c.folien.length < 3) { console.log('Zu wenig Folien:', id); fehler++; }
  if (!c.uebungen || c.uebungen.length < 4) { console.log('Zu wenig Übungen:', id); fehler++; }
  (c.uebungen || []).forEach((u, i) => {
    if (u.optionen.length < 2 || u.richtig >= u.optionen.length) { console.log('Übung fehlerhaft:', id, i + 1); fehler++; }
    if (new Set(u.optionen).size !== u.optionen.length) { console.log('Doppelte Antwort:', id, i + 1); fehler++; }
  });
  n++;
}
const proFach = {};
for (const [id, wo] of ids) { const f = wo.split(' ')[0]; proFach[f] = proFach[f] || [0, 0]; proFach[f][1]++; if (K[id]) proFach[f][0]++; }
console.log('Fertig:', n, 'von', ids.size, JSON.stringify(proFach), fehler ? fehler + ' Fehler' : 'keine Fehler');
process.exit(fehler ? 1 : 0);
