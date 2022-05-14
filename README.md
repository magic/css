# @magic/css

parse/stringify/write css in js

[html docs](https://magic.github.io/css/)

[![NPM version][npm-image]][npm-url]
[![Linux Build Status][travis-image]][travis-url]
[![Windows Build Status][appveyor-image]][appveyor-url]
[![Coverage Status][coveralls-image]][coveralls-url]
[![Greenkeeper badge][greenkeeper-image]][greenkeeper-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]

[npm-image]: https://img.shields.io/npm/v/@magic/css.svg
[npm-url]: https://www.npmjs.com/package/@magic/css
[travis-image]: https://api.travis-ci.com/magic/css.svg?branch=master
[travis-url]: https://travis-ci.com/magic/css
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
  npm install --save-exact @magic/css
```


#### usage:

##### cli:

@magic/css includes a cli script that can handle most usecases the internal javascript api allows.

to use this cli from any directory,
`npm install -g @magic.css` is a useful shortcut.
after the global install, you can just call `mcss` from anywhere in your terminal.

after installation, add:
`"mcss": "mcss"`
to your package.json "scripts" section and then
`npm run mcss`
to see the help output below.

```
@magic/css
commands:
stringify - convert css in js to css
parse     - convert css in js to an array of key value pairs
full      - get a full result object.

flags:
--minified - output minified css - alias: ["--m", "-m"]
--help     - alias: ["-h"]
--out      - directory to write output files to. omit to print to stdout - alias: ["--o", "-o"]
--in       - directory with source files, needs index.js to exist - alias: ["--i", "-i"]

examples:
mcss parse --in ./styles --out ./css
mcss stringify --in ./styles --out ./css
mcss full --in ./styles --out ./css
```

#### library:

##### init
```javascript
import css from '@magic/css'
```


##### all in one
```javascript
import css from '@magic/css'

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
  // ast of this css object
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


// writes styles to ./out.css
await css.write(style)

// writes styles to ./outfile.css
await css.write(style, { OUTFILE: './outfile.css' })
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
    family: 'font-name',
    url: '/fonts/',
    styles: ['normal', 'italic'],
    weights: [400, 600],
  },
}

await css.stringify(style)

// css string
`
@font-face {
  font-family: "font-name";
  font-style: normal;
  font-weight: normal;
  src: url('/fonts/font-name-400-normal.eot\');
  src: url('/fonts/font-name-400-normal.eot#iefix') format('embedded-opentype'),',
  url('/fonts/font-name-400-normal.ttf') format('truetype'),',
  url('/fonts/font-name-400-normal.woff') format('woff'),',
  url('/fonts/font-name-400-normal.woff2') format('woff2'),',
  url('/fonts/font-name-400-normal.svg#font-name') format('svg');',
}
`
// ... repeated for all styles and weights that were defined

```

### CHANGELOG:
#### 0.1.0
return classes and ids as well

#### 0.2.0:
Added media queries

#### 0.3.0:
* returns a promise! no longer sync.
* autoprefixer and postcss added

### 0.4.0:
supports @font-face declarations

#### 0.4.1
added fontDir option to font-face declarations

#### 0.4.2
update deps to fix security issues

#### 0.4.3
added @keyframes for animations

#### 0.4.4
css.parse now converts deep arrays into one object before parsing

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
FIX: css gets returned in almost the same order it got passed in.
turns out that javascript objects do not make this as easy as hoped.

#### 0.6.0
use esmodules

#### 0.7.0
update @magic/types to not break if es modules get passed into the styles

#### 0.7.1
* update @magic/deep to use ecmascript module version
* update postcss, autoprefixer

#### 0.7.2
update dependencies

#### 0.7.3
update dependencies

#### 0.7.4
add @magic/log to dependencies

#### 0.7.5
update autoprefixer

#### 0.7.6
update postcss

#### 0.7.7
update postcss

#### 0.7.8
update @magic/deep

#### 0.7.9
require node >= 13.5.0

#### 0.7.10
update postcss

##### 0.7.11
update autoprefixer

##### 0.7.12
update postcss

##### 0.7.13
* bump required node version to 14.2.0
* write is async now

##### 0.7.14
* update autoprefixer, dependencies

##### 0.7.15
* update dependencies

##### 0.7.16
update autoprefixer

##### 0.7.17
update autoprefixer

##### 0.7.18
* move no-spy to devdeps
* update dependencies

##### 0.7.19
update autoprefixer

##### 0.7.20
update dependencies

##### 0.7.21
update dependencies

##### 0.7.22
update dependencies

##### 0.7.23
update dependencies

##### 0.7.24
update dependencies

##### 0.7.25
update dependencies

##### 0.7.26
update dependencies

##### 0.7.27
update dependencies
simplify font-face handling

##### 0.7.28
* bump required node version to 14.15.4
* update dependencies

##### 0.7.29
* font-face handles non-array weights, types and styles
* font-face uses woff and woff2 as default font types
* font-face uses weight 400 and styles 'normal' as defaults

##### 0.7.30
update dependencies

##### 0.7.31
update dependencies (@magic/fs)

##### 0.7.32
* update dependencies
* css.selectors returns arrays instead of strings

##### 0.7.33
update dependencies

##### 0.7.34
update dependency autoprefixer

##### 0.7.35
update dependency @magic/fs

##### 0.7.36
remove local implementation of camel2kebab, use @magic/cases instead

#### 0.7.37
update dependencies

#### 0.7.38
**FIX**: update @magic/cases, which fixes overflow-x and other css props that end with an uppercase character
overflowX is output as overflowx in earlier versions, the regex expected lowercase characters after the uppercase char

#### 0.7.39
update dependencies

#### 0.7.40
update dependencies

#### 0.7.41
update dependencies

#### 0.7.42
update dependencies

#### 0.7.43
* update dependencies
* added font v2 to allow handling of local() fonts (see https://magic.github.io/css/#styles-webfonts)
* woff2 files are placed before woff files
* use single quotes in output css
* add cli

#### 0.7.44
* css props can be arrays to provide css overloads `{ color: ['green', 'red'] }` turns into `color: green; color: red;`
* update dependencies

#### 0.7.45
update dependencies

#### 0.7.46
update dependencies

#### 0.7.47
update dependencies

#### 0.7.48
update dependencies

#### 0.7.49
update dependencies

#### 0.7.50
update dependencies

#### 0.7.51
update dependencies

#### 0.7.52
update dependencies

#### 0.7.53 - unreleased
...

