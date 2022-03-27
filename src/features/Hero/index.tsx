import Image from "next/image";
import styles from "./Hero.module.css";
import { Section } from "@components/Section";
import { SocialList } from "@components/SocialList";

export function Hero() {
  return (
    <Section id="hero" className={styles.hero}>
      <div className={styles.avatar}>
        <Image
          priority
          src="/images/avatars/mahdi.jpg"
          width="100%"
          height="100%"
          alt="Mahdi"
          layout="responsive"
          objectFit="cover"
        />
      </div>
      <h2 className={`${styles.bigHeading} ${styles.highlight}`}>
        <span>Hi, </span>
        <span>I&apos;m Mahdi.</span>
      </h2>
      <h3 className={styles.smallHeading}>Brings ideas to life with code.</h3>
      <p className={styles.description}>
        Full-Stack Developer with <strong>+4 years</strong> of experience
        developing web applications.
      </p>
      <div className="mt-10">
        <SocialList />
      </div>
    </Section>
  );
}
