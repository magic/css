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
    body: { color: 'red' },
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

const overflowXString = 'body { overflow-x: 20px; }\n'

const fontV2 = {
  '@font-face': {
    family: 'font-family-v2',
    url: '/url/',
    styles: {
      normal: {
        400: ['FontFamilyv2', 'Font Family v2'],
      },
      italic: {
        400: ['FontFamilyv2Italic', 'FontFamilyv2-Italic'],
      },
    },
  },
}

const fontV2String = `@font-face { font-family: \"font-family-v2\"; font-style: normal; font-weight: 400; src: local(FontFamilyv2),local(Font Family v2),url('/url/font-family-v2-400-normal.woff2') format('woff2'); }\n\n@font-face { font-family: \"font-family-v2\"; font-style: italic; font-weight: 400; src: local(FontFamilyv2Italic),local(FontFamilyv2-Italic),url('/url/font-family-v2-400-italic.woff2') format('woff2'); }\n`

export default [
  {
    fn: css.parse(styleArray),
    expect: css.parse(styleObject),
    info: 'parse test => array and object should be parsed to the same structure.',
  },
  { fn: css.stringify(styleArray), expect: stringifiedString, info: 'stringify test' },
  {
    fn: css.stringify(overflowX),
    expect: overflowXString,
    info: 'test of overflow-x works, to make sure kebab2camel works correctly.',
  },
  { fn: css.stringify(fontV2), expect: fontV2String, info: 'font v2 test' },
  {
    fn: css.parse(() => styleArray),
    expect: css.parse(styleObject),
    info: 'theme can be a function returning an array.',
  },
]
