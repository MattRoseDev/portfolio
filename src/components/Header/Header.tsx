import { Logo } from "@components/Logo";
import { Navigation } from "@components/Navigation";
import styles from "./Header.module.css";

export function Header() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <Logo />
        <Navigation />
      </div>
    </div>
  );
}
