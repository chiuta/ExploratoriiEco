# Exploratorii Eco

[English](README.md) · [Română](README.ro.md) · **Français** · [Italiano](README.it.md) · [Español](README.es.md) · [Português](README.pt.md) · [Deutsch](README.de.md) · [Magyar](README.hu.md)

**Version :** 1.2.0 · **Dernière mise à jour :** 2026-10-19

Langues de l'interface : **Română, English, Français, Italiano, Español, Português (PT), Deutsch, Magyar**

L'encyclopédie de l'explorateur de terrain : guide de la nature, carnet d'observations et outils de terrain dans un seul fichier HTML.

**En ligne :** https://chiuta.github.io/ExploratoriiEco/

![Capture d'écran](screenshot.png)

## De quoi s'agit-il

Un guide complet pour explorer la nature, en 20 sections (§0–§19) : classification du vivant, signes et traces, chants et cris, biomes de Roumanie, méthodes d'observation, flore et faune de terrain, équipement, calculateurs, procédures de terrain, carnet et sciences participatives, éthique (Leave No Trace), badges, urgences, aires protégées, test de connaissances et glossaire A–Z. Le contenu est éducatif ; pour les décisions importantes (accès aux aires protégées, espèces strictement protégées, urgences), l'application renvoie à l'ANMAP et à Salvamont România comme sources faisant autorité.

## Fonctionnalités

- Navigation par section depuis le menu latéral (☰ sur mobile) ; thème **Nuit / Jour** (boutons ☾ / ☀ ; à la première ouverture, il suit la préférence du système).
- **Recherche dans le guide** (menu latéral) : cherche dans le texte intégral des 20 sections, sans diacritiques (p. ex. « bufnita », « Shannon ») ; filtre le menu, Entrée ouvre la section la plus pertinente, Échap vide le champ.
- **Calculateurs et outils** (§11) : indice de biodiversité de Shannon–Wiener, locator Maidenhead, azimut et distance vers une cible (avec boussole en direct, si l'appareil le permet), refroidissement de l'air avec l'altitude, empreinte carbone d'un déplacement, séquestration de carbone par les arbres. Les calculs se font localement, dans la page.
- **Entraîneur aux cris et chants** (§4) : tons synthétisés (et non des enregistrements réels) pour reconnaître certains motifs, ainsi que la lecture à voix haute du nom onomatopéique via la synthèse vocale du navigateur, si elle est disponible.
- **Carnet de terrain** (§13) : vous ajoutez des observations (espèce, nombre, date, heure, lieu, comportement, notes), avec complétion du lieu par GPS sur demande ; export et import `.json`, partage sous forme de fichier. Le compteur indique « non exporté » jusqu'à l'export, et lorsque vous quittez la page avec des observations non exportées, le navigateur demande une confirmation (le carnet n'est conservé dans le navigateur que si vous cochez « Conserver le carnet sur cet appareil »).
- **Test de connaissances** (§18) : mode aléatoire ou par catégorie, score, progression par catégorie avec export/import.
- **Identité locale et certificats** : génération d'une clé ECDSA P-256 dans le navigateur, certificat auto-signé des catégories maîtrisées (au moins 80 % de réponses correctes et 5 questions par catégorie), vérification, « témoin », révocation. Ce n'est pas un diplôme officiel.
- **Glossaire A–Z** avec recherche et notes personnelles (export/import).
- Badges calculés à partir du carnet et du test de connaissances, tant que la page est ouverte.
- **Imprimer la section courante**, mode plein écran pour le test, bouton « Signaler une erreur » (ouvre le formulaire d'issues GitHub).
- **Vérifier l'intégrité du fichier** : sur demande, calcule le SHA-256 du fichier servi.

## Nouveautés (v1.1.0, 14 octobre 2026)

Pas de nouvelles fonctions d'apprentissage dans cette version : **la répétition espacée existe déjà** (section Test de connaissances, SM-2 avec export/import) et n'a pas été dupliquée. L'ajout est le kit ci-dessous ; la sauvegarde inclut **le carnet d'observations** si vous l'avez conservé sur l'appareil (`exploratorii-eco-jurnal-v1`).

### Transparence et sauvegarde (fff-kit)

Un clic (ou Entrée) sur la version affichée (`v 1.1.0 · 2026-10-14`) ouvre la fenêtre « Transparence » : les hôtes réseau déclarés (0 requête externe), les clés de stockage local avec leurs tailles, les API utilisées, la taille et le SHA-256 du fichier (avec un vérificateur pour un fichier téléchargé) et la **sauvegarde** des données de l'application dans un fichier `.fff.json` (éventuellement chiffré par mot de passe, AES-GCM 256 / PBKDF2 ; le mot de passe ne peut pas être récupéré), l'import avec confirmation et la suppression des données de l'application. Le kit (`fff-kit`, modules : core, label, bundle) est collé dans `index.html`, ne fait aucune requête réseau et ne modifie pas les données existantes ; sans lui, l'application fonctionne de la même manière. Le carnet peut contenir des localisations et des observations personnelles : utilisez « Exporter chiffré » pour les fichiers qui circulent. Les textes du kit sont en 8 langues (ro, en, fr, it, es, pt, hu, de) ; **les traductions fr/it/es/pt/hu/de sont automatiques et non vérifiées par des locuteurs natifs**. L'interface de l'application elle-même reste en roumain.

## Mode d'emploi

1. Ouvrez la page et choisissez une section dans le menu de gauche.
2. Pour le carnet, allez à « §13 Carnet & sciences participatives », remplissez les champs et appuyez sur **+ Ajouter une observation** ; puis **💾 Exporter (.json)** pour conserver les données.
3. Pour reprendre le carnet, appuyez sur **📂 Importer** et choisissez le fichier exporté précédemment.
4. Pour les calculateurs, allez à « §11 Calculateurs & outils » ; les boutons « 📍 Utiliser ma position » demandent l'autorisation de localisation du navigateur.
5. Dans « §18 Test de connaissances », choisissez une catégorie ou répondez directement ; **💾 Exporter la progression** et **📂 Importer la progression** conservent les résultats entre les visites.
6. Pour un certificat : **🔑 Générer une identité**, puis **📜 Générer un certificat** ; exportez l'identité comme sauvegarde.
7. Changez de thème avec **☾ Nuit / ☀ Jour** ; imprimez la section courante avec **🖨️ Imprimer la section courante**.

## Avertissement

Contenu éducatif/indicatif. Les sections sur les urgences, les serpents, les tiques, les champignons et les plantes ne remplacent ni un cours de premiers secours, ni un avis médical, ni les autorités (112, Salvamont, ANMAP) ; les plantes et les champignons ne se consomment pas sur la base du guide. L'application affiche une note en ce sens dans le pied de page. Les « certificats » générés sont des preuves auto-signées de votre propre progression, non des diplômes officiels.

## Confidentialité et réseau

- **Stockage :** le seul usage de `localStorage` (clé `exploratorii-eco-jurnal-v1`) est la copie facultative du carnet, active uniquement si vous cochez « Conserver le carnet sur cet appareil » ; ni sessionStorage ni IndexedDB. Le carnet (sans la case cochée), les scores, les notes du glossaire et l'identité cryptographique ne résident qu'en mémoire et disparaissent au rechargement de la page, sauf si vous les exportez.
- **Réseau :** la page ne charge aucun script, police ou image externe et n'a pas d'outil d'analyse. La seule requête réseau se fait à la demande de l'utilisateur : le bouton « Vérifier l'intégrité du fichier » relit le fichier à l'adresse d'où il est servi. Les liens du pied de page (ANMAP, iNaturalist, GBIF, IUCN, Salvamont, fiipregatit.ro, GitHub, TROM) ne s'ouvrent qu'au clic.
- Autorisations du navigateur demandées uniquement à l'action : localisation (GPS), orientation/boussole, synthèse vocale, partage de fichiers.

## Utilisation locale / hors ligne

Téléchargez `index.html` et ouvrez-le dans un navigateur. L'application fonctionne sans Internet ; la vérification d'intégrité peut être bloquée par le navigateur pour les fichiers ouverts directement depuis le disque (l'application affiche alors un message).

## Licence

MIT — voir le fichier `LICENSE`. © 2026 Alexandru-Ionuț Chiuță (Alexio). Les éventuelles bibliothèques tierces incluses dans le fichier conservent leurs propres licences.

## Audit

Audit : 2026-10-10 — vérifié avec Playwright et axe-core (les 20 sections, les deux thèmes) ; pas de `localStorage` ; le carnet et l'import testés avec `<img onerror>` (échappé). Corrigés : titres invisibles dans le thème « Jour » (texte blanc sur fond clair), contraste, liste de définitions invalide dans le glossaire.

## Historique / Changelog
- v1.1.0 — 2026-10-14 : fff-kit (Transparence + sauvegarde unifiée, y compris le carnet). Le contenu et la répétition espacée n'ont pas changé.

- 1.0.4 — 2026-10-12 : la version et la date de la dernière mise à jour sont affichées dans l'application (contenu factuel vérifié pour la dernière fois le 2026-08-06 ; la réorganisation ANANP → ANMAP reconfirmée par une recherche web le 11.10.2026).
- v1.0.3 : **conservation facultative du carnet sur l'appareil** (case à cocher dans §13, désactivée par défaut ; `localStorage`, clé `exploratorii-eco-jurnal-v1`, avec avertissement pour les appareils partagés ; la décocher supprime la copie ; lorsqu'elle est active, l'avertissement à la fermeture de la page n'apparaît plus) ; **l'import du carnet ignore les observations identiques déjà présentes** (plus de doublons à la réimportation). Empreinte CSP recalculée ; axe-core = 0 violation à 1280 et 360 px.
- v1.0.2 : recherche dans tout le guide ; avertissement à la fermeture de la page avec des observations non exportées (+ indicateur « non exporté/exporté » dans le carnet) ; le thème initial suit `prefers-color-scheme`. Empreinte CSP recalculée ; axe-core = 0 violation à 1280 et 360 px, dans les deux thèmes.
- v1.0.1 : le calculateur de Shannon–Wiener démarre avec un exemple prérempli (hêtre, sapin, épicéa, charme, érable sycomore) et affiche H′ dès le début.
- La barre de catégories du bandeau d'accueil passe à la ligne sur mobile (les étiquettes ne se collent plus) ; les marges de la page d'accueil sont réduites à 20 px sur les écrans étroits.
- La barre supérieure est un `<header>`, les titres du pied de page sont des h2 ; politique CSP ajoutée (`connect-src 'self'` pour la vérification d'intégrité). axe-core = 0 violation à 1280 et 360 px.

## Auteur

Alexio — Alexandru-Ionuț Chiuță. Depuis le pied de page, l'application renvoie au Centrul STRING (CSPCF). Contact : alexio@trom.tf

## Résumé

Exploratorii Eco est une encyclopédie du naturaliste de terrain en roumain, en un seul fichier : 20 sections, calculateurs (indice de Shannon–Wiener, locator Maidenhead, azimut, gradient thermique, carbone), un carnet de terrain avec export/import JSON, un test, et des certificats signés générés localement (ECDSA). Elle n'utilise aucun stockage du navigateur (l'état est perdu au rechargement sauf export) et ne fait aucune requête réseau, hormis une vérification facultative de l'intégrité du fichier. Sous licence MIT.
