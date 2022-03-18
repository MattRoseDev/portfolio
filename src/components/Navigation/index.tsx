import Link from "next/link";
import styles from "./Navigation.module.css";
import { navigationItems } from "./config";

export function Navigation() {
  return (
    <div className={styles.navigation}>
      {navigationItems.map(({ href, title }) => (
        <Link href={href} key={title}>
          <a className={styles.item}>{title}</a>
        </Link>
      ))}
    </div>
  );
}
