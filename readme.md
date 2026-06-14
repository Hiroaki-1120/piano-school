# おとなりピアノ — Design System

**おとなりピアノ (Otonari Piano)** is a warm, approachable **directory / marketing website** that helps people find piano classrooms in their neighborhood. The name plays on *音 (oto, "sound")* + *となり (tonari, "next-door / nearby")* — "the piano lessons right next door."

This design system is the single source of truth for the brand: design tokens, fonts, reusable React components, foundation specimen cards, and a full website UI kit.

> **Audience:** parents looking for lessons for their children, and adult beginners (大人の学び直し).
> **Language:** Japanese only. **Mood:** warm & friendly. **Palette:** warm cream / wood neutrals with a clay-terracotta primary. **Type:** modern rounded gothic.

---

## Sources & provenance

This system was built **from scratch** as a fresh brand. The originally-attached repository **[github.com/Hiroaki-1120/piano-school](https://github.com/Hiroaki-1120/piano-school)** (ピアノ教室のまとめサイト実験) was an **empty repository** at the time of authoring — no code, screens, fonts, or tokens existed to recreate. With the maintainer's direction ("define a fresh brand from scratch"), all visual decisions below are original, not reverse-engineered from an existing product.

If you later push code to that repo, re-run the design-system process so the tokens, components, and UI kit can be reconciled against the real implementation. The repo is worth exploring for product context (data model, page structure, copy) before extending this system.

---

## CONTENT FUNDAMENTALS — how おとなりピアノ writes

**Language & politeness.** All copy is **Japanese**. The register is **丁寧 (polite, ですます調)** but never stiff — friendly and reassuring, like a helpful neighbor. Avoid 敬語 that feels corporate or distant; avoid casual だ・である.

- **To the visitor:** warm and encouraging. *「ご近所のピアノ教室を、すぐ見つかる。」「あなたの『弾いてみたい』を応援します。」*
- **Reassurance over hype.** We calm first-timer anxiety: *「何歳からでも遅くない」「体験レッスンは無料です」「最短2営業日で掲載できます」*.
- **"You" framing.** Address the reader as **あなた / お子さま**; the brand refers to itself sparingly, by name (おとなりピアノ) rather than 弊社/当社.

**Tone & vibe.** Calm, supportive, homey. Short, plain sentences. Concrete benefits (月謝・体験・駅から徒歩◯分) over abstractions.

**Casing & punctuation.** Japanese full-width punctuation (、。「」). Use a middle dot **・** for compound labels (料金・コース、エリア・駅名). Numbers are half-width with full-width 円 (例：8,000円). Section CTAs are short verb phrases: 「さがす」「体験を申し込む」「無料で掲載する」.

**Emoji.** Used **sparingly and functionally** — a 📍 pin before a location, a 🎹/🎉 as a friendly accent in empty/success states. Never decorative emoji-spam, never in headings or body copy. When in doubt, use the brand's ♪ glyph (built into the logo and placeholders) instead.

**Examples of voice:**
- Hero: 「ご近所の**ピアノ教室**を、すぐ見つかる。」
- Sub: 「体験レッスン・月謝・口コミで比べて、あなたとお子さまにぴったりの教室を見つけましょう。」
- Empty state: 「条件に合う教室が見つかりませんでした。絞り込みを減らしてお試しください。」
- Studio CTA: 「体験レッスンを申し込む」（無料です。お申し込み後、教室から日程のご連絡が届きます。）

---

## VISUAL FOUNDATIONS

**Overall feeling.** Warm, soft, and homey — like a sunlit living room with an upright piano. Cream paper, wood accents, rounded forms. Nothing cold, clinical, or high-contrast.

**Color.** Warm **cream** surfaces (`--cream` page, `--ivory` cards) over warm near-black ink (`--ink-900` `#2B2117`, never pure black). The primary is **clay / terracotta** (`--clay-500` `#C2683E`) for actions; **honey/amber** (`--honey-500`) for stars, highlights and the accent button; **sage** as a calm secondary; **wood** tones for decorative/illustrative warmth. Semantic states (success/warning/danger/info) are muted and warm-leaning, never neon. See `tokens/colors.css`.

**Type.** Two families, both Japanese-capable:
- **Display — Zen Maru Gothic** (rounded gothic): logo, headings, prices, emphasized numbers. Warm and friendly.
- **Body/UI — Zen Kaku Gothic New** (modern gothic): body copy, labels, buttons, forms. Clean and legible.
Generous line-height for Japanese body (`--leading-normal` 1.7–1.9) and a touch of positive letter-spacing. Scale in `tokens/typography.css`.

**Spacing.** 4px grid (`--space-1` … `--space-24`). Sections breathe — vertical rhythm uses `--space-16`/`--space-20` between blocks. Container max 1120px.

**Backgrounds.** Mostly flat warm cream. Heroes use a **very soft warm wash** (`linear-gradient(160deg, var(--clay-50), var(--cream))`) — subtle, never a saturated/bluish-purple gradient. Photography is meant to be **photo-led** (real studios, pianos, hands on keys); until photos are supplied, the `.op-photo-ph` placeholder shows a ♪ on a warm wood gradient. Imagery vibe: **warm, bright, natural light** — never cool/desaturated/B&W.

**Corner radii.** Soft and friendly throughout: cards `--radius-lg` (16px), inputs/buttons `--radius-md` (10px), pills/chips/avatars `--radius-pill`. Hero imagery goes larger (`--radius-2xl` 32px).

**Cards.** Ivory fill, 1px warm hairline border (`--hairline`), soft warm-tinted shadow (`--shadow-sm`). Interactive cards lift on hover (`translateY(-2px)` + `--shadow-md`). No colored left-border accents.

**Shadows.** Warm-tinted (brown alpha, not gray/black), soft and diffuse: `--shadow-xs/sm/md/lg`. Focus uses a clay ring (`--shadow-focus`).

**Borders.** Hairlines are warm beige (`--hairline` `#E7DBC6`), not gray. 1px default, 2px for checkboxes/emphasis.

**Motion.** Gentle and quick. Durations 140–360ms; easing `--ease-soft` (cubic-bezier(.4,0,.2,1)) for color/shadow, `--ease-out` for entrances. **Hover:** background lightens to a warm tint (sand / clay-50) or the card lifts. **Press:** subtle `scale(0.97)` shrink on buttons, `scale(0.92)` on icon buttons. No bounces, no infinite decorative loops.

**Transparency & blur.** Used only for the sticky header (`rgba(255,253,248,0.88)` + `backdrop-filter: blur(10px)`) and the favorite button over photos. Otherwise surfaces are opaque.

**Layout rules.** Sticky header (72px). Detail & listing pages use sticky sidebars (`top: 88px`). Generous gutters (`--space-6` = 24px page padding).

---

## ICONOGRAPHY

This is a from-scratch brand with **no proprietary icon set**. The approach:

- **System icon library:** **[Lucide](https://lucide.dev)** is the recommended icon set — its rounded caps and ~2px stroke match the brand's soft, friendly geometry. Load from CDN in consuming pages: `<script src="https://unpkg.com/lucide@latest"></script>` then `lucide.createIcons()`, or pass `<i data-lucide="map-pin"></i>` into `Button`/`IconButton`/`Input` icon slots. **(Substitution flag: Lucide is a chosen default, not lifted from an existing product — swap it if the team adopts a different set.)**
- **Functional emoji, sparingly:** 📍 (location), 🎹 (empty/brand moments), 🎉 (success). Never decorative.
- **Brand glyph ♪:** the eighth-note appears in the logo mark and image placeholders — the closest thing to a mascot. Prefer it over random emoji for brand flavor.
- **Logo:** `assets/logo-mark.svg` (roundel emblem — clay badge, piano keys + honey note) and `assets/logo-mark-mono.svg` (single-color via `currentColor`). The horizontal/vertical lockups pair the emblem with the Zen Maru Gothic wordmark. SVG, recolor via the fills / `color`.

No icon font is bundled. Do **not** hand-draw bespoke SVG icons for UI — use Lucide for consistency.

---

## VISUAL ASSETS

**Logo — ラウンデル / roundel emblem.** A circular clay badge with a centered piano keyboard and a honey eighth-note rising from it, inside an ivory ring. Old-shop warmth that scales down cleanly to a favicon.
- `assets/logo-mark.svg` — the full-color emblem (square; favicon, app icon, footer, header)
- `assets/logo-mark-mono.svg` — single-color emblem using `currentColor` (set `color:` on the parent — clay or ink for light bg, used reversed on dark)
- `assets/logo-otonari-piano.svg` — horizontal lockup (emblem + wordmark). **Note:** the wordmark is live `<text>` in Zen Maru Gothic, so it renders correctly only where that font is available (inline SVG, design tools with the font). On the site the lockup is composed as **emblem `<img>` + a live HTML wordmark** (see `SiteHeader`/`SiteFooter`) to guarantee correct font rendering.

Lockup rules: horizontal is the basic form; a vertical stack (emblem over wordmark) is available for square spaces; keep clear space of ~0.5× the emblem diameter around the lockup.

**Photography: none supplied yet.** Use `.op-photo-ph` (in `tokens/base.css`) as the placeholder; replace with warm, natural-light photos of studios, pianos, teachers and students.

---

## INDEX — what's in this system

**Tokens (CSS) — linked via the single entry `styles.css`:**
- `tokens/fonts.css` — Google Fonts import (Zen Maru Gothic, Zen Kaku Gothic New)
- `tokens/colors.css` — cream/wood neutrals, clay primary, honey accent, sage, semantics
- `tokens/typography.css` — families, weights, scale, leading, tracking
- `tokens/spacing.css` — spacing, radii, shadows, borders, layout, motion
- `tokens/base.css` — element defaults, focus ring, `.op-photo-ph`, `.op-container`

**Components (`components/`)** — namespace `window.PianoSchool_f8945d` (run `check_design_system` to confirm):
- **core/** — `Button`, `IconButton`, `Badge`, `Tag`, `RatingStars`
- **forms/** — `Input`, `Textarea`, `Select`, `Checkbox`
- **data/** — `Avatar`, `Card`, `Tabs`, `StudioCard` *(the signature listing tile)*
- **disclosure/** — `Accordion` *(FAQ-style Q&A)*

**Foundation cards (`cards/`)** — render in the Design System tab (Colors / Type / Spacing / Brand).

**UI kit (`ui_kits/website/`)** — full click-through directory site: Home, Listing, Map, Detail, Reviews, FAQ, Pricing, Signup. See its `README.md`.

**Other:** `SKILL.md` (Agent Skill manifest), `readme.md` (this file).

---

## Using this system

Consumers link **one file** — `styles.css` — to get all tokens and fonts, then read components from `window.PianoSchool_f8945d`. Build new screens by composing the documented primitives; match the voice and visual foundations above. When you need imagery, use the `.op-photo-ph` placeholder until real warm, natural-light photography is available.
