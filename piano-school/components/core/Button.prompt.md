Primary call-to-action button — clay terracotta by default; use for "教室をさがす", "体験を申し込む", form submits.

```jsx
<Button variant="primary" size="lg" onClick={search}>教室をさがす</Button>
<Button variant="secondary">あとで見る</Button>
<Button variant="ghost" size="sm">キャンセル</Button>
```

Variants: `primary` (clay, filled), `secondary` (ivory + hairline), `ghost` (text-only clay), `accent` (honey). Sizes: `sm` / `md` / `lg`. Props: `block` (full width), `disabled`, `iconLeft` / `iconRight` (pass a Lucide `<i data-lucide>` or SVG). Has built-in hover/press states.
