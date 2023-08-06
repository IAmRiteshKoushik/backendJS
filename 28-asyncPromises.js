const { readFile, writeFile } = require('fs');

// There is a way to avoid using promisify and instead we can use
// const {readFile, writeFile } = require('fs').promises;
// This returns the usual methods but in promise format and we 
// need not import the util package

const util = require('util');
const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);

// Method 01
// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, 'utf8', (err, data) => {
//       if(err){
//         reject(err)
//       } else {
//         resolve(data)
//       }
//     })
//   })
// }
//
// getText('./10-content/firster.txt')
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));

// Method 02
const start = async() => {
 try {
    const first = await readFilePromise('./10-content/first.txt', 'utf8');
    const second = await readFilePromise('./10-content/second.txt', 'utf8');
    await writeFilePromise(
      './10-content/result-mind-grenade.txt',
      `THIS IS AWESOME : ${first} ${second} `,
      { flag: 'a'}
    )
    console.log(first, second)
  } catch(error) {
    console.log(error)
  } 
}

start();
