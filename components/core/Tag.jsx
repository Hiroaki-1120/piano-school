import React from "react";

/**
 * おとなりピアノ — Tag
 * Interactive filter chip. Toggles selected state.
 */
export function Tag({ children, selected = false, removable = false, onClick, onRemove, style = {}, ...rest }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "var(--space-2)",
        padding: "7px 14px",
        fontFamily: "var(--font-sans)",
        fontSize: "var(--text-sm)",
        fontWeight: "var(--weight-medium)",
        color: selected ? "var(--clay-700)" : "var(--ink-700)",
        background: selected ? "var(--clay-50)" : "var(--ivory)",
        border: `var(--border-thin) solid ${selected ? "var(--clay-300)" : "var(--hairline-strong)"}`,
        borderRadius: "var(--radius-pill)",
        cursor: "pointer",
        transition: "background var(--dur-fast) var(--ease-soft), border-color var(--dur-fast) var(--ease-soft)",
        ...style,
      }}
      onMouseEnter={(e) => { if (!selected) e.currentTarget.style.background = "var(--sand)"; }}
      onMouseLeave={(e) => { e.currentTarget.style.background = selected ? "var(--clay-50)" : "var(--ivory)"; }}
      {...rest}
    >
      {children}
      {removable && (
        <span
          onClick={(e) => { e.stopPropagation(); onRemove && onRemove(e); }}
          style={{ display: "inline-flex", fontSize: "15px", lineHeight: 1, opacity: 0.6 }}
          aria-label="削除"
        >×</span>
      )}
    </button>
  );
}
