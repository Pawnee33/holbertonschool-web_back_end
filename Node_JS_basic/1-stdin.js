console.log('Welcome to Holberton School, what is your name?');

process.stdin.setEncoding('utf-8');

process.stdin.on('data', function(entry) {
    const name = entry.trim();
    console.log('Your name is: ' + name);
});

process.stdin.on('end', function() {
    console.log('This important software is now closing');
});
