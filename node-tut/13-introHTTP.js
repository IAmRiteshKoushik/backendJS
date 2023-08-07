const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.end()
    }
    res.write("Welcome to our home page")
    res.end()
})

// This is the port which the server is listening to
// 5000 is a random number added as parameter

server.listen(5000)
// Type - localhost:5000
