import React from "react";

/**
 * おとなりピアノ — RatingStars
 * Honey-colored star rating with optional numeric value & count.
 */
export function RatingStars({ value = 0, max = 5, size = 18, showValue = true, count = null, style = {}, ...rest }) {
  const pct = Math.max(0, Math.min(1, value / max)) * 100;
  const starRow = (color) => (
    <div style={{ display: "flex", gap: "1px", color }} aria-hidden="true">
      {Array.from({ length: max }).map((_, i) => (
        <span key={i} style={{ fontSize: size, lineHeight: 1 }}>★</span>
      ))}
    </div>
  );
  return (
    <div style={{ display: "inline-flex", alignItems: "center", gap: "var(--space-2)", fontFamily: "var(--font-sans)", ...style }} {...rest}>
      <div style={{ position: "relative", display: "inline-block" }} role="img" aria-label={`${value} / ${max}`}>
        {starRow("var(--linen)")}
        <div style={{ position: "absolute", inset: 0, width: `${pct}%`, overflow: "hidden", whiteSpace: "nowrap" }}>
          {starRow("var(--color-star)")}
        </div>
      </div>
      {showValue && (
        <span style={{ fontSize: "var(--text-sm)", fontWeight: "var(--weight-bold)", color: "var(--ink-900)" }}>
          {value.toFixed(1)}
        </span>
      )}
      {count != null && (
        <span style={{ fontSize: "var(--text-sm)", color: "var(--ink-500)" }}>（{count}件）</span>
      )}
    </div>
  );
}
