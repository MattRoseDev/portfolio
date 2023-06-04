import { IMAGES } from "./images";
import type { Job } from "@/@types/job";
import type { Project } from "@/@types/project";
import type { Social } from "@/@types/social";

export const EMAIL = "mailto:mattroseinbox@gmail.com";

export const SOCIAL_LIST: Social[] = [
  {
    title: "Github",
    icon: "Github",
    href: "https://github.com/themattrose",
  },
  {
    title: "Linkedin",
    icon: "Linkedin",
    href: "https://linkedin.com/in/themattrose",
  },
  {
    title: "Unsplash",
    icon: "Unsplash",
    href: "https://unsplash.com/@themattrose",
  },
  {
    title: "Codepen",
    icon: "Codepen",
    href: "https://codepen.io/themattrose",
  },
];

export const SKILLS: string[] = [
  "React (Next.js)",
  "Typescript",
  "GraphQL (Apollo)",
  "Tailwind CSS",
  "Postgres",
  "Node.js",
  "Golang",
  "Docker",
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
        href: "https://github.com/themattrose/weesh-skin",
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
        href: "https://github.com/themattrose/gitexpo",
      },
    ],
  },
];

export const JOBS: Job[] = [
  {
    company: "Learned.io",
    role: "Full Stack Engineer",
    labels: ["Full-time", "🇳🇱 Utrecht"],
    dates: { start: "2022-08-01" },
    descriptions: [
      "Enhanced the usage of TypeScript throughout the codebase, resulting in improved type safety and more maintainable code.",
      "Developed a RESTful API using Nodejs and Express, allowing for easy integration with other services and platforms.",
      "Worked collaboratively with the UI and QA teams to identify and resolve issues, prioritize tasks, and deliver high-quality software products.",
    ],
    techStack: ["React.js", "Node.js", "MongoDB", "TypeScript"],
  },
  {
    company: "Pragmidea LTD",
    role: "Full Stack Engineer",
    labels: ["Full-time", "🏴󠁧󠁢󠁥󠁮󠁧󠁿 London", "Remote"],
    dates: { start: "2020-09-01", end: "2022-08-01" },
    descriptions: [
      "Created web applications that utilize cryptocurrency.",
      "Substituted Redux with SWR and Context API.",
      "Acquired proficiency in composing integration, end-to-end, and visual tests.",
      "Developed in-house packages for the Authentication system using rollup.js.",
    ],
    techStack: [
      "React.js",
      "Redux",
      "TailwindCSS",
      "Next.js",
      "Cypress",
      "Jest",
    ],
  },
  {
    company: "Infosaba",
    role: "Full Stack Engineer",
    labels: ["Full-time", "🇮🇷 Tehran"],
    dates: { start: "2018-11-01", end: "2020-09-01" },
    descriptions: [
      "Established a messaging system (including direct messages, channels, and groups) for <b>half a million</b> clients.",
      "Enhanced performance by streamlining the database structure.",
      "Improved network optimization and implemented intelligent data caching to minimize user downtime.",
    ],
    techStack: [
      "React.js",
      "Redux",
      "Node.js",
      "MongoDB",
      "Websocket",
      "Apollo",
    ],
  },
  {
    company: "Tabaneh Shahr",
    role: "Frontend Engineer",
    labels: ["Full-time", "🇮🇷 Tehran"],
    dates: { start: "2017-11-01", end: "2018-11-01" },
    descriptions: [
      "Created a social media platform for artists.",
      "Managed notifications through Firebase.",
      "Constructed an internal module for surveying users.",
    ],
    techStack: ["React.js", "Redux", "Webpack", "Firebase", "Bootstrap"],
  },
];

export const START_DATE = "2017-11-01";
