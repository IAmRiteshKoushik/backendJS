// CommonJS, every file is a module (by defualt)
// Modules - encapsulated code (only share  minimum)

// We have managed to successfully import data and function
// from different files and folders
const {beluga, peter} = require('./04_names')
const sayHi = require('./05_utils')

sayHi('susan')
sayHi(beluga)
sayHi(peter)

// Prints out the imports;
