import { createElement, SVGAttributes } from "react";
import Camera from "./svg/camera.svg";
import ChevronRight from "./svg/chevron-right.svg";
import Codepen from "./svg/codepen.svg";
import ExternalLink from "./svg/external-link.svg";
import Github from "./svg/github.svg";
import Linkedin from "./svg/linkedin.svg";

export const iconsList = {
  Camera,
  ChevronRight,
  Codepen,
  ExternalLink,
  Github,
  Linkedin,
};

export type IconNames = keyof typeof iconsList;

export interface IconProps extends SVGAttributes<SVGElement> {
  name: IconNames;
  className?: string;
}

export function Icon({ name, className, ...props }: IconProps) {
  const icon = iconsList[name];

  if (!icon) {
    throw Error(`"${name}" is not a valid icon name`);
  }

  return createElement(icon, {
    className,
    role: "icon",
    ...props,
  });
}
