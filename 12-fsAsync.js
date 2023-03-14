const {readFile, writeFile} = require('fs')
console.log('start')

// Using callback functions to catch erro before the execution
// of the primary code of the function.
// In callback functions, function(err, result) is the 
// default syntax of it. If something goes wrong with the
// javascript function, then the callback function is called
// by default with the first argument. Otherwise, it gets called by
// the second argument...
readFile('./10-content/first.txt', 'utf-8', (err, result) => {
    if (err){
        console.log(err)
        return
    }
    const first = result;
    readFile('./10-content/second.txt', 'utf-8', (err, result) => {
        if (err){
            console.log(err)
            return
        }
        const second = result;
        writeFile('./10-content/result-async.txt',
        `Here is the result: ${first} ${second}`,
        (err, result) => {
            if(err){
                console.log(err)
                return   
            }
            console.log('done with this task')
        }
        )
    })
})

console.log('starting the next task')

// Output: 
// start
// starting the next task
// done with this task

// Reason:
// As we have taken an asynchronous approach with callback func
// we are offloading the last task while the other process
// keeps taking place in the background

// Later on, use to Promises, Async/Await...