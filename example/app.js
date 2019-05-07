module.exports = {
  state: {
    logotext: '@magic/css',
    menu: [
      { to: '/#installation', text: 'installation' },
      { to: '/#require', text: 'require' },
      {
        to: '/#api',
        text: 'api',
        items: [
          { to: '/#api-css', text: 'css (full result)' },
          { to: '/#api-parse', text: 'parse' },
          { to: '/#api-stringify', text: 'stringify' },
          { to: '/#api-write', text: 'write to filesystem' },
        ],
      },
      {
        to: '/#styles',
        text: 'styles',
        items: [
          { to: '/#styles-pseudo-classes', text: ':pseudo classes' },
          { to: '/#styles-selector-nesting', text: 'selector nesting' },
          { to: '/#styles-prefix-with-space', text: 'prefix w/ space' },
          { to: '/#styles-prefix-all-with-space', text: 'prefix all w/ space' },
          { to: '/#styles-prefix-without-space', text: 'prefix w/o space' },
          { to: '/#styles-prefix-all-without-space', text: 'prefix all w/o space' },
          { to: '/#styles-media-queries', text: 'media queries' },
          { to: '/#styles-keyframes', text: 'keyframes' },
          { to: '/#styles-webfonts', text: 'webfonts' },
        ],
      },
      {
        to: '/#changelog',
        text: 'changelog',
        items: [
          { to: '/#changelog-v-0.1.0', text: '0.1.0' },
          { to: '/#changelog-v-0.2.0', text: '0.2.0' },
          { to: '/#changelog-v-0.3.0', text: '0.3.0' },
          { to: '/#changelog-v-0.4.0', text: '0.4.0' },
          { to: '/#changelog-v-0.4.1', text: '0.4.1' },
          { to: '/#changelog-v-0.4.2', text: '0.4.2' },
          { to: '/#changelog-v-0.4.3', text: '0.4.3' },
          { to: '/#changelog-v-0.4.4', text: '0.4.4' },
        ],
      },
      { to: '/#source', text: 'source' },
    ],
  },
}
