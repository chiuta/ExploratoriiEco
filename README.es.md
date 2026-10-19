# Exploratorii Eco

[English](README.md) · [Română](README.ro.md) · [Français](README.fr.md) · [Italiano](README.it.md) · **Español** · [Português](README.pt.md) · [Deutsch](README.de.md) · [Magyar](README.hu.md)

**Versión:** 1.1.0 · **Última actualización:** 2026-10-14

La enciclopedia del explorador de campo: guía de la naturaleza, diario de observaciones y herramientas de campo en un solo archivo HTML.

**En línea:** https://chiuta.github.io/ExploratoriiEco/

![Captura de pantalla](screenshot.png)

## Qué es

Una guía completa para explorar la naturaleza, en 20 secciones (§0–§19): clasificación de la vida, señales y huellas, cantos y reclamos, biomas de Rumanía, métodos de observación, flora y fauna de campo, equipamiento, calculadoras, procedimientos de campo, diario y ciencia ciudadana, ética (Leave No Trace), insignias, emergencias, áreas protegidas, test de conocimientos y glosario A–Z. El contenido es educativo; para decisiones importantes (acceso a áreas protegidas, especies estrictamente protegidas, emergencias) la aplicación remite a ANMAP y Salvamont România como fuentes de referencia.

## Funciones

- Navegación por secciones desde el menú lateral (☰ en móvil); tema **Noche / Día** (botones ☾ / ☀; en la primera apertura sigue la preferencia del sistema).
- **Búsqueda en la guía** (menú lateral): busca en el texto completo de las 20 secciones, sin diacríticos (p. ej., «bufnita», «Shannon»); filtra el menú, Intro abre la sección más relevante, Esc vacía el campo.
- **Calculadoras y herramientas** (§11): índice de biodiversidad de Shannon–Wiener, locator Maidenhead, acimut y distancia hasta un objetivo (con brújula en vivo, si el dispositivo lo permite), enfriamiento del aire con la altitud, huella de carbono de un desplazamiento, secuestro de carbono por los árboles. Los cálculos se hacen localmente, en la página.
- **Entrenador de reclamos** (§4): tonos sintetizados (no grabaciones reales) para reconocer ciertos patrones, además de la lectura en voz alta del nombre onomatopéyico mediante la síntesis de voz del navegador, si está disponible.
- **Diario de campo** (§13): añades observaciones (especie, número, fecha, hora, lugar, comportamiento, notas), con el lugar rellenado desde el GPS a petición; exportación e importación `.json`, uso compartido como archivo. El contador muestra «sin exportar» hasta la exportación, y al salir de la página con observaciones sin exportar el navegador pide confirmación (el diario no se conserva en el navegador a menos que marques «Conservar el diario en este dispositivo»).
- **Test de conocimientos** (§18): modo aleatorio o por categorías, puntuación, progreso por categoría con exportación/importación.
- **Identidad local y certificados**: generación de una clave ECDSA P-256 en el navegador, certificado autofirmado de las categorías dominadas (mínimo 80 % de aciertos y 5 preguntas por categoría), verificación, «testigo», revocación. No es un diploma oficial.
- **Glosario A–Z** con búsqueda y notas propias (exportación/importación).
- Insignias calculadas a partir del diario y del test de conocimientos, mientras la página está abierta.
- **Imprimir la sección actual**, modo de pantalla completa para el test, botón «Informar de un error» (abre el formulario de issues de GitHub).
- **Comprobar la integridad del archivo**: a petición, calcula el SHA-256 del archivo servido.

## Novedades (v1.1.0, 14 de octubre de 2026)

Sin nuevas funciones de aprendizaje en esta versión: **la repetición espaciada ya existe** (sección Test de conocimientos, SM-2 con exportación/importación) y no se duplicó. La novedad es el kit de abajo; la copia de seguridad incluye **el diario de observaciones** si lo conservaste en el dispositivo (`exploratorii-eco-jurnal-v1`).

### Transparencia y copia de seguridad (fff-kit)

Un clic (o Intro) en la versión mostrada (`v 1.1.0 · 2026-10-14`) abre la ventana «Transparencia»: los hosts de red declarados (0 peticiones externas), las claves de almacenamiento local con sus tamaños, las API usadas, el tamaño y el SHA-256 del archivo (con un verificador para un archivo descargado) y la **copia de seguridad** de los datos de la aplicación en un archivo `.fff.json` (opcionalmente cifrado con contraseña, AES-GCM 256 / PBKDF2; la contraseña no se puede recuperar), la importación con confirmación y el borrado de los datos de la aplicación. El kit (`fff-kit`, módulos: core, label, bundle) está pegado en `index.html`, no realiza peticiones de red y no cambia los datos existentes; sin él la aplicación funciona igual. El diario puede contener ubicaciones y observaciones personales: usa «Exportar cifrado» para los archivos que circulen. Los textos del kit están en 8 idiomas (ro, en, fr, it, es, pt, hu, de); **las traducciones fr/it/es/pt/hu/de son automáticas y no están verificadas por hablantes nativos**. La interfaz de la propia aplicación sigue en rumano.

## Manual de uso

1. Abre la página y elige una sección en el menú de la izquierda.
2. Para el diario, ve a «§13 Diario & ciencia ciudadana», rellena los campos y pulsa **+ Añadir observación**; después **💾 Exportar (.json)** para conservar los datos.
3. Para retomar el diario, pulsa **📂 Importar** y elige el archivo exportado antes.
4. Para las calculadoras, ve a «§11 Calculadoras & herramientas»; los botones «📍 Usar mi ubicación» piden el permiso de ubicación del navegador.
5. En «§18 Test de conocimientos» elige una categoría o responde directamente; **💾 Exportar el progreso** e **📂 Importar el progreso** conservan los resultados entre visitas.
6. Para un certificado: **🔑 Generar identidad**, luego **📜 Generar certificado**; exporta la identidad como respaldo.
7. Cambia el tema con **☾ Noche / ☀ Día**; imprime la sección actual con **🖨️ Imprimir la sección actual**.

## Advertencia

Contenido educativo/orientativo. Las secciones sobre emergencias, serpientes, garrapatas, hongos y plantas no sustituyen un curso de primeros auxilios, el consejo médico ni a las autoridades (112, Salvamont, ANMAP); las plantas y los hongos no se consumen basándose en la guía. La aplicación muestra una nota en ese sentido en el pie de página. Los «certificados» generados son pruebas autofirmadas de tu propio progreso, no diplomas oficiales.

## Privacidad y red

- **Almacenamiento:** el único uso de `localStorage` (clave `exploratorii-eco-jurnal-v1`) es la copia opcional del diario, activa solo si marcas «Conservar el diario en este dispositivo»; sin sessionStorage ni IndexedDB. El diario (sin la marca), las puntuaciones, las notas del glosario y la identidad criptográfica permanecen solo en memoria y desaparecen al recargar la página, salvo que los exportes.
- **Red:** la página no carga scripts, fuentes ni imágenes externos y no tiene analítica. La única petición de red se hace a petición del usuario: el botón «Comprobar la integridad del archivo» vuelve a leer el archivo desde la dirección desde la que se sirve. Los enlaces del pie de página (ANMAP, iNaturalist, GBIF, IUCN, Salvamont, fiipregatit.ro, GitHub, TROM) se abren solo al hacer clic.
- Permisos del navegador solicitados solo al actuar: ubicación (GPS), orientación/brújula, síntesis de voz, compartir archivos.

## Uso local / sin conexión

Descarga `index.html` y ábrelo en un navegador. La aplicación funciona sin internet; la comprobación de integridad puede ser bloqueada por el navegador para archivos abiertos directamente desde el disco (la aplicación muestra un mensaje en ese caso).

## Licencia

MIT — consulta el archivo `LICENSE`. © 2026 Alexandru-Ionuț Chiuță (Alexio). Las eventuales bibliotecas de terceros incluidas en el archivo conservan sus propias licencias.

## Auditoría

Auditoría: 2026-10-10 — verificado con Playwright y axe-core (las 20 secciones, ambos temas); sin `localStorage`; el diario y la importación probados con `<img onerror>` (escapado). Corregidos: títulos invisibles en el tema «Día» (texto blanco sobre fondo claro), contraste, lista de definiciones no válida en el glosario.

## Historial / Changelog
- v1.1.0 — 2026-10-14: fff-kit (Transparencia + copia de seguridad unificada, incluido el diario). El contenido y la repetición espaciada no cambiaron.

- 1.0.4 — 2026-10-12: la versión y la fecha de la última actualización se muestran en la aplicación (contenido factual verificado por última vez el 2026-08-06; la reorganización ANANP → ANMAP reconfirmada mediante búsqueda web el 11.10.2026).
- v1.0.3: **conservación opcional del diario en el dispositivo** (casilla en §13, desactivada por defecto; `localStorage`, clave `exploratorii-eco-jurnal-v1`, con aviso para dispositivos compartidos; desmarcarla borra la copia; cuando está activa, el aviso al salir de la página ya no aparece); **la importación del diario omite las observaciones idénticas ya presentes** (ya no se duplican al reimportar). Hash CSP recalculado; axe-core = 0 violaciones a 1280 y 360 px.
- v1.0.2: búsqueda en toda la guía; aviso al salir de la página con observaciones sin exportar (+ indicador «sin exportar/exportado» en el diario); el tema inicial sigue `prefers-color-scheme`. Hash CSP recalculado; axe-core = 0 violaciones a 1280 y 360 px, en ambos temas.
- v1.0.1: la calculadora de Shannon–Wiener arranca con un ejemplo precargado (haya, abeto, picea, carpe, arce blanco) y muestra H′ desde el principio.
- La barra de categorías del hero se ajusta en móvil (las etiquetas ya no se pegan); los márgenes de la página de inicio se reducen a 20 px en pantallas estrechas.
- La barra superior es un `<header>`, los títulos del pie de página son h2; se añadió una política CSP (`connect-src 'self'` para la comprobación de integridad). axe-core = 0 violaciones a 1280 y 360 px.

## Autor

Alexio — Alexandru-Ionuț Chiuță. Desde el pie de página, la aplicación remite al Centrul STRING (CSPCF). Contacto: alexio@trom.tf

## Resumen

Exploratorii Eco es una enciclopedia del naturalista de campo en rumano, en un solo archivo: 20 secciones, calculadoras (índice de Shannon–Wiener, locator Maidenhead, acimut, gradiente térmico, carbono), un diario de campo con exportación/importación JSON, un test y certificados firmados generados localmente (ECDSA). No usa almacenamiento del navegador (el estado se pierde al recargar salvo que se exporte) y no realiza peticiones de red, salvo una comprobación opcional de la integridad del archivo. Licenciada bajo MIT.
