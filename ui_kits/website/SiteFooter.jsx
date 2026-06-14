// おとなりピアノ — Site footer
function SiteFooter({ onNav }) {
  const go = onNav || (() => {});
  const cols = [
    { title: "さがす", items: [
      { label: "エリアから探す", to: "list" }, { label: "地図でさがす", to: "map" },
      { label: "こだわり条件", to: "list" }, { label: "オンライン対応の教室", to: "list" },
    ] },
    { title: "サポート", items: [
      { label: "はじめての方へ", to: "faq" }, { label: "体験レッスンとは", to: "faq" },
      { label: "よくある質問", to: "faq" }, { label: "お問い合わせ", to: "faq" },
    ] },
    { title: "教室の方へ", items: [
      { label: "無料掲載のご案内", to: "pricing" }, { label: "掲載料金", to: "pricing" },
      { label: "掲載までの流れ", to: "signup" }, { label: "運営会社", to: "faq" },
    ] },
  ];
  return (
    <footer style={{ background: "var(--ink-900)", color: "var(--cream)", marginTop: "var(--space-24)" }}>
      <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "var(--space-16) var(--space-6) var(--space-10)" }}>
        <div className="op-footer-grid" style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 1fr", gap: "var(--space-8)" }}>
          <div className="op-footer-brand">
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <img src={(window.__resources && window.__resources.logoMark) || "../../assets/logo-mark.svg"} alt="" style={{ height: 44 }} />
              <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 22, color: "var(--cream)" }}>おとなりピアノ</span>
            </div>
            <p style={{ marginTop: "var(--space-4)", fontSize: "var(--text-sm)", lineHeight: 1.9, color: "var(--wood-200)", maxWidth: 240 }}>
              ご近所のピアノ教室が、すぐ見つかる。<br/>あなたの「弾いてみたい」を応援します。
            </p>
          </div>
          {cols.map((c) => (
            <div key={c.title}>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "var(--text-base)", marginBottom: "var(--space-4)" }}>{c.title}</div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
                {c.items.map((it) => (
                  <li key={it.label}><button onClick={() => go(it.to)} style={{ background: "none", border: "none", padding: 0, textAlign: "left", cursor: "pointer", color: "var(--wood-200)", fontSize: "var(--text-sm)", fontFamily: "var(--font-sans)" }}>{it.label}</button></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="op-footer-bottom" style={{ marginTop: "var(--space-12)", paddingTop: "var(--space-6)", borderTop: "1px solid rgba(255,255,255,0.12)", display: "flex", justifyContent: "space-between", fontSize: "var(--text-xs)", color: "var(--wood-200)" }}>
          <span>© 2026 おとなりピアノ</span>
          <span style={{ display: "flex", gap: "var(--space-5)" }}>
            <a href="#" style={{ color: "var(--wood-200)" }}>利用規約</a>
            <a href="#" style={{ color: "var(--wood-200)" }}>プライバシーポリシー</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
window.SiteFooter = SiteFooter;
