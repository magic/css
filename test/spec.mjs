import { is, tryCatch } from '@magic/test'
import path from 'path'
import fs from 'fs'

import css from '../src/index.mjs'

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

const outFile = path.join('.', 'src', 'out.css')

const opts = {
  id: 'green',
  test: 'orange',
  OUTFILE: outFile,
}

const nesting = css.parse({ div: { p: { '.active': { color: 'green' } } } })
const expectNesting = [['div p .active', { color: 'green' }]]

const multiClass = css.parse({ div: { '.foo,&.bar': { color: 'green' } } })
const expectMultiClass = [['div .foo, div.bar', { color: 'green' }]]

const canHandleExtensions = css.parse({ div: { '&:hover': { color: 'green' } } })
const expectCanHandleExtensions = [['div:hover', { color: 'green' }]]

const parsed = css.parse(style)

const afterWrite = () => {
  fs.unlinkSync(outFile)
}

const write = () => css.write(style, opts)

const expectWritten = () => fs.existsSync(outFile)

export default [
  { fn: css, expect: is.object, info: 'css returns an object' },
  { fn: css({ div: { color: 'green' } }), expect: is.object, info: 'css returns an object' },
  { fn: () => css.parse, expect: is.fn, info: 'css.parse is a function' },
  { fn: () => css.stringify, expect: is.fn, info: 'css.stringify is a function' },
  { fn: parsed, expect: is.array, info: 'css.parse returns an array' },
  { fn: nesting, expect: expectNesting, info: 'css.parse returns correct css' },
  { fn: multiClass, expect: expectMultiClass, info: 'multiple definitions in one line' },
  {
    fn: css.stringify({ div: { color: 'green' } }),
    expect: 'div { color: green; }\n',
    info: 'can stringify',
  },
  {
    fn: css.minify('div { color: green; }\n'),
    expect: 'div{color:green}',
    info: 'can minify',
  },
  { fn: write, expect: expectWritten, after: afterWrite, info: 'can write file' },
  {
    fn: tryCatch(css.write, 'div{color:green;}'),
    expect: is.error,
    info: 'trying to write a file without opts errors',
  },
  {
    fn: canHandleExtensions,
    expect: expectCanHandleExtensions,
  },
]
