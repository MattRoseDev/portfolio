import { TitleProps } from "../@types";
import styles from "../Section.module.css";

export function Title(props: TitleProps) {
  const { children } = props;
  return <h2 className={styles.title}>{children}</h2>;
}
