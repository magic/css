# @magic/css

can parse/stringify/write css in js

#### TODO:
* media queries
* watch
* cli script
* add autoprefixer/postcss
* ???

[![NPM version][npm-image]][npm-url]
[![Linux Build Status][travis-image]][travis-url]
[![Windows Build Status][appveyor-image]][appveyor-url]
[![Coverage Status][coveralls-image]][coveralls-url]


##### installation:
```javascript
  npm install @magic/css
```

#### usage:

##### init
```javascript
const css = require('@magic/css')
const path = require('path')

const locals = {
  textColor: 'green',
  OUT_DIR: path.join(__dirname, 'out.css')
}
const styler = css(opts)

```

##### styles
```javascript
const style = opts => ({
  '.className': {
    color: opts.textColor,
  },
})
styler.stringify(style)
// .className { color:green; }
```

##### hover/active etc
```javascript
const style = opts => ({
  'div': {
    color: 'red',
    '&:hover': {
      color: 'green',
    },
  },
})
styler.stringify(style)
// div { color: red; }
// div:hover { color: green; }
```

##### nesting
```javascript
const style = opts => ({
  'div': {
    'p, &:hover': {
      color: 'red',
    },
  },
})
styler.stringify(style)
// div p, div:hover { color: red; }
```

##### parse
```javascript

const style = opts => ({
  '.className': {
    '#id': {
      color: opts.textColor,
    },
  },
})

styler.parse(style)
// ast

```

##### stringify
```javascript

const style = opts => ({
  '.className': {
    '#id': {
      color: opts.textColor,
    },
  },
})

styler.stringify(style)
// minified string
`.className #id{color:green;}`
```

##### write to filesystem
```javascript

const style = opts => ({
  '.className': {
    '#id': {
      color: opts.textColor,
    },
  },
})

styler.write(style)
// writes styles to opts.OUTFILE or ./out.css
```




[npm-image]: https://img.shields.io/npm/v/@magic/css.svg
[npm-url]: https://www.npmjs.com/package/@magic/css
[travis-image]: https://travis-ci.com/magic/css.svg?branch=master
[travis-url]: https://travis-ci.org/magic/css
[appveyor-image]: https://ci.appveyor.com/api/projects/status/yk1hmw7ilwb74h5y/branch/master?svg=true
[appveyor-url]: https://ci.appveyor.com/project/jaeh/css/branch/master
[coveralls-image]: https://coveralls.io/repos/github/magic/css/badge.svg
[coveralls-url]: https://coveralls.io/github/magic/css
