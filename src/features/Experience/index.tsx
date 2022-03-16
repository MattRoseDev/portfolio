import { Tab } from "@headlessui/react";
import classNames from "classnames";
import styles from "./Experience.module.css";
import { Section, Title } from "@components/Section";
import type { Job } from "./@types";

export function Experience() {
  const jobs: Job[] = [
    {
      company: "PRAGMIDEA LTD",
      role: "Full Stack Developer",
      status: "Full-Time | Remote",
      date: "Sep 2020 – present",
      descriptions: [
        "Worked on several different projects about cryptocurrency.",
        "Replaced Redux with Context API and SWR on a large scale.",
        "Gained more experience in writing integration, e2e, and visual tests.",
        "Developed internal packages with rollup.js (Authentication system).",
      ],
      techStack: [
        "React",
        "Redux",
        "TailwindCSS",
        "Next.js",
        "Cypress",
        "Jest",
      ],
    },
    {
      company: "Weesh",
      role: "Full Stack Developer",
      status: "Personal Project",
      date: "Jan 2020 – Jan 2021",
      descriptions: [
        "Worked on a social network like Twitter.",
        "Designed and Implemented a notification server for all of the actions.",
      ],
      techStack: [
        "React",
        "Node.js",
        "Apollo",
        "GraphQL",
        "MongoDB",
        "Styled-Component",
      ],
    },
    {
      company: "Infosaba",
      role: "Full Stack Developer",
      status: "Full-Time",
      date: "Jun 2018 – Jan 2021",
      descriptions: [
        "An Industrial network with deep data.",
        "Implemented a messenger (direct messages, channels, and groups) for 0.5 million clients.",
        "Achieved better performance by optimizing the structure of the database.",
      ],
      techStack: [
        "React",
        "Redux",
        "Node.js",
        "MongoDB",
        "Websocket",
        "Apollo",
      ],
    },
    {
      company: "Tabaneh Shahr",
      role: "Frontend Developer",
      status: "Full-Time",
      date: "Nov 2017 – Nov 2018",
      descriptions: [
        "The application was a social network for artists.",
        "Developed an internal package for user polls.",
        "Achieved better performance by optimizing the structure of the database.",
      ],
      techStack: ["React", "Redux", "Webpack", "Firebase", "Bootstrap"],
    },
  ];

  return (
    <Section
      id="experience"
      className={styles.wrapper}
      arrowImageURL="/images/rotated-top-right-arrow-with-broken-line.png"
      arrowClassName={styles.arrow}
    >
      <Title>Where I&apos;ve worked</Title>

      <Tab.Group>
        <div className={styles.tabGroup}>
          <Tab.List className={styles.tabList}>
            {jobs.map(({ company, role }) => (
              <Tab
                key={`tab-${company}-${role}`}
                className={({ selected }) =>
                  selected
                    ? classNames(styles.tab, styles.selected)
                    : classNames(styles.tab)
                }
              >
                {company}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels>
            {jobs.map(
              ({ company, role, status, date, descriptions, techStack }) => (
                <Tab.Panel
                  key={`${company}-${role}`}
                  className={styles.tabPanel}
                >
                  <div className={styles.head}>
                    <div className={styles.role}>{role}</div>
                    {status && <div className={styles.status}>{status}</div>}
                    <small className={styles.date}>{date}</small>
                  </div>

                  <div className={styles.descriptions}>
                    {descriptions.map(description => (
                      <div
                        key={description[0] + description[1]}
                        className={styles.description}
                      >
                        {description}
                      </div>
                    ))}
                  </div>
                  <div className={styles.techStack}>
                    <div>Tech Stack: </div>
                    {techStack.map(t => (
                      <div key={t[0] + t[1]} className={styles.item}>
                        {t}
                      </div>
                    ))}
                  </div>
                </Tab.Panel>
              ),
            )}
          </Tab.Panels>
        </div>
      </Tab.Group>
    </Section>
  );
}
