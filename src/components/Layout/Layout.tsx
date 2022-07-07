import { useEffect, useState } from "react";
import { Header } from "@components/Header";
import styles from "./Layout.module.css";
import type { LayoutProps } from "./Layout.types";

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
