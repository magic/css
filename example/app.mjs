export const state = {
  title: '@magic/css',
  description: 'parse/stringify/write css in js',

  logotext: '@magic/css',
  menu: [
    { to: '/#installation', text: 'installation' },
    { to: '/#import', text: 'import' },
    {
      to: '/#api',
      text: 'api',
      items: [
        { to: '-css', text: 'css (full result)' },
        { to: '-parse', text: 'parse' },
        { to: '-stringify', text: 'stringify' },
        { to: '-write', text: 'write to filesystem' },
      ],
    },
    {
      to: '/#styles',
      text: 'styles',
      items: [
        { to: '-pseudo-classes', text: ':pseudo classes' },
        { to: '-selector-nesting', text: 'selector nesting' },
        { to: '-prefix-with-space', text: 'prefix w/ space' },
        { to: '-prefix-all-with-space', text: 'prefix all w/ space' },
        { to: '-prefix-without-space', text: 'prefix w/o space' },
        { to: '-prefix-all-without-space', text: 'prefix all w/o space' },
        { to: '-media-queries', text: 'media queries' },
        { to: '-keyframes', text: 'keyframes' },
        { to: '-webfonts', text: 'webfonts' },
      ],
    },
    {
      to: '/#changelog',
      text: 'changelog',
      items: [
        { to: '-v-0.1.0', text: '0.1.0' },
        { to: '-v-0.2.0', text: '0.2.0' },
        { to: '-v-0.3.0', text: '0.3.0' },
        { to: '-v-0.4.0', text: '0.4.0' },
        { to: '-v-0.4.1', text: '0.4.1' },
        { to: '-v-0.4.2', text: '0.4.2' },
        { to: '-v-0.4.3', text: '0.4.3' },
        { to: '-v-0.4.4', text: '0.4.4' },
        { to: '-v-0.4.5', text: '0.4.5' },
        { to: '-v-0.4.6', text: '0.4.6' },
        { to: '-v-0.4.7', text: '0.4.7' },
        { to: '-v-0.5.0', text: '0.5.0' },
      ],
    },
    { to: '/#source', text: 'source' },
  ],
}
