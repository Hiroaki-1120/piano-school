Underline-style tab bar for switching detail-page sections (教室紹介 / 料金 / 口コミ / アクセス).

```jsx
<Tabs tabs={["教室紹介","料金・コース","口コミ","アクセス"]} value={tab} onChange={setTab} />
```

Controlled via `value` + `onChange`. Active tab gets a clay underline.
