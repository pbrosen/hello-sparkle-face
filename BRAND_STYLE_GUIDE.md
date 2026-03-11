# HarkenAI Brand & Style Guide

## Brand Overview
HarkenAI is a conversation intelligence platform that listens quietly in the background and turns conversations into searchable, organized knowledge — with summaries, action items, and contact intelligence.

**Tagline:** "Your conversations, automatically captured and organized."

---

## Color Palette (HSL)

### Core Colors
| Token | HSL Value | Usage |
|-------|-----------|-------|
| **Background** | `240 10% 6%` | Primary dark background |
| **Foreground** | `40 20% 92%` | Primary text color |
| **Primary (Amber)** | `36 95% 55%` | CTA buttons, accents, links, icons |
| **Primary Foreground** | `240 10% 6%` | Text on primary-colored elements |
| **Accent** | `36 80% 45%` | Secondary amber for highlights |
| **Glow Amber** | `36 100% 60%` | Glow effects, emphasis |

### Surface Colors
| Token | HSL Value | Usage |
|-------|-----------|-------|
| **Card** | `240 8% 10%` | Card backgrounds |
| **Secondary** | `240 6% 14%` | Input backgrounds, secondary surfaces |
| **Surface Glass** | `240 8% 12%` | Glassmorphism panels |
| **Border** | `240 6% 18%` | Borders, dividers |

### Text Colors
| Token | HSL Value | Usage |
|-------|-----------|-------|
| **Foreground** | `40 20% 92%` | Headings, primary text |
| **Secondary Foreground** | `40 15% 80%` | Secondary text |
| **Muted Foreground** | `240 5% 50%` | Descriptions, captions |
| **Text Dim** | `240 5% 40%` | De-emphasized text |

---

## Typography

### Font Families
- **Headings:** [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk) — weights 300–700
- **Body:** [DM Sans](https://fonts.google.com/specimen/DM+Sans) — weights 300, 400, 500, 700 (+ italic 400)

### Type Scale
| Element | Size | Weight | Font |
|---------|------|--------|------|
| Hero H1 | `text-5xl` → `text-7xl` (responsive) | Bold (700) | Space Grotesk |
| Section H2 | `text-3xl` → `text-5xl` (responsive) | Bold (700) | Space Grotesk |
| Card H3 | Base size | Semibold (600) | Space Grotesk |
| Body | `text-lg` | Regular (400) | DM Sans |
| Caption | `text-sm` / `text-xs` | Regular / Medium | DM Sans |
| Label/Overline | `text-sm` | Medium (500), uppercase, `tracking-widest` | DM Sans |

### Special Text Styles
- **Gradient text:** `text-gradient-amber` — linear-gradient from `hsl(36, 95%, 55%)` to `hsl(28, 100%, 65%)` with background-clip
- Used for hero keywords and section emphasis words

---

## Visual Effects

### Glassmorphism
```css
.glass-card {
  background: hsl(240, 8%, 10% / 0.6);
  backdrop-filter: blur(20px);
  border: 1px solid hsl(240, 6%, 18% / 0.6);
}
```

### Glow Border
```css
.glow-border {
  border: 1px solid hsl(36, 95%, 55% / 0.2);
  box-shadow: 0 0 30px -10px hsl(36, 95%, 55% / 0.15);
}
```

### Gradients
| Name | Value | Usage |
|------|-------|-------|
| Hero gradient | `linear-gradient(135deg, hsl(36, 95%, 55%), hsl(28, 100%, 60%))` | CTA buttons, hero accents |
| Subtle gradient | `linear-gradient(180deg, hsl(240, 10%, 6%), hsl(240, 8%, 9%))` | Section backgrounds |
| Background glow | `bg-primary/5` with `blur-[120px]` | Ambient hero glow |

### Shadows
| Name | Value | Usage |
|------|-------|-------|
| Glow shadow | `0 0 60px -15px hsl(36, 95%, 55%, 0.3)` | Emphasis elements |
| Card shadow | `0 4px 30px -10px hsl(0, 0%, 0%, 0.5)` | Elevated cards |
| Button glow | `0 0 30px -5px hsl(36, 95%, 55%, 0.4)` | CTA buttons |

---

## Components

### Buttons
| Variant | Style |
|---------|-------|
| **Hero (primary CTA)** | Solid amber, glow shadow, hover intensifies glow |
| **Hero Outline** | Amber border at 30% opacity, text in primary amber |
| **Ghost** | Transparent, muted text, hover reveals accent background |
| **Default** | Solid primary background |

### Cards
- Glass cards with `rounded-xl` or `rounded-2xl`
- Hover state adds glow-border
- Icon containers: `rounded-lg bg-primary/10`, hover `bg-primary/20`

### Inputs
- Height: `h-12`
- Background: `bg-secondary`
- Border: `border-border/50`
- Focus ring: `ring-primary/30`

---

## Layout

- **Max content width:** `max-w-6xl` (1152px) via `.section-container`
- **Section padding:** `py-28` vertical, `px-6` horizontal
- **Grid:** 1 → 2 → 3 columns responsive (`sm:grid-cols-2 lg:grid-cols-3`)
- **Border radius:** `0.75rem` base (`--radius`)
- **Navbar:** Fixed, `h-16`, `bg-background/80 backdrop-blur-xl`, bottom border

---

## Motion & Animation

- **Library:** Framer Motion
- **Entry animations:** `opacity: 0, y: 30` → `opacity: 1, y: 0` with `duration: 0.7–0.8s`
- **Staggered children:** `delay: i * 0.07–0.08s`
- **Scroll trigger:** `whileInView` with `viewport={{ once: true }}`
- **Sound wave animation:** 24 bars with randomized height oscillation, `1.2–2s` duration, infinite repeat

---

## Logo

The HarkenAI logo consists of:
1. **Icon:** Three vertical sound wave bars (amber) + a curved ear/headphone shape with an inner dot
2. **Wordmark:** "HarkenAI" in Space Grotesk, semibold, `18px`, `-0.5` letter-spacing

Colors used in logo:
- Bars & ear stroke: `hsl(36, 95%, 55%)` (primary amber)
- Inner dot: `hsl(28, 100%, 60%)` (warm amber accent)
- Text: `currentColor` (adapts to context)

---

## Brand Voice
- **Tone:** Confident, clear, reassuring
- **Key phrases:** "quietly in the background," "automatically captured," "never lose," "searchable insights"
- **Avoid:** Jargon, aggressive sales language, "AI-powered" overuse
- **Pattern:** Problem → Solution → Benefit (conversational, not technical)

---

## File Structure
```
src/index.css          — Design tokens (CSS custom properties)
tailwind.config.ts     — Tailwind theme extension
src/components/ui/     — Reusable UI primitives (shadcn/ui)
src/components/        — Feature components
```
