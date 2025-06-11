"use client";

import Link from "next/link";
import styles from "./Logo.module.css";
import { PageUrls } from "@/@enums/pages";

export function Logo() {
  return (
    <Link href={PageUrls.HOME} className={styles.logo}>
      Matt Rose
    </Link>
  );
}
