import * as React from "react";

export interface StudioCardProps {
  /** Studio name. */
  name: string;
  /** Area / station line, e.g. "世田谷区・三軒茶屋駅". */
  area: string;
  /** Photo URL; falls back to a branded placeholder. */
  photo?: string;
  /** Rating value 0–5. */
  rating?: number;
  /** Review count. */
  reviews?: number;
  /** Price label, e.g. "8,000円". */
  price?: string;
  /** Feature tags rendered as Badges. */
  tags?: string[];
  favorite?: boolean;
  onFavorite?: () => void;
  onClick?: () => void;
  /** "vertical" (grid) or "horizontal" (list row). @default "vertical" */
  layout?: "vertical" | "horizontal";
  style?: React.CSSProperties;
}

/**
 * The signature listing tile for piano studios.
 * @startingPoint section="Listings" subtitle="Studio listing card with photo, rating, tags & price" viewport="380x420"
 */
export function StudioCard(props: StudioCardProps): JSX.Element;
