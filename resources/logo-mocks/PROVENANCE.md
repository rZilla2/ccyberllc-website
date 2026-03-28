# Logo Mock Provenance

## logo-final-longhorn-shield.png (9:11 PM CT version, made white)
- **Source file:** logo-mock-3h.png
- **Generator:** Gemini 2.5 Flash Image (gemini-2.5-flash-image) via Google AI Studio API
- **Date:** 2026-03-28
- **Method:** Image-to-image edit of logo-mock-3.png (vertical version)
- **Parent prompt (logo-mock-3):**
  ```
  Corporate logo design on pure black background. A sleek stylized longhorn icon — two converging angular lines forming horns, with a subtle shield shape integrated into the design. 'CONVERGENT' text in heavy tracked uppercase steel gray letters. Monochrome only — grays and silvers. Think McKinsey meets Texas.
  ```
- **Edit prompt (3 → 3h):**
  ```
  Redesign this logo with a HORIZONTAL layout instead of vertical/stacked. Keep the exact same longhorn-shield icon on the LEFT, and place 'CONVERGENT' in bold tracked uppercase to the RIGHT of the icon, on the same line. Same pale ice blue (#b4ebff) color, same dark background. The icon and text should be side by side, not stacked. Generate 1 clean version. No tagline or extra text.
  ```
- **Post-processing:** Pixels with RGB avg > 130 converted to pure white (#ffffff)

## logo-final-abstract-horns.png (9:17 PM CT version)
- **Source file:** logo-mock-4e.png
- **Generator:** Gemini 2.5 Flash Image (gemini-2.5-flash-image) via Google AI Studio API
- **Date:** 2026-03-28
- **Method:** Iterative image-to-image edits: 4 → 4c → 4d → 4e
- **Parent prompt (logo-mock-4):**
  ```
  A geometric minimalist logo on black background. Longhorn horns abstracted into two curved metallic gray arcs that converge at a point, suggesting both a longhorn and convergence. Below or beside: 'CONVERGENT' in bold modern sans-serif, dark steel gray. Sophisticated, corporate, zero color. Flat vector aesthetic.
  ```
- **Edit chain:**
  - 4 → 4c: "Keep this exact logo design. Only change: remove all glow, gradient, metallic, and shine effects. Make the horn icon solid pale blue (#b4ebff). Make the text solid dark gray (#5a6672). Keep the solid black background. Everything should be flat filled shapes only."
  - 4c → 4d: "Two changes only: 1) Horn icon ONE SINGLE FLAT COLOR — solid #b4ebff, no shading. 2) Text color to white (#ffffff)."
  - 4d → 4e: "Change the horn icon color to pure white (#ffffff) to match the text. Everything else stays exactly the same."

## Reproducibility Note
Gemini image generation is NOT deterministic — there is no seed parameter in the public API. These exact images CANNOT be regenerated identically. The PNG files saved here ARE the source of truth. For production use, trace to SVG for infinite scalability.
