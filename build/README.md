## 起步
1. 安装依赖包  
  * `npm i @cztrina/design-vue`
  * `yarn add @cztrina/design-vue`
  * `pnpm add @cztrina/design-vue`

2. 引入方式  
  2.1. 全量引入
  ```js 
  // main.js
  import { createApp } from 'vue'
  import tnv from '@cztrina/design-vue'
  import '@cztrina/design-vue/es/theme-chalk/index.css'
  // 引入重置样式, 无论按需与否，都需要引入
  import '@cztrina/design-vue/es/components/base/style/css'
  const app = createApp(App);
  app
  .use(tnv)
  .mount('#app');
  ```
  2.2. 按需引入，安装`unplugin-vue-components`插件  
  * `npm i unplugin-vue-components -D`  
  * `yarn add unplugin-vue-components -D`  
  * `pnpm add unplugin-vue-components -D`

  2.3. 在`vite.config.js`配置如下：
  ```js
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

## 组件使用
1. 组件使用和ant-design-vue完全一致，只需要把组件前缀`a-xxx`改为`tn-xxx`即可
2. 对于业务组件的前缀是`tns-`，也就是我们自定义拓展的组件


```json
{
  "name": "@cztrina/design-vue",
  "exports": {
    ".": { -> "@cztrina/design-vue"
      "import": "./es/index.js", // import 方式导入引入的文件
      "require": "./lib/index.js" // require 方式导入引入的文件
    },
    "./es": "./es/index.js", // -> "@cztrina/design-vue/es"
    "./lib": "./lib/index.js", // -> "@cztrina/design-vue/lib"
    "./*": "./*" // -> @cztrina/design-vue/a/b/c -> 任意级别路径的访问
  }
}
```