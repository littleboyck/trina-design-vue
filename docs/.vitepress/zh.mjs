import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "天合组件库",
  description: "一个基于ant-design-vue 4.x的业务组件库",
  themeConfig: {
    outline: {
      label: '目录',
      level: 4
    },
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    nav: [
      { text: '首页', link: '/' },
      { text: '快速开始', link: '/getting-started' },
      { text: '组件', link: '/components/button' },
    ],

    sidebar: {
      '/getting-started': [
        { text: '快速开始', link: '/getting-started' }
      ],
      '/components': [
        {
          text: '组件',
          items: [
            { 
              text: '通用',
              base: '/components',
              items: [
                { text: 'Button <span class="sub-text">按钮</span>', link: '/button' },
                { text: 'Input <span class="sub-text">输入框</span>', link: '/input' }
              ] 
            },
            {
              text: '布局',
              base: '/components',
              items: [
                { text: 'Grid <span class="sub-text">栅格</span>', link: '/grid' },
                { text: 'Layout <span class="sub-text">布局</span>', link: '/layout' },
                { text: 'Space <span class="sub-text">间距</span>', link: '/space' },
              ] 
            }
          ]
        }
      ]
    },

    search: {
      provider: 'local',
      options: {
        detailedView: true,
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档'
          },
          modal: {
            noResultsText: '无法找到相关结果',
            resetButtonTitle: '清除查询条件',
            footer: {
              selectText: '选择',
              navigateText: '切换'
            }
          }
        },
      }
    },
  },
})