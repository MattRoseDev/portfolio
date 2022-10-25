import type { Job } from "@t/job";
import type { Project } from "@t/project";
import type { Social } from "@t/social";

export const EMAIL = "mailto:mahdineer@pm.me";

export const SOCIAL_LIST: Social[] = [
  {
    title: "Github",
    icon: "Github",
    href: "https://github.com/mahdineer",
  },
  {
    title: "Linkedin",
    icon: "Linkedin",
    href: "https://linkedin.com/in/mahdineer",
  },
  {
    title: "Unsplash",
    icon: "Unsplash",
    href: "https://unsplash.com/@mahdineer",
  },
  {
    title: "Codepen",
    icon: "Codepen",
    href: "https://codepen.io/mahdineer",
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
    image: "/images/projects/weesh.png",
    links: [
      {
        icon: "Github",
        href: "https://github.com/mahdineer/weesh-skin",
      },
      {
        icon: "ExternalLink",
        href: "https://weeshme.netlify.app/",
      },
    ],
  },
  {
    title: "Github Explorer",
    description:
      "Better Github Explorer of the Trending repositories with multi-select searching and filtering interesting projects.",
    tags: ["React", "Github API", "GraphQL", "Heroku"],
    image: "/images/projects/gitexpo.png",
    links: [
      {
        icon: "Github",
        href: "https://github.com/mahdineer/gitexpo",
      },
      {
        icon: "ExternalLink",
        href: "https://gitexpo.netlify.app/",
      },
    ],
  },
];

export const JOBS: Job[] = [
  {
    company: "Learned",
    role: "Full-Stack Developer",
    labels: ["Full-Time", "🇳🇱 Netherlands"],
    dates: { start: "2022-08-01" },
    descriptions: [],
    techStack: ["React.js", "Node.js", "MongoDB", "TypeScript"],
  },
  {
    company: "Pragmidea LTD",
    role: "Full-Stack Developer",
    labels: ["Full-Time", "🇬🇧 London", "Remote"],
    dates: { start: "2020-09-01", end: "2022-08-01" },
    descriptions: [
      "Developed web applications based on cryptocurrency.",
      "Replaced Redux with SWR and Context API.",
      "Collaborated with the technical team (Backend, DevOps, QA).",
      "Gained more experience in writing integration, e2e, and visual tests.",
      "Implemented internal packages with rollup.js for the Authentication system.",
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
    role: "Full-Stack Developer",
    labels: ["Full-Time", "🇮🇷 Iran"],
    dates: { start: "2018-11-01", end: "2020-09-01" },
    descriptions: [
      "Implemented a messenger (direct messages, channels, and groups) for 500K clients.",
      "Achieved better performance by optimizing the structure of the database.",
      "Optimized the network and cached the data intelligently to reduce user downtime.",
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
    role: "Front-End Developer",
    labels: ["Full-Time", "🇮🇷 Iran"],
    dates: { start: "2017-11-01", end: "2018-11-01" },
    descriptions: [
      "Implemented a social network for artists.",
      "Handled notifications with Firebase.",
      "Developed an internal package for polling users.",
    ],
    techStack: ["React.js", "Redux", "Webpack", "Firebase", "Bootstrap"],
  },
];

export const START_DATE = "2017-11-01";
