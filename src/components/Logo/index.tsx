import Link from "next/link";
import styles from "./Logo.module.css";
import { PageUrls } from "src/@enums/pages";

export function Logo() {
  return (
    <Link href={PageUrls.HOME}>
      <a className={styles.logo}>mahdi.codes</a>
    </Link>
  );
}
