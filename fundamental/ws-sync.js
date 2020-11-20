const fs = require('fs');

console.log((process.hrtime()[0]/60).toFixed(9));

console.log('before');
//non blocking
const dados = fs.readFile('file.txt', (err, data)=>{
        if(err) throw err;

        console.log('before');
    }
);

console.log('after');

console.log((process.hrtime()[0]/60).toFixed(9));
