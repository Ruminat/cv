import type { ComponentChildren, CSSProperties } from "preact";

export type Space = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export type MediaType = "xs" | "s" | "m" | "l" | "xl" | "xxl" | "xxxl";

export type MediaProps<T> = Record<MediaType, T>;

//  | MediaPartial<CSSProperties[T]>
export type AdaptiveProp<T extends keyof CSSProperties> = CSSProperties[T];

export type MediaPartial<T> = Partial<MediaProps<T>>;

export type WithMedia<T extends {}> = T & { media?: MediaPartial<Partial<T>> };

export interface SpacingProps {
  /**
   * margin-right
   */
  mr?: Space;
  /**
   * margin-left
   */
  ml?: Space;
  /**
   * margin-top
   */
  mt?: Space;
  /**
   * margin-bottom
   */
  mb?: Space;
  /**
   * margin-left
   * margin-right
   */
  mx?: Space;
  /**
   * margin-top
   * margin-bottom
   */
  my?: Space;
  /**
   * margin
   */
  m?: Space;
  /**
   * padding-right
   */
  pr?: Space;
  /**
   * padding-left
   */
  pl?: Space;
  /**
   * padding-top
   */
  pt?: Space;
  /**
   * padding-bottom
   */
  pb?: Space;
  /**
   * padding-left
   * padding-right
   */
  px?: Space;
  /**
   * padding-top
   * padding-bottom
   */
  py?: Space;
  /**
   * padding
   */
  p?: Space;
}

export type CommonProps = Partial<{
  space: Space;
  spaceRow: Space;
}>;

export type ContainerConfigProps = Partial<{
  gutters: Space;
  spaceRow: Space;
}>;

export interface IsMediaActive {
  (toCheck: MediaType): boolean;
}

export interface BoxProps
  extends Pick<CSSProperties, "width" | "height" | "maxHeight" | "maxWidth" | "minHeight" | "minWidth" | "position"> {
  children?: ComponentChildren;
  overflow?: "hidden" | "x" | "y" | "auto";
  className?: string;
  spacing?: SpacingProps;
}
