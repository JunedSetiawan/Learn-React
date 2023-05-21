## <p align="center">On Progress</p>

<p align="center">
  <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">
    <img width="180" src="https://vitejs.dev/logo.svg" alt="Vite logo">
  </a>
</p>
<br/>
<p align="center">
  <a href="https://npmjs.com/package/vite"><img src="https://img.shields.io/npm/v/vite.svg" alt="npm package"></a>
  <a href="https://chat.vitejs.dev"><img src="https://img.shields.io/badge/chat-discord-blue?style=flat&logo=discord" alt="discord chat"></a>
</p>
<br/>

# Vite ⚡

> Next Generation Frontend Tooling

- 💡 Instant Server Start
- ⚡️ Lightning Fast HMR
- 🛠️ Rich Features
- 📦 Optimized Build
- 🔩 Universal Plugin Interface
- 🔑 Fully Typed APIs

Vite (French word for "quick", pronounced [`/vit/`](https://cdn.jsdelivr.net/gh/vitejs/vite@main/docs/public/vite.mp3), like "veet") is a new breed of frontend build tooling that significantly improves the frontend development experience. It consists of two major parts:

- A dev server that serves your source files over [native ES modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules), with [rich built-in features](https://vitejs.dev/guide/features.html) and astonishingly fast [Hot Module Replacement (HMR)](https://vitejs.dev/guide/features.html#hot-module-replacement).

- A [build command](https://vitejs.dev/guide/build.html) that bundles your code with [Rollup](https://rollupjs.org), pre-configured to output highly optimized static assets for production.

In addition, Vite is highly extensible via its [Plugin API](https://vitejs.dev/guide/api-plugin.html) and [JavaScript API](https://vitejs.dev/guide/api-javascript.html) with full typing support.

[Read the Docs to Learn More](https://vitejs.dev).

## Packages

| Package                                         | Version (click for changelogs)                                                                                                    |
| ----------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------- |
| [vite](packages/vite)                           | [![vite version](https://img.shields.io/npm/v/vite.svg?label=%20)](packages/vite/CHANGELOG.md)                                    |
| [@vitejs/plugin-legacy](packages/plugin-legacy) | [![plugin-legacy version](https://img.shields.io/npm/v/@vitejs/plugin-legacy.svg?label=%20)](packages/plugin-legacy/CHANGELOG.md) |
| [create-vite](packages/create-vite)             | [![create-vite version](https://img.shields.io/npm/v/create-vite.svg?label=%20)](packages/create-vite/CHANGELOG.md)               |

### Templates

#### React

- [Vitamin](https://github.com/wtchnm/Vitamin) - React TypeScript, TailwindCSS, SPA + PWA, Cypress and CI.
- [vite-reactts-eslint-prettier](https://github.com/TheSwordBreaker/vite-reactts-eslint-prettier) - React, TypeScript, ESlint, Prettier, Pre-commit.
- [react-vite-admin](https://github.com/ychengcloud/react-vite-admin) - React, Recoil, React Query, React Hooks, TypeScript, Axios.
- [vite-template-react](https://github.com/SafdarJamal/vite-template-react) - A Create React App-like template.
- [vitejs-template-react-rescript](https://github.com/jihchi/vitejs-template-react-rescript) - React + ReScript.
- [template-vite-react](https://github.com/lzm0x219/template-vite-react) - A minimal React Vite starter template.
- [reactjs-vite-tailwindcss-boilerplate](https://github.com/joaopaulomoraes/reactjs-vite-tailwindcss-boilerplate) - React 18, TypeScript, Vitest, Testing Library, TailwindCSS 3, Eslint and Prettier.
- [Tropical](https://github.com/bensmithett/tropical) - React, Storybook, MDX, Fela, SSR prerendering, and [islands architecture](https://www.npmjs.com/package/tropical-islands).
- [vite-plugin-react-refresh](https://github.com/fengxinming/vite-plugins/tree/main/packages/vite-plugin-react-refresh) - Provide enhancements for [@vitejs/plugin-react-refresh](https://www.npmjs.com/package/@vitejs/plugin-react-refresh).
- [vite-reactts18-chakra-jest-husky](https://github.com/The24thDS/vite-reactts18-chakra-jest-husky) - React 18, TypeScript, Chakra UI, Jest, ESLint, Prettier, Husky.
- [react-ts-vite-template](https://github.com/fabien-ml/react-ts-vite-template) - React, TypeScript, Jest, Testing Library, Cypress, ESLint, Prettier, Husky.
- [vite-reactts-tailwind-rtk-eslint](https://github.com/IsaiaPhiliph/vite-reactts-tailwind-rtk-eslint) - React, TypeScript, Tailwind CSS, Redux Toolkit, eslint.
- [vite-react-tailwind-template](https://github.com/Innei/vite-react-tailwind-template) - React 17, TypeScript, Jest, ESLint, Prettier, Husky, Tailwind CSS, PostCSS, pnpm.
- [stravital](https://github.com/rizkimcitra/stravital) - TypeScript, Git Hooks, Commitizen, Lint Staged, TailwindCSS.
- [vite-react-ts-tailwind-firebase-starter](https://github.com/TeXmeijin/vite-react-ts-tailwind-firebase-starter) - Starter using Vite + React + TypeScript + Tailwind CSS (daisyUI) + Firebase (v9) + Prettier + ESLint.
- [vite-react-ts-starter](https://github.com/uchihamalolan/vite-react-ts) - React, TypeScript, Jest, ESLint, Prettier, TailwindCSS, Husky, Conventional Commits.
- [vital](https://github.com/jvidalv/vital) - React, TypeScript, Tailwind (JIT), CSS-Modules, Jest, Atomic Design, Prettier, Husky, Commit-lint.
- [vite-react-ts-ghactions-template](https://github.com/pchmn/vite-react-ts-ghactions-template) - React, TypeScript, Vitest + React Testing Library, GitHub Actions + GitHub Pages, ESLint, Prettier, Husky, Commitlint.
- [vite-react-tailwind-v3](https://github.com/huibizhang/template-vite-react-tailwind-v3) - Starter template for React + TailwindCSS and `prettier-plugin-tailwindcss` build-in.
- [vite-react-ts-tailwind-v3](https://github.com/huibizhang/template-vite-react-ts-tailwind-v3) - Starter template for React + Typescript + TailwindCSS and `prettier-plugin-tailwindcss` build-in.
- [vite-react-ts-extended](https://github.com/laststance/vite-react-ts-extended) - React, TypeScript, TailwindCSS, MSW, Axios, Jest, React Testing Library, ESLint, Prettier, GitHub Actions.
- [vite-react-starter](https://github.com/fabgrel10/vite-react-starter) - React + ESLint + Prettier + SASS + Emotion + TailwindCSS + Jest + Testing Library.
- [chrome-extension-boilerplate-react-vite](https://github.com/Jonghakseo/chrome-extension-boilerplate-react-vite) - React + TypeScript + SASS + Prettier + ESLint + GitHub Actions + Chrome Extension Manifest v3.
- [vite-ant-design-pro](https://github.com/1247748612/vite-ant-design-pro) - React + antd + ProComponents + ReactQuery + ReactRouter6.
- [vite-rtk-query](https://github.com/laststance/vite-rtk-query) - React, TypeScript, Redux Toolkit, RTK Query, TailwindCSS, MSW, Jest, React Testing Library, ESLint, Prettier.
- [vite-react-proste](https://github.com/xyhxx/vite-react-proste) - React + TypeScript + `react-router-dom` + Recoil + SASS + Testing Library + `react-query` + ESLint + Stylelint + Prettier.
- [React-PWA](https://github.com/suren-atoyan/react-pwa) - React v18, TypeScript, Vite, React Router v6, MUI v5, Recoil, PWA, Eslint, Prettier, Husky, lint-staged, https localhost and more.
- [vite-react-ts-minimal-template](https://github.com/alessandropisu/vite-react-ts-minimal-template) - React + TypeScript + Airbnb ESLint + Prettier + Husky.
- [react-vite-ssr](https://github.com/EverSeenTOTOTO/browser-app-boilerplate/tree/react-vite-ssr) - Mobx, Typescript, Eslint, Stylelint, Husky, Lint-staged and Commitlint.
- [Viact](https://github.com/MR-Mostafa/Viact) - React + TypeScript + ESLint + Prettier + Support RTL + mock REST API Viact + Storybook, ErrorBoundary, UnoCss and more.
- [Viterts](https://github.com/erdoganbulut/viterts/) - React + TypeScript + Redux + React Router + Jest + ESLint + Airbnb + Prettier + SASS.
- [ViteRC](https://github.com/potreco/viterc) - React 18 + TypeScript + ESLint (Airbnb) + Prettier + Husky + Jest + Absolute imports + Commit linting.
- [VRTTV](https://github.com/Drumpy/vrttv-boilerplate) - React + TypeScript + TailwindCSS + ESLint + Prettier + Husky + Conventional Commits + Gitmoji + GitHub Actions + Vercel Deploy.
- [React Starter Kit](https://github.com/kriasoft/react-starter-kit) - Jamstack, React, React Router, Material UI, Firebase Auth, TypeScript, ESLint, Prettier, Jest, GitHub Actions.
- [vite-mern-template](https://github.com/apicgg/vite-mern-template) - React 18 + TypeScript + Vite + Redux Toolkit + ESLint + React Router DOM + Axios + React Icons + React Toastify + Express + Mongoose.
- [react-pipeline](https://github.com/maifeeulasad/react-pipeline) - React 18 + TS + AntD + GitHub Pages + Tailwind + Sass + React Router DOM + ESLint.
- [Varsarr](https://github.com/altmshfkgudtjr/varsarr) - React, Typescript, Styled-Components, Recoil, React-Query, Axios, Absolute imports.
- [viterjs-template](https://github.com/emre-cil/viterjs-template) - React + JavaScript + Redux + Material UI + Axios + ESLint + Prettier.
- [react-vite-ts-boilerplate](https://github.com/choisohyun/react-vite-ts-boilerplate) - React 18, TypeScript, SCSS, ESLint, Prettier, Vitest.
- [vite-react-universal-template](https://github.com/laoer536/vite3.0-react18-TypeScript-router-dom6-mobx6-Eslint-prettier-template) - React18 + TypeScript + `react-router-dom` + Mobx + ESlint + Prettier+Husky, and APIs auto importing.
- [vite-reactts18-eslint-tailwindcss](https://github.com/dserranoc/vite-reactts18-eslint-tailwindcss) - React 18 + TypeScript + ESLint + TailwindCSS.
- [vite-plugin-react-views](https://github.com/KAROTT7/vite-plugin-react-views) - Create routes automatically based on File System.
- [react-vite-template](https://github.com/985563349/react-vite-template) - A react project template.
- [react-xs-admin](https://github.com/jsxiaosi/react-xs-admin) - The background management system template developed based on React18 + ReactRouteV6 + Vite + And Design + ReactIntl + ReactRedux + Emulation.
- [vite-mui-ts](https://github.com/emre-cil/vite-mui-ts) - React + TypeScript + Redux + Material UI + RRD + ESLint + Prettier.
- [leo-react-app](https://github.com/Leo-Henrique/leo-react-app) - React + SASS | Template for React applications with SASS boilerplate for consistent interfaces.
- [template-vite-react-ts-tailwind](https://github.com/RoyRao2333/template-vite-react-ts-tailwind) - React + TypeScript + Tailwind CSS + Eslint + Prettier.
- [vite-react-ts-tailwind-template](https://github.com/nrabhiram/vite-react-ts-tailwind-template) - React, TypeScript, ESLint, Prettier, Husky, Vitest for specs, and Tailwind + CSS Modules.
- [vite-react-ts-template](https://github.com/bartstc/vite-ts-react-template) - React 18, TypeScript, ESlint, Prettier, Dev Container, Vitest, Storybook, Playwright, MSW, React Router 6, React Query, Chakra UI, Zustand.
