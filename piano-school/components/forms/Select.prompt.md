Brand-styled dropdown for single choices — sort order, genre, price band.

```jsx
<Select label="並び替え" options={["おすすめ順","口コミの多い順","月謝が安い順"]} />
<Select options={[{value:"all",label:"すべてのジャンル"},{value:"classic",label:"クラシック"}]} />
```

Accepts plain strings or `{value,label}` objects. Forwards native `value`/`onChange`.
