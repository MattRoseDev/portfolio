"use client";

import Link from "next/link";
import classNames from "classnames";
import styles from "./SocialList.module.css";
import type { SocialListProps } from "./SocialList.types";
import { Icon } from "@/components/Icon";
import { SOCIAL_LIST } from "@/constants";

export function SocialList(props: SocialListProps) {
  const { className } = props;
  const socialListClasses = classNames(styles.socialList, className);

  return (
    <ul className={socialListClasses}>
      {SOCIAL_LIST.map(({ title, href, icon }) => (
        <li key={title}>
          <Link href={href} legacyBehavior>
            <a className={styles.socialItem} target="_blank">
              {<Icon name={icon} className="w-6" />}
            </a>
          </Link>
        </li>
      ))}
    </ul>
  );
}
