"use client";

import styles from "./Photos.module.css";
import { usePhotos } from "./usePhotos";
import { Img } from "@/components/Img";
import { Section, Title } from "@/components/Section";

export function Photos() {
  const { photos } = usePhotos();

  return (
    <Section id="photos" className={styles.photos}>
      <div>
        <Title className={styles.title}>Photos</Title>

        <div className={styles.columns}>
          {photos?.map((column, index) => (
            <div key={`column-${index}`} className={styles.column}>
              {column.map(photo => (
                <Img key={photo.id} photo={photo} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
