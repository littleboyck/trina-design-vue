import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { resolve } from 'path'
// import dts from 'vite-plugin-dts'

//指定配置文件 https://cn.vite.dev/config/#configuring-vite
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
  ],
  build: {
    minify: false,
    cssCodeSplit: true, // 强制内联CSS
    rollupOptions: {
      external: [
        'vue',
        'ant-design-vue',
        /node_modules/
      ],
      // input: {
      //   "util/index": resolve(__dirname, '../packages/util/index.js'),
      //   "index": resolve(__dirname, '../packages/components/index.js')
      // },
      output: [
        {
          format: 'es',
          dir: 'es',
          entryFileNames: (chunk) => {
            return `${chunk.name.replace(/\.(vue|jsx|tsx)/, '')}.mjs`
          },
          preserveModules: true,
          preserveModulesRoot: 'components',
          assetFileNames: (asset) => {
            // const compName = /^([^/]+)/.exec(asset.name)[1];
            // return `${compName}/style/${compName}[extname]`
            return `${asset.name.replace(/src/, 'style')}`
          }
        },
        {
          format: 'cjs',
          dir: 'lib',
          entryFileNames: (chunk) => {
            // console.log(chunk.name)
            return `${chunk.name.replace(/\.(vue|jsx|tsx)/, '')}.cjs`
          },
          preserveModules: true,
          preserveModulesRoot: 'components',
          exports: 'named',
          assetFileNames: (asset) => {
            return `${asset.name.replace(/src/, 'style')}`
          }
        }
      ]
    },
    lib: {
      entry: {
        // "util/index": resolve(__dirname, '../packages/util/index.js'),
        "index": resolve(__dirname, '../packages/components/index.js')
      }
    }
  }
})