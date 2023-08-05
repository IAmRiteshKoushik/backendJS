const { readFile } = require('fs');

console.log('start a first task');
// CHECK FILE PATH!!!
readFile('./10-content/first.txt', 'utf8', (err, result) => {
  if (err) {
    console.log(err)
    return
  }
  console.log(result)
  console.log('completed first task')
})
console.log('starting next task')

// We can observe that the execution of the callback() function 
// takes place after the completion of the entire script as there
// is a very slight gap even as we have offloaded the task to 
// the kernel
