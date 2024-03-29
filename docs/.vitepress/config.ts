import { demoBlockPlugin } from 'vitepress-theme-demoblock'

const sidebar = {
  "/": [
    { text: "快速开始", link: "/" },
    {
      text: "Composables", children: [
        { text: "usePage", link: "/composables/use-page/"}
      ]
    }
  ]
}

const nav = [
  { text: 'Github', link: 'https://github.com/kagol/vueuse-components' }
]

const config = {
  base: '/vueuse-components/',
  title: 'Vueuse Components',
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/assets/logo.svg' }],
  ],
  themeConfig: {
    sidebar,
    nav,
    logo: '/assets/logo.svg',
  },
  markdown: {
    config: (md) => {
      // 这里可以使用 markdown-it 插件，vitepress-theme-demoblock就是基于此开发的
      md.use(demoBlockPlugin)
    }
  }
}

export default config