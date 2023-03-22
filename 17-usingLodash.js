// Using underscores is the convention to call in modules
// that are not already installed but have to be 
// installed separately. 

const _ = require('lodash')

const items = [1, [2, [3, [4]]]]
// Using a function from the installed module

// Concatenates all the array elements into a 
// one dimentional array using flattenDeep
const newItems = _.flattenDeep(items)
console.log(newItems)

