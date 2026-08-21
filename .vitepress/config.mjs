import { defineConfig } from 'vitepress';

export default defineConfig({
  title: 'Curiosity',
  description: 'Enterprise Cloud Apps for Atlassian Jira',
  base: '/curiosity/',
  cleanUrls: true,
  lastUpdated: true,

  themeConfig: {
    siteTitle: 'Curiosity Apps',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'SBAM Documentation', link: '/apps/sbam/' },
      { text: 'Support & SLA', link: '/support/' },
      {
        text: 'Legal',
        items: [
          { text: 'Privacy Policy', link: '/legal/privacy-policy' },
          { text: 'Terms of Service (EULA)', link: '/legal/terms-of-service' }
        ]
      }
    ],

    sidebar: {
      '/apps/sbam/': [
        {
          text: 'SBAM — Bulk Attachments',
          items: [
            { text: 'Overview & Quick Start', link: '/apps/sbam/' },
            { text: 'Features & Architecture', link: '/apps/sbam/features' }
          ]
        },
        {
          text: 'Legal & Support',
          items: [
            { text: 'Support & SLA', link: '/support/' },
            { text: 'Privacy Policy', link: '/legal/privacy-policy' },
            { text: 'Terms of Service', link: '/legal/terms-of-service' }
          ]
        }
      ],
      '/legal/': [
        {
          text: 'Legal Information',
          items: [
            { text: 'Privacy Policy', link: '/legal/privacy-policy' },
            { text: 'Terms of Service (EULA)', link: '/legal/terms-of-service' }
          ]
        }
      ],
      '/support/': [
        {
          text: 'Support',
          items: [
            { text: 'Contact & SLA Policy', link: '/support/' }
          ]
        }
      ]
    },

    footer: {
      message: 'Published on Atlassian Marketplace by Curiosity.',
      copyright: 'Copyright © 2026 Curiosity. All rights reserved.'
    }
  }
});