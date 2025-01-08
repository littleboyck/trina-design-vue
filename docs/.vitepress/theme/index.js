// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import tnDesign from '@cztrina/design-vue'
import DemoPreview, { useComponents } from '@vitepress-code-preview/container'
import ApiTable from '../components/ApiTable.vue';
import '@vitepress-code-preview/container/dist/style.css'
import 'virtual:group-icons.css'

import '../styles/style.css'
import '../styles/custom.less'


/** @type {import('vitepress').Theme} */
export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    useComponents(app, DemoPreview)
    app.use(tnDesign)
    app.component('ApiTable', ApiTable)
  }
}
