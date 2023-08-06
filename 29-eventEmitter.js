const EventEmitter = require('node:events');

// Create an event handler
const customEmitter = new EventEmitter();
console.log(customEmitter);
// Assigning the event handler to an event
// The main event can have some other callback function // logic associated with it and the emit() method would
// emit out all of the logics one by one.

customEmitter.on('response', (name, id) => {
  console.log(`data received ${name} ${id}`)
})
customEmitter.on('response', () => {
  console.log(`data received again`)
})
// Firing the 'response' event
customEmitter.emit('response', 'Ritesh', 24)
// Notice that the arguments are accessible by the
// first response declaration but the second response
// declaration does not break and does not have 
// access to the arguments. Basically it is extending
// the 'response' event by adding another line of 
// code to the pre-existing one
