import React from "react";

/**
 * おとなりピアノ — IconButton
 * Square/circular icon-only button. Pass a Lucide icon element as children.
 */
export function IconButton({
  children,
  label,
  variant = "ghost",
  size = "md",
  shape = "circle",
  disabled = false,
  onClick,
  style = {},
  ...rest
}) {
  const palettes = {
    ghost: { bg: "transparent", hover: "var(--sand)", fg: "var(--ink-700)", bd: "transparent" },
    solid: { bg: "var(--color-primary)", hover: "var(--color-primary-hover)", fg: "var(--ivory)", bd: "transparent" },
    outline: { bg: "var(--ivory)", hover: "var(--sand)", fg: "var(--ink-700)", bd: "var(--hairline-strong)" },
  };
  const sizes = { sm: 34, md: 42, lg: 50 };
  const p = palettes[variant] || palettes.ghost;
  const dim = sizes[size] || sizes.md;

  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      disabled={disabled}
      onClick={onClick}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: dim,
        height: dim,
        color: p.fg,
        background: p.bg,
        border: `var(--border-thin) solid ${p.bd}`,
        borderRadius: shape === "circle" ? "var(--radius-pill)" : "var(--radius-md)",
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.45 : 1,
        transition: "background var(--dur-fast) var(--ease-soft), transform var(--dur-fast) var(--ease-soft)",
        ...style,
      }}
      onMouseEnter={(e) => { if (!disabled) e.currentTarget.style.background = p.hover; }}
      onMouseLeave={(e) => { e.currentTarget.style.background = p.bg; e.currentTarget.style.transform = "scale(1)"; }}
      onMouseDown={(e) => { if (!disabled) e.currentTarget.style.transform = "scale(0.92)"; }}
      onMouseUp={(e) => { e.currentTarget.style.transform = "scale(1)"; }}
      {...rest}
    >
      {children}
    </button>
  );
}
