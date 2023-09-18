const dirOrFile = (dir, name) => {
    const fs = require('node:fs');
    const path = require('node:path');
    const fPath = path.join(dir, name);

    const stats = fs.statSync(fPath);

    if (stats.isFile()) {
        console.log(`FILE: ${name}`);
    } else console.log(`FOLDER: ${name}`);
}

module.exports = {
    dirOrFile
}