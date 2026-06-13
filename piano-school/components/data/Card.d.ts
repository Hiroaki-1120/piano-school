import * as React from "react";

export interface CardProps {
  children?: React.ReactNode;
  /** Adds hover lift + pointer cursor. @default false */
  interactive?: boolean;
  /** CSS padding value. @default "var(--space-6)" */
  padding?: string;
  style?: React.CSSProperties;
}

/** Soft ivory surface container — the base for most content blocks. */
export function Card(props: CardProps): JSX.Element;
