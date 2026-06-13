import * as React from "react";

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "style"> {
  /** Field label rendered above the input. */
  label?: string;
  /** Helper text below the field. */
  hint?: string;
  /** Error message — paints the border red and replaces the hint. */
  error?: string;
  /** Leading icon element (e.g. a search/map Lucide icon). */
  iconLeft?: React.ReactNode;
  required?: boolean;
  style?: React.CSSProperties;
}

/**
 * Labeled text input.
 * @startingPoint section="Forms" subtitle="Text field with label, icon, hint & error" viewport="700x140"
 */
export function Input(props: InputProps): JSX.Element;
