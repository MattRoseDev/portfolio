import { Tab, Transition } from "@headlessui/react";
import classNames from "classnames";
import { v4 as uuid } from "uuid";
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
            {JOBS.map(({ company }) => (
              <Tab
                key={uuid()}
                className={({ selected }) =>
                  selected
                    ? classNames(styles.tabWrapper, styles.selected)
                    : classNames(styles.tabWrapper)
                }
              >
                <div className={styles.tab}>{company}</div>
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
                  {({ selected }) => (
                    <Transition
                      show={selected}
                      enter={styles.enterTransition}
                      enterFrom={styles.enterFromTransition}
                      enterTo={styles.enterToTransition}
                    >
                      <div className={styles.head}>
                        <div className={styles.role}>{role}</div>
                        {status && (
                          <div className={styles.status}>{status}</div>
                        )}
                        <small className={styles.date}>{date}</small>
                      </div>
                      <div className={styles.descriptions}>
                        {descriptions.map(description => (
                          <div key={uuid()} className={styles.description}>
                            {description}
                          </div>
                        ))}
                      </div>
                      <div className={styles.techStack}>
                        <div>Tech Stack: </div>
                        {techStack.map(t => (
                          <div key={uuid()} className={styles.item}>
                            {t}
                          </div>
                        ))}
                      </div>
                    </Transition>
                  )}
                </Tab.Panel>
              ),
            )}
          </Tab.Panels>
        </div>
      </Tab.Group>
    </Section>
  );
}
