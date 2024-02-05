import fs from 'fs';
import path from 'path';

export const rn = async (pathToFile, newFileName) => {
  const dirName = path.dirname(pathToFile);
  const distPath = path.join(dirName, newFileName);
  return fs.rename(path.normalize(pathToFile), distPath, (err) => {
    if (err) console.error('Operation failed');
  });
};
