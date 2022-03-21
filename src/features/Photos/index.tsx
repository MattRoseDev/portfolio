import styles from "./Photos.module.css";
import { Section, Title } from "@components/Section";

export function Photos() {
  return (
    <Section id="photos" className={styles.photos}>
      <div>
        <Title className={styles.title}>Photos</Title>

        <div className={styles.columns}>
          <div className={styles.column}>
            <img
              className={styles.image}
              src="/images/photos/plane.jpg"
              alt="Plane"
            />
            <img
              className={styles.image}
              src="/images/photos/cat.jpg"
              alt="Cat"
            />
          </div>
          <div className={styles.column}>
            <img
              className={styles.image}
              src="/images/photos/light.jpg"
              alt="Light"
            />

            <img
              className={styles.image}
              src="/images/photos/cat_up.jpg"
              alt="Cat"
            />
          </div>
          <div className={styles.column}>
            <img
              className={styles.image}
              src="/images/photos/woods.jpg"
              alt="Woods"
            />
            <img
              className={styles.image}
              src="/images/photos/mountain.jpg"
              alt="Mountain"
            />
            <img
              className={styles.image}
              src="/images/photos/branches.jpg"
              alt="Branches"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
