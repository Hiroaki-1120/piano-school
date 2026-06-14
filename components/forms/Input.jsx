import React from "react";

/**
 * おとなりピアノ — Input
 * Labeled text field with optional leading icon, hint and error.
 */
export function Input({
  label,
  hint,
  error,
  iconLeft = null,
  required = false,
  id,
  style = {},
  ...rest
}) {
  const inputId = id || `op-input-${Math.random().toString(36).slice(2, 8)}`;
  const borderColor = error ? "var(--color-danger)" : "var(--hairline-strong)";
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)", fontFamily: "var(--font-sans)", ...style }}>
      {label && (
        <label htmlFor={inputId} style={{ fontSize: "var(--text-sm)", fontWeight: "var(--weight-bold)", color: "var(--ink-900)" }}>
          {label}
          {required && <span style={{ color: "var(--color-danger)", marginLeft: 4 }}>＊</span>}
        </label>
      )}
      <div style={{ position: "relative", display: "flex", alignItems: "center" }}>
        {iconLeft && (
          <span style={{ position: "absolute", left: 14, display: "inline-flex", color: "var(--ink-300)", pointerEvents: "none" }}>
            {iconLeft}
          </span>
        )}
        <input
          id={inputId}
          aria-invalid={!!error}
          style={{
            width: "100%",
            height: 48,
            padding: iconLeft ? "0 16px 0 44px" : "0 16px",
            fontFamily: "var(--font-sans)",
            fontSize: "var(--text-base)",
            color: "var(--ink-900)",
            background: "var(--ivory)",
            border: `var(--border-thin) solid ${borderColor}`,
            borderRadius: "var(--radius-md)",
            outline: "none",
            transition: "border-color var(--dur-fast) var(--ease-soft), box-shadow var(--dur-fast) var(--ease-soft)",
          }}
          onFocus={(e) => {
            e.currentTarget.style.borderColor = error ? "var(--color-danger)" : "var(--color-primary)";
            e.currentTarget.style.boxShadow = "var(--shadow-focus)";
          }}
          onBlur={(e) => {
            e.currentTarget.style.borderColor = borderColor;
            e.currentTarget.style.boxShadow = "none";
          }}
          {...rest}
        />
      </div>
      {error ? (
        <span style={{ fontSize: "var(--text-xs)", color: "var(--color-danger)" }}>{error}</span>
      ) : hint ? (
        <span style={{ fontSize: "var(--text-xs)", color: "var(--ink-500)" }}>{hint}</span>
      ) : null}
    </div>
  );
}
