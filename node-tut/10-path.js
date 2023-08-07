const path = require('path');

// What is the separator character used by the 
// existing file system or platform. Usually it is "/"
console.log(path.sep)

// Creating fielpaths using the join method
const filePath = path.join('/content', 'subfolder', 'text.txt')
console.log(filePath)

const base = path.basename(filePath)
console.log(base)  // Only the last file

// Our application would be running in
// different environments and we might be 
// in need of this absolute path over realtive path
// when we do not have 
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'text.txt')
console.log(absolute)
