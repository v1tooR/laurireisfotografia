import * as React from "react";

/**
 * Primary action button for Lauri Reis Fotografia.
 *
 * @startingPoint section="Buttons" subtitle="Uppercase tracked action button" viewport="700x120"
 */
export interface ButtonProps {
  children: React.ReactNode;
  /** Visual style. @default "gold" */
  variant?: "gold" | "outline" | "outline-light" | "dark" | "ghost";
  /** @default "md" */
  size?: "sm" | "md" | "lg";
  /** Render as link or button. @default "button" */
  as?: "button" | "a";
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  style?: React.CSSProperties;
}

export function Button(props: ButtonProps): JSX.Element;
