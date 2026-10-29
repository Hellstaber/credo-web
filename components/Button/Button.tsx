import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import styles from "./Button.module.css";

type BaseProps = {
  variant?: "primary" | "secondary";
  size?: "small" | "medium";
};

type ButtonProps = BaseProps & ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };
type LinkProps = BaseProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

/** Renders a <button>, or an <a> with the same look when given an href. */
export default function Button(props: ButtonProps | LinkProps) {
  const { variant = "primary", size = "small", className, children, ...rest } = props;
  const classes = [styles.button, styles[variant], styles[size], className]
    .filter(Boolean)
    .join(" ");

  if (rest.href !== undefined) {
    return (
      <a className={classes} {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
