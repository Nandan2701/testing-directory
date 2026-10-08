# 🎨 Locked Design System: Linear Slate & Electric Cobalt
## VNIT Startups Directory — Production Visual System (Variation 04 Winner)

> **Document Status:** 100% Locked & Approved Production Specification  
> **Selected Theme:** **Variation 04: Linear Slate & Electric Cobalt**  
> **Aesthetic Philosophy:** High-velocity Silicon Valley engineering, Linear/Vercel precision, mathematical telemetry, and crisp institutional rigor.  
> **Directory:** `assets/color_palette_and_design_tokens.md`

---

## 1. Executive Aesthetic Identity

The **VNIT Startups Directory** is locked to the **Linear Slate & Electric Cobalt** visual architecture:
1. **Engineered Precision Canvas:** A cool slate off-white canvas (`#F8FAFC`) layered with subtle 28px technical blueprint gridlines (`#E2E8F0`), giving cards physical grounding and high-tech utility feel.
2. **High-Velocity Contrast:** Deep Oxford Slate typography (`#0F172A`) paired with bold **Electric Cobalt Blue (`#2563EB`)** accents on primary headlines, interactive actions, and live telemetry tags.
3. **Mathematical Provenance:** Complete integration of `JetBrains Mono` for cohort years (`Mech '16`), financial figures (`$4.2M`), headcount (`38 FTE`), and command bar badges with `tabular-nums` active.
4. **Crisp 1px Hairline Surfaces:** Clean 1px hairline borders (`#CBD5E1` on cards, `#E2E8F0` on canvas), 6px–8px engineered radii, and 1mm tactile hover elevation.

---

## 2. The 60-30-10 Token Hierarchy

```
┌────────────────────────────────────────────────────────────────────────┐
│ 60% DOMINANT NEUTRAL BASE (Engineered Blueprint Ground)                │
│ ▫️ Canvas Ground:      #F8FAFC (Cool Slate Tint — Zero Glare)           │
│ ▫️ Blueprint Grid:     1px lines in #E2E8F0 on a 28px × 28px pitch      │
│ ▫️ Elevated Cards:     #FFFFFF (Pure White Floating Precision Sheets)   │
│ ▫️ Shaded Card Footer: #F8FAFC (Structural Context Strip)               │
│ ▫️ Divider Hairlines:  #E2E8F0 (Internal 1px Technical Dividers)       │
└────────────────────────────────────────────────────────────────────────┘
                                    │
┌────────────────────────────────────────────────────────────────────────┘
│ 30% STRUCTURAL INK & HAIRLINE BORDERS (Hierarchy & Reading)            │
│ ◼️ Ink Primary (Headings):   #0F172A (Deep Oxford Slate — 14.2:1 AAA)   │
│ ◼️ Ink Secondary (Pitch):    #334155 (Charcoal Slate — 8.6:1 AAA)       │
│ ◼️ Ink Muted (Metadata):     #64748B (Steel Slate — 4.9:1 AA)          │
│ ▫️ Hairline Border (Rest):   #E2E8F0 (Crisp 1px Physical Edge)          │
│ ▫️ Hairline Border (Card):   #CBD5E1 (Defined Containment Rim)          │
└────────────────────────────────────────────────────────────────────────┘
                                    │
┌────────────────────────────────────────────────────────────────────────┘
│ 10% HIGH-ENERGY INTERACTIVE ACCENTS & TELEMETRY                        │
│ 🔵 Primary Action / CTA:     #2563EB (Electric Cobalt Blue)            │
│ 🔵 Primary Action Hover:     #1D4ED8 (Deep Cobalt Blue)                 │
│ 🔷 Telemetry Badge Fill:     #EFF6FF (Cobalt Light Tint)                │
│ 🔷 Telemetry Badge Border:   #BFDBFE (Cobalt 200 Hairline)              │
│ 🟢 Verified Alumni Proof:    #059669 on #ECFDF5 (Emerald Seal)          │
│ 🟠 Bootstrapped Signal:      #92400E on #FFFBEB (Amber Solvency)        │
│ ⬛ Monogram Hallmark Tile:   #0F172A (Solid Slate 900 Tile)             │
└────────────────────────────────────────────────────────────────────────┘
```

---

## 3. Production CSS Variables (Ready to Drop)

```css
:root {
  /* ==========================================================================
     1. TYPOGRAPHY SYSTEM (STRICT 2-FONT STANDARD)
     ========================================================================== */
  --font-primary: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --font-mono: 'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;

  /* ==========================================================================
     2. SURFACE TOKENS (60% BASE)
     ========================================================================== */
  --surface-canvas:       #F8FAFC; /* Primary page background (reduces glare) */
  --surface-card:         #FFFFFF; /* Elevated card and drawer surfaces */
  --surface-footer:       #F8FAFC; /* Stage 1 shaded footer and table headers */
  --surface-badge-neutral:#F1F5F9; /* Inactive filter tags & sector pills */
  --surface-hover:        #F8FAFC; /* Row and list item hover highlight */
  --surface-active:       #EDF2F7; /* Pressed button / active chip ground */

  /* Blueprint Grid Pattern */
  --grid-line-color:      #E2E8F0;
  --grid-size:            28px;

  /* ==========================================================================
     3. INK & TYPOGRAPHIC TOKENS (30% HIERARCHY - WCAG AAA)
     ========================================================================== */
  --ink-primary:          #0F172A; /* Slate 900 (14.2:1 AAA) */
  --ink-secondary:        #334155; /* Slate 700 (8.6:1 AAA) */
  --ink-muted:            #64748B; /* Slate 500 (4.9:1 AA) */
  --ink-inverse:          #FFFFFF; /* Pure white text on cobalt / dark fills */

  /* ==========================================================================
     4. BORDERS & HAIRLINES (CRISP DEFINITION DOCTRINE)
     ========================================================================== */
  --border-subtle:        #E2E8F0; /* Internal dividers, specs table horizontal lines */
  --border-card:          #CBD5E1; /* Outer card rim (stops bleeding into canvas) */
  --border-hover:         #0F172A; /* 1-step darkening hover feedback */
  --border-focus:         #2563EB; /* Accessible 2px electric cobalt focus ring */

  /* ==========================================================================
     5. VIBRANT INTERACTION TOKENS (10% FOCAL ANCHORS - ELECTRIC COBALT)
     ========================================================================== */
  --action-primary-bg:    #2563EB; /* Electric Cobalt Blue (Search, Primary CTAs) */
  --action-primary-hover: #1D4ED8; /* Deep Cobalt Blue */
  --action-primary-text:  #FFFFFF;

  --action-secondary-bg:  #FFFFFF;
  --action-secondary-border:#CBD5E1;
  --action-secondary-text:#0F172A;
  --action-secondary-hover:#F1F5F9;

  /* ==========================================================================
     6. SEMANTIC STATUS & TELEMETRY TOKENS
     ========================================================================== */
  /* Telemetry / Funded Status (Electric Cobalt) */
  --status-telemetry-text:#1D4ED8; /* Blue 800 */
  --status-telemetry-bg:  #EFF6FF; /* Blue 50 */
  --status-telemetry-border:#BFDBFE;/* Blue 200 */

  /* Verified Alumni / Official Proof (Emerald) */
  --status-verified-text: #065F46; /* Emerald 800 (9.2:1 AAA) */
  --status-verified-bg:   #ECFDF5; /* Emerald 50 */
  --status-verified-border:#A7F3D0;/* Emerald 200 */

  /* Bootstrapped Status (Amber) */
  --status-bootstrapped-text: #92400E; /* Amber 800 (7.8:1 AAA) */
  --status-bootstrapped-bg:   #FFFBEB; /* Amber 50 */
  --status-bootstrapped-border:#FDE68A;/* Amber 200 */

  /* Batch Credential Chip (Mono) */
  --batch-chip-bg:        #E2E8F0; /* Slate 200 */
  --batch-chip-text:      #0F172A; /* Slate 900 */

  /* ==========================================================================
     7. SURFACE DEPTH & ELEVATION (TACTILE 1MM DOCTRINE)
     ========================================================================== */
  --shadow-card-rest:     0 1px 3px rgba(15, 23, 42, 0.04), 0 1px 2px rgba(15, 23, 42, 0.02);
  --shadow-card-hover:    0 4px 14px rgba(37, 99, 235, 0.08), 0 1px 3px rgba(15, 23, 42, 0.04);
  --shadow-drawer:        0 10px 30px rgba(15, 23, 42, 0.10), 0 1px 4px rgba(15, 23, 42, 0.05);

  /* ==========================================================================
     8. CORNER RADII (ENGINEERED TOOL STANDARD)
     ========================================================================== */
  --radius-sm:            4px;   /* Pills, micro-badges, keyboard shortcuts */
  --radius-md:            6px;   /* Founder cards, buttons, command bar input */
  --radius-lg:            8px;   /* Stage 1 feed cards, monogram tiles, drawer enclosure */
  --radius-xl:            12px;  /* Top banner container, bottom utility boxes */
}

/* Background Blueprint Grid Utility */
body {
  background-color: var(--surface-canvas);
  background-image: 
    linear-gradient(var(--grid-line-color) 1px, transparent 1px),
    linear-gradient(90deg, var(--grid-line-color) 1px, transparent 1px);
  background-size: var(--grid-size) var(--grid-size);
  color: var(--ink-primary);
  font-family: var(--font-primary);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
```

---

## 4. Component-by-Component Application Guide

### A. The Landing Page Hero
* **Live Telemetry Pill:**  
  * Style: `background: var(--status-telemetry-bg)`, `border: 1px solid var(--status-telemetry-border)`, `color: var(--status-telemetry-text)`, `font-family: var(--font-mono)`, `font-size: 10.5px`, `font-weight: 700`.  
  * Label: `⚡ LIVE TELEMETRY REGISTRY · 65+ INDEXED`.
* **Headline:**  
  * Text: `"The Frontier Companies of VNIT Nagpur."`  
  * Styling: `font-size: 38px`, `font-weight: 800`, `letter-spacing: -0.035em`, color `#0F172A`, with `"of VNIT Nagpur"` in `var(--action-primary-bg)` (`#2563EB`).
* **Subheadline (Mandatory Word Included):**  
  * *"Explore a **handpicked** high-density index of deep-tech, robotics, and venture-backed startups founded by VNIT alumni."*
* **Command Bar Search:**  
  * Clean white input (`border: 1px solid var(--border-card)`, `border-radius: var(--radius-md)`), keyboard badge `⌘K`, and an **Electric Cobalt button: `[SEARCH]`** in monospaced bold font.
* **Filter Pills Row:**  
  * Monospaced count pills: `ALL (65)`, `MECH (18)`, `CSE (22)`, `ECE (14)`.

---

### B. Stage 1 Feed Listing Card (Variation 7)
* **Card Container:** White background, 1px `--border-card` (`#CBD5E1`), 8px border radius.
* **Hover State:** Border transitions to `--border-hover`, card lifts `translateY(-2px)`, shadow deepens with subtle cobalt aura.
* **Monogram Hallmark:** 56×56 solid dark tile (`#0F172A`) with crisp white bold initials (`AR`, `ZL`).
* **Company Title:** Bold 18px text + direct outbound `[Company ↗]` button. (Top batch tag and funding stage are removed to avoid unverified claims and visual clutter).
* **Pitch Copy:** 2-line clamped summary in `#475569`.
* **Shaded Footer Ribbon:** Background `#F8FAFC`, top border `#E2E8F0`, founder attribution with monospaced batch badge (`Mech '16`), and location (`📍 Bengaluru, IN`).

---

### C. Stage 2 Inspection Drawer (Option 02 — Institutional Certificate Banner)
* **Top Banner:** Solid header in `JetBrains Mono` (`10.5px`, `font-weight: 700`, tracking `0.08em`): `VERIFIED VNIT ALUMNI ROSTER` accompanied by institutional seal icon (🏛️) and `CAMPUS COHORT 2016`.
* **Dual White Founder Cards:** Clean white cards with founder name, role, verified degree (`B.Tech Mech '16 · VNIT Nagpur`), and stacked `[Connect In]` (Electric Cobalt `#2563EB`) and `[Email]` buttons.
* **Company Vital Specs Table:** Structured 5-row key-value grid (Incorporated Year, Headcount, Headquarters, Sector, Total Capital) in monospaced tabular numerals.
* **Action Footer:** Dual buttons: `[Company Profile]` and `[Official Website ↗]`.
