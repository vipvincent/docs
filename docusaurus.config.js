// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'vipvincent Docs',
  tagline: 'Welcome to vipvincent Docs',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://vipvincent.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/docs/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'vipvincent', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.
  trailingSlash: false, // trailing slash

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'tw',
    locales: ['en','tw'],
    path: 'i18n',
	localeConfigs: {
		'en': {
			label: 'English',
			direction: 'ltr',
      path:'en',
		},
		'tw': {
			label: '中文',
			direction: 'ltr',
      path:'tw',
		}
	}
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/', // Serve the docs at the site's root
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: false,
        // blog: {
          // showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        // },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/logo.png',
      navbar: {
        title: '早安豆江文檔',
        logo: {
          alt: 'vipvincent logo',
          src: 'img/logo.png',
        },
        items: [
          {
            to: '/deathswap',
            label: '死亡交換',
            position: 'left',
          },
          {
            to: '/invisibility-itemframe',
            label: '合成隱形物品展示框',
            position: 'left',
          },
          {
            to: '/elytra_chestplate',
            label: '鞘翅胸甲',
            position: 'left',
          },
		      {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            href: 'https://www.youtube.com/@vipvincentgame',
            position: 'right',
            html: '<i class="fa-brands fa-youtube fa-lg"></i>',
          },
          {
            href: 'https://discord.gg/3BKAydVfDk',
            position: 'right',
            html: '<i class="fa-brands fa-discord fa-lg"></i>',
          },
          {
            href: 'https://github.com/vipvincent',
            position: 'right',
            html: '<i class="fa-brands fa-github fa-lg"></i>',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: '文檔',
            items: [
              {
                to: '/deathswap',
                label: '死亡交換',
              },
              {
                to: '/invisibility-itemframe',
                label: '合成隱形物品展示框',
              },
              {
                to: '/elytra_chestplate',
                label: '鞘翅胸甲',
              },
            ],
          },
          {
            title: '連結',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/vipvincent',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/3BKAydVfDk',
              },
              {
                label: 'Modrinth',
                href: 'https://modrinth.com/user/vipvincent1107',
              },
              {
                label: 'CurseForge',
                href: 'https://www.curseforge.com/members/vipvincent/projects',
              },
              {
                label: 'Planet Minecraft',
                href: 'https://www.planetminecraft.com/member/vipvincent/',
              },
              {
                label: 'YouTube',
                href: 'https://www.youtube.com/@vipvincentgame',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} vipvincent. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
    }),
};

export default config;
