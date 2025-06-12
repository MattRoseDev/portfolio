"use client";

import Link from "next/link";
import styles from "./NotFound.module.css";
import { PageUrls } from "@/@enums/pages";

export function NotFound() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>404</div>
      <p className={styles.description}>Page not found</p>
      <Link href={PageUrls.HOME} className={styles.back}>
        Back to Home
      </Link>
    </div>
  );
}
