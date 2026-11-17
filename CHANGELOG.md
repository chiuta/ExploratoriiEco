# Jurnal de modificări — Exploratorii Eco

Format: [SemVer](https://semver.org/lang/ro/) MAJOR.MINOR.PATCH.

## 2.1.2 — 2026-11-17

- Compatibilitate cu browsere mai vechi (Chrome/Edge 55+, Firefox 52+, Safari 10.1+/iOS 10.3+): kitul 1.8.0 aduce stratul de compatibilitate (rezerve pentru API-urile care lipsesc în motoarele vechi), iar sintaxa JavaScript mai nouă decât ES2017 a fost înlocuită cu forme echivalente acolo unde exista; expresiile regulate noi și `import()` trec prin rezerve. Fără modificări de funcționalitate intenționate. Verificat cu parser ES2017 și într-un motor vechi simulat, nu pe dispozitive reale.

## 2.1.1 — 2026-11-15

- Nou: butoane de distribuire pe rețele sociale (vertical, pe marginea din stânga; fără scripturi externe, doar linkuri deschise la clic); bara de zoom cu lupă și „potrivire ecran” revine pe marginea din dreapta, centrată pe verticală; corectat afișarea suprapusă la zoom mare (panourile cu înălțimi în vh/vw nu mai ies din ecran).

## 2.1.0 — 2026-11-15

- Nou: accesibilitate pe toate ecranele — butonul „Aa” (mărimea textului, contrast ridicat, fără animații, text lizibil, linkuri subliniate, citire cu voce), săgeata „Înapoi sus” și „Sari la conținut”; fereastra se potrivește mereu ecranului; zoom-ul cu lupă și „potrivire ecran” stau acum pe marginea din stânga (fff-kit 1.6.0).

## 2.0.9 — 2026-11-15

- Nou: texturi fractale hiper-detaliate (fff-texturi 1.1.2) — fundalul și suprafețele mari (carduri, panouri, antete, butoane; filele și dialogurile ascunse la încărcare, când se deschid) primesc un material generat local (WebGL2, fără rețea și fără imagini), care se repetă fără cusătură; culorile aplicației rămân ale ei. Se oprește din dialogul „Transparență” sau cu `?notex=1`.

## 2.0.2 — 2026-11-03

Etapa 4: jurnal de teren geolocalizat comun (plicul geo/journal, export GeoJSON/GPX), cu atlas în Arhiva fără frontiere

## 2.0.1 — 2026-11-02 (reîmprospătare kit)

- Nou (kit): **Sincronizare între dispozitive** (`FFF.sync`) — în dialogul «Transparență» (clic pe versiune → Copie de siguranță): conectezi două dispozitive direct (WebRTC, cod/QR, fără server și fără cont) și își schimbă datele aplicației; cea mai recentă valoare câștigă, secretele (chei API, parole) nu se trimit, ștergerile nu se propagă. Aplicarea trece prin importul kitului (confirmare, chei permise, rollback).
- Nou (kit): **Istoric local — «mașina timpului»** (`FFF.history`) — instantanee automate ale datelor (IndexedDB, fără secrete), diferență față de starea curentă și restaurare reversibilă; «Șterge datele aplicației» șterge și istoricul.
- Module adăugate: `qr`, `p2p`, `sync`, `history` (+~140 KB). Versiunea aplicației nu se schimbă.

## 2.0.1 — 2026-10-27 (anterior: v2.0.0)

Stare: stabil · Offline: complet

Aplicat după mini-recenzia din 2026-10-27.

### Adăugat / modificat
- Descrierea (meta `description`, `fff-info`, traducerile din panoul de transparență în 8 limbi, `manifest.webmanifest`, `app.json`) nu mai este generică: enumeră conținutul real, numărat din date (14 taxoni, 14 urme, 12 chemări, 12 plante, 18 animale, 13 parcuri, 70 termeni de glosar, 65 întrebări de quiz) și cele 9 calculatoare/unelte din §11.
- README (8 limbi): secțiunea „Ce conține, concret (din codul real)” și secțiunea „Vezi și”.
- Notă „Vezi și” în ghid (secțiunea de deschidere) cu linkuri către FieldObserver și VietAR, tradusă în cele 8 limbi prin mecanismul `LX` existent; linkurile se deschid doar la clic, într-o filă nouă (ghidul nu face cereri de rețea).
- README: linii „Stare: stabil”, „Offline: complet”; istoric.
- Versiune 2.0.1 (index.html, sw.js, app.json, README, teste; hash CSP + `data-fff-hash`/`sha256` recalculate). Nicio modificare de logică.

### Neimplementat
- Nu s-au adăugat funcții noi: recenzia cerea doar o descriere mai concretă și legături către FieldObserver/VietAR.
- Descrierea VietAR din notă se bazează pe ce declară depozitul acelei aplicații (recunoaștere din fotografie/cameră/sunet); nu am verificat funcționarea ei din acest depozit.

## 2.0.0
- Versiunea anterioară (vezi istoricul din README).
