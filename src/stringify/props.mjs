import cases from '@magic/cases'

export const stringifyProps = props =>
  Object.entries(props)
    .map(([k, v]) => `${cases.kebab(k)}: ${v};`)
    .join(' ')

export default stringifyProps
