import fs from '@magic/fs'
import stringify from './stringify/index.mjs'

const write = async (style, opts = {}) => {
  if (!opts.OUTFILE) {
    throw new Error(
      `Can not write css without opts.OUTFILE ${JSON.stringify(opts.OUTFILE, null, 2)}`,
    )
  }

  const bundle = await stringify(style, opts)
  await fs.writeFile(opts.OUTFILE, bundle)
  return true
}

export default write
