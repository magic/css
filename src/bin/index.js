#!/usr/bin/env node

import cli from '@magic/cli'
import fs from '@magic/fs'
import log from '@magic/log'

import css from '../index.mjs'

// import format from './index.mjs'

const { args } = cli({
  options: [
    ['--parse', '--p', '-p'],
    ['--stringify', '--s', '-s'],
    ['--source', '--src'],
    ['--dest', '--d', '-d'],
  ],
  single: ['--parse', '--stringify'],
  help: {
    name: '@magic/css',
    header: 'css in js pipeline.',
    options: {
      '--parse': 'parse css and convert to js',
      '--file-types': 'parse js and convert to css',
      '--source': 'directory with source files',
      '--out': 'directory to write output files to. omit to print to stdout',
    },
    example: `
css --parse --dir ./css --out ./css
css --stringify --dir ./styles --out ./css
`.trim(),
  },
})

const run = async () => {
  console.log({ args })

  if (args.parse === false && args.stringify === false) {
    log.error('MISSING_ARGUMENT', 'Either --parse or --stringify are required.')
    process.exit(1)
  }

  if (!args.source) {
    const cwd = process.cwd()
    args.source = cwd
    log.info('--source not specified, using process.cwd()', cwd)
  }

  const files = await fs.getFiles(args.source)
  console.log({ files })
}

run()
