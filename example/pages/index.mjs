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

  GitBadges('magic/css'),

  h2({ id: 'installation' }, 'installation'),
  Pre('npm install @magic/css'),

  h2({ id: 'usage' }, 'usage'),

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

css(style)

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

css.parse(style)
// ast`),

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
  from {
    opacity: 0,
  },
  to {
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
  Pre(`
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
\`
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
\``),

  div({ id: 'changelog' }, [
    h2('CHANGELOG'),

    h4({ id: 'changelog-v-0.1.0' }, '0.1.0'),
    ul([li('return classes and ids as separate objects additionally to selectors')]),

    h4({ id: 'changelog-v-0.2.0' }, '0.2.0'),
    ul([li('Added media queries')]),

    h4({ id: 'changelog-v-0.3.0' }, '0.3.0'),
    ul([li('returns a promise! no longer sync'), li('autoprefixer and postcss added')]),

    h4({ id: 'changelog-v-0.4.0' }, '0.4.0'),
    ul([li('supports @font-face declarations')]),

    h4({ id: 'changelog-v-0.4.1' }, '0.4.1'),
    ul([li('added fontDir option to font-face declarations')]),

    h4({ id: 'changelog-v-0.4.2' }, '0.4.2'),
    ul([li('update deps to fix security issues')]),

    h4({ id: 'changelog-v-0.4.3' }, '0.4.3'),
    ul([li('added @keyframes for animations')]),

    h4({ id: 'changelog-v-0.4.4' }, '0.4.4'),
    ul([li('css.parse now converts deep arrays into one object before parsing')]),

    h4({ id: 'changelog-v-0.4.5' }, '0.4.5'),
    ul([
      li('css.stringify now makes a bit nicer mediaquery and keyframe links.'),
      li('css.parse should now order media queries to the end of the css.'),
    ]),

    h4({ id: 'changelog-v-0.4.6' }, '0.4.6'),
    ul([li('css.parse does a better job of keeping order of incoming objects intact')]),

    h4({ id: 'changelog-v-0.4.7' }, '0.4.7'),
    ul([
      li([
        "FIX: multiple parent selectors 'h1,h2,h3' that should get appended",
        ' with a &:hover etc suffix now correctly append that suffix to every parent',
      ]),
      li('FEATURE: & can be at the end of a selector to prepend a parent'),
    ]),
  ]),

  h4({ id: 'changelog-v-0.5.0' }, '0.5.0'),
  ul([
    li([
      'FIX: css gets returned in almost the same order it got passed in.',
      ' turns out that javascript objects do not make this as easy as hoped.',
    ]),
  ]),

  h4({ id: 'changelog-v-0.5.0' }, '0.6.0'),
  ul([li(['use esmodules'])]),

  h4({ id: 'changelog-v-0.7.0' }, '0.7.0'),
  p('update @magic/types to not break if es modules get passed into the styles'),

  h4('0.7.1'),
  p('update @magic/deep to use ecmascript module version'),
  p('update postcss, autoprefixer'),

  h2({ id: 'source' }, 'source'),
  p([
    'the source for this page is in the ',
    Link({ to: 'https://github.com/magic/css/tree/master/example' }, 'example directory'),
    ' and gets built and published to github using ',
    Link({ to: 'https://github.com/magic/core' }, '@magic/core'),
  ]),

  LightSwitch(state),
]
