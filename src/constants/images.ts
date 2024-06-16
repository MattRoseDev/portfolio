import type { Image } from "@/@types/image";

export const AVATAR: Image = {
  src: "avatars/matt",
  width: 640,
  height: 640,
  alt: "Matt Rose",
};

export const PROJECTS: Record<string, Image> = {
  WEESH: {
    src: "projects/weesh_o2cyar",
    width: 640,
    height: 480,
    alt: "Weesh",
  },
  GIT_EXPO: {
    src: "projects/gitexpo_mlh8ou",
    width: 640,
    height: 480,
    alt: "Git explorer",
  },
};

export const IMAGES = {
  AVATAR,
  PROJECTS,
};
