import classNames from "classnames";
import type { ButtonHTMLAttributes } from "preact";
import "./button.css";

export function Button(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button {...props} className={classNames("button", props.className)} />;
}
