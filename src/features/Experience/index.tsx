import { Tab } from "@headlessui/react";
import classNames from "classnames";
import styles from "./Experience.module.css";
import { Section, Title } from "@components/Section";
import { JOBS } from "src/constants";

export function Experience() {
  return (
    <Section id="experience" className={styles.wrapper}>
      <Title>Where I&apos;ve worked</Title>

      <Tab.Group>
        <div className={styles.tabGroup}>
          <Tab.List className={styles.tabList}>
            {JOBS.map(({ company, role }) => (
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
            {JOBS.map(
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
