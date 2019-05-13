// import css from '../src/.mjs'

// let called = false

// const before = () => {
//   const cons = console
//   global.console = {
//     warn: () => {
//       called = true
//     },
//   }

//   return () => {
//     global.console = cons
//     called = false
//   }
// }

export default [
  { fn: true },
  // {
  //   fn: async () => await css({ body: { display: 'box' } }),
  //   expect: console.log,//() => called === true,
  //   // before,
  //   info: 'errors in css console.warn',
  // },
]
