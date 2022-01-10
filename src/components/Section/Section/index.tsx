import classNames from "classnames";
import { SectionProps } from "../@types";
import styles from "../Section.module.css";

export function Section(props: SectionProps) {
  const { children, ...others } = props;
  return (
    <section
      {...others}
      className={classNames(styles.section, others.className)}
    >
      {children}
    </section>
  );
}
