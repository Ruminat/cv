import classNames from "classnames";
import type { ComponentChildren } from "preact";
import "./typography.css";

type TextProps = {
  size?: "normal" | "small";
  color?: "primary" | "hint" | "yandex";
};

export function text(children: ComponentChildren, { size = "normal", color = "primary" }: TextProps = {}) {
  return <span className={classNames("text", { [size]: true, [color]: true })}>{children}</span>;
}

export function code(children: ComponentChildren, { size = "normal", color = "primary" }: TextProps = {}) {
  return <code className={classNames("text", { [size]: true, [color]: true })}>{children}</code>;
}

export function Text({ children, ...props }: TextProps & { children: ComponentChildren }) {
  return text(children, props);
}

export function header(children: ComponentChildren) {
  return <h2>{children}</h2>;
}

export function sectionHeader(children: ComponentChildren) {
  return <h3>{children}</h3>;
}

export function bold(children: ComponentChildren, { size = "normal", color = "primary" }: TextProps = {}) {
  return <b className={classNames("text", { [size]: true, [color]: true })}>{children}</b>;
}
