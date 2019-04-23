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
          { to: '/#pseudo classes: (:hover, :active)', text: 'pseudo classes: (:hover, :active)' },
          { to: '/#selector-nesting', text: 'selector nesting' },
          { to: '/#media-queries', text: 'media queries' },
          { to: '/#keyframes', text: 'keyframes for animations' },
          { to: '/#webfonts', text: 'webfonts' },
        ],
      },
      {
        to: '/#changelog',
        text: 'changelog',
        items: [
          { to: '#v-0.1.0', text: '0.1.0' },
          { to: '#v-0.2.0', text: '0.2.0' },
          { to: '#v-0.3.0', text: '0.3.0' },
          { to: '#v-0.4.0', text: '0.4.0' },
          { to: '#v-0.4.1', text: '0.4.1' },
          { to: '#v-0.4.2', text: '0.4.2' },
          { to: '#v-0.4.3', text: '0.4.3' },
        ],
      },
    ],
  },
}
