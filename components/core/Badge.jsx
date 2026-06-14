import React from "react";

/**
 * おとなりピアノ — Badge
 * Small status / category pill. Soft-tinted by tone.
 */
export function Badge({ children, tone = "neutral", solid = false, style = {}, ...rest }) {
  const tones = {
    neutral: { soft: "var(--sand)", softFg: "var(--ink-700)", solid: "var(--ink-700)" },
    primary: { soft: "var(--clay-50)", softFg: "var(--clay-700)", solid: "var(--clay-500)" },
    accent:  { soft: "var(--honey-100)", softFg: "#8A6516", solid: "var(--honey-500)" },
    success: { soft: "var(--sage-100)", softFg: "var(--sage-700)", solid: "var(--green-500)" },
    info:    { soft: "#DCE8EF", softFg: "#2F5468", solid: "var(--blue-500)" },
    danger:  { soft: "#F6DED9", softFg: "#8A2E20", solid: "var(--red-500)" },
  };
  const t = tones[tone] || tones.neutral;
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "var(--space-1)",
        padding: "3px 10px",
        fontFamily: "var(--font-sans)",
        fontSize: "var(--text-xs)",
        fontWeight: "var(--weight-bold)",
        lineHeight: 1.5,
        letterSpacing: "var(--tracking-wide)",
        color: solid ? "var(--ivory)" : t.softFg,
        background: solid ? t.solid : t.soft,
        borderRadius: "var(--radius-pill)",
        whiteSpace: "nowrap",
        ...style,
      }}
      {...rest}
    >
      {children}
    </span>
  );
}
