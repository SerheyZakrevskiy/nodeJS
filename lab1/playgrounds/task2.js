const fs = require('fs');
const filePath = 'task02.txt';


fs.appendFile(filePath, 'Hello, World!\n', (err) => {
    if (err) throw err;
    console.log('Новий рядок додано до файлу.');
});
