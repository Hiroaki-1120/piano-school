import * as React from "react";

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "style"> {
  label?: string;
  hint?: string;
  /** Options as strings or {value,label} objects. */
  options?: (string | SelectOption)[];
  required?: boolean;
  style?: React.CSSProperties;
}

/** Styled native dropdown — sort order, genre, price range. */
export function Select(props: SelectProps): JSX.Element;
