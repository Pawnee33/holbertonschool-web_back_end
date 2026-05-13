const http = require('http');
const countStudents = require('./3-read_file_async');

const app = http.createServer((request, response) => {
  switch (request.url) {
    case '/':
      response.writeHead(200, { 'content-type': 'text/plain' });
      response.end('Hello Holberton School!');
      break;
    case '/students':
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
          response.end(error.message);
        });
      break;
    default:
      response.writeHead(404, { 'content-type': 'text/plain' });
      response.end('not found');
      break;
  }
});
const port = 1245;
app.listen(port, () => {
  console.log(`Server up and running on port ${port}`);
});
module.exports = app;
