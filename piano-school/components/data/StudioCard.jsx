import React from "react";
import { RatingStars } from "../core/RatingStars.jsx";
import { Badge } from "../core/Badge.jsx";
import { IconButton } from "../core/IconButton.jsx";

/**
 * おとなりピアノ — StudioCard
 * The signature listing tile: photo, name, rating, area, tags, price.
 * Composes RatingStars, Badge and IconButton.
 */
export function StudioCard({
  name,
  area,
  photo = null,
  rating = 0,
  reviews = 0,
  price = "",
  tags = [],
  favorite = false,
  onFavorite,
  onClick,
  layout = "vertical",
  style = {},
  id,
  lead,
  teacher,
  teacherBio,
  established,
  lessons,
  areaTag,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const horizontal = layout === "horizontal";

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: "flex",
        flexDirection: horizontal ? "row" : "column",
        background: "var(--color-surface)",
        border: "var(--border-thin) solid var(--hairline)",
        borderRadius: "var(--radius-lg)",
        overflow: "hidden",
        boxShadow: hover ? "var(--shadow-md)" : "var(--shadow-sm)",
        transform: hover ? "translateY(-2px)" : "translateY(0)",
        transition: "box-shadow var(--dur-base) var(--ease-soft), transform var(--dur-base) var(--ease-soft)",
        cursor: onClick ? "pointer" : "default",
        fontFamily: "var(--font-sans)",
        ...style,
      }}
      {...rest}
    >
      {/* Photo */}
      <div
        className="op-photo-ph"
        style={{
          position: "relative",
          flex: "none",
          width: horizontal ? 200 : "100%",
          height: horizontal ? "auto" : 168,
          minHeight: horizontal ? 150 : undefined,
        }}
      >
        {photo && <img src={photo} alt={name} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />}
        <div style={{ position: "absolute", top: 10, right: 10, zIndex: 2 }}>
          <IconButton
            label={favorite ? "お気に入り解除" : "お気に入りに追加"}
            variant="solid"
            size="sm"
            style={{ background: "rgba(255,253,248,0.92)", color: favorite ? "var(--clay-500)" : "var(--ink-500)", boxShadow: "var(--shadow-sm)" }}
            onClick={(e) => { e.stopPropagation(); onFavorite && onFavorite(); }}
          >
            <span style={{ fontSize: 18, lineHeight: 1 }}>{favorite ? "♥" : "♡"}</span>
          </IconButton>
        </div>
      </div>

      {/* Body */}
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)", padding: "var(--space-5)", flex: 1 }}>
        <div style={{ display: "flex", alignItems: "center", gap: "var(--space-2)", color: "var(--ink-500)", fontSize: "var(--text-sm)" }}>
          <span aria-hidden="true">📍</span>{area}
        </div>
        <h3 style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-xl)", fontWeight: "var(--weight-bold)", color: "var(--ink-900)", lineHeight: 1.3 }}>
          {name}
        </h3>
        {rating > 0 && <RatingStars value={rating} count={reviews} size={16} />}
        {tags.length > 0 && (
          <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-2)", marginTop: "var(--space-1)" }}>
            {tags.map((t) => <Badge key={t} tone="primary">{t}</Badge>)}
          </div>
        )}
        {price && (
          <div style={{ marginTop: "auto", paddingTop: "var(--space-3)", display: "flex", alignItems: "baseline", gap: 4 }}>
            <span style={{ fontSize: "var(--text-sm)", color: "var(--ink-500)" }}>月謝</span>
            <span style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-lg)", fontWeight: "var(--weight-bold)", color: "var(--clay-600)" }}>{price}</span>
            <span style={{ fontSize: "var(--text-sm)", color: "var(--ink-500)" }}>〜</span>
          </div>
        )}
      </div>
    </div>
  );
}
