const camel2kebab = require('../src/camel2kebab')

module.exports = [
  { fn: camel2kebab('backgroundColor'), expect: 'background-color', info: 'can camel 2 kebab' },
]
