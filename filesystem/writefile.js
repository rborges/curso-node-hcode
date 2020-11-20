const {writeFile} = require('fs');

writeFile('file.txt', ' create a new file with writeFile', err => {
    if(err) throw err;

    console.log('File created!');
});