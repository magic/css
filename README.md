# @magic/css

can parse/stringify/write css in js

[html docs](https://magic.github.io/css/)

[![NPM version][npm-image]][npm-url]
[![Linux Build Status][travis-image]][travis-url]
[![Windows Build Status][appveyor-image]][appveyor-url]
[![Coverage Status][coveralls-image]][coveralls-url]
[![Greenkeeper badge][greenkeeper-image]][greenkeeper-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]

[npm-image]: https://img.shields.io/npm/v/@magic/css.svg
[npm-url]: https://www.npmjs.com/package/@magic/css
[travis-image]: https://api.travis-ci.org/magic/css.svg?branch=master
[travis-url]: https://travis-ci.org/magic/css
[appveyor-image]: https://img.shields.io/appveyor/ci/magic/css/master.svg
[appveyor-url]: https://ci.appveyor.com/project/magic/css/branch/master
[coveralls-image]: https://coveralls.io/repos/github/magic/css/badge.svg
[coveralls-url]: https://coveralls.io/github/magic/css
[greenkeeper-image]: https://badges.greenkeeper.io/magic/css.svg
[greenkeeper-url]: https://badges.greenkeeper.io/magic/css.svg
[snyk-image]: https://snyk.io/test/github/magic/css/badge.svg
[snyk-url]: https://snyk.io/test/github/magic/css

##### installation:
```javascript
  npm install @magic/css
```

#### usage:

##### init
```javascript
import css from '@magic/css'
```


##### all in one
```javascript
import css from 'css'

const style = {
  body: {
    color: 'green',
  },
  '.class': {
    color: 'orange',
  },
  '#id': {
    color: 'purple',
  },
}

css(style)

// returns
Object {
  // nicely formatted css string
  css: 'body {\n  color: green;\n}\n.class {\n  color: orange;\n}\n#id{\n  color: purple;\n}\n',
  // minimal whitespace
  minified: 'body{color:green}.class{color:orange}#id{color:purple}',
  // array of used classes if any
  classes: ['.class'],
  // array of used ids if any
  ids: ['#id'],
  // array of used selectors
  selectors: ['body', '.class', '.id'],
  //ast of this css object
  parsed: [
    ['body', { color: 'green' }],
    ['.class': { color: 'orange' }],
    ['#id': { color: 'purple' }],
  ],
}
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
  div: {
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

##### nesting / suffix
to suffix some of the selectors, add a & to any of them except the first one
```javascript
const style = {
  div: {
    '.class1, &.class2': {
      color: 'red',
    },
  },
}

await css.stringify(style)

// div .class1, div.class2 { color: red; }
```

if you add the & at the start of the string,
all of the selectors will have it applied
```javascript
const style = {
  div: {
    '&.class1, .class2': {
      color: 'orange',
    },
  },
}

await css.stringify(style)

// div.class1, div.class2 { color: orange; }
```

##### prefix without space

to prefix the parent of the selector using the child selectors,
add a & at the end of any selectors but the last one.
```javascript
const style = {
  '.class': {
    'p&, :hover': {
      color: 'orange',
    },
  },
}

await css.stringify(style)

// p.class, .class:hover { color: orange; }
```


##### prefix all without space
if the & is at the end of a selector,
the & will be applied to each of them.

```javascript
const style = {
  '.class': {
    'div, p&': {
      color: 'orange';
    },
  },
}

await css.stringify(style)

// div.class, p.class { color: orange; }
```

##### prefix with space
to prefix the parent with a space, use a double && instead of a single &

```javascript
const style = {
  '#id': {
    '.class2&&, .class3': {
      color: 'orange';
    },
  },
}

await css.stringify(style)

// .class2 #id, #id.class3 { color: orange; }
```

##### prefix all with space
if the && is at the end of a selector,
the && will be applied to each of them.

```javascript
const style = {
  '.class': {
    'div, p&&': {
      color: 'orange';
    },
  },
}

await css.stringify(style)

// div .class, p .class { color: orange; }
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

#### 0.4.2
* update deps to fix security issues

#### 0.4.3
* added @keyframes for animations

#### 0.4.4
* css.parse now converts deep arrays into one object before parsing

#### 0.4.5
* css.stringify now makes a bit nicer mediaquery and keyframe lines.
* css.parse should now order media queries to the end of the css

#### 0.4.6
css.parse does a better job of keeping order of incoming objects intact

#### 0.4.7
* FIX: multiple parent selectors 'h1,h2,h3' that should get appended
  with a &:hover etc now correctly append the suffix to every parent
* FEATURE: & can be at the end of a selector,
  in which case the selector gets prepended to it's parent.

#### 0.5.0
* FIX: css gets returned in almost the same order it got passed in.
  turns out that javascript objects do not make this as easy as hoped.