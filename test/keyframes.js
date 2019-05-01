const css = require('../src')

const keyframes = {
  '@keyframes testAnim': {
    from: {
      opacity: 0,
    },
    to: {
      opacity: 0,
    },
  },
}

const expectCss = [
  '@-webkit-keyframes testAnim { from { opacity: 0; }\n to { opacity: 0; }\n }',
  '@keyframes testAnim { from { opacity: 0; }\n to { opacity: 0; }\n }\n',
].join(' ')
const expectMinified = [
  '@-webkit-keyframes testAnim{from{opacity:0}to{opacity:0}}',
  '@keyframes testAnim{from{opacity:0}to{opacity:0}}',
].join('')

module.exports = [
  {
    fn: css(keyframes),
    expect: ({ css }) => css === expectCss,
    info: 'can handle keyframes and outputs correct css',
  },
  {
    fn: css(keyframes),
    expect: ({ minified }) => minified === expectMinified,
    info: 'can handle keyframes and outputs correct minified css',
  },
]
