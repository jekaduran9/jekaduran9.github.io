---
title: "Findasense: Rediseño del Ecosistema Digital Global"
description: "Rediseño estratégico para transformar una web corporativa en un motor de captación de leads global."
role: "UX/UI Designer"
tools: ["Figma", "Design Thinking", "WordPress 6.4"]
type: "Ecosistema Digital"
image: "/pj-findasense-cover.png"
pubDate: 2024-03-07
featured: true
lang: "es"
aspectRatio: "aspect-square"
---

## El contexto

Findasense es una consultora global de transformación digital. Cuando llegué al proyecto, su web tenía un problema raro de detectar: el Hero principal — el espacio más valioso del sitio — era una nota interna sobre su adquisición por TP Infinity. La marca estaba hablando de sí misma antes de que el usuario entendiera para qué servía.

A eso se sumaba "deuda de diseño": secciones duplicadas, jerarquías rotas, formularios largos. El sitio informaba, pero no convencía.

Mi reto fue darle la vuelta bajo una premisa simple: *el usuario no quiere saber quién eres hasta que entiende cómo puedes ayudarle.* No empecé por el diseño — empecé por entender por qué la web no estaba funcionando.


## Auditoría y referencias

La auditoría reveló que el 60% de los problemas no eran de pixel, eran estructurales. Cuatro patrones se repetían:

*   **Secciones que decían lo mismo dos veces.** "¿Qué hacemos?" y "¿Qué problemas resolvemos?" vivían separadas pero contaban la misma historia.
*   **Sin jerarquía visual.** Todo competía por la mirada al mismo nivel — H1, párrafos y links se leían igual.
*   **Callejones sin salida.** Desde "Insights" no había forma de volver al Home. El flujo se cortaba.
*   **Formularios largos.** Cada campo extra era un punto de abandono.

Después miré qué estaban haciendo bien las agencias de referencia — R/GA, MRM, GUT, Globant, Huge — y me llevé tres ideas:

*   **Bold + mayúsculas** en hero para sonar con autoridad sin perder cercanía.
*   **Layouts modulares** que escalen sin reescribir CSS cada vez que entra un bloque nuevo.
*   **Hovers en rojo** como acento único, no decoración: la mano que guía al click.

## Tres pilares, tres decisiones

Con la auditoría sobre la mesa, reduje el rediseño a tres ejes. Cada uno con una decisión concreta detrás:

1.  **Claridad.** El Hero pasó de "noticia corporativa" a propuesta de valor directa. Si en cinco segundos no entiendes qué hace Findasense, fallé.
2.  **Confianza.** Subí Casos de Éxito y logos de clientes (Coca-Cola, Lenovo, Bimbo) al primer scroll. Lo que antes vivía debajo del fold pasó a ser lo primero que el usuario ve.
3.  **Conversión.** El formulario largo se rompió en cinco pasos de un solo campo cada uno. Menos fricción por pantalla, mismo dato recolectado.

## Reorganizar la casa

Reescribí el sitemap invirtiendo el orden tradicional: primero qué hacemos, después quiénes somos. La conversión y el expertise pasan delante; la historia de la empresa, detrás.

<div class="not-prose my-16 overflow-hidden rounded-2xl">
    <img src="/pj-findasense-sitemap.svg" 
        alt="Sitemap Findasense" 
        class="w-full h-auto object-contain" loading="lazy" decoding="async" />
</div>

Dos decisiones que vinieron con esta reestructuración:

*   **UX Writing.** Las secciones de metodología y cultura se unificaron en "Quiénes somos". Menos puertas, mismo contenido.
*   **Navegación persistente.** El Header siempre lleva un CTA de contacto y un selector ES/EN/PT visible desde cualquier nivel. Nadie se pierde.

## Del wireframe al sistema

Diseñé en Figma con un UI Kit pensado para WordPress 6.4 desde el día uno. La regla: nada que el equipo de desarrollo no pudiera replicar con Gutenberg.

**Wireframing low-fi.** Mapeé el flujo asegurándome de que ninguna página fuera un callejón sin salida — especialmente noticias y prensa, donde antes el usuario quedaba atrapado.

<div class="not-prose my-16 space-y-10">
    <div class="animate-slide-right">
        <img src="/pj-lowfi-prototype-desktop-findasense.png" 
            alt="Wireframe Low-Fi Desktop" 
            class="zoomable cursor-zoom-in w-full h-auto object-contain transition-opacity hover:opacity-90" loading="lazy" decoding="async" width="1920" height="655" />
    </div>
    <div class="flex justify-center animate-slide-right-delayed">
        <img src="/pj-lowfi-prototype-mobile-findasense.png" 
            alt="Wireframe Low-Fi Mobile" 
            class="zoomable cursor-zoom-in w-full max-w-sm h-auto object-contain transition-opacity hover:opacity-90" loading="lazy" decoding="async" width="1920" height="1839" />
    </div>
</div>

**High-fidelity.** Cuatro decisiones que dieron forma al sistema:

*   **Bloques de color** para separar visualmente servicios y casos de éxito sin necesidad de leer.
*   **Rojo Findasense** como acento único — palabras clave, hovers, botones. Nada más.
*   **Mobile first** real: cada componente probado en móvil antes que en desktop.
*   **Prototipo navegable** entregado al equipo interno para testear transiciones y el flujo del formulario antes del handoff.

## Design System (UI Kit)

El sistema visual se construyó como una base sólida y escalable: tokens de color, jerarquía tipográfica y componentes consistentes que aseguran coherencia en todo el ecosistema digital y facilitan el mantenimiento en WordPress.

### Color

Paleta construida sobre el rojo característico de Findasense como acento único, equilibrada con negro, crema, un azul celeste para bloques tecnológicos y blanco como base limpia.

<div class="not-prose grid grid-cols-2 md:grid-cols-5 gap-4 mt-6">
  <div class="group">
    <div class="aspect-square rounded-[8px] border border-black/5 mb-3 transition-transform duration-300 group-hover:scale-[1.03]" style="background-color: #F04130;"></div>
    <p class="text-sm font-medium text-gray-900">Naranja</p>
    <p class="font-mono text-[11px] text-gray-500 mt-0.5">#F04130</p>
    <code class="font-mono text-[11px] bg-gray-100 px-1.5 py-0.5 rounded-sm inline-block mt-1">brand-red</code>
    <p class="text-[11px] text-gray-500 leading-snug mt-2">CTAs, hovers, acento de marca.</p>
  </div>
  <div class="group">
    <div class="aspect-square rounded-[8px] border border-black/5 mb-3 transition-transform duration-300 group-hover:scale-[1.03]" style="background-color: #121212;"></div>
    <p class="text-sm font-medium text-gray-900">Negro</p>
    <p class="font-mono text-[11px] text-gray-500 mt-0.5">#121212</p>
    <code class="font-mono text-[11px] bg-gray-100 px-1.5 py-0.5 rounded-sm inline-block mt-1">brand-black</code>
    <p class="text-[11px] text-gray-500 leading-snug mt-2">Headings y texto principal.</p>
  </div>
  <div class="group">
    <div class="aspect-square rounded-[8px] border border-black/5 mb-3 transition-transform duration-300 group-hover:scale-[1.03]" style="background-color: #EFE2CF;"></div>
    <p class="text-sm font-medium text-gray-900">Crema</p>
    <p class="font-mono text-[11px] text-gray-500 mt-0.5">#EFE2CF</p>
    <code class="font-mono text-[11px] bg-gray-100 px-1.5 py-0.5 rounded-sm inline-block mt-1">brand-cream</code>
    <p class="text-[11px] text-gray-500 leading-snug mt-2">Bloques cálidos, servicios.</p>
  </div>
  <div class="group">
    <div class="aspect-square rounded-[8px] border border-black/5 mb-3 transition-transform duration-300 group-hover:scale-[1.03]" style="background-color: #54A4DB;"></div>
    <p class="text-sm font-medium text-gray-900">Azul Celeste</p>
    <p class="font-mono text-[11px] text-gray-500 mt-0.5">#54A4DB</p>
    <code class="font-mono text-[11px] bg-gray-100 px-1.5 py-0.5 rounded-sm inline-block mt-1">brand-blue</code>
    <p class="text-[11px] text-gray-500 leading-snug mt-2">Bloques tecnológicos y data.</p>
  </div>
  <div class="group">
    <div class="aspect-square rounded-[8px] border border-black/5 mb-3 transition-transform duration-300 group-hover:scale-[1.03]" style="background-color: #FFFFFF;"></div>
    <p class="text-sm font-medium text-gray-900">Blanco</p>
    <p class="font-mono text-[11px] text-gray-500 mt-0.5">#FFFFFF</p>
    <code class="font-mono text-[11px] bg-gray-100 px-1.5 py-0.5 rounded-sm inline-block mt-1">brand-white</code>
    <p class="text-[11px] text-gray-500 leading-snug mt-2">Base limpia, espacios y cards.</p>
  </div>
</div>

### Tipografía

Una sola familia tipográfica — **Montserrat** — utilizada en todos los pesos para mantener una voz visual coherente entre headings, body y UI. Mayúsculas en hero y secciones clave para reforzar el tono editorial y la autoridad de la marca.

<div class="not-prose grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-6">
  <div class="bg-white rounded-[12px] p-8 border border-black/5">
    <span class="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-bold block mb-4">Display · Headings</span>
    <p class="text-7xl text-gray-900 leading-none mb-3 font-bold" style="font-family: Montserrat, sans-serif;">Aa</p>
    <p class="text-2xl text-gray-700 mb-1 font-bold" style="font-family: Montserrat, sans-serif;">Montserrat Bold</p>
    <p class="font-mono text-[11px] text-gray-500 mb-4">font-bold · 700</p>
    <p class="text-[11px] text-gray-500"><strong class="font-medium text-gray-700">Uso:</strong> H1 a H6, taglines, CTAs. Mayúsculas en hero y secciones de impacto.</p>
  </div>
  <div class="bg-white rounded-[12px] p-8 border border-black/5">
    <span class="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-bold block mb-4">Body · UI</span>
    <p class="text-7xl text-gray-900 leading-none mb-3" style="font-family: Montserrat, sans-serif;">Aa</p>
    <p class="text-2xl text-gray-700 mb-1" style="font-family: Montserrat, sans-serif;">Montserrat Regular</p>
    <p class="font-mono text-[11px] text-gray-500 mb-4">font-normal · 400</p>
    <p class="text-[11px] text-gray-500"><strong class="font-medium text-gray-700">Uso:</strong> párrafos, navegación, formularios, captions. Pesos Light, Medium y Semibold para jerarquía secundaria.</p>
  </div>
</div>

<div class="not-prose mt-6 bg-white rounded-[12px] p-8 border border-black/5">
  <span class="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-bold block mb-6">Escala tipográfica · Desktop</span>
  <div class="space-y-4" style="font-family: Montserrat, sans-serif;">
    <div class="flex items-baseline gap-4 pb-3 border-b border-black/5">
      <span class="font-mono text-[10px] text-gray-400 w-20 flex-shrink-0">56 / 3.5rem</span>
      <span class="font-bold text-[2rem] md:text-[3rem] leading-tight text-gray-900">HEADING 1</span>
    </div>
    <div class="flex items-baseline gap-4 pb-3 border-b border-black/5">
      <span class="font-mono text-[10px] text-gray-400 w-20 flex-shrink-0">48 / 3rem</span>
      <span class="font-bold text-[1.75rem] md:text-[2.5rem] leading-tight text-gray-900">Heading 2</span>
    </div>
    <div class="flex items-baseline gap-4 pb-3 border-b border-black/5">
      <span class="font-mono text-[10px] text-gray-400 w-20 flex-shrink-0">40 / 2.5rem</span>
      <span class="font-bold text-[1.5rem] md:text-[2rem] leading-tight text-gray-900">Heading 3</span>
    </div>
    <div class="flex items-baseline gap-4 pb-3 border-b border-black/5">
      <span class="font-mono text-[10px] text-gray-400 w-20 flex-shrink-0">32 / 2rem</span>
      <span class="font-bold text-[1.25rem] md:text-[1.625rem] leading-tight text-gray-900">Heading 4</span>
    </div>
    <div class="flex items-baseline gap-4">
      <span class="font-mono text-[10px] text-gray-400 w-20 flex-shrink-0">20 / 1.25rem</span>
      <span class="text-[1rem] md:text-[1.125rem] leading-relaxed text-gray-700">Body text — párrafos editoriales y contenido principal del sitio.</span>
    </div>
  </div>
</div>

### Recurso de marca: la coma

La coma del logo dejó de ser un detalle tipográfico para convertirse en el recurso visual que articula todo el sistema. La usé como contenedor de retratos, marco para hero illustrations, fondo en testimonios y elemento decorativo. Una sola pieza, muchos roles — siempre con la misma forma, distintos pesos.

<div class="not-prose mt-8">
  <img src="/Findasense/pj-findasense-coma2.png" 
    alt="Aplicaciones de la coma del logo: marcos de retrato, hero illustrations, testimonios y elementos decorativos"
    class="zoomable cursor-zoom-in w-full h-auto object-contain mix-blend-multiply transition-opacity hover:opacity-90" loading="lazy" decoding="async" width="1915" height="2432" />
</div>

## Prototipo final

El resultado: una web que cuenta lo que hace antes que quién es. Hero directo, casos de éxito en el primer scroll, formulario sin fricción y una identidad visual coherente de principio a fin.

<div class="not-prose mt-8">
  <img src="/Findasense/pf-findasense-prototype-desktop.jpg" 
    alt="Prototipo final desktop: recorrido completo de la web rediseñada"
    class="zoomable cursor-zoom-in w-full h-auto object-contain mix-blend-multiply transition-opacity hover:opacity-90" loading="lazy" decoding="async" width="3000" height="1013" />
  <p class="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-bold mt-4">Recorrido completo · Desktop</p>
</div>

## Diseñar para que se construya

Como el sitio se implementaría en WordPress 6.4, cada bloque pasó por un check con el equipo de desarrollo: si no se podía hacer con Gutenberg o un constructor visual, no entraba al diseño. Eso protegió la velocidad de carga (WPO) y eliminó el código a medida que iba a costar mantener.

Las revisiones semanales con el equipo afilaron tres cosas:

*   El mensaje del Hero — versión tras versión hasta que cualquiera lo entendiera de un vistazo.
*   La respuesta táctil de los botones en móvil — más área de toque, feedback más claro.
*   La coherencia del multilenguaje — algunos layouts se rompían en portugués por longitud de texto, los reajusté.

## Solución y impacto
El resultado es una web minimalista, potente y orientada a resultados que redefine la presencia digital de Findasense.

<div class="not-prose grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
<div class="bg-white border border-black/5 p-8 rounded-2xl hover:border-red-500/20 transition-colors group">
<div class="w-10 h-10 bg-red-50 rounded-full flex items-center justify-center text-red-600 mb-6 group-hover:scale-110 transition-transform">
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-globe"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
</div>
<h4 class="text-xs font-bold uppercase tracking-widest mb-3">Posicionamiento</h4>
<p class="text-sm text-gray-500 leading-relaxed">Findasense ahora compite visualmente con las mejores agencias del mundo, transmitiendo autoridad y modernidad.</p>
</div>
<div class="bg-white border border-black/5 p-8 rounded-2xl hover:border-red-500/20 transition-colors group">
<div class="w-10 h-10 bg-red-50 rounded-full flex items-center justify-center text-red-600 mb-6 group-hover:scale-110 transition-transform">
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mouse-pointer-2"><path d="m3 3 7.07 16.97 2.51-7.39 7.39-2.51L3 3z"/><path d="m13 13 6 6"/></svg>
</div>
<h4 class="text-xs font-bold uppercase tracking-widest mb-3">Usabilidad</h4>
<p class="text-sm text-gray-500 leading-relaxed">Se eliminaron los errores de navegación y se redujo la profundidad de clics para llegar a la información clave.</p>
</div>
<div class="bg-white border border-black/5 p-8 rounded-2xl hover:border-red-500/20 transition-colors group">
<div class="w-10 h-10 bg-red-50 rounded-full flex items-center justify-center text-red-600 mb-6 group-hover:scale-110 transition-transform">
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trending-up"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>
</div>
<h4 class="text-xs font-bold uppercase tracking-widest mb-3">Conversión</h4>
<p class="text-sm text-gray-500 leading-relaxed">El nuevo formulario simplificado está diseñado para aumentar significativamente el volumen de leads calificados.</p>
</div>
<div class="bg-white border border-black/5 p-8 rounded-2xl hover:border-red-500/20 transition-colors group">
<div class="w-10 h-10 bg-red-50 rounded-full flex items-center justify-center text-red-600 mb-6 group-hover:scale-110 transition-transform">
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-layers"><path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"/><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"/></svg>
</div>
<h4 class="text-xs font-bold uppercase tracking-widest mb-3">Escalabilidad</h4>
<p class="text-sm text-gray-500 leading-relaxed">Un sistema de componentes robusto listo para crecer y adaptarse a las futuras necesidades de la consultora.</p>
</div>
</div>

## Entregables
*   Audit de UX y Benchmark competitivo.
*   Nuevo Sitemap y Arquitectura de Información.
*   Wireframes Low y High Fidelity.
*   UI Kit completo: Variables, componentes y estilos.
*   Prototipo interactivo en Figma.
*   Guía de estilo para implementación en WordPress.

## Ecosistema digital en vivo
Explora la experiencia diseñada para el ecosistema global de Findasense.

<div class="not-prose my-12 group">
    <a href="https://findasense.com/" target="_blank" rel="noopener noreferrer" class="block group">
        <div class="bg-white border border-black/5 rounded-t-xl p-3 flex items-center gap-2 shadow-sm group-hover:bg-gray-50 transition-colors">
            <div class="flex gap-1.5">
                <div class="w-2.5 h-2.5 rounded-full bg-red-400/40"></div>
                <div class="w-2.5 h-2.5 rounded-full bg-yellow-400/40"></div>
                <div class="w-2.5 h-2.5 rounded-full bg-green-400/40"></div>
            </div>
            <div class="flex-1 bg-gray-50 rounded-md py-1 px-3 text-[10px] text-gray-400 font-mono text-center flex items-center justify-center gap-2 group-hover:bg-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-lock"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                findasense.com
            </div>
            <div class="text-[10px] text-gray-400 uppercase tracking-widest font-bold px-2 flex items-center gap-2">
                Visitar <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-external-link"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
            </div>
        </div>
        <div class="aspect-video w-full bg-gray-100 border-x border-b border-black/5 rounded-b-xl overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-500 relative">
            <img src="/pj-findasense-prototype.png" 
                alt="Findasense Website Preview" 
                class="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-700" loading="lazy" decoding="async" />
            <div class="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors flex items-center justify-center">
                <div class="bg-black text-white text-[10px] font-bold uppercase tracking-[0.2em] px-6 py-3 rounded-full opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    Ver sitio web en vivo
                </div>
            </div>
        </div>
    </a>
    <p class="text-[10px] text-gray-400 uppercase tracking-widest text-center mt-4 font-bold">Haz clic en la imagen para explorar la web real ↑</p>
</div>
