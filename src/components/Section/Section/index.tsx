import { SectionProps } from "../@types";
import styles from "../Section.module.css";

export function Section(props: SectionProps) {
  const { children, ...others } = props;
  return (
    <section className={styles.section} {...others}>
      {children}
    </section>
  );
}
