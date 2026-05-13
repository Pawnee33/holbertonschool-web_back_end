const http = require('http');
const fs = require('fs');

const database = process.argv[2];

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (error, data) => {
      if (error) {
        reject(new Error('Cannot load the database'));
      } else {
        const splitlines = data.split('\n');
        const slicedata = splitlines.slice(1).filter((splitline) => splitline !== '');
        let resultat = `Number of students: ${slicedata.length}\n`;

        const students = {};
        slicedata.forEach((splitline) => {
          const columns = splitline.split(',');
          const firstname = columns[0];
          const field = columns[3];
          if (!students[field]) {
            students[field] = [];
          }
          students[field].push(firstname);
        });

        Object.keys(students).forEach((field) => {
          resultat += `Number of students in ${field}: ${students[field].length}. List: ${students[field].join(', ')}\n`;
        });
        resolve(resultat.trimEnd());
      }
    });
  });
}

const app = http.createServer((request, response) => {
  if (request.url === '/') {
    response.writeHead(200, { 'content-type': 'text/plain' });
    response.end('Hello Holberton School!');
  } else if (request.url === '/students') {
    countStudents(database)
      .then((resultat) => {
        response.writeHead(200, { 'content-type': 'text/plain' });
        response.end(`This is the list of our students\n${resultat}`);
      })
      .catch(() => {
        response.writeHead(500, { 'Content-Type': 'text/plain' }); // ← status 500
        response.end('This is the list of our students\nCannot load the database');
      });
  }
});

app.listen(1245);
module.exports = app;
