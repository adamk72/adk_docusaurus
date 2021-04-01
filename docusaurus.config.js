/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Adam Kecskes Consulting',
  tagline: 'Less Effort, Better Results',
  url: 'https://kecskes.net',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'adamk72', // Usually your GitHub org/user name.
  projectName: 'adk_consulting', // Usually your repo name.
  themeConfig: {
    colorMode: {
      respectPrefersColorScheme: true
    },
    image: 'img/teamwork.png',
    navbar: {
      title: 'Adam Kecskes Consulting',
      logo: {
        alt: 'Teamwork Site Logo',
        src: 'img/teamwork.png',
      },
      items: [
        {
          label: 'Consulting',
          position: 'left',
          items: [
            {
              to: 'about', label: 'About'
            },
            {
              to: 'services', label: 'Services'
            },

          ]
        },
        {
          label: 'Learning', position: 'left',
          items: [
            { to: 'docs/vue', label: 'Vue', position: 'left' },
            { to: 'docs/speakingLessons', label: 'Speaking', position: 'left' },
            { to: 'docs/', activeBasePath: 'docs', label: 'Docs', position: 'left' }
          ]
        },
        {
          label: 'Blogs', position: 'left',
          items: [
            { to: 'blog', label: 'Tech & PM Blog', position: 'left' },
          ]
        },

        {
          href: 'https://github.com/adamk72',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Light Reading',
          items: [
            {
              label: 'Getting Started',
              to: 'docs/',
            },
            {
              label: 'Tech & PM Blog',
              to: 'blog',
            },
            // {
            //   label: 'Speaking Blog',
            //   to: 'speak',
            // },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'LinkedIn',
              href: 'https://linkedin.com/in/adamkecskes/'
            },
            {
              label: 'GitHub',
              href: 'https://github.com/adamk72',
            },
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/users/13907148/adam-kecskes',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/akecskes',
            },
          ],
        },
        {
          title: 'Credits',
          items: [
            { label: 'Freepik Icons', href: 'https://www.flaticon.com/authors/freepik' },
            { label: 'Eucalyp Icons', href: 'https://creativemarket.com/eucalyp' },
            { label: 'PIRO4D', href: "https://pixabay.com/users/piro4d-2707530/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2534484" },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Adam Kecskes Consulting`,

    },

  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: [require.resolve('./src/css/decorators.scss'), require.resolve('./src/css/custom.css'), require.resolve('./src/css/grids.css')]
        },
      },
    ],
  ],
  // plugins: [
  //   [
  //     '@docusaurus/plugin-content-blog',
  //     {
  //       // Required for any multi-instance plugin
  //       id: 'speaker-blog',
  //       // URL route for the blog section of your site. *DO NOT* include a trailing slash.
  //       routeBasePath: 'speak',
  //       // Path to data on filesystem relative to site dir.
  //       path: 'speak',
  //     },
  //   ],
  // ],
  plugins: ['docusaurus-plugin-sass'],
};
