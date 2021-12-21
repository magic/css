import css from '../src/index.mjs'

const overload = {
  body: {
    color: ['green', 'red'],
  },
}

const overloadString = `body { color: green; color: red; }\n`

export default [
  {
    fn: css.stringify(overload, { debug: true }),
    expect: overloadString,
    info: 'overloading css properties works',
  },
]
