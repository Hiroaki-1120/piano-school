# おとなりピアノ — Website UI Kit

A high-fidelity, click-through recreation of the **おとなりピアノ** (Otonari Piano) directory site — the marketing/discovery website where parents and adult beginners find neighborhood piano classrooms, and where studio owners apply to be listed.

## Screens (`index.html` orchestrates navigation)

| File | Screen | Notes |
|------|--------|-------|
| `HomeScreen.jsx` | ホーム / 検索ヒーロー | Hero search bar, "how it works" 3-step, popular studios grid |
| `ListingScreen.jsx` | 教室一覧（検索結果） | Sticky filter sidebar (area / genre / features), horizontal `StudioCard` rows, active-filter chips, 地図で見る toggle, empty state |
| `MapScreen.jsx` | 地図でさがす | Split list + map with clay price pins (map is a styled placeholder); hover/click syncs list & pins |
| `DetailScreen.jsx` | 教室詳細 | Photo gallery, tabbed sections (教室紹介 / 料金・コース / 口コミ / アクセス), sticky booking sidebar |
| `FaqScreen.jsx` | よくある質問 | `Accordion`-based Q&A, split into 利用者向け / 教室向け, CTA block |
| `PricingScreen.jsx` | 掲載料金 | 3-tier pricing for studios (フリー / スタンダード / プレミアム), featured tier |
| `SignupScreen.jsx` | 掲載申込フォーム | Studio listing application; validates 同意 checkbox; success state |
| `SiteHeader.jsx` / `SiteFooter.jsx` | 共通ヘッダー・フッター | Sticky blurred header (emblem + live wordmark), dark footer with working nav |
| `data.js` | Mock data | 6 studios, reviews, areas/genres/features — `window.OP_DATA` |

Standalone Design-System-tab previews: `preview-map.html`, `preview-faq.html`, `preview-pricing.html`.

## How it's built
- Composes design-system primitives from `window.PianoSchool_f8945d` (`Button`, `StudioCard`, `Tag`, `Select`, `Checkbox`, `Input`, `Textarea`, `Tabs`, `RatingStars`, `Avatar`, `Badge`, `Card`) — it does **not** re-implement them.
- Each screen file attaches its component to `window` so sibling Babel scripts can use it.
- Photography uses the branded `.op-photo-ph` placeholder (♪ on warm wood) — swap in real studio/piano photos when available.

## Try it
Open `index.html`: search an area → browse results → open a studio → switch tabs / read reviews → 体験を申し込む → submit the signup form.
