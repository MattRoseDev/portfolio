"use client";

import { CldImage } from "next-cloudinary";
import Link from "next/link";
import styles from "./Projects.module.css";
import { Icon } from "@/components/Icon";
import { Section, Title } from "@/components/Section";
import { PROJECTS } from "@/constants";

export function Projects() {
  return (
    <Section id="projects" className={styles.projects}>
      <Title>Projects</Title>
      <div className={styles.wrapper}>
        {PROJECTS.map(({ title, description, tags, links, image }) => (
          <div key={`projects-${title}`} className={styles.project}>
            <CldImage {...image} className={styles.image} />
            <div className={styles.info}>
              <div className={styles.content}>
                <h3 className={styles.title}>
                  {title}
                  <div className={styles.links}>
                    {links.map(({ icon, href }) => (
                      <Link
                        key={`links-${href}`}
                        href={href}
                        className={styles.link}
                        target="_blank"
                      >
                        <Icon name={icon} className={styles.icon} />
                      </Link>
                    ))}
                  </div>
                </h3>
                <p className={styles.description}>{description}</p>
              </div>
              <div className={styles.tags}>
                {tags.map(tag => (
                  <div key={tag} className={styles.tag}>
                    {tag}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
