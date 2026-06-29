import * as React from "react";

/**
 * Labelled underline text input / textarea for booking & contact forms.
 */
export interface FieldProps {
  /** Uppercase field label. */
  label: string;
  type?: string;
  /** Render a multi-line textarea. @default false */
  textarea?: boolean;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  required?: boolean;
  style?: React.CSSProperties;
}

export function Field(props: FieldProps): JSX.Element;
