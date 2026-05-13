import fs from 'fs';

function readDatabase(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (error, data) => {
      if (error) {
        reject(new Error('Cannot load the database'));
      } else {
        const splitlines = data.split('\n');
        const slicedata = splitlines.slice(1).filter((splitline) => splitline !== '');

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
        resolve(students);
      }
    });
  });
}

export default readDatabase;