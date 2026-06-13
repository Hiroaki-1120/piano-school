Labeled text field used across search and the studio signup form.

```jsx
<Input label="教室名" placeholder="例：おとなりピアノ三軒茶屋" required />
<Input label="エリア・駅名" iconLeft={<i data-lucide="map-pin"></i>} hint="市区町村や最寄り駅で検索" />
<Input label="メールアドレス" error="正しい形式で入力してください" />
```

Forwards all native `<input>` props (`type`, `value`, `onChange`, …). `error` overrides `hint` and paints the border red. Clay focus ring built in.
