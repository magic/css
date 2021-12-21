export const state = {
  title: '@magic/css',
  description: 'parse/stringify/write css in js',

  logotext: '@magic/css',
  menu: [
    { to: '/#installation', text: 'installation' },
    { to: '/#cli', text: 'cli' },
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
    { to: '/#source', text: 'source' },
  ],
}
