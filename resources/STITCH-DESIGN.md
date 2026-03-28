# Design System Strategy: Convergent Cyber Solutions (CCyber)

## 1. Overview & Creative North Star
**Creative North Star: "Architectural Oversight"**

This design system moves beyond the typical "hacker" tropes of cybersecurity to occupy the space of elite strategic management. Our goal is to blend the precision of global consultancy with the resilience of high-stakes digital defense. 

The aesthetic is characterized by **intentional asymmetry** and **tonal depth**. Rather than filling the screen with information, we use generous whitespace (Spacing Scale 16-24) to frame key insights, making the data feel curated and authoritative. We break the "template" look by layering elements horizontally across the grid, allowing components to overlap subtly—mimicking the way strategic layers of a business converge into a single unified defense posture.

---

## 2. Colors
The color palette is built on a foundation of deep, architectural stability, accented by a gradient that signifies the "electric" intelligence of the Convergent Protocol.

*   **Primary Accent:** Use `primary` (#b4ebff) and `primary_container` (#3cd7ff) for high-impact CTAs and critical data points.
*   **Secondary Context:** Use `secondary` (#adc7f7) for supporting information and UI elements that require professional gravity without the "alert" feel of cyan.
*   **Surface Foundation:** The `background` (#0a1325) is our canvas.

### The "No-Line" Rule
To maintain an elite, editorial feel, **1px solid borders are strictly prohibited for sectioning.** Boundaries must be defined through background color shifts. For example, a main content area using `surface` might transition into a footer or sidebar using `surface_container_low`. The eye should perceive change through value, not lines.

### Surface Hierarchy & Nesting
Treat the UI as a physical stack of semi-transparent materials. Use `surface_container` tiers to create depth:
*   **Base:** `surface` (#0a1325)
*   **Elevated Section:** `surface_container_low` (#131b2e)
*   **Floating Cards:** `surface_container_high` (#212a3d)
*   **Nesting:** Place a `surface_container_lowest` card inside a `surface_container_low` section to create a "recessed" effect, suggesting the element is embedded within the strategy.

### Signature Textures & Glassmorphism
For floating navigation bars or high-level modals, use a **Glassmorphism effect**: 
*   **Fill:** `surface_variant` (#2c3548) at 60% opacity.
*   **Filter:** `backdrop-blur: 20px`.
*   **Signature Gradient:** Main CTAs should use a subtle linear gradient from `primary_container` (#3cd7ff) to `on_secondary_container` (#9fb9e8) at a 135-degree angle to provide a "soulful" professional polish.

---

## 3. Typography
We utilize **Manrope** for its geometric balance. It conveys both the "human" element of advisory and the "machine" precision of cybersecurity.

*   **Display (lg/md):** Reserved for high-level editorial statements. Use `display-lg` (3.5rem) with tighter letter-spacing (-0.02em) to feel impactful and modern.
*   **Headlines:** `headline-lg` (2rem) should be used for section headers. Always pair these with generous top-padding (Spacing 20) to give the content room to breathe.
*   **Body (lg/md):** `body-lg` (1rem) is the workhorse. Ensure line-height is ample (1.6) to facilitate long-form strategic reading.
*   **Labels:** `label-md` (0.75rem) in uppercase with +0.05em tracking for technical metadata and small UI identifiers.

---

## 4. Elevation & Depth
Depth is achieved through **Tonal Layering** rather than structural shadows.

*   **The Layering Principle:** Avoid "Drop Shadows" for standard cards. Instead, use a `surface_container_highest` background on a `surface` background to create a soft, natural lift.
*   **Ambient Shadows:** If a floating element (like a dropdown) requires a shadow, it must be an "Ambient Shadow": `0px 24px 48px rgba(0, 0, 0, 0.4)`. The shadow should feel like a soft glow of darkness, never a harsh line.
*   **The "Ghost Border" Fallback:** If accessibility requires a border, use `outline_variant` at 15% opacity. It should be felt, not seen.
*   **Geometric Grid:** Incorporate a faint node-grid pattern (1px dots at 40px intervals) using `outline_variant` at 5% opacity in the background of hero sections to reinforce the "Convergent" network theme.

---

## 5. Components

### Buttons
*   **Primary:** Gradient fill (Primary to Primary Container), `roundedness-md`, `label-md` uppercase text.
*   **Secondary:** `surface_container_highest` fill with `primary` text. No border.
*   **Tertiary:** Ghost style. No fill. `primary` text with a subtle underline on hover.

### Cards & Lists
*   **Card Style:** Use `surface_container_low`. **Never use dividers.** 
*   **Separation:** Use Spacing 4 or 5 between list items. For complex lists, use a 10% opacity `outline_variant` "Ghost Border" only at the bottom of the item.

### Input Fields
*   **Default:** `surface_container_highest` background, `roundedness-sm`.
*   **Active:** A 1px `primary` bottom-border only (no full box border). This mimics the clean look of high-end stationery.

### Strategic Nodes (Custom Component)
Small, geometric indicators (dots or hexes) using the `primary` color that appear next to key data points. These represent "convergent points" in the security network.

---

## 6. Do’s and Don’ts

### Do
*   **Do** use asymmetrical layouts where the left column might be narrow for navigation/metadata and the right column wide for content.
*   **Do** favor "Value Change" over "Lines." If you think you need a border, try changing the background shade by one tier first.
*   **Do** use `roundedness-sm` (0.125rem) for a sharp, architectural feel. Reserve `roundedness-full` only for status chips.

### Don’t
*   **Don't** use neon glows or "hacker" green. This is a boardroom, not a server room.
*   **Don't** use high-contrast dividers. They clutter the architectural purity of the layout.
*   **Don't** crowd the edges. If a component feels "stuck" to the side of the screen, increase the Spacing Scale value immediately.