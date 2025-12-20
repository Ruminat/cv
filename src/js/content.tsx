import { render } from "preact";
import { Controls } from "../components/Controls";
import { GithubIcon, TelegramIcon } from "../components/Icon";
import "../style/content.css";
import { contact, header, list, pair, sectionHeader, text } from "./render";

const avatarSize = "128px";

function Content() {
  return (
    <main>
      <Controls />

      <section>
        {header("Влад Фурман")}

        {text("Senior frontend developer")}

        {text("27 лет — Санкт-Петербург")}

        {pair(
          <div className='avatar'>
            <img width={avatarSize} height={avatarSize} src='/public/me.jpg' />
          </div>,
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
  render(<Content />, document.querySelector(".content")!);
}
