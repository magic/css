import is from '@magic/types'

import stringifyProps from './props.mjs'

export const recurseStringify = (res, plugins = []) => {
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

    return res.map(r => recurseStringify(r, plugins)).join(' ')
  } else if (is.object(res)) {
    return `{ ${stringifyProps(res)} }\n`
  }

  return res
}

export default recurseStringify
