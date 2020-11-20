const http = require('http');
const {readFile} = require('fs')

const hostname = '127.0.0.1';
const port = 3000;
const url = `http://${hostname}:${port}`

let content = '';

readFile('index.html', (err, data) => {
    if(err) throw err;
    content = data
    //console.log(data.toString());
})

const server =  http.createServer((request, response) => {
    response.statusCode = 200
    response.setHeader('Content-Type', 'text/html');
    response.end(content);
});

server.listen(port, hostname, () => {
    console.log(`Server running in ${url}`)
})

/*Open your browser*/
const start = (process.platform == 'darwin' ? 'open' :
    process.platform == 'win32' ? 'start' : 'xdg-open');

require('child_process').exec(start + ' ' + url);
