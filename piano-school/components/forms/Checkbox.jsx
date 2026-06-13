import React from "react";

/**
 * おとなりピアノ — Checkbox
 * Custom-styled checkbox with label. Controlled via `checked`.
 */
export function Checkbox({ label, checked = false, onChange, disabled = false, id, style = {}, ...rest }) {
  const cbId = id || `op-cb-${Math.random().toString(36).slice(2, 8)}`;
  return (
    <label
      htmlFor={cbId}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "var(--space-2)",
        fontFamily: "var(--font-sans)",
        fontSize: "var(--text-base)",
        color: disabled ? "var(--ink-300)" : "var(--ink-900)",
        cursor: disabled ? "not-allowed" : "pointer",
        userSelect: "none",
        ...style,
      }}
    >
      <input
        id={cbId}
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={onChange}
        style={{ position: "absolute", opacity: 0, width: 1, height: 1 }}
        {...rest}
      />
      <span
        aria-hidden="true"
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          width: 22,
          height: 22,
          flex: "none",
          borderRadius: "var(--radius-sm)",
          border: `var(--border-thick) solid ${checked ? "var(--color-primary)" : "var(--hairline-strong)"}`,
          background: checked ? "var(--color-primary)" : "var(--ivory)",
          color: "var(--ivory)",
          fontSize: 13,
          lineHeight: 1,
          transition: "background var(--dur-fast) var(--ease-soft), border-color var(--dur-fast) var(--ease-soft)",
        }}
      >
        {checked ? "✓" : ""}
      </span>
      {label}
    </label>
  );
}
