import path from 'path'

import { execCommand } from './.execCommand.mjs'

const cliPath = path.join(process.cwd(), 'src', 'bin', 'index.js')

const testThemePath = path.join(process.cwd(), 'test', '.theme')

const expectedFullStdout =
  '\u001b[32mmcss output\u001b[39m \n\n{\n  "css": "body { color: orange; }\\n",\n  "classes": [],\n  "ids": [],\n  "selectors": [\n    "body"\n  ],\n  "parsed": [\n    [\n      "body",\n      {\n        "color": "orange"\n      }\n    ]\n  ],\n  "minified": "body{color:orange}"\n}\n\n\u001b[32mmcss is done.\u001b[39m\n'

export default [
  {
    fn: execCommand({
      cliPath,
      in: testThemePath,
      cmd: 'full',
    }),
    expect: expectedFullStdout,
    info: 'cli can execute full without --out',
  },
  {
    fn: execCommand({
      cliPath,
      in: testThemePath,
      cmd: 'all',
    }),
    expect: expectedFullStdout,
    info: 'all executes full',
  },
]
