import React from "react";

/**
 * Button — Lauri Reis Fotografia primary action.
 * Uppercase, wide-tracked Montserrat label. Calm ease-out hover.
 */
export function Button({
  children,
  variant = "gold",
  size = "md",
  as = "button",
  href,
  onClick,
  disabled = false,
  type = "button",
  style = {},
  ...rest
}) {
  const sizes = {
    sm: { padding: "9px 18px", fontSize: "11px" },
    md: { padding: "13px 28px", fontSize: "12px" },
    lg: { padding: "17px 38px", fontSize: "13px" },
  };

  const base = {
    fontFamily: "var(--font-body)",
    fontWeight: 600,
    letterSpacing: "0.18em",
    textTransform: "uppercase",
    borderRadius: "var(--radius-sm)",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.5 : 1,
    border: "1px solid transparent",
    transition: "background var(--dur) var(--ease-out), color var(--dur) var(--ease-out), border-color var(--dur) var(--ease-out), transform var(--dur-fast) var(--ease-out)",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    lineHeight: 1,
    textDecoration: "none",
    whiteSpace: "nowrap",
    ...sizes[size],
  };

  const variants = {
    gold: { background: "var(--lr-gold)", color: "var(--lr-navy-deep)" },
    outline: { background: "transparent", color: "var(--lr-gold)", borderColor: "var(--hairline-gold)" },
    "outline-light": { background: "transparent", color: "var(--lr-white)", borderColor: "rgba(255,255,255,0.4)" },
    dark: { background: "var(--lr-navy-deep)", color: "var(--lr-white)" },
    ghost: { background: "transparent", color: "var(--lr-navy-deep)", borderColor: "var(--border-on-light)" },
  };

  const [hover, setHover] = React.useState(false);
  const hoverStyles = {
    gold: { background: "var(--lr-gold-deep)", color: "var(--lr-white)" },
    outline: { background: "var(--lr-gold)", color: "var(--lr-navy-deep)", borderColor: "var(--lr-gold)" },
    "outline-light": { background: "var(--lr-white)", color: "var(--lr-navy-deep)", borderColor: "var(--lr-white)" },
    dark: { background: "var(--lr-navy)", color: "var(--lr-white)" },
    ghost: { background: "var(--lr-navy-deep)", color: "var(--lr-white)", borderColor: "var(--lr-navy-deep)" },
  };

  const composed = {
    ...base,
    ...variants[variant],
    ...(hover && !disabled ? hoverStyles[variant] : {}),
    ...style,
  };

  const Tag = as === "a" || href ? "a" : "button";
  const tagProps = Tag === "a" ? { href } : { type, disabled };

  return (
    <Tag
      {...tagProps}
      onClick={disabled ? undefined : onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={composed}
      {...rest}
    >
      {children}
    </Tag>
  );
}
