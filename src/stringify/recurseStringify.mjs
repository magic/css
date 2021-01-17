import is from '@magic/types'

import stringifyProps from './props.mjs'

export const fontFaces = ({ res, name, items }) => {
  if (is.array(items)) {
    const fontStrings = []

    items.forEach(font => {
      let { family, url, types, weights, styles, ...rest } = font
      if (!url.endsWith('/')) {
        url += '/'
      }

      if (is.string(weights)) {
        weights = [weights]
      }
      if (is.string(styles)) {
        styles = [styles]
      }
      if (is.string(types)) {
        types = [types]
      }

      weights.forEach(fontWeight => {
        styles.forEach(fontStyle => {
          const weightStyleUrl = `${url}${family}-${fontWeight}-${fontStyle}`

          let fontString = `${name} ${recurseStringify({
            fontFamily: `"${family}"`,
            fontStyle,
            fontWeight,
            ...rest,
          })}`

          const fontFileTypes = {
            eot: url =>
              `src: url('${url}.eot'); src: url('${url}.eot#iefix') format('embedded-opentype')`,
            ttf: url => `url('${url}.ttf') format('truetype')`,
            woff: url => `url('${url}.woff') format('woff')`,
            woff2: url => `url('${url}.woff2') format('woff2')`,
            svg: url => `url('${url}.svg#${family}') format('svg')`,
          }

          let fontFileString = 'src:'
          if (types.includes('eot')) {
            fontFileString = ''
          }

          const fontFileStrings = []
          Object.entries(fontFileTypes).map(([name, fn]) => {
            if (types.includes(name)) {
              const str = fn(weightStyleUrl)
              fontFileStrings.push(str)
            }
          })

          fontFileString += fontFileStrings.join(',') + ';'

          fontString = fontString.replace('}\n', `${fontFileString} }\n`)
          fontStrings.push(fontString)
        })
      })
    })

    return fontStrings.join('\n')
  } else {
    const { fontFamily, fontDir = '', fontRoot, ...rest } = items
    res = `${name} ${recurseStringify({ fontFamily: `"${fontFamily}"`, ...rest })}`

    const eotString = `src: url('${fontDir}${fontFamily}.eot');`

    const srcString = `${eotString} src: ${[
      `url('${fontDir}${fontFamily}.eot#iefix') format('embedded-opentype')`,
      `url('${fontDir}${fontFamily}.ttf') format('truetype')`,
      `url('${fontDir}${fontFamily}.woff') format('woff')`,
      `url('${fontDir}${fontFamily}.woff2') format('woff2')`,
      `url('${fontDir}${fontFamily}.svg#${fontFamily}') format('svg');`,
    ].join(', ')}`

    return res.replace('}\n', `${srcString} }\n`)
  }
}

export const recurseStringify = mod => {
  let res = mod

  if (is.array(mod)) {
    const [name, items] = mod
    if (is.string(name)) {
      if (name.startsWith('@keyframes') || name.startsWith('@media')) {
        return `${name} { ${recurseStringify(items)} }\n`
      } else if (name.startsWith('@font-face')) {
        return fontFaces({ res, name, items })
      }
    }

    return mod.map(recurseStringify).join(' ')
  } else if (is.object(mod)) {
    return `{ ${stringifyProps(mod)} }\n`
  }

  return res
}

export default recurseStringify
