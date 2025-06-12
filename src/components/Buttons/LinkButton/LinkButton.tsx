"use client";

import Link from "next/link";
import classNames from "classnames";
import styles from "../Buttons.module.css";
import type { LinkButtonProps } from "./LinkButton.types";

export function LinkButton(props: LinkButtonProps) {
  const { className, children, href } = props;

  const classes = classNames(styles.button, className);

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
