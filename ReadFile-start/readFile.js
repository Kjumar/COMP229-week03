const fs = require('fs');

fs.readFile('./lorem-ipsum.txt', 'utf8', (err, data) => {
    if (err)
    {
        console.log(err);
    }
    console.log(data);
});

fs.rename('./lorem-ipsum.txt', './gibberish.txt', (err) => {
    if (err) throw err;
});