import css from '../src/index.mjs'

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

const expectCss = '@keyframes testAnim { from { opacity: 0; }\n to { opacity: 0; }\n }\n'

const expectMinified = '@keyframes testAnim{from{opacity:0}to{opacity:0}}'

export default [
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
