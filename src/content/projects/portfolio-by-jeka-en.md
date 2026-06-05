---
title: "Portfolio by Jeka: Designing (and building) with AI"
description: "How I designed and built this portfolio end-to-end in collaboration with Claude. An experiment on the role of the designer in the age of AI."
role: "Product Designer & AI-Augmented Builder"
tools: ["Claude (Anthropic)", "Astro", "Tailwind CSS", "Figma", "Markdown"]
type: "Portfolio & Design System"
image: "/pj-portfoliobyjeka-cover.png"
pubDate: 2026-04-28
featured: true
lang: "en"
category: "UX/UI"
aspectRatio: "aspect-[3/4]"
heroAspect: "aspect-[4/3]"
---

My previous portfolio lived on Wix. It did the job — my work was online, I could answer "yes, I have a portfolio" when asked — but every time I opened the editor I hit the same wall: the design I had in my head didn't fit inside the tool. Changing a margin was a fight. Customizing a typeface, another. The portfolio ended up looking more like Wix than like me.

So I decided to start from scratch, with one constraint: I don't really code. Well, just enough to get by. My only help was going to be an AI — Claude. This is what happened.

## The starting point

Three things I knew I needed:
- Bilingual (ES/EN), no patches.
- Maintainable by me alone, without depending on a dev.
- With its own identity — not generic, not a template.

And a fourth, more personal one: as a designer, my job has always been to adapt. Clients change, tools change, methodologies change. AI is just the next change. I'd rather walk in myself than wait to see how everyone else walks in.

## How I thought it through

Before opening Figma or asking Claude anything, I did what I always do: think.

I went through portfolios I admire and took notes on what made me stay and what made me close the tab. I defined a tone — warm, editorial, with room to breathe — because my work is about tradition + digital product, not neon. And before the first pixel, I wrote down which projects I wanted to tell, in what order. Without that base, the design would have been decoration.

## The design system

This is where I stopped seeing it as "a site" and started treating it as a product. Four blocks define the whole visual identity.

### Color

Minimal palette built on a cream background with a single coral accent as a signature. Black and grays do the rest.

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
    <p class="text-sm font-medium text-gray-900">Black</p>
    <p class="font-mono text-[11px] text-gray-500 mt-0.5">#000000</p>
    <code class="font-mono text-[11px] bg-gray-100 px-1.5 py-0.5 rounded-sm inline-block mt-1">bg-black</code>
    <p class="text-[11px] text-gray-500 leading-snug mt-2">Main text, selection.</p>
  </div>
  <div class="group">
    <div class="aspect-square rounded-[8px] border border-black/5 mb-3 transition-transform duration-300 group-hover:scale-[1.03]" style="background-color: #E0A4B0;"></div>
    <p class="text-sm font-medium text-gray-900">Coral</p>
    <p class="font-mono text-[11px] text-gray-500 mt-0.5">#E0A4B0</p>
    <code class="font-mono text-[11px] bg-gray-100 px-1.5 py-0.5 rounded-sm inline-block mt-1">bg-[#E0A4B0]</code>
    <p class="text-[11px] text-gray-500 leading-snug mt-2">Hovers, active links, sole accent.</p>
  </div>
  <div class="group">
    <div class="aspect-square rounded-[8px] border border-black/5 mb-3 transition-transform duration-300 group-hover:scale-[1.03]" style="background-color: #9CA3AF;"></div>
    <p class="text-sm font-medium text-gray-900">Gray 400</p>
    <p class="font-mono text-[11px] text-gray-500 mt-0.5">#9CA3AF</p>
    <code class="font-mono text-[11px] bg-gray-100 px-1.5 py-0.5 rounded-sm inline-block mt-1">text-gray-400</code>
    <p class="text-[11px] text-gray-500 leading-snug mt-2">Labels, muted captions.</p>
  </div>
</div>

### Typography

Two families in clear contrast. Cormorant Garamond for the narrative voice, Inter for everything functional.

<div class="not-prose grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
  <div class="bg-white rounded-[12px] p-8 border border-black/5">
    <span class="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-bold block mb-4">Serif · Editorial</span>
    <p class="font-serif italic text-7xl text-gray-900 leading-none mb-3">Aa</p>
    <p class="font-serif text-2xl text-gray-700 mb-1">Cormorant Garamond</p>
    <p class="font-mono text-[11px] text-gray-500 mb-4">--font-serif</p>
    <p class="text-[11px] text-gray-500"><strong class="font-medium text-gray-700">Use:</strong> H1, H2, quotes, editorial body. Almost always <em>italic</em>.</p>
  </div>
  <div class="bg-white rounded-[12px] p-8 border border-black/5">
    <span class="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-bold block mb-4">Sans · UI</span>
    <p class="text-7xl text-gray-900 leading-none mb-3 font-medium" style="font-family: Inter, sans-serif;">Aa</p>
    <p class="text-2xl text-gray-700 mb-1 font-medium" style="font-family: Inter, sans-serif;">Inter</p>
    <p class="font-mono text-[11px] text-gray-500 mb-4">--font-inter</p>
    <p class="text-[11px] text-gray-500"><strong class="font-medium text-gray-700">Use:</strong> body, nav, buttons, labels, captions, project meta.</p>
  </div>
</div>

### Components

Recurring patterns that give it personality: uppercase eyebrow with wide tracking, coral hover, animated status pill.

<div class="not-prose bg-white rounded-[12px] p-8 md:p-10 border border-black/5 space-y-8">
  <div>
    <div class="text-[10px] uppercase tracking-[0.3em] font-bold text-gray-400 mb-3">Editorial eyebrow + title</div>
    <div class="font-serif italic text-3xl md:text-4xl font-medium text-gray-900 leading-tight">Project title goes here</div>
  </div>
  <div class="pt-6 border-t border-black/5 flex flex-wrap gap-x-6 gap-y-3 items-center">
    <span class="text-xs font-bold uppercase tracking-[0.2em] text-gray-900 hover:text-[#E0A4B0] transition-colors cursor-pointer">View project →</span>
    <span class="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-bold">Coral hover</span>
  </div>
  <div class="pt-6 border-t border-black/5 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400">
    <span class="relative flex h-2 w-2">
      <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
      <span class="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
    </span>
    Available for projects
  </div>
</div>

### Whitespace

Lots of it. The rule: if I'm unsure about adding something, I don't add it.

<div class="not-prose border border-dashed border-gray-300 rounded-[8px] p-12 text-center">
  <div class="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-bold">12 units of padding</div>
  <div class="font-serif text-3xl italic mt-6 text-gray-700">space</div>
  <div class="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-bold mt-6">12 units of padding</div>
</div>

<div class="not-prose mt-12">
  <a href="/design-system" class="group block bg-white rounded-[12px] p-8 md:p-10 border border-black/5 hover:border-[#E0A4B0] transition-all">
    <span class="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-bold block mb-4">Living document</span>
    <h4 class="font-serif italic text-3xl md:text-4xl font-medium text-gray-900 leading-tight mb-3 group-hover:text-[#E0A4B0] transition-colors">See the full design system →</h4>
    <p class="text-sm text-gray-600 leading-relaxed max-w-2xl">Tokens, full typographic hierarchy, components, spacing, iconography, animation and brand assets. The portfolio's living guide, where every change in the code is reflected automatically.</p>
  </a>
</div>

## Working with Claude

The interesting part wasn't the code. It was having an interlocutor.

**Designing.** I didn't use Claude to "generate" design — visual AI outputs still aren't there for real product work. I used it as a sparring partner: I'd paste references, explain what I had in mind, and ask it to push back — "what's missing?", "what's generic?", "what would you cut?". Real examples: the home had four category filters; Claude asked how many projects each one had — three had only one. I cut them. I wanted an animated hero; it pointed out that the first impression should be the work, not the effect. Animation gone.

**Building.** This is where things shift if you're not a developer. I described the screen, Claude proposed structure and code, we'd review together, I'd iterate in design language ("this margin is too much", "this should be uppercase"), Claude adjusted. When something broke, we debugged. But the decisions — what color, what typeface, what component — were mine. Claude wasn't the author; it was the executor.

That distinction was what made me feel the portfolio is still mine.

## What I take away

I have a bilingual, responsive portfolio, maintainable from markdown files, built in a fraction of the time. But the most important outcome doesn't show on screen: I now know I can build the tools I need.

And two takeaways for future projects:

**1. AI amplifies judgment, it doesn't replace it.** Without knowing what I wanted, the answers would have been anything. Judgment is still the designer's core asset.

**2. Designing and building are coming back together.** Like in the nineties, when web designers also wrote their own HTML. AI is closing the gap that opened with "I design, someone else implements".
