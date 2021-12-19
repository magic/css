import css from '../src/index.mjs'

const styleObject = {
  body: {
    color: 'green',
  },
  '@font-face': {
    url: '/url/',
    family: 'font-name',
    types: ['eot', 'ttf', 'woff2', 'woff', 'svg'],
    weights: [400, 500, 600],
    styles: ['normal', 'italic'],
  },
}

const styleArray = [
  {
    body: {
      color: 'red',
    },
  },
  [
    {
      body: {
        color: 'green',
      },
      '@font-face': {
        url: '/url/',
        family: 'font-name',
        types: ['eot', 'ttf', 'woff2', 'woff', 'svg'],
        weights: [400, 500, 600],
        styles: ['normal', 'italic'],
      },
    },
  ],
]

const stringifiedString = `
body { color: green; }
 @font-face { font-family: "font-name"; font-style: normal; font-weight: 400; src: url('/url/font-name-400-normal.eot'); src: url('/url/font-name-400-normal.eot#iefix') format('embedded-opentype'),url('/url/font-name-400-normal.woff2') format('woff2'),url('/url/font-name-400-normal.woff') format('woff'),url('/url/font-name-400-normal.ttf') format('truetype'),url('/url/font-name-400-normal.svg#font-name') format('svg'); }

@font-face { font-family: "font-name"; font-style: italic; font-weight: 400; src: url('/url/font-name-400-italic.eot'); src: url('/url/font-name-400-italic.eot#iefix') format('embedded-opentype'),url('/url/font-name-400-italic.woff2') format('woff2'),url('/url/font-name-400-italic.woff') format('woff'),url('/url/font-name-400-italic.ttf') format('truetype'),url('/url/font-name-400-italic.svg#font-name') format('svg'); }

@font-face { font-family: "font-name"; font-style: normal; font-weight: 500; src: url('/url/font-name-500-normal.eot'); src: url('/url/font-name-500-normal.eot#iefix') format('embedded-opentype'),url('/url/font-name-500-normal.woff2') format('woff2'),url('/url/font-name-500-normal.woff') format('woff'),url('/url/font-name-500-normal.ttf') format('truetype'),url('/url/font-name-500-normal.svg#font-name') format('svg'); }

@font-face { font-family: "font-name"; font-style: italic; font-weight: 500; src: url('/url/font-name-500-italic.eot'); src: url('/url/font-name-500-italic.eot#iefix') format('embedded-opentype'),url('/url/font-name-500-italic.woff2') format('woff2'),url('/url/font-name-500-italic.woff') format('woff'),url('/url/font-name-500-italic.ttf') format('truetype'),url('/url/font-name-500-italic.svg#font-name') format('svg'); }

@font-face { font-family: "font-name"; font-style: normal; font-weight: 600; src: url('/url/font-name-600-normal.eot'); src: url('/url/font-name-600-normal.eot#iefix') format('embedded-opentype'),url('/url/font-name-600-normal.woff2') format('woff2'),url('/url/font-name-600-normal.woff') format('woff'),url('/url/font-name-600-normal.ttf') format('truetype'),url('/url/font-name-600-normal.svg#font-name') format('svg'); }

@font-face { font-family: "font-name"; font-style: italic; font-weight: 600; src: url('/url/font-name-600-italic.eot'); src: url('/url/font-name-600-italic.eot#iefix') format('embedded-opentype'),url('/url/font-name-600-italic.woff2') format('woff2'),url('/url/font-name-600-italic.woff') format('woff'),url('/url/font-name-600-italic.ttf') format('truetype'),url('/url/font-name-600-italic.svg#font-name') format('svg'); }
`.trimStart()

const overflowX = {
  body: {
    overflowX: '20px',
  },
}

const overflowXString = `body { overflow-x: 20px; }`

export default [
  { fn: css.parse(styleArray), expect: css.parse(styleObject) },
  { fn: css.stringify(styleArray), expect: t => t.trim() === stringifiedString },
  { fn: css.stringify(overflowX), expect: t => t.trim() === overflowXString },
]
