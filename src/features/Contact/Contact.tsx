"use client";

import styles from "./Contact.module.css";
import { LinkButton } from "@/components/Buttons/LinkButton";
import { Section, Description } from "@/components/Section";
import { EMAIL } from "@/constants";

export function Contact() {
  return (
    <Section id="contact" className={styles.contact}>
      <div className={styles.title}>Get In Touch</div>
      <Description className={styles.description}>
        My inbox is always open for new opportunities.
      </Description>
      <LinkButton className={styles.email} href={EMAIL}>
        Say Hello
      </LinkButton>
    </Section>
  );
}
