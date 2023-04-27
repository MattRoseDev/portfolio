import Link from "next/link";
import { Section, Title, Description } from "@components/Section";
import styles from "./About.module.css";
import { PageUrls } from "src/@enums/pages";
import { SKILLS } from "src/constants";

export function About() {
  return (
    <Section id="about" className={styles.about}>
      <div>
        <Title>About Me</Title>
        <Description className={styles.description}>
          A top-notch Full Stack Engineer with experience under my belt.
          I&apos;m an absolute wizard when it comes to creating and maintaining
          web applications and internal frameworks, with a killer specialization
          in React and Node.js. I thrive on solving complex problems and
          optimizing code like a boss, to deliver slick, efficient, and
          user-friendly applications. My skills are second to none, and my
          team-focused approach means I&apos;m always ready to collaborate and
          take things to the next level.
          <br />
          <br />
          Additionally, I have a passion for playing the piano, engaging in
          games of{" "}
          <a
            className={styles.link}
            target="_blank"
            href="https://chess.com/play/mahdineer"
            rel="noreferrer"
          >
            chess
          </a>{" "}
          and exploring the art of{" "}
          <Link href={PageUrls.PHOTOS} legacyBehavior>
            <a className={styles.link}>photography</a>
          </Link>
          .
          <br />
          <br />
          These are some of the technologies I&apos;ve recently been working
          with:
        </Description>
        <ul className={styles.skills}>
          {SKILLS.map(skill => (
            <li className={styles.skill} key={skill}>
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
