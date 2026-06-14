import * as React from "react";

export interface BadgeProps {
  children?: React.ReactNode;
  /** @default "neutral" */
  tone?: "neutral" | "primary" | "accent" | "success" | "info" | "danger";
  /** Filled instead of soft-tinted. @default false */
  solid?: boolean;
  style?: React.CSSProperties;
}

/** Small status pill — "体験あり", "オンライン可", "NEW". */
export function Badge(props: BadgeProps): JSX.Element;
