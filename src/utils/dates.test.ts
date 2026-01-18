import { describe, it, expect, setSystemTime } from "bun:test";
import { formatJobDate } from "./dates";

describe("dates", () => {
  it("should format job date", () => {
    const date = formatJobDate({ start: "2020-01-01", end: "2021-01-01" });
    expect(date).toBe("Jan 2020 - Jan 2021 · 1 yr");
  });

  it("should format job date with present", () => {
    setSystemTime(new Date("2025-01-01"));
    const date = formatJobDate({ start: "2020-01-01" });
    expect(date).toBe("Jan 2020 - present · 5 yrs");
  });

  it("should format job date with months", () => {
    const date = formatJobDate({ start: "2020-01-01", end: "2020-06-01" });
    expect(date).toBe("Jan 2020 - Jun 2020 · 5 mos");
  });
});
