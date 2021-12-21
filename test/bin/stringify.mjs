import path from 'path'

import { execCommand } from './.execCommand.mjs'

const cliPath = path.join(process.cwd(), 'src', 'bin', 'index.js')

const testThemePath = path.join(process.cwd(), 'test', '.theme')
const testOutputPath = path.join(testThemePath, 'out')

const expectedStdout = '\x1B[32mmcss is done.\x1B[39m\n'

const expectedStringifyContentMinified = 'body{color:orange}'
const expectedStringifyContent = 'body { color: orange; }\n'
const expectedStringifyStdout =
  '\u001b[32mmcss output\u001b[39m \n\nbody { color: orange; }\n\n\n\u001b[32mmcss is done.\u001b[39m\n'

const expectedStringifyStdoutMinified =
  '\u001b[32mmcss output\u001b[39m \n\nbody{color:orange}\n\n\u001b[32mmcss is done.\u001b[39m\n'

export default [
  {
    fn: execCommand({
      cliPath,
      in: testThemePath,
      out: path.join(testOutputPath, 'stringifiedTheme.css'),
      cmd: 'stringify',
      expected: expectedStdout,
    }),
    expect: expectedStringifyContent,
    info: 'cli can execute stringify',
  },
  {
    fn: execCommand({
      cliPath,
      in: testThemePath,
      out: path.join(testOutputPath, 'stringifiedThemeMinified.css'),
      cmd: 'stringify',
      args: ['--minified'],
      expected: expectedStdout,
    }),
    expect: expectedStringifyContentMinified,
    info: 'cli can execute stringify --minified',
  },
  {
    fn: execCommand({
      cliPath,
      in: testThemePath,
      cmd: 'stringify',
      args: ['--minified'],
    }),
    expect: expectedStringifyStdoutMinified,
    info: 'cli can execute stringify without --out and with --minified',
  },

  {
    fn: execCommand({
      cliPath,
      in: testThemePath,
      cmd: 'stringify',
    }),
    expect: expectedStringifyStdout,
    info: 'cli can execute stringify without --out',
  },
]
