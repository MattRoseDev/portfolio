import styles from "./Contact.module.css";
import { LinkButton } from "@components/Buttons/LinkButton";
import { Section, Description } from "@components/Section";
import { EMAIL } from "src/constants";

export function Contact() {
  return (
    <Section id="contact" className={styles.contact}>
      <div className={styles.title}>Get In Touch</div>
      <Description className={styles.description}>
        Currently, I&apos;m looking for new opportunities. My inbox is always
        open. Whether you have a question or want to say hi, I&apos;ll try my
        best to get back to you!
      </Description>
      <LinkButton className={styles.email} href={EMAIL}>
        Say Hello
      </LinkButton>
    </Section>
  );
}
