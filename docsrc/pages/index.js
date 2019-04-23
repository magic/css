module.exports = () =>
  div([
    h2('@magic/css'),

    p('parse/stringify/write css in js'),
    p(
      'NO dynamic css, css gets output as css file. whenever possible, use dynamic classes instead.',
    ),
    p(
      'if there is absolute need for dynamic css, feel free to use the style property of the html tag / webcomponent you want to dynamically change, unfortunately, this library will not help you with that.',
    ),

    GitBadges({
      project: 'magic/css',
      appveyor: 'jaeh/css',
    }),

    h2({ id: 'installation' }, 'installation'),
    Pre.View('npm install @magic/css'),

    h2({ id: 'usage' }, 'usage'),

    h3({ id: 'require' }, 'require'),
    Pre.View("const css = require('@magic/css')"),

    h2({ id: 'api' }, 'api'),

    h3({ id: 'api-css' }, 'css (full result)'),
    Pre.View(`
const css = require('css')

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
  classes: [],
  // array of used ids if any
  ids: [],
  // array of used selectors
  selectors: [],
  //ast of this css object
  parsed: [],
}`),

    h3({ id: 'api-parse' }, 'parse'),
    Pre.View(`
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
    Pre.View(`
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
    Pre.View(`
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
    Pre.View(`
const style = {
'.className': {
  color: 'green',
},
}
await css.stringify(style)
// .className { color:green; }`),

    h3({ id: 'pseudo classes: (:hover, :active)' }, 'pseudo classes: (:hover, :active)'),
    p('css pseudo classes in nested css get found if their object key starts with a &'),
    Pre.View(`
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

    h3({ id: 'selector-nesting' }, 'selector nesting'),
    Pre.View(`
const style = {
'div': {
  'p, &:hover': {
    color: 'red',
  },
},
}
await css.stringify(style)
// div p, div:hover { color: red; }`),

    h3({ id: 'media-queries' }, 'media queries'),
    Pre.View(`
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

    h3({ id: 'keyframes' }, 'keyframes for animations'),
    Pre.View(`
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

    h3({ id: 'webfonts' }, 'webfonts'),
    Pre.View(`
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

      h4({ id: 'v-0.1.0' }, '0.1.0'),
      ul([li('return classes and ids as separate objects additionally to selectors')]),

      h4({ id: 'v-0.2.0' }, '0.2.0'),
      ul([li('Added media queries')]),

      h4({ id: 'v-0.3.0' }, '0.3.0'),
      ul([li('returns a promise! no longer sync'), li('autoprefixer and postcss added')]),

      h4({ id: 'v-0.4.0' }, '0.4.0'),
      ul([li('supports @font-face declarations')]),

      h4({ id: 'v-0.4.1' }, '0.4.1'),
      ul([li('added fontDir option to font-face declarations')]),

      h4({ id: 'v-0.4.2' }, '0.4.2'),
      ul([li('update deps to fix security issues')]),

      h4({ id: 'v-0.4.3' }, '0.4.3'),
      ul([li('added @keyframes for animations')]),
    ]),
  ])
