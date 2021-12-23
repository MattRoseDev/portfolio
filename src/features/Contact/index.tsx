import styles from "./Contact.module.css";
import { LinkButton } from "@components/Buttons/LinkButton";
import { Section, Description } from "@components/Section";
import { email } from "src/config";

export function Contact() {
  return (
    <Section id="contact" className={styles.contact}>
      <div className={styles.title}>Get In Touch</div>
      <Description className={styles.description}>
        I&apos;m currently looking for any new opportunities, my inbox is always
        open. Whether you have a question or just want to say hi, I&apos;ll try
        my best to get back to you!
      </Description>
      <LinkButton className={styles.email} href={email}>
        Say Hello
      </LinkButton>
    </Section>
  );
}
