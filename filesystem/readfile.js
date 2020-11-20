const fs = require('fs');
//non blocking
fs.readFile('text.txt', (err, data) => {
    if(err) throw err;

    //console.log(data.toString());
})

//blocking
const text =  fs.readFileSync('text.txt');

console.log(`Text: ${text}`)