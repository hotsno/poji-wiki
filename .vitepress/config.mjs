import { defineConfig } from 'vitepress';

export default defineConfig({
  title: 'Poji Wiki',
  description: 'A barebones wiki for the Poji manga reader.',
  cleanUrls: true,
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }]
  ],
  themeConfig: {
    logo: '/logo.svg',
    search: {
      provider: 'local'
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about' },
      { text: 'Getting Started', link: '/getting-started' },
      { text: 'Features', link: '/features' },
      { text: 'FAQ', link: '/faq' }
    ],
    sidebar: [
      {
        text: 'Poji',
        items: [
          { text: 'About', link: '/about' },
          { text: 'Getting Started', link: '/getting-started' },
          { text: 'Features', link: '/features' },
          { text: 'FAQ', link: '/faq' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/hotsno/poji' },
      { icon: 'discord', link: 'https://discord.gg/2HwxyuSQHm' }
    ]
  }
});
