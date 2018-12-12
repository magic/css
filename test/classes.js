const { is } = require('@magic/test')

const css = require('../src')

const color = 'green'

const testObj = {
  color,
  p: { color },
  '.nestedClass': { color },
  '&.addedClass': { color },
  '#nestedId': { color },
  '&#addedId': { color },
}

const styleObject = {
  div: testObj,
  '.topLvl': testObj,
  '#topLvl': testObj,
}

const parsed = css.classes(styleObject)

module.exports = [
  { fn: () => css.classes, expect: is.fn, info: 'css.classes is a function' },
  { fn: parsed, expect: t => t.includes('div'), info: 'top level html tags exist' },
  { fn: parsed, expect: t => t.includes('.topLvl'), info: 'top level css classes exist' },
  { fn: parsed, expect: t => t.includes('#topLvl'), info: 'top level css ids exist' },

  { fn: parsed, expect: t => t.includes('div p'), info: 'nested p in div tags exists' },
  { fn: parsed, expect: t => t.includes('.topLvl p'), info: 'nested p in class works' },
  { fn: parsed, expect: t => t.includes('#topLvl p'), info: 'nested p in id works' },

  { fn: parsed, expect: t => t.includes('.topLvl.addedClass'), info: 'added class in class exists' },
  { fn: parsed, expect: t => t.includes('.topLvl .nestedClass'), info: 'nested class in class exists' },
  { fn: parsed, expect: t => t.includes('.topLvl#addedId'), info: 'added id in class exists' },
  { fn: parsed, expect: t => t.includes('.topLvl #nestedId'), info: 'nested id in class exists' },

  { fn: parsed, expect: t => t.includes('#topLvl.addedClass'), info: 'added class in class exists' },
  { fn: parsed, expect: t => t.includes('#topLvl .nestedClass'), info: 'nested class in class exists' },
  { fn: parsed, expect: t => t.includes('#topLvl#addedId'), info: 'added id in class exists' },
  { fn: parsed, expect: t => t.includes('#topLvl #nestedId'), info: 'nested id in class exists' },
]

