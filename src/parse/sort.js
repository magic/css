const is = require('@magic/types')

const recurseSort = a =>
  a.sort(b => {
    if (is.array(b)) {
      return b.sort(recurseSort)
    }

    if (is.string(b)) {
      if (b.startsWith('@')) {
        return 1
      } else {
        return -1
      }
    }
  })

module.exports = recurseSort
