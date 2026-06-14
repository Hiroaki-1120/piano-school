import React from "react";

/**
 * おとなりピアノ — Textarea
 * Labeled multi-line field for reviews and inquiry messages.
 */
export function Textarea({ label, hint, error, required = false, rows = 4, id, style = {}, ...rest }) {
  const taId = id || `op-ta-${Math.random().toString(36).slice(2, 8)}`;
  const borderColor = error ? "var(--color-danger)" : "var(--hairline-strong)";
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)", fontFamily: "var(--font-sans)", ...style }}>
      {label && (
        <label htmlFor={taId} style={{ fontSize: "var(--text-sm)", fontWeight: "var(--weight-bold)", color: "var(--ink-900)" }}>
          {label}
          {required && <span style={{ color: "var(--color-danger)", marginLeft: 4 }}>＊</span>}
        </label>
      )}
      <textarea
        id={taId}
        rows={rows}
        aria-invalid={!!error}
        style={{
          width: "100%",
          padding: "12px 16px",
          fontFamily: "var(--font-sans)",
          fontSize: "var(--text-base)",
          lineHeight: "var(--leading-normal)",
          color: "var(--ink-900)",
          background: "var(--ivory)",
          border: `var(--border-thin) solid ${borderColor}`,
          borderRadius: "var(--radius-md)",
          outline: "none",
          resize: "vertical",
          transition: "border-color var(--dur-fast) var(--ease-soft), box-shadow var(--dur-fast) var(--ease-soft)",
        }}
        onFocus={(e) => { e.currentTarget.style.borderColor = error ? "var(--color-danger)" : "var(--color-primary)"; e.currentTarget.style.boxShadow = "var(--shadow-focus)"; }}
        onBlur={(e) => { e.currentTarget.style.borderColor = borderColor; e.currentTarget.style.boxShadow = "none"; }}
        {...rest}
      />
      {error ? (
        <span style={{ fontSize: "var(--text-xs)", color: "var(--color-danger)" }}>{error}</span>
      ) : hint ? (
        <span style={{ fontSize: "var(--text-xs)", color: "var(--ink-500)" }}>{hint}</span>
      ) : null}
    </div>
  );
}
