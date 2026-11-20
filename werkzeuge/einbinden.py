#!/usr/bin/env python3
"""Bindet alle daten/kapitel-*.js in index.html und sw.js ein und erhöht die Cache-Version."""
import glob, os, re

os.chdir(os.path.join(os.path.dirname(os.path.abspath(__file__)), '..'))
reihenfolge = {'bio': 0, 'phy': 1, 'che': 2, 'erd': 3}

def schluessel(p):
    m = re.search(r'kapitel-([a-z]+)(\d+)\.js$', p)
    if not m:
        return (99, p)
    return (int(m.group(2)), reihenfolge.get(m.group(1), 9))

dateien = sorted(glob.glob('daten/kapitel-*.js'), key=schluessel)
zeich = ['daten/zeichnungen.js'] + sorted(glob.glob('daten/zeichnungen-*.js'))
alle = ['daten/inhaltsverzeichnis.js', 'daten/helfer.js'] + zeich + dateien

html = open('index.html', encoding='utf-8').read()
tags = '\n'.join('<script src="%s"></script>' % d for d in alle)
html = re.sub(r'<!-- DATEN -->.*?<!-- /DATEN -->|(<script src="daten/[^"]+"></script>\n?)+',
              '<!-- DATEN -->\n' + tags + '\n<!-- /DATEN -->\n', html, count=1, flags=re.S)
open('index.html', 'w', encoding='utf-8').write(html)

sw = open('sw.js', encoding='utf-8').read()
liste = ',\n  '.join("'%s'" % d for d in ['./', 'index.html', 'style.css', 'app.js', 'manifest.json'] + alle +
                     ['icons/icon.svg', 'icons/icon-192.png', 'icons/icon-512.png'])
sw = re.sub(r'var DATEIEN = \[.*?\];', 'var DATEIEN = [\n  ' + liste + '\n];', sw, flags=re.S)
sw = re.sub(r"schulbuch-v(\d+)", lambda m: 'schulbuch-v%d' % (int(m.group(1)) + 1), sw, count=1)
open('sw.js', 'w', encoding='utf-8').write(sw)
print(len(dateien), 'Kapiteldateien eingebunden')
