import is from '@magic/types'
import deep from '@magic/deep'
import log from '@magic/log'

import stringifyProps from './props.mjs'

export const fontFileTypes = {
  eot: url => `src: url('${url}.eot'); src: url('${url}.eot#iefix') format('embedded-opentype')`,
  woff2: url => `url('${url}.woff2') format('woff2')`,
  woff: url => `url('${url}.woff') format('woff')`,
  ttf: url => `url('${url}.ttf') format('truetype')`,
  svg: (url, family) => `url('${url}.svg#${family}') format('svg')`,
}

const fontV1 = (name, font) => {
  log.warn('W_DEPRECATED', 'this way of declaring fonts is deprecated.')
  log('See: https://magic.github.io/css/#styles-webfonts for more information')

  let { family, url, types = 'woff2', weights = 400, styles = 'normal', ...rest } = font

  if (!url.endsWith('/')) {
    url += '/'
  }

  if (!is.array(weights)) {
    weights = [weights]
  }

  if (!is.array(types)) {
    types = [types]
  }

  if (!is.array(styles)) {
    styles = [styles]
  }

  return weights.map(fontWeight => {
    return styles.map(fontStyle => {
      const weightStyleUrl = `${url}${family}-${fontWeight}-${fontStyle}`

      let fontString = `${name} ${recurseStringify({
        fontFamily: `'${family}'`,
        fontStyle,
        fontWeight,
        ...rest,
      })}`

      let fontFileString = 'src:'
      if (types.includes('eot')) {
        fontFileString = ''
      }

      const fontFileStrings = []
      Object.entries(fontFileTypes).map(([name, fn]) => {
        if (types.includes(name)) {
          const str = fn(weightStyleUrl, family)
          fontFileStrings.push(str)
        }
      })

      fontFileString += fontFileStrings.join(',') + ';'

      fontString = fontString.replace('}\n', `${fontFileString} }\n`)
      return fontString
    })
  })
}

const fontV2 = (name, font) => {
  let { family, url, types = 'woff2', styles, ...rest } = font

  if (!url.endsWith('/')) {
    url += '/'
  }

  if (!is.array(types)) {
    types = [types]
  }

  const fontStrings = Object.entries(styles).map(entry => {
    const [fontStyle, weights] = entry

    return Object.entries(weights).map(([fontWeight, local]) => {
      const weightStyleUrl = `${url}${family}-${fontWeight}-${fontStyle}`

      const fontFileStrings = []

      let fontFileString = ''
      if (types.includes('eot')) {
        fontFileString = ''
      }

      local.forEach(l => {
        fontFileStrings.push(`local('${l}')`)
      })

      Object.entries(fontFileTypes).map(([name, fn]) => {
        if (types.includes(name)) {
          const str = fn(weightStyleUrl, family)
          fontFileStrings.push(str)
        }
      })

      fontFileString += fontFileStrings.join(',')

      const props = recurseStringify({
        fontFamily: `'${family}'`,
        fontStyle,
        fontWeight,
        src: fontFileString,
        ...rest,
      })

      const fontString = `${name} ${props}`

      return fontString
    })
  })

  return deep.flatten(fontStrings).join('\n')
}

export const fontFaces = ({ res, name, items }) => {
  if (is.array(items)) {
    const fontStrings = items.map(font => {
      if (is.objectNative(font.styles)) {
        return fontV2(name, font)
      } else {
        return fontV1(name, font)
      }
    })

    return deep.flatten(fontStrings).join('\n')
  } else {
    const { fontFamily, fontDir = '', fontRoot, ...rest } = items
    res = `${name} ${recurseStringify({ fontFamily: `'${fontFamily}'`, ...rest })}`

    const eotString = `src: url('${fontDir}${fontFamily}.eot');`

    const srcString = `${eotString} src: ${[
      `url('${fontDir}${fontFamily}.eot#iefix') format('embedded-opentype')`,
      `url('${fontDir}${fontFamily}.ttf') format('truetype')`,
      `url('${fontDir}${fontFamily}.woff2') format('woff2')`,
      `url('${fontDir}${fontFamily}.woff') format('woff')`,
      `url('${fontDir}${fontFamily}.svg#${fontFamily}') format('svg');`,
    ].join(', ')}`

    return res.replace('}\n', `${srcString} }\n`)
  }
}

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
