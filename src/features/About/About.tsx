"use client";

import Link from "next/link";
import styles from "./About.module.css";
import { PageUrls } from "@/@enums/pages";
import { Section, Title, Description } from "@/components/Section";
import { SKILLS } from "@/constants";
import { experienceDuration } from "@/utils";

export function About() {
  return (
    <Section id="about" className={styles.about}>
      <div>
        <Title>About Me</Title>
        <Description className={styles.description}>
          Top-notch Full Stack Engineer with over{" "}
          <strong>{experienceDuration}</strong> years of experience tackling
          complex software projects. Expertise in React and Node.js, with a deep
          understanding of their ecosystems. Proven ability to collaborate
          effectively and deliver high-quality solutions. Builds clean,
          efficient, and scalable code architectures for optimal performance and
          user experience. Strong problem-solving and analytical skills with a
          keen eye for detail. Consistent track record of successful project
          delivery within deadlines and following best practices.
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
