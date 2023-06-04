import type { Image } from "./image";
import type { IconNames } from "@/components/Icon";

export type Project = {
  title: string;
  description: string;
  image: Image;
  tags: string[];
  links: {
    icon: IconNames;
    href: string;
  }[];
};
