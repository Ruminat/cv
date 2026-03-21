import { render } from "preact";
import { ThemeProvider } from "../context/theme";
import { UrlProvider, useUrl } from "../context/url";
import { Avatar } from "./Avatar";
import { Contact } from "./Contact";
import { EducationPeriod } from "./Education";
import { GithubIcon, TelegramIcon } from "./Icon";
import { Flex } from "./Layout/Flex";
import { LINK } from "./Link/LINK";
import { Project } from "./Project";
import { TopMenu } from "./TopMenu";
import { bold, code, sectionHeader, text, Text } from "./Typography";
import "./index.css";
import { Language } from "./Language";

function Content() {
  const { isPdfMode } = useUrl();

  return (
    <main>
      <section>
        {sectionHeader("Vlad Furman")}

        {text("Senior Frontend Engineer | Frontend Architecture | React & TypeScript")}

        {text("Open to relocation to UAE")}

        <Flex gap={4}>
          {isPdfMode ? null : <Avatar size={128} />}
          <Flex direction={isPdfMode ? "row" : "column"} gap={isPdfMode ? 4 : 2}>
            <Contact label='Ruminat' icon={<TelegramIcon />} href='https://t.me/Ruminat' />
            <Contact label='Ruminat' icon={<GithubIcon />} href='https://github.com/Ruminat' />
          </Flex>
        </Flex>
      </section>

      {isPdfMode ? null : <TopMenu />}

      <section>
        <Text>
          Senior Frontend Engineer with 5+ years of experience at <Text color='yandex'>Y</Text>andex, specializing in
          large-scale infrastructure platforms. Expert in React and TypeScript with a strong focus on system
          architecture, legacy-to-modern migrations, and developer experience.
        </Text>
      </section>

      <section>
        {sectionHeader("Skills")}

        <Flex direction='column' gap={1}>
          <Text>
            Core: {LINK.typescript}, {LINK.react}, {LINK.nodeJS}, {LINK.electron}.
          </Text>
          <Text>Styling: {LINK.scss}, CSS Modules.</Text>
          <Text>
            Tools: {LINK.git}, {LINK.docker}, {LINK.vite}, {LINK.webpack}, CI/CD.
          </Text>
          <Text>
            Libraries: {LINK.lit}, {LINK.reduxToolkit}, {LINK.express}, {LINK.gravityUi}.
          </Text>
        </Flex>
      </section>

      <section>
        {sectionHeader("Experience")}

        <Text>
          <Text color='yandex'>Y</Text>andex | 2020 — Present
        </Text>

        <Flex direction='column' gap={2}>
          <Text>
            {bold("Project")}: {LINK.nirvana} — a mission-critical internal infrastructure platform used by 2,000+
            developers daily for ML pipelines and data processing.
          </Text>
          <Text>{bold("Tech Stack in Nirvana team")}:</Text>
          <ul>
            <li>
              {LINK.typescript}, {LINK.lit} (migrating to {LINK.react}), {LINK.reduxToolkit}, {LINK.scss}.
            </li>
            <li>Leveraging and contributing to the {LINK.gravityUi} ecosystem.</li>
            <li>
              BFF on {LINK.nodeJS} utilizing {LINK.gravityCore}.
            </li>
          </ul>
          {bold("Key Responsibilities:")}
          <ul>
            <li>
              {bold("Strategic Migration")}: Leading the architectural transition from {LINK.lit} to {LINK.react}.
              Designed and implemented a custom bridge to render {LINK.react} components within the legacy {LINK.lit}{" "}
              environment, allowing for a seamless, incremental migration of complex pages and dialogs without service
              disruption.
            </li>
            <li>
              {bold("Infrastructure & Modularization")}: Successfully decoupled the monolithic "Nirvana" frontend into
              independent, domain-specific services (Layers, Domain Constructor). Established standalone repositories
              and CI/CD pipelines, significantly improving delivery speed and team autonomy.
            </li>
            <li>
              {bold("Architectural Solutions")}: Engineered a global Dialog Manager capable of rendering into the
              document body to bypass legacy CSS/DOM constraints, ensuring consistent UI behavior across both {LINK.lit}{" "}
              and {LINK.react} contexts.
            </li>
            <li>
              {bold("State Management")}: Developed lazy-loading Redux Toolkit modules that maintain backward
              compatibility with custom legacy Redux implementations, enhancing the developer experience and improving
              application stability and significantly reducing production regressions caused by legacy state conflicts.
            </li>
            <li>
              {bold("Shared Tooling")}: Created and currently maintain {code("@yandex-data-ui/nirvana-common")}{" "}
              (internal npm package), standardizing business logic and UI patterns across the Nirvana services
              ecosystem.
            </li>
            <li>
              {bold("Growth")}: Rapidly promoted from Intern to Senior Engineer within 4 years, consistently delivering
              high-impact solutions for <Text color='yandex'>Y</Text>andex's internal cloud and developer tools.
            </li>
          </ul>
        </Flex>
      </section>

      <section>
        {sectionHeader("Side Projects")}

        <Flex direction='column' gap={2}>
          <Project
            icon='/mooduck.png'
            title='MooDuck'
            date='2025 — Present'
            githubLink='https://github.com/Ruminat/MooDuck'
            description='AI-driven Telegram bot for mood tracking with real-time sentiment analysis. Built with Node.js and OpenAI API, using Turso for lightweight persistence.'
          />
          <Project
            icon='/chi.png'
            title='Chi'
            date='2019'
            githubLink='https://github.com/kit-software-development/exam-Ruminat'
            description='Full-stack language learning app using spaced-repetition flashcards (Anki-style). Built to explore learning algorithms and full-stack architecture.'
          />
          <Project
            icon='/lyra.png'
            title='Lyra'
            date='2016'
            githubLink='https://github.com/Ruminat/Lyra'
            description='Desktop music player built with Electron as an early exploration of cross-platform JavaScript applications.'
          />
        </Flex>
      </section>

      <section className='full-width'>
        {sectionHeader("Education")}

        {text("Peter the Great St. Petersburg Polytechnic University")}

        <Flex gap={4}>
          <EducationPeriod
            period='2016 — 2020 (Bachelor’s)'
            specialty='Software Engineering and Information Systems Administration'
          />
          <EducationPeriod period='2020 — 2022 (Master’s)' specialty='Corporate Information Systems Management' />
        </Flex>
      </section>

      <section className='full-width'>
        <Flex width='100%'>
          <Flex direction='column' gap={4} width='50%'>
            {sectionHeader("Languages")}

            <Flex direction='column' gap={2}>
              <Language language='Russian' level='Native' icon='/flags/RU.png' />
              <Language language='English' level='Fluent (C1)' icon='/flags/UK.png' />
              <Language language='Japanese' level='Elementary (JLPT N4)' icon='/flags/JP.png' />
            </Flex>
          </Flex>

          <Flex direction='column' gap={4} width='50%'>
            {sectionHeader("Interests")}

            <Flex direction='column' gap={2}>
              {text("🏓 Table tennis")}
              {text("👨🏻‍💻 Personal web projects")}
              {text("🎮 Co-op gaming")}
              {text("⛩️ Language learning")}
            </Flex>
          </Flex>
        </Flex>
      </section>
    </main>
  );
}

export function renderContent() {
  render(
    <UrlProvider>
      <ThemeProvider>
        <Content />
      </ThemeProvider>
    </UrlProvider>,
    document.querySelector(".content")!,
  );
}
