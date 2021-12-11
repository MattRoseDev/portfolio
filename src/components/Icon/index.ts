import classNames from "classnames";
import { createElement, SVGAttributes } from "react";

import GithubFill from "./svg/github-fill.svg";
import Github from "./svg/github.svg";
import LinkedinFill from "./svg/linkedin-fill.svg";
import Linkedin from "./svg/linkedin.svg";

export const iconsList = {
  github: {
    outline: Github,
    fill: GithubFill,
  },
  linkedin: {
    outline: Linkedin,
    fill: LinkedinFill,
  },
};

export type IconNames = keyof typeof iconsList;

export interface IconProps extends SVGAttributes<SVGElement> {
  name: IconNames;
  className?: string;
  type?: "outline" | "fill";
}

export function Icon({ name, className, type, ...props }: IconProps) {
  const classes = classNames({
    icon: true,
  });

  const icon = iconsList[name][type || "outline"];

  if (!icon) {
    throw Error(`"${name}" is not a valid icon name`);
  }

  return createElement(icon, {
    className: `${classes} ${className}`,
    role: "icon",
    ...props,
  });
}
