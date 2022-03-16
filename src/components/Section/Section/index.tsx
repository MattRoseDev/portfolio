import classNames from "classnames";
import styles from "../Section.module.css";
import type { SectionProps } from "../@types";

export function Section(props: SectionProps) {
  const { children, arrowImageURL, arrowClassName, className, ...others } =
    props;
  const arrowClasses = classNames(styles.arrow, arrowClassName);

  return (
    <section {...others} className={classNames(styles.section, className)}>
      {children}
      {arrowImageURL && <img className={arrowClasses} src={arrowImageURL} />}
    </section>
  );
}
