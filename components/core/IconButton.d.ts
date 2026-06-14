import * as React from "react";

export interface IconButtonProps {
  /** The icon element (e.g. a Lucide <i> or inline SVG). */
  children?: React.ReactNode;
  /** Accessible label — also shown as tooltip. */
  label: string;
  /** @default "ghost" */
  variant?: "ghost" | "solid" | "outline";
  /** @default "md" */
  size?: "sm" | "md" | "lg";
  /** @default "circle" */
  shape?: "circle" | "rounded";
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  style?: React.CSSProperties;
}

/** Icon-only button — favorite toggles, share, close, pager arrows. */
export function IconButton(props: IconButtonProps): JSX.Element;
