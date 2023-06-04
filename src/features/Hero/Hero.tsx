import { CldImage } from "next-cloudinary";
import styles from "./Hero.module.css";
import { Section } from "@/components/Section";
import { SocialList } from "@/components/SocialList";
import { IMAGES } from "@/constants/images";
import { experienceDuration } from "@/utils";

export function Hero() {
  return (
    <Section id="hero" className={styles.hero}>
      <div className={styles.avatar}>
        <CldImage {...IMAGES.AVATAR} priority />
      </div>
      <h2 className={`${styles.bigHeading} ${styles.highlight}`}>
        <span>Hi, </span>
        <span>I&apos;m Matt.</span>
      </h2>
      <h3 className={styles.smallHeading}>Brings ideas to life with code.</h3>
      <p className={styles.description}>
        Full Stack Engineer with over <strong>{experienceDuration}</strong> of
        experience developing web applications.
      </p>
      <div className="mt-10">
        <SocialList />
      </div>
    </Section>
  );
}
