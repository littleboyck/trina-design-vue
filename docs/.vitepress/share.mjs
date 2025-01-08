import { defineConfig } from 'vitepress'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { fileURLToPath, URL } from 'node:url'
import { demoPreviewPlugin, viteDemoPreviewPlugin } from '@vitepress-code-preview/plugin'
import { groupIconMdPlugin, groupIconVitePlugin } from 'vitepress-plugin-group-icons'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/trina-design-vue/',
  srcDir: './views',
  cleanUrls: true,
  i18nRouting: true, // 会根据 locales 配置生成多语言的路由
  rewrites: {
    'zh/:rest*': ':rest*'
  },
  themeConfig: {
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
    ],
    search: {
      provider: 'local'
    }
  },
  markdown: {
    config(md) {
      const docRoot = fileURLToPath(new URL('../views', import.meta.url))
      md.use(demoPreviewPlugin, { docRoot });
      md.use(groupIconMdPlugin)
    },
  },
  vite: {
    plugins: [
      vueJsx(),
      viteDemoPreviewPlugin(),
      groupIconVitePlugin()
    ],
    // server: {
    //   port: 3000, // 修改服务器端口
    //   proxy: {
    //     '/api': {
    //       target: 'http://localhost:3000',
    //       // changeOrigin: true,
    //       // rewrite: path => path.replace(/^\/api/, '/api/'),
    //       configure: (proxy, options) => {
    //         // proxy 是 'http-proxy' 的实例
    //         proxy.on('proxyRes', (proxyRes, req, res) => {
    //           console.log('proxyRes')
    //           proxyRes.headers['Content-Type'] = 'application/json'
    //         })
    //       }
    //     }
    //   }


    //   // middlewareMode: true, // 启用中间件模式
    //   // setupMiddlewares: (middlewares) => {
    //   //   middlewares.use('/api', async (req, res, next) => {
    //   //     res.setHeader('Content-Type', 'application/json')
    //   //     res.end(JSON.stringify({ message: 'Hello VitePress!' }))
    //   //   })
    //   //   return middlewares
    //   // }
    // }
  }
})
