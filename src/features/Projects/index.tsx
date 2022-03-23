import Link from "next/link";
import styles from "./Projects.module.css";
import { Icon } from "@components/Icon";
import { Section, Title } from "@components/Section";
import { PROJECTS } from "src/constants";

export function Projects() {
  return (
    <Section id="projects" className={styles.projects}>
      <Title>Projects</Title>
      {PROJECTS.map(({ title, description, tags, links, image }) => (
        <div key={`projects-${title}`} className={styles.project}>
          <div className={styles.imageWrapper}>
            <div className={styles.layer}></div>
            <img src={image} alt={title} className={styles.image} />
          </div>
          <div className={styles.content}>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description}</p>
            <div className={styles.tags}>
              {tags.map(tag => (
                <div key={tag} className={styles.tag}>
                  {tag}
                </div>
              ))}
            </div>
            <div className={styles.links}>
              {links.map(({ icon, href }) => (
                <Link key={`links-${href}`} href={href}>
                  <a className={styles.link} target="_blank">
                    <Icon name={icon} className={styles.icon} />
                  </a>
                </Link>
              ))}
            </div>
          </div>
        </div>
      ))}
    </Section>
  );
}
