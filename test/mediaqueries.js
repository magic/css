const { is } = require('@magic/test')

const css = require('../src')

module.exports = [
  {
    fn: () => css({ '@media screen': { body: { color: 'green' } } }),
    expect: ({ minified }) => minified === '@media screen{body{color:green}}',
    info: 'handles media queries',
  },
]
