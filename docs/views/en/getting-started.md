---
layout: doc
---

#### Node Version Mananger 
1. if you are a windows user, recommended use [nvm-windows](https://github.com/coreybutler/nvm-windows/releases)
2. if you are a Mac user, recommended use [n](https://www.npmjs.com/package/n) or `fnm`


#### Node.js and Vue.js Requirements
* `vue>=3.2.0`，`node>=18.10.0`

#### Install

::: code-group

```sh [npm]
npm install @cztrina/design-vue
```

```sh [yarn]
yarn add @cztrina/design-vue
```

```sh [pnpm]
pnpm add @cztrina/design-vue
```

:::

#### Full Import
::: code-group

```js:line-numbers {3-4,7} [main.js]
import { createApp } from 'vue'
import App from './App.vue'
import TnDesV from '@cztrina/design-vue'
import '@cztrina/design-vue/es/theme-chalk/index.css'

const app = createApp(App)
app.use(TnDesV)
app.mount('#app')

```
:::


#### On-Demand Import
1. Install [unplugin-vue-components](hhttps://www.npmjs.com/package/unplugin-vue-components)

::: code-group

```sh [npm]
npm i unplugin-vue-components -D
```

```sh [yarn]
yarn add unplugin-vue-components -D
```

```sh [pnpm]
pnpm add unplugin-vue-components -D
```
:::

2. Configure `vite.config.js`
```js:line-numbers {3,7-11} [vite.config.js]
import { defineConfig } from 'vite'
import Components from 'unplugin-vue-components/vite'
import { tnsResolver } from '@cztrina/design-vue/lib/util/tnsResolver'

export default defineConfig({
  plugins: [
    Components({
      resolvers: [
        tnsResolver()
      ],
    }),
  ],
})

```

