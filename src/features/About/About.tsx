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
          I have some experience maintaining, developing, testing web
          applications and internal frameworks. Specializes in React and
          Node.js. Additionally, I am capable of solving problems, improving
          performance and efficiency.
          <br />
          <br />
          Also, I love playing piano,{" "}
          <a
            className={styles.link}
            target="_blank"
            href="https://chess.com/play/mahdineer"
            rel="noreferrer"
          >
            chess
          </a>{" "}
          and{" "}
          <Link href={PageUrls.PHOTOS}>
            <a className={styles.link}>photography</a>
          </Link>
          .
          <br />
          <br />
          Here are a few technologies I&apos;ve been working with recently:
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
