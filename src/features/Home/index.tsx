import styles from "./Home.module.css";
import { About } from "@features/About";
import { Contact } from "@features/Contact";
import { Experience } from "@features/Experience";
import { Hero } from "@features/Hero";
import { Projects } from "@features/Projects";

export function Home() {
  return (
    <div className={styles.wrapper}>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}
