const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();
const database = process.argv[2];

    app.get('/', (request, response) => {
        response.status(200).send('Hello Holberton School!');
    });
    app.get('/students', (request, response) => {
        const lines = ['This is the list of our students'];
        const countStudentsLog = console.log;

        console.log = (...args) => {
            lines.push(args.join(' '));
            };
        countStudents(process.argv[2])
        .then(() => {
            console.log = countStudentsLog;
            response.status(200).send(lines.join('\n'));
        })
        .catch((error) => {
            console.log = countStudentsLog
            response.status(500).send(error.message);
        });
});
const port = 1245;
app.listen(port, () => {
    console.log(`Server up and running on port ${port}`);
});
module.exports = app;
