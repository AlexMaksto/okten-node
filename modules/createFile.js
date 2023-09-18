const createFile = (dir, name) => {
    const fs = require('node:fs');
    const path = require('node:path');
    const filePath = path.join(dir, name)

    fs.writeFile(filePath, '', (err) => {
        if (err) {
            throw new Error(err.message);
        } else console.log(`New file: ${name}`)
    })
};

module.exports = {
    creatFile: createFile
}