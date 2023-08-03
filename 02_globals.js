console.log(__dirname)  // Gives out the directory name
console.log(__filename) // Gives out the filename

// require - function to use modules (CommonJS)
// module - info about current module (file)
// process - info about env where the program is being executed
// setInterval() and setTimeout are available
setInterval(() => {
    console.log('hello world')
}, 1000)

