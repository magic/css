#### css as is (strings)

object keys should accept strings instead of objects,
making it possible to write classical css in those (template) strings

#### linter

add linter.

#### functions

caveat: this requires globals or an import of the functions. might not be worth it unless solved declaratively.

add a function or variable for all css properties
each property can be a string, an array or a function call.

#### prefixing instead of postfixing using &

currently
{
'.parent': {
'&.postfix': {},
},
}
will turn into .parent.postfix

why does
{
'.parent': {
'.prefix&': {
'&.postfix': {},
},
},
}

not turn into .prefix.parent.postfix

#### js from css

generate js object from css input string
