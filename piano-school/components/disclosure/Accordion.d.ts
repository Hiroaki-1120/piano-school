import * as React from "react";

export interface AccordionItem {
  /** Question / summary text. */
  q: string;
  /** Answer / detail body. */
  a: string;
}

export interface AccordionProps {
  items?: AccordionItem[];
  /** Allow several panels open at once. @default true */
  allowMultiple?: boolean;
  /** Indices open on first render. */
  defaultOpen?: number[];
  style?: React.CSSProperties;
}

/** Disclosure list for FAQ-style Q&A. */
export function Accordion(props: AccordionProps): JSX.Element;
