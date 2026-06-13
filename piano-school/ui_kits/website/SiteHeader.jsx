// おとなりピアノ — Site header
function SiteHeader({ onNav, current }) {
  const nav = [
    { key: "list", label: "教室をさがす" },
    { key: "faq", label: "よくある質問" },
    { key: "pricing", label: "掲載料金" },
  ];
  return (
    <header style={{
      position: "sticky", top: 0, zIndex: 50,
      background: "rgba(255,253,248,0.88)", backdropFilter: "blur(10px)",
      borderBottom: "1px solid var(--hairline)",
    }}>
      <div style={{
        maxWidth: "var(--container-max)", margin: "0 auto", padding: "0 var(--space-6)",
        height: 72, display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        <button onClick={() => onNav("home")} style={{ background: "none", border: "none", cursor: "pointer", padding: 0, display: "flex", alignItems: "center", gap: 10 }}>
          <img src={(window.__resources && window.__resources.logoMark) || "../../assets/logo-mark.svg"} alt="" style={{ height: 40, display: "block" }} />
          <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 24, color: "var(--ink-900)", letterSpacing: ".02em" }}>おとなりピアノ</span>
        </button>
        <nav style={{ display: "flex", alignItems: "center", gap: "var(--space-2)" }}>
          {nav.map((n) => (
            <button key={n.key} onClick={() => onNav(n.key)} style={{
              background: "none", border: "none", cursor: "pointer",
              fontFamily: "var(--font-sans)", fontSize: "var(--text-base)",
              fontWeight: current === n.key ? 700 : 500,
              color: current === n.key ? "var(--clay-600)" : "var(--ink-700)",
              padding: "8px 14px", borderRadius: "var(--radius-md)",
            }}>{n.label}</button>
          ))}
          <button onClick={() => onNav("signup")} style={{
            marginLeft: 8, background: "var(--color-primary)", color: "var(--ivory)",
            border: "none", borderRadius: "var(--radius-md)", cursor: "pointer",
            fontFamily: "var(--font-sans)", fontSize: "var(--text-sm)", fontWeight: 700,
            padding: "10px 18px", boxShadow: "var(--shadow-sm)",
          }}>無料で掲載する</button>
        </nav>
      </div>
    </header>
  );
}
window.SiteHeader = SiteHeader;
