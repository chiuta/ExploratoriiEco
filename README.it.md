# Exploratorii Eco

[English](README.md) · [Română](README.ro.md) · [Français](README.fr.md) · **Italiano** · [Español](README.es.md) · [Português](README.pt.md) · [Deutsch](README.de.md) · [Magyar](README.hu.md)

**Versione:** 1.2.8 · **Ultimo aggiornamento:** 2026-10-23

Lingue dell'interfaccia: **Română, English, Français, Italiano, Español, Português (PT), Deutsch, Magyar**

L'enciclopedia dell'esploratore sul campo: guida alla natura, diario di osservazioni e strumenti da campo in un unico file HTML.

**Online:** https://chiuta.github.io/ExploratoriiEco/

![Schermata](screenshot.it.png)

## Che cos'è

Una guida completa per esplorare la natura, in 20 sezioni (§0–§19): classificazione della vita, segni e tracce, canti e richiami, biomi della Romania, metodi di osservazione, flora e fauna da campo, attrezzatura, calcolatori, procedure da campo, diario e citizen science, etica (Leave No Trace), distintivi, emergenze, aree protette, test di conoscenze e glossario A–Z. Il contenuto è educativo; per le decisioni importanti (accesso alle aree protette, specie rigorosamente protette, emergenze) l'applicazione rimanda ad ANMAP e Salvamont România come fonti autorevoli.

## Funzioni

- Navigazione per sezioni dal menu laterale (☰ su mobile); tema **Notte / Giorno** (pulsanti ☾ / ☀; alla prima apertura segue la preferenza del sistema).
- **Ricerca nella guida** (menu laterale): cerca nel testo integrale delle 20 sezioni, senza diacritici (ad es. «bufnita», «Shannon»); filtra il menu, Invio apre la sezione più pertinente, Esc svuota il campo.
- **Calcolatori e strumenti** (§11): indice di biodiversità di Shannon–Wiener, locatore Maidenhead, azimut e distanza verso un bersaglio (con bussola live, se il dispositivo lo consente), raffreddamento dell'aria con la quota, impronta di carbonio di uno spostamento, sequestro di carbonio per gli alberi. I calcoli si fanno in locale, nella pagina.
- **Allenatore di richiami** (§4): toni sintetizzati (non registrazioni reali) per riconoscere alcuni schemi, più la lettura ad alta voce del nome onomatopeico tramite la sintesi vocale del browser, se disponibile.
- **Diario di campo** (§13): aggiungi osservazioni (specie, numero, data, ora, luogo, comportamento, note), con compilazione del luogo da GPS su richiesta; esportazione e importazione `.json`, condivisione come file. Il contatore mostra «non esportato» fino all'esportazione, e uscendo dalla pagina con osservazioni non esportate il browser chiede conferma (il diario non viene conservato nel browser a meno che tu non spunti «Conserva il diario su questo dispositivo»).
- **Test di conoscenze** (§18): modalità casuale o per categorie, punteggio, progressi per categoria con esportazione/importazione.
- **Identità locale e certificati**: generazione di una chiave ECDSA P-256 nel browser, certificato autofirmato delle categorie padroneggiate (almeno l'80% di risposte corrette e 5 domande per categoria), verifica, «testimone», revoca. Non è un diploma ufficiale.
- **Glossario A–Z** con ricerca e note personali (esportazione/importazione).
- Distintivi calcolati dal diario e dal test di conoscenze, finché la pagina è aperta.
- **Stampa la sezione corrente**, modalità a schermo intero per il test, pulsante «Segnala un errore» (apre il modulo delle issue di GitHub).
- **Verifica l'integrità del file**: su richiesta, calcola lo SHA-256 del file servito.

## Novità (v1.1.0, 14 ottobre 2026)

Nessuna nuova funzione di apprendimento in questa versione: **la ripetizione dilazionata esiste già** (sezione Test di conoscenze, SM-2 con esportazione/importazione) e non è stata duplicata. L'aggiunta è il kit qui sotto; la copia di sicurezza include **il diario di osservazioni** se lo hai conservato sul dispositivo (`exploratorii-eco-jurnal-v1`).

### Trasparenza e copia di sicurezza (fff-kit)

Un clic (o Invio) sulla versione mostrata (`v 1.1.0 · 2026-10-14`) apre la finestra «Trasparenza»: gli host di rete dichiarati (0 richieste esterne), le chiavi di archiviazione locale con le dimensioni, le API usate, la dimensione e lo SHA-256 del file (con un verificatore per un file scaricato) e la **copia di sicurezza** dei dati dell'applicazione in un file `.fff.json` (facoltativamente cifrato con password, AES-GCM 256 / PBKDF2; la password non può essere recuperata), l'importazione con conferma e la cancellazione dei dati dell'applicazione. Il kit (`fff-kit`, moduli: core, label, bundle) è incollato in `index.html`, non effettua richieste di rete e non modifica i dati esistenti; senza di esso l'applicazione funziona allo stesso modo. Il diario può contenere localizzazioni e osservazioni personali: usa «Esporta cifrato» per i file che circolano. I testi del kit sono in 8 lingue (ro, en, fr, it, es, pt, hu, de); **le traduzioni fr/it/es/pt/hu/de sono automatiche e non verificate da madrelingua**. L'interfaccia dell'applicazione resta in romeno.

## Guida all'uso

1. Apri la pagina e scegli una sezione dal menu a sinistra.
2. Per il diario, vai a «§13 Diario & citizen science», compila i campi e premi **+ Aggiungi osservazione**; poi **💾 Esporta (.json)** per conservare i dati.
3. Per riprendere il diario, premi **📂 Importa** e scegli il file esportato in precedenza.
4. Per i calcolatori, vai a «§11 Calcolatori & strumenti»; i pulsanti «📍 Usa la mia posizione» chiedono il permesso di geolocalizzazione del browser.
5. In «§18 Test di conoscenze» scegli una categoria o rispondi direttamente; **💾 Esporta i progressi** e **📂 Importa i progressi** conservano i risultati tra una visita e l'altra.
6. Per un certificato: **🔑 Genera identità**, poi **📜 Genera certificato**; esporta l'identità come riserva.
7. Cambia tema con **☾ Notte / ☀ Giorno**; stampa la sezione corrente con **🖨️ Stampa la sezione corrente**.

## Avvertenza

Contenuto educativo/orientativo. Le sezioni su emergenze, serpenti, zecche, funghi e piante non sostituiscono un corso di primo soccorso, il parere medico o le autorità (112, Salvamont, ANMAP); piante e funghi non si consumano sulla base della guida. L'applicazione mostra una nota in tal senso nel piè di pagina. I «certificati» generati sono prove autofirmate dei tuoi progressi, non diplomi ufficiali.

## Privacy e rete

- **Archiviazione:** l'unico uso di `localStorage` (chiave `exploratoriieco.jurnal-v1`) è la copia facoltativa del diario, attiva solo se spunti «Conserva il diario su questo dispositivo»; nessun sessionStorage né IndexedDB. Il diario (senza la spunta), i punteggi, le note del glossario e l'identità crittografica restano solo in memoria e scompaiono al ricaricamento della pagina, a meno che tu non li esporti.
- **Rete:** la pagina non carica script, font o immagini esterni e non ha statistiche. L'unica richiesta di rete avviene su richiesta dell'utente: il pulsante «Verifica l'integrità del file» rilegge il file dall'indirizzo da cui è servito. I link del piè di pagina (ANMAP, iNaturalist, GBIF, IUCN, Salvamont, fiipregatit.ro, GitHub, TROM) si aprono solo al clic.
- Permessi del browser richiesti solo all'azione: geolocalizzazione (GPS), orientamento/bussola, sintesi vocale, condivisione di file.

## Uso locale / offline

Scarica `index.html` e aprilo in un browser. L'applicazione funziona senza Internet; la verifica dell'integrità può essere bloccata dal browser per i file aperti direttamente dal disco (in tal caso l'applicazione mostra un messaggio).

## Licenza

MIT — vedi il file `LICENSE`. © 2026 Alexandru-Ionuț Chiuță (Alexio). Eventuali librerie di terze parti incluse nel file mantengono le proprie licenze.

## Audit

Audit: 2026-10-10 — verificato con Playwright e axe-core (tutte le 20 sezioni, entrambi i temi); nessun `localStorage`; diario e importazione testati con `<img onerror>` (con escape). Corretti: titoli invisibili nel tema «Giorno» (testo bianco su sfondo chiaro), contrasto, elenco di definizioni non valido nel glossario.

## Cronologia / Changelog

### 1.2.8 — 2026-10-23
- Le chiavi di archiviazione hanno ora il prefisso dell'app (`exploratoriieco.lang`, `exploratoriieco.jurnal-v1`); i dati esistenti (lingua, copia facoltativa del diario) vengono migrati automaticamente all'avvio e le vecchie copie `.fff.json` si possono ancora importare.
- fff-kit 1.2.0: archiviazione senza prefisso corretta
- Le finestre native alert/confirm/prompt sono sostituite da dialoghi FFF.dialog accessibili e tradotti (fff-kit 1.2.0).

### 1.2.6 — 2026-10-22

fff-kit 1.1.4: aree tattili e testo minimo. Aree tattili/testo corretti nell’app.

### 1.2.5 — 2026-10-22

fff-kit 1.1.2: PBKDF2 a 600.000 iterazioni, protezione anti-clickjacking.

### 1.2.4 — 2026-10-22
- Le sette finestre di dialogo bloccanti del browser (avvisi di identità, geolocalizzazione e azzeramento del test, più la conferma) sono sostituite da finestre modali tradotte (8 lingue).
- Accessibilità: esattamente un H1 per pagina (il titolo nascosto visivamente è sempre esposto; il titolo decorativo dell'hero è nascosto agli screen reader); gli otto campi di importazione file hanno un nome annunciato dagli screen reader.
- L'animazione di decodifica del titolo dell'hero dura al massimo 0,7 s in tempo reale (sui dispositivi lenti restava illeggibile) e il titolo ha un contrasto sufficiente (inchiostro scuro) nel tema chiaro.
- Mobile: il testo piccolo (piè di pagina, link di segnalazione, etichette dell'hero, pulsanti del tema) è di almeno 12 px.

### 1.2.3 — 2026-10-22
- Correzione di traduzione: la descrizione (e il nome) nel pannello di trasparenza seguono ora la lingua dell'interfaccia.

### 1.2.2 — 2026-10-22
- Correzione di traduzione: le descrizioni dei canti nell'allenatore di richiami, il titolo della pagina e la cronologia nell'app seguono ora la lingua dell'interfaccia.

- v1.1.0 — 2026-10-14: fff-kit (Trasparenza + copia di sicurezza unificata, incluso il diario). Il contenuto e la ripetizione dilazionata non sono cambiati.

- 1.0.4 — 2026-10-12: la versione e la data dell'ultimo aggiornamento sono mostrate nell'app (contenuto fattuale verificato l'ultima volta il 2026-08-06; la riorganizzazione ANANP → ANMAP riconfermata con una ricerca web l'11.10.2026).
- v1.0.3: **conservazione facoltativa del diario sul dispositivo** (casella in §13, disattivata per impostazione predefinita; `localStorage`, chiave `exploratorii-eco-jurnal-v1`, con avviso per i dispositivi condivisi; deselezionandola si cancella la copia; quando è attiva, l'avviso all'uscita dalla pagina non compare più); **l'importazione del diario salta le osservazioni identiche già presenti** (niente più duplicati alla reimportazione). Hash CSP ricalcolato; axe-core = 0 violazioni a 1280 e 360 px.
- v1.0.2: ricerca in tutta la guida; avviso all'uscita dalla pagina con osservazioni non esportate (+ indicatore «non esportato/esportato» nel diario); il tema iniziale segue `prefers-color-scheme`. Hash CSP ricalcolato; axe-core = 0 violazioni a 1280 e 360 px, in entrambi i temi.
- v1.0.1: il calcolatore di Shannon–Wiener parte con un esempio precompilato (faggio, abete bianco, abete rosso, carpino, acero di monte) e mostra H′ fin dall'inizio.
- La barra delle categorie nell'hero va a capo su mobile (le etichette non si attaccano più); i margini della pagina iniziale sono ridotti a 20 px sugli schermi stretti.
- La barra superiore è un `<header>`, i titoli del piè di pagina sono h2; aggiunta una politica CSP (`connect-src 'self'` per la verifica dell'integrità). axe-core = 0 violazioni a 1280 e 360 px.

## Autore

Alexio — Alexandru-Ionuț Chiuță. Dal piè di pagina l'applicazione rimanda al Centrul STRING (CSPCF). Contatto: alexio@trom.tf

## Riepilogo

Exploratorii Eco è un'enciclopedia del naturalista da campo in lingua romena, in un unico file: 20 sezioni, calcolatori (indice di Shannon–Wiener, locatore Maidenhead, azimut, gradiente termico, carbonio), un diario di campo con esportazione/importazione JSON, un quiz e certificati firmati generati in locale (ECDSA). Non usa alcuna archiviazione del browser (lo stato si perde al ricaricamento se non viene esportato) e non effettua richieste di rete, tranne una verifica facoltativa dell'integrità del file. Rilasciata con licenza MIT.
