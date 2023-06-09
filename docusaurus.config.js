const path = require('path');
const prismic = require('@prismicio/client');
const fetch = require('node-fetch');

const VERSIONS_JSON = require('./versions.json');

const BASE_URL = '/docs';

module.exports = {
  title: 'NiWee Docs',
  tagline: 'On met le LA sur le WEB.',
  url: 'https://docs.niwee.fr',
  baseUrl: `/`,
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr'],
    localeConfigs: {
      en: { label: 'English' },
      fr: { label: 'Français' },
    },
  },
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/meta/favicon-96x96.png',
  organizationName: 'niwee-productions',
  projectName: 'niwee-docs',
  themeConfig: {
    metadata: [
      {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        name: 'twitter:domain',
        content: 'agence.niwee.fr',
      },
      {
        name: 'twitter:site',
        content: '@niweeprods',
      },
      {
        name: 'twitter:creator',
        content: 'niweeprods',
      },
      {
        name: 'fb:page_id',
        content: '110986020825135',
      },
      {
        name: 'og:type',
        content: 'website',
      },
      {
        name: 'og:site_name',
        content: 'NiWee Docs',
      },
    ],
    colorMode: {
      defaultMode: 'light',
    },
    navbar: {
      hideOnScroll: true,
      logo: {
        alt: 'Site Logo',
        src: `/logos/logo-light.svg`,
        srcDark: `/logos/logo-dark.svg`,
        href: '/',
        target: '_self',
        width: 200,
        height: 45,
      },
      items: [
        {
          type: 'doc',
          docId: 'index',
          label: 'Guide',
          position: 'left',
        },
        {
          href: '/admin',
          position: 'left',
          label: 'Admin',
          'aria-label': 'Decap CMS',
          target: '_blank',
        },
        {
          type: 'cta',
          position: 'left',
          text: 'Contact Us',
          href: `https://agence.niwee.fr/contact`,
        },
        {
          type: 'docsVersionDropdown',
          position: 'right',
          // dropdownItemsAfter: [{to: '/versions', label: 'All versions'}],
          dropdownActiveClassDisabled: true,
        },
        {
          type: 'search',
          position: 'right',
        },
        {
          label: 'Community',
          position: 'right',
          items: [
            {
              href: 'https://discord.niwee.fr',
              label: 'Discord',
              target: '_blank',
              rel: null,
            },
            {
              href: 'https://instagram.com/niwee.productions',
              label: 'Instagram',
              target: '_blank',
              rel: null,
            },
            {
              href: 'https://facebook.com/niwee.productions',
              label: 'Facebook',
              target: '_blank',
              rel: null,
            },
          ],
          className: 'navbar__link--community',
        },
        {
          label: 'Support',
          position: 'right',
          items: [
            {
              href: 'https://support.niwee.fr/',
              label: 'Customer Support',
              target: '_blank',
              rel: null,
            },
          ],
          className: 'navbar__link--support',
        },
        {
          type: 'separator',
          position: 'right',
        },
        {
          type: 'localeDropdown',
          position: 'right',
          dropdownItemsBefore: [],
          dropdownItemsAfter: [
            {
              href: 'https://ionicframework.com/translate',
              label: 'Translate',
              target: '_blank',
              rel: null,
            },
          ],
          className: 'icon-link language navbar__item',
        },
        {
          type: 'iconLink',
          position: 'right',
          icon: {
            alt: 'github logo',
            src: `/logos/github.svg`,
            href: 'https://github.com/niwee-productions',
            target: '_blank',
          },
        },
        {
          type: 'iconLink',
          position: 'right',
          icon: {
            alt: 'discord logo',
            src: `/logos/discord.svg`,
            href: 'https://discord.niwee.fr',
            target: '_blank',
          },
        },
      ],
    },
    tagManager: {
      trackingID: 'GTM-TKMGCBC',
    },
    prism: {
      theme: require('prism-react-renderer/themes/dracula'),
      additionalLanguages: ['shell-session', 'http'],
    },
    algolia: {
      appId: 'B5LWETZODF',
      apiKey: 'b1999dc10389f62776f7409ed85b96c0',
      indexName: 'niwee',
      contextualSearch: true,
    },
  },
  plugins: [
    'docusaurus-plugin-sass',
    [
      'docusaurus-plugin-module-alias',
      {
        alias: {
          'styled-components': path.resolve(__dirname, './node_modules/styled-components'),
          react: path.resolve(__dirname, './node_modules/react'),
          'react-dom': path.resolve(__dirname, './node_modules/react-dom'),
          '@components': path.resolve(__dirname, './src/components'),
        },
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        routeBasePath: '/',
        sidebarPath: require.resolve('./sidebars.js'),
        editUrl: ({ versionDocsDirPath, docPath, locale }) => {
          return `https://github.com/niwee-productions/docs/edit/main/${versionDocsDirPath}/${docPath}`;
        },
        exclude: ['README.md'],
        lastVersion: 'current',
        versions: {
          current: {
            label: 'v3',
          },
        },
      },
    ],
    '@docusaurus/plugin-content-pages',
    '@docusaurus/plugin-debug',
    '@docusaurus/plugin-sitemap',
  ],
  themes: [
    [
      //overriding the standard docusaurus-theme-classic to provide custom schema
      path.resolve(__dirname, 'docusaurus-theme-classic'),
      {
        customCss: [
          require.resolve('./node_modules/modern-normalize/modern-normalize.css'),
          require.resolve('./node_modules/@ionic-internal/ionic-ds/dist/tokens/tokens.css'),
          require.resolve('./src/styles/custom.scss'),
        ],
      },
    ],
    path.resolve(__dirname, './node_modules/@docusaurus/theme-search-algolia'),
  ],
  customFields: {},
};
