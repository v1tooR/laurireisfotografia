import React from "react";

/**
 * Field — labelled text input / textarea for Lauri Reis forms.
 * Underline-style input on light surfaces; gold focus line.
 */
export function Field({
  label,
  type = "text",
  textarea = false,
  placeholder,
  value,
  onChange,
  required = false,
  style = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const inputStyle = {
    width: "100%",
    boxSizing: "border-box",
    fontFamily: "var(--font-body)",
    fontSize: "15px",
    fontWeight: 400,
    color: "var(--lr-navy-deep)",
    background: "transparent",
    border: "none",
    borderBottom: `1px solid ${focus ? "var(--lr-gold)" : "var(--border-on-light)"}`,
    padding: "10px 2px",
    outline: "none",
    transition: "border-color var(--dur) var(--ease-out)",
    resize: textarea ? "vertical" : undefined,
    minHeight: textarea ? "96px" : undefined,
  };
  return (
    <label style={{ display: "block", ...style }}>
      <span
        style={{
          display: "block",
          fontSize: "11px",
          fontWeight: 600,
          letterSpacing: "0.16em",
          textTransform: "uppercase",
          color: "var(--lr-ink-400)",
          marginBottom: "4px",
        }}
      >
        {label}
        {required && <span style={{ color: "var(--lr-gold)" }}> *</span>}
      </span>
      {textarea ? (
        <textarea
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          style={inputStyle}
          {...rest}
        />
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          style={inputStyle}
          {...rest}
        />
      )}
    </label>
  );
}
