import readDatabase from '../utils';

class StudentsController {
    static getAllStudents(request, response) {
      readDatabase(process.argv[2])
        .then((students) => {
          response.set('Content-Type', 'text/plain');
          let lines = 'This is the list of our students\n';
          Object.keys(students).sort().forEach((field) => {
            lines += `Number of students in ${field}: ${students[field].length}. List: ${students[field].join(', ')}\n`;
          });
          response.status(200).send(lines.trimEnd());
        })
        .catch(() => {
          response.set('Content-Type', 'text/plain');
          response.status(500).send('Cannot load the database');
      });
    }
    static getAllStudentsByMajor(request, response) {
      const major = request.params.major;
      if (major !== 'CS' && major !== 'SWE') {
        return response.status(500).send('Major parameter must be CS or SWE');
      } else {
        readDatabase(process.argv[2])
          .then((students) => {
            response.set('Content-Type', 'text/plain');
            response.status(200).send(`List: ${students[major].join(', ')}`);
          })
          .catch(() => {
            response.set('Content-Type', 'text/plain');
            response.status(500).send('Cannot load the database');
          });
      }
    }
}

export default StudentsController;
