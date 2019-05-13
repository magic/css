import is from '@magic/types'
import deep from '@magic/deep'

import parse from './parse/index.mjs'

const recurseSelectors = mod => {
  let res

  if (is.array(mod)) {
    res = mod.map(recurseSelectors)
  } else if (!is.obj(mod)) {
    res = mod
  }

  return deep.flatten(res).filter(a => a)
}

const selectors = (styles, opts = {}) => {
  const parsed = parse(styles, opts)
  return recurseSelectors(parsed)
}

export default selectors
