import Image from "next/image";
import styles from "./Hero.module.css";
import { Section } from "@components/Section";

export function Hero() {
  return (
    <Section className={styles.hero}>
      <div className={styles.avatar}>
        <Image
          priority
          src="/images/avatars/mahdi.jpg"
          width="256"
          height="256"
        />
      </div>
      <h2 className={`${styles.bigHeading} ${styles.highlight}`}>
        <span>Hi, </span>
        <span>I&apos;m Mahdi.</span>
      </h2>
      <h3 className={styles.smallHeading}>Brings ideas to life with code.</h3>
      <p className={styles.description}>
        Full Stack Developer with <strong>+5 years</strong> of experience
        developing complicated applications.
      </p>
    </Section>
  );
}
