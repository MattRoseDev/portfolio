import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section className={styles.hero}>
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
    </section>
  );
}
