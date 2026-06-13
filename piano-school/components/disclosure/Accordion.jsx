import React from "react";

/**
 * おとなりピアノ — Accordion
 * Disclosure list for FAQ-style content. Items open independently.
 */
export function Accordion({ items = [], allowMultiple = true, defaultOpen = [], style = {}, ...rest }) {
  const [open, setOpen] = React.useState(() => new Set(defaultOpen));
  const toggle = (i) => {
    setOpen((prev) => {
      const next = new Set(allowMultiple ? prev : []);
      if (prev.has(i)) next.delete(i); else next.add(i);
      return next;
    });
  };
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)", fontFamily: "var(--font-sans)", ...style }} {...rest}>
      {items.map((it, i) => {
        const isOpen = open.has(i);
        return (
          <div key={i} style={{
            background: "var(--color-surface)",
            border: `var(--border-thin) solid ${isOpen ? "var(--clay-300)" : "var(--hairline)"}`,
            borderRadius: "var(--radius-lg)",
            boxShadow: "var(--shadow-xs)",
            overflow: "hidden",
            transition: "border-color var(--dur-fast) var(--ease-soft)",
          }}>
            <button
              onClick={() => toggle(i)}
              aria-expanded={isOpen}
              style={{
                width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between",
                gap: "var(--space-4)", padding: "var(--space-5) var(--space-6)",
                background: "none", border: "none", cursor: "pointer", textAlign: "left",
                fontFamily: "var(--font-display)", fontSize: "var(--text-md)", fontWeight: "var(--weight-bold)",
                color: "var(--ink-900)",
              }}
            >
              <span style={{ display: "flex", gap: "var(--space-3)" }}>
                <span style={{ color: "var(--clay-500)" }}>Q.</span>
                <span>{it.q}</span>
              </span>
              <span aria-hidden="true" style={{
                flex: "none", width: 26, height: 26, borderRadius: "var(--radius-pill)",
                background: isOpen ? "var(--clay-500)" : "var(--sand)", color: isOpen ? "var(--ivory)" : "var(--ink-700)",
                display: "inline-flex", alignItems: "center", justifyContent: "center",
                fontSize: 15, lineHeight: 1, transform: isOpen ? "rotate(180deg)" : "none",
                transition: "transform var(--dur-base) var(--ease-soft), background var(--dur-fast) var(--ease-soft)",
              }}>⌄</span>
            </button>
            <div style={{
              display: "grid",
              gridTemplateRows: isOpen ? "1fr" : "0fr",
              transition: "grid-template-rows var(--dur-base) var(--ease-soft)",
            }}>
              <div style={{ overflow: "hidden" }}>
                <p style={{
                  padding: "0 var(--space-6) var(--space-5) calc(var(--space-6) + 28px)",
                  fontSize: "var(--text-base)", lineHeight: "var(--leading-relaxed)", color: "var(--ink-700)", margin: 0,
                }}>{it.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
