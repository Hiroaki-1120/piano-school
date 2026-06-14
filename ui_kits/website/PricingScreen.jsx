// おとなりピアノ — Pricing (掲載料金, for studios)
function PricingScreen({ onSignup }) {
  const { Button, Badge } = window.PianoSchool_f8945d;
  const tiers = [
    {
      name: "フリー", price: "0", unit: "円／月", tone: "neutral",
      tagline: "まずは無料で掲載",
      cta: "無料で掲載する", variant: "secondary",
      features: ["教室の基本情報を掲載", "写真3枚まで", "口コミの受付・表示", "体験レッスンの申し込み受付"],
    },
    {
      name: "スタンダード", price: "4,800", unit: "円／月", tone: "primary", featured: true,
      tagline: "見つけてもらいやすく",
      cta: "スタンダードで始める", variant: "primary",
      features: ["フリーのすべての機能", "検索結果で上位に表示", "写真・動画が無制限", "体験予約のカレンダー管理", "アクセス分析レポート"],
    },
    {
      name: "プレミアム", price: "9,800", unit: "円／月", tone: "accent",
      tagline: "地域の一番人気へ",
      cta: "プレミアムで始める", variant: "accent",
      features: ["スタンダードのすべての機能", "エリア特集ページに掲載", "最上位の優先表示", "専任スタッフのサポート", "口コミ返信の代行支援"],
    },
  ];
  return (
    <div>
      <section style={{ background: "linear-gradient(180deg, var(--clay-50), var(--cream) 260px)", textAlign: "center" }}>
        <div style={{ maxWidth: "var(--container-narrow)", margin: "0 auto", padding: "var(--space-16) var(--space-6) var(--space-8)" }}>
          <Badge tone="accent">教室を運営される方へ</Badge>
          <h1 style={{ fontSize: "var(--text-3xl)", margin: "var(--space-4) 0 var(--space-2)" }}>掲載料金</h1>
          <p style={{ color: "var(--ink-700)", fontSize: "var(--text-md)", lineHeight: 1.9 }}>
            まずは無料から。教室の成長に合わせてプランを選べます。<br/>どのプランも初期費用・解約金はかかりません。
          </p>
        </div>
      </section>

      <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "0 var(--space-6) var(--space-16)" }}>
        <div className="op-pricing-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "var(--space-6)", alignItems: "start", marginTop: "calc(var(--space-8) * -1)" }}>
          {tiers.map((t) => (
            <div key={t.name} style={{
              position: "relative",
              background: "var(--ivory)",
              border: `${t.featured ? "var(--border-thick)" : "var(--border-thin)"} solid ${t.featured ? "var(--clay-300)" : "var(--hairline)"}`,
              borderRadius: "var(--radius-xl)",
              padding: "var(--space-8) var(--space-6)",
              boxShadow: t.featured ? "var(--shadow-lg)" : "var(--shadow-sm)",
              transform: t.featured ? "translateY(-8px)" : "none",
            }}>
              {t.featured && (
                <div style={{ position: "absolute", top: -14, left: "50%", transform: "translateX(-50%)" }}>
                  <Badge tone="primary" solid>いちばん人気</Badge>
                </div>
              )}
              <div style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-xl)", fontWeight: 700, color: "var(--ink-900)" }}>{t.name}</div>
              <div style={{ fontSize: "var(--text-sm)", color: "var(--ink-500)", marginTop: 2 }}>{t.tagline}</div>
              <div style={{ display: "flex", alignItems: "baseline", gap: 4, margin: "var(--space-5) 0" }}>
                <span style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-4xl)", fontWeight: 900, color: t.tone === "accent" ? "var(--honey-500)" : "var(--clay-600)" }}>{t.price}</span>
                <span style={{ fontSize: "var(--text-base)", color: "var(--ink-500)" }}>{t.unit}</span>
              </div>
              <Button block variant={t.variant} onClick={onSignup}>{t.cta}</Button>
              <ul style={{ listStyle: "none", padding: 0, margin: "var(--space-6) 0 0", display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
                {t.features.map((f) => (
                  <li key={f} style={{ display: "flex", gap: "var(--space-3)", fontSize: "var(--text-sm)", color: "var(--ink-700)", lineHeight: 1.6 }}>
                    <span style={{ color: "var(--sage-500)", fontWeight: 700, flex: "none" }}>✓</span>{f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p style={{ textAlign: "center", marginTop: "var(--space-10)", fontSize: "var(--text-sm)", color: "var(--ink-500)" }}>
          表示価格は税抜です。プラン変更・解約はいつでも管理画面から行えます。
        </p>
      </div>
    </div>
  );
}
window.PricingScreen = PricingScreen;
