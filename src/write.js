const fs = require('fs')
const stringify = require('./stringify')

const write = (style, opts = {}) => {
  if (!opts.OUTFILE) {
    console.error(opts)
    throw new Error('Can not write css without opts.OUTFILE')
  }

  const bundle = stringify(style, opts)
  fs.writeFileSync(opts.OUTFILE, bundle)
  return true
}

module.exports = write
