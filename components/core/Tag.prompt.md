Interactive, toggleable filter chip for search facets (ジャンル・エリア・こだわり条件).

```jsx
<Tag selected={genre==="クラシック"} onClick={() => setGenre("クラシック")}>クラシック</Tag>
<Tag removable onRemove={clear}>渋谷区</Tag>
```

`selected` paints clay-tinted; `removable` adds an × that fires `onRemove`. For non-interactive status labels use `Badge`.
