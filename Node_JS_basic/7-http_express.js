const express = require('express');
const fs = require('fs');

const database = process.argv[2];
const app = express();

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

app.get('/', (request, response) => {
  response.status(200).send('Hello Holberton School!');
});
app.get('/students', (request, response) => {
  countStudents(database)
    .then((resultat) => {
      response.set('Content-Type', 'text/plain');
      response.status(200).send(`This is the list of our students\n${resultat}`);
    })
    .catch(() => {
      response.set('Content-Type', 'text/plain');
      response.status(500).send('This is the list of our students\nCannot load the database');
    });
});
const port = 1245;
app.listen(port);
module.exports = app;
