"use client";

import classNames from "classnames";
import styles from "./Experience.module.css";
import { Section, Title } from "@/components/Section";
import { JOBS } from "@/constants";
import { formatJobDate } from "@/utils";
import size from "lodash/size";

export function Experience() {
  return (
    <Section id="experience" className={styles.wrapper}>
      <Title className={styles.title}>Work experience</Title>

      <div className={styles.experience}>
        {JOBS.map(({ company, role, labels, dates, techStack }, index) => (
          <div key={`${company}-${role}`} className={styles.section}>
            <div>
              {size(JOBS) - 1 > index && <div className={styles.line} />}
              <div className={styles.circle}>
                <div className={classNames(styles.dot)} />
                {!index && <div className={classNames(styles.ping)} />}
              </div>
            </div>

            <div className={styles.job}>
              <div className={styles.head}>
                <span>
                  <div className={styles.role}>{role}</div>
                  <div className={styles.company}>{company}</div>
                </span>
                <div className={styles.labels}>
                  {!!labels?.length &&
                    labels.map(label => (
                      <div key={label} className={styles.label}>
                        {label}
                      </div>
                    ))}
                </div>
                <small className={styles.date}>{formatJobDate(dates)}</small>
              </div>
              <div className={styles.techStack}>
                <span className={styles.skills}>Skills:</span>
                {techStack.map(t => (
                  <span key={`${company}-${t}`} className={styles.item}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
