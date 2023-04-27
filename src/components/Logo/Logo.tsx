import Link from "next/link";
import styles from "./Logo.module.css";
import { PageUrls } from "@/@enums/pages";

export function Logo() {
  return (
    <Link href={PageUrls.HOME} legacyBehavior>
      <a className={styles.logo}>Matt Rose</a>
    </Link>
  );
}
