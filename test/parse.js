const css = require('../src')

const styleObject = {
  body: {
    color: 'green',
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
    }
  ],
]

module.exports = [
  { fn: css.parse(styleArray), expect: css.parse(styleObject) },
  { fn: css.stringify(styleArray), expect: css.stringify(styleObject) },
]