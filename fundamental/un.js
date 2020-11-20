const fs = require('fs');

fs.readFile('file - Copia.txt', (err, data)=>{
    if(err) throw err;
    console.log(data);

    fs.unlink('file - Copia.txt', (unlinkErr) => {
        if(unlinkErr) throw unlinkErr;
        console.log('file excluded!');
    });
});