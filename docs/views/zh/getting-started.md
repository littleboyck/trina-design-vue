---
layout: doc
---

#### 关于node版本管理
1. 如果你是Windows用户，推荐使用[nvm-windows](https://github.com/coreybutler/nvm-windows/releases)
2. 如果你是Mac用户，推荐使用[n](https://www.npmjs.com/package/n)或者`fnm`


#### node和vue要求
* `vue>=3.2.0`，`node>=18.10.0`

#### 安装

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

#### 全量导入

```js:line-numbers {3-4,7} [main.js]
import { createApp } from 'vue'
import App from './App.vue'
import TnDesV from '@cztrina/design-vue'
import '@cztrina/design-vue/es/theme-chalk/index.css'

const app = createApp(App)
app.use(TnDesV)
app.mount('#app')

```


#### 按需导入
1. 安装[unplugin-vue-components](hhttps://www.npmjs.com/package/unplugin-vue-components)

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

2. `vite.config.js` 配置
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

