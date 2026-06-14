// おとなりピアノ — Studio detail page
function DetailScreen({ studioId, onBack, onSignup }) {
  const { Tabs, Button, Badge, RatingStars, Avatar, IconButton, Card } = window.PianoSchool_f8945d;
  const data = window.OP_DATA;
  const s = data.studios.find((x) => x.id === studioId) || data.studios[0];
  const reviews = data.reviews.filter((r) => r.studio === s.id);
  const [tab, setTab] = React.useState("教室紹介");
  const [fav, setFav] = React.useState(false);

  return (
    <div>
      {/* Gallery */}
      <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "var(--space-6) var(--space-6) 0" }}>
        <button onClick={onBack} style={{ background: "none", border: "none", color: "var(--clay-600)", cursor: "pointer", fontFamily: "var(--font-sans)", fontSize: "var(--text-sm)", marginBottom: "var(--space-4)" }}>← 検索結果へ戻る</button>
        <div className="op-gallery-grid" style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gridTemplateRows: "1fr 1fr", gap: "var(--space-3)", height: 340 }}>
          <div className="op-photo-ph" style={{ gridRow: "1 / 3", borderRadius: "var(--radius-lg)" }}></div>
          <div className="op-photo-ph" style={{ borderRadius: "var(--radius-lg)" }}></div>
          <div className="op-photo-ph" style={{ borderRadius: "var(--radius-lg)" }}></div>
        </div>
      </div>

      <div className="op-detail-grid" style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "var(--space-8) var(--space-6) 0", display: "grid", gridTemplateColumns: "1fr 340px", gap: "var(--space-10)", alignItems: "start" }}>
        {/* Main */}
        <div>
          <div style={{ display: "flex", gap: "var(--space-2)", marginBottom: "var(--space-3)" }}>
            {s.tags.map((t) => <Badge key={t} tone="primary">{t}</Badge>)}
          </div>
          <h1 style={{ fontSize: "var(--text-3xl)", marginBottom: "var(--space-2)" }}>{s.name}</h1>
          <div style={{ display: "flex", alignItems: "center", gap: "var(--space-4)", marginBottom: "var(--space-2)" }}>
            <RatingStars value={s.rating} count={s.reviews} />
            <span style={{ color: "var(--ink-500)", fontSize: "var(--text-sm)" }}>📍 {s.area}</span>
          </div>

          <div style={{ marginTop: "var(--space-6)" }}>
            <Tabs tabs={["教室紹介", "料金・コース", "口コミ", "アクセス"]} value={tab} onChange={setTab} />
          </div>

          <div style={{ paddingTop: "var(--space-6)" }}>
            {tab === "教室紹介" && (
              <div>
                <p style={{ fontSize: "var(--text-md)", lineHeight: 1.9, color: "var(--ink-900)" }}>{s.lead}</p>
                <Card style={{ marginTop: "var(--space-6)" }}>
                  <div style={{ display: "flex", gap: "var(--space-4)", alignItems: "center" }}>
                    <Avatar name={s.teacher} size={64} />
                    <div>
                      <div style={{ fontSize: "var(--text-sm)", color: "var(--ink-500)" }}>講師</div>
                      <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "var(--text-lg)" }}>{s.teacher}</div>
                    </div>
                  </div>
                  <p style={{ marginTop: "var(--space-4)", fontSize: "var(--text-base)", lineHeight: 1.9, color: "var(--ink-700)" }}>{s.teacherBio}</p>
                  <div style={{ marginTop: "var(--space-4)", fontSize: "var(--text-sm)", color: "var(--ink-500)" }}>開講：{s.established}</div>
                </Card>
              </div>
            )}
            {tab === "料金・コース" && (
              <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
                {s.lessons.map((l) => (
                  <div key={l.name} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "var(--space-5)", background: "var(--ivory)", border: "1px solid var(--hairline)", borderRadius: "var(--radius-lg)" }}>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: "var(--text-base)", color: "var(--ink-900)" }}>{l.name}</div>
                      <div style={{ fontSize: "var(--text-sm)", color: "var(--ink-500)", marginTop: 2 }}>{l.note}</div>
                    </div>
                    <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "var(--text-lg)", color: "var(--clay-600)" }}>{l.price}</div>
                  </div>
                ))}
              </div>
            )}
            {tab === "口コミ" && (
              <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
                {reviews.map((r, i) => (
                  <Card key={i}>
                    <div style={{ display: "flex", alignItems: "center", gap: "var(--space-3)", marginBottom: "var(--space-3)" }}>
                      <Avatar name={r.name} size={44} />
                      <div style={{ flex: 1 }}>
                        <div style={{ fontWeight: 700, color: "var(--ink-900)" }}>{r.name} さん</div>
                        <div style={{ fontSize: "var(--text-xs)", color: "var(--ink-500)" }}>{r.role} ・ {r.date}</div>
                      </div>
                      <RatingStars value={r.rating} showValue={false} size={15} />
                    </div>
                    <p style={{ fontSize: "var(--text-base)", lineHeight: 1.9, color: "var(--ink-700)" }}>{r.body}</p>
                  </Card>
                ))}
              </div>
            )}
            {tab === "アクセス" && (
              <div>
                <div className="op-photo-ph" style={{ height: 240, borderRadius: "var(--radius-lg)", marginBottom: "var(--space-4)" }}></div>
                <div style={{ fontSize: "var(--text-base)", color: "var(--ink-700)", lineHeight: 1.9 }}>
                  <div><b>所在地</b>　{s.area}</div>
                  <div style={{ marginTop: 6 }}><b>レッスン時間</b>　平日 10:00〜21:00 ／ 土 9:00〜18:00</div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Booking sidebar */}
        <aside className="op-detail-aside" style={{ position: "sticky", top: 88 }}>
          <div style={{ background: "var(--ivory)", border: "1px solid var(--hairline)", borderRadius: "var(--radius-xl)", padding: "var(--space-6)", boxShadow: "var(--shadow-md)" }}>
            <div style={{ display: "flex", alignItems: "baseline", gap: 4, marginBottom: "var(--space-4)" }}>
              <span style={{ fontSize: "var(--text-sm)", color: "var(--ink-500)" }}>月謝</span>
              <span style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: "var(--text-3xl)", color: "var(--clay-600)" }}>{s.price}</span>
              <span style={{ fontSize: "var(--text-sm)", color: "var(--ink-500)" }}>〜</span>
            </div>
            <Button block size="lg" variant="primary" onClick={onSignup}>体験レッスンを申し込む</Button>
            <div style={{ marginTop: "var(--space-3)", display: "flex", gap: "var(--space-3)" }}>
              <Button block variant="secondary" iconLeft={<span>{fav ? "♥" : "♡"}</span>} onClick={() => setFav(!fav)}>保存</Button>
              <Button block variant="secondary" iconLeft={<span>↗</span>}>共有</Button>
            </div>
            <div style={{ marginTop: "var(--space-5)", paddingTop: "var(--space-5)", borderTop: "1px solid var(--hairline)", fontSize: "var(--text-sm)", color: "var(--ink-500)", lineHeight: 1.8 }}>
              体験レッスンは無料です。お申し込み後、教室から日程のご連絡が届きます。
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
window.DetailScreen = DetailScreen;
