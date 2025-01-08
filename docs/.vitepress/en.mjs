import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Tinasolar Design Vue PC",
  description: "Base Ant-design-vue Vue3.0 component library", // 
  themeConfig: {
    outline: {
      label: 'Table of Contents',
      level: 4
    },
    nav: [
      { text: 'Home', link: '/en/' },
      { text: 'Getting Started', link: '/en/getting-started' },
      { text: 'Components', link: '/en/components/button' },
    ],

    sidebar: {
      '/en/getting-started': [
        { text: 'Getting Started', link: '/en/getting-started' }
      ],
      'en/components': [
        {
          text: 'Components',
          items: [
            { 
              text: 'General',
              base: '/en/components',
              items: [
                { text: 'Button', link: '/button' },
                { text: 'Input', link: '/input' }
              ] 
            },
            {
              text: 'Layout',
              base: '/en/components',
              items: [
                { text: 'Grid', link: '/grid' },
                { text: 'Layout', link: '/layout' },
                { text: 'Space', link: '/space' },
              ] 
            }
          ]
        }
      ]
    },

    search: {
      provider: 'local',
    },
  },
})