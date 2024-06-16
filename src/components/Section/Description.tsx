"use client";

import classNames from "classnames";
import styles from "./Section.module.css";
import type { DescriptionProps } from "./Section.types";

export function Description(props: DescriptionProps) {
  const { children, className } = props;
  const descriptionStyles = classNames(styles.description, className);
  return <p className={descriptionStyles}>{children}</p>;
}
