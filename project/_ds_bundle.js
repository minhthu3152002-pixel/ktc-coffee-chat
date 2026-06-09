/* @ds-bundle: {"format":3,"namespace":"KTCFPTCoffeeChatDesignSystem_4d8682","components":[{"name":"Card","sourcePath":"components/content/Card.jsx"},{"name":"FeatureCard","sourcePath":"components/content/Card.jsx"},{"name":"FaqItem","sourcePath":"components/content/FaqItem.jsx"},{"name":"JobCard","sourcePath":"components/content/JobCard.jsx"},{"name":"MetaItem","sourcePath":"components/content/MetaItem.jsx"},{"name":"Eyebrow","sourcePath":"components/content/SectionHeading.jsx"},{"name":"SectionHeading","sourcePath":"components/content/SectionHeading.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"}],"sourceHashes":{"components/content/Card.jsx":"1354fd39f865","components/content/FaqItem.jsx":"4ef4394dd3b8","components/content/JobCard.jsx":"f864b82a190e","components/content/MetaItem.jsx":"fccfb2753373","components/content/SectionHeading.jsx":"b55a4bd7a457","components/core/Badge.jsx":"def841295221","components/core/Button.jsx":"921dfd29597f","components/core/Icon.jsx":"ea9e0e6d6241","components/forms/Input.jsx":"235bfe98e49f","components/forms/Select.jsx":"c5e9932bfe78","components/forms/Textarea.jsx":"d6137318536f","sections-bottom.jsx":"1b1dfff05a61","sections-top.jsx":"373cb57eb09c","ui_kits/coffee-chat/sections-bottom.jsx":"5179e8ac9bb7","ui_kits/coffee-chat/sections-mid.jsx":"030541d5a26b","ui_kits/coffee-chat/sections-top.jsx":"25c9959f3714"},"inlinedExternals":[],"unexposedExports":[{"name":"applyFocus","sourcePath":"components/forms/Input.jsx"},{"name":"clearFocus","sourcePath":"components/forms/Input.jsx"},{"name":"fieldControlStyle","sourcePath":"components/forms/Input.jsx"},{"name":"fieldLabelStyle","sourcePath":"components/forms/Input.jsx"}]} */

(() => {

const __ds_ns = (window.KTCFPTCoffeeChatDesignSystem_4d8682 = window.KTCFPTCoffeeChatDesignSystem_4d8682 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/content/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Card — base white surface with a hairline border and soft radius.
 * `hover` adds a blue-tinted lift on mouseover. Use as the container
 * for feature blocks, company panels, etc.
 */
function Card({
  children,
  hover = false,
  pad = 'var(--space-7)',
  style = {},
  ...rest
}) {
  const handleEnter = e => {
    if (!hover) return;
    e.currentTarget.style.boxShadow = 'var(--shadow-md)';
    e.currentTarget.style.borderColor = 'var(--blue-200)';
  };
  const handleLeave = e => {
    if (!hover) return;
    e.currentTarget.style.boxShadow = 'none';
    e.currentTarget.style.borderColor = 'var(--color-border)';
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: handleEnter,
    onMouseLeave: handleLeave,
    style: {
      background: 'var(--color-surface-card)',
      border: '1px solid var(--color-border)',
      borderRadius: 'var(--radius-xl)',
      padding: pad,
      transition: 'box-shadow var(--dur-normal), border-color var(--dur-normal)',
      ...style
    }
  }, rest), children);
}

/**
 * FeatureCard — icon glyph + title + short description. Compact tile
 * used in the "Về Coffee Chat" grid.
 */
function FeatureCard({
  icon,
  title,
  desc,
  style = {}
}) {
  return /*#__PURE__*/React.createElement(Card, {
    hover: true,
    pad: "var(--space-5)",
    style: {
      background: 'var(--color-bg)',
      borderRadius: 'var(--radius-lg)',
      ...style
    }
  }, icon && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '24px',
      marginBottom: '10px',
      lineHeight: 1
    }
  }, icon), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-sm)',
      fontWeight: 'var(--fw-bold)',
      color: 'var(--text-heading)',
      marginBottom: '4px'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-xs)',
      color: 'var(--text-muted)',
      lineHeight: 'var(--lh-normal)'
    }
  }, desc));
}
Object.assign(__ds_scope, { Card, FeatureCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Card.jsx", error: String((e && e.message) || e) }); }

// components/content/FaqItem.jsx
try { (() => {
/**
 * FaqItem — accordion row. Click the question to toggle the answer.
 * The toggle glyph rotates 45° from + to ×.
 */
function FaqItem({
  q,
  a,
  defaultOpen = false
}) {
  const [open, setOpen] = React.useState(defaultOpen);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--white)',
      border: '1px solid var(--color-border)',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: () => setOpen(o => !o),
    style: {
      padding: '18px 20px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '16px',
      cursor: 'pointer',
      userSelect: 'none',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-h4)',
      fontWeight: 'var(--fw-semibold)',
      color: 'var(--text-heading)'
    }
  }, q, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '24px',
      height: '24px',
      borderRadius: '50%',
      background: open ? 'var(--color-primary)' : 'var(--blue-100)',
      color: open ? 'var(--white)' : 'var(--color-primary)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
      fontSize: '16px',
      lineHeight: 1,
      transform: open ? 'rotate(45deg)' : 'none',
      transition: 'all var(--dur-normal) var(--ease)'
    }
  }, "+")), open && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 20px 18px',
      borderTop: '1px solid var(--color-border)',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-sm)',
      color: 'var(--text-body)',
      lineHeight: 'var(--lh-relaxed)'
    }
  }, a));
}
Object.assign(__ds_scope, { FaqItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/FaqItem.jsx", error: String((e && e.message) || e) }); }

// components/content/MetaItem.jsx
try { (() => {
/**
 * MetaItem — icon tile + label row. Used for event details (date, time,
 * location, capacity) in the hero.
 */
function MetaItem({
  icon,
  children,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-body)',
      fontWeight: 'var(--fw-medium)',
      color: 'var(--text-body)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '38px',
      height: '38px',
      borderRadius: 'var(--radius-md)',
      background: 'var(--blue-100)',
      border: '1px solid var(--blue-200)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '16px',
      flexShrink: 0
    }
  }, icon), /*#__PURE__*/React.createElement("span", null, children));
}
Object.assign(__ds_scope, { MetaItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/MetaItem.jsx", error: String((e && e.message) || e) }); }

// components/content/SectionHeading.jsx
try { (() => {
/**
 * Eyebrow — uppercase, letter-spaced micro-label in brand blue.
 * Sits above section titles.
 */
function Eyebrow({
  children,
  color = 'var(--color-primary)',
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-2xs)',
      fontWeight: 'var(--fw-bold)',
      letterSpacing: 'var(--ls-eyebrow)',
      textTransform: 'uppercase',
      color,
      ...style
    }
  }, children);
}

/**
 * SectionHeading — eyebrow + display title + optional lead paragraph.
 * The standard top-of-section block used across the landing page.
 */
function SectionHeading({
  eyebrow,
  title,
  desc,
  align = 'left',
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: align,
      maxWidth: align === 'center' ? '640px' : undefined,
      marginInline: align === 'center' ? 'auto' : undefined,
      ...style
    }
  }, eyebrow && /*#__PURE__*/React.createElement(Eyebrow, {
    style: {
      marginBottom: '12px'
    }
  }, eyebrow), title && /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-h1)',
      fontWeight: 'var(--fw-extrabold)',
      color: 'var(--text-heading)',
      lineHeight: 'var(--lh-snug)',
      letterSpacing: 'var(--ls-tight)',
      marginBottom: desc ? '14px' : 0
    }
  }, title), desc && /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-lead)',
      color: 'var(--text-body)',
      lineHeight: 'var(--lh-relaxed)',
      maxWidth: '580px',
      marginInline: align === 'center' ? 'auto' : undefined
    }
  }, desc));
}
Object.assign(__ds_scope, { Eyebrow, SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Badge — small pill label used for tags, statuses and tech stacks.
 * Five tones map to the brand palette. Use sparingly; rows of badges
 * sit under headings and inside job cards.
 */
function Badge({
  children,
  tone = 'blue',
  style = {},
  ...rest
}) {
  const tones = {
    blue: {
      background: 'var(--blue-100)',
      border: '1px solid var(--blue-200)',
      color: 'var(--blue-500)'
    },
    pink: {
      background: 'var(--pink-100)',
      border: '1px solid var(--pink-200)',
      color: 'var(--pink-600)'
    },
    cyan: {
      background: 'var(--cyan-100)',
      border: '1px solid var(--cyan-200)',
      color: 'var(--cyan-600)'
    },
    green: {
      background: 'var(--green-100)',
      border: '1px solid var(--green-200)',
      color: 'var(--green-600)'
    },
    amber: {
      background: 'var(--amber-100)',
      border: '1px solid var(--amber-200)',
      color: 'var(--amber-600)'
    },
    gray: {
      background: 'var(--surface-2)',
      border: '1px solid var(--border-2)',
      color: 'var(--ink-500)'
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      padding: '5px 12px',
      borderRadius: 'var(--radius-pill)',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-2xs)',
      fontWeight: 'var(--fw-semibold)',
      letterSpacing: 'var(--ls-wide)',
      lineHeight: 1,
      ...tones[tone],
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
 * Button — primary action element for the KTC × FPT Coffee Chat brand.
 * Royal-blue fill is the default; navy, outline and ghost variants cover
 * the rest. Hover lifts 1px with a blue glow on solid variants.
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  arrow = false,
  disabled = false,
  full = false,
  onClick,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      padding: '9px 18px',
      fontSize: '13px'
    },
    md: {
      padding: '11px 24px',
      fontSize: '14px'
    },
    lg: {
      padding: '14px 30px',
      fontSize: '15px'
    }
  };
  const variants = {
    primary: {
      background: 'var(--color-primary)',
      color: 'var(--white)',
      border: '1px solid transparent'
    },
    navy: {
      background: 'var(--navy-800)',
      color: 'var(--white)',
      border: '1px solid transparent'
    },
    accent: {
      background: 'var(--color-accent)',
      color: 'var(--white)',
      border: '1px solid transparent'
    },
    outline: {
      background: 'var(--white)',
      color: 'var(--color-primary)',
      border: '1px solid var(--color-border-strong)'
    },
    ghost: {
      background: 'var(--blue-100)',
      color: 'var(--color-primary)',
      border: '1px solid var(--blue-200)'
    }
  };
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    fontFamily: 'var(--font-body)',
    fontWeight: 'var(--fw-bold)',
    letterSpacing: 'var(--ls-wide)',
    borderRadius: 'var(--radius-sm)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
    width: full ? '100%' : 'auto',
    textDecoration: 'none',
    transition: 'all var(--dur-fast) var(--ease)',
    whiteSpace: 'nowrap',
    ...sizes[size],
    ...variants[variant],
    ...style
  };
  const solid = variant === 'primary' || variant === 'navy' || variant === 'accent';
  const handleEnter = e => {
    if (disabled) return;
    if (variant === 'primary') e.currentTarget.style.background = 'var(--color-primary-hover)';
    if (variant === 'navy') e.currentTarget.style.background = 'var(--navy-700)';
    if (variant === 'accent') e.currentTarget.style.background = 'var(--pink-500)';
    if (variant === 'outline') e.currentTarget.style.background = 'var(--blue-50)';
    if (variant === 'ghost') e.currentTarget.style.background = 'var(--blue-200)';
    if (solid) {
      e.currentTarget.style.transform = 'translateY(-1px)';
      e.currentTarget.style.boxShadow = 'var(--shadow-cta)';
    }
  };
  const handleLeave = e => {
    if (disabled) return;
    e.currentTarget.style.background = variants[variant].background;
    e.currentTarget.style.transform = 'none';
    e.currentTarget.style.boxShadow = 'none';
  };
  const content = /*#__PURE__*/React.createElement(React.Fragment, null, children, arrow && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, "\u2192"));
  const Tag = href ? 'a' : 'button';
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    onClick: disabled ? undefined : onClick,
    onMouseEnter: handleEnter,
    onMouseLeave: handleLeave,
    style: base,
    disabled: !href ? disabled : undefined
  }, rest), content);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/content/JobCard.jsx
try { (() => {
/**
 * JobCard — recruitment JD card for an onsite Korea position.
 * Header (id, title, level) → tags → key info rows → requirements →
 * highlighted benefits box → apply CTA pinned to the bottom.
 */
function JobCard({
  id,
  title,
  level,
  tags = [],
  info = [],
  requirements = [],
  benefits = [],
  ctaLabel = 'Xem chi tiết & Apply',
  href = '#',
  style = {}
}) {
  const handleEnter = e => {
    e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
    e.currentTarget.style.borderColor = 'var(--blue-200)';
    e.currentTarget.style.transform = 'translateY(-2px)';
  };
  const handleLeave = e => {
    e.currentTarget.style.boxShadow = 'none';
    e.currentTarget.style.borderColor = 'var(--color-border)';
    e.currentTarget.style.transform = 'none';
  };
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: handleEnter,
    onMouseLeave: handleLeave,
    style: {
      display: 'flex',
      flexDirection: 'column',
      background: 'var(--white)',
      border: '1px solid var(--color-border)',
      borderRadius: 'var(--radius-xl)',
      padding: 'var(--space-7)',
      transition: 'all var(--dur-normal) var(--ease)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--fs-3xs)',
      fontWeight: 'var(--fw-bold)',
      letterSpacing: '1.5px',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      marginBottom: '10px'
    }
  }, id), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-h3)',
      fontWeight: 'var(--fw-extrabold)',
      color: 'var(--text-heading)',
      lineHeight: 'var(--lh-snug)',
      marginBottom: '6px'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--fs-xs)',
      color: 'var(--color-primary)',
      fontWeight: 'var(--fw-semibold)',
      marginBottom: '16px'
    }
  }, level), tags.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '6px',
      flexWrap: 'wrap',
      marginBottom: '18px'
    }
  }, tags.map((t, i) => /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    key: i,
    tone: t.tone || 'blue'
  }, t.label || t))), info.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
      marginBottom: '20px'
    }
  }, info.map((row, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      fontSize: 'var(--fs-sm)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-2xs)',
      fontWeight: 'var(--fw-semibold)',
      color: 'var(--text-muted)',
      width: '90px',
      flexShrink: 0
    }
  }, row.label), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: row.highlight ? 'var(--fw-bold)' : 'var(--fw-semibold)',
      color: row.highlight ? 'var(--color-success)' : 'var(--ink-800)'
    }
  }, row.value)))), requirements.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: '20px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--fs-2xs)',
      fontWeight: 'var(--fw-bold)',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      marginBottom: '10px'
    }
  }, "Y\xEAu c\u1EA7u ch\xEDnh"), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
      margin: 0,
      padding: 0
    }
  }, requirements.map((r, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      display: 'flex',
      gap: '8px',
      fontSize: 'var(--fs-xs)',
      color: 'var(--text-body)',
      lineHeight: 'var(--lh-normal)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--color-primary)',
      fontWeight: 'var(--fw-bold)',
      flexShrink: 0
    }
  }, "\u2192"), r)))), benefits.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-2)',
      borderRadius: 'var(--radius-sm)',
      padding: '12px 14px',
      marginBottom: '20px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--fs-3xs)',
      fontWeight: 'var(--fw-bold)',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      marginBottom: '8px'
    }
  }, "Quy\u1EC1n l\u1EE3i n\u1ED5i b\u1EADt"), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      display: 'flex',
      flexDirection: 'column',
      gap: '4px',
      margin: 0,
      padding: 0
    }
  }, benefits.map((b, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      display: 'flex',
      gap: '8px',
      fontSize: 'var(--fs-xs)',
      color: 'var(--text-body)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--color-success)',
      fontWeight: 'var(--fw-bold)',
      flexShrink: 0
    }
  }, "\u2713"), b)))), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "primary",
    href: href,
    arrow: true,
    full: true,
    style: {
      marginTop: 'auto'
    }
  }, ctaLabel));
}
Object.assign(__ds_scope, { JobCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/JobCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Icon — gradient duotone "glassy" icon set.
 * A deep brand-blue base shape with a translucent mint→cyan "glass"
 * shape overlaid; where they overlap the colour blends to teal,
 * giving the frosted-glass look. All icons share a 48×48 grid.
 *
 * Names: target · chat · globe · timer · clock · calendar · monitor · users
 */
function Icon({
  name = 'target',
  size = 32,
  style = {},
  ...rest
}) {
  const uid = React.useId().replace(/[:]/g, '');
  const deep = `d${uid}`;
  const glass = `g${uid}`;
  const S = {
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    fill: 'none'
  };
  const gfill = {
    fill: `url(#${glass})`,
    fillOpacity: 0.9
  };
  const dfill = {
    fill: `url(#${deep})`
  };
  const shapes = {
    target: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", _extends({
      cx: "24",
      cy: "24",
      r: "17",
      stroke: `url(#${deep})`,
      strokeWidth: "5"
    }, S)), /*#__PURE__*/React.createElement("circle", _extends({
      cx: "24",
      cy: "24",
      r: "8.5"
    }, gfill))),
    chat: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", _extends({
      x: "17",
      y: "6",
      width: "25",
      height: "19",
      rx: "7"
    }, gfill)), /*#__PURE__*/React.createElement("path", _extends({
      d: "M6 16a6 6 0 0 1 6-6h12a6 6 0 0 1 6 6v8a6 6 0 0 1-6 6h-6l-7 6v-6h-1a4 4 0 0 1-4-4z"
    }, dfill))),
    globe: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", _extends({
      cx: "24",
      cy: "24",
      r: "17"
    }, gfill)), /*#__PURE__*/React.createElement("ellipse", _extends({
      cx: "24",
      cy: "24",
      rx: "7.5",
      ry: "17",
      stroke: `url(#${deep})`,
      strokeWidth: "3"
    }, S)), /*#__PURE__*/React.createElement("path", _extends({
      d: "M8 24h32M10 16h28M10 32h28",
      stroke: `url(#${deep})`,
      strokeWidth: "3"
    }, S))),
    timer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", _extends({
      cx: "24",
      cy: "27",
      r: "15"
    }, gfill)), /*#__PURE__*/React.createElement("rect", _extends({
      x: "20",
      y: "5",
      width: "8",
      height: "5",
      rx: "2"
    }, dfill)), /*#__PURE__*/React.createElement("path", _extends({
      d: "M24 10v3",
      stroke: `url(#${deep})`,
      strokeWidth: "3"
    }, S)), /*#__PURE__*/React.createElement("path", _extends({
      d: "M24 27V18M24 27h7",
      stroke: `url(#${deep})`,
      strokeWidth: "3.4"
    }, S))),
    clock: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", _extends({
      cx: "24",
      cy: "24",
      r: "17"
    }, gfill)), /*#__PURE__*/React.createElement("path", _extends({
      d: "M24 24V14M24 24l7 4",
      stroke: `url(#${deep})`,
      strokeWidth: "3.4"
    }, S))),
    calendar: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", _extends({
      x: "7",
      y: "11",
      width: "34",
      height: "30",
      rx: "6"
    }, gfill)), /*#__PURE__*/React.createElement("path", _extends({
      d: "M7 17a6 6 0 0 1 6-6h22a6 6 0 0 1 6 6v3H7z"
    }, dfill)), /*#__PURE__*/React.createElement("rect", _extends({
      x: "14",
      y: "6",
      width: "4.5",
      height: "9",
      rx: "2.25"
    }, dfill)), /*#__PURE__*/React.createElement("rect", _extends({
      x: "29.5",
      y: "6",
      width: "4.5",
      height: "9",
      rx: "2.25"
    }, dfill)), /*#__PURE__*/React.createElement("rect", _extends({
      x: "14",
      y: "26",
      width: "9",
      height: "9",
      rx: "2.5"
    }, dfill))),
    monitor: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", _extends({
      x: "6",
      y: "8",
      width: "36",
      height: "25",
      rx: "5"
    }, dfill)), /*#__PURE__*/React.createElement("rect", _extends({
      x: "11",
      y: "13",
      width: "20",
      height: "13",
      rx: "2.5"
    }, gfill)), /*#__PURE__*/React.createElement("path", _extends({
      d: "M24 33v6M16 41h16",
      stroke: `url(#${deep})`,
      strokeWidth: "4"
    }, S))),
    users: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", _extends({
      cx: "31",
      cy: "17",
      r: "6.5"
    }, gfill)), /*#__PURE__*/React.createElement("path", _extends({
      d: "M21 41a10 10 0 0 1 20 0z"
    }, gfill)), /*#__PURE__*/React.createElement("circle", _extends({
      cx: "18",
      cy: "18",
      r: "7.5"
    }, dfill)), /*#__PURE__*/React.createElement("path", _extends({
      d: "M6 42a12 12 0 0 1 24 0z"
    }, dfill)))
  };
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: size,
    height: size,
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    style: {
      display: 'block',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: deep,
    x1: "6",
    y1: "6",
    x2: "42",
    y2: "42",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "var(--blue-500)"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "var(--blue-700)"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: glass,
    x1: "10",
    y1: "6",
    x2: "40",
    y2: "42",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#6EE7C7"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#28C2F2"
  }))), shapes[name] || shapes.target);
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const labelStyle = {
  display: 'block',
  fontFamily: 'var(--font-body)',
  fontSize: 'var(--fs-2xs)',
  fontWeight: 'var(--fw-bold)',
  letterSpacing: 'var(--ls-label)',
  textTransform: 'uppercase',
  color: 'var(--text-muted)',
  marginBottom: '6px'
};
const controlStyle = {
  width: '100%',
  background: 'var(--color-bg)',
  border: '1px solid var(--color-border)',
  borderRadius: 'var(--radius-sm)',
  padding: '10px 14px',
  fontFamily: 'var(--font-body)',
  fontSize: 'var(--fs-sm)',
  color: 'var(--ink-800)',
  transition: 'border-color var(--dur-fast), box-shadow var(--dur-fast)',
  appearance: 'none',
  outline: 'none'
};
function applyFocus(e) {
  e.currentTarget.style.borderColor = 'var(--color-primary)';
  e.currentTarget.style.background = 'var(--white)';
  e.currentTarget.style.boxShadow = 'var(--focus-ring)';
}
function clearFocus(e) {
  e.currentTarget.style.borderColor = 'var(--color-border)';
  e.currentTarget.style.background = 'var(--color-bg)';
  e.currentTarget.style.boxShadow = 'none';
}

/**
 * Input — labelled text field. Required fields use a * in the label.
 */
function Input({
  label,
  required = false,
  id,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    style: labelStyle
  }, label, required && ' *'), /*#__PURE__*/React.createElement("input", _extends({
    id: id,
    style: controlStyle,
    onFocus: applyFocus,
    onBlur: clearFocus
  }, rest)));
}
Object.assign(__ds_scope, { Input, fieldLabelStyle: labelStyle, fieldControlStyle: controlStyle, applyFocus, clearFocus });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const chevron = "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='7' viewBox='0 0 12 7'%3E%3Cpath stroke='%236B7280' stroke-width='1.5' fill='none' d='M1 1l5 5 5-5'/%3E%3C/svg%3E\")";

/**
 * Select — labelled dropdown matching Input styling, with a custom chevron.
 * Pass an array of option strings, or children <option> nodes.
 */
function Select({
  label,
  required = false,
  id,
  options,
  placeholder = 'Chọn',
  value,
  style = {},
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    style: __ds_scope.fieldLabelStyle
  }, label, required && ' *'), /*#__PURE__*/React.createElement("select", _extends({
    id: id,
    defaultValue: value !== undefined ? undefined : '',
    value: value,
    style: {
      ...__ds_scope.fieldControlStyle,
      cursor: 'pointer',
      backgroundImage: chevron,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'right 12px center',
      paddingRight: '36px'
    },
    onFocus: __ds_scope.applyFocus,
    onBlur: __ds_scope.clearFocus
  }, rest), placeholder && /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true
  }, placeholder), options ? options.map(o => /*#__PURE__*/React.createElement("option", {
    key: o,
    value: o
  }, o)) : children));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Textarea — labelled multi-line field. Vertically resizable, min 80px.
 */
function Textarea({
  label,
  required = false,
  id,
  rows = 3,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    style: __ds_scope.fieldLabelStyle
  }, label, required && ' *'), /*#__PURE__*/React.createElement("textarea", _extends({
    id: id,
    rows: rows,
    style: {
      ...__ds_scope.fieldControlStyle,
      resize: 'vertical',
      minHeight: '80px',
      lineHeight: 'var(--lh-relaxed)'
    },
    onFocus: __ds_scope.applyFocus,
    onBlur: __ds_scope.clearFocus
  }, rest)));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// sections-bottom.jsx
try { (() => {
/* global React */
const DSc = window.KTCFPTCoffeeChatDesignSystem_4d8682;
const {
  Badge: BadgeC,
  FaqItem: FaqItemC,
  SectionHeading: SectionHeadingC,
  Button: ButtonC
} = DSc;
const SEC = {
  padding: '80px 48px'
};
const INN = {
  maxWidth: 'var(--container)',
  margin: '0 auto'
};
const ASSETc = '../../assets/logos/';

/* ============================ AGENDA ============================ */
const AGENDA = [{
  part: '1. Giới thiệu & Q&A',
  time: 'ICT 14:00 – 14:15',
  dur: '15 phút',
  body: /*#__PURE__*/React.createElement(React.Fragment, null, "KTC gi\u1EDBi thi\u1EC7u ch\u01B0\u01A1ng tr\xECnh. FPT Korea gi\u1EDBi thi\u1EC7u c\xF4ng ty v\xE0 2 v\u1ECB tr\xED onsite.")
}, {
  part: '2. Ứng viên tự giới thiệu',
  time: 'ICT 14:15 – 14:25',
  dur: '10 phút',
  body: /*#__PURE__*/React.createElement(React.Fragment, null, "T\u1EEBng ng\u01B0\u1EDDi tham gia tr\xECnh b\xE0y background, kinh nghi\u1EC7m, l\xFD do mu\u1ED1n onsite H\xE0n ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--navy-800)'
    }
  }), ".")
}, {
  part: '3. Q&A Session',
  time: 'ICT 14:25 – 14:55',
  dur: '30 phút',
  highlight: true,
  body: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--navy-800)'
    }
  }), " \u1EE8ng vi\xEAn \u0111\u1EB7t c\xE2u h\u1ECFi. Doanh nghi\u1EC7p & KTC tr\u1EA3 l\u1EDDi chi ti\u1EBFt: m\xF4i tr\u01B0\u1EDDng l\xE0m vi\u1EC7c, l\u01B0\u01A1ng/benefits, visa, k\u1EF3 v\u1ECDng c\xF4ng vi\u1EC7c.")
}, {
  part: '4. Apply Job',
  time: 'ICT 14:55 – 15:00',
  dur: '5 phút',
  body: /*#__PURE__*/React.createElement(React.Fragment, null, "D\xE0nh cho \u1EE9ng vi\xEAn ch\u01B0a apply \u2014 sau Coffee Chat mu\u1ED1n apply s\u1EBD nh\u1EADn link JD tr\u1EF1c ti\u1EBFp.")
}];
function Agenda() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      ...SEC,
      background: 'var(--surface-2)',
      borderTop: '1px solid var(--color-border)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: INN
  }, /*#__PURE__*/React.createElement(SectionHeadingC, {
    eyebrow: "Ch\u01B0\u01A1ng tr\xECnh",
    title: "60 ph\xFAt \xB7 4 ph\u1EA7n"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '40px',
      borderRadius: 'var(--radius-xl)',
      overflow: 'hidden',
      border: '1px solid var(--color-border)',
      background: 'var(--white)',
      boxShadow: 'var(--shadow-sm)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '180px 150px 1fr',
      background: 'var(--navy-800)'
    }
  }, ['Phần', 'Thời gian', 'Nội dung'].map(h => /*#__PURE__*/React.createElement("div", {
    key: h,
    style: {
      padding: '16px 20px',
      fontSize: 'var(--fs-3xs)',
      fontWeight: 'var(--fw-bold)',
      letterSpacing: '1.5px',
      textTransform: 'uppercase',
      color: 'rgba(255,255,255,0.7)',
      fontFamily: "\"Helvetica Neue\""
    }
  }, h))), AGENDA.map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'grid',
      gridTemplateColumns: '180px 150px 1fr',
      borderTop: '1px solid var(--color-border)',
      background: r.highlight ? 'var(--blue-100)' : 'transparent'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px 20px',
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-sm)',
      fontWeight: 'var(--fw-bold)',
      color: r.highlight ? 'var(--blue-500)' : 'var(--navy-800)',
      borderRight: '1px solid var(--color-border)'
    }
  }, r.part), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px 20px',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-xs)',
      fontWeight: 'var(--fw-semibold)',
      color: 'var(--blue-600)',
      borderRight: '1px solid var(--color-border)'
    }
  }, r.time, /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 400,
      color: 'var(--ink-500)'
    }
  }, "(", r.dur, ")")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px 20px',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-sm)',
      color: 'var(--text-body)',
      lineHeight: 'var(--lh-normal)'
    }
  }, r.body))))));
}

/* ============================ COMPANY ============================ */
function Company() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      ...SEC,
      background: 'var(--white)',
      borderTop: '1px solid var(--color-border)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: INN
  }, /*#__PURE__*/React.createElement(SectionHeadingC, {
    eyebrow: "C\xF4ng ty partner",
    title: "FPT Software Korea"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '40px',
      background: 'var(--color-bg)',
      border: '1px solid var(--color-border)',
      borderRadius: 'var(--radius-2xl)',
      padding: '36px',
      display: 'grid',
      gridTemplateColumns: 'auto 1fr',
      gap: '36px',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '120px',
      height: '96px',
      borderRadius: 'var(--radius-xl)',
      background: 'var(--white)',
      border: '1px solid var(--color-border)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '14px',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: ASSETc + 'fpt-software-korea.png',
    alt: "FPT Software Korea",
    style: {
      width: '100%',
      objectFit: 'contain'
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-h2)',
      fontWeight: 'var(--fw-extrabold)',
      color: 'var(--navy-800)',
      marginBottom: '8px'
    }
  }, "FPT Software Korea"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-body)',
      color: 'var(--text-body)',
      lineHeight: 'var(--lh-relaxed)',
      marginBottom: '20px',
      maxWidth: '600px'
    }
  }, "Th\xE0nh vi\xEAn c\u1EE7a FPT Software \u2014 m\u1ED9t trong nh\u1EEFng c\xF4ng ty IT l\u1EDBn nh\u1EA5t Vi\u1EC7t Nam v\u1EDBi hi\u1EC7n di\u1EC7n t\u1EA1i H\xE0n Qu\u1ED1c. FPT Software Korea cung c\u1EA5p d\u1ECBch v\u1EE5 ph\xE1t tri\u1EC3n ph\u1EA7n m\u1EC1m cho c\xE1c doanh nghi\u1EC7p H\xE0n Qu\u1ED1c, t\u1EADp trung v\xE0o ch\u1EA5t l\u01B0\u1EE3ng k\u1EF9 thu\u1EADt v\xE0 m\xF4i tr\u01B0\u1EDDng l\xE0m vi\u1EC7c \u0111a v\u0103n h\xF3a."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '8px',
      flexWrap: 'wrap',
      marginBottom: '20px'
    }
  }, /*#__PURE__*/React.createElement(BadgeC, {
    tone: "blue"
  }, "Onsite t\u1EA1i H\xE0n"), /*#__PURE__*/React.createElement(BadgeC, {
    tone: "blue"
  }, "Remote available"), /*#__PURE__*/React.createElement(BadgeC, {
    tone: "green"
  }, "H\u1ED7 tr\u1EE3 visa E-7"), /*#__PURE__*/React.createElement(BadgeC, {
    tone: "gray"
  }, "Phi\xEAn d\u1ECBch h\u1ED7 tr\u1EE3")), /*#__PURE__*/React.createElement(ButtonC, {
    variant: "ghost",
    size: "sm",
    href: "https://fptsoftware.kr/",
    arrow: true
  }, "Xem website c\xF4ng ty")))));
}

/* ============================ FAQ ============================ */
const FAQS = [{
  q: 'Không biết tiếng Hàn có tham gia được không?',
  a: 'Hoàn toàn được. Buổi Coffee Chat có KTC hỗ trợ phiên dịch Việt–Hàn real-time. Môi trường làm việc tại FPT Software Korea cũng sử dụng tiếng Anh là ngôn ngữ kỹ thuật chính.'
}, {
  q: 'Chưa apply KTC vẫn tham gia được không?',
  a: 'Được. Bạn có thể tham gia để tìm hiểu trước. Nếu sau buổi bạn muốn tiếp tục, KTC sẽ gửi link JD để bạn apply và bắt đầu quá trình sàng lọc.'
}, {
  q: 'Buổi này có phí không?',
  a: 'Miễn phí hoàn toàn.'
}, {
  q: 'Tôi có thể gửi câu hỏi trước không?',
  a: 'Được — điền vào ô "Câu hỏi muốn hỏi" khi đăng ký. KTC sẽ tổng hợp và gửi cho FPT Software Korea chuẩn bị trước, giúp Q&A session chất lượng hơn.'
}];
function Faq() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      ...SEC,
      background: 'var(--surface-2)',
      borderTop: '1px solid var(--color-border)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: INN
  }, /*#__PURE__*/React.createElement(SectionHeadingC, {
    eyebrow: "C\xE2u h\u1ECFi th\u01B0\u1EDDng g\u1EB7p",
    title: "Tr\u1EA3 l\u1EDDi nhanh"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '40px',
      display: 'flex',
      flexDirection: 'column',
      gap: '10px'
    }
  }, FAQS.map((f, i) => /*#__PURE__*/React.createElement(FaqItemC, {
    key: i,
    q: f.q,
    a: f.a,
    defaultOpen: i === 0
  })))));
}

/* ============================ FOOTER ============================ */
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--navy-800)',
      padding: '40px 48px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-h4)',
      fontWeight: 'var(--fw-extrabold)',
      color: 'rgba(255,255,255,0.85)',
      letterSpacing: '0.5px',
      marginBottom: '12px'
    }
  }, "KTC 2026 \u2014 K-Tech College"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-xs)',
      color: 'rgba(255,255,255,0.45)'
    }
  }, "K\u1EBFt n\u1ED1i nh\xE2n t\xE0i CNTT Vi\u1EC7t Nam v\u1EDBi doanh nghi\u1EC7p H\xE0n Qu\u1ED1c \xB7 ktc2026@likelion.vn"));
}
window.CoffeeChatBot = {
  Agenda,
  Company,
  Faq,
  Footer
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "sections-bottom.jsx", error: String((e && e.message) || e) }); }

// sections-top.jsx
try { (() => {
/* global React */
const {
  useState
} = React;
const DS = window.KTCFPTCoffeeChatDesignSystem_4d8682;
const {
  Button,
  Badge,
  JobCard,
  FaqItem,
  SectionHeading,
  Eyebrow,
  MetaItem,
  FeatureCard,
  Input,
  Select,
  Textarea,
  Icon
} = DS;
const ASSET = '../../assets/logos/';

/* ============================ TOPBAR ============================ */
function Topbar() {
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 100,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 48px',
      height: 'var(--topbar-h)',
      background: 'rgba(255,255,255,0.95)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid var(--color-border)',
      boxShadow: 'var(--shadow-xs)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: ASSET + 'ktc-fpt-lockup.png',
    alt: "KTC 2026 \xD7 FPT Software Korea",
    style: {
      height: '34px'
    }
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    href: "#register"
  }, "\u0110\u0103ng k\xFD ngay"));
}

/* ============================ HERO ============================ */
function Hero() {
  return /*#__PURE__*/React.createElement("section", {
    id: "home",
    style: {
      padding: '72px 48px 80px',
      background: 'var(--grad-hero)',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      width: '100%',
      display: 'grid',
      gridTemplateColumns: '1fr 420px',
      gap: '72px',
      alignItems: 'start',
      position: 'relative',
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '14px',
      marginBottom: '26px'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: ASSET + 'ktc-fpt-lockup.png',
    alt: "KTC \xD7 FPT",
    style: {
      height: '50px'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      background: 'var(--blue-200)',
      border: '1px solid rgba(26,86,219,0.25)',
      borderRadius: 'var(--radius-pill)',
      padding: '5px 14px',
      marginBottom: '20px',
      fontSize: 'var(--fs-2xs)',
      fontWeight: 'var(--fw-bold)',
      letterSpacing: '2px',
      textTransform: 'uppercase',
      color: 'var(--blue-600)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: '6px',
      height: '6px',
      background: 'var(--blue-600)',
      borderRadius: '50%'
    }
  }), "Coffee Chat \xB7 Th\xE1ng 6 \xB7 2026"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-display)',
      fontWeight: 'var(--fw-extrabold)',
      lineHeight: 'var(--lh-tight)',
      color: 'var(--navy-800)',
      marginBottom: '16px',
      letterSpacing: 'var(--ls-tight)'
    },
    "data-comment-anchor": "e15c7e23ce-h1-46-11"
  }, "G\u1EB7p g\u1EE1", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--pink-600)'
    }
  }, "FPT Software"), ' ', /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--blue-600)'
    }
  }, "Korea")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-lead)',
      color: 'var(--text-body)',
      lineHeight: 'var(--lh-relaxed)',
      marginBottom: '32px',
      maxWidth: '480px'
    }
  }, "Bu\u1ED5i trao \u0111\u1ED5i online gi\u1EEFa nh\xE2n t\xE0i CNTT Vi\u1EC7t Nam v\xE0 \u0111\u1EA1i di\u1EC7n FPT Software Korea v\u1EC1 c\xE1c v\u1ECB tr\xED tuy\u1EC3n d\u1EE5ng on-site H\xE0n Qu\u1ED1c. H\u1ECFi th\u1EB3ng \u2014 tr\u1EA3 l\u1EDDi th\u1EADt."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
      marginBottom: '36px'
    }
  }, /*#__PURE__*/React.createElement(MetaItem, {
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "calendar",
      size: 22
    })
  }, "Th\u1EE9 N\u0103m, 19 th\xE1ng 6 n\u0103m 2026"), /*#__PURE__*/React.createElement(MetaItem, {
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "clock",
      size: 22
    })
  }, "14:00 \u2013 15:00 ICT (60 ph\xFAt)"), /*#__PURE__*/React.createElement(MetaItem, {
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "monitor",
      size: 22
    })
  }, "Online \xB7 Zoom"), /*#__PURE__*/React.createElement(MetaItem, {
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "users",
      size: 22
    })
  }, "10\u201320 ng\u01B0\u1EDDi \xB7 Slot c\xF3 h\u1EA1n")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '8px',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "blue"
  }, "Fresher welcome"), /*#__PURE__*/React.createElement(Badge, {
    tone: "blue"
  }, "Experienced dev"), /*#__PURE__*/React.createElement(Badge, {
    tone: "green"
  }, "Phi\xEAn d\u1ECBch Vi\u1EC7t\u2013H\xE0n"), /*#__PURE__*/React.createElement(Badge, {
    tone: "gray"
  }, "Mi\u1EC5n ph\xED"))), /*#__PURE__*/React.createElement(RegisterForm, null)));
}

/* ============================ FORM ============================ */
function RegisterForm() {
  const [done, setDone] = useState(false);
  const [vals, setVals] = useState({
    name: '',
    email: '',
    phone: '',
    exp: '',
    applied: ''
  });
  const set = k => e => setVals(v => ({
    ...v,
    [k]: e.target.value
  }));
  const submit = () => {
    if (!vals.name || !vals.email || !vals.phone || !vals.exp || !vals.applied) {
      alert('Vui lòng điền đầy đủ các trường bắt buộc (*)');
      return;
    }
    if (!vals.email.includes('@')) {
      alert('Email không hợp lệ');
      return;
    }
    setDone(true);
  };
  return /*#__PURE__*/React.createElement("div", {
    id: "register",
    style: {
      background: 'var(--white)',
      border: '1px solid var(--color-border)',
      borderRadius: 'var(--radius-2xl)',
      padding: '32px',
      boxShadow: 'var(--shadow-form)',
      position: 'sticky',
      top: '80px'
    }
  }, done ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: '32px 16px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '48px',
      marginBottom: '16px'
    }
  }, "\uD83C\uDF89"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-h3)',
      fontWeight: 'var(--fw-extrabold)',
      color: 'var(--navy-800)',
      marginBottom: '8px'
    }
  }, "\u0110\u0103ng k\xFD th\xE0nh c\xF4ng!"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-sm)',
      color: 'var(--text-body)',
      lineHeight: 'var(--lh-relaxed)'
    }
  }, "C\u1EA3m \u01A1n b\u1EA1n \u0111\xE3 \u0111\u0103ng k\xFD. Ki\u1EC3m tra email \u0111\u1EC3 nh\u1EADn link Zoom v\xE0 x\xE1c nh\u1EADn l\u1ECBch.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--navy-800)'
    }
  }, "\uD83D\uDCC5 Th\u1EE9 N\u0103m, 19/6 \xB7 14:00 \u2013 15:00 ICT"))) : /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-h4)',
      fontWeight: 'var(--fw-extrabold)',
      color: 'var(--navy-800)',
      marginBottom: '4px'
    }
  }, "\u0110\u0103ng k\xFD tham gia"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-xs)',
      color: 'var(--text-muted)',
      marginBottom: '20px'
    }
  }, "\u0110i\u1EC1n th\xF4ng tin \u0111\u1EC3 gi\u1EEF slot c\u1EE7a b\u1EA1n"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      background: 'var(--amber-100)',
      border: '1px solid var(--amber-200)',
      borderRadius: 'var(--radius-sm)',
      padding: '8px 12px',
      marginBottom: '20px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: '6px',
      height: '6px',
      background: 'var(--amber-500)',
      borderRadius: '50%',
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-2xs)',
      fontWeight: 'var(--fw-semibold)',
      color: 'var(--amber-600)'
    }
  }, "Slot c\xF3 h\u1EA1n \xB7 \u0110\xF3ng khi \u0111\u1EE7 s\u1ED1 l\u01B0\u1EE3ng")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '14px'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "H\u1ECD v\xE0 t\xEAn",
    required: true,
    placeholder: "Nguy\u1EC5n V\u0103n A",
    value: vals.name,
    onChange: set('name')
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '10px'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    required: true,
    type: "email",
    placeholder: "email@example.com",
    value: vals.email,
    onChange: set('email')
  }), /*#__PURE__*/React.createElement(Input, {
    label: "\u0110i\u1EC7n tho\u1EA1i",
    required: true,
    placeholder: "09xx xxx xxx",
    value: vals.phone,
    onChange: set('phone')
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '10px'
    }
  }, /*#__PURE__*/React.createElement(Select, {
    label: "Kinh nghi\u1EC7m",
    required: true,
    options: ['Fresher (dưới 1 năm)', '1–2 năm', '3–5 năm', '5+ năm'],
    value: vals.exp,
    onChange: set('exp')
  }), /*#__PURE__*/React.createElement(Select, {
    label: "\u0110\xE3 apply KTC?",
    required: true,
    options: ['Rồi', 'Chưa'],
    value: vals.applied,
    onChange: set('applied')
  })), /*#__PURE__*/React.createElement(Select, {
    label: "V\u1ECB tr\xED quan t\xE2m",
    options: ['FPT401 – Embedded Software Developer', 'FPT402 – AI/ML Engineer', 'Cả hai']
  }), /*#__PURE__*/React.createElement(Textarea, {
    label: "C\xE2u h\u1ECFi mu\u1ED1n h\u1ECFi t\u1EA1i bu\u1ED5i Chat",
    placeholder: "B\u1EA1n \u0111ang th\u1EAFc m\u1EAFc \u0111i\u1EC1u g\xEC v\u1EC1 onsite H\xE0n?"
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    full: true,
    arrow: true,
    onClick: submit
  }, "\u0110\u0103ng k\xFD gi\u1EEF slot"), /*#__PURE__*/React.createElement("p", {
    style: {
      textAlign: 'center',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-2xs)',
      color: 'var(--text-muted)',
      lineHeight: 'var(--lh-normal)'
    }
  }, "Sau khi \u0111\u0103ng k\xFD, b\u1EA1n s\u1EBD nh\u1EADn email x\xE1c nh\u1EADn v\xE0 link Zoom tham gia."))));
}
window.CoffeeChatTop = {
  Topbar,
  Hero
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "sections-top.jsx", error: String((e && e.message) || e) }); }

// ui_kits/coffee-chat/sections-bottom.jsx
try { (() => {
/* global React */
const DSc = window.KTCFPTCoffeeChatDesignSystem_4d8682;
const {
  Badge: BadgeC,
  FaqItem: FaqItemC,
  SectionHeading: SectionHeadingC,
  Button: ButtonC
} = DSc;
const SEC = {
  padding: '80px 48px'
};
const INN = {
  maxWidth: 'var(--container)',
  margin: '0 auto'
};
const ASSETc = '../../assets/logos/';

/* ============================ AGENDA ============================ */
const AGENDA = [{
  part: '1. Giới thiệu',
  time: '14:00 – 14:15',
  dur: '15 phút',
  body: /*#__PURE__*/React.createElement(React.Fragment, null, "KTC v\xE0 doanh nghi\u1EC7p FPT Software gi\u1EDBi thi\u1EC7u.")
}, {
  part: '2. Làm quen',
  time: '14:15 – 14:25',
  dur: '10 phút',
  body: /*#__PURE__*/React.createElement(React.Fragment, null, "Ng\u01B0\u1EDDi tham gia gi\u1EDBi thi\u1EC7u v\u1EC1 b\u1EA3n th\xE2n.")
}, {
  part: '3. Q&A Session',
  time: '14:25 – 14:55',
  dur: '30 phút',
  highlight: true,
  body: /*#__PURE__*/React.createElement(React.Fragment, null, "\u1EE8ng vi\xEAn \u0111\u1EB7t c\xE2u h\u1ECFi. Doanh nghi\u1EC7p & KTC tr\u1EA3 l\u1EDDi v\xE0 gi\u1EA3i \u0111\xE1p c\xE1c th\u1EAFc m\u1EAFc (m\xF4i tr\u01B0\u1EDDng l\xE0m vi\u1EC7c, l\u01B0\u01A1ng/benefits, visa, k\u1EF3 v\u1ECDng c\xF4ng vi\u1EC7c).")
}, {
  part: '4. Apply vị trí',
  time: '14:55 – 15:00',
  dur: '5 phút',
  body: /*#__PURE__*/React.createElement(React.Fragment, null, "D\xE0nh cho \u1EE9ng vi\xEAn ch\u01B0a apply.")
}];
function Agenda() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      ...SEC,
      background: 'var(--surface-2)',
      borderTop: '1px solid var(--color-border)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: INN
  }, /*#__PURE__*/React.createElement(SectionHeadingC, {
    eyebrow: "Agenda",
    title: "JUNE COFFEE CHAT"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '40px',
      borderRadius: 'var(--radius-xl)',
      overflow: 'hidden',
      border: '1px solid var(--color-border)',
      background: 'var(--white)',
      boxShadow: 'var(--shadow-sm)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '180px 150px 1fr',
      background: 'var(--navy-800)'
    }
  }, ['Phần', 'Thời gian', 'Nội dung'].map(h => /*#__PURE__*/React.createElement("div", {
    key: h,
    style: {
      padding: '16px 20px',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-3xs)',
      fontWeight: 'var(--fw-bold)',
      letterSpacing: '1.5px',
      textTransform: 'uppercase',
      color: 'rgba(255,255,255,0.7)'
    }
  }, h))), AGENDA.map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'grid',
      gridTemplateColumns: '180px 150px 1fr',
      borderTop: '1px solid var(--color-border)',
      background: r.highlight ? 'var(--blue-100)' : 'transparent'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px 20px',
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-sm)',
      fontWeight: 'var(--fw-bold)',
      color: r.highlight ? 'var(--blue-500)' : 'var(--navy-800)',
      borderRight: '1px solid var(--color-border)'
    }
  }, r.part), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px 20px',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-xs)',
      fontWeight: 'var(--fw-semibold)',
      color: 'var(--blue-600)',
      borderRight: '1px solid var(--color-border)'
    }
  }, r.time, /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 400,
      color: 'var(--ink-500)'
    }
  }, "(", r.dur, ")")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px 20px',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-sm)',
      color: 'var(--text-body)',
      lineHeight: 'var(--lh-normal)'
    }
  }, r.body))))));
}

/* ============================ COMPANY ============================ */
function Company() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      ...SEC,
      background: 'var(--white)',
      borderTop: '1px solid var(--color-border)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: INN
  }, /*#__PURE__*/React.createElement(SectionHeadingC, {
    eyebrow: "C\xF4ng ty partner",
    title: "FPT Software Korea"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '40px',
      background: 'var(--color-bg)',
      border: '1px solid var(--color-border)',
      borderRadius: 'var(--radius-2xl)',
      padding: '36px',
      display: 'grid',
      gridTemplateColumns: 'auto 1fr',
      gap: '36px',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '120px',
      height: '96px',
      borderRadius: 'var(--radius-xl)',
      background: 'var(--white)',
      border: '1px solid var(--color-border)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '14px',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: ASSETc + 'fpt-software-korea.png',
    alt: "FPT Software Korea",
    style: {
      width: '100%',
      objectFit: 'contain'
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-h2)',
      fontWeight: 'var(--fw-extrabold)',
      color: 'var(--navy-800)',
      marginBottom: '8px'
    }
  }, "FPT Software Korea"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-body)',
      color: 'var(--text-body)',
      lineHeight: 'var(--lh-relaxed)',
      marginBottom: '20px',
      maxWidth: '600px'
    }
  }, "Th\xE0nh vi\xEAn c\u1EE7a FPT Software \u2014 m\u1ED9t trong nh\u1EEFng c\xF4ng ty IT l\u1EDBn nh\u1EA5t Vi\u1EC7t Nam v\u1EDBi hi\u1EC7n di\u1EC7n t\u1EA1i H\xE0n Qu\u1ED1c. FPT Software Korea cung c\u1EA5p d\u1ECBch v\u1EE5 ph\xE1t tri\u1EC3n ph\u1EA7n m\u1EC1m cho c\xE1c doanh nghi\u1EC7p H\xE0n Qu\u1ED1c, t\u1EADp trung v\xE0o ch\u1EA5t l\u01B0\u1EE3ng k\u1EF9 thu\u1EADt v\xE0 m\xF4i tr\u01B0\u1EDDng l\xE0m vi\u1EC7c \u0111a v\u0103n h\xF3a."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '8px',
      flexWrap: 'wrap',
      marginBottom: '20px'
    }
  }, /*#__PURE__*/React.createElement(BadgeC, {
    tone: "blue"
  }, "Onsite t\u1EA1i H\xE0n")), /*#__PURE__*/React.createElement(ButtonC, {
    variant: "ghost",
    size: "sm",
    href: "https://fptsoftware.kr/",
    arrow: true
  }, "Xem website c\xF4ng ty")))));
}

/* ============================ FAQ ============================ */
const FAQS = [{
  q: 'Không biết tiếng Hàn có tham gia được không?',
  a: 'Hoàn toàn được. Buổi Coffee Chat có KTC hỗ trợ phiên dịch Việt–Hàn real-time. Môi trường làm việc tại FPT Software Korea cũng sử dụng tiếng Anh là ngôn ngữ kỹ thuật chính.'
}, {
  q: 'Chưa apply KTC vẫn tham gia được không?',
  a: 'Được. Bạn có thể tham gia để tìm hiểu trước. Nếu sau buổi bạn muốn tiếp tục, KTC sẽ gửi link JD để bạn apply và bắt đầu quá trình sàng lọc.'
}, {
  q: 'Buổi này có phí không?',
  a: 'Miễn phí hoàn toàn.'
}, {
  q: 'Tôi có thể gửi câu hỏi trước không?',
  a: 'Được — điền vào ô "Câu hỏi muốn hỏi" khi đăng ký. KTC sẽ tổng hợp và gửi cho FPT Software Korea chuẩn bị trước, giúp Q&A session chất lượng hơn.'
}];
function Faq() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      ...SEC,
      background: 'var(--surface-2)',
      borderTop: '1px solid var(--color-border)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: INN
  }, /*#__PURE__*/React.createElement(SectionHeadingC, {
    eyebrow: "C\xE2u h\u1ECFi th\u01B0\u1EDDng g\u1EB7p",
    title: "V\u1EC0 COFFEE CHAT"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '40px',
      display: 'flex',
      flexDirection: 'column',
      gap: '10px'
    }
  }, FAQS.map((f, i) => /*#__PURE__*/React.createElement(FaqItemC, {
    key: i,
    q: f.q,
    a: f.a,
    defaultOpen: i === 0
  })))));
}

/* ============================ FOOTER ============================ */
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--navy-800)',
      padding: '40px 48px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-h4)',
      fontWeight: 'var(--fw-extrabold)',
      color: 'rgba(255,255,255,0.85)',
      letterSpacing: '0.5px',
      marginBottom: '12px'
    }
  }, "KTC 2026 \u2014 K-Tech College"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-xs)',
      color: 'rgba(255,255,255,0.45)'
    }
  }, "K\u1EBFt n\u1ED1i nh\xE2n t\xE0i CNTT Vi\u1EC7t Nam v\u1EDBi doanh nghi\u1EC7p H\xE0n Qu\u1ED1c \xB7 ktc2026@likelion.vn"));
}
window.CoffeeChatBot = {
  Agenda,
  Company,
  Faq,
  Footer
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/coffee-chat/sections-bottom.jsx", error: String((e && e.message) || e) }); }

// ui_kits/coffee-chat/sections-mid.jsx
try { (() => {
/* global React */
const DSb = window.KTCFPTCoffeeChatDesignSystem_4d8682;
const {
  Badge: BadgeB,
  JobCard: JobCardB,
  FaqItem: FaqItemB,
  SectionHeading: SectionHeadingB,
  FeatureCard: FeatureCardB
} = DSb;
/* Defensive: never let a momentarily-missing component blank the whole page. */
const IconM = DSb.Icon || (() => null);
const SECTION = {
  padding: '80px 48px'
};
const INNER = {
  maxWidth: 'var(--container)',
  margin: '0 auto'
};

/* ============================ ABOUT ============================ */
function About() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      ...SECTION,
      background: 'var(--white)',
      borderTop: '1px solid var(--color-border)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...INNER,
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '64px',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(SectionHeadingB, {
    eyebrow: "V\u1EC1 Coffee Chat",
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "Kh\xF4ng ph\u1EA3i webinar.", /*#__PURE__*/React.createElement("br", null), "Kh\xF4ng c\xF3 script."),
    desc: "Coffee Chat l\xE0 bu\u1ED5i g\u1EB7p g\u1EE1 nh\u1ECF gi\u1EEFa IT developer Vi\u1EC7t Nam v\xE0 \u0111\u1EA1i di\u1EC7n FPT Software Korea. B\u1EA1n \u0111\u1EB7t c\xE2u h\u1ECFi th\u1EF1c t\u1EBF, h\u1ECD tr\u1EA3 l\u1EDDi th\u1EB3ng th\u1EAFn. KTC h\u1ED7 tr\u1EE3 phi\xEAn d\u1ECBch Vi\u1EC7t\u2013H\xE0n xuy\xEAn su\u1ED1t."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '16px'
    }
  }, /*#__PURE__*/React.createElement(FeatureCardB, {
    icon: /*#__PURE__*/React.createElement(IconM, {
      name: "target",
      size: 30
    }),
    title: "Nh\u1ECF v\xE0 t\u1EADp trung",
    desc: "10\u201320 ng\u01B0\u1EDDi, kh\xF4ng b\u1ECB m\u1EA5t trong \u0111\xE1m \u0111\xF4ng"
  }), /*#__PURE__*/React.createElement(FeatureCardB, {
    icon: /*#__PURE__*/React.createElement(IconM, {
      name: "chat",
      size: 30
    }),
    title: "H\u1ECFi tr\u1EF1c ti\u1EBFp",
    desc: "Kh\xF4ng qua trung gian, kh\xF4ng c\xE2u tr\u1EA3 l\u1EDDi m\u1EABu"
  }), /*#__PURE__*/React.createElement(FeatureCardB, {
    icon: /*#__PURE__*/React.createElement(IconM, {
      name: "globe",
      size: 30
    }),
    title: "Phi\xEAn d\u1ECBch live",
    desc: "KTC d\u1ECBch Vi\u1EC7t\u2013H\xE0n real-time"
  }), /*#__PURE__*/React.createElement(FeatureCardB, {
    icon: /*#__PURE__*/React.createElement(IconM, {
      name: "timer",
      size: 30
    }),
    title: "60 ph\xFAt",
    desc: "Ng\u1EAFn g\u1ECDn, \u0111\u1EE7 \u0111\u1EC3 hi\u1EC3u v\xE0 quy\u1EBFt \u0111\u1ECBnh"
  }))));
}

/* ============================ JOBS ============================ */
function Jobs() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      ...SECTION,
      background: 'var(--surface-2)',
      borderTop: '1px solid var(--color-border)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: INNER
  }, /*#__PURE__*/React.createElement(SectionHeadingB, {
    eyebrow: "V\u1ECB tr\xED tuy\u1EC3n d\u1EE5ng",
    title: "2 v\u1ECB tr\xED onsite t\u1EA1i H\xE0n Qu\u1ED1c"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '20px',
      marginTop: '40px'
    }
  }, /*#__PURE__*/React.createElement(JobCardB, {
    id: "FPT401",
    title: "Embedded Software Developer",
    level: "Fresher / Junior \xB7 Onsite Korea",
    tags: [{
      label: 'C/C++'
    }, {
      label: 'Automotive'
    }, {
      label: 'ASPICE',
      tone: 'gray'
    }, {
      label: '5 vị trí',
      tone: 'green'
    }],
    info: [{
      label: 'Mức lương',
      value: '2,300,000 KRW/tháng',
      highlight: true
    }, {
      label: 'Hỗ trợ nhà',
      value: 'đến 500,000 KRW/tháng'
    }, {
      label: 'Visa',
      value: 'Hỗ trợ E-7'
    }],
    requirements: ['Tốt nghiệp CNTT, Điện tử, Hệ thống nhúng hoặc tương đương', 'Nền tảng lập trình C/C++, Java hoặc Python', 'Giao tiếp tiếng Anh hoặc tiếng Hàn (bắt buộc)', 'Định hướng Automotive Software / Embedded System'],
    benefits: ['Đào tạo 3–6 tháng về Automotive (có hỗ trợ)', 'Thưởng 2–3 lần/năm', 'Khám sức khỏe định kỳ, trợ cấp đi lại'],
    href: "#register"
  }), /*#__PURE__*/React.createElement(JobCardB, {
    id: "FPT402",
    title: "AI/ML Engineer",
    level: "1+ n\u0103m kinh nghi\u1EC7m \xB7 Onsite Korea",
    tags: [{
      label: 'Python'
    }, {
      label: 'PyTorch / TF'
    }, {
      label: 'MLOps',
      tone: 'gray'
    }, {
      label: 'Hot',
      tone: 'pink'
    }],
    info: [{
      label: 'Mức lương',
      value: '4,000,000 – 6,000,000 KRW',
      highlight: true
    }, {
      label: 'Hỗ trợ nhà',
      value: 'đến 500,000 KRW/tháng'
    }, {
      label: 'Visa',
      value: 'Hỗ trợ E-7'
    }],
    requirements: ['1+ năm kinh nghiệm AI/ML, thành thạo Python', 'Kinh nghiệm TensorFlow, PyTorch hoặc Scikit-learn', 'Triển khai AI model thực tế, REST API / microservice', 'NLP, Computer Vision, GenAI / LLM là lợi thế'],
    benefits: ['Làm việc với dự án AI quy mô lớn tại thị trường Hàn', 'Thưởng 2–3 lần/năm', 'Hỗ trợ giáo dục, CLB nội bộ'],
    href: "#register"
  }))));
}

/* ============================ AUDIENCE ============================ */
function AudienceBlock({
  tag,
  tagTone,
  title,
  desc,
  items,
  accent
}) {
  const theme = {
    blue: {
      bg: 'var(--blue-100)',
      border: 'var(--blue-200)',
      tagBg: 'var(--blue-200)',
      tagFg: 'var(--blue-500)',
      arrow: 'var(--blue-600)'
    },
    pink: {
      bg: 'var(--pink-100)',
      border: 'var(--pink-200)',
      tagBg: 'var(--pink-200)',
      tagFg: 'var(--pink-600)',
      arrow: 'var(--pink-600)'
    },
    amber: {
      bg: 'var(--amber-100)',
      border: 'var(--amber-200)',
      tagBg: 'var(--amber-200)',
      tagFg: 'var(--amber-600)',
      arrow: 'var(--amber-500)'
    }
  }[accent] || {};
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 'var(--radius-xl)',
      padding: '28px',
      background: theme.bg,
      border: `1px solid ${theme.border}`
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-3xs)',
      fontWeight: 'var(--fw-bold)',
      letterSpacing: '1.5px',
      textTransform: 'uppercase',
      padding: '4px 10px',
      borderRadius: 'var(--radius-pill)',
      marginBottom: '16px',
      background: theme.tagBg,
      color: theme.tagFg
    }
  }, tag), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-h3)',
      fontWeight: 'var(--fw-extrabold)',
      color: 'var(--navy-800)',
      marginBottom: '8px'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-sm)',
      color: 'var(--text-body)',
      lineHeight: 'var(--lh-normal)',
      marginBottom: '16px'
    }
  }, desc), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
      margin: 0,
      padding: 0
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      display: 'flex',
      gap: '8px',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-sm)',
      color: 'var(--text-body)',
      lineHeight: 'var(--lh-normal)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: theme.arrow,
      fontWeight: 'var(--fw-bold)',
      flexShrink: 0
    }
  }, "\u2192"), it))));
}
function Audience() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      ...SECTION,
      background: 'var(--white)',
      borderTop: '1px solid var(--color-border)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: INNER
  }, /*#__PURE__*/React.createElement(SectionHeadingB, {
    eyebrow: "Ai n\xEAn tham gia",
    title: "D\xF9 \u0111\xE3 apply hay ch\u01B0a"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '20px',
      marginTop: '40px'
    }
  }, /*#__PURE__*/React.createElement(AudienceBlock, {
    accent: "blue",
    tag: "\u0110\xE3 apply v\u1ECB tr\xED FPT",
    title: "B\u1EA1n \u0111ang trong process",
    desc: "\u0110\xE2y l\xE0 c\u01A1 h\u1ED9i t\xECm hi\u1EC3u s\xE2u h\u01A1n v\u1EC1 FPT Software Korea tr\u01B0\u1EDBc khi ph\u1ECFng v\u1EA5n ch\xEDnh th\u1EE9c.",
    items: ['Hiểu rõ môi trường làm việc thực tế', 'Chuẩn bị câu hỏi tốt hơn cho interview', 'Xác nhận đây có phải công ty phù hợp không']
  }), /*#__PURE__*/React.createElement(AudienceBlock, {
    accent: "pink",
    tag: "Ch\u01B0a apply v\u1ECB tr\xED FPT",
    title: "B\u1EA1n \u0111ang c\xE2n nh\u1EAFc",
    desc: "Tham gia \u0111\u1EC3 hi\u1EC3u th\u1EF1c t\u1EBF tr\u01B0\u1EDBc khi quy\u1EBFt \u0111\u1ECBnh. N\u1EBFu mu\u1ED1n ti\u1EBFp t\u1EE5c, b\u1EA1n s\u1EBD nh\u1EADn link apply ngay t\u1EA1i bu\u1ED5i.",
    items: ['Tham gia không bắt buộc phải apply', 'Nhận link JD + hướng dẫn apply nếu quan tâm', 'KTC hỗ trợ matching nếu bạn phù hợp']
  }))));
}
window.CoffeeChatMid = {
  About,
  Jobs,
  Audience
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/coffee-chat/sections-mid.jsx", error: String((e && e.message) || e) }); }

// ui_kits/coffee-chat/sections-top.jsx
try { (() => {
/* global React */
const {
  useState
} = React;
const DS = window.KTCFPTCoffeeChatDesignSystem_4d8682;
const {
  Button,
  Badge,
  JobCard,
  FaqItem,
  SectionHeading,
  Eyebrow,
  MetaItem,
  FeatureCard,
  Input,
  Select,
  Textarea
} = DS;
/* Defensive: never let a momentarily-missing component blank the whole page. */
const Icon = DS.Icon || (() => null);
const ASSET = '../../assets/logos/';
const IMG = '../../assets/images/';

/* ============================ TOPBAR ============================ */
function Topbar() {
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 100,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 48px',
      height: 'var(--topbar-h)',
      background: 'rgba(255,255,255,0.95)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid var(--color-border)',
      boxShadow: 'var(--shadow-xs)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: ASSET + 'ktc-fpt-lockup.png',
    alt: "KTC 2026 \xD7 FPT Software Korea",
    style: {
      height: '34px'
    }
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    href: "#register"
  }, "\u0110\u0103ng k\xFD ngay"));
}

/* ============================ HERO ============================ */
function Hero() {
  return /*#__PURE__*/React.createElement("section", {
    id: "home",
    style: {
      padding: '72px 48px 80px',
      background: `linear-gradient(rgba(255,255,255,0.35), rgba(255,255,255,0.55)), url(${IMG}hero-bg.jpg) center/cover no-repeat, var(--grad-hero)`,
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: IMG + 'coffee-cup.jpg',
    alt: "",
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      top: '36px',
      left: '-50px',
      width: '420px',
      mixBlendMode: 'multiply',
      opacity: 0.85,
      pointerEvents: 'none',
      zIndex: 0,
      userSelect: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      width: '100%',
      display: 'grid',
      gridTemplateColumns: '1fr 420px',
      gap: '72px',
      alignItems: 'start',
      position: 'relative',
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '14px',
      marginBottom: '26px'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: ASSET + 'ktc-fpt-lockup.png',
    alt: "KTC \xD7 FPT",
    style: {
      height: '50px'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      background: 'var(--blue-200)',
      border: '1px solid rgba(26,86,219,0.25)',
      borderRadius: 'var(--radius-pill)',
      padding: '5px 14px',
      marginBottom: '20px',
      fontSize: 'var(--fs-2xs)',
      fontWeight: 'var(--fw-bold)',
      letterSpacing: '2px',
      textTransform: 'uppercase',
      color: 'var(--blue-600)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: '6px',
      height: '6px',
      background: 'var(--blue-600)',
      borderRadius: '50%'
    }
  }), "Coffee Chat \xB7 Th\xE1ng 6 \xB7 2026"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-display)',
      fontWeight: 'var(--fw-extrabold)',
      lineHeight: 'var(--lh-tight)',
      color: 'var(--navy-800)',
      marginBottom: '16px',
      letterSpacing: 'var(--ls-tight)'
    }
  }, "G\u1EB7p g\u1EE1", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--pink-600)'
    }
  }, "FPT Software"), ' ', /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--blue-600)'
    }
  }, "Korea")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-lead)',
      color: 'var(--text-body)',
      lineHeight: 'var(--lh-relaxed)',
      marginBottom: '32px',
      maxWidth: '480px'
    }
  }, "Bu\u1ED5i trao \u0111\u1ED5i online gi\u1EEFa nh\xE2n t\xE0i CNTT Vi\u1EC7t Nam v\xE0 \u0111\u1EA1i di\u1EC7n FPT Software Korea v\u1EC1 c\xE1c v\u1ECB tr\xED tuy\u1EC3n d\u1EE5ng on-site H\xE0n Qu\u1ED1c. H\u1ECFi th\u1EB3ng \u2014 tr\u1EA3 l\u1EDDi th\u1EADt."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
      marginBottom: '36px'
    }
  }, /*#__PURE__*/React.createElement(MetaItem, {
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "calendar",
      size: 22
    })
  }, "Th\u1EE9 N\u0103m, 19 th\xE1ng 6 n\u0103m 2026"), /*#__PURE__*/React.createElement(MetaItem, {
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "clock",
      size: 22
    })
  }, "14:00 \u2013 15:00 ICT (60 ph\xFAt)"), /*#__PURE__*/React.createElement(MetaItem, {
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "monitor",
      size: 22
    })
  }, "Online \xB7 Zoom"), /*#__PURE__*/React.createElement(MetaItem, {
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "users",
      size: 22
    })
  }, "10\u201320 ng\u01B0\u1EDDi \xB7 Slot c\xF3 h\u1EA1n")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '8px',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "blue"
  }, "Fresher welcome"), /*#__PURE__*/React.createElement(Badge, {
    tone: "blue"
  }, "Experienced dev"), /*#__PURE__*/React.createElement(Badge, {
    tone: "green"
  }, "Phi\xEAn d\u1ECBch Vi\u1EC7t\u2013H\xE0n"), /*#__PURE__*/React.createElement(Badge, {
    tone: "gray"
  }, "Mi\u1EC5n ph\xED"))), /*#__PURE__*/React.createElement(RegisterForm, null)));
}

/* ============================ FORM ============================ */
function RegisterForm() {
  const [done, setDone] = useState(false);
  const [vals, setVals] = useState({
    name: '',
    email: '',
    phone: '',
    exp: '',
    applied: ''
  });
  const set = k => e => setVals(v => ({
    ...v,
    [k]: e.target.value
  }));
  const submit = () => {
    if (!vals.name || !vals.email || !vals.phone || !vals.exp || !vals.applied) {
      alert('Vui lòng điền đầy đủ các trường bắt buộc (*)');
      return;
    }
    if (!vals.email.includes('@')) {
      alert('Email không hợp lệ');
      return;
    }
    setDone(true);
  };
  return /*#__PURE__*/React.createElement("div", {
    id: "register",
    style: {
      background: 'var(--white)',
      border: '1px solid var(--color-border)',
      borderRadius: 'var(--radius-2xl)',
      padding: '32px',
      boxShadow: 'var(--shadow-form)',
      position: 'sticky',
      top: '80px'
    }
  }, done ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: '32px 16px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '48px',
      marginBottom: '16px'
    }
  }, "\uD83C\uDF89"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-h3)',
      fontWeight: 'var(--fw-extrabold)',
      color: 'var(--navy-800)',
      marginBottom: '8px'
    }
  }, "\u0110\u0103ng k\xFD th\xE0nh c\xF4ng!"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-sm)',
      color: 'var(--text-body)',
      lineHeight: 'var(--lh-relaxed)'
    }
  }, "C\u1EA3m \u01A1n b\u1EA1n \u0111\xE3 \u0111\u0103ng k\xFD. Ki\u1EC3m tra email \u0111\u1EC3 nh\u1EADn link Zoom v\xE0 x\xE1c nh\u1EADn l\u1ECBch.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--navy-800)'
    }
  }, "\uD83D\uDCC5 Th\u1EE9 N\u0103m, 19/6 \xB7 14:00 \u2013 15:00 ICT"))) : /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-h4)',
      fontWeight: 'var(--fw-extrabold)',
      color: 'var(--navy-800)',
      marginBottom: '4px'
    }
  }, "\u0110\u0103ng k\xFD tham gia"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-xs)',
      color: 'var(--text-muted)',
      marginBottom: '20px'
    }
  }, "\u0110i\u1EC1n th\xF4ng tin \u0111\u1EC3 gi\u1EEF slot c\u1EE7a b\u1EA1n"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      background: 'var(--amber-100)',
      border: '1px solid var(--amber-200)',
      borderRadius: 'var(--radius-sm)',
      padding: '8px 12px',
      marginBottom: '20px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: '6px',
      height: '6px',
      background: 'var(--amber-500)',
      borderRadius: '50%',
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-2xs)',
      fontWeight: 'var(--fw-semibold)',
      color: 'var(--amber-600)'
    }
  }, "Slot c\xF3 h\u1EA1n \xB7 \u0110\xF3ng khi \u0111\u1EE7 s\u1ED1 l\u01B0\u1EE3ng")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '14px'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "H\u1ECD v\xE0 t\xEAn",
    required: true,
    placeholder: "Nguy\u1EC5n V\u0103n A",
    value: vals.name,
    onChange: set('name')
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '10px'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    required: true,
    type: "email",
    placeholder: "email@example.com",
    value: vals.email,
    onChange: set('email')
  }), /*#__PURE__*/React.createElement(Input, {
    label: "\u0110i\u1EC7n tho\u1EA1i",
    required: true,
    placeholder: "09xx xxx xxx",
    value: vals.phone,
    onChange: set('phone')
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '10px'
    }
  }, /*#__PURE__*/React.createElement(Select, {
    label: "Kinh nghi\u1EC7m",
    required: true,
    options: ['Fresher (dưới 1 năm)', '1–2 năm', '3–5 năm', '5+ năm'],
    value: vals.exp,
    onChange: set('exp')
  }), /*#__PURE__*/React.createElement(Select, {
    label: "\u0110\xE3 apply KTC?",
    required: true,
    options: ['Rồi', 'Chưa'],
    value: vals.applied,
    onChange: set('applied')
  })), /*#__PURE__*/React.createElement(Select, {
    label: "V\u1ECB tr\xED quan t\xE2m",
    options: ['FPT401 – Embedded Software Developer', 'FPT402 – AI/ML Engineer', 'Cả hai']
  }), /*#__PURE__*/React.createElement(Textarea, {
    label: "C\xE2u h\u1ECFi mu\u1ED1n h\u1ECFi t\u1EA1i bu\u1ED5i Chat",
    placeholder: "B\u1EA1n \u0111ang th\u1EAFc m\u1EAFc \u0111i\u1EC1u g\xEC v\u1EC1 onsite H\xE0n?"
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    full: true,
    arrow: true,
    onClick: submit
  }, "\u0110\u0103ng k\xFD gi\u1EEF slot"), /*#__PURE__*/React.createElement("p", {
    style: {
      textAlign: 'center',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-2xs)',
      color: 'var(--text-muted)',
      lineHeight: 'var(--lh-normal)'
    }
  }, "Sau khi \u0111\u0103ng k\xFD, b\u1EA1n s\u1EBD nh\u1EADn email x\xE1c nh\u1EADn v\xE0 link Zoom tham gia."))));
}
window.CoffeeChatTop = {
  Topbar,
  Hero
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/coffee-chat/sections-top.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Card = __ds_scope.Card;

__ds_ns.FeatureCard = __ds_scope.FeatureCard;

__ds_ns.FaqItem = __ds_scope.FaqItem;

__ds_ns.JobCard = __ds_scope.JobCard;

__ds_ns.MetaItem = __ds_scope.MetaItem;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Textarea = __ds_scope.Textarea;

})();
