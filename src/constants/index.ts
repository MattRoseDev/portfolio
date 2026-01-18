import { IMAGES } from "./images";
import type { Job } from "@/@types/job";
import type { Project } from "@/@types/project";
import type { Social } from "@/@types/social";

export const EMAIL = "mailto:mattroseinbox@gmail.com";

export const SOCIAL_LIST: Social[] = [
  {
    title: "Github",
    icon: "Github",
    href: "https://github.com/radiomatt",
  },
  {
    title: "Linkedin",
    icon: "Linkedin",
    href: "https://linkedin.com/in/radiomatt",
  },
  {
    title: "Unsplash",
    icon: "Unsplash",
    href: "https://unsplash.com/@mattrose",
  },
  {
    title: "Codepen",
    icon: "Codepen",
    href: "https://codepen.io/mattrose",
  },
];

export const SKILLS: string[] = [
  "React(Next.js)",
  "Typescript",
  "Redux",
  "GraphQL(Apollo)",
  "TailwindCSS",
  "MongoDB/Postgres",
  "Node.js",
  "Docker",
  "Jest",
  "Cypress",
];

export const PROJECTS: Project[] = [
  {
    title: "Weesh",
    description:
      "Text-based social network specialized in making wishes with unique features like reweesh, in-app credit, combinator themes, and ticket service for support.",
    tags: ["React", "Styled-Component", "GraphQL", "Heroku"],
    image: IMAGES.PROJECTS.WEESH,
    links: [
      {
        icon: "ExternalLink",
        href: "https://github.com/radiomatt/weesh-skin",
      },
    ],
  },
  {
    title: "Github Explorer",
    description:
      "Better Github Explorer of the Trending repositories with multi-select searching and filtering interesting projects.",
    tags: ["React", "Github API", "GraphQL", "Heroku"],
    image: IMAGES.PROJECTS.GIT_EXPO,
    links: [
      {
        icon: "ExternalLink",
        href: "https://github.com/radiomatt/gitexpo",
      },
    ],
  },
];

export const JOBS: Job[] = [
  {
    company: "Learned.io",
    role: "Full Stack Engineer",
    labels: ["Full-time"],
    dates: { start: "2022-08-01" },
    techStack: [
      "React.js",
      "Redux",
      "TypeScript",
      "Styled-components",
      "Storybook",
      "Jest",
      "Node.js",
      "MongoDB",
      "GCP",
    ],
    location: {
      flag: "FlagNetherlands",
      address: "Utrecht, The Netherlands",
    },
  },
  {
    company: "Pragmidea LTD",
    role: "Frontend Engineer",
    labels: ["Full-time", "Remote"],
    dates: { start: "2020-09-01", end: "2022-08-01" },
    techStack: [
      "React.js",
      "Next.js",
      "React Query",
      "Typescript",
      "TailwindCSS",
      "Storybook",
      "Jest",
      "Cypress",
      "React Testing Library",
    ],
    location: {
      flag: "FlagEngland",
      address: "London, England",
    },
  },
  {
    company: "Infosaba",
    role: "Full Stack Engineer",
    labels: ["Full-time"],
    dates: { start: "2018-11-01", end: "2020-09-01" },
    techStack: [
      "React.js",
      "Redux",
      "Node.js",
      "MongoDB",
      "Websocket",
      "Apollo GraphQL",
    ],
    location: {
      flag: "FlagIran",
      address: "Tehran, Iran",
    },
  },
  {
    company: "Tabaneh Shahr",
    role: "Frontend Engineer",
    labels: ["Full-time"],
    dates: { start: "2017-11-01", end: "2018-11-01" },
    techStack: ["React.js", "Redux", "Webpack", "Firebase", "Bootstrap"],
    location: {
      flag: "FlagIran",
      address: "Tehran, Iran",
    },
  },
];

export const START_DATE = "2017-11-01";
