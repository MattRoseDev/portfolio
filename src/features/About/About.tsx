import Link from "next/link";
import styles from "./About.module.css";
import { PageUrls } from "@/@enums/pages";
import { Section, Title, Description } from "@/components/Section";
import { SKILLS } from "@/constants";

export function About() {
  return (
    <Section id="about" className={styles.about}>
      <div>
        <Title>About Me</Title>
        <Description className={styles.description}>
          Top-notch Full Stack Engineer with over 5 years of hands-on experience
          in developing, testing, and maintaining complex projects. Proficient
          in React and Node.js, with a deep understanding of their respective
          ecosystems. Adept at collaborating with cross-functional teams to
          deliver high-quality software solutions. Skilled in implementing
          efficient and scalable code architectures, ensuring optimal
          performance and user experience. Excellent problem-solving and
          analytical abilities, combined with strong attention to detail. Proven
          track record of successfully delivering projects within deadlines
          while adhering to best practices and industry standards.
          <br />
          <br />
          Additionally, I have a passion for playing the piano, engaging in
          games of{" "}
          <a
            className={styles.link}
            target="_blank"
            href="https://chess.com/play/themattrose"
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
