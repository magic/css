import css from '../src/index.mjs'

const styleObject = {
  body: {
    color: 'green',
  },
}

const styleArray = [
  {
    body: { color: 'red' },
  },
  [
    {
      body: {
        color: 'yellow',
      },
    },
  ],
  {
    body: {
      color: 'green',
    },
  },
]

const stringifiedString = 'body { color: green; }\n'

const overflowX = {
  body: {
    overflowX: '20px',
  },
}

const overflowXString = 'body { overflow-x: 20px; }\n'

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

  {
    fn: css.parse(() => styleArray),
    expect: css.parse(styleObject),
    info: 'theme can be a function returning an array.',
  },
]
