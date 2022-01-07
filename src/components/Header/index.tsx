import styles from "./Header.module.css";
import { Logo } from "@components/Logo";
import { Navigation } from "@components/Navigation";

export function Header() {
  return (
    <div className={styles.header}>
      <Logo />
      <Navigation />
    </div>
  );
}
