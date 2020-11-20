const Buffer = require('buffer').Buffer;

const b = Buffer.from('NodeJs course');

console.log(b.toString());
console.log(b.toString('utf16le'));

const b_str = Buffer.from('Loading string', 'utf-8')

console.log(b_str)
console.log(Buffer.isBuffer(b_str))
console.log(b_str.toString('utf-8', 0, 10))