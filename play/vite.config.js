import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import Components from 'unplugin-vue-components/vite'
// import { tnsResolver } from '@cztrina/design-vue/lib/util/tnsResolver'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // Components({
    //   resolvers: [
    //     tnsResolver()
    //   ],
    // }),
  ],
})
