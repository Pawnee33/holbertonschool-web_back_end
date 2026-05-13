console.log('Welcome to Holberton School, what is your name?');

process.stdin.setEncoding('utf-8');

process.stdin.on('data', (entry) => {
  process.stdout.write(`Your name is: ${entry}`);
});

process.stdin.on('end', () => {
  console.log('This important software is now closing');
});
