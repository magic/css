const css = require('../src')

const fontFamily = {
  '@font-face': {
    fontFamily: 'font-name',
    fontWeight: 'normal',
    fontStyle: 'normal',
  },
}

const expect = ({ css }) => css === [
  '@font-face {',
  'font-family: "font-name";',
  'font-weight: normal;',
  'font-style: normal;',
  'src: url(\'fonts/font-name.eot\');',
  'src: url(\'fonts/font-name.eot#iefix\') format(\'embedded-opentype\'),',
  'url(\'fonts/font-name.ttf\') format(\'truetype\'),',
  'url(\'fonts/font-name.woff\') format(\'woff\'),',
  'url(\'fonts/font-name.woff2\') format(\'woff2\'),',
  'url(\'fonts/font-name.svg#font-name\') format(\'svg\');',
  '}\n',
].join(' ')

module.exports = [
  { fn: async () => await css(fontFamily), expect, info: 'can handle web fonts' },
]