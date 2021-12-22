import classNames from "classnames";
import Link from "next/link";
import styles from "../Buttons.module.css";
import { LinkButtonProps } from "./@types";

export function LinkButton(props: LinkButtonProps) {
  const { className, children, href } = props;

  const classes = classNames(styles.button, className);

  return (
    <Link href={href}>
      <a className={classes}>{children}</a>
    </Link>
  );
}
