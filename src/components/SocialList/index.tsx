import Link from "next/link";
import styles from "./SocialList.module.css";
import { Icon } from "src/components/Icon";

export function SocialList() {
  const socialList = [
    {
      title: "Github",
      icon: <Icon name="Github" className="w-6" />,
      href: "https://github.com/mahdineer",
    },
    {
      title: "Linkedin",
      icon: <Icon name="Linkedin" className="w-6" />,
      href: "https://www.linkedin.com/in/mahdineer",
    },
    {
      title: "Unsplash",
      icon: <Icon name="Camera" className="w-6" />,
      href: "https://unsplash.com/@mahdineer",
    },
    {
      title: "Codepen",
      icon: <Icon name="Codepen" className="w-6" />,
      href: "https://codepen.io/mahdineer",
    },
  ];

  return (
    <ul className={styles.socialList}>
      {socialList.map(({ title, href, icon }) => (
        <li key={title}>
          <Link href={href}>
            <a className={styles.socialItem} target="_blank">
              {icon}
            </a>
          </Link>
        </li>
      ))}
    </ul>
  );
}
