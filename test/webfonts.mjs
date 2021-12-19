import css from '../src/index.mjs'

const fontFamily = {
  '@font-face': {
    fontFamily: 'font-name',
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontDir: '/root/',
  },
}

const expect = ({ css }) =>
  css ===
  [
    '@font-face {',
    "font-family: 'font-name';",
    'font-weight: normal;',
    'font-style: normal;',
    "src: url('/root/font-name.eot');",
    "src: url('/root/font-name.eot#iefix') format('embedded-opentype'),",
    "url('/root/font-name.ttf') format('truetype'),",
    "url('/root/font-name.woff2') format('woff2'),",
    "url('/root/font-name.woff') format('woff'),",
    "url('/root/font-name.svg#font-name') format('svg');",
    '}\n',
  ].join(' ')

export default [
  { fn: async () => await css(fontFamily), expect, info: 'can handle web fonts' },
  {
    fn: async () => await css(fontFamily),
    expect: ({ css }) => css.includes('/root/'),
    info: 'setting font-face root dir works',
  },
]
