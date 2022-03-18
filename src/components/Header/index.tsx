import styles from "./Header.module.css";
import { Logo } from "@components/Logo";
import { Navigation } from "@components/Navigation";
import { SocialList } from "@components/SocialList";

export function Header() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <Logo />
        <Navigation />
        <SocialList />
      </div>
    </div>
  );
}
