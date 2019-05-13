const minify = style =>
  style
    // replace newlines after commas to get multiple css classes onto one line
    .replace(/,\n/gim, ',')
    // replace all whitespaces with one space per whitespace group (\n\t\n === ' ').
    .replace(/\s\s+/gim, ' ')
    // replace newlines before } to get all declarations onto one line
    .replace(/\n}/gim, '}')
    // remove spaces around opening brackets {
    .replace(/\s{\s+/gim, '{')
    // remove spaces after :
    .replace(/:\s+/gim, ':')
    // remove spaces after ;
    .replace(/;\s+/gim, ';')
    // remove semicolon before }
    .replace(/;}/gim, '}')
    // // remove whitespace after }
    .replace(/}\s+/gim, '}')
    // remove spaces after ,
    .replace(/,\s+/gim, ',')
    .trim()

export default minify
