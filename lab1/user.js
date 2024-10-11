const fs = require('fs');


const loadLanguages = () => {
    try {
        const dataBuffer = fs.readFileSync('user.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON).languages;
    } catch (e) {
        return [];
    }
};


const saveLanguages = (languages) => {
    const dataJSON = JSON.stringify({ languages });
    fs.writeFileSync('user.json', dataJSON);
};

const addLanguage = (title, level) => {
    const languages = loadLanguages();
    const duplicateLanguage = languages.find((lang) => lang.title === title);

    if (!duplicateLanguage) {
        languages.push({ title, level });
        saveLanguages(languages);
        console.log('Мову додано!');
    } else {
        console.log('Мова вже існує!');
    }
};


const removeLanguage = (title) => {
    const languages = loadLanguages();
    const languagesToKeep = languages.filter((lang) => lang.title !== title);

    if (languages.length > languagesToKeep.length) {
        saveLanguages(languagesToKeep);
        console.log('Мову видалено!');
    } else {
        console.log('Такої мови не знайдено!');
    }
};


const listLanguages = () => {
    const languages = loadLanguages();
    console.log('Ваші мови:');
    languages.forEach((lang) => console.log(lang.title));
};


const readLanguage = (title) => {
    const languages = loadLanguages();
    const language = languages.find((lang) => lang.title === title);

    if (language) {
        console.log(`Мова: ${language.title}, Рівень: ${language.level}`);
    } else {
        console.log('Мову не знайдено!');
    }
};

module.exports = {
    addLanguage,
    removeLanguage,
    listLanguages,
    readLanguage,
};
