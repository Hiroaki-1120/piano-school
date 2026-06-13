import React from "react";

/**
 * おとなりピアノ — Button
 * Warm, soft-rounded action button. Clay primary by default.
 */
export function Button({
  children,
  variant = "primary",
  size = "md",
  block = false,
  disabled = false,
  iconLeft = null,
  iconRight = null,
  type = "button",
  onClick,
  style = {},
  ...rest
}) {
  const palettes = {
    primary: {
      "--_bg": "var(--color-primary)",
      "--_bg-hover": "var(--color-primary-hover)",
      "--_bg-press": "var(--color-primary-press)",
      "--_fg": "var(--color-text-on-primary)",
      "--_bd": "transparent",
    },
    secondary: {
      "--_bg": "var(--ivory)",
      "--_bg-hover": "var(--sand)",
      "--_bg-press": "var(--linen)",
      "--_fg": "var(--ink-900)",
      "--_bd": "var(--hairline-strong)",
    },
    ghost: {
      "--_bg": "transparent",
      "--_bg-hover": "var(--clay-50)",
      "--_bg-press": "var(--clay-100)",
      "--_fg": "var(--clay-600)",
      "--_bd": "transparent",
    },
    accent: {
      "--_bg": "var(--honey-500)",
      "--_bg-hover": "var(--honey-400)",
      "--_bg-press": "#C98B25",
      "--_fg": "var(--ink-900)",
      "--_bd": "transparent",
    },
  };

  const sizes = {
    sm: { padding: "8px 14px", fontSize: "var(--text-sm)", height: "36px", radius: "var(--radius-md)" },
    md: { padding: "11px 20px", fontSize: "var(--text-base)", height: "44px", radius: "var(--radius-md)" },
    lg: { padding: "14px 28px", fontSize: "var(--text-md)", height: "54px", radius: "var(--radius-lg)" },
  };

  const p = palettes[variant] || palettes.primary;
  const s = sizes[size] || sizes.md;

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      style={{
        ...p,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "var(--space-2)",
        width: block ? "100%" : "auto",
        minHeight: s.height,
        padding: s.padding,
        fontFamily: "var(--font-sans)",
        fontSize: s.fontSize,
        fontWeight: "var(--weight-bold)",
        letterSpacing: "var(--tracking-normal)",
        lineHeight: 1,
        color: "var(--_fg)",
        background: "var(--_bg)",
        border: "var(--border-thin) solid var(--_bd)",
        borderRadius: s.radius,
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.45 : 1,
        boxShadow: variant === "primary" || variant === "accent" ? "var(--shadow-sm)" : "none",
        transition: "background var(--dur-fast) var(--ease-soft), transform var(--dur-fast) var(--ease-soft)",
        ...style,
      }}
      onMouseDown={(e) => { if (!disabled) e.currentTarget.style.transform = "scale(0.97)"; }}
      onMouseUp={(e) => { e.currentTarget.style.transform = "scale(1)"; }}
      onMouseEnter={(e) => { if (!disabled) e.currentTarget.style.background = "var(--_bg-hover)"; }}
      onMouseLeave={(e) => { e.currentTarget.style.background = "var(--_bg)"; e.currentTarget.style.transform = "scale(1)"; }}
      {...rest}
    >
      {iconLeft}
      {children}
      {iconRight}
    </button>
  );
}
