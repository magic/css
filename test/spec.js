const { is } = require('@magic/test')
const path = require('path')
const fs = require('fs')

const css = require('../src')

const style = opts => ({
  '.className': {
    color: 'orange',

    '#id': {
      color: opts.id,
      backgroundColor: 'green',
    },
    '&:active': {
      color: opts.test,
    },
  },
  '.className2': {
    '.clicked': {
      color: 'violet',
    },
    '&.clicked': {
      color: 'red',
    },
  },
  div: {
    color: 'white',
    'p,span,&:hover': {
      color: 'green',
    },
  },
  '@media screen and (min-width: 300px)': {
    '.className': {
      color: 'green',
    },
  },
  '.testing': true,
})

const opts = {
  id: 'green',
  test: 'orange',
}

const styler = css(opts)

const nesting = styler.parse({ div: { p: { '.active': { color: 'green' } } } })
const expectNesting = ['div p .active', { color: 'green' }]

const multiClass = styler.parse({ div: { '.foo,&.bar': { color: 'green' } } })
const expectMultiClass = ['div .foo, div.bar', { color: 'green' }]

const canHandleExtensions = styler.parse({ div: { '&:hover': { color: 'green' } } })
const expectCanHandleExtensions = ['div:hover', { color: 'green' }]

const parsed = styler.parse(style)

const outFile = path.join(__dirname, '..', 'src', 'out.css')

const beforeWrite = () => () => {
  fs.unlinkSync(outFile)
}

const write = () => styler.write(style, outFile)

const expectWritten = () => fs.existsSync(outFile)

module.exports = [
  { fn: css(), expect: is.object, info: 'css returns an object' },
  { fn: () => styler.parse, expect: is.fn, info: 'styler.parse is a function' },
  { fn: () => styler.stringify, expect: is.fn, info: 'styler.stringify is a function' },
  { fn: parsed, expect: is.array, info: 'styler.parse returns an array' },
  { fn: nesting, expect: expectNesting, info: 'styler.parse returns correct css' },
  { fn: multiClass, expect: expectMultiClass, info: 'multiple definitions in one line' },
  {
    fn: styler.stringify({ div: { color: 'green' } }),
    expect: 'div { color: green; }\n',
    info: 'can stringify',
  },
  {
    fn: styler.minify(styler.stringify({ div: { color: 'green' } })),
    expect: 'div{color:green;}',
    info: 'can minify',
  },
  { fn: write, expect: expectWritten, before: beforeWrite, info: 'can write file' },
]
