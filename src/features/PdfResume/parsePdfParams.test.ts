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

  it("applies the nilo preset", () => {
    const content = resolvePdfContentFromSearch("?preset=nilo");

    expect(content.locationLine).toBe("Open to relocation to Germany");
    expect(content.headline).toBe("Senior Frontend Engineer");
    expect(content.summary).toContain("5+ years");
    expect(content.summary).toContain("Redux Toolkit state management");
    expect(content.summary).toContain("shared UI infrastructure");

    expect(content.sideProjects.map((project) => project.name)).toEqual([
      "Cube Shrine",
      "MooDuck",
      "Kitchen Madness",
      "Lyra",
    ]);

    const skillLabels = content.techStack.map((group) => group.label);
    expect(skillLabels).toEqual([
      "Core",
      "Frontend",
      "Build & CI",
      "Quality",
      "Libraries",
      "Tools",
    ]);
    expect(
      content.techStack.find((group) => group.label === "Quality")?.items,
    ).toContain("accessibility basics");

    const seniorBullets = content.jobs
      .find((job) => job.title === "Senior Frontend Engineer")
      ?.bullets.map((bullet) => bullet.lead);
    expect(seniorBullets).toEqual([
      "Led a Lit → React migration",
      "Improved frontend state architecture",
      "Cut build and CI feedback time",
      "Helped scale frontend delivery",
      "Raised frontend engineering standards",
      "Mentor mid-level engineers and interns",
    ]);

    const internBullet = content.jobs
      .find((job) => job.title === "Frontend Engineer Intern")
      ?.bullets.at(0);
    expect(internBullet?.lead).toBe("Shipped production changes");

    const overridden = resolvePdfContentFromSearch("?preset=nilo&location=uae");
    expect(overridden.locationLine).toBe("Open to relocation to the UAE");
  });

  it("applies the spotify preset", () => {
    const content = resolvePdfContentFromSearch("?preset=spotify");

    expect(content.locationLine).toBe("Open to relocation to Stockholm");
    // The professional title stays unchanged — no vacancy/company/team label.
    expect(content.headline).toBe("Senior Frontend Engineer");
    expect(content.summary).toContain("5+ years");
    expect(content.summary).toContain("multi-step workflows");
    expect(content.summary).not.toContain("GraphQL");
    expect(content.summary).not.toContain("gRPC");
    expect(content.accentColor).toBe("#1DB954");

    expect(content.sideProjects.map((project) => project.name)).toEqual([
      "MooDuck",
      "Cube Shrine",
      "Lyra",
    ]);

    const skillLabels = content.techStack.map((group) => group.label);
    expect(skillLabels).toEqual([
      "Core",
      "Frontend",
      "APIs & Data",
      "Quality",
      "Build & CI",
      "Libraries & Tools",
    ]);
    const skillItems = content.techStack.flatMap((group) => group.items);
    expect(skillItems).not.toContain("GraphQL");
    expect(skillItems).not.toContain("gRPC");

    const seniorLeads = content.jobs
      .find((job) => job.title === "Senior Frontend Engineer")
      ?.bullets.map((bullet) => bullet.lead);
    expect(seniorLeads?.[0]).toBe(
      "Build and evolve a complex React & TypeScript platform",
    );

    // The current job title stays "Senior Frontend Engineer" in Experience.
    expect(content.jobs.map((job) => job.title)).toContain(
      "Senior Frontend Engineer",
    );

    const overridden = resolvePdfContentFromSearch(
      "?preset=spotify&location=sweden",
    );
    expect(overridden.locationLine).toBe("Open to relocation to Sweden");
  });

  it("leaves accentColor unset for presets that do not define it", () => {
    expect(resolvePdfContentFromSearch("").accentColor).toBeUndefined();
    expect(resolvePdfContentFromSearch("?preset=nilo").accentColor).toBeUndefined();
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
