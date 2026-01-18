import type { IconNames } from "@/components/Icon";

export type Job = {
  company: string;
  role: string;
  labels?: string[];
  dates: { start: string; end?: string };
  techStack: string[];
  location: {
    flag: Extract<IconNames, "FlagEngland" | "FlagIran" | "FlagNetherlands">;
    address: string;
  };
};
