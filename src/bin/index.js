#!/usr/bin/env node

import path from 'path'

import cli from '@magic/cli'
import fs from '@magic/fs'
import log from '@magic/log'

import css from '../index.mjs'

const cwd = process.cwd()

const { args, commands } = cli({
  commands: ['full', 'parse', 'stringify'],
  options: [
    ['--in', '--i', '-i'],
    ['--out', '--o', '-o'],
    ['--minified', '--m', '-m'],
  ],
  single: ['--in', '--out', '--minified'],
  help: {
    name: '@magic/css',
    header: 'css in js pipeline.',
    commands: {
      full: 'get a full result object.',
      parse: 'convert css in js to an array of key value pairs',
      stringify: 'convert css in js to css',
    },
    options: {
      '--in': 'directory with source files, needs index.js to exist',
      '--out': 'directory to write output files to. omit to print to stdout',
      '--minified': 'output minified css',
    },
    example: `
mcss parse --dir ./css --out ./css
mcss stringify --dir ./styles --out ./css
`.trim(),
  },
})

const logResult = style => log.success('mcss output', `\n\n${style}\n`)

const maybeWrite = async ({ args, commands, style }) => {
  const outFile = commands.stringify ? 'main.css' : 'theme.js'

  if (args.out) {
    if (!path.isAbsolute(args.out)) {
      args.out = path.join(cwd, args.out)
    }

    if (!args.out.endsWith('.css') && !args.out.endsWith('.js')) {
      args.out = path.join(args.out, outFile)
    }

    const dirname = path.dirname(args.out)
    await fs.mkdirp(dirname)

    await fs.writeFile(args.out, style)
  } else {
    logResult(style)
  }

  log.success('mcss is done.')
}

const run = async () => {
  if (!args.in) {
    args.in = cwd
    log.info('--in not specified, using process.cwd()', args.in)
  } else if (!path.isAbsolute(args.in)) {
    args.in = path.join(cwd, args.in)
  }

  if (!args.in.endsWith('index.js')) {
    args.in = path.join(args.in, 'index.js')
  }

  const { default: theme } = await import(args.in)

  const result = await css(theme)

  if (commands.full) {
    const style = JSON.stringify(result, null, 2)
    maybeWrite({ args, commands, style })
  } else if (commands.stringify) {
    const style = args.hasOwnProperty('minified') ? result.minified : result.css
    maybeWrite({ args, commands, style })
  } else if (commands.parse) {
    const style = JSON.stringify(result.parsed, null, 2)
    maybeWrite({ args, commands, style })
  } else {
    log.error('MISSING_COMMAND', 'Either parse, stringify or full are required.')
  }
}

run()
