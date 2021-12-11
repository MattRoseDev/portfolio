import { LayoutProps } from "./@types";
import styles from "./Layout.module.css";
import { Navigation } from "@components/Navigation";

export function Layout(props: LayoutProps) {
  const { children } = props;

  return (
    <div className={styles.wrapper}>
      <Navigation />
      {children}
    </div>
  );
}
