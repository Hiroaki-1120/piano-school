import React from "react";

/**
 * おとなりピアノ — Select
 * Labeled native select styled to match the brand.
 */
export function Select({ label, hint, options = [], required = false, id, style = {}, ...rest }) {
  const selId = id || `op-sel-${Math.random().toString(36).slice(2, 8)}`;
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)", fontFamily: "var(--font-sans)", ...style }}>
      {label && (
        <label htmlFor={selId} style={{ fontSize: "var(--text-sm)", fontWeight: "var(--weight-bold)", color: "var(--ink-900)" }}>
          {label}
          {required && <span style={{ color: "var(--color-danger)", marginLeft: 4 }}>＊</span>}
        </label>
      )}
      <div style={{ position: "relative", display: "flex", alignItems: "center" }}>
        <select
          id={selId}
          style={{
            width: "100%",
            height: 48,
            padding: "0 40px 0 16px",
            fontFamily: "var(--font-sans)",
            fontSize: "var(--text-base)",
            color: "var(--ink-900)",
            background: "var(--ivory)",
            border: "var(--border-thin) solid var(--hairline-strong)",
            borderRadius: "var(--radius-md)",
            outline: "none",
            appearance: "none",
            cursor: "pointer",
            transition: "border-color var(--dur-fast) var(--ease-soft), box-shadow var(--dur-fast) var(--ease-soft)",
          }}
          onFocus={(e) => { e.currentTarget.style.borderColor = "var(--color-primary)"; e.currentTarget.style.boxShadow = "var(--shadow-focus)"; }}
          onBlur={(e) => { e.currentTarget.style.borderColor = "var(--hairline-strong)"; e.currentTarget.style.boxShadow = "none"; }}
          {...rest}
        >
          {options.map((o) => {
            const value = typeof o === "string" ? o : o.value;
            const text = typeof o === "string" ? o : o.label;
            return <option key={value} value={value}>{text}</option>;
          })}
        </select>
        <span style={{ position: "absolute", right: 16, pointerEvents: "none", color: "var(--ink-500)", fontSize: 12 }}>▾</span>
      </div>
      {hint && <span style={{ fontSize: "var(--text-xs)", color: "var(--ink-500)" }}>{hint}</span>}
    </div>
  );
}
