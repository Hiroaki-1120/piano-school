import * as React from "react";

export interface TabItem {
  value: string;
  label: string;
}

export interface TabsProps {
  /** Tabs as strings or {value,label}. */
  tabs?: (string | TabItem)[];
  /** Active tab value. */
  value?: string;
  onChange?: (value: string) => void;
  style?: React.CSSProperties;
}

/** Underline tab bar — sections on the studio detail page. */
export function Tabs(props: TabsProps): JSX.Element;
