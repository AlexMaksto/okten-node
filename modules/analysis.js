const {dirOrFile} = require("./dirOrFile");
const analysis = (mainDir) => {
    const fs = require('node:fs');
    const path = require('node:path');
    const fPath = path.join(process.cwd(), mainDir);

    const filOrDirs = fs.readdirSync(fPath);

    for (const filOrDir of filOrDirs) {
        dirOrFile(fPath, filOrDir);
    }
}

module.exports = {
    analysis
}