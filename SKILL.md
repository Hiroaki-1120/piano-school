---
name: otonari-piano-design
description: Use this skill to generate well-branded interfaces and assets for おとなりピアノ (Otonari Piano) — a warm, friendly Japanese piano-classroom directory website — either for production or throwaway prototypes/mocks. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the `readme.md` file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Quick orientation
- **Brand:** おとなりピアノ — "the piano lessons right next door." Warm, friendly, reassuring. Japanese-only copy in polite ですます調.
- **Single CSS entry:** link `styles.css` for all tokens + fonts.
- **Colors:** cream/ivory surfaces, warm `--ink-900` text, **clay-terracotta** (`--clay-500`) primary, honey accent, sage secondary. No bluish-purple gradients.
- **Type:** Zen Maru Gothic (display/headings), Zen Kaku Gothic New (body/UI). Both from Google Fonts via `tokens/fonts.css`.
- **Components:** read from `window.PianoSchool_f8945d` after loading `_ds_bundle.js`. See `readme.md` INDEX and each component's `.prompt.md`.
- **Icons:** Lucide (CDN) + sparing functional emoji (📍🎹🎉) + the brand ♪ glyph.
- **Imagery:** photo-led, warm natural light. Use `.op-photo-ph` placeholder until real photos are supplied.
- **UI kit:** `ui_kits/website/` — home, listing, studio detail, reviews, signup.

## Files
- `readme.md` — full design guide (content + visual foundations, iconography, index)
- `styles.css` + `tokens/` — design tokens & fonts
- `components/{core,forms,data}/` — reusable React primitives (+ `.prompt.md` usage)
- `cards/` — foundation specimen cards
- `ui_kits/website/` — full directory-site recreation
- `assets/` — logo wordmark & mark
