const fs = require('fs');

console.log((process.hrtime()[0]/60));
console.log('before');
//blocking
const dados = fs.readFileSync('file.txt');

console.log('after');

console.log((process.hrtime()[0]/60));
