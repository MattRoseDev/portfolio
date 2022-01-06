import { createElement, SVGAttributes } from "react";

import CameraFill from "./svg/camera-fill.svg";
import Camera from "./svg/camera.svg";
import ChevronRightFill from "./svg/chevron-right-fill.svg";
import ChevronRight from "./svg/chevron-right.svg";
import Codepen from "./svg/codepen.svg";
import GithubFill from "./svg/github-fill.svg";
import Github from "./svg/github.svg";
import LinkedinFill from "./svg/linkedin-fill.svg";
import Linkedin from "./svg/linkedin.svg";

export const iconsList = {
  camera: {
    outline: Camera,
    fill: CameraFill,
  },
  github: {
    outline: Github,
    fill: GithubFill,
  },
  linkedin: {
    outline: Linkedin,
    fill: LinkedinFill,
  },
  codepen: {
    outline: Codepen,
    fill: Codepen,
  },
  chevronRight: {
    outline: ChevronRight,
    fill: ChevronRightFill,
  },
};

export type IconNames = keyof typeof iconsList;

export interface IconProps extends SVGAttributes<SVGElement> {
  name: IconNames;
  className?: string;
  type?: "outline" | "fill";
}

export function Icon({ name, className, type, ...props }: IconProps) {
  const icon = iconsList[name][type || "outline"];

  if (!icon) {
    throw Error(`"${name}" is not a valid icon name`);
  }

  return createElement(icon, {
    className,
    role: "icon",
    ...props,
  });
}
