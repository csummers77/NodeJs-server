const http = require('http');
// console.log(http);
// create server takes 1 argument
const server = http.createServer((req, res) => {
    console.log("Someone HTTP server");
    res.end('<h1>Hello</h1>');
});

server.listen(3000);