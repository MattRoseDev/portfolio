import styles from "./Home.module.css";
import { SocialList } from "@components/SocialList";
import { Hero } from "@features/Hero";

export function Home() {
  return (
    <div className={styles.wrapper}>
      <Hero />
      <SocialList />
    </div>
  );
}
