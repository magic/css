import css from '../src/index.mjs'

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
    },
  ],
]

export default [
  { fn: css.parse(styleArray), expect: css.parse(styleObject) },
  { fn: css.stringify(styleArray), expect: css.stringify(styleObject) },
]
