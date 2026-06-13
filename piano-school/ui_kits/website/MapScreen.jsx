// おとなりピアノ — Map search (地図でさがす)
function MapScreen({ initialArea, onOpenStudio, onListView }) {
  const { StudioCard, Button, Badge } = window.PianoSchool_f8945d;
  const data = window.OP_DATA;
  const results = data.studios.filter((s) => !initialArea || s.areaTag.includes(initialArea) || s.area.includes(initialArea));
  const [active, setActive] = React.useState(results[0] ? results[0].id : null);
  const pins = [
    { id: "sangenjaya", top: "38%", left: "30%" },
    { id: "nakameguro", top: "62%", left: "46%" },
    { id: "koenji", top: "24%", left: "58%" },
    { id: "ginza", top: "52%", left: "72%" },
    { id: "yokohama", top: "78%", left: "22%" },
    { id: "jiyugaoka", top: "44%", left: "54%" },
  ];
  const mapBg = {
    backgroundColor: "#EEE6D6",
    backgroundImage: [
      "linear-gradient(90deg, transparent 0 48%, rgba(255,253,248,0.9) 48% 52%, transparent 52%)",
      "linear-gradient(0deg, transparent 0 30%, rgba(255,253,248,0.9) 30% 33%, transparent 33%)",
      "linear-gradient(0deg, transparent 0 70%, rgba(255,253,248,0.7) 70% 72%, transparent 72%)",
      "linear-gradient(60deg, transparent 0 64%, rgba(255,253,248,0.8) 64% 67%, transparent 67%)",
      "radial-gradient(circle at 78% 26%, rgba(110,139,94,0.30) 0 9%, transparent 10%)",
      "radial-gradient(circle at 20% 64%, rgba(110,139,94,0.25) 0 12%, transparent 13%)",
      "radial-gradient(circle at 60% 80%, rgba(74,122,155,0.18) 0 14%, transparent 15%)",
    ].join(","),
  };

  const visible = pins.filter((p) => results.some((r) => r.id === p.id));
  const activeStudio = results.find((r) => r.id === active);

  return (
    <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "var(--space-8) var(--space-6) 0" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "var(--space-5)" }}>
        <h1 style={{ fontSize: "var(--text-2xl)" }}>
          {initialArea || "すべてのエリア"}の教室 <span style={{ fontSize: "var(--text-base)", color: "var(--ink-500)", fontWeight: 400 }}>地図でさがす</span>
        </h1>
        <Button variant="secondary" iconLeft={<span>☰</span>} onClick={onListView}>リストで見る</Button>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "360px 1fr", gap: "var(--space-5)", alignItems: "start" }}>
        {/* List column */}
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)", maxHeight: 560, overflow: "auto", paddingRight: 4 }}>
          {results.map((s) => (
            <div key={s.id} onMouseEnter={() => setActive(s.id)} style={{ outline: active === s.id ? "2px solid var(--clay-300)" : "none", borderRadius: "var(--radius-lg)" }}>
              <StudioCard {...s} layout="horizontal" onClick={() => onOpenStudio(s.id)} />
            </div>
          ))}
        </div>

        {/* Map column */}
        <div style={{ position: "sticky", top: 88, height: 560, borderRadius: "var(--radius-xl)", overflow: "hidden", border: "1px solid var(--hairline-strong)", boxShadow: "var(--shadow-sm)", ...mapBg }}>
          {/* placeholder note */}
          <div style={{ position: "absolute", bottom: 12, right: 12, background: "rgba(255,253,248,0.85)", padding: "4px 10px", borderRadius: "var(--radius-pill)", fontSize: "var(--text-xs)", color: "var(--ink-500)", fontFamily: "var(--font-sans)" }}>
            地図はイメージです
          </div>
          {visible.map((p) => {
            const s = results.find((r) => r.id === p.id);
            const isActive = active === p.id;
            return (
              <button
                key={p.id}
                onMouseEnter={() => setActive(p.id)}
                onClick={() => onOpenStudio(p.id)}
                style={{
                  position: "absolute", top: p.top, left: p.left, transform: "translate(-50%,-50%)",
                  display: "inline-flex", alignItems: "center", gap: 4,
                  padding: "6px 12px", cursor: "pointer",
                  fontFamily: "var(--font-display)", fontSize: "var(--text-sm)", fontWeight: 700,
                  color: isActive ? "var(--ivory)" : "var(--clay-700)",
                  background: isActive ? "var(--clay-500)" : "var(--ivory)",
                  border: "2px solid var(--clay-500)",
                  borderRadius: "var(--radius-pill)",
                  boxShadow: isActive ? "var(--shadow-md)" : "var(--shadow-sm)",
                  zIndex: isActive ? 5 : 1,
                  transition: "background var(--dur-fast) var(--ease-soft), color var(--dur-fast) var(--ease-soft)",
                  whiteSpace: "nowrap",
                }}
              >
                {s.price}〜
              </button>
            );
          })}
        </div>
      </div>
      <div style={{ height: "var(--space-12)" }}></div>
    </div>
  );
}
window.MapScreen = MapScreen;
