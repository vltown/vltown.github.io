const { resolve } = require('path')
const r = (path) => resolve(__dirname, path)
module.exports = {
  theme: 'antdocs',
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/title.ico',
      },
      "script",
      {
        src: "https://s4.cnzz.com/z_stat.php?id=1279667282&web_id=1279667282",
      }
    ],
  ],
  plugins: {
    '@vuepress/back-to-top': {},
  },
  locales: {
    /*'/en/': {
      lang: 'en-US',
      title: 'skimit server',
      description: 'A Minecraft 1.16.5 vanilla survival server',
    },*/
    '/': {
      lang: 'zh-CN',
      title: 'skimit服务器',
      description:
        '一个Minecraft1.16.5原版公益生存服务器',
    },
  },
  themeConfig: {
    logo: '/title.ico',
    displayAllHeaders: true,
    smoothScroll: true,
    /*sidebar: {
      //'/getting-started/': ['', 'step1', 'step2', 'step3', 'step4', 'step5'],
      '/manual/': ['', 'general', 'route'],
      '/hacking/': ['', 'manuallybuild', 'cmake-argument'],
      '/plugins/': ['', 'usage', 'v2ray-integration', 'development'],
      '/faq/': ['', 'v2ray-core'],
      '/en/getting-started/': ['', 'step1', 'step2', 'step3', 'step4', 'step5'],
      '/en/hacking/': ['', 'manuallybuild', 'cmake-argument', 'distribute'],
      '/en/manual/': ['', 'general', 'route'],
      '/en/plugins/': ['', 'usage', 'v2ray-integration', 'development'],
      '/en/faq/': ['', 'v2ray-core'],
    },*/
    locales: {
      /*'/en/': {
        selectText: '选择语言',
        ariaLabel: '选择语言',
        label: 'English',
        editLinkText: 'Edit this page',
        lastUpdated: 'Last Updated',
        nav: [
          {
            text: '',
            link: '',
          },
          {
            text: '',
            link: '',
          },
          {
            text: '',
            link: '',
          },
          {
            text: '',
            link: '',
          },
          {
            text: '',
            link: '',
          },
        ],
      },*/
      '/': {
        selectText: 'Languages',
        ariaLabel: 'Select language',
        label: '简体中文',
        editLinkText: '编辑此页',
        lastUpdated: '上次更新',
        contributorsLabel: '贡献者',
        nav: [
          {
            text: '指南',
            link: '/guide/',
          },
          {
            text: '服务器地图',
            link: '/map/',
          },
          {
            text: '规定',
            link: '/rules/',
          },
          {
            text: '日志（建设中）',
            link: '/log/',
          },
          {
            text: '捐助',
            link: '/donate/',
          },
        ],
      },
    },
    repo: 'skimitmc/skimit.cn',
    repoLabel: 'GitHub',
    docsRepo: 'skimitmc/skimit.cn',
    docsBranch: 'master',
    docsDir: '.',
    editLinks: true,
    }
}
