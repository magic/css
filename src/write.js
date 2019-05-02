const fs = require('fs')
const stringify = require('./stringify')

const write = (style, opts = {}) => {
  if (!opts.OUTFILE) {
    throw new Error(
      `Can not write css without opts.OUTFILE ${JSON.stringify(opts.OUTFILE, null, 2)}`,
    )
  }

  const bundle = stringify(style, opts)
  fs.writeFileSync(opts.OUTFILE, bundle)
  return true
}

module.exports = write
