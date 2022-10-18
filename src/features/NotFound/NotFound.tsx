import Link from "next/link";
import styles from "./NotFound.module.css";
import { PageUrls } from "src/@enums/pages";

export function NotFound() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>404</div>
      <p className={styles.description}>Page not found</p>
      <Link href={PageUrls.HOME}>
        <a className={styles.back}>Back to Home</a>
      </Link>
    </div>
  );
}
