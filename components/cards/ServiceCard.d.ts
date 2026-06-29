import * as React from "react";

/**
 * Signature photo-led service card: scrim, gold eyebrow, serif title.
 *
 * @startingPoint section="Cards" subtitle="Photo service card with hover reveal" viewport="320x440"
 */
export interface ServiceCardProps {
  /** Background photograph URL. */
  image: string;
  /** Small uppercase eyebrow (e.g. category). */
  eyebrow?: string;
  /** Serif title. */
  title: React.ReactNode;
  /** Description revealed on hover. */
  description?: string;
  href?: string;
  /** CSS aspect-ratio. @default "3 / 4" */
  ratio?: string;
  style?: React.CSSProperties;
}

export function ServiceCard(props: ServiceCardProps): JSX.Element;
