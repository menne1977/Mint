(function () {
  'use strict';
  var el = document.getElementById('inhalt');
  var kopfTitel = document.getElementById('titel');
  var zurueck = document.getElementById('zurueck');
  var verlauf = [];

  function speicher(key, wert) {
    try { if (wert === undefined) return JSON.parse(localStorage.getItem(key) || 'null'); localStorage.setItem(key, JSON.stringify(wert)); } catch (e) { return null; }
  }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function mischen(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  function setzeFarbe(f) { document.documentElement.style.setProperty('--farbe', f || '#2e8b57'); }

  function zeige(ansicht, titel, farbe) {
    verlauf.push({ ansicht: ansicht, titel: titel, farbe: farbe });
    render();
  }
  function render() {
    var v = verlauf[verlauf.length - 1];
    setzeFarbe(v.farbe);
    kopfTitel.textContent = v.titel;
    zurueck.hidden = verlauf.length < 2;
    el.innerHTML = '';
    v.ansicht(el);
    window.scrollTo(0, 0);
  }
  zurueck.onclick = function () { verlauf.pop(); render(); };

  function fertigAnzahl(prefix) {
    var g = speicher('gelesen') || {};
    return Object.keys(g).filter(function (k) { return k.indexOf(prefix) === 0; }).length;
  }

  // ---------- Startseite ----------
  function start(root) {
    root.innerHTML = '<h2>Welches Buch möchtest du lesen?</h2><div class="raster"></div>';
    var r = root.querySelector('.raster');
    Object.keys(window.BUECHER).forEach(function (key) {
      var b = window.BUECHER[key];
      var b1 = document.createElement('button');
      b1.className = 'karte'; b1.style.borderLeftColor = b.farbe;
      b1.innerHTML = '<span class="gross">' + b.symbol + '</span><b>' + b.name + '</b><br><small>Klasse 5 bis 13</small>';
      b1.onclick = function () { zeige(function (x) { buch(x, key); }, b.name, b.farbe); };
      r.appendChild(b1);
    });
  }

  // ---------- Klassen eines Buches ----------
  function buch(root, key) {
    var b = window.BUECHER[key];
    root.innerHTML = '<h2>' + b.name + ': Klasse wählen</h2><div class="raster"></div>';
    var r = root.querySelector('.raster');
    Object.keys(b.klassen).forEach(function (k) {
      var n = b.klassen[k].length;
      var f = fertigAnzahl(key.slice(0, 3) + k + '-');
      var c = document.createElement('button');
      c.className = 'karte'; c.style.borderLeftColor = b.farbe;
      c.innerHTML = '<span class="gross">' + k + '</span>Klasse ' + k + '<br><small>' + n + ' Kapitel · ' + f + ' gelesen</small>';
      c.onclick = function () { zeige(function (x) { klasse(x, key, k); }, b.name + ' · Klasse ' + k, b.farbe); };
      r.appendChild(c);
    });
  }

  // ---------- Kapitel einer Klasse ----------
  function klasse(root, key, k) {
    var b = window.BUECHER[key];
    root.innerHTML = '<h2>Klasse ' + k + '</h2><div></div>';
    var box = root.lastChild;
    var g = speicher('gelesen') || {};
    b.klassen[k].forEach(function (kap, i) {
      var da = !!window.KAPITEL[kap.id];
      var c = document.createElement('button');
      c.className = 'karte'; c.style.borderLeftColor = b.farbe; c.style.marginBottom = '10px';
      c.innerHTML = '<b>' + (i + 1) + '. ' + esc(kap.titel) + '</b> ' + (g[kap.id] ? '<span class="fertig">✓</span>' : '') + '<br><small class="' + (da ? '' : 'bald') + '">' + (da ? 'Lesen · Folien · Übungen' : 'Kommt bald') + '</small>';
      c.onclick = function () {
        zeige(function (x) { kapitel(x, kap, b); }, kap.titel, b.farbe);
      };
      box.appendChild(c);
    });
  }

  // ---------- Kapitel ----------
  function kapitel(root, kap, b) {
    var d = window.KAPITEL[kap.id];
    if (!d) {
      root.innerHTML = '<div class="box"><h2>' + esc(kap.titel) + '</h2><p>Dieses Kapitel wird gerade geschrieben. Es kommt bald.</p></div>';
      return;
    }
    var g = speicher('gelesen') || {}; g[kap.id] = true; speicher('gelesen', g);
    var tabs = [
      ['einfach', 'Einfach'], ['ausfuehrlich', 'Ausführlich'], ['folien', 'Folien'], ['uebungen', 'Übungen']
    ];
    root.innerHTML = '<h2>' + esc(kap.titel) + '</h2>' +
      (d.bild ? '<figure class="bild">' + d.bild + (d.bildtext ? '<figcaption>' + esc(d.bildtext) + '</figcaption>' : '') + '</figure>' : '') +
      '<div class="reiter"></div><div id="tab"></div>';
    var rt = root.querySelector('.reiter'), tab = root.querySelector('#tab');
    tabs.forEach(function (t) {
      var bt = document.createElement('button');
      bt.textContent = t[1];
      bt.onclick = function () {
        Array.prototype.forEach.call(rt.children, function (x) { x.classList.remove('aktiv'); });
        bt.classList.add('aktiv');
        tab.innerHTML = '';
        ({ einfach: tEinfach, ausfuehrlich: tAusf, folien: tFolien, uebungen: tUeb })[t[0]](tab, d);
      };
      rt.appendChild(bt);
    });
    rt.firstChild.click();
  }
  function tEinfach(t, d) {
    t.innerHTML = '<div class="box">' + d.einfach + '</div>' + (d.merke ? '<div class="box merke"><b>Merke:</b> ' + d.merke + '</div>' : '');
  }
  function tAusf(t, d) { t.innerHTML = '<div class="box">' + d.ausfuehrlich + '</div>'; }

  function tFolien(t, d) {
    var i = 0, f = d.folien || [];
    t.innerHTML = '<div class="folie"></div><div class="folien-steuerung"><button class="knopf" id="z">← Zurück</button><span id="n"></span><button class="knopf" id="w">Weiter →</button></div>';
    var fo = t.querySelector('.folie'), z = t.querySelector('#z'), w = t.querySelector('#w'), n = t.querySelector('#n');
    function zeigen() {
      var s = f[i];
      fo.innerHTML = (s.symbol ? '<div class="symbol">' + s.symbol + '</div>' : '') + '<h3>' + esc(s.titel) + '</h3><p>' + s.text + '</p>';
      n.textContent = (i + 1) + ' / ' + f.length;
      z.disabled = i === 0; w.disabled = i === f.length - 1;
    }
    z.onclick = function () { i--; zeigen(); }; w.onclick = function () { i++; zeigen(); };
    zeigen();
  }

  function tUeb(t, d) {
    var aufg = mischen(d.uebungen || []), punkte = 0, beantwortet = 0;
    t.innerHTML = '<div id="liste"></div><div class="box" id="stand"></div><button class="knopf" id="neu">Neu mischen</button>';
    var liste = t.querySelector('#liste'), stand = t.querySelector('#stand');
    function aktualisiere() { stand.textContent = 'Richtig: ' + punkte + ' von ' + beantwortet + ' beantworteten Fragen (' + aufg.length + ' insgesamt)'; }
    aufg.forEach(function (a, ai) {
      var box = document.createElement('div'); box.className = 'box';
      box.innerHTML = '<div class="frage">' + (ai + 1) + '. ' + esc(a.frage) + '</div>';
      var opts = mischen(a.optionen.map(function (o, idx) { return { o: o, r: idx === a.richtig }; }));
      var fertig = false;
      opts.forEach(function (op) {
        var bt = document.createElement('button'); bt.className = 'antwort'; bt.textContent = op.o;
        bt.onclick = function () {
          if (fertig) return; fertig = true; beantwortet++;
          if (op.r) { punkte++; bt.classList.add('richtig'); } else {
            bt.classList.add('falsch');
            Array.prototype.forEach.call(box.querySelectorAll('.antwort'), function (x, xi) { if (opts[xi].r) x.classList.add('richtig'); });
          }
          var rm = document.createElement('div'); rm.className = 'rueckmeldung';
          rm.textContent = (op.r ? 'Richtig! ' : 'Leider falsch. ') + (a.erklaerung || '');
          box.appendChild(rm); aktualisiere();
        };
        box.appendChild(bt);
      });
      liste.appendChild(box);
    });
    t.querySelector('#neu').onclick = function () { tUeb(t, d); };
    aktualisiere();
  }

  // ---------- Suche ----------
  function suche(root) {
    root.innerHTML = '<input type="search" id="q" placeholder="Thema suchen, z. B. Herz, Licht, Säure" autofocus><div id="erg" style="margin-top:12px"></div>';
    var q = root.querySelector('#q'), erg = root.querySelector('#erg');
    q.oninput = function () {
      var s = q.value.trim().toLowerCase(); erg.innerHTML = '';
      if (s.length < 2) return;
      Object.keys(window.BUECHER).forEach(function (key) {
        var b = window.BUECHER[key];
        Object.keys(b.klassen).forEach(function (k) {
          b.klassen[k].forEach(function (kap) {
            if (kap.titel.toLowerCase().indexOf(s) < 0) return;
            var c = document.createElement('button'); c.className = 'karte'; c.style.borderLeftColor = b.farbe; c.style.marginBottom = '8px';
            c.innerHTML = '<b>' + esc(kap.titel) + '</b><br><small>' + b.name + ' · Klasse ' + k + '</small>';
            c.onclick = function () { zeige(function (x) { kapitel(x, kap, b); }, kap.titel, b.farbe); };
            erg.appendChild(c);
          });
        });
      });
    };
  }
  document.getElementById('suche-knopf').onclick = function () { zeige(suche, 'Suche', '#555'); };

  zeige(start, 'Naturwissenschaften', '#2e8b57');
})();
