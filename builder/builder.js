const fs = require('fs');
const path = require('path');

module.exports = {
    listDir: (dir = '') => {
        if (!dir.length) return;
        const workingDir = path.join(__dirname, '../src', dir);
        const outputFile = `${dir}.js`;
        const files = fs
            .readdirSync(workingDir)
            .filter((file) => !file.match(/^\..*/) && file !== outputFile);

        let content = files
            .map((file) => `import ${file} from './${file}/${file}.jsx';`)
            .join('\n');
        content += `\nexport default { ${files.join(',')} };`;

        fs.writeFileSync(path.join(workingDir, outputFile), content);
    },
};
