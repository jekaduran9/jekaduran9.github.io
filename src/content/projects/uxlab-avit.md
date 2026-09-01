---
title: "UX Lab AVIT: prototipos que se tocan, no imágenes"
description: "Auditar un design system a la deriva y montar un laboratorio donde cada problema de UX se explora con varios prototipos vivos, anotados y comentables sobre el píxel."
role: "Product Designer · Design Systems & Prototyping"
tools: ["Figma", "Design Tokens", "React", "Tailwind", "Ionic", "Supabase", "Vercel"]
type: "Design System & Prototipado"
image: "/uxlab-avit/cover.avif"
pubDate: 2026-09-01
featured: true
lang: "es"
status: "En curso"
category: "UX/UI"
aspectRatio: "aspect-[4/5]"
heroImage: "/uxlab-avit/hero-lab.avif"
heroAspect: "aspect-[4/3]"
---

AVIT es un producto de inversión del mercado de valores de Costa Rica. Cuando entré, su diseño vivía entero en Figma: pantallas preciosas, una por estado, y un equipo que tardaba semanas en saber si una idea funcionaba. No había un solo prototipo que se pudiera tocar. Esto es lo que construí para cambiar eso —y sigue en obra.

<div class="not-prose my-12 border border-[#E0A4B0]/40 bg-[#E0A4B0]/8 rounded-[10px] p-6 md:p-8 max-w-[56rem] mx-auto">
    <div class="text-[10px] uppercase tracking-[0.3em] text-[#B8697A] font-bold mb-4">Sobre este caso</div>
    <p class="text-sm md:text-base text-gray-700 leading-relaxed" style="margin:0">
        El producto todavía no salió al público y el trabajo continúa, así que esto es un <strong>recorte</strong>, no un caso cerrado. Muestro el método, el sistema de diseño y las piezas que puedo enseñar. Quedan fuera el link al laboratorio, las pantallas del cliente y cualquier cifra de negocio: los porcentajes que aparecen en las capturas están enmascarados a propósito. Lo iré ampliando por capítulos a medida que el proyecto avance.
    </p>
</div>

---

## el contexto

Mi rol es de Product Designer con el sombrero puesto en dos cosas a la vez: el sistema de diseño y el prototipado. AVIT es mobile first, para Costa Rica, y buena parte de sus flujos son innegociables porque los pide la regulación —lo que hace que cada decisión de diseño tenga poco margen y mucho peso.

<div class="grid grid-cols-1 md:grid-cols-3 gap-px bg-black/5 border border-black/5 my-12">
    <div class="bg-[#F9F8F3] p-8 md:p-10">
        <div class="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-bold mb-4">Mi rol</div>
        <div class="font-serif italic text-2xl text-gray-900 leading-tight">Design system<br />&amp; prototipado</div>
    </div>
    <div class="bg-[#F9F8F3] p-8 md:p-10">
        <div class="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-bold mb-4">Desde</div>
        <div class="font-serif italic text-2xl text-gray-900 leading-tight">Mayo 2026<br />&amp; sigue</div>
    </div>
    <div class="bg-[#F9F8F3] p-8 md:p-10">
        <div class="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-bold mb-4">Alcance</div>
        <div class="font-serif italic text-2xl text-gray-900 leading-tight">7 problemas<br />20 prototipos</div>
    </div>
</div>

---

## el punto de partida

La librería de Figma se llamaba COMPONENTS y se había ido a la deriva sin que nadie lo notara. Había cuatro componentes publicados por duplicado —Button, Button Group, Social Button, Download App Button— y nadie sabía cuál era el bueno. Los nombres de los tokens traían typos horneados: `pimario 100` sin la erre, `terceario` en lugar de terciario, `tittle (xl)` con dos tes. Varias definiciones de grid mentían: una rejilla llamada «10 columns» tenía nueve. Las sombras estaban coloreadas con la paleta por defecto de Tailwind, no con el morado de la marca. Y no existían tokens de espaciado ni de radio: simplemente no estaban.

El handoff era el clásico, y lo llamo clásico porque lo he vivido en todos lados: una pantalla estática por estado, y los estados que faltaban se preguntaban después. Las medidas se leían del panel de Figma. Los comentarios vivían encerrados en el archivo de diseño, donde solo entra quien tiene cuenta. El flujo se explicaba con flechas.

Nada de eso es culpa de nadie. Es lo que pasa cuando la documentación y el producto viven en herramientas distintas y solo una de las dos se ejecuta.

---

## auditar antes de construir

Antes de dibujar nada, exporté los tokens de Figma y me senté a leerlos. Salieron **85 tokens de color** en diez familias, **49 estilos tipográficos** entre Montserrat y Open Sans, **14 sombras** y **18 definiciones de grid**, además de los **23 componentes** publicados en la librería.

Documenté cada defecto que encontré en vez de arreglarlo en silencio. Esa fue la decisión menos obvia y la que más rindió: si la documentación corrige el typo y Figma no, la documentación empieza a mentir el mismo día que se escribe. Así que `pimario 100` quedó escrito como `pimario 100`, con una nota al lado explicando qué pasó. Lo mismo con la página que Figma titula «Iconography» y describe como Ionicons cuando los layers son, en realidad, Boxicons: manda la realidad, no el título.

Los tokens que Figma no tenía los inventé y los marqué como convención local, para que se distingan de lo exportado: una escala de espaciado de cinco pasos derivada de los propios gutters de la rejilla, y una escala de cuatro radios.

<div class="not-prose grid grid-cols-1 md:grid-cols-2 gap-4 my-12 max-w-6xl mx-auto">
    <figure class="m-0">
        <div class="overflow-hidden bg-gray-100 rounded-[8px] border border-black/5">
            <img src="/uxlab-avit/tokens.avif" alt="Explorador de tokens del laboratorio: familias de color primario, secundario, error y éxito con su nombre y su valor hexadecimal." class="w-full h-auto object-cover" style="margin:0" loading="lazy" decoding="async" width="1600" height="1222" />
        </div>
        <figcaption class="text-xs uppercase tracking-widest text-gray-400 font-bold mt-4 text-center">El explorador de tokens, dentro del propio lab</figcaption>
    </figure>
    <figure class="m-0">
        <div class="overflow-hidden bg-gray-100 rounded-[8px] border border-black/5">
            <img src="/uxlab-avit/system-design.avif" alt="Galería navegable de componentes agrupados en fundamentos, acción, formularios, navegación, feedback, layout y visualización de datos." class="w-full h-auto object-cover" style="margin:0" loading="lazy" decoding="async" width="1600" height="1167" />
        </div>
        <figcaption class="text-xs uppercase tracking-widest text-gray-400 font-bold mt-4 text-center">21 componentes, con preview en vivo y código copiable</figcaption>
    </figure>
</div>

El sistema dejó de ser un archivo que se consulta y pasó a ser código que se ejecuta: los mismos tokens alimentan la documentación, el laboratorio y —más adelante— la app.

---

## el sistema, en vivo

Esta es la pieza que mejor explica por qué un prototipo que se toca vale más que una pantalla que se mira. Movés el nivel de riesgo y todo lo demás responde: la composición, el donut, la descripción. En una imagen estática esto son cinco pantallas y una flecha; acá es un gesto.

<div class="not-prose my-16 max-w-[56rem] mx-auto">
<style>
.avitlab-demo{--avit-primario:#a200ea;--avit-primario-25:#f4e6fd;--avit-secundario:#00bfe7;--avit-terceario:#ee007e;--avit-complementario:#fdb342;--avit-trazo:#e6e6e6;--avit-fondo:#ffffff;--avit-texto:#1a1a1a;--avit-texto-suave:#6b6b6b;--avit-radio:14px;background:var(--avit-fondo);border:1px solid var(--avit-trazo);border-radius:var(--avit-radio);padding:1.75rem;box-shadow:0 12px 32px -18px rgba(0,0,0,.28)}
@media (min-width:768px){.avitlab-demo{padding:2.25rem}}
.avitlab-demo *{box-sizing:border-box}
.avitlab-eyebrow{font-size:10px;letter-spacing:.28em;text-transform:uppercase;font-weight:700;color:var(--avit-primario);margin:0 0 .5rem}
.avitlab-title{font-size:1.35rem;font-weight:700;color:var(--avit-texto);margin:0 0 1.5rem;line-height:1.2}
.avitlab-row{display:flex;align-items:baseline;justify-content:space-between;gap:1rem;margin-bottom:.6rem}
.avitlab-label{font-size:.8rem;color:var(--avit-texto-suave)}
.avitlab-level{font-size:1.05rem;font-weight:700;color:var(--avit-complementario)}
.avitlab-slider{-webkit-appearance:none;appearance:none;width:100%;height:6px;border-radius:999px;background:var(--avit-trazo);outline:none;margin:.35rem 0 .5rem}
.avitlab-slider::-webkit-slider-thumb{-webkit-appearance:none;width:22px;height:22px;border-radius:999px;background:#fff;border:3px solid var(--avit-primario);cursor:pointer;box-shadow:0 2px 6px rgba(0,0,0,.18)}
.avitlab-slider::-moz-range-thumb{width:22px;height:22px;border-radius:999px;background:#fff;border:3px solid var(--avit-primario);cursor:pointer}
.avitlab-slider:focus-visible{box-shadow:0 0 0 4px var(--avit-primario-25)}
.avitlab-stops{display:flex;justify-content:space-between;font-size:.66rem;color:var(--avit-texto-suave);margin-bottom:1.4rem}
.avitlab-stops span{flex:1;text-align:center}
.avitlab-stops span:first-child{text-align:left}
.avitlab-stops span:last-child{text-align:right}
.avitlab-stops span[data-on="1"]{color:var(--avit-primario);font-weight:700}
.avitlab-body{display:grid;grid-template-columns:1fr;gap:1.5rem;align-items:center}
@media (min-width:600px){.avitlab-body{grid-template-columns:170px 1fr;gap:2rem}}
.avitlab-donut{width:170px;height:170px;margin:0 auto;display:block}
.avitlab-donut circle{transition:stroke-dasharray .45s ease,stroke-dashoffset .45s ease}
.avitlab-legend{list-style:none;margin:0;padding:0}
.avitlab-legend li{display:flex;align-items:center;gap:.6rem;padding:.42rem 0;font-size:.85rem;color:var(--avit-texto);border-bottom:1px solid var(--avit-trazo)}
.avitlab-legend li:last-child{border-bottom:0}
.avitlab-dot{width:10px;height:10px;border-radius:3px;flex:none}
.avitlab-pct{margin-left:auto;font-variant-numeric:tabular-nums;font-weight:700}
.avitlab-desc{margin:1.4rem 0 0;font-size:.88rem;line-height:1.55;color:var(--avit-texto-suave);min-height:3.4em}
.avitlab-foot{margin:1.25rem 0 0;padding-top:1rem;border-top:1px solid var(--avit-trazo);font-size:.72rem;color:var(--avit-texto-suave)}
@media (prefers-reduced-motion:reduce){.avitlab-donut circle{transition:none}}
</style>
<div class="avitlab-demo" id="avitlab-demo">
<p class="avitlab-eyebrow">Paso 2 de 3</p>
<p class="avitlab-title">Elegí tu estrategia</p>
<div class="avitlab-row"><span class="avitlab-label">Nivel de riesgo</span><span class="avitlab-level" id="avitlab-level">Moderado</span></div>
<input class="avitlab-slider" id="avitlab-range" type="range" min="1" max="5" step="1" value="3" aria-label="Nivel de riesgo de la estrategia" aria-describedby="avitlab-desc" />
<div class="avitlab-stops" id="avitlab-stops"><span data-on="0">Conservador</span><span data-on="0">Cauto</span><span data-on="1">Moderado</span><span data-on="0">Crecimiento</span><span data-on="0">Agresivo</span></div>
<div class="avitlab-body">
<svg class="avitlab-donut" viewBox="0 0 180 180" role="img" aria-label="Composición de la cartera según el nivel de riesgo elegido"><circle cx="90" cy="90" r="66" fill="none" stroke="#f0f0f0" stroke-width="20"></circle><g transform="rotate(-90 90 90)" stroke-width="20" fill="none" stroke-linecap="butt"><circle data-seg="0" cx="90" cy="90" r="66" stroke="#00bfe7" stroke-dasharray="165.9 248.8" stroke-dashoffset="0"></circle><circle data-seg="1" cx="90" cy="90" r="66" stroke="#a200ea" stroke-dasharray="165.9 248.8" stroke-dashoffset="-165.9"></circle><circle data-seg="2" cx="90" cy="90" r="66" stroke="#ee007e" stroke-dasharray="49.8 364.9" stroke-dashoffset="-331.8"></circle><circle data-seg="3" cx="90" cy="90" r="66" stroke="#fdb342" stroke-dasharray="33.2 381.5" stroke-dashoffset="-381.6"></circle></g></svg>
<ul class="avitlab-legend" id="avitlab-legend"><li><span class="avitlab-dot" style="background:#00bfe7"></span>Renta fija<span class="avitlab-pct" data-pct="0">40 %</span></li><li><span class="avitlab-dot" style="background:#a200ea"></span>Acciones globales<span class="avitlab-pct" data-pct="1">40 %</span></li><li><span class="avitlab-dot" style="background:#ee007e"></span>Mercados emergentes<span class="avitlab-pct" data-pct="2">12 %</span></li><li><span class="avitlab-dot" style="background:#fdb342"></span>Efectivo<span class="avitlab-pct" data-pct="3">8 %</span></li></ul>
</div>
<p class="avitlab-desc" id="avitlab-desc" aria-live="polite">Un punto de partida equilibrado: la mitad de la cartera busca crecer y la otra mitad amortigua los años malos.</p>
<p class="avitlab-foot">Reconstrucción del patrón de interacción con la paleta y los radios reales de AVIT. Los porcentajes son inventados para esta demo.</p>
</div>
<script>
(() => {
  const root = document.getElementById('avitlab-demo');
  if (!root) return;
  const range = document.getElementById('avitlab-range');
  const level = document.getElementById('avitlab-level');
  const stops = document.querySelectorAll('#avitlab-stops span');
  const pcts = root.querySelectorAll('[data-pct]');
  const segs = root.querySelectorAll('[data-seg]');
  const desc = document.getElementById('avitlab-desc');
  if (!range) return;
  const C = 2 * Math.PI * 66;
  const LEVELS = [
    { name: 'Conservador', alloc: [70, 15, 5, 10], text: 'Casi toda la cartera en renta fija: se mueve poco, y esa es exactamente la idea.' },
    { name: 'Cauto', alloc: [55, 28, 7, 10], text: 'Sigue anclada en renta fija, pero deja entrar acciones para no quedarse quieta del todo.' },
    { name: 'Moderado', alloc: [40, 40, 12, 8], text: 'Un punto de partida equilibrado: la mitad de la cartera busca crecer y la otra mitad amortigua los años malos.' },
    { name: 'Crecimiento', alloc: [25, 52, 18, 5], text: 'Manda la renta variable. Sube más rápido y también baja más rápido: pide horizonte largo.' },
    { name: 'Agresivo', alloc: [10, 62, 25, 3], text: 'Casi todo en acciones y emergentes. Los años malos se sienten de verdad, y hay que poder aguantarlos.' },
  ];
  const render = (n) => {
    const l = LEVELS[n];
    level.textContent = l.name;
    desc.textContent = l.text;
    range.setAttribute('aria-valuetext', l.name);
    stops.forEach((s, k) => s.setAttribute('data-on', k === n ? '1' : '0'));
    let offset = 0;
    l.alloc.forEach((p, k) => {
      const len = (p / 100) * C;
      segs[k].setAttribute('stroke-dasharray', len.toFixed(1) + ' ' + (C - len).toFixed(1));
      segs[k].setAttribute('stroke-dashoffset', (-offset).toFixed(1));
      pcts[k].textContent = p + ' %';
      offset += len;
    });
  };
  range.addEventListener('input', () => render(Number(range.value) - 1));
  render(Number(range.value) - 1);
})();
</script>
</div>

---

## un problema, varias opciones

El laboratorio tiene una regla y de ahí sale todo lo demás: **un problema nunca se resuelve con una propuesta**. Cada problema de UX vive como un proyecto fechado, con su contexto y su hipótesis escritas antes de dibujar, y debajo cuelgan todas las opciones que llegamos a construir, numeradas.

Antes de la primera opción hay research. Miro cómo resuelven el mismo problema otras apps de inversión, sobre todo las de la región: son las que marcan qué patrones la gente de acá ya sabe usar, y cuáles todavía hay que explicar. Repaso las evaluaciones de UX del flujo actual para ver dónde se traba hoy. Y averiguo qué partes del flujo son obligatorias por regulación, porque esas no se tocan por más que estorben y conviene saberlo antes de proponer algo que después no se puede construir. Con eso escribo la hipótesis. Dibujar viene después.

Las opciones descartadas no se borran. Se marcan como ocultas —salen de la lista— pero su ruta sigue viva, así que cualquiera puede volver a entrar y ver por qué se descartó. De veinte prototipos construidos, la mayoría están hoy ocultos. Esa diferencia es parte del argumento: **se descartó con el prototipo andando, no con una imagen**.

<figure class="not-prose my-14 max-w-4xl mx-auto">
    <div class="overflow-hidden bg-gray-100 rounded-[8px] border border-black/5">
        <img src="/uxlab-avit/opciones.avif" alt="Listado «Opciones de prototipo · 9» con tarjetas numeradas del 01 al 06, cada una describiendo una versión distinta de la pantalla de inicio." class="w-full h-auto object-cover" style="margin:0" loading="lazy" decoding="async" width="1400" height="2656" />
    </div>
    <figcaption class="text-xs uppercase tracking-widest text-gray-400 font-bold mt-4 text-center">Nueve maneras de resolver la misma pantalla de inicio</figcaption>
</figure>

---

## las notas al margen

Cuando le enseñás un prototipo a un cliente pasa siempre lo mismo: entiende *qué* ve, pero no *por qué* está así. Y si no estás vos ahí para contarlo, el prototipo se lee mal.

Por eso cada prototipo lleva su propia capa de anotaciones. Son notas adhesivas que viven en los márgenes de la pantalla, ancladas a la altura de lo que explican: la de la izquierda cuenta el cambio, la de la derecha el porqué. Cada una tiene un tono según lo que es —un cambio clave, una advertencia, algo pendiente de confirmar— y una posición mínima deseada; si la nota de arriba crece, el margen empuja a la de abajo en vez de solaparla. En pantallas angostas los márgenes desaparecen y las notas se apilan debajo del teléfono, en orden de lectura.

<figure class="not-prose my-14 max-w-6xl mx-auto">
    <div class="overflow-hidden bg-gray-100 rounded-[8px] border border-black/5">
        <img src="/uxlab-avit/sticky-notes.avif" alt="Prototipo de apertura de cuenta en un marco de teléfono, rodeado de notas adhesivas de colores que explican cada decisión de diseño." class="w-full h-auto object-cover" style="margin:0" loading="lazy" decoding="async" width="1600" height="1333" />
    </div>
    <figcaption class="text-xs uppercase tracking-widest text-gray-400 font-bold mt-4 text-center">El prototipo se explica solo: la argumentación viaja pegada a la pantalla</figcaption>
</figure>

El efecto secundario fue el bueno. Como las notas van dentro del prototipo y no en un documento aparte, la reunión dejó de ser una presentación y pasó a ser una lectura: el cliente entra por su cuenta, recorre, entiende el razonamiento, y llega a la llamada con preguntas en vez de con dudas. Escribir la nota también me obliga a mí: si no puedo defender un cambio en cuatro líneas, probablemente el cambio no está listo.

---

## comentar sobre el píxel

El cliente pidió una cosa muy concreta y muy razonable: **poder dejar feedback sin tener cuenta de Figma y sin que se pierda en un chat**. Así que construí comentarios posicionales dentro del propio laboratorio.

En cualquier prototipo hay un botón flotante. Por defecto el prototipo está limpio —los pins escondidos, sin ensuciar el diseño— y el botón muestra cuántos hilos hay. Al activarlo aparecen todos los pins, y un click sobre la pantalla clava uno nuevo justo ahí. Cada pin es un hilo: se abre, se responde, se marca como resuelto —el pin se atenúa— y se puede arrastrar para reubicarlo. Quien comenta solo deja su nombre; el email es opcional. No hay registro, no hay login, no hay invitación que aceptar.

<figure class="not-prose my-14 max-w-6xl mx-auto">
    <div class="overflow-hidden bg-gray-100 rounded-[8px] border border-black/5">
        <img src="/uxlab-avit/comentarios.avif" alt="El prototipo en modo comentario: un pin morado clavado sobre una tarjeta y un panel «Nuevo comentario» con nombre, email opcional y el texto del comentario." class="w-full h-auto object-cover" style="margin:0" loading="lazy" decoding="async" width="1600" height="1222" />
    </div>
    <figcaption class="text-xs uppercase tracking-widest text-gray-400 font-bold mt-4 text-center">Un comentario clavado en el punto exacto de la pantalla</figcaption>
</figure>

Por debajo es una única tabla en Supabase con Row Level Security: lectura abierta, inserción validada por longitud, y las respuestas modeladas en la misma tabla apuntando al comentario raíz. La decisión de diseño que más me gusta de todo el sistema es también la menos visible: **las coordenadas del pin no se guardan en píxeles, se guardan en porcentaje del marco del prototipo**. Por eso el mismo comentario cae en el mismo punto relativo tanto si lo abrís en un escritorio, donde el prototipo vive en un marco de 420 px, como en un teléfono, donde ocupa todo el ancho. Un pin en píxeles se habría despegado del elemento que señala en cuanto alguien cambiara de pantalla.

Yo lo leo todo desde un tablero aparte, agrupado por proyecto y por opción, con las respuestas anidadas y un contador de lo nuevo desde la última visita. El laboratorio publicado además está detrás de una clave que corre en el edge, antes de servir nada: quien no la tiene ni siquiera descarga el JavaScript, y si falta la configuración el sitio falla cerrado en vez de destapar los prototipos.

---

## iterar en abierto

El circuito quedó así: rama, cambio, deploy de preview automático, link al cliente, comentario clavado en la pantalla, merge. Entre mayo y agosto de 2026 eso fueron **274 commits y unas 114 pull requests**, con varias exploraciones abiertas en paralelo cuando había que comparar caminos.

Lo más honesto de trabajar así no son los aciertos, son las vueltas atrás, y quedan todas registradas. Hubo un capítulo del flujo que el cliente pidió por la mañana y retiró el mismo día. Hubo una opción descartada que volvimos a hacer visible semanas después, porque el problema cambió de forma. Hubo copys de la búsqueda con IA que tuve que neutralizar para que en ningún caso pudieran leerse como «recomendación» o «asesoría». Y hubo una revisión legal que reescribió una pantalla entera: la app dejó de sugerir un nivel de riesgo y pasó a describir el que está seleccionado, se subió la caída posible a la tarjeta cerrada para que el trade-off se viera sin expandir nada, y se añadió una confirmación explícita antes de invertir.

Ese último cambio es exactamente el prototipo que se puede tocar más arriba en este caso.

---

## del lab a la app

En agosto el laboratorio dejó de ser el final del camino. Los flujos que ya estaban resueltos empezaron a graduarse a una segunda aplicación construida en Ionic y Angular —el stack real del producto— corriendo la verificación de identidad de Metamap de verdad y los datos que exige Alpaca como custodio.

Son dos aplicaciones con propósitos distintos y no comparten código: el laboratorio compara opciones, la app corre una sola versión como correría la de producción. Lo único que comparten son los tokens, duplicados a propósito. Y la regla es de una sola dirección: **primero el lab, después la app**. Nada se porta antes de estar resuelto.

<div class="not-prose grid grid-cols-1 md:grid-cols-2 gap-4 my-12 max-w-6xl mx-auto">
    <figure class="m-0">
        <div class="overflow-hidden bg-gray-100 rounded-[8px] border border-black/5">
            <img src="/uxlab-avit/proto-desktop.avif" alt="Prototipo del portafolio en escritorio: lista de estrategias a la izquierda, detalle al centro y panel fijo a la derecha." class="w-full h-auto object-cover" style="margin:0" loading="lazy" decoding="async" width="1600" height="1056" />
        </div>
        <figcaption class="text-xs uppercase tracking-widest text-gray-400 font-bold mt-4 text-center">El mismo problema, resuelto para escritorio</figcaption>
    </figure>
    <figure class="m-0">
        <div class="overflow-hidden bg-gray-100 rounded-[8px] border border-black/5">
            <img src="/uxlab-avit/proto-moneda.avif" alt="Prototipo de la pantalla de inicio con un selector de moneda que cambia la tarjeta entera." class="w-full h-auto object-cover" style="margin:0" loading="lazy" decoding="async" width="1400" height="1159" />
        </div>
        <figcaption class="text-xs uppercase tracking-widest text-gray-400 font-bold mt-4 text-center">Cuando la regla se vuelve estructura, no nota al pie</figcaption>
    </figure>
</div>

Dos ejemplos de lo que cambió por el camino. El onboarding del producto de ahorro pasó de cinco pantallas a una sola, con la única decisión que de verdad hace falta —la moneda— arriba del todo. Y la apertura de cuenta, que hoy son cinco pasos y más de cincuenta pantallas contando una sola rama, quedó recortada a quince turnos en seis capítulos: la validación de identidad se mudó al primer capítulo para que falle temprano en vez de a los treinta pasos, y el escaneo del documento rellena los datos en vez de hacer que la persona los teclee.

Ese segundo caso trae además la decisión de la que más orgullosa estoy, y es una pantalla que decidí borrar. El estado «solicitud en revisión» dura horas o días; una pantalla de cierre se lee una vez y queda atrás. Lo que le falta a la persona tiene que vivir donde vuelve, que es el inicio.

---

## lo que me llevo

- **Auditar es diseñar.** Las horas que pasé leyendo tokens exportados —encontrando typos, rejillas que mentían y sombras de otra paleta— valieron más que cualquier pantalla nueva. No se puede construir encima de un sistema en el que nadie confía.
- **Documentar el defecto en vez de taparlo.** Si la doc corrige lo que Figma no corrige, la doc empieza a mentir el día que se escribe. Preservé los typos con una nota al lado, y el archivo siguió siendo verdad.
- **Una propuesta no es una decisión.** Construir varias opciones cuesta más, pero convierte la conversación: se deja de discutir gustos y se empieza a comparar comportamientos. Y descartar con el prototipo andando deja un registro que una imagen no deja.
- **La argumentación va pegada a la pantalla.** Las notas al margen hicieron que el cliente pudiera recorrer solo y entender el porqué. La reunión dejó de ser una presentación y pasó a ser una conversación.
- **El detalle invisible es el que sostiene.** Guardar los comentarios en porcentaje y no en píxeles no se ve en ninguna captura, y es lo único que hace que el feedback siga señalando lo que señalaba.
- **Todavía estoy en ello.** Quedan capítulos por escribir, decisiones por revertir y flujos por graduar. Voy actualizando este caso a medida que pueda contarlo.
