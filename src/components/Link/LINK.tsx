export const LINK = {
  anki: link("Anki", "https://apps.ankiweb.net"),
  nirvana: link("Nirvana", "https://habr.com/ru/companies/yandex/articles/351016"),
  gravityUi: link("@gravity-ui", "https://github.com/gravity-ui"),
  lit: link("Lit", "https://lit.dev"),
  react: link("React", "https://react.dev"),
  redux: link("Redux", "https://redux.js.org"),
  reduxToolkit: link("Redux Toolkit", "https://redux-toolkit.js.org"),
  typescript: link("TypeScript", "https://www.typescriptlang.org"),
  scss: link("SCSS", "https://sass-lang.com"),
  gravityCore: link("@gravity-ui/expresskit", "https://github.com/gravity-ui/expresskit"),
  nodeJS: link("Node JS", "https://nodejs.org/en"),
  electron: link("Electron", "https://www.electronjs.org"),
  express: link("Express", "https://expressjs.com"),
  docker: link("Docker", "https://www.docker.com"),
  vite: link("Vite", "https://vite.dev"),
  webpack: link("Webpack", "https://webpack.js.org"),
  git: link("Git", "https://git-scm.com"),
};

function link(label: string, link: string) {
  return (
    <a href={link} target='_blank'>
      {label}
    </a>
  );
}
