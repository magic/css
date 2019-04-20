const Badges = () => div({ class: 'Badges' }, [
  Link({ to: 'https://www.npmjs.com/package/@magic/css', }, Img({ src: "https://img.shields.io/npm/v/@magic/css.svg" })),
  Link({ to: 'https://travis-ci.org/magic/css' }, Img({ src: 'https://travis-ci.com/magic/css.svg?branch=master' })),
  Link({ to: 'https://ci.appveyor.com/project/jaeh/css/branch/master' }, Img({ src: 'https://ci.appveyor.com/api/projects/status/yk1hmw7ilwb74h5y/branch/master?svg=true' })),
  Link({ to: 'https://coveralls.io/github/magic/css' }, Img({ src: 'https://coveralls.io/repos/github/magic/css/badge.svg' })),
  Link({ to: 'https://greenkeeper.io' }, Img({ src: 'https://badges.greenkeeper.io/magic/css.svg' })),
])

Badges.style = {
  '.Badges': {
    'a': {
      margin: '0 .5em 0 0',
    },
  },
}

module.exports = Badges