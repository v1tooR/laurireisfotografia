import React from "react";

/**
 * ServiceCard — the signature Lauri Reis content card.
 * A photograph with navy scrim, gold eyebrow, serif title and optional
 * description. Lifts gently on hover; image scales inside its frame.
 */
export function ServiceCard({
  image,
  eyebrow,
  title,
  description,
  href = "#",
  ratio = "3 / 4",
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return (
    <a
      href={href}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        position: "relative",
        display: "block",
        aspectRatio: ratio,
        borderRadius: "var(--radius-md)",
        overflow: "hidden",
        textDecoration: "none",
        boxShadow: hover ? "var(--shadow-lg)" : "var(--shadow-md)",
        transform: hover ? "translateY(-4px)" : "translateY(0)",
        transition: "transform var(--dur) var(--ease-out), box-shadow var(--dur) var(--ease-out)",
        ...style,
      }}
      {...rest}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transform: hover ? "scale(1.05)" : "scale(1)",
          transition: "transform var(--dur-slow) var(--ease-out)",
        }}
      />
      <div style={{ position: "absolute", inset: 0, background: "var(--scrim-bottom)" }} />
      {/* gold hairline frame */}
      <div
        style={{
          position: "absolute",
          inset: "12px",
          border: "1px solid rgba(255,255,255,0.28)",
          borderRadius: "2px",
          pointerEvents: "none",
          opacity: hover ? 1 : 0.55,
          transition: "opacity var(--dur) var(--ease-out)",
        }}
      />
      <div style={{ position: "absolute", left: "24px", right: "24px", bottom: "22px" }}>
        {eyebrow && (
          <div
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "11px",
              fontWeight: 600,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--lr-gold)",
              marginBottom: "8px",
            }}
          >
            {eyebrow}
          </div>
        )}
        <div
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "28px",
            fontWeight: 500,
            lineHeight: 1.1,
            color: "var(--lr-white)",
          }}
        >
          {title}
        </div>
        {description && (
          <div
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "13px",
              fontWeight: 300,
              lineHeight: 1.55,
              color: "rgba(255,255,255,0.82)",
              marginTop: "8px",
              maxHeight: hover ? "80px" : "0px",
              opacity: hover ? 1 : 0,
              overflow: "hidden",
              transition: "max-height var(--dur) var(--ease-out), opacity var(--dur) var(--ease-out)",
            }}
          >
            {description}
          </div>
        )}
      </div>
    </a>
  );
}
