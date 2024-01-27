// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer').themes.github;
const darkCodeTheme = require('prism-react-renderer').themes.dracula;
// const repoPath = 'inhere/inhere.github.io'
// docs see https://docusaurus.io/zh-CN/docs/api/docusaurus-config

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Inhere's Site",
  tagline: "Inhere's site, blogs and project docs",
  url: 'https://inhere.github.io',
  baseUrl: '/',
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'inhere', // Usually your GitHub org/user name.
  projectName: 'inhere.github.io', // Usually your repo name.
  deploymentBranch: 'gh-pages',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-CN',
    locales: [ "zh-CN", 'en'],
    localeConfigs: {
      en: {
        htmlLang: 'en-GB',
      },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          remarkPlugins: [
            [require('@docusaurus/remark-plugin-npm2yarn'), {sync: true}],
          ],
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/inhere/inhere.github.io/tree/main/',
        },
        blog: {
          showReadingTime: true,
          postsPerPage: 6,
          // routeBasePath: '/', // 把博客放在站点根部
          blogSidebarTitle: '📅最近文章',
          blogSidebarCount: 6, // 默认 5
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/inhere/inhere.github.io/tree/main/',
          remarkPlugins: [
            [require('@docusaurus/remark-plugin-npm2yarn'), {sync: true}],
          ],
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        hideOnScroll: true, // 自动隐藏顶部导航栏
        // dark or primary or just remove it and it will be light
        // style: 'primary',
        title: "Inhere's Site",
        logo: {
          alt: "Inhere's Site Logo",
          src: 'img/inhere-s03.png',
        },
        items: [
          {
            to: '/blog',
            label: 'Blog',
            position: 'left'
          },
          {
            to: '/blog/tags',
            label: 'Tags',
            position: 'left'
          },
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Docs',
          },
          // {
          //   to: '/docs/collections',
          //   docId: 'sites',
          //   label: 'Collections',
          //   position: 'left'
          // },
          {
            to: '/projects',
            label: 'Projects',
            position: 'left'
          },
          {
            to: '/about',
            label: 'About',
            position: 'left'
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            href: 'https://github.com/inhere',
            label: 'GitHub',
            position: 'right',
          },
          // {
          //   type: "docsVersionDropdown",
          //   position: "right",
          // },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Docs',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: "Inhere GitHub",
                href: 'https://github.com/inhere',
              },
              {
                label: "Gookit GitHub",
                href: 'https://github.com/gookit',
              },
              {
                label: "PHPPkg GitHub",
                href: 'https://github.com/phppkg',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'Blog Tags',
                to: '/blog/tags',
              },
              {
                label: 'Blog Archives',
                to: '/blog/archive',
              },
              {
                label: 'Site GitHub',
                href: 'https://github.com/inhere/inhere.github.io',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc.
         Built with <a target="block" href="https://github.com/facebook/docusaurus">Docusaurus</a>.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['powershell','php','java','go'],
      },
    }), // end theme config
    plugins: [
        // '@docusaurus/remark-plugin-npm2yarn',
    ],
    themes: [
      // '@saucelabs/theme-github-codeblock',
      [
        "@easyops-cn/docusaurus-search-local",
        {
          hashed: true,
          language: ["en", "zh"],
          highlightSearchTermsOnTargetPage: true,
          explicitSearchResultPath: true,
        },
      ],
    ],
};

module.exports = config;
