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

const parsed = css.selectors(styleObject)

const multiSelect = {
  'h1, h2, h3': {
    '&:hover, :focus': {
      color: 'green',
    },
  },
}

const prefix = {
  ':hover, :focus': {
    'h1, h2, h3 &': {
      color: 'orange',
    },
  },
}

const prefixSingle = {
  '.class1, .class2': {
    'h1, h2&, h3': {
      color: 'orange',
    },
  },
}

const prefixSingleWithSpace = {
  '.class1, .class2': {
    'h1, h2&&, h3': {
      color: 'orange',
    },
  },
}

const prefixAllWithSpace = {
  '.class1, .class2': {
    'h1, h2, h3 &&': {
      color: 'orange',
    },
  },
}

module.exports = [
  { fn: () => css.classes, expect: is.fn, info: 'css.classes is a function' },
  { fn: () => css.ids, expect: is.fn, info: 'css.selectors is a function' },
  { fn: () => css.selectors, expect: is.fn, info: 'css.ids is a function' },
  { fn: parsed, expect: t => t.includes('div'), info: 'top level html tags exist' },
  { fn: parsed, expect: t => t.includes('.topLvl'), info: 'top level css classes exist' },
  { fn: parsed, expect: t => t.includes('#topLvl'), info: 'top level css ids exist' },

  { fn: parsed, expect: t => t.includes('div p'), info: 'nested p in div tags exists' },
  { fn: parsed, expect: t => t.includes('.topLvl p'), info: 'nested p in class works' },
  { fn: parsed, expect: t => t.includes('#topLvl p'), info: 'nested p in id works' },

  {
    fn: parsed,
    expect: t => t.includes('.topLvl.addedClass'),
    info: 'added class in class exists',
  },
  {
    fn: parsed,
    expect: t => t.includes('.topLvl .nestedClass'),
    info: 'nested class in class exists',
  },
  { fn: parsed, expect: t => t.includes('.topLvl#addedId'), info: 'added id in class exists' },
  { fn: parsed, expect: t => t.includes('.topLvl #nestedId'), info: 'nested id in class exists' },

  {
    fn: parsed,
    expect: t => t.includes('#topLvl.addedClass'),
    info: 'added class in class exists',
  },
  {
    fn: parsed,
    expect: t => t.includes('#topLvl .nestedClass'),
    info: 'nested class in class exists',
  },
  { fn: parsed, expect: t => t.includes('#topLvl#addedId'), info: 'added id in class exists' },
  { fn: parsed, expect: t => t.includes('#topLvl #nestedId'), info: 'nested id in class exists' },
  {
    fn: css.selectors(multiSelect),
    expect: 'h1:hover, h1:focus, h2:hover, h2:focus, h3:hover, h3:focus',
  },
  {
    fn: css.selectors(multiSelect),
    expect: 'h1:hover, h1:focus, h2:hover, h2:focus, h3:hover, h3:focus',
  },
  {
    fn: css.selectors(prefix),
    expect: 'h1:hover, h2:hover, h3:hover, h1:focus, h2:focus, h3:focus',
  },
  {
    fn: css.selectors(prefixSingle),
    expect: '.class1 h1, h2.class1, .class1 h3, .class2 h1, h2.class2, .class2 h3',
  },
  {
    fn: css.selectors(prefixSingleWithSpace),
    expect: '.class1 h1, h2 .class1, .class1 h3, .class2 h1, h2 .class2, .class2 h3',
  },
  {
    fn: css.selectors(prefixAllWithSpace),
    expect: 'h1 .class1, h2 .class1, h3 .class1, h1 .class2, h2 .class2, h3 .class2',
  },
]
