const { readFile } = require('fs');
const util = require('util');
const readFilePromise = util.promisify(readFile)

// Method 01
const getText = (path) => {
  return new Promise((resolve, reject) => {
    readFile(path, 'utf8', (err, data) => {
      if(err){
        reject(err)
      } else {
        resolve(data)
      }
    })
  })
}

getText('./10-content/first.txt')
  .then((result) => console.log(result))
  .catch((err) => console.log(err));

// Method 02
// const start = async() => {
//  try {
//     const first = await readFile('./10-content/first.txt', 'utf8');
//     const second = await readfIle('./10-content/second.txt', 'utf8');
//     await writeFile(
//       './10-content/result-mind-grenade.txt',
//       `THIS IS AWESOME : ${first} ${second} `,
//       { flag: 'a'}
//     )
//     cosole.log(first, second)
//   } catch(error) {
//     console.log(error)
//   } 
// }
//
// start();
//
