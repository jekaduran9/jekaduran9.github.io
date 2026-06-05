---
title: "Portfolio by Jeka: Diseñar (y construir) con IA"
description: "Cómo diseñé y desarrollé este portfolio íntegramente colaborando con Claude. Un experimento sobre el rol del diseñador en la era de la IA."
role: "Product Designer & AI-Augmented Builder"
tools: ["Claude (Anthropic)", "Astro", "Tailwind CSS", "Figma", "Markdown"]
type: "Portfolio & Design System"
image: "/pj-portfoliobyjeka-cover.png"
pubDate: 2026-04-28
featured: true
lang: "es"
category: "UX/UI"
aspectRatio: "aspect-[3/4]"
heroAspect: "aspect-[4/3]"
---

Mi portfolio anterior vivía en Wix. Cumplía — tenía mis proyectos online, contestaba "tengo un portfolio" cuando me lo preguntaban — pero cada vez que entraba a editarlo me topaba con la misma pared: el diseño que tenía en la cabeza no cabía en la herramienta. Cambiar un margen era una pelea. Personalizar una tipografía, otra. El portfolio terminaba pareciéndose más a Wix que a mí.

Así que decidí empezar de cero, pero con una restricción: no sé programar. Bueno, lo justo. Mi única ayuda iba a ser una IA — Claude. Esto es lo que pasó.

## El punto de partida

Sabía tres cosas que necesitaba:
- Bilingüe (ES/EN) sin parches.
- Mantenible por mí sola, sin depender de un dev.
- Con identidad propia — no genérico, no template.

Y una cuarta, más personal: como diseñadora, mi trabajo siempre ha sido adaptarme. Cambian los clientes, cambian las herramientas, cambian las metodologías. La IA es solo el siguiente cambio. Prefería entrar yo, no esperar a ver cómo entraba el resto.

## Cómo lo pensé

Antes de abrir Figma o pedirle nada a Claude, hice lo de siempre: pensar.

Recorrí portfolios que admiro y tomé notas de qué me hacía quedarme y qué me hacía cerrar la pestaña. Definí un tono — cálido, editorial, con espacio para respirar — porque mi trabajo va de tradición + producto digital, no de neón. Y antes del primer pixel, escribí qué proyectos quería contar y en qué orden. Sin esa base, el diseño hubiera sido decoración.

## El sistema de diseño

Aquí dejé de verlo como "un sitio" y empecé a tratarlo como un producto. Estos son los cuatro bloques que definen toda la identidad visual.

### Color

Paleta minimalista construida sobre un fondo crema con un único acento coral que actúa como firma. Negro y grises hacen el resto.

<div class="not-prose grid grid-cols-2 md:grid-cols-4 gap-4">
  <div class="group">
    <div class="aspect-square rounded-[8px] border border-black/5 mb-3 transition-transform duration-300 group-hover:scale-[1.03]" style="background-color: #F9F8F3;"></div>
    <p class="text-sm font-medium text-gray-900">Cream</p>
    <p class="font-mono text-[11px] text-gray-500 mt-0.5">#F9F8F3</p>
    <code class="font-mono text-[11px] bg-gray-100 px-1.5 py-0.5 rounded-sm inline-block mt-1">bg-[#F9F8F3]</code>
    <p class="text-[11px] text-gray-500 leading-snug mt-2">Body, header, footer.</p>
  </div>
  <div class="group">
    <div class="aspect-square rounded-[8px] border border-black/5 mb-3 transition-transform duration-300 group-hover:scale-[1.03]" style="background-color: #000000;"></div>
    <p class="text-sm font-medium text-gray-900">Negro</p>
    <p class="font-mono text-[11px] text-gray-500 mt-0.5">#000000</p>
    <code class="font-mono text-[11px] bg-gray-100 px-1.5 py-0.5 rounded-sm inline-block mt-1">bg-black</code>
    <p class="text-[11px] text-gray-500 leading-snug mt-2">Texto principal, selection.</p>
  </div>
  <div class="group">
    <div class="aspect-square rounded-[8px] border border-black/5 mb-3 transition-transform duration-300 group-hover:scale-[1.03]" style="background-color: #E0A4B0;"></div>
    <p class="text-sm font-medium text-gray-900">Coral</p>
    <p class="font-mono text-[11px] text-gray-500 mt-0.5">#E0A4B0</p>
    <code class="font-mono text-[11px] bg-gray-100 px-1.5 py-0.5 rounded-sm inline-block mt-1">bg-[#E0A4B0]</code>
    <p class="text-[11px] text-gray-500 leading-snug mt-2">Hovers, links activos, acento único.</p>
  </div>
  <div class="group">
    <div class="aspect-square rounded-[8px] border border-black/5 mb-3 transition-transform duration-300 group-hover:scale-[1.03]" style="background-color: #9CA3AF;"></div>
    <p class="text-sm font-medium text-gray-900">Gris 400</p>
    <p class="font-mono text-[11px] text-gray-500 mt-0.5">#9CA3AF</p>
    <code class="font-mono text-[11px] bg-gray-100 px-1.5 py-0.5 rounded-sm inline-block mt-1">text-gray-400</code>
    <p class="text-[11px] text-gray-500 leading-snug mt-2">Labels, captions muted.</p>
  </div>
</div>

### Tipografía

Dos familias en contraste claro. Cormorant Garamond para lo narrativo, Inter para todo lo funcional.

<div class="not-prose grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
  <div class="bg-white rounded-[12px] p-8 border border-black/5">
    <span class="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-bold block mb-4">Serif · Editorial</span>
    <p class="font-serif italic text-7xl text-gray-900 leading-none mb-3">Aa</p>
    <p class="font-serif text-2xl text-gray-700 mb-1">Cormorant Garamond</p>
    <p class="font-mono text-[11px] text-gray-500 mb-4">--font-serif</p>
    <p class="text-[11px] text-gray-500"><strong class="font-medium text-gray-700">Uso:</strong> H1, H2, citas, body editorial. Casi siempre <em>italic</em>.</p>
  </div>
  <div class="bg-white rounded-[12px] p-8 border border-black/5">
    <span class="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-bold block mb-4">Sans · UI</span>
    <p class="text-7xl text-gray-900 leading-none mb-3 font-medium" style="font-family: Inter, sans-serif;">Aa</p>
    <p class="text-2xl text-gray-700 mb-1 font-medium" style="font-family: Inter, sans-serif;">Inter</p>
    <p class="font-mono text-[11px] text-gray-500 mb-4">--font-inter</p>
    <p class="text-[11px] text-gray-500"><strong class="font-medium text-gray-700">Uso:</strong> body, nav, botones, labels, captions, project meta.</p>
  </div>
</div>

### Componentes

Patrones recurrentes que dan personalidad: eyebrow uppercase con tracking ancho, hover coral, status pill animado.

<div class="not-prose bg-white rounded-[12px] p-8 md:p-10 border border-black/5 space-y-8">
  <div>
    <div class="text-[10px] uppercase tracking-[0.3em] font-bold text-gray-400 mb-3">Eyebrow + título editorial</div>
    <div class="font-serif italic text-3xl md:text-4xl font-medium text-gray-900 leading-tight">Project title goes here</div>
  </div>
  <div class="pt-6 border-t border-black/5 flex flex-wrap gap-x-6 gap-y-3 items-center">
    <span class="text-xs font-bold uppercase tracking-[0.2em] text-gray-900 hover:text-[#E0A4B0] transition-colors cursor-pointer">View project →</span>
    <span class="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-bold">Hover en coral</span>
  </div>
  <div class="pt-6 border-t border-black/5 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400">
    <span class="relative flex h-2 w-2">
      <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
      <span class="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
    </span>
    Disponible para proyectos
  </div>
</div>

### Aire

Mucho espacio en blanco. La regla: si dudo de añadir algo, no lo añado.

<div class="not-prose border border-dashed border-gray-300 rounded-[8px] p-12 text-center">
  <div class="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-bold">12 unidades de padding</div>
  <div class="font-serif text-3xl italic mt-6 text-gray-700">aire</div>
  <div class="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-bold mt-6">12 unidades de padding</div>
</div>

<div class="not-prose mt-12">
  <a href="/design-system" class="group block bg-white rounded-[12px] p-8 md:p-10 border border-black/5 hover:border-[#E0A4B0] transition-all">
    <span class="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-bold block mb-4">Documento vivo</span>
    <h4 class="font-serif italic text-3xl md:text-4xl font-medium text-gray-900 leading-tight mb-3 group-hover:text-[#E0A4B0] transition-colors">Ver el design system completo →</h4>
    <p class="text-sm text-gray-600 leading-relaxed max-w-2xl">Tokens, jerarquía tipográfica completa, componentes, espaciado, iconografía, animaciones y brand assets. La guía viva del portfolio, donde cualquier cambio en el código se refleja automáticamente.</p>
  </a>
</div>

## Trabajar con Claude

Lo más interesante no fue el código. Fue tener un interlocutor.

**Diseñar.** No usé Claude para "generar" diseño — los outputs visuales de IA todavía no están al nivel. Lo usé como sparring: le pegaba referencias, le explicaba lo que tenía en la cabeza, y le pedía que me retara — "¿qué le falta?", "¿qué es genérico?", "¿qué quitarías?". Ejemplos reales: la home tenía cuatro filtros de categoría; me preguntó cuántos proyectos había por cada uno, tres tenían uno solo, los quité. Quería un hero con animación; me hizo notar que la primera impresión debía ser el trabajo, no el efecto. Fuera animación.

**Construir.** Aquí la cosa cambia para alguien que no es desarrolladora. Yo describía la pantalla, Claude proponía estructura y código, lo veíamos juntos, yo iteraba en lenguaje de diseño ("este margen es mucho", "esto debería ser uppercase"), Claude ajustaba. Cuando algo fallaba, debugeábamos. Pero las decisiones — qué color, qué tipografía, qué componente — las tomaba yo. Claude no era el autor; era el ejecutor.

Esa distinción fue la que me hizo sentir que el portfolio sigue siendo mío.

## Lo que me llevo

Tengo un portfolio bilingüe, responsive, mantenible desde markdown, construido en una fracción del tiempo. Pero el resultado más importante no se ve en pantalla: ahora sé que puedo construir las herramientas que necesito.

Y dos aprendizajes que me llevo a futuros proyectos:

**1. La IA amplifica criterio, no lo sustituye.** Sin saber qué quería, las respuestas hubieran sido cualquier cosa. El criterio sigue siendo el activo del diseñador.

**2. Diseñar y construir vuelven a estar juntos.** Como en los noventa, cuando los diseñadores web también escribían su HTML. La IA está cerrando esa brecha.
