import React from "react";

/**
 * おとなりピアノ — Tabs
 * Underline-style tab bar. Controlled via `value`.
 */
export function Tabs({ tabs = [], value, onChange, style = {}, ...rest }) {
  return (
    <div
      role="tablist"
      style={{
        display: "flex",
        gap: "var(--space-6)",
        borderBottom: "var(--border-thin) solid var(--hairline)",
        ...style,
      }}
      {...rest}
    >
      {tabs.map((t) => {
        const key = typeof t === "string" ? t : t.value;
        const label = typeof t === "string" ? t : t.label;
        const active = key === value;
        return (
          <button
            key={key}
            role="tab"
            aria-selected={active}
            onClick={() => onChange && onChange(key)}
            style={{
              position: "relative",
              padding: "12px 2px 14px",
              background: "none",
              border: "none",
              cursor: "pointer",
              fontFamily: "var(--font-sans)",
              fontSize: "var(--text-base)",
              fontWeight: active ? "var(--weight-bold)" : "var(--weight-medium)",
              color: active ? "var(--ink-900)" : "var(--ink-500)",
              transition: "color var(--dur-fast) var(--ease-soft)",
            }}
          >
            {label}
            <span
              style={{
                position: "absolute",
                left: 0,
                right: 0,
                bottom: -1,
                height: 3,
                borderRadius: "var(--radius-pill)",
                background: active ? "var(--color-primary)" : "transparent",
                transition: "background var(--dur-fast) var(--ease-soft)",
              }}
            />
          </button>
        );
      })}
    </div>
  );
}
