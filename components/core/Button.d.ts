import * as React from "react";

export interface ButtonProps {
  children?: React.ReactNode;
  /** Visual style. @default "primary" */
  variant?: "primary" | "secondary" | "ghost" | "accent";
  /** @default "md" */
  size?: "sm" | "md" | "lg";
  /** Stretch to fill container width. @default false */
  block?: boolean;
  disabled?: boolean;
  /** Element rendered before the label (e.g. a Lucide icon). */
  iconLeft?: React.ReactNode;
  /** Element rendered after the label. */
  iconRight?: React.ReactNode;
  type?: "button" | "submit" | "reset";
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  style?: React.CSSProperties;
}

/**
 * Primary action button for おとなりピアノ.
 * @startingPoint section="Core" subtitle="Clay primary button with variants & sizes" viewport="700x150"
 */
export function Button(props: ButtonProps): JSX.Element;
