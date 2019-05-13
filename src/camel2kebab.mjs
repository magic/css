const camReg = /[a-z]([A-Z])+/g
const camHandler = m => m[0] + '-' + m.substring(1).toLowerCase()
// converts js camelCase css Objects (backgroundColor) to css kebab (background-color)
const camel2kebab = str => str.replace(camReg, camHandler)

export default camel2kebab
