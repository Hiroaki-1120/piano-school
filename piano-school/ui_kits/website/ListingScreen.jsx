// おとなりピアノ — Listing / search results
function ListingScreen({ initialArea, onOpenStudio, onMapView }) {
  const { StudioCard, Tag, Select, Checkbox, Button, Badge } = window.PianoSchool_f8945d;
  const data = window.OP_DATA;
  const [area, setArea] = React.useState(initialArea || "");
  const [genres, setGenres] = React.useState([]);
  const [feats, setFeats] = React.useState([]);
  const [fav, setFav] = React.useState({});

  const toggle = (list, set, v) => set(list.includes(v) ? list.filter((x) => x !== v) : [...list, v]);

  const results = data.studios.filter((s) => {
    if (area && !s.areaTag.includes(area) && !s.area.includes(area)) return false;
    if (genres.length && !genres.some((g) => s.tags.includes(g))) return false;
    return true;
  });

  return (
    <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "var(--space-10) var(--space-6) 0" }}>
      <div style={{ fontSize: "var(--text-sm)", color: "var(--ink-500)", marginBottom: "var(--space-3)" }}>ホーム ／ 教室をさがす{area && ` ／ ${area}`}</div>
      <h1 style={{ fontSize: "var(--text-3xl)", marginBottom: "var(--space-6)" }}>
        {area || "すべてのエリア"}の<span style={{ color: "var(--clay-500)" }}>ピアノ教室</span>
      </h1>

      <div style={{ display: "grid", gridTemplateColumns: "260px 1fr", gap: "var(--space-8)", alignItems: "start" }}>
        {/* Filters */}
        <aside style={{ position: "sticky", top: 88, background: "var(--ivory)", border: "1px solid var(--hairline)", borderRadius: "var(--radius-lg)", padding: "var(--space-5)", boxShadow: "var(--shadow-xs)" }}>
          <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "var(--text-md)", marginBottom: "var(--space-4)" }}>絞り込み</div>
          <div style={{ marginBottom: "var(--space-5)" }}>
            <Select label="エリア" value={area} onChange={(e) => setArea(e.target.value)}
              options={[{ value: "", label: "すべて" }, ...data.areas.map((a) => ({ value: a, label: a }))]} />
          </div>
          <div style={{ marginBottom: "var(--space-5)" }}>
            <div style={{ fontSize: "var(--text-sm)", fontWeight: 700, marginBottom: "var(--space-3)" }}>ジャンル</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-2)" }}>
              {data.genres.slice(0, 4).map((g) => (
                <Tag key={g} selected={genres.includes(g)} onClick={() => toggle(genres, setGenres, g)}>{g}</Tag>
              ))}
            </div>
          </div>
          <div>
            <div style={{ fontSize: "var(--text-sm)", fontWeight: 700, marginBottom: "var(--space-3)" }}>こだわり条件</div>
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
              {data.features.slice(0, 5).map((f) => (
                <Checkbox key={f} label={f} checked={feats.includes(f)} onChange={() => toggle(feats, setFeats, f)} />
              ))}
            </div>
          </div>
        </aside>

        {/* Results */}
        <div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "var(--space-5)" }}>
            <div style={{ fontSize: "var(--text-base)", color: "var(--ink-700)" }}>
              <b style={{ color: "var(--ink-900)", fontSize: "var(--text-lg)" }}>{results.length}</b> 件の教室
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "var(--space-4)" }}>
              <button onClick={onMapView} style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "var(--ivory)", border: "1px solid var(--hairline-strong)", borderRadius: "var(--radius-md)", padding: "9px 14px", cursor: "pointer", fontFamily: "var(--font-sans)", fontSize: "var(--text-sm)", fontWeight: 700, color: "var(--ink-700)" }}>
                <span aria-hidden="true">🗺️</span>地図で見る
              </button>
              <div style={{ width: 200 }}>
                <Select options={["おすすめ順", "口コミの多い順", "月謝が安い順"]} />
              </div>
            </div>
          </div>
          {(genres.length > 0 || feats.length > 0) && (
            <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-2)", marginBottom: "var(--space-5)" }}>
              {[...genres, ...feats].map((t) => (
                <Tag key={t} selected removable onRemove={() => { setGenres(genres.filter((x) => x !== t)); setFeats(feats.filter((x) => x !== t)); }}>{t}</Tag>
              ))}
            </div>
          )}
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
            {results.map((s) => (
              <StudioCard key={s.id} {...s} layout="horizontal" favorite={!!fav[s.id]}
                onFavorite={() => setFav({ ...fav, [s.id]: !fav[s.id] })}
                onClick={() => onOpenStudio(s.id)} />
            ))}
            {results.length === 0 && (
              <div style={{ textAlign: "center", padding: "var(--space-16)", color: "var(--ink-500)" }}>
                <div style={{ fontSize: 40, marginBottom: 12 }}>🎹</div>
                条件に合う教室が見つかりませんでした。<br/>絞り込みを減らしてお試しください。
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
window.ListingScreen = ListingScreen;
