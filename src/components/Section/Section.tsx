import classNames from "classnames";
import styles from "./Section.module.css";
import type { SectionProps } from "./Section.types";

export function Section(props: SectionProps) {
  const { children, className, ...others } = props;

  return (
    <section {...others} className={classNames(styles.section, className)}>
      {children}
    </section>
  );
}
