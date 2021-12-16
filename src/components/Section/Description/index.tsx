import { DescriptionProps } from "../@types";
import styles from "../Section.module.css";

export function Description(props: DescriptionProps) {
  const { children } = props;
  return <p className={styles.description}>{children}</p>;
}
