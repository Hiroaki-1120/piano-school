/* @ds-bundle: {"format":3,"namespace":"PianoSchool_f8945d","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"RatingStars","sourcePath":"components/core/RatingStars.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Avatar","sourcePath":"components/data/Avatar.jsx"},{"name":"Card","sourcePath":"components/data/Card.jsx"},{"name":"StudioCard","sourcePath":"components/data/StudioCard.jsx"},{"name":"Tabs","sourcePath":"components/data/Tabs.jsx"},{"name":"Accordion","sourcePath":"components/disclosure/Accordion.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"bcaf452cf56d","components/core/Button.jsx":"19694822ceff","components/core/IconButton.jsx":"3978390faf99","components/core/RatingStars.jsx":"537edc6b121d","components/core/Tag.jsx":"94185b5fb2e2","components/data/Avatar.jsx":"b12a58f58318","components/data/Card.jsx":"c123552d26ae","components/data/StudioCard.jsx":"7b3630e7d97f","components/data/Tabs.jsx":"54b0ccef73be","components/disclosure/Accordion.jsx":"edfeceef1c14","components/forms/Checkbox.jsx":"27cec672eac0","components/forms/Input.jsx":"6c3ed3ce24a9","components/forms/Select.jsx":"61c07b62d8e5","components/forms/Textarea.jsx":"688f1741a77a","explorations/design-canvas.jsx":"bd8746af6e58","ui_kits/website/DetailScreen.jsx":"dbd4352780e6","ui_kits/website/FaqScreen.jsx":"1da861e01925","ui_kits/website/HomeScreen.jsx":"a9366e02bdd9","ui_kits/website/ListingScreen.jsx":"834bf6026937","ui_kits/website/MapScreen.jsx":"ac1e580f5104","ui_kits/website/PricingScreen.jsx":"d67fc119c9d7","ui_kits/website/SignupScreen.jsx":"535c7e32903b","ui_kits/website/SiteFooter.jsx":"6ca8fd7927cf","ui_kits/website/SiteHeader.jsx":"8663b87e66b6","ui_kits/website/data.js":"150ac02dd59f"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.PianoSchool_f8945d = window.PianoSchool_f8945d || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * おとなりピアノ — Badge
 * Small status / category pill. Soft-tinted by tone.
 */
function Badge({
  children,
  tone = "neutral",
  solid = false,
  style = {},
  ...rest
}) {
  const tones = {
    neutral: {
      soft: "var(--sand)",
      softFg: "var(--ink-700)",
      solid: "var(--ink-700)"
    },
    primary: {
      soft: "var(--clay-50)",
      softFg: "var(--clay-700)",
      solid: "var(--clay-500)"
    },
    accent: {
      soft: "var(--honey-100)",
      softFg: "#8A6516",
      solid: "var(--honey-500)"
    },
    success: {
      soft: "var(--sage-100)",
      softFg: "var(--sage-700)",
      solid: "var(--green-500)"
    },
    info: {
      soft: "#DCE8EF",
      softFg: "#2F5468",
      solid: "var(--blue-500)"
    },
    danger: {
      soft: "#F6DED9",
      softFg: "#8A2E20",
      solid: "var(--red-500)"
    }
  };
  const t = tones[tone] || tones.neutral;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
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
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * おとなりピアノ — Button
 * Warm, soft-rounded action button. Clay primary by default.
 */
function Button({
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
      "--_bd": "transparent"
    },
    secondary: {
      "--_bg": "var(--ivory)",
      "--_bg-hover": "var(--sand)",
      "--_bg-press": "var(--linen)",
      "--_fg": "var(--ink-900)",
      "--_bd": "var(--hairline-strong)"
    },
    ghost: {
      "--_bg": "transparent",
      "--_bg-hover": "var(--clay-50)",
      "--_bg-press": "var(--clay-100)",
      "--_fg": "var(--clay-600)",
      "--_bd": "transparent"
    },
    accent: {
      "--_bg": "var(--honey-500)",
      "--_bg-hover": "var(--honey-400)",
      "--_bg-press": "#C98B25",
      "--_fg": "var(--ink-900)",
      "--_bd": "transparent"
    }
  };
  const sizes = {
    sm: {
      padding: "8px 14px",
      fontSize: "var(--text-sm)",
      height: "36px",
      radius: "var(--radius-md)"
    },
    md: {
      padding: "11px 20px",
      fontSize: "var(--text-base)",
      height: "44px",
      radius: "var(--radius-md)"
    },
    lg: {
      padding: "14px 28px",
      fontSize: "var(--text-md)",
      height: "54px",
      radius: "var(--radius-lg)"
    }
  };
  const p = palettes[variant] || palettes.primary;
  const s = sizes[size] || sizes.md;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    style: {
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
      ...style
    },
    onMouseDown: e => {
      if (!disabled) e.currentTarget.style.transform = "scale(0.97)";
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = "scale(1)";
    },
    onMouseEnter: e => {
      if (!disabled) e.currentTarget.style.background = "var(--_bg-hover)";
    },
    onMouseLeave: e => {
      e.currentTarget.style.background = "var(--_bg)";
      e.currentTarget.style.transform = "scale(1)";
    }
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * おとなりピアノ — IconButton
 * Square/circular icon-only button. Pass a Lucide icon element as children.
 */
function IconButton({
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
    ghost: {
      bg: "transparent",
      hover: "var(--sand)",
      fg: "var(--ink-700)",
      bd: "transparent"
    },
    solid: {
      bg: "var(--color-primary)",
      hover: "var(--color-primary-hover)",
      fg: "var(--ivory)",
      bd: "transparent"
    },
    outline: {
      bg: "var(--ivory)",
      hover: "var(--sand)",
      fg: "var(--ink-700)",
      bd: "var(--hairline-strong)"
    }
  };
  const sizes = {
    sm: 34,
    md: 42,
    lg: 50
  };
  const p = palettes[variant] || palettes.ghost;
  const dim = sizes[size] || sizes.md;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    title: label,
    disabled: disabled,
    onClick: onClick,
    style: {
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
      ...style
    },
    onMouseEnter: e => {
      if (!disabled) e.currentTarget.style.background = p.hover;
    },
    onMouseLeave: e => {
      e.currentTarget.style.background = p.bg;
      e.currentTarget.style.transform = "scale(1)";
    },
    onMouseDown: e => {
      if (!disabled) e.currentTarget.style.transform = "scale(0.92)";
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = "scale(1)";
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/RatingStars.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * おとなりピアノ — RatingStars
 * Honey-colored star rating with optional numeric value & count.
 */
function RatingStars({
  value = 0,
  max = 5,
  size = 18,
  showValue = true,
  count = null,
  style = {},
  ...rest
}) {
  const pct = Math.max(0, Math.min(1, value / max)) * 100;
  const starRow = color => /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "1px",
      color
    },
    "aria-hidden": "true"
  }, Array.from({
    length: max
  }).map((_, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      fontSize: size,
      lineHeight: 1
    }
  }, "\u2605")));
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--space-2)",
      fontFamily: "var(--font-sans)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "inline-block"
    },
    role: "img",
    "aria-label": `${value} / ${max}`
  }, starRow("var(--linen)"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      width: `${pct}%`,
      overflow: "hidden",
      whiteSpace: "nowrap"
    }
  }, starRow("var(--color-star)"))), showValue && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-sm)",
      fontWeight: "var(--weight-bold)",
      color: "var(--ink-900)"
    }
  }, value.toFixed(1)), count != null && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-sm)",
      color: "var(--ink-500)"
    }
  }, "\uFF08", count, "\u4EF6\uFF09"));
}
Object.assign(__ds_scope, { RatingStars });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/RatingStars.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * おとなりピアノ — Tag
 * Interactive filter chip. Toggles selected state.
 */
function Tag({
  children,
  selected = false,
  removable = false,
  onClick,
  onRemove,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    onClick: onClick,
    "aria-pressed": selected,
    style: {
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
      ...style
    },
    onMouseEnter: e => {
      if (!selected) e.currentTarget.style.background = "var(--sand)";
    },
    onMouseLeave: e => {
      e.currentTarget.style.background = selected ? "var(--clay-50)" : "var(--ivory)";
    }
  }, rest), children, removable && /*#__PURE__*/React.createElement("span", {
    onClick: e => {
      e.stopPropagation();
      onRemove && onRemove(e);
    },
    style: {
      display: "inline-flex",
      fontSize: "15px",
      lineHeight: 1,
      opacity: 0.6
    },
    "aria-label": "\u524A\u9664"
  }, "\xD7"));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/data/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * おとなりピアノ — Avatar
 * Circular avatar; falls back to an initial on warm wood tint.
 */
function Avatar({
  src,
  name = "",
  size = 44,
  style = {},
  ...rest
}) {
  const initial = name ? name.trim().charAt(0) : "♪";
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
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
      ...style
    }
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }) : initial);
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/data/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * おとなりピアノ — Card
 * Soft, ivory surface container. `interactive` adds hover lift.
 */
function Card({
  children,
  interactive = false,
  padding = "var(--space-6)",
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => interactive && setHover(true),
    onMouseLeave: () => interactive && setHover(false),
    style: {
      background: "var(--color-surface)",
      border: "var(--border-thin) solid var(--hairline)",
      borderRadius: "var(--radius-lg)",
      boxShadow: hover ? "var(--shadow-md)" : "var(--shadow-sm)",
      padding,
      transform: hover ? "translateY(-2px)" : "translateY(0)",
      transition: "box-shadow var(--dur-base) var(--ease-soft), transform var(--dur-base) var(--ease-soft)",
      cursor: interactive ? "pointer" : "default",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Card.jsx", error: String((e && e.message) || e) }); }

// components/data/StudioCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * おとなりピアノ — StudioCard
 * The signature listing tile: photo, name, rating, area, tags, price.
 * Composes RatingStars, Badge and IconButton.
 */
function StudioCard({
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
  return /*#__PURE__*/React.createElement("div", _extends({
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
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
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "op-photo-ph",
    style: {
      position: "relative",
      flex: "none",
      width: horizontal ? 200 : "100%",
      height: horizontal ? "auto" : 168,
      minHeight: horizontal ? 150 : undefined
    }
  }, photo && /*#__PURE__*/React.createElement("img", {
    src: photo,
    alt: name,
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 10,
      right: 10,
      zIndex: 2
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    label: favorite ? "お気に入り解除" : "お気に入りに追加",
    variant: "solid",
    size: "sm",
    style: {
      background: "rgba(255,253,248,0.92)",
      color: favorite ? "var(--clay-500)" : "var(--ink-500)",
      boxShadow: "var(--shadow-sm)"
    },
    onClick: e => {
      e.stopPropagation();
      onFavorite && onFavorite();
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 18,
      lineHeight: 1
    }
  }, favorite ? "♥" : "♡")))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-2)",
      padding: "var(--space-5)",
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-2)",
      color: "var(--ink-500)",
      fontSize: "var(--text-sm)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, "\uD83D\uDCCD"), area), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-xl)",
      fontWeight: "var(--weight-bold)",
      color: "var(--ink-900)",
      lineHeight: 1.3
    }
  }, name), rating > 0 && /*#__PURE__*/React.createElement(__ds_scope.RatingStars, {
    value: rating,
    count: reviews,
    size: 16
  }), tags.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "var(--space-2)",
      marginTop: "var(--space-1)"
    }
  }, tags.map(t => /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    key: t,
    tone: "primary"
  }, t))), price && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "auto",
      paddingTop: "var(--space-3)",
      display: "flex",
      alignItems: "baseline",
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-sm)",
      color: "var(--ink-500)"
    }
  }, "\u6708\u8B1D"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-lg)",
      fontWeight: "var(--weight-bold)",
      color: "var(--clay-600)"
    }
  }, price), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-sm)",
      color: "var(--ink-500)"
    }
  }, "\u301C"))));
}
Object.assign(__ds_scope, { StudioCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/StudioCard.jsx", error: String((e && e.message) || e) }); }

// components/data/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * おとなりピアノ — Tabs
 * Underline-style tab bar. Controlled via `value`.
 */
function Tabs({
  tabs = [],
  value,
  onChange,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tablist",
    style: {
      display: "flex",
      gap: "var(--space-6)",
      borderBottom: "var(--border-thin) solid var(--hairline)",
      ...style
    }
  }, rest), tabs.map(t => {
    const key = typeof t === "string" ? t : t.value;
    const label = typeof t === "string" ? t : t.label;
    const active = key === value;
    return /*#__PURE__*/React.createElement("button", {
      key: key,
      role: "tab",
      "aria-selected": active,
      onClick: () => onChange && onChange(key),
      style: {
        position: "relative",
        padding: "12px 2px 14px",
        background: "none",
        border: "none",
        cursor: "pointer",
        fontFamily: "var(--font-sans)",
        fontSize: "var(--text-base)",
        fontWeight: active ? "var(--weight-bold)" : "var(--weight-medium)",
        color: active ? "var(--ink-900)" : "var(--ink-500)",
        transition: "color var(--dur-fast) var(--ease-soft)"
      }
    }, label, /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        left: 0,
        right: 0,
        bottom: -1,
        height: 3,
        borderRadius: "var(--radius-pill)",
        background: active ? "var(--color-primary)" : "transparent",
        transition: "background var(--dur-fast) var(--ease-soft)"
      }
    }));
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/disclosure/Accordion.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * おとなりピアノ — Accordion
 * Disclosure list for FAQ-style content. Items open independently.
 */
function Accordion({
  items = [],
  allowMultiple = true,
  defaultOpen = [],
  style = {},
  ...rest
}) {
  const [open, setOpen] = React.useState(() => new Set(defaultOpen));
  const toggle = i => {
    setOpen(prev => {
      const next = new Set(allowMultiple ? prev : []);
      if (prev.has(i)) next.delete(i);else next.add(i);
      return next;
    });
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-3)",
      fontFamily: "var(--font-sans)",
      ...style
    }
  }, rest), items.map((it, i) => {
    const isOpen = open.has(i);
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        background: "var(--color-surface)",
        border: `var(--border-thin) solid ${isOpen ? "var(--clay-300)" : "var(--hairline)"}`,
        borderRadius: "var(--radius-lg)",
        boxShadow: "var(--shadow-xs)",
        overflow: "hidden",
        transition: "border-color var(--dur-fast) var(--ease-soft)"
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => toggle(i),
      "aria-expanded": isOpen,
      style: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "var(--space-4)",
        padding: "var(--space-5) var(--space-6)",
        background: "none",
        border: "none",
        cursor: "pointer",
        textAlign: "left",
        fontFamily: "var(--font-display)",
        fontSize: "var(--text-md)",
        fontWeight: "var(--weight-bold)",
        color: "var(--ink-900)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: "flex",
        gap: "var(--space-3)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--clay-500)"
      }
    }, "Q."), /*#__PURE__*/React.createElement("span", null, it.q)), /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true",
      style: {
        flex: "none",
        width: 26,
        height: 26,
        borderRadius: "var(--radius-pill)",
        background: isOpen ? "var(--clay-500)" : "var(--sand)",
        color: isOpen ? "var(--ivory)" : "var(--ink-700)",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 15,
        lineHeight: 1,
        transform: isOpen ? "rotate(180deg)" : "none",
        transition: "transform var(--dur-base) var(--ease-soft), background var(--dur-fast) var(--ease-soft)"
      }
    }, "\u2304")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateRows: isOpen ? "1fr" : "0fr",
        transition: "grid-template-rows var(--dur-base) var(--ease-soft)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        padding: "0 var(--space-6) var(--space-5) calc(var(--space-6) + 28px)",
        fontSize: "var(--text-base)",
        lineHeight: "var(--leading-relaxed)",
        color: "var(--ink-700)",
        margin: 0
      }
    }, it.a))));
  }));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/disclosure/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * おとなりピアノ — Checkbox
 * Custom-styled checkbox with label. Controlled via `checked`.
 */
function Checkbox({
  label,
  checked = false,
  onChange,
  disabled = false,
  id,
  style = {},
  ...rest
}) {
  const cbId = id || `op-cb-${Math.random().toString(36).slice(2, 8)}`;
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: cbId,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--space-2)",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-base)",
      color: disabled ? "var(--ink-300)" : "var(--ink-900)",
      cursor: disabled ? "not-allowed" : "pointer",
      userSelect: "none",
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: cbId,
    type: "checkbox",
    checked: checked,
    disabled: disabled,
    onChange: onChange,
    style: {
      position: "absolute",
      opacity: 0,
      width: 1,
      height: 1
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
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
      transition: "background var(--dur-fast) var(--ease-soft), border-color var(--dur-fast) var(--ease-soft)"
    }
  }, checked ? "✓" : ""), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * おとなりピアノ — Input
 * Labeled text field with optional leading icon, hint and error.
 */
function Input({
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
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-2)",
      fontFamily: "var(--font-sans)",
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontSize: "var(--text-sm)",
      fontWeight: "var(--weight-bold)",
      color: "var(--ink-900)"
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--color-danger)",
      marginLeft: 4
    }
  }, "\uFF0A")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      alignItems: "center"
    }
  }, iconLeft && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 14,
      display: "inline-flex",
      color: "var(--ink-300)",
      pointerEvents: "none"
    }
  }, iconLeft), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    "aria-invalid": !!error,
    style: {
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
      transition: "border-color var(--dur-fast) var(--ease-soft), box-shadow var(--dur-fast) var(--ease-soft)"
    },
    onFocus: e => {
      e.currentTarget.style.borderColor = error ? "var(--color-danger)" : "var(--color-primary)";
      e.currentTarget.style.boxShadow = "var(--shadow-focus)";
    },
    onBlur: e => {
      e.currentTarget.style.borderColor = borderColor;
      e.currentTarget.style.boxShadow = "none";
    }
  }, rest))), error ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-xs)",
      color: "var(--color-danger)"
    }
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-xs)",
      color: "var(--ink-500)"
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * おとなりピアノ — Select
 * Labeled native select styled to match the brand.
 */
function Select({
  label,
  hint,
  options = [],
  required = false,
  id,
  style = {},
  ...rest
}) {
  const selId = id || `op-sel-${Math.random().toString(36).slice(2, 8)}`;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-2)",
      fontFamily: "var(--font-sans)",
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: selId,
    style: {
      fontSize: "var(--text-sm)",
      fontWeight: "var(--weight-bold)",
      color: "var(--ink-900)"
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--color-danger)",
      marginLeft: 4
    }
  }, "\uFF0A")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: selId,
    style: {
      width: "100%",
      height: 48,
      padding: "0 40px 0 16px",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-base)",
      color: "var(--ink-900)",
      background: "var(--ivory)",
      border: "var(--border-thin) solid var(--hairline-strong)",
      borderRadius: "var(--radius-md)",
      outline: "none",
      appearance: "none",
      cursor: "pointer",
      transition: "border-color var(--dur-fast) var(--ease-soft), box-shadow var(--dur-fast) var(--ease-soft)"
    },
    onFocus: e => {
      e.currentTarget.style.borderColor = "var(--color-primary)";
      e.currentTarget.style.boxShadow = "var(--shadow-focus)";
    },
    onBlur: e => {
      e.currentTarget.style.borderColor = "var(--hairline-strong)";
      e.currentTarget.style.boxShadow = "none";
    }
  }, rest), options.map(o => {
    const value = typeof o === "string" ? o : o.value;
    const text = typeof o === "string" ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: value,
      value: value
    }, text);
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      right: 16,
      pointerEvents: "none",
      color: "var(--ink-500)",
      fontSize: 12
    }
  }, "\u25BE")), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-xs)",
      color: "var(--ink-500)"
    }
  }, hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * おとなりピアノ — Textarea
 * Labeled multi-line field for reviews and inquiry messages.
 */
function Textarea({
  label,
  hint,
  error,
  required = false,
  rows = 4,
  id,
  style = {},
  ...rest
}) {
  const taId = id || `op-ta-${Math.random().toString(36).slice(2, 8)}`;
  const borderColor = error ? "var(--color-danger)" : "var(--hairline-strong)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-2)",
      fontFamily: "var(--font-sans)",
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: taId,
    style: {
      fontSize: "var(--text-sm)",
      fontWeight: "var(--weight-bold)",
      color: "var(--ink-900)"
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--color-danger)",
      marginLeft: 4
    }
  }, "\uFF0A")), /*#__PURE__*/React.createElement("textarea", _extends({
    id: taId,
    rows: rows,
    "aria-invalid": !!error,
    style: {
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
      transition: "border-color var(--dur-fast) var(--ease-soft), box-shadow var(--dur-fast) var(--ease-soft)"
    },
    onFocus: e => {
      e.currentTarget.style.borderColor = error ? "var(--color-danger)" : "var(--color-primary)";
      e.currentTarget.style.boxShadow = "var(--shadow-focus)";
    },
    onBlur: e => {
      e.currentTarget.style.borderColor = borderColor;
      e.currentTarget.style.boxShadow = "none";
    }
  }, rest)), error ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-xs)",
      color: "var(--color-danger)"
    }
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-xs)",
      color: "var(--ink-500)"
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// explorations/design-canvas.jsx
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)

/* BEGIN USAGE */
// DesignCanvas.jsx — Figma-ish design canvas wrapper
// Warm gray grid bg + Sections + Artboards + PostIt notes.
// Exports (to window): DesignCanvas, DCSection, DCArtboard, DCPostIt.
// Artboards are reorderable (grip-drag), deletable, labels/titles are
// inline-editable, and any artboard can be opened in a fullscreen focus
// overlay (←/→/Esc). State persists to a .design-canvas.state.json sidecar
// via the host bridge. No assets, no deps.
//
// Usage:
//   <DesignCanvas>
//     <DCSection id="onboarding" title="Onboarding" subtitle="First-run variants">
//       <DCArtboard id="a" label="A · Dusk" width={260} height={480}>…</DCArtboard>
//       <DCArtboard id="b" label="B · Minimal" width={260} height={480}>…</DCArtboard>
//     </DCSection>
//   </DesignCanvas>
//
// Artboards are static design frames, not scroll regions — never use
// height: 100% + overflow: auto/scroll on inner elements; size each artboard
// to fit its content (explicit pixel height, or let it grow).
/* END USAGE */

const DC = {
  bg: '#f0eee9',
  grid: 'rgba(0,0,0,0.06)',
  label: 'rgba(60,50,40,0.7)',
  title: 'rgba(40,30,20,0.85)',
  subtitle: 'rgba(60,50,40,0.6)',
  postitBg: '#fef4a8',
  postitText: '#5a4a2a',
  font: '-apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif'
};

// One-time CSS injection (classes are dc-prefixed so they don't collide with
// the hosted design's own styles).
if (typeof document !== 'undefined' && !document.getElementById('dc-styles')) {
  const s = document.createElement('style');
  s.id = 'dc-styles';
  s.textContent = ['.dc-editable{cursor:text;outline:none;white-space:nowrap;border-radius:3px;padding:0 2px;margin:0 -2px}', '.dc-editable:focus{background:#fff;box-shadow:0 0 0 1.5px #c96442}', '[data-dc-slot]{transition:transform .18s cubic-bezier(.2,.7,.3,1)}', '[data-dc-slot].dc-dragging{transition:none;z-index:10;pointer-events:none}', '[data-dc-slot].dc-dragging .dc-card{box-shadow:0 12px 40px rgba(0,0,0,.25),0 0 0 2px #c96442;transform:scale(1.02)}',
  // isolation:isolate contains artboard content's z-indexes so a
  // z-indexed child (sticky navbar etc.) can't paint over .dc-header or
  // the .dc-menu popover that drops into the top of the card.
  '.dc-card{isolation:isolate;transition:box-shadow .15s,transform .15s}', '.dc-card *{scrollbar-width:none}', '.dc-card *::-webkit-scrollbar{display:none}',
  // Per-artboard header: grip + label on the left, delete/expand on the
  // right. Single flex row; when the artboard's on-screen width is too
  // narrow for both the label yields (ellipsis, then hidden entirely below
  // ~4ch via the container query) and the buttons stay on the row.
  '.dc-header{position:absolute;bottom:100%;left:-4px;margin-bottom:calc(4px * var(--dc-inv-zoom,1));z-index:2;', '  display:flex;align-items:center;container-type:inline-size}', '.dc-labelrow{display:flex;align-items:center;gap:4px;height:24px;flex:1 1 auto;min-width:0}', '.dc-grip{flex:0 0 auto;cursor:grab;display:flex;align-items:center;padding:5px 4px;border-radius:4px;transition:background .12s,opacity .12s}', '.dc-grip:hover{background:rgba(0,0,0,.08)}', '.dc-grip:active{cursor:grabbing}', '.dc-labeltext{flex:1 1 auto;min-width:0;cursor:pointer;border-radius:4px;padding:3px 6px;', '  display:flex;align-items:center;transition:background .12s;overflow:hidden}',
  // Below ~4ch of label room: hide the label entirely, and drop the grip to
  // hover-only (same reveal rule as .dc-btns) so a narrow header is clean
  // until the card is moused.
  '@container (max-width: 110px){', '  .dc-labeltext{display:none}', '  .dc-grip{opacity:0}', '  [data-dc-slot]:hover .dc-grip{opacity:1}', '}', '.dc-labeltext:hover{background:rgba(0,0,0,.05)}', '.dc-labeltext .dc-editable{overflow:hidden;text-overflow:ellipsis;max-width:100%}', '.dc-labeltext .dc-editable:focus{overflow:visible;text-overflow:clip}', '.dc-btns{flex:0 0 auto;margin-left:auto;display:flex;gap:2px;opacity:0;transition:opacity .12s}', '[data-dc-slot]:hover .dc-btns,.dc-btns:has(.dc-menu){opacity:1}', '.dc-expand,.dc-kebab{width:22px;height:22px;border-radius:5px;border:none;cursor:pointer;padding:0;', '  background:transparent;color:rgba(60,50,40,.7);display:flex;align-items:center;justify-content:center;', '  font:inherit;transition:background .12s,color .12s}', '.dc-expand:hover,.dc-kebab:hover{background:rgba(0,0,0,.06);color:#2a251f}',
  // Slot hosting an open menu floats above later siblings (which otherwise
  // paint on top — same z-index:auto, later DOM order) so the popup isn't
  // clipped by the next card.
  '[data-dc-slot]:has(.dc-menu){z-index:10}', '.dc-menu{position:absolute;top:100%;right:0;margin-top:4px;background:#fff;border-radius:8px;', '  box-shadow:0 8px 28px rgba(0,0,0,.18),0 0 0 1px rgba(0,0,0,.05);padding:4px;min-width:160px;z-index:10}', '.dc-menu button{display:block;width:100%;padding:7px 10px;border:0;background:transparent;', '  border-radius:5px;font-family:inherit;font-size:13px;font-weight:500;line-height:1.2;', '  color:#29261b;cursor:pointer;text-align:left;transition:background .12s;white-space:nowrap}', '.dc-menu button:hover{background:rgba(0,0,0,.05)}', '.dc-menu hr{border:0;border-top:1px solid rgba(0,0,0,.08);margin:4px 2px}', '.dc-menu .dc-danger{color:#c96442}', '.dc-menu .dc-danger:hover{background:rgba(201,100,66,.1)}',
  // Chrome (titles / labels / buttons) counter-scales against the viewport
  // zoom so it stays a constant on-screen size. --dc-inv-zoom is set by
  // DCViewport on every transform update and inherits to all descendants —
  // any overlay inside the world (e.g. a TweaksPanel on an artboard) can use
  // it the same way.
  //
  // The header uses transform:scale (out-of-flow, so layout impact doesn't
  // matter) with its world-space width set to card-width / inv-zoom so that
  // after counter-scaling its on-screen width exactly matches the card's —
  // that's what lets the container query + text-overflow behave against the
  // card's visible edge at every zoom level.
  //
  // The section head uses CSS zoom instead of transform so its layout box
  // grows with the counter-scale, pushing the card row down — otherwise the
  // constant-screen-size title would overflow into the (shrinking) world-
  // space gap and overlap the artboard headers at low zoom.
  '.dc-header{width:calc((100% + 4px) / var(--dc-inv-zoom,1));', '  transform:scale(var(--dc-inv-zoom,1));transform-origin:bottom left}', '.dc-sectionhead{zoom:var(--dc-inv-zoom,1)}'].join('\n');
  document.head.appendChild(s);
}
const DCCtx = React.createContext(null);

// Recursively unwrap React.Fragment so <>…</> grouping doesn't hide
// DCSection/DCArtboard children from the type-based walks below.
function dcFlatten(children) {
  const out = [];
  React.Children.forEach(children, c => {
    if (c && c.type === React.Fragment) out.push(...dcFlatten(c.props.children));else out.push(c);
  });
  return out;
}

// ─────────────────────────────────────────────────────────────
// DesignCanvas — stateful wrapper around the pan/zoom viewport.
// Owns runtime state (per-section order, renamed titles/labels, hidden
// artboards, focused artboard). Order/titles/labels/hidden persist to a
// .design-canvas.state.json
// sidecar next to the HTML. Reads go via plain fetch() so the saved
// arrangement is visible anywhere the HTML + sidecar are served together
// (omelette preview, direct link, downloaded zip). Writes go through the
// host's window.omelette bridge — editing requires the omelette runtime.
// Focus is ephemeral.
// ─────────────────────────────────────────────────────────────
const DC_STATE_FILE = '.design-canvas.state.json';
function DesignCanvas({
  children,
  minScale,
  maxScale,
  style
}) {
  const [state, setState] = React.useState({
    sections: {},
    focus: null
  });
  // Hold rendering until the sidecar read settles so the saved order/titles
  // appear on first paint (no source-order flash). didRead gates writes until
  // the read settles so the empty initial state can't clobber a slow read;
  // skipNextWrite suppresses the one echo-write that would otherwise follow
  // hydration.
  const [ready, setReady] = React.useState(false);
  const didRead = React.useRef(false);
  const skipNextWrite = React.useRef(false);
  React.useEffect(() => {
    let off = false;
    fetch('./' + DC_STATE_FILE).then(r => r.ok ? r.json() : null).then(saved => {
      if (off || !saved || !saved.sections) return;
      skipNextWrite.current = true;
      setState(s => ({
        ...s,
        sections: saved.sections
      }));
    }).catch(() => {}).finally(() => {
      didRead.current = true;
      if (!off) setReady(true);
    });
    const t = setTimeout(() => {
      if (!off) setReady(true);
    }, 150);
    return () => {
      off = true;
      clearTimeout(t);
    };
  }, []);
  React.useEffect(() => {
    if (!didRead.current) return;
    if (skipNextWrite.current) {
      skipNextWrite.current = false;
      return;
    }
    const t = setTimeout(() => {
      window.omelette?.writeFile(DC_STATE_FILE, JSON.stringify({
        sections: state.sections
      })).catch(() => {});
    }, 250);
    return () => clearTimeout(t);
  }, [state.sections]);

  // Build registries synchronously from children so FocusOverlay can read
  // them in the same render. Fragments are flattened; wrapping in other
  // elements still opts out of focus/reorder.
  const registry = {}; // slotId -> { sectionId, artboard }
  const sectionMeta = {}; // sectionId -> { title, subtitle, slotIds[] }
  const sectionOrder = [];
  dcFlatten(children).forEach(sec => {
    if (!sec || sec.type !== DCSection) return;
    const sid = sec.props.id ?? sec.props.title;
    if (!sid) return;
    sectionOrder.push(sid);
    const persisted = state.sections[sid] || {};
    const abs = [];
    dcFlatten(sec.props.children).forEach(ab => {
      if (!ab || ab.type !== DCArtboard) return;
      const aid = ab.props.id ?? ab.props.label;
      if (aid) abs.push([aid, ab]);
    });
    // hidden is scoped to one source revision — when the agent regenerates
    // (artboard-ID set changes), prior deletes don't apply to new content.
    const srcKey = abs.map(([k]) => k).join('\x1f');
    const hidden = persisted.srcKey === srcKey ? persisted.hidden || [] : [];
    const srcIds = [];
    abs.forEach(([aid, ab]) => {
      if (hidden.includes(aid)) return;
      registry[`${sid}/${aid}`] = {
        sectionId: sid,
        artboard: ab
      };
      srcIds.push(aid);
    });
    const kept = (persisted.order || []).filter(k => srcIds.includes(k));
    sectionMeta[sid] = {
      title: persisted.title ?? sec.props.title,
      subtitle: sec.props.subtitle,
      slotIds: [...kept, ...srcIds.filter(k => !kept.includes(k))]
    };
  });
  const api = React.useMemo(() => ({
    state,
    section: id => state.sections[id] || {},
    patchSection: (id, p) => setState(s => ({
      ...s,
      sections: {
        ...s.sections,
        [id]: {
          ...s.sections[id],
          ...(typeof p === 'function' ? p(s.sections[id] || {}) : p)
        }
      }
    })),
    setFocus: slotId => setState(s => ({
      ...s,
      focus: slotId
    }))
  }), [state]);

  // Esc exits focus; any outside pointerdown commits an in-progress rename.
  React.useEffect(() => {
    const onKey = e => {
      if (e.key === 'Escape') api.setFocus(null);
    };
    const onPd = e => {
      const ae = document.activeElement;
      if (ae && ae.isContentEditable && !ae.contains(e.target)) ae.blur();
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', onPd, true);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('pointerdown', onPd, true);
    };
  }, [api]);
  return /*#__PURE__*/React.createElement(DCCtx.Provider, {
    value: api
  }, /*#__PURE__*/React.createElement(DCViewport, {
    minScale: minScale,
    maxScale: maxScale,
    style: style
  }, ready && children), state.focus && registry[state.focus] && /*#__PURE__*/React.createElement(DCFocusOverlay, {
    entry: registry[state.focus],
    sectionMeta: sectionMeta,
    sectionOrder: sectionOrder
  }));
}

// ─────────────────────────────────────────────────────────────
// DCViewport — transform-based pan/zoom (internal)
//
// Input mapping (Figma-style):
//   • trackpad pinch  → zoom   (ctrlKey wheel; Safari gesture* events)
//   • trackpad scroll → pan    (two-finger)
//   • mouse wheel     → zoom   (notched; distinguished from trackpad scroll)
//   • middle-drag / primary-drag-on-bg → pan
//
// Transform state lives in a ref and is written straight to the DOM
// (translate3d + will-change) so wheel ticks don't go through React —
// keeps pans at 60fps on dense canvases.
// ─────────────────────────────────────────────────────────────
function DCViewport({
  children,
  minScale = 0.1,
  maxScale = 8,
  style = {}
}) {
  const vpRef = React.useRef(null);
  const worldRef = React.useRef(null);
  const tf = React.useRef({
    x: 0,
    y: 0,
    scale: 1
  });
  // Persist viewport across reloads so the user lands back where they were
  // after an agent edit or browser refresh. The sandbox origin is already
  // per-project; pathname keeps multiple canvas files in one project apart.
  const tfKey = 'dc-viewport:' + location.pathname;
  const saveT = React.useRef(0);
  const lastPostedScale = React.useRef();
  const apply = React.useCallback(() => {
    const {
      x,
      y,
      scale
    } = tf.current;
    const el = worldRef.current;
    if (!el) return;
    el.style.transform = `translate3d(${x}px, ${y}px, 0) scale(${scale})`;
    // Exposed for zoom-invariant chrome (labels, buttons, TweaksPanel).
    el.style.setProperty('--dc-inv-zoom', String(1 / scale));
    // Keep the host toolbar's % readout in sync with the canvas scale. Pan
    // ticks leave scale unchanged — skip the cross-frame post for those.
    if (lastPostedScale.current !== scale) {
      lastPostedScale.current = scale;
      window.parent.postMessage({
        type: '__dc_zoom',
        scale
      }, '*');
    }
    clearTimeout(saveT.current);
    saveT.current = setTimeout(() => {
      try {
        localStorage.setItem(tfKey, JSON.stringify(tf.current));
      } catch {}
    }, 200);
  }, [tfKey]);
  React.useLayoutEffect(() => {
    const flush = () => {
      clearTimeout(saveT.current);
      try {
        localStorage.setItem(tfKey, JSON.stringify(tf.current));
      } catch {}
    };
    try {
      const s = JSON.parse(localStorage.getItem(tfKey) || 'null');
      if (s && Number.isFinite(s.x) && Number.isFinite(s.y) && Number.isFinite(s.scale)) {
        tf.current = {
          x: s.x,
          y: s.y,
          scale: Math.min(maxScale, Math.max(minScale, s.scale))
        };
        apply();
      }
    } catch {}
    // Flush on pagehide and unmount so a reload within the 200ms debounce
    // window doesn't drop the last pan/zoom.
    window.addEventListener('pagehide', flush);
    return () => {
      window.removeEventListener('pagehide', flush);
      flush();
    };
  }, []);
  React.useEffect(() => {
    const vp = vpRef.current;
    if (!vp) return;
    const zoomAt = (cx, cy, factor) => {
      const r = vp.getBoundingClientRect();
      const px = cx - r.left,
        py = cy - r.top;
      const t = tf.current;
      const next = Math.min(maxScale, Math.max(minScale, t.scale * factor));
      const k = next / t.scale;
      // --dc-inv-zoom consumers (.dc-sectionhead's CSS zoom, each section's
      // marginBottom) reflow on every scale change, vertically shifting the
      // world layout — so a world point mathematically pinned under the cursor
      // drifts as you zoom (content creeps up on zoom-in, down on zoom-out).
      // Anchor the DOM element under the cursor instead: record its screen Y,
      // apply the transform + --dc-inv-zoom, then cancel whatever vertical
      // drift the reflow introduced so it stays put on screen.
      let marker = null,
        markerY0 = 0;
      if (k !== 1) {
        const hit = document.elementFromPoint(cx, cy);
        marker = hit && hit.closest ? hit.closest('[data-dc-slot],[data-dc-section]') : null;
        if (marker) markerY0 = marker.getBoundingClientRect().top;
      }
      // keep the world point under the cursor fixed
      t.x = px - (px - t.x) * k;
      t.y = py - (py - t.y) * k;
      t.scale = next;
      apply();
      if (marker) {
        // A pure zoom around (cx, cy) maps screen Y → cy + (Y - cy) * k. Any
        // departure after the --dc-inv-zoom reflow is the layout drift.
        const drift = marker.getBoundingClientRect().top - (cy + (markerY0 - cy) * k);
        if (Math.abs(drift) > 0.1) {
          t.y -= drift;
          apply();
        }
      }
    };

    // Mouse-wheel vs trackpad-scroll heuristic. A physical wheel sends
    // line-mode deltas (Firefox) or large integer pixel deltas with no X
    // component (Chrome/Safari, typically multiples of 100/120). Trackpad
    // two-finger scroll sends small/fractional pixel deltas, often with
    // non-zero deltaX. ctrlKey is set by the browser for trackpad pinch.
    const isMouseWheel = e => e.deltaMode !== 0 || e.deltaX === 0 && Number.isInteger(e.deltaY) && Math.abs(e.deltaY) >= 40;
    const onWheel = e => {
      e.preventDefault();
      if (isGesturing) return; // Safari: gesture* owns the pinch — discard concurrent wheels
      if ((e.ctrlKey || e.metaKey) && !isMouseWheel(e)) {
        // trackpad pinch, or ctrl/cmd + smooth-scroll mouse. Notched
        // wheels fall through to the fixed-step branch below.
        zoomAt(e.clientX, e.clientY, Math.exp(-e.deltaY * 0.01));
      } else if (isMouseWheel(e)) {
        // notched mouse wheel — fixed-ratio step per click
        zoomAt(e.clientX, e.clientY, Math.exp(-Math.sign(e.deltaY) * 0.18));
      } else {
        // trackpad two-finger scroll — pan
        tf.current.x -= e.deltaX;
        tf.current.y -= e.deltaY;
        apply();
      }
    };

    // Safari sends native gesture* events for trackpad pinch with a smooth
    // e.scale; preferring these over the ctrl+wheel fallback gives a much
    // better feel there. No-ops on other browsers. Safari also fires
    // ctrlKey wheel events during the same pinch — isGesturing makes
    // onWheel drop those entirely so they neither zoom nor pan.
    let gsBase = 1;
    let isGesturing = false;
    const onGestureStart = e => {
      e.preventDefault();
      isGesturing = true;
      gsBase = tf.current.scale;
    };
    const onGestureChange = e => {
      e.preventDefault();
      zoomAt(e.clientX, e.clientY, gsBase * e.scale / tf.current.scale);
    };
    const onGestureEnd = e => {
      e.preventDefault();
      isGesturing = false;
    };

    // Drag-pan: middle button anywhere, or primary button on canvas
    // background (anything that isn't an artboard or an inline editor).
    let drag = null;
    const onPointerDown = e => {
      const onBg = !e.target.closest('[data-dc-slot], .dc-editable');
      if (!(e.button === 1 || e.button === 0 && onBg)) return;
      e.preventDefault();
      vp.setPointerCapture(e.pointerId);
      drag = {
        id: e.pointerId,
        lx: e.clientX,
        ly: e.clientY
      };
      vp.style.cursor = 'grabbing';
    };
    const onPointerMove = e => {
      if (!drag || e.pointerId !== drag.id) return;
      tf.current.x += e.clientX - drag.lx;
      tf.current.y += e.clientY - drag.ly;
      drag.lx = e.clientX;
      drag.ly = e.clientY;
      apply();
    };
    const onPointerUp = e => {
      if (!drag || e.pointerId !== drag.id) return;
      vp.releasePointerCapture(e.pointerId);
      drag = null;
      vp.style.cursor = '';
    };

    // Host-driven zoom (toolbar % menu). Zooms around viewport centre so the
    // visible midpoint stays fixed — matching the host's iframe-zoom feel.
    const onHostMsg = e => {
      const d = e.data;
      if (d && d.type === '__dc_set_zoom' && typeof d.scale === 'number') {
        const r = vp.getBoundingClientRect();
        zoomAt(r.left + r.width / 2, r.top + r.height / 2, d.scale / tf.current.scale);
      } else if (d && d.type === '__dc_probe') {
        // Host's [readyGen] reset asks whether a canvas is present; it
        // fires on the iframe's native 'load', which for canvases with
        // images/fonts is after our mount-time announce, so re-announce.
        // Clear the pan-tick guard so apply() re-posts the current scale
        // even if it's unchanged — the host just reset dcScale to 1.
        window.parent.postMessage({
          type: '__dc_present'
        }, '*');
        lastPostedScale.current = undefined;
        apply();
      }
    };
    window.addEventListener('message', onHostMsg);
    // Announce canvas mode so the host toolbar proxies its % control here
    // instead of scaling the iframe element (which would just shrink the
    // viewport window of an infinite canvas). The apply() that follows emits
    // the initial __dc_zoom so the toolbar % is correct before first pinch.
    // lastPostedScale reset mirrors the __dc_probe handler: the layout
    // effect's restore-path apply() may already have posted the restored
    // scale (before __dc_present), so clear the guard to re-post it in order.
    window.parent.postMessage({
      type: '__dc_present'
    }, '*');
    lastPostedScale.current = undefined;
    apply();
    vp.addEventListener('wheel', onWheel, {
      passive: false
    });
    vp.addEventListener('gesturestart', onGestureStart, {
      passive: false
    });
    vp.addEventListener('gesturechange', onGestureChange, {
      passive: false
    });
    vp.addEventListener('gestureend', onGestureEnd, {
      passive: false
    });
    vp.addEventListener('pointerdown', onPointerDown);
    vp.addEventListener('pointermove', onPointerMove);
    vp.addEventListener('pointerup', onPointerUp);
    vp.addEventListener('pointercancel', onPointerUp);
    return () => {
      window.removeEventListener('message', onHostMsg);
      vp.removeEventListener('wheel', onWheel);
      vp.removeEventListener('gesturestart', onGestureStart);
      vp.removeEventListener('gesturechange', onGestureChange);
      vp.removeEventListener('gestureend', onGestureEnd);
      vp.removeEventListener('pointerdown', onPointerDown);
      vp.removeEventListener('pointermove', onPointerMove);
      vp.removeEventListener('pointerup', onPointerUp);
      vp.removeEventListener('pointercancel', onPointerUp);
    };
  }, [apply, minScale, maxScale]);
  const gridSvg = `url("data:image/svg+xml,%3Csvg width='120' height='120' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M120 0H0v120' fill='none' stroke='${encodeURIComponent(DC.grid)}' stroke-width='1'/%3E%3C/svg%3E")`;
  return /*#__PURE__*/React.createElement("div", {
    ref: vpRef,
    className: "design-canvas",
    style: {
      height: '100vh',
      width: '100vw',
      background: DC.bg,
      overflow: 'hidden',
      overscrollBehavior: 'none',
      touchAction: 'none',
      position: 'relative',
      fontFamily: DC.font,
      boxSizing: 'border-box',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    ref: worldRef,
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      transformOrigin: '0 0',
      willChange: 'transform',
      width: 'max-content',
      minWidth: '100%',
      minHeight: '100%',
      padding: '60px 0 80px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: -6000,
      backgroundImage: gridSvg,
      backgroundSize: '120px 120px',
      pointerEvents: 'none',
      zIndex: -1
    }
  }), children));
}

// ─────────────────────────────────────────────────────────────
// DCSection — editable title + h-row of artboards in persisted order
// ─────────────────────────────────────────────────────────────
function DCSection({
  id,
  title,
  subtitle,
  children,
  gap = 48
}) {
  const ctx = React.useContext(DCCtx);
  const sid = id ?? title;
  const all = React.Children.toArray(dcFlatten(children));
  const artboards = all.filter(c => c && c.type === DCArtboard);
  const rest = all.filter(c => !(c && c.type === DCArtboard));
  const sec = ctx && sid && ctx.section(sid) || {};
  // Must match DesignCanvas's srcKey computation exactly (it filters falsy
  // IDs), or onDelete persists a srcKey that DesignCanvas never recognizes.
  const allIds = artboards.map(a => a.props.id ?? a.props.label).filter(Boolean);
  const srcKey = allIds.join('\x1f');
  const hidden = sec.srcKey === srcKey ? sec.hidden || [] : [];
  const srcOrder = allIds.filter(k => !hidden.includes(k));
  const order = React.useMemo(() => {
    const kept = (sec.order || []).filter(k => srcOrder.includes(k));
    return [...kept, ...srcOrder.filter(k => !kept.includes(k))];
  }, [sec.order, srcOrder.join('|')]);
  const byId = Object.fromEntries(artboards.map(a => [a.props.id ?? a.props.label, a]));

  // marginBottom counter-scales so the on-screen gap between sections stays
  // constant — otherwise at low zoom the (world-space) gap collapses while
  // the screen-constant sectionhead below it doesn't, and the title reads as
  // belonging to the section above. paddingBottom below is just enough for
  // the 24px artboard-header (abs-positioned above each card) plus ~8px, so
  // the title sits tight against its own row at every zoom.
  return /*#__PURE__*/React.createElement("div", {
    "data-dc-section": sid,
    style: {
      marginBottom: 'calc(80px * var(--dc-inv-zoom, 1))',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 60px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "dc-sectionhead",
    style: {
      paddingBottom: 36
    }
  }, /*#__PURE__*/React.createElement(DCEditable, {
    tag: "div",
    value: sec.title ?? title,
    onChange: v => ctx && sid && ctx.patchSection(sid, {
      title: v
    }),
    style: {
      fontSize: 28,
      fontWeight: 600,
      color: DC.title,
      letterSpacing: -0.4,
      marginBottom: 6,
      display: 'inline-block'
    }
  }), subtitle && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      color: DC.subtitle
    }
  }, subtitle))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap,
      padding: '0 60px',
      alignItems: 'flex-start',
      width: 'max-content'
    }
  }, order.map(k => /*#__PURE__*/React.createElement(DCArtboardFrame, {
    key: k,
    sectionId: sid,
    artboard: byId[k],
    order: order,
    label: (sec.labels || {})[k] ?? byId[k].props.label,
    onRename: v => ctx && ctx.patchSection(sid, x => ({
      labels: {
        ...x.labels,
        [k]: v
      }
    })),
    onReorder: next => ctx && ctx.patchSection(sid, {
      order: next
    }),
    onDelete: () => ctx && ctx.patchSection(sid, x => ({
      hidden: [...(x.srcKey === srcKey ? x.hidden || [] : []), k],
      srcKey
    })),
    onFocus: () => ctx && ctx.setFocus(`${sid}/${k}`)
  }))), rest);
}

// DCArtboard — marker; rendered by DCArtboardFrame via DCSection.
function DCArtboard() {
  return null;
}

// Per-artboard export (kind: 'png' | 'html'). Both paths share the same
// self-contained clone: computed styles baked in, @font-face / <img> /
// inline-style background-image urls inlined as data URIs. PNG wraps the
// clone in foreignObject→canvas at 3× the artboard's natural width×height
// (same pipeline the host uses for page captures); HTML wraps it in a
// minimal standalone document. Both are independent of viewport zoom.
async function dcExport(node, w, h, name, kind) {
  try {
    await document.fonts.ready;
  } catch {}
  const toDataURL = url => fetch(url).then(r => r.blob()).then(b => new Promise(res => {
    const fr = new FileReader();
    fr.onload = () => res(fr.result);
    fr.onerror = () => res(url);
    fr.readAsDataURL(b);
  })).catch(() => url);

  // Collect @font-face rules. ss.cssRules throws SecurityError on
  // cross-origin sheets (e.g. fonts.googleapis.com) — in that case fetch
  // the CSS text directly (those endpoints send ACAO:*) and regex-extract
  // the blocks. @import and @media/@supports are walked so nested
  // @font-face rules aren't missed.
  const fontRules = [],
    pending = [],
    seen = new Set();
  const scrapeCss = href => {
    if (seen.has(href)) return;
    seen.add(href);
    pending.push(fetch(href).then(r => r.text()).then(css => {
      for (const m of css.match(/@font-face\s*{[^}]*}/g) || []) fontRules.push({
        css: m,
        base: href
      });
      for (const m of css.matchAll(/@import\s+(?:url\()?['"]?([^'")\s;]+)/g)) scrapeCss(new URL(m[1], href).href);
    }).catch(() => {}));
  };
  const walk = (rules, base) => {
    for (const r of rules) {
      if (r.type === CSSRule.FONT_FACE_RULE) fontRules.push({
        css: r.cssText,
        base
      });else if (r.type === CSSRule.IMPORT_RULE && r.styleSheet) {
        const ibase = r.styleSheet.href || base;
        try {
          walk(r.styleSheet.cssRules, ibase);
        } catch {
          scrapeCss(ibase);
        }
      } else if (r.cssRules) walk(r.cssRules, base);
    }
  };
  for (const ss of document.styleSheets) {
    const base = ss.href || location.href;
    try {
      walk(ss.cssRules, base);
    } catch {
      if (ss.href) scrapeCss(ss.href);
    }
  }
  while (pending.length) await pending.shift();
  const fontCss = (await Promise.all(fontRules.map(async rule => {
    let out = rule.css,
      m;
    const re = /url\((['"]?)([^'")]+)\1\)/g;
    while (m = re.exec(rule.css)) {
      if (m[2].indexOf('data:') === 0) continue;
      let abs;
      try {
        abs = new URL(m[2], rule.base).href;
      } catch {
        continue;
      }
      out = out.split(m[0]).join('url("' + (await toDataURL(abs)) + '")');
    }
    return out;
  }))).join('\n');
  const cloneStyled = src => {
    if (src.nodeType === 8 || src.nodeType === 1 && src.tagName === 'SCRIPT') return document.createTextNode('');
    const dst = src.cloneNode(false);
    if (src.nodeType === 1) {
      const cs = getComputedStyle(src);
      let txt = '';
      for (let i = 0; i < cs.length; i++) txt += cs[i] + ':' + cs.getPropertyValue(cs[i]) + ';';
      dst.setAttribute('style', txt + 'animation:none;transition:none;');
      if (src.tagName === 'CANVAS') try {
        const im = document.createElement('img');
        im.src = src.toDataURL();
        im.setAttribute('style', txt);
        return im;
      } catch {}
    }
    for (let c = src.firstChild; c; c = c.nextSibling) dst.appendChild(cloneStyled(c));
    return dst;
  };
  const clone = cloneStyled(node);
  clone.setAttribute('xmlns', 'http://www.w3.org/1999/xhtml');
  // Drop the card's own shadow/radius so the export is a flush w×h rect;
  // the artboard's own background (if any) is already in the computed style.
  clone.style.boxShadow = 'none';
  clone.style.borderRadius = '0';
  const jobs = [];
  clone.querySelectorAll('img').forEach(el => {
    const s = el.getAttribute('src');
    if (s && s.indexOf('data:') !== 0) jobs.push(toDataURL(el.src).then(d => el.setAttribute('src', d)));
  });
  [clone, ...clone.querySelectorAll('*')].forEach(el => {
    const bg = el.style.backgroundImage;
    if (!bg) return;
    let m;
    const re = /url\(["']?([^"')]+)["']?\)/g;
    while (m = re.exec(bg)) {
      const tok = m[0],
        url = m[1];
      if (url.indexOf('data:') === 0) continue;
      jobs.push(toDataURL(url).then(d => {
        el.style.backgroundImage = el.style.backgroundImage.split(tok).join('url("' + d + '")');
      }));
    }
  });
  await Promise.all(jobs);
  const xml = new XMLSerializer().serializeToString(clone);
  const save = (blob, ext) => {
    if (!blob) return;
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = name + '.' + ext;
    a.click();
    setTimeout(() => URL.revokeObjectURL(a.href), 1000);
  };
  if (kind === 'html') {
    const html = '<!doctype html><html><head><meta charset="utf-8"><title>' + name + '</title>' + (fontCss ? '<style>' + fontCss + '</style>' : '') + '</head><body style="margin:0">' + xml + '</body></html>';
    return save(new Blob([html], {
      type: 'text/html'
    }), 'html');
  }

  // PNG: the SVG's own width/height must be the output resolution — an
  // <img>-loaded SVG rasterizes at its intrinsic size, so sizing it at 1×
  // and ctx.scale()-ing up would just upscale a 1× bitmap. viewBox maps the
  // w×h foreignObject onto the px·w × px·h SVG canvas so the browser renders
  // the HTML at full resolution.
  const px = 3;
  const svg = '<svg xmlns="http://www.w3.org/2000/svg" width="' + w * px + '" height="' + h * px + '" viewBox="0 0 ' + w + ' ' + h + '"><foreignObject width="' + w + '" height="' + h + '">' + (fontCss ? '<style><![CDATA[' + fontCss + ']]></style>' : '') + xml + '</foreignObject></svg>';
  const img = new Image();
  await new Promise((res, rej) => {
    img.onload = res;
    img.onerror = () => rej(new Error('svg load failed'));
    img.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
  });
  const cv = document.createElement('canvas');
  cv.width = w * px;
  cv.height = h * px;
  cv.getContext('2d').drawImage(img, 0, 0);
  cv.toBlob(blob => save(blob, 'png'), 'image/png');
}
function DCArtboardFrame({
  sectionId,
  artboard,
  label,
  order,
  onRename,
  onReorder,
  onFocus,
  onDelete
}) {
  const {
    id: rawId,
    label: rawLabel,
    width = 260,
    height = 480,
    children,
    style = {}
  } = artboard.props;
  const id = rawId ?? rawLabel;
  const ref = React.useRef(null);
  const cardRef = React.useRef(null);
  const menuRef = React.useRef(null);
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [confirming, setConfirming] = React.useState(false);

  // ⋯ menu: close on any outside pointerdown. Two-click delete lives inside
  // the menu — first click arms the row, second commits; closing disarms.
  React.useEffect(() => {
    if (!menuOpen) {
      setConfirming(false);
      return;
    }
    const off = e => {
      if (!menuRef.current || !menuRef.current.contains(e.target)) setMenuOpen(false);
    };
    document.addEventListener('pointerdown', off, true);
    return () => document.removeEventListener('pointerdown', off, true);
  }, [menuOpen]);
  const doExport = kind => {
    setMenuOpen(false);
    if (!cardRef.current) return;
    const name = String(label || id || 'artboard').replace(/[^\w\s.-]+/g, '_');
    dcExport(cardRef.current, width, height, name, kind).catch(e => console.error('[design-canvas] export failed:', e));
  };

  // Live drag-reorder: dragged card sticks to cursor; siblings slide into
  // their would-be slots in real time via transforms. DOM order only
  // changes on drop.
  const onGripDown = e => {
    e.preventDefault();
    e.stopPropagation();
    const me = ref.current;
    // translateX is applied in local (pre-scale) space but pointer deltas and
    // getBoundingClientRect().left are screen-space — divide by the viewport's
    // current scale so the dragged card tracks the cursor at any zoom level.
    const scale = me.getBoundingClientRect().width / me.offsetWidth || 1;
    const peers = Array.from(document.querySelectorAll(`[data-dc-section="${sectionId}"] [data-dc-slot]`));
    const homes = peers.map(el => ({
      el,
      id: el.dataset.dcSlot,
      x: el.getBoundingClientRect().left
    }));
    const slotXs = homes.map(h => h.x);
    const startIdx = order.indexOf(id);
    const startX = e.clientX;
    let liveOrder = order.slice();
    me.classList.add('dc-dragging');
    const layout = () => {
      for (const h of homes) {
        if (h.id === id) continue;
        const slot = liveOrder.indexOf(h.id);
        h.el.style.transform = `translateX(${(slotXs[slot] - h.x) / scale}px)`;
      }
    };
    const move = ev => {
      const dx = ev.clientX - startX;
      me.style.transform = `translateX(${dx / scale}px)`;
      const cur = homes[startIdx].x + dx;
      let nearest = 0,
        best = Infinity;
      for (let i = 0; i < slotXs.length; i++) {
        const d = Math.abs(slotXs[i] - cur);
        if (d < best) {
          best = d;
          nearest = i;
        }
      }
      if (liveOrder.indexOf(id) !== nearest) {
        liveOrder = order.filter(k => k !== id);
        liveOrder.splice(nearest, 0, id);
        layout();
      }
    };
    const up = () => {
      document.removeEventListener('pointermove', move);
      document.removeEventListener('pointerup', up);
      const finalSlot = liveOrder.indexOf(id);
      me.classList.remove('dc-dragging');
      me.style.transform = `translateX(${(slotXs[finalSlot] - homes[startIdx].x) / scale}px)`;
      // After the settle transition, kill transitions + clear transforms +
      // commit the reorder in the same frame so there's no visual snap-back.
      setTimeout(() => {
        for (const h of homes) {
          h.el.style.transition = 'none';
          h.el.style.transform = '';
        }
        if (liveOrder.join('|') !== order.join('|')) onReorder(liveOrder);
        requestAnimationFrame(() => requestAnimationFrame(() => {
          for (const h of homes) h.el.style.transition = '';
        }));
      }, 180);
    };
    document.addEventListener('pointermove', move);
    document.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    "data-dc-slot": id,
    style: {
      position: 'relative',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "dc-header",
    "data-omelette-chrome": "",
    style: {
      color: DC.label
    },
    onPointerDown: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("div", {
    className: "dc-labelrow"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dc-grip",
    onPointerDown: onGripDown,
    title: "Drag to reorder"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "9",
    height: "13",
    viewBox: "0 0 9 13",
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "2",
    cy: "2",
    r: "1.1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "7",
    cy: "2",
    r: "1.1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "2",
    cy: "6.5",
    r: "1.1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "7",
    cy: "6.5",
    r: "1.1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "2",
    cy: "11",
    r: "1.1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "7",
    cy: "11",
    r: "1.1"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "dc-labeltext",
    onClick: onFocus,
    title: "Click to focus"
  }, /*#__PURE__*/React.createElement(DCEditable, {
    value: label,
    onChange: onRename,
    onClick: e => e.stopPropagation(),
    style: {
      fontSize: 15,
      fontWeight: 500,
      color: DC.label,
      lineHeight: 1
    }
  }))), /*#__PURE__*/React.createElement("div", {
    className: "dc-btns"
  }, /*#__PURE__*/React.createElement("div", {
    ref: menuRef,
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "dc-kebab",
    title: "More",
    onClick: () => setMenuOpen(o => !o)
  }, /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 12 12",
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "2.5",
    cy: "6",
    r: "1.1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "6",
    cy: "6",
    r: "1.1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "9.5",
    cy: "6",
    r: "1.1"
  }))), menuOpen && /*#__PURE__*/React.createElement("div", {
    className: "dc-menu",
    onPointerDown: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => doExport('png')
  }, "Download PNG"), /*#__PURE__*/React.createElement("button", {
    onClick: () => doExport('html')
  }, "Download HTML"), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement("button", {
    className: "dc-danger",
    onClick: () => {
      if (confirming) {
        setMenuOpen(false);
        onDelete();
      } else setConfirming(true);
    }
  }, confirming ? 'Click again to delete' : 'Delete'))), /*#__PURE__*/React.createElement("button", {
    className: "dc-expand",
    onClick: onFocus,
    title: "Focus"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 12 12",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.6",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M7 1h4v4M5 11H1V7M11 1L7.5 4.5M1 11l3.5-3.5"
  }))))), /*#__PURE__*/React.createElement("div", {
    ref: cardRef,
    className: "dc-card",
    style: {
      borderRadius: 2,
      boxShadow: '0 1px 3px rgba(0,0,0,.08),0 4px 16px rgba(0,0,0,.06)',
      overflow: 'hidden',
      width,
      height,
      background: '#fff',
      ...style
    }
  }, children || /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#bbb',
      fontSize: 13,
      fontFamily: DC.font
    }
  }, id)));
}

// Inline rename — commits on blur or Enter.
function DCEditable({
  value,
  onChange,
  style,
  tag = 'span',
  onClick
}) {
  const T = tag;
  return /*#__PURE__*/React.createElement(T, {
    className: "dc-editable",
    contentEditable: true,
    suppressContentEditableWarning: true,
    onClick: onClick,
    onPointerDown: e => e.stopPropagation(),
    onBlur: e => onChange && onChange(e.currentTarget.textContent),
    onKeyDown: e => {
      if (e.key === 'Enter') {
        e.preventDefault();
        e.currentTarget.blur();
      }
    },
    style: style
  }, value);
}

// ─────────────────────────────────────────────────────────────
// Focus mode — overlay one artboard; ←/→ within section, ↑/↓ across
// sections, Esc or backdrop click to exit.
// ─────────────────────────────────────────────────────────────
function DCFocusOverlay({
  entry,
  sectionMeta,
  sectionOrder
}) {
  const ctx = React.useContext(DCCtx);
  const {
    sectionId,
    artboard
  } = entry;
  const sec = ctx.section(sectionId);
  const meta = sectionMeta[sectionId];
  const peers = meta.slotIds;
  const aid = artboard.props.id ?? artboard.props.label;
  const idx = peers.indexOf(aid);
  const secIdx = sectionOrder.indexOf(sectionId);
  const go = d => {
    const n = peers[(idx + d + peers.length) % peers.length];
    if (n) ctx.setFocus(`${sectionId}/${n}`);
  };
  const goSection = d => {
    // Sections whose artboards are all deleted have slotIds:[] — step past
    // them to the next non-empty section so ↑/↓ doesn't dead-end.
    const n = sectionOrder.length;
    for (let i = 1; i < n; i++) {
      const ns = sectionOrder[((secIdx + d * i) % n + n) % n];
      const first = sectionMeta[ns] && sectionMeta[ns].slotIds[0];
      if (first) {
        ctx.setFocus(`${ns}/${first}`);
        return;
      }
    }
  };
  React.useEffect(() => {
    const k = e => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        go(-1);
      }
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        go(1);
      }
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        goSection(-1);
      }
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        goSection(1);
      }
    };
    document.addEventListener('keydown', k);
    return () => document.removeEventListener('keydown', k);
  });
  const {
    width = 260,
    height = 480,
    children
  } = artboard.props;
  const [vp, setVp] = React.useState({
    w: window.innerWidth,
    h: window.innerHeight
  });
  React.useEffect(() => {
    const r = () => setVp({
      w: window.innerWidth,
      h: window.innerHeight
    });
    window.addEventListener('resize', r);
    return () => window.removeEventListener('resize', r);
  }, []);
  const scale = Math.max(0.1, Math.min((vp.w - 200) / width, (vp.h - 260) / height, 2));
  const [ddOpen, setDd] = React.useState(false);
  const Arrow = ({
    dir,
    onClick
  }) => /*#__PURE__*/React.createElement("button", {
    onClick: e => {
      e.stopPropagation();
      onClick();
    },
    style: {
      position: 'absolute',
      top: '50%',
      [dir]: 28,
      transform: 'translateY(-50%)',
      border: 'none',
      background: 'rgba(255,255,255,.08)',
      color: 'rgba(255,255,255,.9)',
      width: 44,
      height: 44,
      borderRadius: 22,
      fontSize: 18,
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'background .15s'
    },
    onMouseEnter: e => e.currentTarget.style.background = 'rgba(255,255,255,.18)',
    onMouseLeave: e => e.currentTarget.style.background = 'rgba(255,255,255,.08)'
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 18 18",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: dir === 'left' ? 'M11 3L5 9l6 6' : 'M7 3l6 6-6 6'
  })));

  // Portal to body so position:fixed is the real viewport regardless of any
  // transform on DesignCanvas's ancestors (including the canvas zoom itself).
  return ReactDOM.createPortal(/*#__PURE__*/React.createElement("div", {
    onClick: () => ctx.setFocus(null),
    onWheel: e => e.preventDefault(),
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 100,
      background: 'rgba(24,20,16,.6)',
      backdropFilter: 'blur(14px)',
      fontFamily: DC.font,
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: 72,
      display: 'flex',
      alignItems: 'flex-start',
      padding: '16px 20px 0',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setDd(o => !o),
    style: {
      border: 'none',
      background: 'transparent',
      color: '#fff',
      cursor: 'pointer',
      padding: '6px 8px',
      borderRadius: 6,
      textAlign: 'left',
      fontFamily: 'inherit'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 18,
      fontWeight: 600,
      letterSpacing: -0.3
    }
  }, meta.title), /*#__PURE__*/React.createElement("svg", {
    width: "11",
    height: "11",
    viewBox: "0 0 11 11",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    style: {
      opacity: .7
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2 4l3.5 3.5L9 4"
  }))), meta.subtitle && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 13,
      opacity: .6,
      fontWeight: 400,
      marginTop: 2
    }
  }, meta.subtitle)), ddOpen && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '100%',
      left: 0,
      marginTop: 4,
      background: '#2a251f',
      borderRadius: 8,
      boxShadow: '0 8px 32px rgba(0,0,0,.4)',
      padding: 4,
      minWidth: 200,
      zIndex: 10
    }
  }, sectionOrder.filter(sid => sectionMeta[sid].slotIds.length).map(sid => /*#__PURE__*/React.createElement("button", {
    key: sid,
    onClick: () => {
      setDd(false);
      const f = sectionMeta[sid].slotIds[0];
      if (f) ctx.setFocus(`${sid}/${f}`);
    },
    style: {
      display: 'block',
      width: '100%',
      textAlign: 'left',
      border: 'none',
      cursor: 'pointer',
      background: sid === sectionId ? 'rgba(255,255,255,.1)' : 'transparent',
      color: '#fff',
      padding: '8px 12px',
      borderRadius: 5,
      fontSize: 14,
      fontWeight: sid === sectionId ? 600 : 400,
      fontFamily: 'inherit'
    }
  }, sectionMeta[sid].title)))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: () => ctx.setFocus(null),
    onMouseEnter: e => e.currentTarget.style.background = 'rgba(255,255,255,.12)',
    onMouseLeave: e => e.currentTarget.style.background = 'transparent',
    style: {
      border: 'none',
      background: 'transparent',
      color: 'rgba(255,255,255,.7)',
      width: 32,
      height: 32,
      borderRadius: 16,
      fontSize: 20,
      cursor: 'pointer',
      lineHeight: 1,
      transition: 'background .12s'
    }
  }, "\xD7")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 64,
      bottom: 56,
      left: 100,
      right: 100,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      width: width * scale,
      height: height * scale,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width,
      height,
      transform: `scale(${scale})`,
      transformOrigin: 'top left',
      background: '#fff',
      borderRadius: 2,
      overflow: 'hidden',
      boxShadow: '0 20px 80px rgba(0,0,0,.4)'
    }
  }, children || /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#bbb'
    }
  }, aid))), /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      fontSize: 14,
      fontWeight: 500,
      opacity: .85,
      textAlign: 'center'
    }
  }, (sec.labels || {})[aid] ?? artboard.props.label, /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: .5,
      marginLeft: 10,
      fontVariantNumeric: 'tabular-nums'
    }
  }, idx + 1, " / ", peers.length))), /*#__PURE__*/React.createElement(Arrow, {
    dir: "left",
    onClick: () => go(-1)
  }), /*#__PURE__*/React.createElement(Arrow, {
    dir: "right",
    onClick: () => go(1)
  }), /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      position: 'absolute',
      bottom: 20,
      left: '50%',
      transform: 'translateX(-50%)',
      display: 'flex',
      gap: 8
    }
  }, peers.map((p, i) => /*#__PURE__*/React.createElement("button", {
    key: p,
    onClick: () => ctx.setFocus(`${sectionId}/${p}`),
    style: {
      border: 'none',
      padding: 0,
      cursor: 'pointer',
      width: 6,
      height: 6,
      borderRadius: 3,
      background: i === idx ? '#fff' : 'rgba(255,255,255,.3)'
    }
  })))), document.body);
}

// ─────────────────────────────────────────────────────────────
// Post-it — absolute-positioned sticky note
// ─────────────────────────────────────────────────────────────
function DCPostIt({
  children,
  top,
  left,
  right,
  bottom,
  rotate = -2,
  width = 180
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top,
      left,
      right,
      bottom,
      width,
      background: DC.postitBg,
      padding: '14px 16px',
      fontFamily: '"Comic Sans MS", "Marker Felt", "Segoe Print", cursive',
      fontSize: 14,
      lineHeight: 1.4,
      color: DC.postitText,
      boxShadow: '0 2px 8px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.08)',
      transform: `rotate(${rotate}deg)`,
      zIndex: 5
    }
  }, children);
}
Object.assign(window, {
  DesignCanvas,
  DCSection,
  DCArtboard,
  DCPostIt
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "explorations/design-canvas.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/DetailScreen.jsx
try { (() => {
// おとなりピアノ — Studio detail page
function DetailScreen({
  studioId,
  onBack,
  onSignup
}) {
  const {
    Tabs,
    Button,
    Badge,
    RatingStars,
    Avatar,
    IconButton,
    Card
  } = window.PianoSchool_f8945d;
  const data = window.OP_DATA;
  const s = data.studios.find(x => x.id === studioId) || data.studios[0];
  const reviews = data.reviews.filter(r => r.studio === s.id);
  const [tab, setTab] = React.useState("教室紹介");
  const [fav, setFav] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "var(--space-6) var(--space-6) 0"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    style: {
      background: "none",
      border: "none",
      color: "var(--clay-600)",
      cursor: "pointer",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-sm)",
      marginBottom: "var(--space-4)"
    }
  }, "\u2190 \u691C\u7D22\u7D50\u679C\u3078\u623B\u308B"), /*#__PURE__*/React.createElement("div", {
    className: "op-gallery-grid",
    style: {
      display: "grid",
      gridTemplateColumns: "2fr 1fr",
      gridTemplateRows: "1fr 1fr",
      gap: "var(--space-3)",
      height: 340
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "op-photo-ph",
    style: {
      gridRow: "1 / 3",
      borderRadius: "var(--radius-lg)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "op-photo-ph",
    style: {
      borderRadius: "var(--radius-lg)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "op-photo-ph",
    style: {
      borderRadius: "var(--radius-lg)"
    }
  }))), /*#__PURE__*/React.createElement("div", {
    className: "op-detail-grid",
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "var(--space-8) var(--space-6) 0",
      display: "grid",
      gridTemplateColumns: "1fr 340px",
      gap: "var(--space-10)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-2)",
      marginBottom: "var(--space-3)"
    }
  }, s.tags.map(t => /*#__PURE__*/React.createElement(Badge, {
    key: t,
    tone: "primary"
  }, t))), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: "var(--text-3xl)",
      marginBottom: "var(--space-2)"
    }
  }, s.name), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-4)",
      marginBottom: "var(--space-2)"
    }
  }, /*#__PURE__*/React.createElement(RatingStars, {
    value: s.rating,
    count: s.reviews
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--ink-500)",
      fontSize: "var(--text-sm)"
    }
  }, "\uD83D\uDCCD ", s.area)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    tabs: ["教室紹介", "料金・コース", "口コミ", "アクセス"],
    value: tab,
    onChange: setTab
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: "var(--space-6)"
    }
  }, tab === "教室紹介" && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--text-md)",
      lineHeight: 1.9,
      color: "var(--ink-900)"
    }
  }, s.lead), /*#__PURE__*/React.createElement(Card, {
    style: {
      marginTop: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-4)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: s.teacher,
    size: 64
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-sm)",
      color: "var(--ink-500)"
    }
  }, "\u8B1B\u5E2B"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "var(--text-lg)"
    }
  }, s.teacher))), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: "var(--space-4)",
      fontSize: "var(--text-base)",
      lineHeight: 1.9,
      color: "var(--ink-700)"
    }
  }, s.teacherBio), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-4)",
      fontSize: "var(--text-sm)",
      color: "var(--ink-500)"
    }
  }, "\u958B\u8B1B\uFF1A", s.established))), tab === "料金・コース" && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-3)"
    }
  }, s.lessons.map(l => /*#__PURE__*/React.createElement("div", {
    key: l.name,
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "var(--space-5)",
      background: "var(--ivory)",
      border: "1px solid var(--hairline)",
      borderRadius: "var(--radius-lg)"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: "var(--text-base)",
      color: "var(--ink-900)"
    }
  }, l.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-sm)",
      color: "var(--ink-500)",
      marginTop: 2
    }
  }, l.note)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "var(--text-lg)",
      color: "var(--clay-600)"
    }
  }, l.price)))), tab === "口コミ" && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-4)"
    }
  }, reviews.map((r, i) => /*#__PURE__*/React.createElement(Card, {
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-3)",
      marginBottom: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: r.name,
    size: 44
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      color: "var(--ink-900)"
    }
  }, r.name, " \u3055\u3093"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-xs)",
      color: "var(--ink-500)"
    }
  }, r.role, " \u30FB ", r.date)), /*#__PURE__*/React.createElement(RatingStars, {
    value: r.rating,
    showValue: false,
    size: 15
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--text-base)",
      lineHeight: 1.9,
      color: "var(--ink-700)"
    }
  }, r.body)))), tab === "アクセス" && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "op-photo-ph",
    style: {
      height: 240,
      borderRadius: "var(--radius-lg)",
      marginBottom: "var(--space-4)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-base)",
      color: "var(--ink-700)",
      lineHeight: 1.9
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", null, "\u6240\u5728\u5730"), "\u3000", s.area), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement("b", null, "\u30EC\u30C3\u30B9\u30F3\u6642\u9593"), "\u3000\u5E73\u65E5 10:00\u301C21:00 \uFF0F \u571F 9:00\u301C18:00"))))), /*#__PURE__*/React.createElement("aside", {
    className: "op-detail-aside",
    style: {
      position: "sticky",
      top: 88
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--ivory)",
      border: "1px solid var(--hairline)",
      borderRadius: "var(--radius-xl)",
      padding: "var(--space-6)",
      boxShadow: "var(--shadow-md)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: 4,
      marginBottom: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-sm)",
      color: "var(--ink-500)"
    }
  }, "\u6708\u8B1D"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 900,
      fontSize: "var(--text-3xl)",
      color: "var(--clay-600)"
    }
  }, s.price), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-sm)",
      color: "var(--ink-500)"
    }
  }, "\u301C")), /*#__PURE__*/React.createElement(Button, {
    block: true,
    size: "lg",
    variant: "primary",
    onClick: onSignup
  }, "\u4F53\u9A13\u30EC\u30C3\u30B9\u30F3\u3092\u7533\u3057\u8FBC\u3080"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-3)",
      display: "flex",
      gap: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    block: true,
    variant: "secondary",
    iconLeft: /*#__PURE__*/React.createElement("span", null, fav ? "♥" : "♡"),
    onClick: () => setFav(!fav)
  }, "\u4FDD\u5B58"), /*#__PURE__*/React.createElement(Button, {
    block: true,
    variant: "secondary",
    iconLeft: /*#__PURE__*/React.createElement("span", null, "\u2197")
  }, "\u5171\u6709")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-5)",
      paddingTop: "var(--space-5)",
      borderTop: "1px solid var(--hairline)",
      fontSize: "var(--text-sm)",
      color: "var(--ink-500)",
      lineHeight: 1.8
    }
  }, "\u4F53\u9A13\u30EC\u30C3\u30B9\u30F3\u306F\u7121\u6599\u3067\u3059\u3002\u304A\u7533\u3057\u8FBC\u307F\u5F8C\u3001\u6559\u5BA4\u304B\u3089\u65E5\u7A0B\u306E\u3054\u9023\u7D61\u304C\u5C4A\u304D\u307E\u3059\u3002")))));
}
window.DetailScreen = DetailScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/DetailScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/FaqScreen.jsx
try { (() => {
// おとなりピアノ — FAQ / よくある質問
function FaqScreen({
  onSignup,
  onSearch
}) {
  const {
    Accordion,
    Button,
    Badge
  } = window.PianoSchool_f8945d;
  const userFaq = [{
    q: "体験レッスンは無料ですか？",
    a: "はい。おとなりピアノに掲載中の教室では、体験レッスンを原則無料で受けられます。お申し込み後、教室から日程のご連絡が届きますので、当日教室へお越しください。"
  }, {
    q: "申し込みから通い始めるまでの流れは？",
    a: "気になる教室のページから体験レッスンを申し込む → 教室から日程連絡 → 体験レッスン → 入会のお手続き、という流れです。体験後にそのまま入会しなくても問題ありません。"
  }, {
    q: "大人の初心者でも通えますか？",
    a: "もちろんです。多くの教室が大人の学び直し・初心者の方を歓迎しています。検索の「こだわり条件」で『大人の初心者歓迎』を選ぶと、ぴったりの教室が見つかります。"
  }, {
    q: "月謝以外に費用はかかりますか？",
    a: "入会金・教材費・発表会費などは教室によって異なります。各教室の詳細ページ「料金・コース」に記載がありますので、お申し込み前にご確認ください。"
  }, {
    q: "オンラインレッスンはありますか？",
    a: "「オンライン対応」の教室なら、ご自宅から受講できます。通学とオンラインを組み合わせられる教室もあります。"
  }, {
    q: "おとなりピアノの利用は無料ですか？",
    a: "はい。教室の検索・比較・体験申し込みまで、利用者の方はすべて無料でご利用いただけます。"
  }];
  const studioFaq = [{
    q: "掲載は無料でできますか？",
    a: "はい。フリープランなら月額0円で掲載いただけます。上位表示や予約管理などをご希望の場合は有料プランもご用意しています。詳しくは料金ページをご覧ください。"
  }, {
    q: "掲載までどれくらいかかりますか？",
    a: "お申し込みフォームの送信後、最短2営業日で掲載が完了します。掲載内容は管理画面からいつでも編集できます。"
  }, {
    q: "途中で解約できますか？",
    a: "はい。有料プランはいつでも解約でき、解約金はかかりません。フリープランへの変更も可能です。"
  }];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      background: "linear-gradient(180deg, var(--clay-50), var(--cream) 220px)",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-narrow)",
      margin: "0 auto",
      padding: "var(--space-16) var(--space-6) var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "accent"
  }, "\u30B5\u30DD\u30FC\u30C8"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: "var(--text-3xl)",
      margin: "var(--space-4) 0 var(--space-2)"
    }
  }, "\u3088\u304F\u3042\u308B\u8CEA\u554F"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--ink-700)",
      fontSize: "var(--text-md)",
      lineHeight: 1.9
    }
  }, "\u306F\u3058\u3081\u3066\u306E\u65B9\u304B\u3089\u3088\u304F\u3044\u305F\u3060\u304F\u3054\u8CEA\u554F\u3092\u307E\u3068\u3081\u307E\u3057\u305F\u3002"))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-narrow)",
      margin: "0 auto",
      padding: "0 var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "var(--text-xl)",
      margin: "var(--space-10) 0 var(--space-5)",
      display: "flex",
      alignItems: "center",
      gap: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, "\uD83C\uDFB9"), "\u6559\u5BA4\u3092\u304A\u63A2\u3057\u306E\u65B9\u3078"), /*#__PURE__*/React.createElement(Accordion, {
    items: userFaq,
    defaultOpen: [0]
  }), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "var(--text-xl)",
      margin: "var(--space-12) 0 var(--space-5)",
      display: "flex",
      alignItems: "center",
      gap: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, "\uD83C\uDFE0"), "\u6559\u5BA4\u3092\u904B\u55B6\u3055\u308C\u308B\u65B9\u3078"), /*#__PURE__*/React.createElement(Accordion, {
    items: studioFaq
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: "var(--space-16) 0",
      padding: "var(--space-10)",
      background: "var(--sage-100)",
      borderRadius: "var(--radius-xl)",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: "var(--text-xl)",
      marginBottom: "var(--space-2)"
    }
  }, "\u89E3\u6C7A\u3057\u307E\u305B\u3093\u3067\u3057\u305F\u304B\uFF1F"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--ink-700)",
      marginBottom: "var(--space-6)"
    }
  }, "\u307E\u305A\u306F\u6C17\u306B\u306A\u308B\u6559\u5BA4\u3092\u63A2\u3059\u304B\u3001\u304A\u6C17\u8EFD\u306B\u304A\u554F\u3044\u5408\u308F\u305B\u304F\u3060\u3055\u3044\u3002"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-3)",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: () => onSearch("")
  }, "\u6559\u5BA4\u3092\u3055\u304C\u3059"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary"
  }, "\u304A\u554F\u3044\u5408\u308F\u305B")))));
}
window.FaqScreen = FaqScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/FaqScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HomeScreen.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// おとなりピアノ — Home / search hero
function HomeScreen({
  onSearch,
  onOpenStudio
}) {
  const {
    Button,
    StudioCard,
    Badge
  } = window.PianoSchool_f8945d;
  const data = window.OP_DATA;
  const [area, setArea] = React.useState("");
  const popular = data.studios.slice(0, 3);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      overflow: "hidden",
      background: "linear-gradient(160deg, var(--clay-50) 0%, var(--cream) 60%)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "op-hero-grid",
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "var(--space-20) var(--space-6)",
      display: "grid",
      gridTemplateColumns: "1.05fr 0.95fr",
      gap: "var(--space-12)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-block",
      marginBottom: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "accent"
  }, "\u5168\u56FD2,400\u6559\u5BA4\u3092\u63B2\u8F09")), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: "var(--text-4xl)",
      lineHeight: 1.25,
      color: "var(--ink-900)"
    }
  }, "\u3054\u8FD1\u6240\u306E", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--clay-500)"
    }
  }, "\u30D4\u30A2\u30CE\u6559\u5BA4"), "\u3092\u3001", /*#__PURE__*/React.createElement("br", null), "\u3059\u3050\u898B\u3064\u304B\u308B\u3002"), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: "var(--space-5)",
      fontSize: "var(--text-md)",
      color: "var(--ink-700)",
      lineHeight: 1.9,
      maxWidth: 460
    }
  }, "\u4F53\u9A13\u30EC\u30C3\u30B9\u30F3\u30FB\u6708\u8B1D\u30FB\u53E3\u30B3\u30DF\u3067\u6BD4\u3079\u3066\u3001\u3042\u306A\u305F\u3068\u304A\u5B50\u3055\u307E\u306B\u3074\u3063\u305F\u308A\u306E\u6559\u5BA4\u3092\u898B\u3064\u3051\u307E\u3057\u3087\u3046\u3002"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-8)",
      display: "flex",
      gap: "var(--space-3)",
      background: "var(--ivory)",
      padding: "var(--space-3)",
      borderRadius: "var(--radius-xl)",
      boxShadow: "var(--shadow-md)",
      border: "1px solid var(--hairline)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      alignItems: "center",
      gap: "var(--space-2)",
      padding: "0 var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 20
    }
  }, "\uD83D\uDCCD"), /*#__PURE__*/React.createElement("input", {
    value: area,
    onChange: e => setArea(e.target.value),
    placeholder: "\u30A8\u30EA\u30A2\u30FB\u99C5\u540D\u3067\u63A2\u3059\uFF08\u4F8B\uFF1A\u4E09\u8ED2\u8336\u5C4B\uFF09",
    style: {
      flex: 1,
      border: "none",
      outline: "none",
      background: "transparent",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-base)",
      color: "var(--ink-900)",
      height: 48
    }
  })), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: () => onSearch(area)
  }, "\u3055\u304C\u3059")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-4)",
      display: "flex",
      gap: "var(--space-2)",
      flexWrap: "wrap",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-sm)",
      color: "var(--ink-500)"
    }
  }, "\u4EBA\u6C17\u306E\u30A8\u30EA\u30A2\uFF1A"), data.areas.slice(0, 4).map(a => /*#__PURE__*/React.createElement("button", {
    key: a,
    onClick: () => onSearch(a),
    style: {
      background: "var(--ivory)",
      border: "1px solid var(--hairline-strong)",
      borderRadius: "var(--radius-pill)",
      padding: "4px 12px",
      fontSize: "var(--text-sm)",
      color: "var(--ink-700)",
      cursor: "pointer",
      fontFamily: "var(--font-sans)"
    }
  }, a)))), /*#__PURE__*/React.createElement("div", {
    className: "op-photo-ph op-hero-photo",
    style: {
      height: 380,
      borderRadius: "var(--radius-2xl)",
      boxShadow: "var(--shadow-lg)"
    }
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "var(--space-16) var(--space-6) 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "op-grid-3",
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: "var(--space-6)"
    }
  }, [{
    n: "01",
    t: "エリアで探す",
    d: "お住まいの近くや通いやすい駅から、教室を絞り込めます。"
  }, {
    n: "02",
    t: "じっくり比べる",
    d: "月謝・コース・口コミ・先生の人柄まで、並べて比較。"
  }, {
    n: "03",
    t: "体験を申し込む",
    d: "気になった教室に、そのまま体験レッスンを申し込めます。"
  }].map(s => /*#__PURE__*/React.createElement("div", {
    key: s.n,
    style: {
      background: "var(--ivory)",
      border: "1px solid var(--hairline)",
      borderRadius: "var(--radius-lg)",
      padding: "var(--space-6)",
      boxShadow: "var(--shadow-xs)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-2xl)",
      fontWeight: 900,
      color: "var(--clay-300)"
    }
  }, s.n), /*#__PURE__*/React.createElement("h3", {
    style: {
      marginTop: "var(--space-2)",
      fontSize: "var(--text-lg)"
    }
  }, s.t), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: "var(--space-2)",
      fontSize: "var(--text-sm)",
      color: "var(--ink-700)",
      lineHeight: 1.8
    }
  }, s.d))))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "var(--space-16) var(--space-6) 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      justifyContent: "space-between",
      marginBottom: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "var(--text-2xl)"
    }
  }, "\u3044\u307E\u4EBA\u6C17\u306E\u6559\u5BA4"), /*#__PURE__*/React.createElement("button", {
    onClick: () => onSearch(""),
    style: {
      background: "none",
      border: "none",
      color: "var(--clay-600)",
      fontWeight: 700,
      cursor: "pointer",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-base)"
    }
  }, "\u3059\u3079\u3066\u898B\u308B \u2192")), /*#__PURE__*/React.createElement("div", {
    className: "op-grid-3",
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: "var(--space-6)"
    }
  }, popular.map(s => /*#__PURE__*/React.createElement(StudioCard, _extends({
    key: s.id
  }, s, {
    onClick: () => onOpenStudio(s.id)
  }))))));
}
window.HomeScreen = HomeScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ListingScreen.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// おとなりピアノ — Listing / search results
function ListingScreen({
  initialArea,
  onOpenStudio,
  onMapView
}) {
  const {
    StudioCard,
    Tag,
    Select,
    Checkbox,
    Button,
    Badge
  } = window.PianoSchool_f8945d;
  const data = window.OP_DATA;
  const [area, setArea] = React.useState(initialArea || "");
  const [genres, setGenres] = React.useState([]);
  const [feats, setFeats] = React.useState([]);
  const [fav, setFav] = React.useState({});
  const toggle = (list, set, v) => set(list.includes(v) ? list.filter(x => x !== v) : [...list, v]);
  const results = data.studios.filter(s => {
    if (area && !s.areaTag.includes(area) && !s.area.includes(area)) return false;
    if (genres.length && !genres.some(g => s.tags.includes(g))) return false;
    return true;
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "var(--space-10) var(--space-6) 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-sm)",
      color: "var(--ink-500)",
      marginBottom: "var(--space-3)"
    }
  }, "\u30DB\u30FC\u30E0 \uFF0F \u6559\u5BA4\u3092\u3055\u304C\u3059", area && ` ／ ${area}`), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: "var(--text-3xl)",
      marginBottom: "var(--space-6)"
    }
  }, area || "すべてのエリア", "\u306E", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--clay-500)"
    }
  }, "\u30D4\u30A2\u30CE\u6559\u5BA4")), /*#__PURE__*/React.createElement("div", {
    className: "op-listing-grid",
    style: {
      display: "grid",
      gridTemplateColumns: "260px 1fr",
      gap: "var(--space-8)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("aside", {
    className: "op-listing-aside",
    style: {
      position: "sticky",
      top: 88,
      background: "var(--ivory)",
      border: "1px solid var(--hairline)",
      borderRadius: "var(--radius-lg)",
      padding: "var(--space-5)",
      boxShadow: "var(--shadow-xs)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "var(--text-md)",
      marginBottom: "var(--space-4)"
    }
  }, "\u7D5E\u308A\u8FBC\u307F"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement(Select, {
    label: "\u30A8\u30EA\u30A2",
    value: area,
    onChange: e => setArea(e.target.value),
    options: [{
      value: "",
      label: "すべて"
    }, ...data.areas.map(a => ({
      value: a,
      label: a
    }))]
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-sm)",
      fontWeight: 700,
      marginBottom: "var(--space-3)"
    }
  }, "\u30B8\u30E3\u30F3\u30EB"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "var(--space-2)"
    }
  }, data.genres.slice(0, 4).map(g => /*#__PURE__*/React.createElement(Tag, {
    key: g,
    selected: genres.includes(g),
    onClick: () => toggle(genres, setGenres, g)
  }, g)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-sm)",
      fontWeight: 700,
      marginBottom: "var(--space-3)"
    }
  }, "\u3053\u3060\u308F\u308A\u6761\u4EF6"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-3)"
    }
  }, data.features.slice(0, 5).map(f => /*#__PURE__*/React.createElement(Checkbox, {
    key: f,
    label: f,
    checked: feats.includes(f),
    onChange: () => toggle(feats, setFeats, f)
  }))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-base)",
      color: "var(--ink-700)"
    }
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      color: "var(--ink-900)",
      fontSize: "var(--text-lg)"
    }
  }, results.length), " \u4EF6\u306E\u6559\u5BA4"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onMapView,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      background: "var(--ivory)",
      border: "1px solid var(--hairline-strong)",
      borderRadius: "var(--radius-md)",
      padding: "9px 14px",
      cursor: "pointer",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-sm)",
      fontWeight: 700,
      color: "var(--ink-700)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, "\uD83D\uDDFA\uFE0F"), "\u5730\u56F3\u3067\u898B\u308B"), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 200
    }
  }, /*#__PURE__*/React.createElement(Select, {
    options: ["おすすめ順", "口コミの多い順", "月謝が安い順"]
  })))), (genres.length > 0 || feats.length > 0) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "var(--space-2)",
      marginBottom: "var(--space-5)"
    }
  }, [...genres, ...feats].map(t => /*#__PURE__*/React.createElement(Tag, {
    key: t,
    selected: true,
    removable: true,
    onRemove: () => {
      setGenres(genres.filter(x => x !== t));
      setFeats(feats.filter(x => x !== t));
    }
  }, t))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-4)"
    }
  }, results.map(s => /*#__PURE__*/React.createElement(StudioCard, _extends({
    key: s.id
  }, s, {
    layout: "horizontal",
    favorite: !!fav[s.id],
    onFavorite: () => setFav({
      ...fav,
      [s.id]: !fav[s.id]
    }),
    onClick: () => onOpenStudio(s.id)
  }))), results.length === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      padding: "var(--space-16)",
      color: "var(--ink-500)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 40,
      marginBottom: 12
    }
  }, "\uD83C\uDFB9"), "\u6761\u4EF6\u306B\u5408\u3046\u6559\u5BA4\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093\u3067\u3057\u305F\u3002", /*#__PURE__*/React.createElement("br", null), "\u7D5E\u308A\u8FBC\u307F\u3092\u6E1B\u3089\u3057\u3066\u304A\u8A66\u3057\u304F\u3060\u3055\u3044\u3002")))));
}
window.ListingScreen = ListingScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ListingScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/MapScreen.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// おとなりピアノ — Map search (地図でさがす)
function MapScreen({
  initialArea,
  onOpenStudio,
  onListView
}) {
  const {
    StudioCard,
    Button,
    Badge
  } = window.PianoSchool_f8945d;
  const data = window.OP_DATA;
  const results = data.studios.filter(s => !initialArea || s.areaTag.includes(initialArea) || s.area.includes(initialArea));
  const [active, setActive] = React.useState(results[0] ? results[0].id : null);
  const pins = [{
    id: "sangenjaya",
    top: "38%",
    left: "30%"
  }, {
    id: "nakameguro",
    top: "62%",
    left: "46%"
  }, {
    id: "koenji",
    top: "24%",
    left: "58%"
  }, {
    id: "ginza",
    top: "52%",
    left: "72%"
  }, {
    id: "yokohama",
    top: "78%",
    left: "22%"
  }, {
    id: "jiyugaoka",
    top: "44%",
    left: "54%"
  }];
  const mapBg = {
    backgroundColor: "#EEE6D6",
    backgroundImage: ["linear-gradient(90deg, transparent 0 48%, rgba(255,253,248,0.9) 48% 52%, transparent 52%)", "linear-gradient(0deg, transparent 0 30%, rgba(255,253,248,0.9) 30% 33%, transparent 33%)", "linear-gradient(0deg, transparent 0 70%, rgba(255,253,248,0.7) 70% 72%, transparent 72%)", "linear-gradient(60deg, transparent 0 64%, rgba(255,253,248,0.8) 64% 67%, transparent 67%)", "radial-gradient(circle at 78% 26%, rgba(110,139,94,0.30) 0 9%, transparent 10%)", "radial-gradient(circle at 20% 64%, rgba(110,139,94,0.25) 0 12%, transparent 13%)", "radial-gradient(circle at 60% 80%, rgba(74,122,155,0.18) 0 14%, transparent 15%)"].join(",")
  };
  const visible = pins.filter(p => results.some(r => r.id === p.id));
  const activeStudio = results.find(r => r.id === active);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "var(--space-8) var(--space-6) 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: "var(--text-2xl)"
    }
  }, initialArea || "すべてのエリア", "\u306E\u6559\u5BA4 ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-base)",
      color: "var(--ink-500)",
      fontWeight: 400
    }
  }, "\u5730\u56F3\u3067\u3055\u304C\u3059")), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    iconLeft: /*#__PURE__*/React.createElement("span", null, "\u2630"),
    onClick: onListView
  }, "\u30EA\u30B9\u30C8\u3067\u898B\u308B")), /*#__PURE__*/React.createElement("div", {
    className: "op-map-grid",
    style: {
      display: "grid",
      gridTemplateColumns: "360px 1fr",
      gap: "var(--space-5)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "op-map-list",
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-4)",
      maxHeight: 560,
      overflow: "auto",
      paddingRight: 4
    }
  }, results.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.id,
    onMouseEnter: () => setActive(s.id),
    style: {
      outline: active === s.id ? "2px solid var(--clay-300)" : "none",
      borderRadius: "var(--radius-lg)"
    }
  }, /*#__PURE__*/React.createElement(StudioCard, _extends({}, s, {
    layout: "horizontal",
    onClick: () => onOpenStudio(s.id)
  }))))), /*#__PURE__*/React.createElement("div", {
    className: "op-map-canvas",
    style: {
      position: "sticky",
      top: 88,
      height: 560,
      borderRadius: "var(--radius-xl)",
      overflow: "hidden",
      border: "1px solid var(--hairline-strong)",
      boxShadow: "var(--shadow-sm)",
      ...mapBg
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      bottom: 12,
      right: 12,
      background: "rgba(255,253,248,0.85)",
      padding: "4px 10px",
      borderRadius: "var(--radius-pill)",
      fontSize: "var(--text-xs)",
      color: "var(--ink-500)",
      fontFamily: "var(--font-sans)"
    }
  }, "\u5730\u56F3\u306F\u30A4\u30E1\u30FC\u30B8\u3067\u3059"), visible.map(p => {
    const s = results.find(r => r.id === p.id);
    const isActive = active === p.id;
    return /*#__PURE__*/React.createElement("button", {
      key: p.id,
      onMouseEnter: () => setActive(p.id),
      onClick: () => onOpenStudio(p.id),
      style: {
        position: "absolute",
        top: p.top,
        left: p.left,
        transform: "translate(-50%,-50%)",
        display: "inline-flex",
        alignItems: "center",
        gap: 4,
        padding: "6px 12px",
        cursor: "pointer",
        fontFamily: "var(--font-display)",
        fontSize: "var(--text-sm)",
        fontWeight: 700,
        color: isActive ? "var(--ivory)" : "var(--clay-700)",
        background: isActive ? "var(--clay-500)" : "var(--ivory)",
        border: "2px solid var(--clay-500)",
        borderRadius: "var(--radius-pill)",
        boxShadow: isActive ? "var(--shadow-md)" : "var(--shadow-sm)",
        zIndex: isActive ? 5 : 1,
        transition: "background var(--dur-fast) var(--ease-soft), color var(--dur-fast) var(--ease-soft)",
        whiteSpace: "nowrap"
      }
    }, s.price, "\u301C");
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: "var(--space-12)"
    }
  }));
}
window.MapScreen = MapScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/MapScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/PricingScreen.jsx
try { (() => {
// おとなりピアノ — Pricing (掲載料金, for studios)
function PricingScreen({
  onSignup
}) {
  const {
    Button,
    Badge
  } = window.PianoSchool_f8945d;
  const tiers = [{
    name: "フリー",
    price: "0",
    unit: "円／月",
    tone: "neutral",
    tagline: "まずは無料で掲載",
    cta: "無料で掲載する",
    variant: "secondary",
    features: ["教室の基本情報を掲載", "写真3枚まで", "口コミの受付・表示", "体験レッスンの申し込み受付"]
  }, {
    name: "スタンダード",
    price: "4,800",
    unit: "円／月",
    tone: "primary",
    featured: true,
    tagline: "見つけてもらいやすく",
    cta: "スタンダードで始める",
    variant: "primary",
    features: ["フリーのすべての機能", "検索結果で上位に表示", "写真・動画が無制限", "体験予約のカレンダー管理", "アクセス分析レポート"]
  }, {
    name: "プレミアム",
    price: "9,800",
    unit: "円／月",
    tone: "accent",
    tagline: "地域の一番人気へ",
    cta: "プレミアムで始める",
    variant: "accent",
    features: ["スタンダードのすべての機能", "エリア特集ページに掲載", "最上位の優先表示", "専任スタッフのサポート", "口コミ返信の代行支援"]
  }];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      background: "linear-gradient(180deg, var(--clay-50), var(--cream) 260px)",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-narrow)",
      margin: "0 auto",
      padding: "var(--space-16) var(--space-6) var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "accent"
  }, "\u6559\u5BA4\u3092\u904B\u55B6\u3055\u308C\u308B\u65B9\u3078"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: "var(--text-3xl)",
      margin: "var(--space-4) 0 var(--space-2)"
    }
  }, "\u63B2\u8F09\u6599\u91D1"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--ink-700)",
      fontSize: "var(--text-md)",
      lineHeight: 1.9
    }
  }, "\u307E\u305A\u306F\u7121\u6599\u304B\u3089\u3002\u6559\u5BA4\u306E\u6210\u9577\u306B\u5408\u308F\u305B\u3066\u30D7\u30E9\u30F3\u3092\u9078\u3079\u307E\u3059\u3002", /*#__PURE__*/React.createElement("br", null), "\u3069\u306E\u30D7\u30E9\u30F3\u3082\u521D\u671F\u8CBB\u7528\u30FB\u89E3\u7D04\u91D1\u306F\u304B\u304B\u308A\u307E\u305B\u3093\u3002"))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "0 var(--space-6) var(--space-16)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "op-pricing-grid",
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "var(--space-6)",
      alignItems: "start",
      marginTop: "calc(var(--space-8) * -1)"
    }
  }, tiers.map(t => /*#__PURE__*/React.createElement("div", {
    key: t.name,
    style: {
      position: "relative",
      background: "var(--ivory)",
      border: `${t.featured ? "var(--border-thick)" : "var(--border-thin)"} solid ${t.featured ? "var(--clay-300)" : "var(--hairline)"}`,
      borderRadius: "var(--radius-xl)",
      padding: "var(--space-8) var(--space-6)",
      boxShadow: t.featured ? "var(--shadow-lg)" : "var(--shadow-sm)",
      transform: t.featured ? "translateY(-8px)" : "none"
    }
  }, t.featured && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: -14,
      left: "50%",
      transform: "translateX(-50%)"
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "primary",
    solid: true
  }, "\u3044\u3061\u3070\u3093\u4EBA\u6C17")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-xl)",
      fontWeight: 700,
      color: "var(--ink-900)"
    }
  }, t.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-sm)",
      color: "var(--ink-500)",
      marginTop: 2
    }
  }, t.tagline), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: 4,
      margin: "var(--space-5) 0"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-4xl)",
      fontWeight: 900,
      color: t.tone === "accent" ? "var(--honey-500)" : "var(--clay-600)"
    }
  }, t.price), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-base)",
      color: "var(--ink-500)"
    }
  }, t.unit)), /*#__PURE__*/React.createElement(Button, {
    block: true,
    variant: t.variant,
    onClick: onSignup
  }, t.cta), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      padding: 0,
      margin: "var(--space-6) 0 0",
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-3)"
    }
  }, t.features.map(f => /*#__PURE__*/React.createElement("li", {
    key: f,
    style: {
      display: "flex",
      gap: "var(--space-3)",
      fontSize: "var(--text-sm)",
      color: "var(--ink-700)",
      lineHeight: 1.6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--sage-500)",
      fontWeight: 700,
      flex: "none"
    }
  }, "\u2713"), f)))))), /*#__PURE__*/React.createElement("p", {
    style: {
      textAlign: "center",
      marginTop: "var(--space-10)",
      fontSize: "var(--text-sm)",
      color: "var(--ink-500)"
    }
  }, "\u8868\u793A\u4FA1\u683C\u306F\u7A0E\u629C\u3067\u3059\u3002\u30D7\u30E9\u30F3\u5909\u66F4\u30FB\u89E3\u7D04\u306F\u3044\u3064\u3067\u3082\u7BA1\u7406\u753B\u9762\u304B\u3089\u884C\u3048\u307E\u3059\u3002")));
}
window.PricingScreen = PricingScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/PricingScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/SignupScreen.jsx
try { (() => {
// おとなりピアノ — Studio signup / listing application form
function SignupScreen({
  onDone
}) {
  const {
    Input,
    Textarea,
    Select,
    Checkbox,
    Button,
    Badge
  } = window.PianoSchool_f8945d;
  const data = window.OP_DATA;
  const [feats, setFeats] = React.useState(["体験レッスンあり"]);
  const [agree, setAgree] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);
  const toggle = v => setFeats(feats.includes(v) ? feats.filter(x => x !== v) : [...feats, v]);
  if (submitted) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 560,
        margin: "0 auto",
        padding: "var(--space-24) var(--space-6)",
        textAlign: "center"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 56,
        marginBottom: "var(--space-4)"
      }
    }, "\uD83C\uDF89"), /*#__PURE__*/React.createElement("h1", {
      style: {
        fontSize: "var(--text-2xl)",
        marginBottom: "var(--space-3)"
      }
    }, "\u63B2\u8F09\u306E\u304A\u7533\u3057\u8FBC\u307F\u3092\u53D7\u3051\u4ED8\u3051\u307E\u3057\u305F"), /*#__PURE__*/React.createElement("p", {
      style: {
        color: "var(--ink-700)",
        lineHeight: 1.9,
        marginBottom: "var(--space-8)"
      }
    }, "\u62C5\u5F53\u8005\u3088\u308A2\u55B6\u696D\u65E5\u4EE5\u5185\u306B\u3054\u9023\u7D61\u3044\u305F\u3057\u307E\u3059\u3002", /*#__PURE__*/React.createElement("br", null), "\u63B2\u8F09\u306F\u5B8C\u5168\u7121\u6599\u3067\u3059\u3002\u3069\u3046\u305E\u3088\u308D\u3057\u304F\u304A\u9858\u3044\u3044\u305F\u3057\u307E\u3059\u3002"), /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      onClick: onDone
    }, "\u30C8\u30C3\u30D7\u3078\u623B\u308B"));
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "linear-gradient(180deg, var(--clay-50), var(--cream) 280px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 720,
      margin: "0 auto",
      padding: "var(--space-16) var(--space-6) 0",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "accent"
  }, "\u63B2\u8F09\u306F\u5B8C\u5168\u7121\u6599"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: "var(--text-3xl)",
      margin: "var(--space-4) 0 var(--space-2)"
    }
  }, "\u3042\u306A\u305F\u306E\u6559\u5BA4\u3092\u3001\u3054\u8FD1\u6240\u306B\u5C4A\u3051\u3088\u3046"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--ink-700)",
      fontSize: "var(--text-md)",
      lineHeight: 1.9
    }
  }, "\u57FA\u672C\u60C5\u5831\u3092\u5165\u529B\u3059\u308B\u3060\u3051\u3002\u6700\u77ED2\u55B6\u696D\u65E5\u3067\u63B2\u8F09\u3067\u304D\u307E\u3059\u3002")), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 720,
      margin: "0 auto",
      padding: "var(--space-10) var(--space-6) 0"
    }
  }, /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSubmitted(true);
    },
    style: {
      background: "var(--ivory)",
      border: "1px solid var(--hairline)",
      borderRadius: "var(--radius-xl)",
      padding: "var(--space-10)",
      boxShadow: "var(--shadow-md)",
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "op-form-row",
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "\u6559\u5BA4\u540D",
    placeholder: "\u4F8B\uFF1A\u304A\u3068\u306A\u308A\u30D4\u30A2\u30CE\u4E09\u8ED2\u8336\u5C4B",
    required: true
  }), /*#__PURE__*/React.createElement(Input, {
    label: "\u304A\u540D\u524D\uFF08\u3054\u62C5\u5F53\u8005\uFF09",
    placeholder: "\u5C71\u7530 \u82B1\u5B50",
    required: true
  })), /*#__PURE__*/React.createElement("div", {
    className: "op-form-row",
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9",
    type: "email",
    placeholder: "contact@example.com",
    required: true
  }), /*#__PURE__*/React.createElement(Input, {
    label: "\u96FB\u8A71\u756A\u53F7",
    type: "tel",
    placeholder: "03-1234-5678"
  })), /*#__PURE__*/React.createElement("div", {
    className: "op-form-row",
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement(Select, {
    label: "\u30A8\u30EA\u30A2",
    options: [{
      value: "",
      label: "選択してください"
    }, ...data.areas.map(a => ({
      value: a,
      label: a
    }))],
    required: true
  }), /*#__PURE__*/React.createElement(Input, {
    label: "\u6700\u5BC4\u308A\u99C5",
    placeholder: "\u4F8B\uFF1A\u4E09\u8ED2\u8336\u5C4B\u99C5 \u5F92\u6B694\u5206",
    iconLeft: /*#__PURE__*/React.createElement("span", null, "\uD83D\uDCCD")
  })), /*#__PURE__*/React.createElement(Input, {
    label: "\u6708\u8B1D\uFF08\u6700\u4F4E\u984D\uFF09",
    placeholder: "\u4F8B\uFF1A8,000\u5186",
    hint: "\u4EE3\u8868\u7684\u306A\u30B3\u30FC\u30B9\u306E\u6708\u984D\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-sm)",
      fontWeight: 700,
      marginBottom: "var(--space-3)"
    }
  }, "\u5BFE\u5FDC\u3057\u3066\u3044\u308B\u7279\u5FB4\uFF08\u8907\u6570\u9078\u629E\u53EF\uFF09"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-3)"
    }
  }, data.features.slice(0, 5).map(f => /*#__PURE__*/React.createElement(Checkbox, {
    key: f,
    label: f,
    checked: feats.includes(f),
    onChange: () => toggle(f)
  })))), /*#__PURE__*/React.createElement(Textarea, {
    label: "\u6559\u5BA4\u306E\u7D39\u4ECB\u6587",
    rows: 4,
    placeholder: "\u6559\u5BA4\u306E\u96F0\u56F2\u6C17\u3084\u3053\u3060\u308F\u308A\u3001\u8B1B\u5E2B\u306E\u7D4C\u6B74\u306A\u3069\u3092\u3054\u8A18\u5165\u304F\u3060\u3055\u3044\u3002"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: "var(--space-2)",
      borderTop: "1px solid var(--hairline)"
    }
  }, /*#__PURE__*/React.createElement(Checkbox, {
    label: "\u5229\u7528\u898F\u7D04\u30FB\u30D7\u30E9\u30A4\u30D0\u30B7\u30FC\u30DD\u30EA\u30B7\u30FC\u306B\u540C\u610F\u3057\u307E\u3059",
    checked: agree,
    onChange: e => setAgree(e.target.checked)
  })), /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    size: "lg",
    block: true,
    disabled: !agree
  }, "\u7121\u6599\u3067\u63B2\u8F09\u3092\u7533\u3057\u8FBC\u3080")), /*#__PURE__*/React.createElement("div", {
    style: {
      height: "var(--space-12)"
    }
  })));
}
window.SignupScreen = SignupScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/SignupScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/SiteFooter.jsx
try { (() => {
// おとなりピアノ — Site footer
function SiteFooter({
  onNav
}) {
  const go = onNav || (() => {});
  const cols = [{
    title: "さがす",
    items: [{
      label: "エリアから探す",
      to: "list"
    }, {
      label: "地図でさがす",
      to: "map"
    }, {
      label: "こだわり条件",
      to: "list"
    }, {
      label: "オンライン対応の教室",
      to: "list"
    }]
  }, {
    title: "サポート",
    items: [{
      label: "はじめての方へ",
      to: "faq"
    }, {
      label: "体験レッスンとは",
      to: "faq"
    }, {
      label: "よくある質問",
      to: "faq"
    }, {
      label: "お問い合わせ",
      to: "faq"
    }]
  }, {
    title: "教室の方へ",
    items: [{
      label: "無料掲載のご案内",
      to: "pricing"
    }, {
      label: "掲載料金",
      to: "pricing"
    }, {
      label: "掲載までの流れ",
      to: "signup"
    }, {
      label: "運営会社",
      to: "faq"
    }]
  }];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "var(--ink-900)",
      color: "var(--cream)",
      marginTop: "var(--space-24)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "var(--space-16) var(--space-6) var(--space-10)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "op-footer-grid",
    style: {
      display: "grid",
      gridTemplateColumns: "1.4fr 1fr 1fr 1fr",
      gap: "var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "op-footer-brand"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: window.__resources && window.__resources.logoMark || "../../assets/logo-mark.svg",
    alt: "",
    style: {
      height: 44
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 22,
      color: "var(--cream)"
    }
  }, "\u304A\u3068\u306A\u308A\u30D4\u30A2\u30CE")), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: "var(--space-4)",
      fontSize: "var(--text-sm)",
      lineHeight: 1.9,
      color: "var(--wood-200)",
      maxWidth: 240
    }
  }, "\u3054\u8FD1\u6240\u306E\u30D4\u30A2\u30CE\u6559\u5BA4\u304C\u3001\u3059\u3050\u898B\u3064\u304B\u308B\u3002", /*#__PURE__*/React.createElement("br", null), "\u3042\u306A\u305F\u306E\u300C\u5F3E\u3044\u3066\u307F\u305F\u3044\u300D\u3092\u5FDC\u63F4\u3057\u307E\u3059\u3002")), cols.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.title
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "var(--text-base)",
      marginBottom: "var(--space-4)"
    }
  }, c.title), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      padding: 0,
      margin: 0,
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-3)"
    }
  }, c.items.map(it => /*#__PURE__*/React.createElement("li", {
    key: it.label
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => go(it.to),
    style: {
      background: "none",
      border: "none",
      padding: 0,
      textAlign: "left",
      cursor: "pointer",
      color: "var(--wood-200)",
      fontSize: "var(--text-sm)",
      fontFamily: "var(--font-sans)"
    }
  }, it.label))))))), /*#__PURE__*/React.createElement("div", {
    className: "op-footer-bottom",
    style: {
      marginTop: "var(--space-12)",
      paddingTop: "var(--space-6)",
      borderTop: "1px solid rgba(255,255,255,0.12)",
      display: "flex",
      justifyContent: "space-between",
      fontSize: "var(--text-xs)",
      color: "var(--wood-200)"
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 \u304A\u3068\u306A\u308A\u30D4\u30A2\u30CE"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      gap: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: "var(--wood-200)"
    }
  }, "\u5229\u7528\u898F\u7D04"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: "var(--wood-200)"
    }
  }, "\u30D7\u30E9\u30A4\u30D0\u30B7\u30FC\u30DD\u30EA\u30B7\u30FC")))));
}
window.SiteFooter = SiteFooter;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/SiteFooter.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/SiteHeader.jsx
try { (() => {
// おとなりピアノ — Site header
function SiteHeader({
  onNav,
  current
}) {
  const nav = [{
    key: "list",
    label: "教室をさがす"
  }, {
    key: "faq",
    label: "よくある質問"
  }, {
    key: "pricing",
    label: "掲載料金"
  }];
  const [menuOpen, setMenuOpen] = React.useState(false);
  const handle = key => {
    setMenuOpen(false);
    onNav(key);
  };
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 50,
      background: "rgba(255,253,248,0.92)",
      backdropFilter: "blur(10px)",
      borderBottom: "1px solid var(--hairline)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "op-header-inner",
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "0 var(--space-6)",
      height: 72,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => handle("home"),
    style: {
      background: "none",
      border: "none",
      cursor: "pointer",
      padding: 0,
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: window.__resources && window.__resources.logoMark || "../../assets/logo-mark.svg",
    alt: "",
    style: {
      height: 40,
      display: "block"
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "op-brand-text",
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 24,
      color: "var(--ink-900)",
      letterSpacing: ".02em"
    }
  }, "\u304A\u3068\u306A\u308A\u30D4\u30A2\u30CE")), /*#__PURE__*/React.createElement("nav", {
    className: "op-nav",
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-2)"
    }
  }, nav.map(n => /*#__PURE__*/React.createElement("button", {
    key: n.key,
    className: "op-nav-link",
    onClick: () => handle(n.key),
    style: {
      background: "none",
      border: "none",
      cursor: "pointer",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-base)",
      fontWeight: current === n.key ? 700 : 500,
      color: current === n.key ? "var(--clay-600)" : "var(--ink-700)",
      padding: "8px 14px",
      borderRadius: "var(--radius-md)",
      whiteSpace: "nowrap"
    }
  }, n.label)), /*#__PURE__*/React.createElement("button", {
    className: "op-cta",
    onClick: () => handle("signup"),
    style: {
      marginLeft: 8,
      background: "var(--color-primary)",
      color: "var(--ivory)",
      border: "none",
      borderRadius: "var(--radius-md)",
      cursor: "pointer",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-sm)",
      fontWeight: 700,
      padding: "10px 18px",
      boxShadow: "var(--shadow-sm)",
      whiteSpace: "nowrap"
    }
  }, "\u7121\u6599\u3067\u63B2\u8F09\u3059\u308B")), /*#__PURE__*/React.createElement("button", {
    className: "op-menu-btn",
    "aria-label": "\u30E1\u30CB\u30E5\u30FC",
    onClick: () => setMenuOpen(v => !v),
    style: {
      display: "none",
      alignItems: "center",
      justifyContent: "center",
      width: 44,
      height: 44,
      flex: "none",
      background: "var(--ivory)",
      border: "1px solid var(--hairline-strong)",
      borderRadius: "var(--radius-md)",
      cursor: "pointer",
      color: "var(--ink-900)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 22,
      lineHeight: 1
    }
  }, menuOpen ? "✕" : "≡"))), menuOpen && /*#__PURE__*/React.createElement("div", {
    className: "op-mobile-menu",
    style: {
      display: "none",
      flexDirection: "column",
      gap: "var(--space-1)",
      padding: "var(--space-3) var(--space-5) var(--space-5)",
      borderTop: "1px solid var(--hairline)",
      background: "var(--ivory)"
    }
  }, nav.map(n => /*#__PURE__*/React.createElement("button", {
    key: n.key,
    onClick: () => handle(n.key),
    style: {
      background: "none",
      border: "none",
      textAlign: "left",
      cursor: "pointer",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-md)",
      fontWeight: current === n.key ? 700 : 500,
      color: current === n.key ? "var(--clay-600)" : "var(--ink-900)",
      padding: "14px 8px",
      borderRadius: "var(--radius-md)"
    }
  }, n.label)), /*#__PURE__*/React.createElement("button", {
    onClick: () => handle("signup"),
    style: {
      marginTop: "var(--space-2)",
      background: "var(--color-primary)",
      color: "var(--ivory)",
      border: "none",
      borderRadius: "var(--radius-md)",
      cursor: "pointer",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-base)",
      fontWeight: 700,
      padding: "14px 18px",
      boxShadow: "var(--shadow-sm)"
    }
  }, "\u7121\u6599\u3067\u63B2\u8F09\u3059\u308B")));
}
window.SiteHeader = SiteHeader;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/SiteHeader.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/data.js
try { (() => {
// おとなりピアノ — mock directory data (UI kit only)
window.OP_DATA = {
  areas: ["世田谷区", "目黒区", "杉並区", "中央区", "横浜市"],
  genres: ["クラシック", "ポピュラー", "ジャズ", "保育士・教員向け", "リトミック"],
  features: ["体験レッスンあり", "オンライン対応", "子ども歓迎", "大人の初心者歓迎", "駅近5分以内", "発表会あり", "出張レッスン"],
  studios: [{
    id: "sangenjaya",
    name: "おとなりピアノ三軒茶屋",
    area: "世田谷区・三軒茶屋駅 徒歩4分",
    areaTag: "世田谷区",
    rating: 4.6,
    reviews: 28,
    price: "8,000円",
    tags: ["体験あり", "クラシック", "子ども歓迎"],
    lead: "駅近のアットホームな教室。3歳から大人まで、一人ひとりのペースに寄り添います。",
    teacher: "田中 ゆき先生",
    teacherBio: "音大卒業後、ヤマハ講師を経て独立。指導歴15年。「楽しく続けられる」を大切にしています。",
    established: "2011年",
    lessons: [{
      name: "こどもコース（30分）",
      price: "8,000円／月",
      note: "3歳〜小学生"
    }, {
      name: "おとなコース（45分）",
      price: "11,000円／月",
      note: "初心者歓迎・回数自由"
    }, {
      name: "オンラインコース",
      price: "6,500円／月",
      note: "全国どこからでも"
    }]
  }, {
    id: "nakameguro",
    name: "中目黒ミュージックラボ",
    area: "目黒区・中目黒駅 徒歩2分",
    areaTag: "目黒区",
    rating: 4.8,
    reviews: 41,
    price: "10,000円",
    tags: ["体験あり", "ポピュラー", "大人向け"],
    lead: "ポップス・弾き語り中心。大人の学び直しに人気のスタジオです。",
    teacher: "佐々木 涼先生",
    teacherBio: "スタジオミュージシャンとして活動しながら指導。好きな曲から始められます。",
    established: "2018年",
    lessons: [{
      name: "ポピュラー（60分）",
      price: "10,000円／月",
      note: "好きな曲でOK"
    }, {
      name: "弾き語りコース",
      price: "12,000円／月",
      note: "歌＋伴奏"
    }]
  }, {
    id: "koenji",
    name: "高円寺おんがく工房",
    area: "杉並区・高円寺駅 徒歩6分",
    areaTag: "杉並区",
    rating: 4.4,
    reviews: 17,
    price: "7,500円",
    tags: ["子ども歓迎", "リトミック", "発表会あり"],
    lead: "リトミックから始める、はじめての音楽。年1回の発表会が好評です。",
    teacher: "山本 みどり先生",
    teacherBio: "幼児教育出身。リズム遊びを取り入れた、笑顔あふれるレッスン。",
    established: "2015年",
    lessons: [{
      name: "リトミック（親子）",
      price: "6,000円／月",
      note: "1〜3歳"
    }, {
      name: "こどもピアノ",
      price: "7,500円／月",
      note: "4歳〜"
    }]
  }, {
    id: "ginza",
    name: "銀座クラシックサロン",
    area: "中央区・銀座駅 徒歩3分",
    areaTag: "中央区",
    rating: 4.9,
    reviews: 53,
    price: "15,000円",
    tags: ["クラシック", "大人向け", "発表会あり"],
    lead: "本格的なグランドピアノで学ぶ、上質なクラシックレッスン。",
    teacher: "高橋 響子先生",
    teacherBio: "国内外のコンクール審査員も務める。基礎から丁寧に指導します。",
    established: "2009年",
    lessons: [{
      name: "クラシック（60分）",
      price: "15,000円／月",
      note: "中級〜上級"
    }, {
      name: "入門コース",
      price: "12,000円／月",
      note: "大人の初心者"
    }]
  }, {
    id: "yokohama",
    name: "横浜ベイサイドピアノ",
    area: "横浜市西区・みなとみらい駅 徒歩5分",
    areaTag: "横浜市",
    rating: 4.5,
    reviews: 22,
    price: "9,000円",
    tags: ["体験あり", "オンライン対応", "子ども歓迎"],
    lead: "海の見える明るい教室。オンラインと通学を自由に組み合わせられます。",
    teacher: "中村 さやか先生",
    teacherBio: "ヤマハグレード指導者。お子さまの「できた！」を一緒に喜びます。",
    established: "2016年",
    lessons: [{
      name: "こどもコース",
      price: "9,000円／月",
      note: "4歳〜"
    }, {
      name: "ハイブリッド",
      price: "10,500円／月",
      note: "通学＋オンライン"
    }]
  }, {
    id: "jiyugaoka",
    name: "自由が丘ピアノアトリエ",
    area: "目黒区・自由が丘駅 徒歩7分",
    areaTag: "目黒区",
    rating: 4.7,
    reviews: 34,
    price: "9,500円",
    tags: ["体験あり", "クラシック", "大人の初心者歓迎"],
    lead: "閑静な住宅街のアトリエ。大人になってから始める方が半数以上です。",
    teacher: "小林 あおい先生",
    teacherBio: "桐朋学園卒。「何歳からでも遅くない」をモットーに。",
    established: "2013年",
    lessons: [{
      name: "おとなコース",
      price: "9,500円／月",
      note: "回数自由"
    }, {
      name: "プレミアム（隔週60分）",
      price: "13,000円／月",
      note: "じっくり派に"
    }]
  }],
  reviews: [{
    studio: "sangenjaya",
    name: "さとう",
    role: "小2の保護者",
    rating: 5,
    date: "2026年5月",
    body: "体験レッスンの時から子どもがすっかり気に入って、毎週楽しみに通っています。先生がとても優しく、つまずいたところを根気よく見てくださいます。"
  }, {
    studio: "sangenjaya",
    name: "M.K",
    role: "大人・初心者",
    rating: 4,
    date: "2026年4月",
    body: "40代から始めました。最初は不安でしたが、好きな曲を弾けるようになって毎日が楽しいです。駅から近いので仕事帰りにも通いやすい。"
  }, {
    studio: "sangenjaya",
    name: "たなか",
    role: "年長の保護者",
    rating: 5,
    date: "2026年3月",
    body: "リズム遊びから入ってくれるので、飽きずに続けられています。発表会も親子で良い思い出になりました。"
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/data.js", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.RatingStars = __ds_scope.RatingStars;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.StudioCard = __ds_scope.StudioCard;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Textarea = __ds_scope.Textarea;

})();
