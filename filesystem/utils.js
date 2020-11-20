const {promisify} = require('util');

const writeFile = promisify(require('fs').writeFile);
const content = 'Create a file using promisify';

writeFile('file-util.txt', content)
.then(()=>{
    console.log('File successfully created!')
})
.catch((err)=>{
    console.log(`Error = ${err}`);
});
