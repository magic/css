const css = require('../src')

module.exports = [
  {
    fn: () =>
      css({
        body: { color: 'orange' },
        '@media screen and (min-width: 800px)': { body: { color: 'green' } },
      }),
    expect: a =>
      a.minified === 'body{color:orange}@media screen and (min-width:800px){body{color:green}}',
    info: 'handles media queries',
  },
]
