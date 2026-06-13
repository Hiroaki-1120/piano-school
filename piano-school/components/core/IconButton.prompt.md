Icon-only button for compact actions — favorite (♥), share, close, gallery arrows. Always pass `label` for accessibility.

```jsx
<IconButton label="お気に入り" variant="outline">
  <i data-lucide="heart"></i>
</IconButton>
```

Variants: `ghost` / `solid` (clay) / `outline`. Shapes: `circle` (default) / `rounded`. Sizes `sm`/`md`/`lg` map to 34/42/50px hit targets.
