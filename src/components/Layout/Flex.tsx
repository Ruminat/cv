import classNames from "classnames";
import type { CSSProperties } from "preact";
import type { AdaptiveProp, BoxProps, MediaPartial, Space } from "./definitions";
import "./style.css";

const spaceBaseSize = 4;

export interface FlexProps extends BoxProps {
  style?: CSSProperties;
  direction?: AdaptiveProp<"flexDirection">;
  grow?: true | CSSProperties["flexGrow"];
  basis?: CSSProperties["flexBasis"];
  shrink?: CSSProperties["flexShrink"];
  alignContent?: AdaptiveProp<"justifyContent">;
  alignItems?: AdaptiveProp<"alignItems">;
  alignSelf?: AdaptiveProp<"alignSelf">;
  justifyContent?: AdaptiveProp<"justifyContent">;
  justifyItems?: AdaptiveProp<"justifyItems">;
  justifySelf?: AdaptiveProp<"justifySelf">;
  centerContent?: true;
  wrap?: true | CSSProperties["flexWrap"];
  inline?: boolean;
  gap?: Space | MediaPartial<Space>;
  gapRow?: Space | MediaPartial<Space>;
  space?: Space | MediaPartial<Space>;
}

export function Flex(props: FlexProps) {
  const {
    direction = "row",
    grow,
    basis,
    children,
    style,
    alignContent,
    alignItems,
    alignSelf,
    justifyContent,
    justifyItems,
    justifySelf,
    shrink,
    wrap,
    inline,
    gap,
    gapRow,
    className,
    space,
    centerContent,
    ...restProps
  } = props;

  const columnGap = typeof gap === "undefined" ? undefined : spaceBaseSize * Number(gap);

  const gapRowSpaceSize = gapRow || gap;
  const rowGap = typeof gapRowSpaceSize === "undefined" ? undefined : spaceBaseSize * Number(gapRowSpaceSize);

  return (
    <div
      className={classNames("flex", { "center-content": centerContent, inline }, className)}
      style={{
        flexDirection: direction,
        flexGrow: grow === true ? 1 : grow,
        flexWrap: wrap === true ? "wrap" : wrap,
        flexBasis: basis,
        flexShrink: shrink,
        columnGap,
        rowGap: rowGap,
        alignContent,
        alignItems,
        alignSelf,
        justifyContent,
        justifyItems,
        justifySelf,
        ...style,
      }}
      {...restProps}
    >
      {children}
    </div>
  );
}
