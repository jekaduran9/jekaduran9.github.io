---
title: "El Noi del Pa Sense Gluten: Social Media Content"
description: "Creative direction and content production for social media: product photography, reels and artisanal storytelling for a gluten-free bakery in Barcelona."
role: "Content Creator & Social Media Designer"
tools: ["Instagram", "Reels", "Photography", "Canva", "CapCut", "Adobe Lightroom"]
type: "Social Media & Content Creation"
image: "/noi-social/post-05-croissant.avif"
pubDate: 2026-04-24
featured: true
lang: "en"
category: "Social Media"
aspectRatio: "aspect-[3/4]"
heroVideo: "/noi-social/reel-02-tienda.mp4"
heroAspect: "aspect-[4/5]"
---

## EL NOI DEL PA · SOCIAL MEDIA

After the redesign of the digital ecosystem, I took over the creative direction and content production for the bakery's social media. The challenge: to communicate the authenticity of the workshop and turn "gluten-free" into an aspirational value, not a limitation. The result is a coherent feed where product, process, and community share the same visual language.

### ROLE
Content Creator & Social Media Designer

### CLIENT
El Noi del Pa Sense Gluten · Barcelona

### GOAL
To increase local visibility, humanize the brand, showcase the artisanal process, and connect with Barcelona's celiac and foodie community through Instagram.

---

## CREATIVE DIRECTION
Natural light, toasted and ocher tones, close compositions and textural detail. Warm typography that reinforces the artisanal character without falling into rustic clichés. Every piece of content —photo, video, copy— comes from the same visual guideline built to be recognizable from the first scroll.

**Content pillars**
- **Product** — Curated photography highlighting bread's texture and color.
- **Process** — Behind-the-scenes of the workshop and hands kneading dough.
- **Community** — Events, local festivities (Sant Jordi, Easter, Croissandfest) and collaborations.
- **Education** — Ingredients, traceability, and why gluten-free bread can also be delicious.

---

## INSTAGRAM PROFILE

<div class="not-prose max-w-5xl mx-auto bg-white border border-black/5 p-8 md:p-14 my-12">
    <div class="flex flex-col md:flex-row items-center justify-center gap-5 mb-14">
        <h3 class="text-2xl md:text-3xl font-medium tracking-tight">elnoidelpasensegluten</h3>
        <span class="text-[10px] px-5 py-2 bg-[#825943] text-white font-bold uppercase tracking-[0.2em]">Follow</span>
    </div>
    <div class="grid grid-cols-3 gap-4 md:gap-12 text-center">
        <div>
            <div data-counter="247" class="text-4xl md:text-7xl font-bold tracking-tighter tabular-nums">0</div>
            <div class="text-[10px] md:text-xs uppercase tracking-[0.25em] text-gray-500 mt-3">Posts</div>
        </div>
        <div>
            <div data-counter="2300" data-format="K" class="text-4xl md:text-7xl font-bold tracking-tighter tabular-nums text-[#825943]">0</div>
            <div class="text-[10px] md:text-xs uppercase tracking-[0.25em] text-gray-500 mt-3">Followers</div>
        </div>
        <div>
            <div data-counter="128" class="text-4xl md:text-7xl font-bold tracking-tighter tabular-nums">0</div>
            <div class="text-[10px] md:text-xs uppercase tracking-[0.25em] text-gray-500 mt-3">Following</div>
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
        <img src="/noi-social/post-04-croissandfest.avif" alt="Croissandfest" class="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" decoding="async" />
    </div>
    <div class="aspect-[4/5] overflow-hidden bg-gray-100 group relative">
        <img src="/noi-social/post-05-croissant.avif" alt="Croissant" class="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" decoding="async" />
    </div>
    <div class="aspect-[4/5] overflow-hidden bg-gray-100 group relative">
        <img src="/noi-social/post-01-bretzel.avif" alt="Bretzel" class="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" decoding="async" />
    </div>
    <div class="aspect-[4/5] overflow-hidden bg-gray-100 group relative">
        <img src="/noi-social/post-02-bandeja.avif" alt="Bread tray" class="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" decoding="async" />
    </div>
    <div class="aspect-[4/5] overflow-hidden bg-gray-100 group relative">
        <img src="/noi-social/post-11-nuestraweb.avif" alt="New website" class="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" decoding="async" />
    </div>
    <div class="aspect-[4/5] overflow-hidden bg-gray-100 group relative">
        <img src="/noi-social/post-12-panmolde.avif" alt="Sandwich bread" class="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" decoding="async" />
    </div>
    <div class="aspect-[4/5] overflow-hidden bg-gray-100 group relative">
        <img src="/noi-social/post-07-sabadell.avif" alt="Sabadell events" class="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" decoding="async" />
    </div>
    <div class="aspect-[4/5] overflow-hidden bg-gray-100 group relative">
        <img src="/noi-social/post-14-santjoan.avif" alt="Sant Joan" class="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" decoding="async" />
    </div>
    <div class="aspect-[4/5] overflow-hidden bg-gray-100 group relative">
        <img src="/noi-social/post-09-monas.avif" alt="Easter cakes" class="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" decoding="async" />
    </div>
    <div class="aspect-[4/5] overflow-hidden bg-gray-100 group relative">
        <img src="/noi-social/post-10-monaspascua.avif" alt="Easter cakes" class="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" decoding="async" />
    </div>
    <div class="aspect-[4/5] overflow-hidden bg-gray-100 group relative">
        <img src="/noi-social/post-06-dragon.avif" alt="Sant Jordi" class="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" decoding="async" />
    </div>
    <div class="aspect-[4/5] overflow-hidden bg-gray-100 group relative">
        <img src="/noi-social/post-08-horripascua.avif" alt="Easter campaign" class="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" decoding="async" />
    </div>
    <div class="aspect-[4/5] overflow-hidden bg-gray-100 group relative">
        <img src="/noi-social/post-03-corbata.avif" alt="Tie" class="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" decoding="async" />
    </div>
    <div class="aspect-[4/5] overflow-hidden bg-gray-100 group relative">
        <img src="/noi-social/post-13-special.avif" alt="Special product" class="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" decoding="async" />
    </div>
</div>

---

## REELS
Content in motion: process, product in action and small stories from the bakery.

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
        <div class="pt-4 text-center font-serif italic text-sm text-neutral-600">Shop</div>
    </div>
    <div class="bg-white p-3 pb-12 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.15)] rotate-[-1deg] hover:rotate-0 transition-transform duration-500 mx-auto w-full max-w-xs">
        <div class="aspect-[4/5] overflow-hidden bg-[#F1EDE4]">
            <video data-src="/noi-social/reel-03-panquinoa.mp4" class="w-full h-full object-cover" preload="none" autoplay loop muted playsinline></video>
        </div>
        <div class="pt-4 text-center font-serif italic text-sm text-neutral-600">Quinoa bread</div>
    </div>
</div>

---

## RESULTS
- **Recognizable feed:** consistent visual language that communicates the artisanal essence in every post.
- **Active community:** organic interaction with local customers and Barcelona's celiac community.
- **Seasonal content:** campaigns tied to local festivities (Sant Jordi, Easter, Croissandfest) that position the brand within the Catalan cultural calendar.
- **Omnichannel storytelling:** integration of social content with the website and Glovo to reinforce every touchpoint.

---

## KEY LEARNINGS
- **Visual consistency first:** a feed with its own language builds instant recognition.
- **The process sells more than the product:** showing hands, flour and oven connects better than a perfect still life.
- **Craft needs rhythm:** alternating product, people and process avoids saturation.
- **Listen to the community:** stories and comments are a real source of content.

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
