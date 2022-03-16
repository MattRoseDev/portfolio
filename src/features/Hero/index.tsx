import styles from "./Hero.module.css";
import { Section } from "@components/Section";

export function Hero() {
  return (
    <Section
      className={styles.hero}
      arrowImageURL="/images/curved-arrow-with-broken-line.png"
      arrowClassName={styles.arrow}
    >
      <h2 className={`${styles.bigHeading} ${styles.highlight}`}>
        <span>Hi, </span>
        <span>I&apos;m Mahdi.</span>
      </h2>
      <h3 className={styles.smallHeading}>Brings ideas to life with code.</h3>
      <p className={styles.description}>
        Full Stack Developer with <strong>+5 years</strong> of experience
        developing complicated applications.
        <br />
        <div>Specializes in React, Node.js and Golang</div>
      </p>
    </Section>
  );
}
