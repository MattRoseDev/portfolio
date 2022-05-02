import { useEffect, useState } from "react";
import { LayoutProps } from "./@types";
import styles from "./Layout.module.css";
import { Header } from "@components/Header";

export function Layout(props: LayoutProps) {
  const { children } = props;
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return (
    <div className={styles.wrapper}>
      <Header />
      {children}
    </div>
  );
}
