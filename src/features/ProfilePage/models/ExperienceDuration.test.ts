import { getCompletedYears } from "@/features/ProfilePage/models/ExperienceDuration";
import { describe, expect, it } from "vitest";

describe("getCompletedYears", () => {
  it("counts only fully completed years", () => {
    const startDate = new Date("2020-12-01T00:00:00.000Z");
    const asOfDate = new Date("2026-06-29T00:00:00.000Z");

    expect(getCompletedYears(startDate, asOfDate)).toBe(5);
  });

  it("increments on the anniversary date", () => {
    const startDate = new Date("2020-12-01T00:00:00.000Z");
    const asOfDate = new Date("2026-12-01T00:00:00.000Z");

    expect(getCompletedYears(startDate, asOfDate)).toBe(6);
  });

  it("returns a safe default when the start date is in the future", () => {
    const startDate = new Date("2027-01-01T00:00:00.000Z");
    const asOfDate = new Date("2026-06-29T00:00:00.000Z");

    expect(getCompletedYears(startDate, asOfDate)).toBe(0);
  });
});
