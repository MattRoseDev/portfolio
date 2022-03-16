import styles from "./About.module.css";
import { Section, Title, Description } from "@components/Section";

export function About() {
  const skills = [
    "React (Next.js)",
    "Tailwind CSS",
    "Node.js",
    "Typescript",
    "GraphQL (Apollo)",
    "Postgres",
    "Golang",
    "Docker",
  ];

  return (
    <Section
      id="about"
      className={styles.about}
      arrowImageURL="/images/rotated-bottom-right-arrow-with-broken-line.png"
      arrowClassName={styles.arrow}
    >
      <Title>About Me</Title>
      <Description className={styles.description}>
        Hello, I&apos;m Mahdi. I love creating and learning new things. I have
        some experience designing, developing, and managing complicated
        applications and internal frameworks. Additionally, I am good at solving
        problems, testing and improving codes.
        <br />
        <br />
        Also, I love playing piano and chess and photography.
        <br />
        <br />
        Here are a few technologies I&apos;ve been working with recently:
      </Description>
      <ul className={styles.skills}>
        {skills.map(skill => (
          <li className={styles.skill} key={skill}>
            {skill}
          </li>
        ))}
      </ul>
    </Section>
  );
}
