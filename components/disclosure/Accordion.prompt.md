Disclosure list for FAQ pages and any expandable Q&A. Items open/close independently.

```jsx
<Accordion items={[
  { q: "体験レッスンは無料ですか？", a: "はい、掲載教室の体験レッスンは原則無料です。" },
  { q: "申し込み後の流れは？", a: "教室から日程のご連絡が届きます。" },
]} defaultOpen={[0]} />
```

`allowMultiple={false}` makes it accordion-exclusive (one open at a time). Each item is `{ q, a }`. Animates open with a grid-rows transition.
