# Design Audit: Landing Page Implementation Comparison

**Date:** 2026-03-27
**Source of truth:** `resources/gray-model-fullres.png`
**Test 1:** `stitch-skills-test` branch (Stitch skills pipeline)
**Test 2:** `stitch-kit-test` branch (Stitch kit pipeline)

---

## 1. Side-by-Side Scoring (1-10)

| Dimension                    | Original Reference | Test 1 (stitch-skills) | Test 2 (stitch-kit) |
|-----------------------------|--------------------|------------------------|----------------------|
| Layout fidelity             | 10                 | **8**                  | **3**                |
| Color/tone accuracy         | 10                 | **7**                  | **2**                |
| Shield rendering quality    | 10                 | **6**                  | **1**                |
| Geometric background quality| 10                 | **7**                  | **1**                |
| Typography match            | 10                 | **7**                  | **3**                |
| Button styling              | 10                 | **7**                  | **4**                |
| Nav accuracy                | 10                 | **7**                  | **2**                |
| Overall visual impact       | 10                 | **7**                  | **2**                |

**Test 1 average: 7.0 / 10**
**Test 2 average: 2.25 / 10**

---

## 2. Critical Gaps

### Test 1 (stitch-skills) — Specific Issues

**A. Shield is too dark and lacks frosted-glass translucency**
The original shield has a clear glass/ice quality — you can see the geometric background through it. The facets catch light with distinct specular highlights along edges. Test 1's shield reads as opaque dark SVG panels rather than translucent frosted glass.
- SVG fill opacities are 0.22-0.35 which is close, but `backdrop-filter: blur()` is missing on the shield element itself
- No ambient light reflection on the upper-left facet (the original has a bright highlight at roughly the 10 o'clock position)
- Edge highlights (strokes) are too subtle at 0.3 opacity — the original has visible white-ish edge lines at ~0.4-0.5

**B. Shield size and position are slightly off**
The original shield is centered roughly at 55-60% from left, overlapping behind the heading text slightly. Test 1 places the shield fully to the right with `justify-between`, creating a wider gap. The shield should partially overlap the text column to match the layered depth in the original.

**C. Geometric background lacks visible edge lines**
The original has clearly visible polygon edge lines creating a crystalline/faceted look across the right 60% of the viewport. Test 1's polygon fills are close in color but the edge lines (`stroke` on each polygon, `strokeWidth: 0.5`, `opacity: 0.3`) are too faint. The original shows crisp, bright edge highlights at roughly `rgba(80,90,100,0.4)`.

**D. Color temperature is slightly too warm**
The original background leans cool-neutral (blue-gray). Test 1's gradient `#1a1f25 -> #2d3436` is correct in darkness but the polygon fills like `#2a2f33`, `#313639` skew slightly warm/green. The original is more blue-leaning, closer to `#252b33`, `#2d3540`.

**E. Typography color is too muted**
The original headline "Securing Your Digital Future" is brighter — closer to `#d8dde2` or even `#e0e4e8`. Test 1 uses `#c8cdd2` which reads darker than the original. The subtitle text in the original is also slightly brighter than Test 1's `#7a8490`.

**F. Buttons lack the soft frosted-glass pill effect**
The original "GET STARTED" button has a more prominent frosted appearance — a visible background fill with a slight inner glow. Test 1's `rgba(120,130,140,0.35)` is close but needs `backdrop-filter: blur(8px)` and a slightly brighter border.

**G. Nav "Contact" button should be a rounded pill, not sharp corners**
The original shows a rounded-pill outline for "Contact". Test 1 uses `rounded-sm` (2px border-radius). Should be `rounded-full`.

### Test 2 (stitch-kit) — Specific Issues

**A. Completely wrong design concept**
Test 2 is a carousel/slider with centered text, Lucide icons, `< />` code brackets decorating the title, and blue accent colors. This bears essentially no resemblance to the original design. It appears to be a generic Tokyo Night themed template rather than an implementation of the source screenshot.

**B. No shield at all**
The defining visual element — a large frosted-glass shield — is entirely absent. Replaced with small Lucide `ShieldCheck` icon.

**C. No geometric polygon background**
The crystalline faceted background is completely missing. Uses a flat gradient with a background image overlay.

**D. Wrong layout structure**
Original: left-aligned text + right-positioned shield, single hero section.
Test 2: centered text, carousel with 4 slides, navigation arrows, dot indicators.

**E. Wrong color palette**
Original: cool dark grays (#1a1f25 to #353a3e) with no blue accent.
Test 2: uses `primary` theme color (appears blue), `secondary`, `accent-foreground` — a completely different color language.

**F. Wrong typography treatment**
Centered vs left-aligned. Includes code-bracket decorations `< />` that don't exist in the original. Uses `font-extrabold` instead of the original's `font-bold`.

**G. Wrong button text and behavior**
Original: "GET STARTED" and "LEARN MORE" — static.
Test 2: "Book a Meeting" and "Explore Services" — different labels, with route navigation.

---

## 3. Winner

**Test 1 (stitch-skills) wins decisively.**

Test 1 captures the correct design intent: dark geometric background, left-aligned hero text, right-positioned frosted shield, correct nav structure, correct button labels, correct color palette family. It is a recognizable implementation of the original design that needs refinement.

Test 2 is an entirely different design. It shares the company name and dark theme but otherwise implements a different concept (centered carousel, blue accents, no shield, no geometric background). It would require a complete rewrite to match the original.

---

## 4. Fix List — Top 5 Changes to Improve Test 1

### Fix 1: Add backdrop-filter blur to the shield SVG container (highest impact)

The shield needs to look like frosted glass, not opaque panels. The SVG alone cannot achieve this — the container needs CSS glass effects.

```tsx
// In GlassShield, wrap the SVG in a div with glass effect
<div className="relative">
  {/* Glass backdrop layer — clips to shield shape */}
  <div
    className="absolute inset-0"
    style={{
      clipPath: "polygon(50% 6%, 87.5% 21%, 87.5% 58%, 50% 94%, 12.5% 58%, 12.5% 21%)",
      backdropFilter: "blur(12px)",
      WebkitBackdropFilter: "blur(12px)",
      background: "rgba(160, 170, 180, 0.08)",
    }}
  />
  <svg ...>
    {/* Increase fill opacities: glass-left stops to 0.18/0.12/0.15,
        glass-right stops to 0.15/0.10/0.13 — lighter = more transparent */}
    {/* Add a specular highlight path on upper-left quadrant:
        <path d="M120 80 L200 60 L200 180 L100 160 Z" fill="#a8b0b8" opacity="0.12" /> */}
    {/* Increase edge stroke opacities from 0.25-0.3 to 0.4-0.5 */}
    {/* Increase center-line stroke opacity from 0.4 to 0.55 */}
  </svg>
</div>
```

The `clipPath` polygon approximates the shield outline. This makes the background bleed through the shield with a frosted effect.

### Fix 2: Shift shield left so it partially overlaps the text column

The original shield's left edge is at roughly 40% viewport width, partially behind the headline. Currently the `justify-between` layout pushes the shield fully right.

```tsx
// Replace the hero flex layout:
<div className="w-full max-w-[1400px] mx-auto relative">
  {/* Shield — positioned absolutely to overlap text */}
  <div className="hidden md:block absolute right-[5%] top-1/2 -translate-y-1/2 z-0">
    <GlassShield />  {/* Increase size: w-[520px] h-[620px] lg:w-[560px] lg:h-[660px] */}
  </div>
  {/* Text — higher z-index */}
  <div className="relative z-10 flex flex-col max-w-2xl pt-16">
    ...text content...
  </div>
</div>
```

Also increase the shield size. Current max is `lg:w-[480px] lg:h-[560px]`. The original shield covers roughly 45% of viewport width. Set to `w-[520px] h-[620px]` at lg breakpoint, `w-[580px] h-[680px]` at xl.

### Fix 3: Brighten polygon edge lines and shift background colors cooler

The geometric facets need more visible edges to match the crystalline look.

```tsx
// In GeometricBackground:
// 1. Add visible strokes to each polygon:
<polygon points="1920,1080 1400,1080 1600,800"
  fill="#2a3038"   /* shift toward blue: was #2a2f33 */
  stroke="#4a5560" /* visible edge line */
  strokeWidth="0.8"
  opacity="0.9"
/>

// 2. Replace all polygon fill colors — shift the 'f' (blue) channel up by 3-5 hex:
//    #2a2f33 -> #2a3038
//    #313639 -> #31363f
//    #282d31 -> #282d36
//    #353a3e -> #353a44
//    #2e3337 -> #2e333c

// 3. Increase edge line stroke opacities from 0.15-0.3 to 0.3-0.5
// 4. Increase edge line strokeWidth from 0.5 to 0.8-1.0
// 5. Change edge line stroke color from #3d4347 to #4d5560
```

### Fix 4: Brighten headline and subtitle text colors

```tsx
// Headline: change from #c8cdd2 to #dce0e5
<motion.h1 style={{ color: "#dce0e5" }}>
  ...
  <span style={{ color: "#e8ecf0" }}>  {/* was #d5dade */}

// Subtitle: change from #7a8490 to #8a94a0
<motion.p style={{ color: "#8a94a0" }}>
```

### Fix 5: Fix nav Contact button to rounded pill + fix button backdrop-filter

```tsx
// GlassNav.tsx — Contact button: change rounded-sm to rounded-full
<Link
  href="#contact"
  className="text-[0.8rem] font-semibold px-5 py-2 rounded-full border border-muted-foreground/30 text-foreground hover:border-primary/50 hover:text-primary transition-all duration-200"
>

// page.tsx — GET STARTED button: add backdrop blur
<button
  className="px-7 py-3 rounded-full text-sm font-semibold tracking-wider uppercase transition-all duration-300 hover:brightness-110"
  style={{
    background: "rgba(130, 140, 150, 0.30)",
    backdropFilter: "blur(8px)",
    WebkitBackdropFilter: "blur(8px)",
    color: "#c8cdd4",
    border: "1px solid rgba(140, 150, 160, 0.25)",
  }}
>

// LEARN MORE button: add subtle backdrop blur
<button
  style={{
    background: "rgba(140, 150, 160, 0.08)",
    backdropFilter: "blur(6px)",
    WebkitBackdropFilter: "blur(6px)",
    color: "#a8b0b8",
    border: "1px solid rgba(150, 160, 170, 0.30)",
  }}
>
```

---

## Summary

| Metric | Test 1 | Test 2 |
|--------|--------|--------|
| Average score | 7.0 | 2.25 |
| Correct concept | Yes | No |
| Fixable with CSS/SVG tweaks | Yes (5 targeted fixes) | No (full rewrite required) |
| Recommended path | Refine this implementation | Discard |

Test 1 is the clear winner and is a solid 70% match. The five fixes above — ordered by visual impact — would bring it to an estimated 85-90% match. The remaining 10-15% gap would require fine-tuning individual polygon vertex positions to match the exact triangulation pattern in the original, and potentially using a rasterized/pre-rendered shield image for perfect glass fidelity.
