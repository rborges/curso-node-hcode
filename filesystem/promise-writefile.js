const {writeFile} = require('fs');
const { fileURLToPath } = require('url');

function createFile(name, content) {
    return new Promise((resolve, reject) => {
        writeFile(name, content, err => {
            if(err) throw reject(err);

            resolve();
        })
    });
}

const content = 'Create a file using Promise';
const name = 'promise-file.txt';

createFile(name, content)
.then(() => {
    console.log('File created!');
})
.catch((err)=>{
    console.log(`Error = ${err}`);
});


