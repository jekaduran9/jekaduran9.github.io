---
title: "AVIT UX Lab: prototypes you can touch, not pictures"
description: "Auditing a drifting design system and building a lab where every UX problem is explored through several living prototypes — annotated, and commentable down to the pixel."
role: "Product Designer · Design Systems & Prototyping"
tools: ["Figma", "Design Tokens", "React", "Tailwind", "Ionic", "Supabase", "Vercel"]
type: "Design System & Prototyping"
image: "/uxlab-avit/cover.avif"
pubDate: 2026-09-01
featured: true
lang: "en"
status: "In progress"
category: "UX/UI"
aspectRatio: "aspect-[4/5]"
heroImage: "/uxlab-avit/hero-lab.avif"
heroAspect: "aspect-[4/3]"
---

AVIT is an investment product for the Costa Rican stock market. When I joined, its design lived entirely in Figma: beautiful screens, one per state, and a team that took weeks to find out whether an idea worked. There wasn't a single prototype anyone could touch. This is what I built to change that — and it's still under construction.

<div class="not-prose my-12 border border-[#E0A4B0]/40 bg-[#E0A4B0]/8 rounded-[10px] p-6 md:p-8 max-w-[56rem] mx-auto">
    <div class="text-[10px] uppercase tracking-[0.3em] text-[#B8697A] font-bold mb-4">About this case study</div>
    <p class="text-sm md:text-base text-gray-700 leading-relaxed" style="margin:0">
        The product hasn't launched and the work is ongoing, so this is a <strong>slice</strong>, not a finished case. I'm showing the method, the design system, and the pieces I'm free to show. Left out: the link to the lab, the client's own screens, and every business figure — the percentages you see in the screenshots are masked on purpose. I'll keep adding chapters as the project moves.
    </p>
</div>

---

## the context

My role is Product Designer wearing two hats at once: the design system and the prototyping. AVIT is mobile first, built for Costa Rica, and a good share of its flows are non-negotiable because regulation requires them — which leaves every design decision with little room and a lot of weight.

<div class="grid grid-cols-1 md:grid-cols-3 gap-px bg-black/5 border border-black/5 my-12">
    <div class="bg-[#F9F8F3] p-8 md:p-10">
        <div class="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-bold mb-4">My role</div>
        <div class="font-serif italic text-2xl text-gray-900 leading-tight">Design system<br />&amp; prototyping</div>
    </div>
    <div class="bg-[#F9F8F3] p-8 md:p-10">
        <div class="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-bold mb-4">Since</div>
        <div class="font-serif italic text-2xl text-gray-900 leading-tight">May 2026<br />&amp; ongoing</div>
    </div>
    <div class="bg-[#F9F8F3] p-8 md:p-10">
        <div class="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-bold mb-4">Scope</div>
        <div class="font-serif italic text-2xl text-gray-900 leading-tight">7 problems<br />20 prototypes</div>
    </div>
</div>

---

## where it started

The Figma library was called COMPONENTS and it had drifted without anyone noticing. Four components were published twice over — Button, Button Group, Social Button, Download App Button — and nobody knew which one was canonical. Token names carried baked-in typos: `pimario 100` missing its r, `terceario` instead of terciario, `tittle (xl)` with a double t. Several grid definitions lied: a grid named "10 columns" had nine. Shadows were tinted with Tailwind's default palette rather than the brand purple. And spacing and radius tokens simply didn't exist.

The handoff was the classic one — classic because I've lived it everywhere: one static screen per state, and the missing states got asked about later. Measurements were read off the Figma panel. Comments lived locked inside the design file, where only account holders go. The flow was explained with arrows.

None of that is anyone's fault. It's what happens when documentation and product live in different tools and only one of them runs.

---

## audit before building

Before drawing anything, I exported the Figma tokens and sat down to read them. Out came **85 colour tokens** across ten families, **49 typographic styles** split between Montserrat and Open Sans, **14 shadows** and **18 grid definitions**, plus the **23 components** published in the library.

I documented every defect I found instead of quietly fixing it. That was the least obvious decision and the one that paid off most: if the documentation corrects a typo and Figma doesn't, the documentation starts lying the day it's written. So `pimario 100` stayed written as `pimario 100`, with a note beside it explaining what happened. Same for the page Figma titles "Iconography" and describes as Ionicons when the layers are, in fact, Boxicons: reality wins over the title.

The tokens Figma didn't have I invented and flagged as local convention, so they'd stay distinguishable from the exported ones: a five-step spacing scale derived from the grid's own gutters, and a four-step radius scale.

<div class="not-prose grid grid-cols-1 md:grid-cols-2 gap-4 my-12 max-w-6xl mx-auto">
    <figure class="m-0">
        <div class="overflow-hidden bg-gray-100 rounded-[8px] border border-black/5">
            <img src="/uxlab-avit/tokens.avif" alt="The lab's token explorer: primary, secondary, error and success colour families, each swatch labelled with its name and hex value." class="w-full h-auto object-cover" style="margin:0" loading="lazy" decoding="async" width="1600" height="1222" />
        </div>
        <figcaption class="text-xs uppercase tracking-widest text-gray-400 font-bold mt-4 text-center">The token explorer, living inside the lab itself</figcaption>
    </figure>
    <figure class="m-0">
        <div class="overflow-hidden bg-gray-100 rounded-[8px] border border-black/5">
            <img src="/uxlab-avit/system-design.avif" alt="Browsable component gallery grouped into foundations, action, forms, navigation, feedback, layout and data visualisation." class="w-full h-auto object-cover" style="margin:0" loading="lazy" decoding="async" width="1600" height="1167" />
        </div>
        <figcaption class="text-xs uppercase tracking-widest text-gray-400 font-bold mt-4 text-center">21 components, with live preview and copyable code</figcaption>
    </figure>
</div>

The system stopped being a file you consult and became code that runs: the same tokens feed the documentation, the lab, and — later — the app.

---

## the system, live

This is the piece that best explains why a prototype you can touch beats a screen you can only look at. Move the risk level and everything else answers: the allocation, the donut, the description. In a static image this is five screens and an arrow; here it's one gesture.

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
<div class="avitlab-demo" id="avitlab-demo-en">
<p class="avitlab-eyebrow">Step 2 of 3</p>
<p class="avitlab-title">Choose your strategy</p>
<div class="avitlab-row"><span class="avitlab-label">Risk level</span><span class="avitlab-level" id="avitlab-level-en">Moderate</span></div>
<input class="avitlab-slider" id="avitlab-range-en" type="range" min="1" max="5" step="1" value="3" aria-label="Risk level of the strategy" aria-describedby="avitlab-desc-en" />
<div class="avitlab-stops" id="avitlab-stops-en"><span data-on="0">Conservative</span><span data-on="0">Cautious</span><span data-on="1">Moderate</span><span data-on="0">Growth</span><span data-on="0">Aggressive</span></div>
<div class="avitlab-body">
<svg class="avitlab-donut" viewBox="0 0 180 180" role="img" aria-label="Portfolio allocation for the selected risk level"><circle cx="90" cy="90" r="66" fill="none" stroke="#f0f0f0" stroke-width="20"></circle><g transform="rotate(-90 90 90)" stroke-width="20" fill="none" stroke-linecap="butt"><circle data-seg="0" cx="90" cy="90" r="66" stroke="#00bfe7" stroke-dasharray="165.9 248.8" stroke-dashoffset="0"></circle><circle data-seg="1" cx="90" cy="90" r="66" stroke="#a200ea" stroke-dasharray="165.9 248.8" stroke-dashoffset="-165.9"></circle><circle data-seg="2" cx="90" cy="90" r="66" stroke="#ee007e" stroke-dasharray="49.8 364.9" stroke-dashoffset="-331.8"></circle><circle data-seg="3" cx="90" cy="90" r="66" stroke="#fdb342" stroke-dasharray="33.2 381.5" stroke-dashoffset="-381.6"></circle></g></svg>
<ul class="avitlab-legend" id="avitlab-legend-en"><li><span class="avitlab-dot" style="background:#00bfe7"></span>Fixed income<span class="avitlab-pct" data-pct="0">40 %</span></li><li><span class="avitlab-dot" style="background:#a200ea"></span>Global equities<span class="avitlab-pct" data-pct="1">40 %</span></li><li><span class="avitlab-dot" style="background:#ee007e"></span>Emerging markets<span class="avitlab-pct" data-pct="2">12 %</span></li><li><span class="avitlab-dot" style="background:#fdb342"></span>Cash<span class="avitlab-pct" data-pct="3">8 %</span></li></ul>
</div>
<p class="avitlab-desc" id="avitlab-desc-en" aria-live="polite">A balanced starting point: half the portfolio is trying to grow, the other half cushions the bad years.</p>
<p class="avitlab-foot">A reconstruction of the interaction pattern using AVIT's real palette and radii. The percentages are invented for this demo.</p>
</div>
<script>
(() => {
  const root = document.getElementById('avitlab-demo-en');
  if (!root) return;
  const range = document.getElementById('avitlab-range-en');
  const level = document.getElementById('avitlab-level-en');
  const stops = document.querySelectorAll('#avitlab-stops-en span');
  const pcts = root.querySelectorAll('[data-pct]');
  const segs = root.querySelectorAll('[data-seg]');
  const desc = document.getElementById('avitlab-desc-en');
  if (!range) return;
  const C = 2 * Math.PI * 66;
  const LEVELS = [
    { name: 'Conservative', alloc: [70, 15, 5, 10], text: 'Almost everything in fixed income: it barely moves, and that is exactly the point.' },
    { name: 'Cautious', alloc: [55, 28, 7, 10], text: 'Still anchored in fixed income, but it lets equities in so it does not stand completely still.' },
    { name: 'Moderate', alloc: [40, 40, 12, 8], text: 'A balanced starting point: half the portfolio is trying to grow, the other half cushions the bad years.' },
    { name: 'Growth', alloc: [25, 52, 18, 5], text: 'Equities take over. It climbs faster and it falls faster too: this one needs a long horizon.' },
    { name: 'Aggressive', alloc: [10, 62, 25, 3], text: 'Nearly all equities and emerging markets. The bad years are genuinely felt, and you have to be able to sit through them.' },
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

## one problem, several options

The lab has one rule and everything else follows from it: **a problem is never solved with a single proposal**. Every UX problem lives as a dated project, with its context and hypothesis written down before anything is drawn, and hanging underneath it every option we actually built, numbered.

Before the first option there's research. I look at how other investment apps solve the same problem, the regional ones especially: they set which patterns people here already know how to use, and which ones still need explaining. I go back through the UX evaluations of the current flow to see where it snags today. And I find out which parts of the flow are required by regulation, because those don't move however much they get in the way, and it's better to know that before proposing something that can't be built. That's what I write the hypothesis from. Drawing comes after.

Discarded options don't get deleted. They're marked as hidden — they leave the list — but their route stays live, so anyone can walk back in and see why it was dropped. Of twenty prototypes built, most are hidden today. That gap is part of the argument: **it was ruled out with the prototype running, not with a picture**.

<figure class="not-prose my-14 max-w-4xl mx-auto">
    <div class="overflow-hidden bg-gray-100 rounded-[8px] border border-black/5">
        <img src="/uxlab-avit/opciones.avif" alt="A list headed «Opciones de prototipo · 9» with numbered cards from 01 to 06, each describing a different version of the home screen." class="w-full h-auto object-cover" style="margin:0" loading="lazy" decoding="async" width="1400" height="2656" />
    </div>
    <figcaption class="text-xs uppercase tracking-widest text-gray-400 font-bold mt-4 text-center">Nine ways to solve the same home screen</figcaption>
</figure>

---

## notes in the margin

When you show a client a prototype the same thing always happens: they understand *what* they're looking at, but not *why* it is the way it is. And if you're not standing there to narrate it, the prototype gets read wrong.

So every prototype carries its own annotation layer. They're sticky notes living in the margins of the screen, anchored at the height of whatever they explain: the left-hand one tells you the change, the right-hand one the reasoning. Each has a tone depending on what it is — a key change, a warning, something still to be confirmed — and a minimum desired position; if the note above grows, the margin pushes the one below down instead of overlapping it. On narrow screens the margins disappear and the notes stack underneath the phone, in reading order.

<figure class="not-prose my-14 max-w-6xl mx-auto">
    <div class="overflow-hidden bg-gray-100 rounded-[8px] border border-black/5">
        <img src="/uxlab-avit/sticky-notes.avif" alt="An account-opening prototype inside a phone frame, surrounded by coloured sticky notes explaining each design decision." class="w-full h-auto object-cover" style="margin:0" loading="lazy" decoding="async" width="1600" height="1333" />
    </div>
    <figcaption class="text-xs uppercase tracking-widest text-gray-400 font-bold mt-4 text-center">The prototype explains itself: the argument travels attached to the screen</figcaption>
</figure>

The side effect turned out to be the good part. Because the notes live inside the prototype rather than in a separate document, the meeting stopped being a presentation and became a reading: the client walks through it alone, follows the reasoning, and arrives at the call with questions instead of doubts. Writing the note disciplines me too: if I can't defend a change in four lines, the change probably isn't ready.

---

## commenting on the pixel

The client asked for something very specific and very reasonable: **to leave feedback without a Figma account and without it getting lost in a chat thread**. So I built positional comments into the lab itself.

Every prototype has a floating button. By default the prototype is clean — pins hidden, nothing polluting the design — and the button shows how many threads exist. Turn it on and every pin appears; a click on the screen drops a new one right there. Each pin is a thread: open it, reply, mark it resolved — the pin dims — or drag it somewhere else. Whoever comments only leaves a name; email is optional. No sign-up, no login, no invitation to accept.

<figure class="not-prose my-14 max-w-6xl mx-auto">
    <div class="overflow-hidden bg-gray-100 rounded-[8px] border border-black/5">
        <img src="/uxlab-avit/comentarios.avif" alt="The prototype in comment mode: a purple pin dropped on a card and a «New comment» panel with name, optional email and the comment text." class="w-full h-auto object-cover" style="margin:0" loading="lazy" decoding="async" width="1600" height="1222" />
    </div>
    <figcaption class="text-xs uppercase tracking-widest text-gray-400 font-bold mt-4 text-center">A comment pinned to the exact point on the screen</figcaption>
</figure>

Underneath it's a single Supabase table with row-level security: open reads, inserts validated by length, and replies modelled in the same table pointing back at the root comment. My favourite design decision in the whole system is also the least visible: **pin coordinates aren't stored in pixels, they're stored as a percentage of the prototype frame**. That's why the same comment lands on the same relative spot whether you open it on a desktop, where the prototype sits in a 420px frame, or on a phone, where it fills the width. A pin stored in pixels would have peeled off the element it pointed at the moment anyone changed screen size.

I read it all from a separate dashboard, grouped by project and option, with replies nested and a counter for what's new since my last visit. The published lab also sits behind a password enforced at the edge, before anything is served: without it you don't even download the JavaScript, and if the configuration is missing the site fails closed rather than exposing the prototypes.

---

## iterating in the open

The loop settled into this: branch, change, automatic preview deploy, link to the client, comment pinned on the screen, merge. Between May and August 2026 that came to **274 commits and around 114 pull requests**, with several explorations open in parallel whenever paths needed comparing.

The most honest part of working this way isn't the hits, it's the reversals — and they're all on the record. There was a chapter of the flow the client asked for in the morning and withdrew the same day. There was a discarded option we made visible again weeks later, because the problem had changed shape. There was AI-search copy I had to neutralise so it could never be read as "recommendation" or "advice". And there was a legal review that rewrote an entire screen: the app stopped suggesting a risk level and started describing the selected one, the possible drawdown moved up onto the collapsed card so the trade-off was visible without expanding anything, and an explicit confirmation was added before investing.

That last change is exactly the prototype you can touch further up this page.

---

## from the lab to the app

In August the lab stopped being the end of the road. The flows that were already settled began graduating into a second application built with Ionic and Angular — the product's real stack — running Metamap's identity verification for real and the data Alpaca requires as custodian.

They're two applications with different purposes and they share no code: the lab compares options, the app runs a single version the way production would. The only thing they share are the tokens, duplicated on purpose. And the rule runs one way only: **lab first, app second**. Nothing gets ported before it's settled.

<div class="not-prose grid grid-cols-1 md:grid-cols-2 gap-4 my-12 max-w-6xl mx-auto">
    <figure class="m-0">
        <div class="overflow-hidden bg-gray-100 rounded-[8px] border border-black/5">
            <img src="/uxlab-avit/proto-desktop.avif" alt="Desktop portfolio prototype: strategy list on the left, detail in the centre, sticky panel on the right." class="w-full h-auto object-cover" style="margin:0" loading="lazy" decoding="async" width="1600" height="1056" />
        </div>
        <figcaption class="text-xs uppercase tracking-widest text-gray-400 font-bold mt-4 text-center">The same problem, solved for desktop</figcaption>
    </figure>
    <figure class="m-0">
        <div class="overflow-hidden bg-gray-100 rounded-[8px] border border-black/5">
            <img src="/uxlab-avit/proto-moneda.avif" alt="Home screen prototype with a currency switch that swaps the entire card." class="w-full h-auto object-cover" style="margin:0" loading="lazy" decoding="async" width="1400" height="1159" />
        </div>
        <figcaption class="text-xs uppercase tracking-widest text-gray-400 font-bold mt-4 text-center">When the rule becomes structure, not a footnote</figcaption>
    </figure>
</div>

Two examples of what changed along the way. The savings product's onboarding went from five screens to one, with the only decision that genuinely matters — the currency — right at the top. And account opening, which today is five steps and more than fifty screens counting a single branch, was cut down to fifteen turns across six chapters: identity validation moved to the first chapter so it fails early instead of thirty steps in, and scanning the document fills the fields in rather than making someone type them.

That second one also carries the decision I'm proudest of, and it's a screen I chose to delete. The "application under review" state lasts hours or days; a closing screen is read once and left behind. What the person still needs has to live where they come back to, which is the home screen.

---

## what I'm taking with me

- **Auditing is designing.** The hours I spent reading exported tokens — finding typos, grids that lied, shadows from someone else's palette — were worth more than any new screen. You can't build on a system nobody trusts.
- **Document the defect instead of hiding it.** If the docs fix what Figma doesn't, the docs start lying the day they're written. I preserved the typos with a note beside them, and the file stayed true.
- **A proposal isn't a decision.** Building several options costs more, but it changes the conversation: you stop debating taste and start comparing behaviour. And ruling something out with the prototype running leaves a record a picture never does.
- **The argument travels with the screen.** Margin notes let the client walk through it alone and understand the why. The meeting stopped being a presentation and became a conversation.
- **The invisible detail is the one holding it up.** Storing comments as percentages rather than pixels shows up in no screenshot, and it's the only reason feedback keeps pointing at what it was pointing at.
- **I'm still in it.** There are chapters left to write, decisions left to reverse and flows left to graduate. I'll keep updating this case as I'm able to tell it.
