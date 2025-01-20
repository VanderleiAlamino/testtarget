const fs = require('fs');
const path = require('path');

function runScriptsInDir(dir) {
  fs.readdir(dir, (err, files) => {
    if (err) {
      console.error('Erro ao ler a pasta:', err);
      return;
    }

    files.forEach(file => {
      const filePath = path.join(dir, file);
      fs.stat(filePath, (err, stats) => {
        if (err) {
          console.error('Erro ao verificar o arquivo:', err);
          return;
        }

        if (stats.isDirectory()) {
          runScriptsInDir(filePath);
        } else if (stats.isFile() && file.endsWith('.js')) {
          require(filePath);
        }
      });
    });
  });
}

const distDir = path.join(__dirname, 'dist');

runScriptsInDir(distDir);
