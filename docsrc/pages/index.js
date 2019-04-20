module.exports = () => div([
  h2('@magic/css'),

  p('parse/stringify/write css in js'),
  p('NO dynamic css, css gets output as css file'),

  Link({ to: 'https://www.npmjs.com/package/@magic/css', }, Img({ src: "https://img.shields.io/npm/v/@magic/css.svg" })),
  Link({ to: 'https://travis-ci.org/magic/css' }, Img({ src: 'https://travis-ci.com/magic/css.svg?branch=master' })),
  Link({ to: 'https://ci.appveyor.com/project/jaeh/css/branch/master' }, Img({ src: 'https://ci.appveyor.com/api/projects/status/yk1hmw7ilwb74h5y/branch/master?svg=true' })),
  Link({ to: 'https://coveralls.io/github/magic/css' }, Img({ src: 'https://coveralls.io/repos/github/magic/css/badge.svg' })),
  Link({ to: 'https://greenkeeper.io' }, Img({ src: 'https://badges.greenkeeper.io/magic/css.svg' })),


  h2('installation'),
  Pre.View('npm install @magic/css'),

  h2('usage'),

  h3('init'),
  Pre.View('const css = require(\'@magic/css\')'),

  h3('styles'),
  Pre.View(`
const style = {
  '.className': {
    color: 'green',
  },
}
await css.stringify(style)
// .className { color:green; }`),

  h3('hover/active etc'),
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

  h3('nesting'),
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

  h3('parse'),
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

h3('stringify'),
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

  h3('write to filesystem'),
  Pre.View(`
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
// writes styles to ./outfile.css`),

  h3('media queries'),
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


  h3('keyframes'),
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

  h3('webfonts'),
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

  div({ class: 'changelog' }, [
    h2('CHANGELOG'),

    h3('0.1.0'),
    ul([
      li('return classes and ids as separate objects additionally to selectors'),
    ]),

    h3('0.2.0'),
    ul([
      li('Added media queries'),
    ]),

    h3('0.3.0'),
    ul([
      li('returns a promise! no longer sync'),
      li('autoprefixer and postcss added'),
    ]),

    h3('0.4.0'),
    ul([
      li('supports @font-face declarations'),
    ]),

    h3('0.4.1'),
    ul([
      li('added fontDir option to font-face declarations'),
    ]),

    h3('0.4.2'),
    ul([
      li('update deps to fix security issues'),
    ]),

    h3('0.4.3'),
    ul([
      li('added @keyframes for animations'),
    ]),
  ]),
])