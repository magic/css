const is = require('@magic/types')
const fs = require('fs')
const path = require('path')

const css = {
  parse: require('./parse'),
  stringify: require('./stringify'),
  write: require('./write'),
  minify: require('./minify'),
}

module.exports = css
