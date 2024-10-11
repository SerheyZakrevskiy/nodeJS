const _ = require('lodash');

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
const chunkedNumbers = _.chunk(numbers, 2);
console.log('1. _.chunk:', chunkedNumbers);

const sentence = 'hello world';
const capitalizedSentence = _.capitalize(sentence);
console.log('2. _.capitalize:', capitalizedSentence);

const randomNum = _.random(0, 100);
console.log('3. _.random:', randomNum);

const shuffledNumbers = _.shuffle(numbers);
console.log('4. _.shuffle:', shuffledNumbers);

const duplicateNumbers = [1, 2, 2, 3, 4, 4, 5];
const uniqueNumbers = _.uniq(duplicateNumbers);
console.log('5. _.uniq:', uniqueNumbers);

const args = process.argv.slice(2);

console.log('Передані параметри:', args);

if (args.length > 0) {
    console.log(`Ви передали ${args.length} параметрів:`);
    args.forEach((arg, index) => {
        console.log(`${index + 1}: ${arg}`);
    });
} else {
    console.log('Не передано жодного параметра');
}
