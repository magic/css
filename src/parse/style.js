const is = require('@magic/types')

const recurseStyle = styles => {
  let styleObject = {}
  styles.forEach(style => {
    if (is.array(style)) {
      style = recurseStyle(style)
    }
    styleObject = {
      ...styleObject,
      ...style,
    }
  })
  return styleObject
}

module.exports = recurseStyle
