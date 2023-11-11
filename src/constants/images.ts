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

export const PHOTOS: Record<string, Image> = {
  BRANCHES: {
    src: "photos/branches_tmrmye",
    width: 5184,
    height: 3456,
    alt: "Branches",
  },
  MOUNTAIN: {
    src: "photos/mountain_c6vcqh",
    width: 4032,
    height: 3024,
    alt: "Mountain",
  },
  WOODS: {
    src: "photos/woods_zsogj4",
    width: 5184,
    height: 3456,
    alt: "Woods",
  },
  LIGHT: {
    src: "photos/light_hjsyaz",
    width: 5184,
    height: 3456,
    alt: "Light",
  },
  CAT_UP: {
    src: "photos/cat_up_pmxgah",
    width: 2848,
    height: 3798,
    alt: "Cat",
  },
  CAT: {
    src: "photos/cat_f8xwxn",
    width: 3023,
    height: 3157,
    alt: "Cat",
  },
  PLANE: {
    src: "photos/plane_myg3ib",
    width: 3024,
    height: 4032,
    alt: "Plane",
  },
  TAXI: {
    src: "photos/taxi_xjbypk",
    width: 5184,
    height: 3456,
    alt: "Taxi",
  },
};

export const IMAGES = {
  AVATAR,
  PROJECTS,
  PHOTOS,
};
