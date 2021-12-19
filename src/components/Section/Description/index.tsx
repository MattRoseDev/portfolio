import classNames from "classnames";
import { DescriptionProps } from "../@types";
import styles from "../Section.module.css";

export function Description(props: DescriptionProps) {
  const { children, className } = props;
  const descriptionStyles = classNames(styles.description, className);
  return <p className={descriptionStyles}>{children}</p>;
}
