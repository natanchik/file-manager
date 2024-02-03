import fs from 'fs';
import * as url from 'url';

export const ls = async () => {
  const currentDirPath = url.fileURLToPath(new URL('.', import.meta.url));
  return fs.readdir(currentDirPath, (err, files) => {
    if (err) console.error('Operation failed');
    console.log(files);
  });
};
