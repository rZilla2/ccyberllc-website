# Convergent Cyber Solutions - Stitch Design System

## Project
- **Stitch Project ID:** 17595373788838838413
- **Target Screen ID:** 6a81ccb7e5d24722bd760fad98fb7aa6
- **Screen Title:** Convergent Cybersecurity Home Page
- **Device:** Desktop (1376x768)

## Creative North Star: "Architectural Oversight"
Elite strategic management aesthetic. Blend precision of global consultancy with resilience of high-stakes digital defense. Intentional asymmetry and tonal depth.

## Colors

### Palette
| Role | Token | Hex |
|------|-------|-----|
| Primary Accent | `primary` | #b4ebff |
| Primary Container | `primary_container` | #3cd7ff |
| Secondary | `secondary` | #adc7f7 |
| On Secondary Container | `on_secondary_container` | #9fb9e8 |
| Background / Base Surface | `background` | #0a1325 |
| Elevated Section | `surface_container_low` | #131b2e |
| Floating Cards | `surface_container_high` | #212a3d |
| Surface Variant (Glass) | `surface_variant` | #2c3548 |
| Outline Variant | `outline_variant` | rgba(255,255,255,0.15) |

### Rules
- **No-Line Rule:** No 1px solid borders for sectioning. Use background color shifts.
- **Glassmorphism:** `surface_variant` at 60% opacity + `backdrop-blur: 20px`
- **CTA Gradient:** Linear gradient from `primary_container` to `on_secondary_container` at 135deg
- **Ghost Border:** `outline_variant` at 15% opacity when accessibility requires it

## Typography
- **Font Family:** Manrope
- **Display Large:** 3.5rem, letter-spacing -0.02em
- **Headline Large:** 2rem, generous top-padding
- **Body Large:** 1rem, line-height 1.6
- **Labels:** 0.75rem, uppercase, +0.05em tracking

## Elevation & Depth
- Tonal layering over drop shadows
- Ambient shadows only for floating elements: `0px 24px 48px rgba(0, 0, 0, 0.4)`
- Geometric node-grid: 1px dots at 40px intervals, `outline_variant` at 5% opacity

## Components
- **Primary Button:** Gradient fill, rounded-md, label uppercase
- **Secondary Button:** `surface_container_highest` fill, primary text, no border
- **Cards:** `surface_container_low`, no dividers
- **Roundness:** sm (0.125rem) for architectural feel, full only for status chips

## Brand Content
- **Company:** Convergent Cyber Solutions
- **Tagline:** "Securing Your Digital Future"
- **Services:** Strategic Advisory, vCISO, AI-Driven GRC
- **Voice:** Peer/partner to cyber pros + business growth consultancy
- **CTA:** "Book a Meeting"
