import React from "react";

/**
 * Badge — small uppercase label for service categories, status, eyebrows.
 */
export function Badge({ children, variant = "gold", style = {}, ...rest }) {
  const base = {
    display: "inline-flex",
    alignItems: "center",
    gap: "7px",
    fontFamily: "var(--font-body)",
    fontWeight: 600,
    fontSize: "11px",
    letterSpacing: "0.18em",
    textTransform: "uppercase",
    padding: "6px 13px",
    borderRadius: "var(--radius-pill)",
    lineHeight: 1,
    whiteSpace: "nowrap",
  };
  const variants = {
    gold: { background: "var(--lr-gold)", color: "var(--lr-navy-deep)" },
    "gold-outline": { background: "transparent", color: "var(--lr-gold)", border: "1px solid var(--hairline-gold)" },
    navy: { background: "var(--lr-navy-deep)", color: "var(--lr-white)" },
    rose: { background: "var(--lr-rose)", color: "var(--lr-navy-deep)" },
    slate: { background: "var(--lr-slate)", color: "var(--lr-navy-deep)" },
    soft: { background: "rgba(200,168,75,0.14)", color: "var(--lr-gold-deep)" },
  };
  return (
    <span style={{ ...base, ...variants[variant], ...style }} {...rest}>
      {children}
    </span>
  );
}
