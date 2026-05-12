const http = require('http');
const app = http.createServer(function(request, response) {
    response.writeHead(200, {'content-type': 'text/plain'});
    response.end('Hello Holberton School!');
});
const hostname = '127.0.0.1';
const port = 1245;
app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
});
module.exports = app;
