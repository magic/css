import css from '../src/index.mjs'

export default [
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
