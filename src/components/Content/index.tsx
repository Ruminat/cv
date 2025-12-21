import { render } from "preact";
import { ThemeProvider } from "../../context/theme";
import { Avatar } from "../Avatar";
import { Contact } from "../Contact";
import { EducationPeriod } from "../Education";
import { GithubIcon, TelegramIcon } from "../Icon";
import { Flex } from "../Layout/Flex";
import { LINK } from "../Link/LINK";
import { TopMenu } from "../TopMenu";
import { header, sectionHeader, text, Text, textCode } from "../Typography/typography";
import "./content.css";

function Content() {
  return (
    <main>
      <section>
        {header("Влад Фурман")}

        {text("Senior frontend developer")}

        {text("27 лет — Санкт-Петербург")}

        <Flex gap={4}>
          <Avatar size={128} />
          <Flex direction='column' gap={2}>
            <Contact label='Ruminat' icon={<TelegramIcon />} href='https://t.me/Ruminat' />
            <Contact label='Ruminat' icon={<GithubIcon />} href='https://github.com/Ruminat' />
          </Flex>
        </Flex>

        <TopMenu />
      </section>

      <section>
        {sectionHeader("Опыт")}

        <Text>
          <Text color='yandex'>Я</Text>ндекс. декабрь 2020 — ...
        </Text>

        <Flex direction='column' gap={2} maxWidth='600px'>
          <Text>
            Внутренний инфраструктурный сервис {LINK.nirvana} и его подсервисы — Domain Constructor, Layers и внутренний
            Docker Registry.
          </Text>

          <ul>
            <li>
              Вынес из репозитория {LINK.nirvana} в самостоятельные сервисы Layers и Domain Constructor с собственными
              репозиториями, CI и релизами.
            </li>
            <li>
              Вынес общий код этих проектов в библиотеку {textCode("@yandex-data-ui/nirvana-common")} во внутренний npm.
            </li>
            <li>
              Придумывал и реализовывал архитектурные решения: менеджер диалогов; ленивые {LINK.reduxToolkit} модули,
              совместимые с устаревшими кастомными модулями на {LINK.redux}.
            </li>
          </ul>

          <Text>Что используем в команде:</Text>
          <ul>
            <li>
              {LINK.typescript}, {LINK.lit} (переходим на {LINK.react}), {LINK.reduxToolkit}, {LINK.scss}.
            </li>
            <li>Используем и контрибьютим в общую экосистему библиотек {LINK.gravityUi}.</li>
            <li>
              BFF на {LINK.nodeJS}, использующий {LINK.gravityCore}.
            </li>
          </ul>

          {/* : изначально {LINK.lit}. Переходим с него на {LINK.react}. Пишем код на {LINK.typescript}, используем{" "}
            {LINK.scss} для стилей. Используем и контрибьютим в общую экосистему библиотек {LINK.gravityUi}. Есть BFF
            (backend for frontend) на основе {LINK.gravityCore}. */}

          {text("Пришёл в Яндекс стажёром. Вырос там до уровня senior. Сейчас ищу новые интересные проекты.", {
            color: "hint",
            size: "small",
          })}
        </Flex>
      </section>

      <section>
        {sectionHeader("Стек")}

        <Flex direction='column' gap={1}>
          <Text>
            Основные: {LINK.typescript}, {LINK.react}, {LINK.nodeJS}, {LINK.electron}.
          </Text>
          <Text>Стили: {LINK.scss}, CSS Modules.</Text>
          <Text>
            Инструменты: {LINK.git}, {LINK.docker}, {LINK.vite}, {LINK.webpack}.
          </Text>
          <Text>
            Библиотеки: {LINK.lit}, {LINK.reduxToolkit}, {LINK.express}, {LINK.gravityUi}.
          </Text>
        </Flex>
      </section>

      <section>
        {sectionHeader("Сайд проекты")}

        <Flex direction='column' gap={2} maxWidth='600px'>
          {text("MooDuck — Telegram бот для отслеживания своего настроения с забавными ответами от AI.")}
          <Text>Lyra — музыкальный плеер на {LINK.electron}, написанный в школьные годы.</Text>
        </Flex>
      </section>

      <section>
        {sectionHeader("Образование")}

        {text("Санкт-Петербургский политехнический университет Петра Великого")}
        <Flex maxWidth='600px' gap={4}>
          <EducationPeriod
            period='2016 — 2020 (бакалавриат)'
            specialty='Специальность: Математическое обеспечение и администрирование информационных систем'
          />
          <EducationPeriod
            period='2020 — 2022 (магистратура)'
            specialty='Специальность: Математическое обеспечение и администрирование корпоративных информационных систем'
          />
        </Flex>
      </section>

      <section>
        <Flex maxWidth='600px' gap={4}>
          <Flex direction='column' gap={2}>
            {sectionHeader("Языки")}
            {text("Русский (родной)")}
            {text("Английский (примерно B2)")}
            {text("Японский (примерно JLPT N4)")}
          </Flex>

          <Flex direction='column' gap={2}>
            {sectionHeader("Хобби")}
            {text("Настольный теннис")}
            {text("Веб-разработка")}
            {text("Спидкубинг")}
          </Flex>
        </Flex>
      </section>
    </main>
  );
}

export function renderContent() {
  render(
    <ThemeProvider>
      <Content />
    </ThemeProvider>,
    document.querySelector(".content")!
  );
}
