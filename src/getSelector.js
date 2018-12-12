const getSelector = (parent, name) => {
  // names that contain , have to be split and prefixed separately
  if (name.includes(',')) {
    return name
      .split(',')
      .map(n => getSelector(parent, n.trim()))
      .join(', ')
      .trim()
  }

  // compose the selector
  let res = parent

  // selectors starting with & get appended to parent
  if (name.startsWith('&')) {
    res += name.substr(1)
  } else {
    res += ` ${name}`
  }

  return res.trim()
}

module.exports = getSelector
