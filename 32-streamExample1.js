// GENERATE A BIG FILE FOR DEMO PURPOSE

// const { writeFileSync } =require('fs')
// for (let i = 0; i < 10000; i++){
// writeFileSync('./10-content/big.txt', 
// `hello world ${i}\n`,
// { flag: 'a'})
// }

const { createReadStream } = require('fs');

const stream = createReadStream('./10-content/big.txt');

stream.on('data', (result) => {
  console.log(result)
})
