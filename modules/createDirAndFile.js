const {creatDir} = require('./createDir');
const {creatFile} = require('./createFile');

const createDirAndFile = (mainDir) => {
    const path = require("path");
    creatDir(process.cwd(), mainDir);
    const joinedPath = path.join(process.cwd(), mainDir);

    for (let i = 0; i < 5; i++) {
        creatDir(joinedPath, `dir${i}`)
        creatFile(joinedPath, `file${i}`)
    }

}

module.exports = {
    createDirAndFile
}
