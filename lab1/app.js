const yargs = require('yargs');
const user = require('./user');

yargs.command({
    command: 'add',
    describe: 'Додати нову мову',
    builder: {
        title: {
            describe: 'Назва мови',
            demandOption: true,
            type: 'string',
        },
        level: {
            describe: 'Рівень володіння мовою',
            demandOption: true,
            type: 'string',
        },
    },
    handler(argv) {
        user.addLanguage(argv.title, argv.level);
    },
});

yargs.command({
    command: 'remove',
    describe: 'Видалити мову',
    builder: {
        title: {
            describe: 'Назва мови',
            demandOption: true,
            type: 'string',
        },
    },
    handler(argv) {
        user.removeLanguage(argv.title);
    },
});

yargs.command({
    command: 'list',
    describe: 'Переглянути всі мови',
    handler() {
        user.listLanguages();
    },
});

yargs.command({
    command: 'read',
    describe: 'Переглянути інформацію про мову',
    builder: {
        title: {
            describe: 'Назва мови',
            demandOption: true,
            type: 'string',
        },
    },
    handler(argv) {
        user.readLanguage(argv.title);
    },
});

yargs.parse();
