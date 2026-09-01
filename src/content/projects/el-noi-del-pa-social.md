---
title: "El Noi del Pa Sense Gluten: Contenido para Redes Sociales"
description: "Dirección creativa y producción de contenido para redes sociales: fotografía de producto, reels y storytelling artesanal para una panadería sin gluten en Barcelona."
role: "Content Creator & Social Media Designer"
tools: ["Instagram", "Reels", "Photography", "Canva", "CapCut", "Adobe Lightroom"]
type: "Social Media & Content Creation"
image: "/noi-social/post-05-croissant.jpg"
pubDate: 2026-04-24
featured: true
lang: "es"
category: "Social Media"
aspectRatio: "aspect-[3/4]"
heroVideo: "/noi-social/reel-02-tienda.mp4"
heroAspect: "aspect-[4/5]"
---

## EL NOI DEL PA · CONTENIDO EN REDES

Después del rediseño del ecosistema digital, asumí la dirección creativa y la producción de contenido para las redes sociales de la panadería. El reto: comunicar la autenticidad del obrador y convertir el "sin gluten" en un valor aspiracional, no una limitación. El resultado es un feed coherente donde producto, proceso y comunidad conviven con un mismo lenguaje visual.

### ROL
Content Creator & Social Media Designer

### CLIENTE
El Noi del Pa Sense Gluten · Barcelona

### OBJETIVO
Aumentar la visibilidad local, humanizar la marca, mostrar el proceso artesanal y conectar con la comunidad celiaca y foodie de Barcelona a través de Instagram.

---

## DIRECCIÓN CREATIVA
Luz natural, tonos tostados y ocres, composiciones cercanas y detalle de textura. Tipografías cálidas que refuerzan el carácter artesanal sin caer en lo rústico. Todo el contenido —foto, video, copy— nace de una misma pauta visual construida para ser reconocible desde el primer scroll.

**Pilares de contenido**
- **Producto** — Fotografía cuidada que destaca textura y color del pan.
- **Proceso** — Detrás de cámaras del obrador y manos trabajando la masa.
- **Comunidad** — Eventos, fiestas locales (Sant Jordi, Pascua, Croissandfest) y colaboraciones.
- **Educación** — Ingredientes, trazabilidad y por qué el pan sin gluten también puede ser delicioso.

---

## PERFIL DE INSTAGRAM

<div class="not-prose max-w-5xl mx-auto bg-white border border-black/5 p-8 md:p-14 my-12">
    <div class="flex flex-col md:flex-row items-center justify-center gap-5 mb-14">
        <h3 class="text-2xl md:text-3xl font-medium tracking-tight">elnoidelpasensegluten</h3>
        <span class="text-[10px] px-5 py-2 bg-[#825943] text-white font-bold uppercase tracking-[0.2em]">Seguir</span>
    </div>
    <div class="grid grid-cols-3 gap-4 md:gap-12 text-center">
        <div>
            <div data-counter="247" class="text-4xl md:text-7xl font-bold tracking-tighter tabular-nums">0</div>
            <div class="text-[10px] md:text-xs uppercase tracking-[0.25em] text-gray-500 mt-3">Publicaciones</div>
        </div>
        <div>
            <div data-counter="2300" data-format="K" class="text-4xl md:text-7xl font-bold tracking-tighter tabular-nums text-[#825943]">0</div>
            <div class="text-[10px] md:text-xs uppercase tracking-[0.25em] text-gray-500 mt-3">Seguidores</div>
        </div>
        <div>
            <div data-counter="128" class="text-4xl md:text-7xl font-bold tracking-tighter tabular-nums">0</div>
            <div class="text-[10px] md:text-xs uppercase tracking-[0.25em] text-gray-500 mt-3">Seguidos</div>
        </div>
    </div>
</div>

<script>
  (() => {
    const counters = document.querySelectorAll('[data-counter]');
    if (!counters.length) return;
    const animate = (el) => {
      const target = parseInt(el.dataset.counter, 10);
      const format = el.dataset.format;
      const duration = 1800;
      const start = performance.now();
      const tick = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = Math.round(target * eased);
        if (format === 'K' && current >= 1000) {
          el.textContent = (current / 1000).toFixed(1).replace('.', ',') + 'K';
        } else {
          el.textContent = current.toString();
        }
        if (progress < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !entry.target.dataset.animated) {
          entry.target.dataset.animated = 'true';
          animate(entry.target);
        }
      });
    }, { threshold: 0.4 });
    counters.forEach((c) => obs.observe(c));
  })();
</script>

### FEED

<div class="not-prose grid grid-cols-3 gap-2 md:gap-3 my-10 max-w-5xl mx-auto">
    <div class="aspect-[4/5] overflow-hidden bg-gray-100 group relative">
        <img src="/noi-social/post-04-croissandfest.png" alt="Croissandfest" class="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" decoding="async" />
    </div>
    <div class="aspect-[4/5] overflow-hidden bg-gray-100 group relative">
        <img src="/noi-social/post-05-croissant.jpg" alt="Croissant" class="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" decoding="async" />
    </div>
    <div class="aspect-[4/5] overflow-hidden bg-gray-100 group relative">
        <img src="/noi-social/post-01-bretzel.png" alt="Bretzel cabello de ángel" class="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" decoding="async" />
    </div>
    <div class="aspect-[4/5] overflow-hidden bg-gray-100 group relative">
        <img src="/noi-social/post-02-bandeja.jpg" alt="Bandeja de pan" class="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" decoding="async" />
    </div>
    <div class="aspect-[4/5] overflow-hidden bg-gray-100 group relative">
        <img src="/noi-social/post-11-nuestraweb.png" alt="Nueva web" class="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" decoding="async" />
    </div>
    <div class="aspect-[4/5] overflow-hidden bg-gray-100 group relative">
        <img src="/noi-social/post-12-panmolde.png" alt="Pan de molde" class="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" decoding="async" />
    </div>
    <div class="aspect-[4/5] overflow-hidden bg-gray-100 group relative">
        <img src="/noi-social/post-07-sabadell.png" alt="Eventos Sabadell" class="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" decoding="async" />
    </div>
    <div class="aspect-[4/5] overflow-hidden bg-gray-100 group relative">
        <img src="/noi-social/post-14-santjoan.jpg" alt="Sant Joan" class="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" decoding="async" />
    </div>
    <div class="aspect-[4/5] overflow-hidden bg-gray-100 group relative">
        <img src="/noi-social/post-09-monas.png" alt="Monas de Pascua" class="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" decoding="async" />
    </div>
    <div class="aspect-[4/5] overflow-hidden bg-gray-100 group relative">
        <img src="/noi-social/post-10-monaspascua.png" alt="Monas de Pascua" class="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" decoding="async" />
    </div>
    <div class="aspect-[4/5] overflow-hidden bg-gray-100 group relative">
        <img src="/noi-social/post-06-dragon.jpg" alt="Sant Jordi" class="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" decoding="async" />
    </div>
    <div class="aspect-[4/5] overflow-hidden bg-gray-100 group relative">
        <img src="/noi-social/post-08-horripascua.png" alt="Horri Pascua" class="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" decoding="async" />
    </div>
    <div class="aspect-[4/5] overflow-hidden bg-gray-100 group relative">
        <img src="/noi-social/post-03-corbata.png" alt="Corbata" class="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" decoding="async" />
    </div>
    <div class="aspect-[4/5] overflow-hidden bg-gray-100 group relative">
        <img src="/noi-social/post-13-special.jpg" alt="Producto especial" class="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" decoding="async" />
    </div>
</div>

---

## REELS
Contenido en movimiento: proceso, producto en acción y microhistorias del obrador.

<div class="not-prose grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 my-16 max-w-5xl mx-auto items-start">
    <div class="bg-white p-3 pb-12 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.15)] rotate-[-2deg] hover:rotate-0 transition-transform duration-500 mx-auto w-full max-w-xs">
        <div class="aspect-[4/5] overflow-hidden bg-[#F1EDE4]">
            <video data-src="/noi-social/reel-01-palmeritas.mp4" class="w-full h-full object-cover" preload="none" autoplay loop muted playsinline></video>
        </div>
        <div class="pt-4 text-center font-serif italic text-sm text-neutral-600">Palmeritas</div>
    </div>
    <div class="bg-white p-3 pb-12 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.15)] rotate-[1deg] hover:rotate-0 transition-transform duration-500 mx-auto w-full max-w-xs md:mt-10">
        <div class="aspect-[4/5] overflow-hidden bg-[#F1EDE4]">
            <video data-src="/noi-social/reel-02-tienda.mp4" class="w-full h-full object-cover" preload="none" autoplay loop muted playsinline></video>
        </div>
        <div class="pt-4 text-center font-serif italic text-sm text-neutral-600">Tienda</div>
    </div>
    <div class="bg-white p-3 pb-12 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.15)] rotate-[-1deg] hover:rotate-0 transition-transform duration-500 mx-auto w-full max-w-xs">
        <div class="aspect-[4/5] overflow-hidden bg-[#F1EDE4]">
            <video data-src="/noi-social/reel-03-panquinoa.mp4" class="w-full h-full object-cover" preload="none" autoplay loop muted playsinline></video>
        </div>
        <div class="pt-4 text-center font-serif italic text-sm text-neutral-600">Pan de quinoa</div>
    </div>
</div>

---

## RESULTADOS
- **Feed reconocible:** lenguaje visual consistente que comunica la esencia artesanal en cada post.
- **Comunidad activa:** interacción orgánica con clientes locales y comunidad celiaca de Barcelona.
- **Contenido de temporada:** campañas vinculadas a festividades locales (Sant Jordi, Pascua, Croissandfest) que posicionan la marca dentro del calendario cultural catalán.
- **Storytelling omnicanal:** integración del contenido de RRSS con la web y Glovo para reforzar cada punto de contacto.

---

## APRENDIZAJES
- **Coherencia visual ante todo:** un feed con lenguaje propio genera reconocimiento instantáneo.
- **El proceso vende más que el producto:** mostrar manos, harina y horno conecta más que un bodegón perfecto.
- **Lo artesanal necesita ritmo:** alternar producto, persona y proceso para no saturar.
- **Escuchar a la comunidad:** stories y comentarios son una fuente real de contenido.

<script>
  (() => {
    const vids = document.querySelectorAll('video[data-src]');
    if (!vids.length) return;
    const load = (v) => {
      if (v.dataset.loaded) return;
      v.dataset.loaded = '1';
      v.src = v.dataset.src;
      const p = v.play();
      if (p) p.catch(() => {});
    };
    if (!('IntersectionObserver' in window)) { vids.forEach(load); return; }
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { load(e.target); obs.unobserve(e.target); }
      });
    }, { rootMargin: '400px' });
    vids.forEach((v) => obs.observe(v));
  })();
</script>
