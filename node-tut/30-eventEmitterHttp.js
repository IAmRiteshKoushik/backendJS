const http = require('http');

// const server = http.createServer((req, res) => {
// res.end('Welcome')
// })

// Using Event Emitter API
const server = http.createServer();
// emits request Event
server.on('request', (req, res) => {
  res.end('Welcome');
})

server.listen(5000);

// What we essentially do is stop blocking code
// by allowing the server to process requests 
// asynchronously through the .on and .emit 
// functions. 
