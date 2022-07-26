import classNames from "classnames";
import { v4 as uuid } from "uuid";
import { Tab, Transition } from "@headlessui/react";
import { Section, Title } from "@components/Section";
import styles from "./Experience.module.css";
import { JOBS } from "src/constants";
import { formatJobDate } from "src/utils";

export function Experience() {
  return (
    <Section id="experience" className={styles.wrapper}>
      <Title>Where I&apos;ve worked</Title>

      <Tab.Group>
        <div className={styles.tabGroup}>
          <Tab.List className={styles.tabList}>
            {JOBS.map(({ company, role }) => (
              <Tab
                key={uuid()}
                className={({ selected }) =>
                  selected
                    ? classNames(styles.tabWrapper, styles.selected)
                    : classNames(styles.tabWrapper)
                }
              >
                <span className={styles.tab}>
                  <span>{company}</span>
                  <span className={styles.role}>{role}</span>
                </span>
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels>
            {JOBS.map(
              ({ company, role, labels, dates, descriptions, techStack }) => (
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
                        <div className={styles.labels}>
                          {!!labels?.length &&
                            labels.map(label => (
                              <div key={label} className={styles.label}>
                                {label}
                              </div>
                            ))}
                        </div>
                        <small className={styles.date}>
                          {formatJobDate(dates)}
                        </small>
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
