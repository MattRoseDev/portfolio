import type { Project } from "@t/projects";

export const EMAIL = "mailto:mahdineer@pm.me";

export const PROJECTS: Project[] = [
  {
    title: "Github Explorer",
    description:
      "This is a better Github Explorer of the Trending repositories. The project will use the Github Graphql API for searching and filtering interesting projects.",
    tags: ["React", "Github API", "GraphQL", "Heroku"],
    links: [
      {
        icon: "github",
        href: "https://github.com/mahdineer/gitexpo",
      },
      {
        icon: "externalLink",
        href: "https://gitexpo.netlify.app/",
      },
    ],
  },
];
