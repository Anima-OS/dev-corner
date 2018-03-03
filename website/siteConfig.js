/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* List of projects/orgs using your project for the users page */
const users = [
  {
  },
];

const siteConfig = {
  title: 'CDD - Anima Core Developer Directory' /* title for your website */,
  wrapPagesHTML: true,
  tagline: '',
  url: 'https://anima-os.github.com/dev-corner' /* your website url */,
  baseUrl: '/dev-corner/' /* base url for your project */,
  projectName: 'dev-corner',
  organizationName: 'Anima-OS',
  algolia: {
    apiKey: "47eb5aa5acd596f5eedca22a4c6e8f88",
    indexName: "anima_cdd"
  },
  headerLinks: [
    {doc: 'doc1', label: 'Docs'},
    {page: 'help', label: 'Help'},
    {blog: true, label: 'Blog'},
  ],
  users,
  editUrl: 'https://github.com/Anima-OS/dev-corner/edit/master/docs/',
  /* path to images for header/footer */
  headerIcon: 'img/tabster.png',
  footerIcon: 'img/tabster.png',
  favicon: 'img/tabster.png',
  /* colors for website */
  colors: {
    primaryColor: '#607d8b',
    secondaryColor: '#546e7a',
  },
  /* custom fonts for website */
  /*fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },*/
  // This copyright info is used in /core/Footer.js and blog rss/atom feeds.
  copyright:
    'Copyright © ' +
    new Date().getFullYear() +
    ' The Anima OS Developer Community',
  // organizationName: 'deltice', // or set an env variable ORGANIZATION_NAME
  // projectName: 'test-site', // or set an env variable PROJECT_NAME
  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks
    theme: 'default',
  },
  scripts: ['https://buttons.github.io/buttons.js'],
  // You may provide arbitrary config keys to be used as needed by your template.
  repoUrl: 'https://github.com/Anima-OS/dev-corner',
};

module.exports = siteConfig;
