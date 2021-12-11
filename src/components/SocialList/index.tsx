import Link from "next/link";
import styles from "./SocialList.module.css";
import { Icon } from "src/components/Icon";

export function SocialList() {
  const socialList = [
    {
      title: "Github",
      icon: <Icon name="github" className="h-6" />,
      href: "https://github.com/favecode",
    },
    {
      title: "Linkedin",
      icon: <Icon name="linkedin" className="h-6" />,
      href: "https://www.linkedin.com/in/mahdi-rostamzadeh/",
    },
  ];

  return (
    <ul className={styles.socialList}>
      {socialList.map(({ title, href, icon }) => (
        <li className={styles.socialItem} key={title}>
          <Link href={href}>{icon}</Link>
        </li>
      ))}
    </ul>
  );
}
