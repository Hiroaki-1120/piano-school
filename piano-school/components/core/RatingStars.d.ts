import * as React from "react";

export interface RatingStarsProps {
  /** Rating value, e.g. 4.6 */
  value?: number;
  /** @default 5 */
  max?: number;
  /** Star pixel size. @default 18 */
  size?: number;
  /** Show the numeric value beside the stars. @default true */
  showValue?: boolean;
  /** Review count shown as （N件）. */
  count?: number | null;
  style?: React.CSSProperties;
}

/** Honey-colored review rating with fractional fill. */
export function RatingStars(props: RatingStarsProps): JSX.Element;
