import { MapPin, Printer } from "lucide-react";
import {
  education,
  interests,
  languages,
  pdfContacts,
} from "@/features/PdfResume/pdfConfig";
import { resolvePdfContentFromSearch } from "@/features/PdfResume/parsePdfParams";
import { asset } from "@/shared/lib/Asset";

/**
 * A print-optimized résumé rendered on the `/pdf` route.
 *
 * Query parameters tailor the PDF without editing source:
 * - `location` — `uae-europe` (default), `uae`, `germany`, `poland`, or any custom place
 * - `headline` — role line under your name (e.g. `Senior Frontend Developer`)
 * - `summary` — `default` | `product` | `miral`, or any custom paragraph text
 * - `projects` — comma-separated side-project names to show, in order
 * - `preset` — named bundle (`miral` for Miral Experiences-style tailoring)
 *
 * Examples:
 *   /pdf?location=uae
 *   /pdf?preset=miral
 *   /pdf?location=uae&headline=Senior%20Frontend%20Developer&summary=miral
 */

const printStyles = `
  @page { size: A4; margin: 0; }
  @media print {
    html, body { background: #ffffff !important; }
  }
  .pdf-root {
    color-scheme: light;
    font-family: 'Roboto', ui-sans-serif, system-ui, sans-serif;
    font-weight: 300;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
`;

function Section({
  title,
  children,
}: {
  title: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-3.5 break-inside-avoid last:mb-0">
      <h2 className="mb-2 border-b border-neutral-200 pb-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-neutral-400">
        {title}
      </h2>
      {children}
    </section>
  );
}

export function PdfResume() {
  const content = resolvePdfContentFromSearch(window.location.search);

  return (
    <div className="pdf-root min-h-screen bg-neutral-100 py-8 text-neutral-800 print:min-h-0 print:bg-white print:py-0">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
      />
      <style>{printStyles}</style>

      <button
        type="button"
        onClick={() => {
          window.print();
        }}
        className="fixed right-6 top-6 z-10 inline-flex items-center gap-2 rounded-lg bg-neutral-900 px-4 py-2 text-sm font-medium text-white shadow-lg transition-colors hover:bg-neutral-700 print:hidden"
      >
        <Printer className="size-4" />
        Save as PDF
      </button>

      <div className="mx-auto w-[210mm] min-h-[297mm] bg-white p-[10mm] text-neutral-800 shadow-xl print:min-h-0 print:shadow-none">
        {/* Header */}
        <header className="flex items-start justify-between gap-8">
          <div className="min-w-0">
            <h1 className="text-[32px] font-bold leading-none tracking-tight text-neutral-900">
              Vlad Furman
            </h1>
            <p className="mt-1.5 text-[15px] font-medium text-orange-600">
              {content.headline}
            </p>
            <p className="mt-1.5 inline-flex items-center gap-1.5 text-[11px] font-medium text-neutral-500">
              <MapPin className="size-3.5 text-orange-500" />
              {content.locationLine}
            </p>
            <p className="mt-2.5 max-w-xl text-[13px] leading-relaxed text-neutral-600">
              {content.summary}
            </p>
          </div>
          <img
            src={asset("photo-pdf.png")}
            alt="Vlad Furman"
            className="size-40 shrink-0 rounded-full object-cover ring-1 ring-neutral-200"
          />
        </header>

        {/* Contact line */}
        <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] text-neutral-500">
          {pdfContacts.map((c) => (
            <a
              key={c.text}
              href={c.href}
              className="inline-flex items-center gap-1.5 hover:text-neutral-900"
            >
              <img
                src={asset(c.icon)}
                alt=""
                className="size-3.5 object-contain"
              />
              {c.text}
            </a>
          ))}
        </div>

        <hr className="my-3 border-neutral-200" />

        {/* Two columns: experience (wide) + sidebar (narrow) */}
        <div className="grid grid-cols-[1.7fr_1fr] gap-9">
          {/* Main */}
          <div>
            <Section
              title={
                <>
                  Experience —{" "}
                  <span className="text-neutral-700">
                    <span className="text-[#f8604a]">Y</span>andex
                    Infrastructure
                  </span>
                </>
              }
            >
              {content.jobs.map((job) => (
                <div
                  key={job.title}
                  className="mb-3.5 break-inside-avoid last:mb-0"
                >
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="text-[15px] font-semibold text-neutral-900">
                      {job.title}
                    </h3>
                    <span className="shrink-0 text-[11px] font-medium text-neutral-400">
                      {job.period}
                    </span>
                  </div>
                  <ul className="mt-1.5 space-y-1">
                    {job.bullets.map((b) => (
                      <li
                        key={b.lead}
                        className="flex gap-2 text-[13px] leading-snug text-neutral-600"
                      >
                        <span className="text-neutral-300">–</span>
                        <span>
                          <span className="font-semibold text-neutral-800">
                            {b.lead}
                          </span>
                          {b.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </Section>

            <Section title="Side Projects">
              <div className="grid grid-cols-2 gap-x-6 gap-y-2.5">
                {content.sideProjects.map((p) => (
                  <div key={p.name}>
                    <div className="flex items-baseline justify-between gap-2">
                      <a
                        href={p.href}
                        className="text-[13px] font-semibold text-neutral-800 hover:text-neutral-950"
                      >
                        {p.name}
                      </a>
                      <span className="shrink-0 text-[11px] font-medium text-neutral-400">
                        {p.period}
                      </span>
                    </div>
                    <p className="text-[13px] leading-snug text-neutral-600">
                      {p.desc}
                    </p>
                    <div className="mt-1 flex flex-wrap gap-1">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded border border-neutral-200 bg-neutral-50 px-1.5 py-px text-[11px] text-neutral-500"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Section>
          </div>

          {/* Sidebar */}
          <div>
            <Section title="Skills">
              <div className="space-y-1.5">
                {content.techStack.map((g) => (
                  <p key={g.label} className="text-[13px] leading-snug">
                    <span className="font-semibold text-neutral-700">
                      {g.label}:{" "}
                    </span>
                    <span className="text-neutral-500">
                      {g.items.join(", ")}
                    </span>
                  </p>
                ))}
              </div>
            </Section>

            <Section title="Education">
              <p className="text-[13px] font-semibold text-neutral-800">
                Peter the Great St. Petersburg Polytechnic University
              </p>
              <ul className="mt-1.5 space-y-1.5">
                {education.map((e) => (
                  <li
                    key={e.degree}
                    className="text-[13px] leading-snug text-neutral-600"
                  >
                    <p>{e.degree}</p>
                    <p className="text-[11px] text-neutral-400">{e.period}</p>
                  </li>
                ))}
              </ul>
            </Section>

            <Section title="Languages">
              <ul className="space-y-1">
                {languages.map((l) => (
                  <li
                    key={l.name}
                    className="flex items-baseline justify-between gap-2 text-[13px]"
                  >
                    <span className="font-medium text-neutral-700">
                      {l.name}
                    </span>
                    <span className="text-neutral-500">{l.level}</span>
                  </li>
                ))}
              </ul>
            </Section>

            <Section title="Interests">
              <ul className="flex flex-col gap-1 text-[13px] text-neutral-500">
                {interests.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </Section>
          </div>
        </div>
      </div>
    </div>
  );
}
