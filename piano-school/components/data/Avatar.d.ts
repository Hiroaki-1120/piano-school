import * as React from "react";

export interface AvatarProps {
  /** Image URL; when absent shows the name's first character. */
  src?: string;
  name?: string;
  /** Pixel diameter. @default 44 */
  size?: number;
  style?: React.CSSProperties;
}

/** Circular avatar for reviewers and teachers, with initial fallback. */
export function Avatar(props: AvatarProps): JSX.Element;
