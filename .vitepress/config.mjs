import { defineConfig } from 'vitepress';

export default defineConfig({
  title: 'Poji Wiki',
  description: 'A barebones wiki for the Poji manga reader.',
  cleanUrls: true,
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
    socialLinks: []
  }
});
