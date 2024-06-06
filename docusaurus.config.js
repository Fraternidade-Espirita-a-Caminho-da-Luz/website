// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Fraternidade Espírita A Caminho da Luz',
  tagline: 'A Caminho da Luz',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://Fraternidade-Espirita-a-Caminho-da-Luz.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/website/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Fraternidade-Espirita-a-Caminho-da-Luz', // Usually your GitHub org/user name.
  projectName: 'website', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'pt-BR',
    locales: ['pt-BR'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:''
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl: '',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      // image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'A Caminho da Luz',
        // logo: {
        //   alt: 'logo website',
        //   src: 'img/logo.svg',
        // },
        items: [
          // {
          //   type: 'docSidebar',
          //   sidebarId: 'tutorialSidebar',
          //   position: 'left',
          //   label: 'Tutorial',
          // },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://www.facebook.com/fraterespacaminhodaluz',
            label: 'Facebook',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Comunidade',
            items: [
              {
                label: 'Facebook',
                href: 'https://www.facebook.com/fraterespacaminhodaluz',
              },
            ],
          },
          {
            title: 'Outros',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/Fraternidade-Espirita-a-Caminho-da-Luz/website',
              },
            ],
          },
          {
            title: 'Visite-nos',
            items: [
              {
                label: 'Rua Elvino Jorge, 37, Monte Azul - MG, 39500-000',
                href: 'https://www.google.com.br/maps/place/Fraternidade+Esp%C3%ADrita+A+Caminho+da+Luz/@-15.159741,-42.8617908,16z/data=!4m14!1m7!3m6!1s0x75035d7a2c247bd:0xec1563e83823caa4!2sFraternidade+Esp%C3%ADrita+A+Caminho+da+Luz!8m2!3d-15.1615153!4d-42.8625472!16s%2Fg%2F11v0bdh22n!3m5!1s0x75035d7a2c247bd:0xec1563e83823caa4!8m2!3d-15.1615153!4d-42.8625472!16s%2Fg%2F11v0bdh22n?entry=ttu',
              },
              {
                label: '(38) 9 9223-2973',
                href: 'tel:+5538992232973'
              }
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Fraternidade Espírita A Caminho da Luz's Website, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
