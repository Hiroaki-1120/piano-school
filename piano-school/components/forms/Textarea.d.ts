import * as React from "react";

export interface TextareaProps extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, "style"> {
  label?: string;
  hint?: string;
  error?: string;
  required?: boolean;
  /** @default 4 */
  rows?: number;
  style?: React.CSSProperties;
}

/** Multi-line text field — review bodies, inquiry messages. */
export function Textarea(props: TextareaProps): JSX.Element;
