const http = require('http')

const server = http.createServer((req, res) => {
    // We use simple if-statements to 
    // check which page we are in and then 
    //  carry out requests likewise. 
    if(req.url === '/'){
        res.write('Welcome to our home page')
        res.end()
    }

    if(req.url === '/about'){
        res.end('Here is our short hsitory')
    }

    res.end(`
    <h1>Oops!</h1>
<p> We cannot seem to find the page you are looking for.</p>
<a href="/">Back Home</a>
    `)

})

// Listening to port 5000
server.listen(5000)

// This works only once after which the node.js server shuts down
// More to bbe discussed later on
