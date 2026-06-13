// おとなりピアノ — Home / search hero
function HomeScreen({ onSearch, onOpenStudio }) {
  const { Button, StudioCard, Badge } = window.PianoSchool_f8945d;
  const data = window.OP_DATA;
  const [area, setArea] = React.useState("");
  const popular = data.studios.slice(0, 3);

  return (
    <div>
      {/* Hero */}
      <section style={{ position: "relative", overflow: "hidden", background: "linear-gradient(160deg, var(--clay-50) 0%, var(--cream) 60%)" }}>
        <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "var(--space-20) var(--space-6)", display: "grid", gridTemplateColumns: "1.05fr 0.95fr", gap: "var(--space-12)", alignItems: "center" }}>
          <div>
            <span style={{ display: "inline-block", marginBottom: "var(--space-5)" }}>
              <Badge tone="accent">全国2,400教室を掲載</Badge>
            </span>
            <h1 style={{ fontSize: "var(--text-4xl)", lineHeight: 1.25, color: "var(--ink-900)" }}>
              ご近所の<span style={{ color: "var(--clay-500)" }}>ピアノ教室</span>を、<br/>すぐ見つかる。
            </h1>
            <p style={{ marginTop: "var(--space-5)", fontSize: "var(--text-md)", color: "var(--ink-700)", lineHeight: 1.9, maxWidth: 460 }}>
              体験レッスン・月謝・口コミで比べて、あなたとお子さまにぴったりの教室を見つけましょう。
            </p>
            {/* Search bar */}
            <div style={{ marginTop: "var(--space-8)", display: "flex", gap: "var(--space-3)", background: "var(--ivory)", padding: "var(--space-3)", borderRadius: "var(--radius-xl)", boxShadow: "var(--shadow-md)", border: "1px solid var(--hairline)" }}>
              <div style={{ flex: 1, display: "flex", alignItems: "center", gap: "var(--space-2)", padding: "0 var(--space-4)" }}>
                <span style={{ fontSize: 20 }}>📍</span>
                <input value={area} onChange={(e) => setArea(e.target.value)} placeholder="エリア・駅名で探す（例：三軒茶屋）"
                  style={{ flex: 1, border: "none", outline: "none", background: "transparent", fontFamily: "var(--font-sans)", fontSize: "var(--text-base)", color: "var(--ink-900)", height: 48 }} />
              </div>
              <Button size="lg" onClick={() => onSearch(area)}>さがす</Button>
            </div>
            <div style={{ marginTop: "var(--space-4)", display: "flex", gap: "var(--space-2)", flexWrap: "wrap", alignItems: "center" }}>
              <span style={{ fontSize: "var(--text-sm)", color: "var(--ink-500)" }}>人気のエリア：</span>
              {data.areas.slice(0, 4).map((a) => (
                <button key={a} onClick={() => onSearch(a)} style={{ background: "var(--ivory)", border: "1px solid var(--hairline-strong)", borderRadius: "var(--radius-pill)", padding: "4px 12px", fontSize: "var(--text-sm)", color: "var(--ink-700)", cursor: "pointer", fontFamily: "var(--font-sans)" }}>{a}</button>
              ))}
            </div>
          </div>
          {/* Hero image */}
          <div className="op-photo-ph" style={{ height: 380, borderRadius: "var(--radius-2xl)", boxShadow: "var(--shadow-lg)" }}></div>
        </div>
      </section>

      {/* How it works */}
      <section style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "var(--space-16) var(--space-6) 0" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "var(--space-6)" }}>
          {[
            { n: "01", t: "エリアで探す", d: "お住まいの近くや通いやすい駅から、教室を絞り込めます。" },
            { n: "02", t: "じっくり比べる", d: "月謝・コース・口コミ・先生の人柄まで、並べて比較。" },
            { n: "03", t: "体験を申し込む", d: "気になった教室に、そのまま体験レッスンを申し込めます。" },
          ].map((s) => (
            <div key={s.n} style={{ background: "var(--ivory)", border: "1px solid var(--hairline)", borderRadius: "var(--radius-lg)", padding: "var(--space-6)", boxShadow: "var(--shadow-xs)" }}>
              <div style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-2xl)", fontWeight: 900, color: "var(--clay-300)" }}>{s.n}</div>
              <h3 style={{ marginTop: "var(--space-2)", fontSize: "var(--text-lg)" }}>{s.t}</h3>
              <p style={{ marginTop: "var(--space-2)", fontSize: "var(--text-sm)", color: "var(--ink-700)", lineHeight: 1.8 }}>{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Popular studios */}
      <section style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "var(--space-16) var(--space-6) 0" }}>
        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: "var(--space-6)" }}>
          <h2 style={{ fontSize: "var(--text-2xl)" }}>いま人気の教室</h2>
          <button onClick={() => onSearch("")} style={{ background: "none", border: "none", color: "var(--clay-600)", fontWeight: 700, cursor: "pointer", fontFamily: "var(--font-sans)", fontSize: "var(--text-base)" }}>すべて見る →</button>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "var(--space-6)" }}>
          {popular.map((s) => (
            <StudioCard key={s.id} {...s} onClick={() => onOpenStudio(s.id)} />
          ))}
        </div>
      </section>
    </div>
  );
}
window.HomeScreen = HomeScreen;
