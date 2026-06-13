import * as React from "react";

export interface TagProps {
  children?: React.ReactNode;
  /** Selected (active filter) state. @default false */
  selected?: boolean;
  /** Show an × to remove. @default false */
  removable?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onRemove?: (e: React.MouseEvent) => void;
  style?: React.CSSProperties;
}

/** Interactive filter chip — genre / area / feature filters on search. */
export function Tag(props: TagProps): JSX.Element;
