import classNames from "classnames";
import styles from "./Section.module.css";
import type { TitleProps } from "./Section.types";

export function Title(props: TitleProps) {
  const { children, className } = props;
  const titleClasses = classNames(styles.title, className);

  return (
    <h2 className={titleClasses}>
      <span>{children}</span>
    </h2>
  );
}
