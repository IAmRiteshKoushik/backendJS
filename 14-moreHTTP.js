const http = require('http')

// The create server method turns your computer into
// an HTTP server. The http.createServer() method
// creates an HTTP server Object. THe HTTP Serer
// can listen to ports on your computer and execute
// a function, a requestListner, eac time a request
// is made. 

const server = http.createServer((req, res) => {
    console.lof(req)
    res.write('Welcome to our home page')
    res.end()
})

