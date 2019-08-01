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

  // names that contain , have to be split and prefixed separately
  if (name.includes(',')) {
    return (
      name
        .split(',')
        // .map(n => `${before}${n}${after}`)
        .map((n, _, names) => {
          // find out if we have to prefix or postfix the name
          const first = names[0]
          const last = names[names.length - 1]

          // one & at the start, all subitems also get &'ed
          if (first.startsWith('&') && !n.startsWith('&')) {
            n = `&${n}`
          } else if (last.endsWith('&&') && !n.endsWith('&&')) {
            // two && at the end, this values get appended with added space
            n = `${n}&&`
          } else if (last.endsWith('&') && !n.endsWith('&')) {
            // one & at the end means postfixing, we concatenate without spaces
            n = `${n}&`
          }

          return getSelector(parent, n)
        })
        .join(', ')
        .trim()
    )
  }

  // find out if we have to prefix, postfix,
  // or assume that we want to designate a child class
  let before = ''
  let after = ''
  if (name.startsWith('&')) {
    before = '&'
  } else if (name.endsWith('&')) {
    if (name.endsWith('&&')) {
      after = '&&'
    } else {
      after = '&'
    }
  }

  // make sure our name does not contain any &'s after this line
  name = name.replace(/&/g, '').trim()

  // make sure our parent does not contain any &'s after this line
  parent = parent.replace(/&/g, '').trim()

  // merge selector depending on the before and after variables defined above
  if (before === '&') {
    parent += name
  } else if (after === '&&') {
    parent = `${name} ${parent}`
  } else if (after === '&') {
    parent = name + parent
  } else {
    parent += ` ${name}`
  }

  return parent.trim()
}

export default getSelector
