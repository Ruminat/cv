import classNames from "classnames";
import type { ButtonHTMLAttributes } from "preact";
import "./button.css";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  icon?: true;
  href?: string;
  target?: string;
};

export function Button({ icon, href, target, ...buttonProps }: Props) {
  const button = <button {...buttonProps} className={classNames("button", buttonProps.className, { icon })} />;

  return href ? (
    <a href={href} target={target}>
      {button}
    </a>
  ) : (
    button
  );
}
