import fs from 'fs';
import { resolve } from 'path';
//保留的文件
const stayFile = ['package.json', 'README.md'];

const delPath = async (path) => {
  let files = [];
  if (fs.existsSync(path)) {
    files = fs.readdirSync(path);
    files.forEach(async (file) => {
      const curPath = resolve(path, file);

      if (fs.statSync(curPath).isDirectory()) {
        // recurse
        if (file != 'node_modules') await delPath(curPath);
      } else {
        // delete file
        if (!stayFile.includes(file)) {
          fs.unlinkSync(curPath);
        }
      }
    });
    fs.rmdirSync(path); // delete dir
  }
};
export default delPath;