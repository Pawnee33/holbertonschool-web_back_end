const http = require('http');
const countStudents = require('./3-read_file_async');

const app = http.createServer((request, response) => {
  if (request.url === '/') {
    response.writeHead(200, { 'content-type': 'text/plain' });
    response.end('Hello Holberton School!');
  } else if (request.url === '/students') {
    response.writeHead(200, { 'content-type': 'text/plain' });
    const lines = ['This is the list of our students'];
    const countStudentsLog = console.log;
    console.log = (...args) => {
      lines.push(args.join(' '));
    };
    countStudents(process.argv[2])
      .then(() => {
        console.log = countStudentsLog;
        response.end(lines.join('\n'));
      })
      .catch((error) => {
        console.log = countStudentsLog;
        response.end(error.message);
      });
  }
});

app.listen(1245);
module.exports = app;
