import cases from '@magic/cases'
import is from '@magic/types'

export const stringifyProps = props =>
  Object.entries(props)
    .map(([k, v]) => {
      const kebab = cases.kebab(k)

      // handle css overloads (color: ['green', 'red'] turns into "color: green; color: red;")
      if (is.array(v)) {
        return v.map(o => `${kebab}: ${o};`).join(' ')
      }

      return `${kebab}: ${v};`
    })
    .join(' ')

export default stringifyProps
