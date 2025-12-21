import { render } from "preact";
import { ThemeProvider } from "../../context/theme";
import { Avatar } from "../Avatar";
import { TopMenu } from "../TopMenu";
import { GithubIcon, TelegramIcon } from "../Icon";
import { contact, header, list, pair, sectionHeader, text } from "./render";

function Content() {
  return (
    <main>
      <TopMenu />

      <section>
        {header("Влад Фурман")}

        {text("Senior frontend developer")}

        {text("27 лет — Санкт-Петербург")}

        {pair(
          <Avatar size={128} />,
          list(
            contact(<TelegramIcon />, "Ruminat", "https://t.me/Ruminat"),
            contact(<GithubIcon />, "Ruminat", "https://github.com/Ruminat")
          )
        )}
      </section>

      <section>
        {sectionHeader("Мой опыт")}
        {text("Яндекс. 2020 — ...")}
        {text("Чем занимался: сервисы инфраструктуры, внутренние библиотеки.")}
      </section>
      <section>
        {sectionHeader("Сайд проекты")}
        {text("MooDuck")}
        {text("Lyra")}
      </section>
      <section>
        {sectionHeader("Образование")}
        {text("Политех 2016 — 2020 (бакалавр)")}
        {text("Политех 2020 — 2022 (магистр)")}
      </section>
      <section>
        {sectionHeader("Хобби / языки")}
        {/* <Flex> */}
        {text("Пинг-понг")}
        {text("Веб-разработка")}
        {text("Спидкубинг")}
        {/* </Flex> */}
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
