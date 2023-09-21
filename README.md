# pokemon-party

## 導入時

```bash
$ npm init nuxt-app pokemon-party

create-nuxt-app v5.0.0
✨  Generating Nuxt.js project in pokemon-party
? Project name: pokemon-party
? Programming language: TypeScript
? Package manager: Npm
? UI framework: Vuetify.js
? Template engine: Pug
? Nuxt.js modules: Axios - Promise based HTTP client, Progressive Web App (PWA)
? Linting tools: ESLint, Prettier, Lint staged files
? Testing framework: Jest
? Rendering mode: Single Page App
? Deployment target: Static (Static/Jamstack hosting)
? Development tools: (Press <space> to select, <a> to toggle all, <i> to invert selection)
? Continuous integration: GitHub Actions (GitHub only)
? What is your GitHub username? zuumi
? Version control system: Git

...

```

## バージョン管理

現状、2 系で構築。ゆくゆくは 3 系にしていきたい..!

```bash
$ npm list vue
pokemon-party@1.0.0 /Users/yoooshiii/iam-kawazumi/pokemon-party
├─┬ @nuxtjs/vuetify@1.12.3
│ └─┬ vuetify-loader@1.9.2
│   └── vue@2.7.14 deduped
├─┬ @vue/test-utils@1.3.6
│ └── vue@2.7.14 deduped
├─┬ nuxt@2.17.1
│ ├─┬ @nuxt/babel-preset-app@2.17.1
│ │ └─┬ @vue/babel-preset-jsx@1.4.0
│ │   └── vue@2.7.14 deduped
│ ├─┬ @nuxt/vue-app@2.17.1
│ │ ├── vue@2.7.14 deduped
│ │ └─┬ vuex@3.6.2
│ │   └── vue@2.7.14 deduped
│ └─┬ @nuxt/vue-renderer@2.17.1
│   └── vue@2.7.14 deduped
├─┬ v-tooltip@2.1.3
│ └─┬ vue-resize@1.0.1
│   └── vue@2.7.14 deduped
├─┬ vue-jest@3.0.7
│ └── vue@2.7.14 deduped
├── vue@2.7.14
└─┬ vuetify@2.7.1
  └── vue@2.7.14 deduped
```

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out the [documentation](https://nuxtjs.org).

## Linter の活用

```bash
# prettierを使って自動フォーマット
$ npx prettier --check [filename]
$ npx prettier --write [filename]
```

## Special Directories

You can create the following extra directories, some of which have special behaviors. Only `pages` is required; you can delete them if you don't want to use their functionality.

### `assets`

The assets directory contains your uncompiled assets such as Stylus or Sass files, images, or fonts.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/assets).

### `components`

The components directory contains your Vue.js components. Components make up the different parts of your page and can be reused and imported into your pages, layouts and even other components.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/components).

### `layouts`

Layouts are a great help when you want to change the look and feel of your Nuxt app, whether you want to include a sidebar or have distinct layouts for mobile and desktop.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/layouts).

### `pages`

This directory contains your application views and routes. Nuxt will read all the `*.vue` files inside this directory and setup Vue Router automatically.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/get-started/routing).

### `plugins`

The plugins directory contains JavaScript plugins that you want to run before instantiating the root Vue.js Application. This is the place to add Vue plugins and to inject functions or constants. Every time you need to use `Vue.use()`, you should create a file in `plugins/` and add its path to plugins in `nuxt.config.js`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/plugins).

### `static`

This directory contains your static files. Each file inside this directory is mapped to `/`.

Example: `/static/robots.txt` is mapped as `/robots.txt`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/static).

### `store`

This directory contains your Vuex store files. Creating a file in this directory automatically activates Vuex.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/store).
