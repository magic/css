import cases from '@magic/cases'

export default [
  { fn: cases.kebab('backgroundColor'), expect: 'background-color', info: 'can camel 2 kebab' },
  { fn: cases.kebab('background_Color'), expect: 'background-color', info: 'can weird_Snake 2 kebab' },
  { fn: cases.kebab('background_color'), expect: 'background-color', info: 'can snake_case 2 kebab' },
  // { fn: cases.kebab('BACKGROUND_COLOR'), expect: 'background-color', info: 'can UPPER_SNAKE 2 kebab' },
]
