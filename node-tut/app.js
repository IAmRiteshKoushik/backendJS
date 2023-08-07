var http = require('http'); 
var fs = require('fs');

http
  .createServer(function (req, res) {
    // const text = fs.readFileSync('./10-content/big.txt',
    //   'utf8');
    // res.end(text);
    const fileStream = fs.createReadStream('./10-content/big.txt', 'utf8');
    fileStream.on('open', () => {
      fileStream.pipe();
    })
    fileStream.on('open', (err)=>{
      res.end(err);
    })
  })
  .listen(5000);

// Look more into Streams in Node.js (some advanced course)
