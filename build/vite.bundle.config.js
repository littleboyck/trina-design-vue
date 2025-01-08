import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { resolve } from 'path'

// https://cn.vite.dev/config/#configuring-vite
export default defineConfig({
  plugins: [
    vue(),
    vueJsx()
  ],
  build: {
    outDir: 'umd',
    rollupOptions: {
      // 请确保外部化那些你的库中不需要的依赖
      external: [
        'vue',
        // 'ant-design-vue'
      ],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue',
        },
      },
    },
    lib: {
      entry: resolve(__dirname, '../packages/components/index.js'),
      name: 'Tns',
      fileName: () => `tns.js`,
      formats: ['umd']
    }
  }
})