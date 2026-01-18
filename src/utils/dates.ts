import { format } from "date-fns";
import { formatDuration } from "date-fns";
import { intervalToDuration } from "date-fns";
import type { Job } from "@/@types/job";
import { START_DATE } from "@/constants";

export function formatJobDate(dates: Job["dates"]) {
  const PATTERN = "MMM yyyy";
  const { start, end } = dates;
  const durationDates = {
    start: new Date(start),
    end: end ? new Date(end) : new Date(),
  };
  const startText = format(durationDates.start, PATTERN);
  const endText = end ? format(durationDates.end, PATTERN) : "present";
  const durationText = formatDuration(intervalToDuration(durationDates), {
    format: ["years", "months"],
  })
    .replace("year", "yr")
    .replace("month", "mo");

  return `${startText} - ${endText} · ${durationText}`;
}

export const experienceDuration = formatDuration(
  intervalToDuration({ start: new Date(START_DATE), end: new Date() }),
  { format: ["years"] },
);
