const is = require('@magic/types')
const fs = require('fs')
const path = require('path')

const css = {
  parse: require('./parse'),
  stringify: require('./stringify'),
  write: require('./write'),
  minify: require('./minify'),
  classes: require('./classes'),
}

module.exports = css
