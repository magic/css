import camel2kebab from '../src/camel2kebab.mjs'

export default [
  { fn: camel2kebab('backgroundColor'), expect: 'background-color', info: 'can camel 2 kebab' },
]
