Brand checkbox for filter conditions and form agreements.

```jsx
<Checkbox label="体験レッスンあり" checked={trial} onChange={e => setTrial(e.target.checked)} />
<Checkbox label="利用規約に同意します" checked={agree} onChange={...} />
```

Controlled — pass `checked` + `onChange`. Clay fill when checked.
