const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (error, data) => {
      if (error) {
        reject(new Error('Cannot load the database'));
      } else {
        const splitlines = data.split('\n');
        const slicedata = splitlines.slice(1).filter((splitline) => splitline !== '');
        console.log(`Number of students: ${slicedata.length}`);

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
          console.log(`Number of students in ${field}: ${students[field].length}. List: ${students[field].join(', ')}`);
        });
        resolve();
      }
    });
  });
}

module.exports = countStudents;
