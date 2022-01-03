import Link from "next/link";
import styles from "./Navigation.module.css";
import { navigationItems } from "./config";

export function Navigation() {
  return (
    <div className={styles.links}>
      {navigationItems.map(({ href, title }) => (
        <Link href={href} key={title}>
          <a className={styles.navItem}>{title}</a>
        </Link>
      ))}
    </div>
  );
}
