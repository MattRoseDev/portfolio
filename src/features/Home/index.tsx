import styles from "./Home.module.css";
import { SocialList } from "@components/SocialList";
import { About } from "@features/About";
import { Hero } from "@features/Hero";

export function Home() {
  return (
    <div className={styles.wrapper}>
      <Hero />
      <About />
      <SocialList />
    </div>
  );
}
