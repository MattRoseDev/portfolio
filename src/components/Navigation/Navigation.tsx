"use client";

import Link from "next/link";
import classNames from "classnames";
import { useRef } from "react";
import { v4 as uuid } from "uuid";
import { navigationItems } from "./Navigation.constants";
import styles from "./Navigation.module.css";

// TODO: refactor this component
export function Navigation() {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className={styles.wrapper}>
      <div className={classNames(styles.menu, styles.cross)}>
        <input id="menu" ref={inputRef} type="checkbox" />
        <label className={styles.label} htmlFor="menu">
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="30" />
            <path className={styles.line1} d="M0 40h62c13 0 6 28-4 18L35 35" />
            <path className={styles.line2} d="M0 50h70" />
            <path className={styles.line3} d="M0 60h62c13 0 6-28-4-18L35 65" />
          </svg>
        </label>
        <div className={styles.navigation}>
          {navigationItems.map(({ href, title }) => (
            <Link href={href} key={uuid()} legacyBehavior>
              <a
                onClick={() => inputRef.current?.click()}
                className={styles.item}
              >
                {title}
              </a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
