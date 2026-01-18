"use client";

import { createElement, SVGAttributes } from "react";
import ChevronRight from "./svg/chevron-right.svg";
import Close from "./svg/close.svg";
import Codepen from "./svg/codepen.svg";
import ExternalLink from "./svg/external-link.svg";
import Github from "./svg/github.svg";
import Linkedin from "./svg/linkedin.svg";
import Unsplash from "./svg/unsplash.svg";
import FlagEngland from "./svg/flag-england.svg";
import FlagIran from "./svg/flag-iran.svg";
import FlagNetherlands from "./svg/flag-netherlands.svg";

export const iconsList = {
  Unsplash,
  ChevronRight,
  Close,
  Codepen,
  ExternalLink,
  Github,
  Linkedin,
  FlagEngland,
  FlagIran,
  FlagNetherlands,
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
