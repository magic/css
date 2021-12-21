import path from 'path'

import { execCommand } from './.execCommand.mjs'

const cliPath = path.join(process.cwd(), 'src', 'bin', 'index.js')

const testThemePath = path.join(process.cwd(), 'test', '.theme')
const testOutputPath = path.join(testThemePath, 'out')

const expectedStdout = '\x1B[32mmcss is done.\x1B[39m\n'

const expectedParseContent = `
[
  [
    "body",
    {
      "color": "orange"
    }
  ]
]
`.trim()

export default [
  {
    fn: execCommand({
      cliPath,
      in: testThemePath,
      out: path.join(testOutputPath, 'parsedTheme.js'),
      cmd: 'parse',
      expected: expectedStdout,
    }),
    expect: expectedParseContent,
    info: 'cli can execute parse with out',
  },
  {
    fn: execCommand({
      cliPath,
      in: testThemePath,
      out: path.join('test', '.theme', 'out', 'parsedThemeRelative.js'),
      cmd: 'parse',
      expected: expectedStdout,
    }),
    expect: expectedParseContent,
    info: 'cli can handle relative out paths',
  },
]
