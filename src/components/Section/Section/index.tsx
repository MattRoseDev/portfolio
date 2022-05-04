import classNames from "classnames";
import type { SectionProps } from "../@types";
import styles from "../Section.module.css";

export function Section(props: SectionProps) {
  const { children, className, ...others } = props;

  return (
    <section {...others} className={classNames(styles.section, className)}>
      {children}
    </section>
  );
}
