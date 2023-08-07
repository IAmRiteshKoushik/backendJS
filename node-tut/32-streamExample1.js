// GENERATE A BIG FILE FOR DEMO PURPOSE

// const { writeFileSync } =require('fs')
// for (let i = 0; i < 10000; i++){
// writeFileSync('./10-content/big.txt', 
// `hello world ${i}\n`,
// { flag: 'a'})
// }

const { createReadStream } = require('fs');

const stream = createReadStream('./10-content/big.txt', {
  highWaterMark: 90000, // This means that we would be processing 90Kb per buffer
  encoding: 'utf8' // By specifying the encoding, we get the exact output of stream
});

// default is 64kB
// last buffer - remainder
// highWaterMark - control size
// const stream = createReadStream('./10-content/big.txt', { highWaterMark : 90000})
// const stream = createReadStream('../content/big.txt', { encoding : utf8 })

stream.on('data', (result) => {
  console.log(result);
})
stream.on('error', (error) => {
  console.log(error);
})

// The output comes out in chunks of the first 64 KB
// Then the next 64 KB
// And then the remainder (169 - 128 = 41KB) 
  
