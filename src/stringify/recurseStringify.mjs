import is from '@magic/types'

import stringifyProps from './props.mjs'

export const recurseStringify = (res, plugins = [], opts = {}) => {
  if (is.array(res)) {
    const [name, items] = res

    if (is.string(name)) {
      let result = ''
      Object.entries(plugins).forEach(([lookup, fn]) => {
        if (name.startsWith(lookup)) {
          result = fn({ name, items, plugins })
        }
      })

      if (result) {
        return result
      }
    }

    return res.map(r => recurseStringify(r, plugins, opts)).join(' ')
  } else if (is.object(res)) {
    const stringified = stringifyProps(res)
    return `{ ${stringified} }\n`
  }

  return res
}

export default recurseStringify
