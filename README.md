# Lauri Reis Fotografia — Design System

The brand and UI foundations for **Lauri Reis Fotografia**, a Brazilian portrait &
celebration photography studio. Built from the official Style Guide (`uploads/Style
Guide Lauri.pdf`), the logo files (`uploads/lrlogo.svg`, `uploads/lrsimbolo.svg`) and
real portfolio imagery supplied by the studio.

> **Set the file type to “Design System” in the Share menu** so others in your org can
> use these tokens, components and assets.

---

## The brand at a glance

Lauri Reis photographs life's milestones — newborns, children's birthdays, baby showers,
debutante (15 anos) parties, outdoor sessions and studio portraits. The visual identity
is **elegant and warm**: a deep navy foundation, a signature **gold** drawn straight from
the logo's gradient, and soft slate/rose accents. Type pairs a calligraphic serif
(Centaur) for titles with clean Montserrat for everything else. Everything is in
**Brazilian Portuguese**.

---

## Content fundamentals

- **Language:** Brazilian Portuguese (pt-BR), always.
- **Voice:** warm, intimate, unhurried — sells *feeling and memory*, not gear or specs.
  "Momentos que ficam para sempre", "do ensaio à pista", "com calma e afeto".
- **Address:** speaks to the client as *você* (informal-respectful), never corporate "nós
  fazemos". Invitational: "Vamos eternizar o seu momento", "Vamos conversar".
- **Casing:** serif titles in sentence case; sans **eyebrows, badges and nav in UPPERCASE
  with wide tracking** (0.18–0.22em). This tracked-uppercase label is a core signature.
- **Length:** short, evocative sentences. One idea per line in headlines.
- **Emoji:** essentially none in brand copy (a single check ✓ is acceptable as a UI
  confirmation only). No exclamation overload.
- **Numbers:** light, human framing — "+600 famílias", "+8 anos" — set in the serif.

---

## Visual foundations

- **Palette:** Navy Deep `#0F2030` (primary surface/footer), Navy `#1E3448` (raised),
  Gold `#C8A84B` (signature accent, = logo gradient head), Gold Deep `#625225` (gradient
  tail / pressed), Slate `#A8BECE` and Rose `#DDB8B8` (soft accents), warm paper
  `#F4F1EA` for light sections. Neutral ramp is cool/navy-tinted. See `tokens/colors.css`.
- **Signature gradient:** `linear-gradient(90deg,#C8A84B,#625225)` — the logo's gold
  sweep. Used sparingly (logo, rare accents), never as a full page background.
- **Type:** `--font-display` = EB Garamond (Centaur substitute) for titles, highlights &
  badges; `--font-body` = Montserrat (Light/Regular/Bold) for descriptions and UI.
- **Backgrounds:** large, warm, candid **photographs** carry the design. Flat navy or
  paper between photo sections. No illustrations, no patterns, no noise.
- **Scrim:** text over photos sits on a navy bottom-up gradient (`--scrim-bottom`) so
  captions stay legible; a thin inset white hairline frame often sits inside photo cards.
- **Corners:** restrained — 2–8px. The brand reads classic, not bubbly. Pills only for
  badges.
- **Shadows:** soft, low, photographic (`--shadow-sm/md/lg`); a subtle gold glow exists
  for special emphasis. No hard or neon shadows.
- **Motion:** calm `ease-out` (`cubic-bezier(.22,.61,.36,1)`), 160–520ms. Hover = gentle
  lift + slow image zoom + revealed caption. Never bouncy.
- **Hover/press:** gold buttons darken to Gold Deep on hover; outline buttons fill;
  cards lift 4px. Focus on inputs = gold underline.
- **Layout:** 1200px max width, 32px gutters, ~96px section rhythm, 8px spacing grid.

---

## Iconography

The brand is **icon-light**. There is no custom icon font and almost no UI iconography —
the photography does the talking. The only fixed brand marks are:

- **Wordmark** `assets/logo/lr-logo-{white,navy,gold}.svg`
- **Monogram “LR”** `assets/logo/lr-symbol-{white,navy,gold}.svg`

White variants for navy/photo backgrounds; navy for paper; gold for accents. No emoji are
used as icons. If a future UI genuinely needs small functional glyphs (arrows, social),
use a thin 1.5px line set (e.g. **Lucide** via CDN) at gold or navy — this is a flagged
substitution, not part of the supplied brand.

---

## Index / manifest

- `styles.css` — global entry; `@import`s everything below. **Consumers link this.**
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `effects.css`.
- `assets/logo/` — wordmark & monogram in white / navy / gold.
- `assets/imagery/` — real portfolio photographs (15 anos, newborn, infantil, chá de
  bebê, ensaio externo, estúdio).
- `guidelines/` — foundation specimen cards (Colors, Type, Spacing, Brand).
- `components/` — reusable primitives:
  - `buttons/Button` · `badges/Badge` · `cards/ServiceCard` · `forms/Field`
- `ui_kits/website/` — the full marketing-site recreation (hero, services, portfolio,
  about, contact).
- `SKILL.md` — Agent-Skill manifest for reuse in Claude Code.

---

## Substitutions & open questions (please confirm)

- **Centaur** is a licensed Monotype face with no free webfont — substituted with
  **EB Garamond** (closest free Venetian humanist serif). Send licensed Centaur webfont
  files (woff2) to swap in `tokens/fonts.css` for exact fidelity.
- Portfolio imagery is the set you uploaded; share final/retouched hero selects if you
  want specific images featured.
