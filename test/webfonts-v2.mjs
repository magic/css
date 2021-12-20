import css from '../src/index.mjs'

const fontV2 = {
  '@font-face': {
    family: 'font-family-v2',
    url: '/url/',
    styles: {
      normal: {
        400: [ 'FontFamilyv2', 'Font Family v2' ],
      },
      italic: {
        400: [ 'FontFamilyv2Italic', 'FontFamilyv2-Italic' ],
      },
    },
  },
}

const fontV2String = "@font-face { font-family: 'font-family-v2'; font-style: normal; font-weight: 400; src: local('FontFamilyv2'),local('Font Family v2'),url('/url/font-family-v2-400-normal.woff2') format('woff2'); }\n\n@font-face { font-family: 'font-family-v2'; font-style: italic; font-weight: 400; src: local('FontFamilyv2Italic'),local('FontFamilyv2-Italic'),url('/url/font-family-v2-400-italic.woff2') format('woff2'); }\n"

const fontV2Example = {
  '@font-face': {
    family: 'font-name',
    url: '/fonts/',
    styles: {
      normal: {
        400: [ 'FontName', 'Font Name' ],
        600: [ 'FontNameBold', 'Font Name Bold' ]
      },
      italic: {
        400: [ 'FontNameItalic', 'Font Name Italic' ],
      },
    },
  },
}

const fontV2ExampleString = "@font-face { font-family: 'font-name'; font-style: normal; font-weight: 400; src: local('FontName'),local('Font Name'),url('/fonts/font-name-400-normal.woff2') format('woff2'); }\n\n@font-face { font-family: 'font-name'; font-style: normal; font-weight: 600; src: local('FontNameBold'),local('Font Name Bold'),url('/fonts/font-name-600-normal.woff2') format('woff2'); }\n\n@font-face { font-family: 'font-name'; font-style: italic; font-weight: 400; src: local('FontNameItalic'),local('Font Name Italic'),url('/fonts/font-name-400-italic.woff2') format('woff2'); }\n"

export default [
  { fn: css.stringify(fontV2), expect: fontV2String, info: 'font v2 test' },
  { fn: css.stringify(fontV2Example), expect: fontV2ExampleString, info: 'font v2 docs page test' },

]
