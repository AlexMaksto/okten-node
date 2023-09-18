// ДЗ
// Створіть папку
// В тій папці створіть 5 папок і 5 файлів
// І за допомогою модулю fs виведіть в консоль, чи це папка чи це файл
// FILE: {fileName}
// FOLDER: {folderName}

const {createDirAndFile} = require('./modules/createDirAndFile');
const {analysis} = require("./modules/analysis");

const mainDir = 'mainDir'

createDirAndFile(mainDir);

analysis(mainDir);
