const createDir = (dir, name) => {
    const fs = require('node:fs');
    const path = require('node:path');
    const folderPath = path.join(dir, name);

    fs.mkdir(folderPath, (err) => {
        if (err) {
            throw new Error(err.message);
        } else console.log(`New folder: ${name}`);
    });

};

module.exports = {
    creatDir: createDir
}