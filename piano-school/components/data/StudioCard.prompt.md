The hero component of おとなりピアノ — a piano-studio listing tile. Composes `RatingStars`, `Badge`, `IconButton`.

```jsx
<StudioCard
  name="おとなりピアノ三軒茶屋"
  area="世田谷区・三軒茶屋駅 徒歩4分"
  rating={4.6}
  reviews={28}
  price="8,000円"
  tags={["体験あり","クラシック","子ども歓迎"]}
  favorite={fav}
  onFavorite={toggle}
  onClick={openDetail}
/>
```

`layout="vertical"` for the search grid, `layout="horizontal"` for a list/row. Photo falls back to a branded `♪` placeholder when `photo` is omitted.
