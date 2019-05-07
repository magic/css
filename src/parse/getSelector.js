const getSelector = (parent, name) => {
  name = name.trim()

  // if parents are an array, loop over them
  if (parent.includes(',')) {
    return parent
      .split(',')
      .map(par => getSelector(par.trim(), name))
      .join(', ')
      .trim()
  }

  // find out if we have to prefix, suffix, or assume that we want to designate a child class
  let before = ''
  let after = ''
  if (name.startsWith('&')) {
    before = '&'
  } else if (name.endsWith('&')) {
    after = '&'
  }

  // names that contain , have to be split and prefixed separately
  if (name.includes(',')) {
    return name
      .split(',')
      .map(n => `${before}${n}${after}`)
      .map(n => getSelector(parent, n))
      .join(', ')
      .trim()
  }

  // make sure our name does not contain any &'s after this line
  name = name.replace(/&/g, '').trim()

  // make sure our parent does not contain any &'s after this line
  parent = parent.replace(/&/g, '').trim()

  // merge selector depending on the before and after variables defined above
  if (before) {
    parent += name
  } else if (after) {
    parent = name + parent
  } else {
    parent += ` ${name}`
  }

  return parent.trim()
}

module.exports = getSelector
