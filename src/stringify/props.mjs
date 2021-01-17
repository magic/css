import camel2kebab from '../camel2kebab.mjs'

export const stringifyProps = props =>
  Object.entries(props)
    .map(([k, v]) => `${camel2kebab(k)}: ${v};`)
    .join(' ')

export default stringifyProps
