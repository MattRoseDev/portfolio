"use client";

import Image from "next/image";
import classNames from "classnames";
import styles from "./Img.module.css";
import type { ImgProps } from "./Img.types";
import { useImg } from "./useImg";
import { Icon } from "@/components/Icon";

export function Img({
  photo: { src, preview, width, height, blurHash },
}: ImgProps) {
  const { isExpanded, onToggle } = useImg();

  return (
    <div
      className={classNames(styles.wrapper, isExpanded && styles.isExpanded)}
    >
      {isExpanded && <div className={styles.overlay} onClick={onToggle} />}
      <div className={classNames(styles.image)}>
        {isExpanded && (
          <button className={styles.close} onClick={onToggle}>
            <Icon name="Close" />
          </button>
        )}
        <Image
          src={false ? src : preview}
          width={width}
          height={height}
          blurDataURL={blurHash}
          onClick={!isExpanded ? onToggle : undefined}
          alt="image"
          placeholder="blur"
        />
      </div>
    </div>
  );
}
