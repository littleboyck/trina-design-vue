import { defineConfig } from 'vitepress'
import share from './share.mjs'
import zh from './zh.mjs'
import en from './en.mjs'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  ...share,
  locales: {
    root: {
      lang: 'zh-CN',
      label: '简体中文',
      ...zh
    },
    en: {
      lang: 'en-US',
      label: 'English',
      ...en
    }
  },
})
