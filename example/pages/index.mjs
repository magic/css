export const View = state => [
  h2(state.title),

  p('parse/stringify/write css in js'),
  p('NO dynamic css, css gets output as css file. whenever possible, use dynamic classes instead.'),
  p([
    'if there is absolute need for dynamic css,',
    ' feel free to use the style property of the',
    ' html tag / webcomponent you want to dynamically change,',
    ' unfortunately, this library will not help you with that.',
  ]),

  GitBadges('@magic/css'),

  h2({ id: 'installation' }, 'installation'),
  Pre('npm install --save-exact @magic/css'),

  h2({ id: 'usage' }, 'usage:'),

  h4({ id: 'cli' }, 'cli:'),

  p(
    '@magic/css includes a cli script that can handle most usecases the internal javascript api allows.',
  ),

  p([
    'to use this cli from any directory, ',
    Pre('npm install -g @magic.css'),
    ' is a useful shortcut.',
    ' after the global install, you can just call `mcss` from anywhere in your terminal to see the help.',
  ]),

  Pre(`
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
mcss parse --in ./css --out ./css
mcss stringify --in ./styles --out ./css
`),

  h3({ id: 'import' }, 'import'),
  Pre("import css from '@magic/css'"),

  h2({ id: 'api' }, 'api'),

  h3({ id: 'api-css' }, 'css (full result)'),
  Pre(`
import css from 'css'

const style = {
  body: {
    color: 'green',
  },
  '.class': {
    color: 'orange',
  },
  '#id': {
    color: 'purple'
  },
}

const result = await css(style)

// returns
Object {
  // nicely formatted css string
  css: 'body {\\n  color: green;\\n}\\n.class {\\n  color: orange;\\n}\\n#id{\\n  color: purple;\\n}\\n',
  // minimal whitespace
  minified: 'body{color:green}.class{color:orange}#id{color:purple}',
  // array of used classes if any
  classes: ['.class'],
  // array of used ids if any
  ids: ['#id'],
  // array of used selectors
  selectors: [],
  //ast of this css object
  parsed: [],
}`),

  h3({ id: 'api-parse' }, 'parse'),
  Pre(`
const style = {
  '.className': {
    '#id': {
      color: 'orange',
    },
  },
}

const ast = css.parse(style)
// ast
[['.className #id', { color: 'orange' } ]]
`),

  h3({ id: 'api-stringify' }, 'stringify'),
  Pre(`
const style = {
  '.className': {
    '#id': {
      color: 'white',
    },
  },
}

await css.stringify(style)
// minified string
\`.className #id{color:white;}\`
`),

  h3({ id: 'api-write' }, 'write to filesystem'),
  Pre(`
const style = {
  '.className': {
    '#id': {
      color: opts.textColor,
    },
  },
}

// writes styles to ./out.css
css.write(style)
// writes styles to ./outfile.css
css.write(style, { OUTFILE: './outfile.css' })`),

  h2({ id: 'styles' }, 'styles'),
  p([
    'styles are a javascript object.',
    ' the keys are selectors and the values are nested objects of css rules,',
    ' where the keys of the objects are assumed to be selectors',
    ' unless the value associated with the key is not an object',
  ]),
  Pre(`
const style = {
'.className': {
  color: 'green',
},
}
await css.stringify(style)
// .className { color:green; }`),

  h3({ id: 'styles-pseudo-classes' }, 'pseudo classes: (:hover, :active)'),
  p('css pseudo classes in nested css get found if their object key starts with a &'),
  Pre(`
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
// div:hover { color: green; }`),

  h3({ id: 'styles-selector-nesting' }, 'selector nesting'),
  Pre(`
const style = {
'div': {
  'p, &:hover': {
    color: 'red',
  },
},
}
await css.stringify(style)
// div p, div:hover { color: red; }`),

  h3({ id: 'styles-prefix-without-space' }, 'prefix without space'),
  p([
    'to prefix the parent of the selector using the child selectors,',
    ' add a & at the end of any selectors but the last one.',
  ]),
  Pre(`
const style = {
  '.class': {
    'p&, :hover': {
      color: 'orange',
    },
  },
}

await css.stringify(style)

// p.class, .class:hover { color: orange; }
`),

  h3({ id: 'styles-prefix-all-without-space' }, 'prefix all without space'),
  p(['if the & is at the end of a selector,', ' the & will be applied to each of them.']),
  Pre(`
const style = {
  '.class': {
    'div, p&': {
      color: 'orange';
    },
  },
}

await css.stringify(style)

// div.class, p.class { color: orange; }
`),

  h3({ id: 'styles-prefix-with-space' }, 'prefix with space'),
  p('to prefix the parent with a space, use a double && instead of a single &'),

  Pre(`
const style = {
  '#id': {
    '.class2&&, .class3': {
      color: 'orange';
    },
  },
}

await css.stringify(style)

// .class2 #id, #id.class3 { color: orange; }
`),

  h3({ id: 'styles-prefix-all-with-space' }, 'prefix all with space'),
  p(['if the && is at the end of a selector,', ' the && will be applied to each of them.']),

  Pre(`
const style = {
  '.class': {
    'div, p&&': {
      color: 'orange';
    },
  },
}

await css.stringify(style)

// div .class, p .class { color: orange; }
`),

  h3({ id: 'styles-media-queries' }, 'media queries'),
  Pre(`
const style = {
  '@media screen and (min-width: 500px)': {
    '#id': {
      color: opts.textColor,
    },
  },
}

await css.stringify(style)
// css string
\`
@media screen and (min-width: 500px) {
  #id {
    color: green;
  }
}
\``),

  h3({ id: 'styles-keyframes' }, 'keyframes for animations'),
  Pre(`
const style = {
'@keyframes anim-name': {
  from: {
    opacity: 0,
  },
  to: {
    opacity: 1,
  }
}

await css.stringify(style)

// css string
\`
@keyframes anim-name {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
\``),

  h3({ id: 'styles-webfonts' }, 'webfonts'),
  h4('Font V2'),
  p('This approach allows definition of font-style, font-weight, and local font names.'),

  h5('Pseudocode'),
  Pre(`
@font-face: {
  family: 'name',
  url: '/fonts/',
  styles: {
    (normal|italic): {
      weight: ['LocalName', 'Local Name']
    }
  }
}
`),

  Pre(`
const style = {
    '@font-face': {
      family: 'font-name',
      url: '/fonts/',
      styles: {
        normal: {
          400: ['FontName', 'Font Name'],
          600: ['FontNameBold', 'Font Name Bold']
        },
        italic: {
          400: ['FontNameItalic', 'Font Name Italic'],
        },
      },
    },
  }

  const out = await css.stringify(style)

  // out.css string
  @font-face {
    font-family: 'font-name';
    font-style: normal;
    font-weight: 400;
    src:
      local('FontName'),
      local('Font Name'),
      url('/fonts/font-name-400-normal.woff2') format('woff2');
  }

  @font-face {
    font-family: 'font-name';
    font-style: normal;
    font-weight: 600;
    src:
      local('FontNameBold'),
      local('Font Name Bold'),
      url('/fonts/font-name-600-normal.woff2') format('woff2');
  }

  @font-face {
    font-family: 'font-name';
    font-style: italic;
    font-weight: 400;
    src:
      local('FontNameItalic'),
      local('Font Name Italic'),
      url('/fonts/font-name-400-italic.woff2') format('woff2');
  }
  `),

  h4('Font V1 - DEPRECATED'),
  p('This approach does not allow definition of local fonts to load, and therefore is deprecated.'),
  Pre(`
  const style = {
    '@font-face': {
      family: 'font-name',
      url: '/fonts/',
      styles: ['normal', 'italic'],
      weights: [400, 600],
    },
  }

  const out = await css.stringify(style)

  // out.css string

  @font-face {
    font-family: 'font-name';
    font-style: normal;
    font-weight: normal;
    src: url('/fonts/font-name-400-normal.eot\');
    src: url('/fonts/font-name-400-normal.eot#iefix') format('embedded-opentype'),',
    url('/fonts/font-name-400-normal.ttf') format('truetype'),',
    url('/fonts/font-name-400-normal.woff') format('woff'),',
    url('/fonts/font-name-400-normal.woff2') format('woff2'),',
    url('/fonts/font-name-400-normal.svg#font-name') format('svg');',
  }

  // ... repeated for all styles and weights that were defined
  `),

  h4({ id: 'styles-css-overload' }, 'css overload'),
  p('Css allows overloads for props, to provide fallback values for old browsers'),
  Pre(`
{
  body: {
    color: ['green', 'red'],
  },
}
  `),

  p('turns into'),

  Pre(`
body {
  color: green;
  color: red;
}
`),

  h2({ id: 'source' }, 'source'),
  p([
    'the source for this page is in the ',
    Link({ to: 'https://github.com/magic/css/tree/master/example' }, 'example directory'),
    ' and gets built and published to github using ',
    Link({ to: 'https://github.com/magic/core' }, '@magic/core'),
  ]),
]
