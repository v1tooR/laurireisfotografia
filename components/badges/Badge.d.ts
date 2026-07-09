import * as React from "react";

/**
 * Small uppercase pill label for categories, status and eyebrows.
 */
export interface BadgeProps {
  children: React.ReactNode;
  /** @default "gold" */
  variant?: "gold" | "gold-outline" | "navy" | "rose" | "slate" | "soft";
  style?: React.CSSProperties;
}

export function Badge(props: BadgeProps): JSX.Element;
