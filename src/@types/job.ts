export type Job = {
  company: string;
  role: string;
  labels?: string[];
  dates: { start: string; end?: string };
  descriptions: string[];
  techStack: string[];
};
