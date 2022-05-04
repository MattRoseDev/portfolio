import { LayoutProps } from "./@types";
import styles from "./Layout.module.css";
import { Header } from "@components/Header";

export function Layout(props: LayoutProps) {
  const { children } = props;

  return (
    <div className={styles.wrapper}>
      <Header />
      {children}
    </div>
  );
}
