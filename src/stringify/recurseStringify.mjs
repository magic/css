import is from '@magic/types'

import stringifyProps from './props.mjs'
import { fontFaces } from './fontFaces.mjs'

export const recurseStringify = res => {
  if (is.array(res)) {
    const [name, items] = res
    if (is.string(name)) {
      if (name.startsWith('@keyframes') || name.startsWith('@media')) {
        return `${name} { ${recurseStringify(items)} }\n`
      } else if (name.startsWith('@font-face')) {
        return fontFaces({ res, name, items })
      }
    }

    return res.map(recurseStringify).join(' ')
  } else if (is.object(res)) {
    return `{ ${stringifyProps(res)} }\n`
  }

  return res
}

export default recurseStringify
