import css from '../src/index.mjs'

const styleFunction = (opts) => ({
  body: {
    color: opts.color,
  },
})

const expect = 'body { color: green; }\n'

export default [
  { fn: css(styleFunction, { color: 'green' }), expect: t => t.css === expect, info: 'can handle styles that are functions' }
]
