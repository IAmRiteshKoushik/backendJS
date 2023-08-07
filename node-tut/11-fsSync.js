const {readFileSync, writeFileSync} = require('fs')

// Reading from text files
const first = readFileSync('./10-content/first.txt', 'utf-8')
const second = readFileSync('./10-content/second.txt', 'utf-8')
console.log(first, second)

// Writing to text files

// If the file does not exit already then node.js
// will create one. But if a file exits then that 
// would be overwritten with new content. 
writeFileSync('./10-content/result-sync.txt',`Here is the result: ${first}, ${second}`)

// If we wish to just append to a text file
// We need to setup an append option in the flag
// as a separate parameter
writeFileSync('./10-content/result-sync2.txt', `Here is the result: ${first} ${second}`, {flag: 'a'})
