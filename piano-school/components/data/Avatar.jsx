import React from "react";

/**
 * おとなりピアノ — Avatar
 * Circular avatar; falls back to an initial on warm wood tint.
 */
export function Avatar({ src, name = "", size = 44, style = {}, ...rest }) {
  const initial = name ? name.trim().charAt(0) : "♪";
  return (
    <div
      style={{
        width: size,
        height: size,
        flex: "none",
        borderRadius: "var(--radius-pill)",
        overflow: "hidden",
        background: "var(--wood-200)",
        color: "var(--wood-600)",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "var(--font-display)",
        fontWeight: "var(--weight-bold)",
        fontSize: size * 0.42,
        border: "var(--border-thin) solid var(--hairline)",
        ...style,
      }}
      {...rest}
    >
      {src ? (
        <img src={src} alt={name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      ) : (
        initial
      )}
    </div>
  );
}
