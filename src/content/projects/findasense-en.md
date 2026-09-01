---
title: "Findasense: Global Digital Ecosystem Redesign"
description: "Strategic redesign to transform a corporate website into a global lead generation engine."
role: "UX/UI Designer"
tools: ["Figma", "Design Thinking", "WordPress 6.4"]
type: "Digital Ecosystem"
image: "/pj-findasense-cover.avif"
pubDate: 2024-03-07
featured: true
lang: "en"
aspectRatio: "aspect-square"
---

## The context

Findasense is a global digital transformation consultancy. When I joined the project, their site had a quietly broken hero: the most valuable space on the page was an internal note about being acquired by TP Infinity. The brand was talking about itself before the user even understood what it did.

On top of that, "design debt": duplicated sections, broken hierarchy, long forms. The site informed, but it didn't convince.

My challenge was to flip this under a simple premise: *the user doesn't want to know who you are until they understand how you can help them.* I didn't start with design — I started by understanding why the site wasn't working.


## Audit and references

The audit revealed that 60% of the issues weren't pixel problems — they were structural. Four patterns kept coming up:

*   **Sections saying the same thing twice.** "What we do" and "What problems we solve" lived apart but told the same story.
*   **No visual hierarchy.** Everything competed for attention at the same level — H1, paragraphs, and links read the same.
*   **Dead-end navigation.** From "Insights" there was no way back to Home. The flow just stopped.
*   **Long forms.** Every extra field was an abandonment point.

Then I looked at what the reference agencies were doing right — R/GA, MRM, GUT, Globant, Huge — and took three ideas:

*   **Bold + uppercase** in hero to sound authoritative without losing warmth.
*   **Modular layouts** that scale without rewriting CSS every time a new block comes in.
*   **Red hovers** as the single accent, not decoration: the hand guiding to the click.

## Three pillars, three decisions

With the audit on the table, I narrowed the redesign down to three pillars. Each one with a concrete decision behind it:

1.  **Clarity.** The Hero went from "corporate news" to direct value proposition. If you don't understand what Findasense does in five seconds, I failed.
2.  **Trust.** I moved Success Stories and client logos (Coca-Cola, Lenovo, Bimbo) up to the first scroll. What used to live below the fold became the first thing users see.
3.  **Conversion.** The long form was broken into five single-field steps. Less friction per screen, same data collected.

## Reorganizing the house

I rewrote the sitemap by flipping the traditional order: what we do first, who we are after. Conversion and expertise come first; the company history, behind.

<div class="not-prose my-16 overflow-hidden rounded-2xl">
    <img src="/pj-findasense-sitemap.svg" 
        alt="Findasense Sitemap" 
        class="w-full h-auto object-contain" loading="lazy" decoding="async" />
</div>

Two decisions came with this restructuring:

*   **UX Writing.** Methodology and culture sections were unified under "Who we are." Fewer doors, same content.
*   **Persistent navigation.** The Header always carries a contact CTA and an ES/EN/PT selector visible from any level. No one gets lost.

## From wireframe to system

I designed in Figma with a UI Kit built for WordPress 6.4 from day one. The rule: nothing the dev team couldn't replicate with Gutenberg.

**Low-fi wireframing.** I mapped the flow making sure no page was a dead end — especially news and press, where users used to get stuck.

<div class="not-prose my-16 space-y-10">
    <div class="animate-slide-right">
        <img src="/pj-lowfi-prototype-desktop-findasense.png" 
            alt="Low-Fi Wireframe Desktop" 
            class="zoomable cursor-zoom-in w-full h-auto object-contain transition-opacity hover:opacity-90" loading="lazy" decoding="async" width="1920" height="655" />
    </div>
    <div class="flex justify-center animate-slide-right-delayed">
        <img src="/pj-lowfi-prototype-mobile-findasense.avif" 
            alt="Low-Fi Wireframe Mobile" 
            class="zoomable cursor-zoom-in w-full max-w-sm h-auto object-contain transition-opacity hover:opacity-90" loading="lazy" decoding="async" width="1920" height="1839" />
    </div>
</div>

**High-fidelity.** Four decisions that shaped the system:

*   **Color blocks** to visually separate services and success stories without needing to read.
*   **Findasense Red** as the single accent — keywords, hovers, buttons. Nothing else.
*   **Mobile first** for real: every component tested on mobile before desktop.
*   **Navigable prototype** delivered to the internal team to test transitions and the form flow before handoff.

## Design System (UI Kit)

The visual system was built as a solid, scalable foundation: color tokens, typographic hierarchy, and consistent components that ensure coherence across the digital ecosystem and ease of maintenance in WordPress.

### Color

A palette built around Findasense's signature red as the single accent, balanced with black, cream, a sky blue for tech blocks, and white as the clean base.

<div class="not-prose grid grid-cols-2 md:grid-cols-5 gap-4 mt-6">
  <div class="group">
    <div class="aspect-square rounded-[8px] border border-black/5 mb-3 transition-transform duration-300 group-hover:scale-[1.03]" style="background-color: #F04130;"></div>
    <p class="text-sm font-medium text-gray-900">Orange</p>
    <p class="font-mono text-[11px] text-gray-500 mt-0.5">#F04130</p>
    <code class="font-mono text-[11px] bg-gray-100 px-1.5 py-0.5 rounded-sm inline-block mt-1">brand-red</code>
    <p class="text-[11px] text-gray-500 leading-snug mt-2">CTAs, hovers, brand accent.</p>
  </div>
  <div class="group">
    <div class="aspect-square rounded-[8px] border border-black/5 mb-3 transition-transform duration-300 group-hover:scale-[1.03]" style="background-color: #121212;"></div>
    <p class="text-sm font-medium text-gray-900">Black</p>
    <p class="font-mono text-[11px] text-gray-500 mt-0.5">#121212</p>
    <code class="font-mono text-[11px] bg-gray-100 px-1.5 py-0.5 rounded-sm inline-block mt-1">brand-black</code>
    <p class="text-[11px] text-gray-500 leading-snug mt-2">Headings and main copy.</p>
  </div>
  <div class="group">
    <div class="aspect-square rounded-[8px] border border-black/5 mb-3 transition-transform duration-300 group-hover:scale-[1.03]" style="background-color: #EFE2CF;"></div>
    <p class="text-sm font-medium text-gray-900">Cream</p>
    <p class="font-mono text-[11px] text-gray-500 mt-0.5">#EFE2CF</p>
    <code class="font-mono text-[11px] bg-gray-100 px-1.5 py-0.5 rounded-sm inline-block mt-1">brand-cream</code>
    <p class="text-[11px] text-gray-500 leading-snug mt-2">Warm blocks, services.</p>
  </div>
  <div class="group">
    <div class="aspect-square rounded-[8px] border border-black/5 mb-3 transition-transform duration-300 group-hover:scale-[1.03]" style="background-color: #54A4DB;"></div>
    <p class="text-sm font-medium text-gray-900">Sky Blue</p>
    <p class="font-mono text-[11px] text-gray-500 mt-0.5">#54A4DB</p>
    <code class="font-mono text-[11px] bg-gray-100 px-1.5 py-0.5 rounded-sm inline-block mt-1">brand-blue</code>
    <p class="text-[11px] text-gray-500 leading-snug mt-2">Tech and data blocks.</p>
  </div>
  <div class="group">
    <div class="aspect-square rounded-[8px] border border-black/5 mb-3 transition-transform duration-300 group-hover:scale-[1.03]" style="background-color: #FFFFFF;"></div>
    <p class="text-sm font-medium text-gray-900">White</p>
    <p class="font-mono text-[11px] text-gray-500 mt-0.5">#FFFFFF</p>
    <code class="font-mono text-[11px] bg-gray-100 px-1.5 py-0.5 rounded-sm inline-block mt-1">brand-white</code>
    <p class="text-[11px] text-gray-500 leading-snug mt-2">Clean base, spacing and cards.</p>
  </div>
</div>

### Typography

A single typeface — **Montserrat** — used across all weights to keep a coherent visual voice between headings, body, and UI. Uppercase in hero and key sections to reinforce editorial tone and brand authority.

<div class="not-prose grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-6">
  <div class="bg-white rounded-[12px] p-8 border border-black/5">
    <span class="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-bold block mb-4">Display · Headings</span>
    <p class="text-7xl text-gray-900 leading-none mb-3 font-bold" style="font-family: Montserrat, sans-serif;">Aa</p>
    <p class="text-2xl text-gray-700 mb-1 font-bold" style="font-family: Montserrat, sans-serif;">Montserrat Bold</p>
    <p class="font-mono text-[11px] text-gray-500 mb-4">font-bold · 700</p>
    <p class="text-[11px] text-gray-500"><strong class="font-medium text-gray-700">Use:</strong> H1 to H6, taglines, CTAs. Uppercase in hero and impact sections.</p>
  </div>
  <div class="bg-white rounded-[12px] p-8 border border-black/5">
    <span class="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-bold block mb-4">Body · UI</span>
    <p class="text-7xl text-gray-900 leading-none mb-3" style="font-family: Montserrat, sans-serif;">Aa</p>
    <p class="text-2xl text-gray-700 mb-1" style="font-family: Montserrat, sans-serif;">Montserrat Regular</p>
    <p class="font-mono text-[11px] text-gray-500 mb-4">font-normal · 400</p>
    <p class="text-[11px] text-gray-500"><strong class="font-medium text-gray-700">Use:</strong> paragraphs, nav, forms, captions. Light, Medium, and Semibold for secondary hierarchy.</p>
  </div>
</div>

<div class="not-prose mt-6 bg-white rounded-[12px] p-8 border border-black/5">
  <span class="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-bold block mb-6">Type scale · Desktop</span>
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
      <span class="text-[1rem] md:text-[1.125rem] leading-relaxed text-gray-700">Body text — editorial paragraphs and main site content.</span>
    </div>
  </div>
</div>

### Brand asset: the comma

The comma from the logo stopped being a typographic detail and became the visual device that ties the whole system together. I used it as a portrait container, a frame for hero illustrations, a background for testimonials, and a decorative element. One shape, many roles — same form, different weights.

<div class="not-prose mt-8">
  <img src="/Findasense/pj-findasense-coma2.avif" 
    alt="Comma applications: portrait frames, hero illustrations, testimonials, and decorative elements"
    class="zoomable cursor-zoom-in w-full h-auto object-contain mix-blend-multiply transition-opacity hover:opacity-90" loading="lazy" decoding="async" width="1915" height="2432" />
</div>

## Final prototype

The result: a website that says what it does before saying who it is. Direct hero, success stories on the first scroll, frictionless form, and a coherent visual identity from start to finish.

<div class="not-prose mt-8">
  <img src="/Findasense/pf-findasense-prototype-desktop.avif" 
    alt="Final prototype desktop: full scroll of the redesigned site"
    class="zoomable cursor-zoom-in w-full h-auto object-contain mix-blend-multiply transition-opacity hover:opacity-90" loading="lazy" decoding="async" width="3000" height="1013" />
  <p class="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-bold mt-4">Full scroll · Desktop</p>
</div>

## Designing for what gets built

Since the site would be implemented in WordPress 6.4, every block went through a check with the dev team: if it couldn't be built with Gutenberg or a visual builder, it didn't make it into the design. That protected loading speed (WPO) and removed custom code that would've been a pain to maintain.

The weekly reviews with the team sharpened three things:

*   The Hero message — version after version until anyone could get it at a glance.
*   The tactile response of mobile buttons — bigger tap areas, clearer feedback.
*   Multilingual consistency — some layouts broke in Portuguese due to text length, I adjusted them.

## Solution and impact
The result is a minimalist, powerful, and results-oriented website that redefines Findasense's digital presence.

<div class="not-prose grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
<div class="bg-white border border-black/5 p-8 rounded-2xl hover:border-red-500/20 transition-colors group">
<div class="w-10 h-10 bg-red-50 rounded-full flex items-center justify-center text-red-600 mb-6 group-hover:scale-110 transition-transform">
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-globe"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
</div>
<h4 class="text-xs font-bold uppercase tracking-widest mb-3">Positioning</h4>
<p class="text-sm text-gray-500 leading-relaxed">Findasense now visually competes with the best agencies in the world, conveying authority and modernity.</p>
</div>
<div class="bg-white border border-black/5 p-8 rounded-2xl hover:border-red-500/20 transition-colors group">
<div class="w-10 h-10 bg-red-50 rounded-full flex items-center justify-center text-red-600 mb-6 group-hover:scale-110 transition-transform">
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mouse-pointer-2"><path d="m3 3 7.07 16.97 2.51-7.39 7.39-2.51L3 3z"/><path d="m13 13 6 6"/></svg>
</div>
<h4 class="text-xs font-bold uppercase tracking-widest mb-3">Usability</h4>
<p class="text-sm text-gray-500 leading-relaxed">Navigation errors were eliminated, and click depth to reach key information was reduced.</p>
</div>
<div class="bg-white border border-black/5 p-8 rounded-2xl hover:border-red-500/20 transition-colors group">
<div class="w-10 h-10 bg-red-50 rounded-full flex items-center justify-center text-red-600 mb-6 group-hover:scale-110 transition-transform">
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trending-up"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>
</div>
<h4 class="text-xs font-bold uppercase tracking-widest mb-3">Conversion</h4>
<p class="text-sm text-gray-500 leading-relaxed">The new simplified form is designed to significantly increase the volume of qualified leads.</p>
</div>
<div class="bg-white border border-black/5 p-8 rounded-2xl hover:border-red-500/20 transition-colors group">
<div class="w-10 h-10 bg-red-50 rounded-full flex items-center justify-center text-red-600 mb-6 group-hover:scale-110 transition-transform">
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-layers"><path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"/><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"/></svg>
</div>
<h4 class="text-xs font-bold uppercase tracking-widest mb-3">Scalability</h4>
<p class="text-sm text-gray-500 leading-relaxed">A robust component system ready to grow and adapt to the consultancy's future needs.</p>
</div>
</div>

## Deliverables
*   UX Audit and competitive Benchmark.
*   New Sitemap and Information Architecture.
*   Low and High Fidelity Wireframes.
*   Full UI Kit: Variables, components, and styles.
*   Interactive prototype in Figma.
*   Style guide for WordPress implementation.

## Live digital ecosystem
Explore the experience designed for Findasense's global ecosystem.

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
                Visit <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-external-link"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
            </div>
        </div>
        <div class="aspect-video w-full bg-gray-100 border-x border-b border-black/5 rounded-b-xl overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-500 relative">
            <img src="/pj-findasense-prototype.avif" 
                alt="Findasense Website Preview" 
                class="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-700" loading="lazy" decoding="async" />
            <div class="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors flex items-center justify-center">
                <div class="bg-black text-white text-[10px] font-bold uppercase tracking-[0.2em] px-6 py-3 rounded-full opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    View live website
                </div>
            </div>
        </div>
    </a>
    <p class="text-[10px] text-gray-400 uppercase tracking-widest text-center mt-4 font-bold">Click on the image to explore the real website ↑</p>
</div>
