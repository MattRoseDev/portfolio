import styles from "./Home.module.css";
import { SocialList } from "@components/SocialList";
import { About } from "@features/About";
import { Contact } from "@features/Contact";
import { Experience } from "@features/Experience";
import { Hero } from "@features/Hero";

export function Home() {
  return (
    <div className={styles.wrapper}>
      <Hero />
      <About />
      <Experience />
      <Contact />
      <SocialList />
    </div>
  );
}
