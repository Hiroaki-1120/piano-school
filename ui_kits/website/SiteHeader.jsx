// おとなりピアノ — Site header
function SiteHeader({ onNav, current }) {
  const nav = [
    { key: "list", label: "教室をさがす" },
    { key: "faq", label: "よくある質問" },
    { key: "pricing", label: "掲載料金" },
  ];
  const [menuOpen, setMenuOpen] = React.useState(false);
  const handle = (key) => { setMenuOpen(false); onNav(key); };

  return (
    <header style={{
      position: "sticky", top: 0, zIndex: 50,
      background: "rgba(255,253,248,0.92)", backdropFilter: "blur(10px)",
      borderBottom: "1px solid var(--hairline)",
    }}>
      <div className="op-header-inner" style={{
        maxWidth: "var(--container-max)", margin: "0 auto", padding: "0 var(--space-6)",
        height: 72, display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        <button onClick={() => handle("home")} style={{ background: "none", border: "none", cursor: "pointer", padding: 0, display: "flex", alignItems: "center", gap: 10 }}>
          <img src={(window.__resources && window.__resources.logoMark) || "../../assets/logo-mark.svg"} alt="" style={{ height: 40, display: "block" }} />
          <span className="op-brand-text" style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 24, color: "var(--ink-900)", letterSpacing: ".02em" }}>おとなりピアノ</span>
        </button>

        {/* Desktop nav */}
        <nav className="op-nav" style={{ display: "flex", alignItems: "center", gap: "var(--space-2)" }}>
          {nav.map((n) => (
            <button key={n.key} className="op-nav-link" onClick={() => handle(n.key)} style={{
              background: "none", border: "none", cursor: "pointer",
              fontFamily: "var(--font-sans)", fontSize: "var(--text-base)",
              fontWeight: current === n.key ? 700 : 500,
              color: current === n.key ? "var(--clay-600)" : "var(--ink-700)",
              padding: "8px 14px", borderRadius: "var(--radius-md)", whiteSpace: "nowrap",
            }}>{n.label}</button>
          ))}
          <button className="op-cta" onClick={() => handle("signup")} style={{
            marginLeft: 8, background: "var(--color-primary)", color: "var(--ivory)",
            border: "none", borderRadius: "var(--radius-md)", cursor: "pointer",
            fontFamily: "var(--font-sans)", fontSize: "var(--text-sm)", fontWeight: 700,
            padding: "10px 18px", boxShadow: "var(--shadow-sm)", whiteSpace: "nowrap",
          }}>無料で掲載する</button>
        </nav>

        {/* Mobile hamburger */}
        <button className="op-menu-btn" aria-label="メニュー" onClick={() => setMenuOpen((v) => !v)} style={{
          display: "none", alignItems: "center", justifyContent: "center",
          width: 44, height: 44, flex: "none",
          background: "var(--ivory)", border: "1px solid var(--hairline-strong)",
          borderRadius: "var(--radius-md)", cursor: "pointer", color: "var(--ink-900)",
        }}>
          <span style={{ fontSize: 22, lineHeight: 1 }}>{menuOpen ? "✕" : "≡"}</span>
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="op-mobile-menu" style={{
          display: "none", flexDirection: "column", gap: "var(--space-1)",
          padding: "var(--space-3) var(--space-5) var(--space-5)",
          borderTop: "1px solid var(--hairline)", background: "var(--ivory)",
        }}>
          {nav.map((n) => (
            <button key={n.key} onClick={() => handle(n.key)} style={{
              background: "none", border: "none", textAlign: "left", cursor: "pointer",
              fontFamily: "var(--font-sans)", fontSize: "var(--text-md)",
              fontWeight: current === n.key ? 700 : 500,
              color: current === n.key ? "var(--clay-600)" : "var(--ink-900)",
              padding: "14px 8px", borderRadius: "var(--radius-md)",
            }}>{n.label}</button>
          ))}
          <button onClick={() => handle("signup")} style={{
            marginTop: "var(--space-2)", background: "var(--color-primary)", color: "var(--ivory)",
            border: "none", borderRadius: "var(--radius-md)", cursor: "pointer",
            fontFamily: "var(--font-sans)", fontSize: "var(--text-base)", fontWeight: 700,
            padding: "14px 18px", boxShadow: "var(--shadow-sm)",
          }}>無料で掲載する</button>
        </div>
      )}
    </header>
  );
}
window.SiteHeader = SiteHeader;
