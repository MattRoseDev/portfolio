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
    href: "https://www.linkedin.com/in/mahdineer",
  },
  {
    title: "Unsplash",
    icon: "Camera",
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
    title: "Github Explorer",
    description:
      "This is a better Github Explorer of the Trending repositories. The project will use the Github Graphql API for searching and filtering interesting projects.",
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
  {
    title: "Weesh",
    description:
      "A text-based social network specialized in making wishes with unique features like reweesh, in-app credit, combinator themes, and ticket service for support.",
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
];

export const JOBS: Job[] = [
  {
    company: "PRAGMIDEA LTD",
    role: "Full Stack Developer",
    status: "Full-Time | Remote",
    date: "Sep 2020 – present",
    descriptions: [
      "Worked on several different projects about cryptocurrency.",
      "Replaced Redux with Context API and SWR on a large scale.",
      "Gained more experience in writing integration, e2e, and visual tests.",
      "Developed internal packages with rollup.js (Authentication system).",
    ],
    techStack: ["React", "Redux", "TailwindCSS", "Next.js", "Cypress", "Jest"],
  },
  {
    company: "Infosaba",
    role: "Full Stack Developer",
    status: "Full-Time",
    date: "Jun 2018 – Jan 2021",
    descriptions: [
      "An Industrial network with deep data.",
      "Implemented a messenger (direct messages, channels, and groups) for 0.5 million clients.",
      "Achieved better performance by optimizing the structure of the database.",
    ],
    techStack: ["React", "Redux", "Node.js", "MongoDB", "Websocket", "Apollo"],
  },
  {
    company: "Tabaneh Shahr",
    role: "Frontend Developer",
    status: "Full-Time",
    date: "Nov 2017 – Nov 2018",
    descriptions: [
      "The application was a social network for artists.",
      "Developed an internal package for user polls.",
      "Achieved better performance by optimizing the structure of the database.",
    ],
    techStack: ["React", "Redux", "Webpack", "Firebase", "Bootstrap"],
  },
];
