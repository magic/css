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

const fontV1 = {
  '@font-face': {
    url: '/url/',
    family: 'font-name',
    types: ['eot', 'ttf', 'woff2', 'woff', 'svg'],
    weights: [400, 500, 600],
    styles: ['normal', 'italic'],
  },
}

const fontV1String = `
@font-face { font-family: 'font-name'; font-style: normal; font-weight: 400; src: url('/url/font-name-400-normal.eot'); src: url('/url/font-name-400-normal.eot#iefix') format('embedded-opentype'),url('/url/font-name-400-normal.woff2') format('woff2'),url('/url/font-name-400-normal.woff') format('woff'),url('/url/font-name-400-normal.ttf') format('truetype'),url('/url/font-name-400-normal.svg#font-name') format('svg'); }

@font-face { font-family: 'font-name'; font-style: italic; font-weight: 400; src: url('/url/font-name-400-italic.eot'); src: url('/url/font-name-400-italic.eot#iefix') format('embedded-opentype'),url('/url/font-name-400-italic.woff2') format('woff2'),url('/url/font-name-400-italic.woff') format('woff'),url('/url/font-name-400-italic.ttf') format('truetype'),url('/url/font-name-400-italic.svg#font-name') format('svg'); }

@font-face { font-family: 'font-name'; font-style: normal; font-weight: 500; src: url('/url/font-name-500-normal.eot'); src: url('/url/font-name-500-normal.eot#iefix') format('embedded-opentype'),url('/url/font-name-500-normal.woff2') format('woff2'),url('/url/font-name-500-normal.woff') format('woff'),url('/url/font-name-500-normal.ttf') format('truetype'),url('/url/font-name-500-normal.svg#font-name') format('svg'); }

@font-face { font-family: 'font-name'; font-style: italic; font-weight: 500; src: url('/url/font-name-500-italic.eot'); src: url('/url/font-name-500-italic.eot#iefix') format('embedded-opentype'),url('/url/font-name-500-italic.woff2') format('woff2'),url('/url/font-name-500-italic.woff') format('woff'),url('/url/font-name-500-italic.ttf') format('truetype'),url('/url/font-name-500-italic.svg#font-name') format('svg'); }

@font-face { font-family: 'font-name'; font-style: normal; font-weight: 600; src: url('/url/font-name-600-normal.eot'); src: url('/url/font-name-600-normal.eot#iefix') format('embedded-opentype'),url('/url/font-name-600-normal.woff2') format('woff2'),url('/url/font-name-600-normal.woff') format('woff'),url('/url/font-name-600-normal.ttf') format('truetype'),url('/url/font-name-600-normal.svg#font-name') format('svg'); }

@font-face { font-family: 'font-name'; font-style: italic; font-weight: 600; src: url('/url/font-name-600-italic.eot'); src: url('/url/font-name-600-italic.eot#iefix') format('embedded-opentype'),url('/url/font-name-600-italic.woff2') format('woff2'),url('/url/font-name-600-italic.woff') format('woff'),url('/url/font-name-600-italic.ttf') format('truetype'),url('/url/font-name-600-italic.svg#font-name') format('svg'); }
`.trimStart()

export default [
  { fn: async () => await css(fontFamily), expect, info: 'can handle web fonts' },
  {
    fn: async () => await css(fontFamily),
    expect: ({ css }) => css.includes('/root/'),
    info: 'setting font-face root dir works',
  },
  { fn: css.stringify(fontV1), expect: fontV1String, info: 'stringify test' },
]
