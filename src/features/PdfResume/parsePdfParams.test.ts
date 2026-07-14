import { describe, expect, it } from "vitest";
import { resolvePdfContentFromSearch } from "@/features/PdfResume/parsePdfParams";

describe("resolvePdfContentFromSearch", () => {
  it("uses defaults when no query params are provided", () => {
    const content = resolvePdfContentFromSearch("");

    expect(content.locationLine).toBe(
      "Open to relocation to the UAE / Europe",
    );
    expect(content.headline).toBe("Senior Frontend Engineer");
    expect(content.summary).toContain("infrastructure products");
    expect(content.sideProjects.map((project) => project.name)).toEqual([
      "MooDuck",
      "Cube Shrine",
      "Kitchen Madness",
      "Lyra",
    ]);
  });

  it("resolves known location presets", () => {
    const content = resolvePdfContentFromSearch("?location=uae");

    expect(content.locationLine).toBe("Open to relocation to the UAE");
  });

  it("treats unknown location values as custom place names", () => {
    const content = resolvePdfContentFromSearch("?location=Abu%20Dhabi");

    expect(content.locationLine).toBe("Open to relocation to Abu Dhabi");
  });

  it("overrides headline and summary presets", () => {
    const content = resolvePdfContentFromSearch(
      "?headline=Senior%20Frontend%20Developer&summary=product",
    );

    expect(content.headline).toBe("Senior Frontend Developer");
    expect(content.summary).toContain("component architecture");
  });

  it("applies the miral preset and allows param overrides", () => {
    const presetContent = resolvePdfContentFromSearch("?preset=miral");

    expect(presetContent.locationLine).toBe("Open to relocation to the UAE");
    expect(presetContent.headline).toBe("Senior Frontend Developer");
    expect(presetContent.summary).toContain("5+ years");
    expect(presetContent.summary).toContain("attention to accessibility");
    expect(presetContent.summary).toContain(
      "hands-on Next.js experience in side projects",
    );
    expect(presetContent.summary).not.toContain("greenfield");
    expect(
      presetContent.techStack.find((group) => group.label === "Core")?.items,
    ).toEqual(["TypeScript", "React", "Next.js", "Redux Toolkit", "Node.js"]);

    const layersBullet = presetContent.jobs
      .find((job) => job.title === "Middle Frontend Developer")
      ?.bullets.find(
        (bullet) => bullet.lead === "Rebuilt Layers as a standalone service",
      );
    expect(layersBullet?.text).toBe(
      ", including a responsive React UI for browsing Docker images and repositories in an internal registry.",
    );

    expect(presetContent.sideProjects.map((project) => project.name)).toEqual([
      "Cube Shrine",
      "MooDuck",
    ]);

    const overridden = resolvePdfContentFromSearch(
      "?preset=miral&location=germany",
    );

    expect(overridden.locationLine).toBe("Open to relocation to Germany");
    expect(overridden.headline).toBe("Senior Frontend Developer");
  });

  it("filters and orders side projects", () => {
    const content = resolvePdfContentFromSearch(
      "?projects=Lyra,%20Cube%20Shrine",
    );

    expect(content.sideProjects.map((project) => project.name)).toEqual([
      "Lyra",
      "Cube Shrine",
    ]);
  });
});
