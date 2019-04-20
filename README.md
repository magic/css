# @magic/css

can parse/stringify/write css in js
[docs](https://magic.github.io/css/)

[![NPM version][npm-image]][npm-url]
[![Linux Build Status][travis-image]][travis-url]
[![Windows Build Status][appveyor-image]][appveyor-url]
[![Coverage Status][coveralls-image]][coveralls-url]
[![Greenkeeper badge][greenkeeper-image]][greenkeeper-url]

(low coverage is due to this documentation not yet being covered by tests, actualy library coverage is at 99%)

##### installation:
```javascript
  npm install @magic/css
```

#### usage:

##### init
```javascript
const css = require('@magic/css')
```

##### styles
```javascript
const style = {
  '.className': {
    color: 'green',
  },
}
await css.stringify(style)
// .className { color:green; }
```

##### hover/active etc
```javascript
const style = {
  'div': {
    color: 'red',
    '&:hover': {
      color: 'green',
    },
  },
}

await css.stringify(style)
// div { color: red; }
// div:hover { color: green; }
```

##### nesting
```javascript
const style = {
  'div': {
    'p, &:hover': {
      color: 'red',
    },
  },
}
await css.stringify(style)
// div p, div:hover { color: red; }
```

##### parse
```javascript
const style = {
  '.className': {
    '#id': {
      color: 'orange',
    },
  },
}

css.parse(style)
// ast
```

##### stringify
```javascript
const style = {
  '.className': {
    '#id': {
      color: 'white',
    },
  },
}

await css.stringify(style)
// minified string
`.className #id{color:white;}`
```

##### write to filesystem
```javascript
const style = {
  '.className': {
    '#id': {
      color: opts.textColor,
    },
  },
}

css.write(style)
// writes styles to ./out.css
css.write(style, { OUTFILE: './outfile.css' })
// writes styles to ./outfile.css
```

##### media queries
```javascript
const style = {
  '@media screen and (min-width: 500px)': {
    '#id': {
      color: opts.textColor,
    },
  },
}

await css.stringify(style)
// css string
`
@media screen and (min-width: 500px) {
  #id {
    color: green;
  }
}
`
```

##### webfonts
```javascript
const style = {
  '@font-face': {
    fontFamily: 'font-name',
    fontDir: '/fonts/',
    fontStyle: 'normal',
    fontWeight: 'normal',
  },
}

await css.stringify(style)
// css string
`
@font-face {
  font-family: "font-name";
  font-style: normal;
  font-weight: normal;
  src: url('/fonts/font-name.eot\');
  src: url('/fonts/font-name.eot#iefix') format('embedded-opentype'),',
  url('/fonts/font-name.ttf') format('truetype'),',
  url('/fonts/font-name.woff') format('woff'),',
  url('/fonts/font-name.woff2') format('woff2'),',
  url('/fonts/font-name.svg#font-name') format('svg');',
}
`
```

### CHANGELOG:
#### 0.1.0
  * return classes and ids as well

#### 0.2.0:
  * Added media queries

#### 0.3.0:
  * returns a promise! no longer sync.
  * autoprefixer and postcss added

### 0.4.0:
  * supports @font-face declarations

#### 0.4.1
  * added fontDir option to font-face declarations


[npm-image]: https://img.shields.io/npm/v/@magic/css.svg
[npm-url]: https://www.npmjs.com/package/@magic/css
[travis-image]: https://travis-ci.com/magic/css.svg?branch=master
[travis-url]: https://travis-ci.org/magic/css
[appveyor-image]: https://ci.appveyor.com/api/projects/status/yk1hmw7ilwb74h5y/branch/master?svg=true
[appveyor-url]: https://ci.appveyor.com/project/jaeh/css/branch/master
[coveralls-image]: https://coveralls.io/repos/github/magic/css/badge.svg
[coveralls-url]: https://coveralls.io/github/magic/css
[greenkeeper-image]: https://badges.greenkeeper.io/magic/css.svg
[greenkeeper-url]: https://greenkeeper.io
