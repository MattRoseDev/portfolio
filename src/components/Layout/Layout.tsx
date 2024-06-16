"use client";

import { useEffect, useState } from "react";
import styles from "./Layout.module.css";
import type { LayoutProps } from "./Layout.types";
import { Header } from "@/components/Header";

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
