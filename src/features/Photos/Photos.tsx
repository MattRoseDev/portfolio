import { CldImage } from "next-cloudinary";
import styles from "./Photos.module.css";
import { Section, Title } from "@/components/Section";
import { IMAGES } from "@/constants/images";

export function Photos() {
  return (
    <Section id="photos" className={styles.photos}>
      <div>
        <Title className={styles.title}>Photos</Title>

        <div className={styles.columns}>
          <div className={styles.column}>
            <CldImage {...IMAGES.PHOTOS.PLANE} className={styles.image} />
            <CldImage {...IMAGES.PHOTOS.CAT} className={styles.image} />
          </div>
          <div className={styles.column}>
            <CldImage {...IMAGES.PHOTOS.LIGHT} className={styles.image} />
            <CldImage {...IMAGES.PHOTOS.CAT_UP} className={styles.image} />
          </div>
          <div className={styles.column}>
            <CldImage {...IMAGES.PHOTOS.WOODS} className={styles.image} />
            <CldImage {...IMAGES.PHOTOS.MOUNTAIN} className={styles.image} />
            <CldImage {...IMAGES.PHOTOS.BRANCHES} className={styles.image} />
          </div>
        </div>
      </div>
    </Section>
  );
}
