import { defineConfig } from 'vitepress';

export default defineConfig({
  title: 'Curiosity',
  description: 'Enterprise Cloud Apps for Atlassian Jira',
  base: '/curiosity/',
  cleanUrls: true,

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
          text: 'SBAM User Guide',
          items: [
            { text: 'Overview & Quick Start', link: '/apps/sbam/' },
            { text: 'Complete User Guide', link: '/apps/sbam/features' },
            { text: 'Administrator Guide', link: '/apps/sbam/admin-guide' },
            { text: 'FAQ & Troubleshooting', link: '/apps/sbam/faq' }
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
    },

    footer: {
      message: 'Published by Curiosity.',
      copyright: 'Copyright © 2026 Curiosity. All rights reserved.'
    }
  }
});