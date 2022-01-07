import Link from "next/link";
import styles from "./Logo.module.css";
import { Icon } from "@components/Icon";
import { PageUrls } from "src/@enums/pages";

export function Logo() {
  return (
    <Link href={PageUrls.HOME}>
      <a className={styles.logo}>
        <Icon name="chevronRight" type="fill" />
        mahdineer
      </a>
    </Link>
  );
}
