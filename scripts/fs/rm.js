import fs from 'fs';
import path from 'path';

export const rm = async (pathToFile) => {
  return fs.rm(path.normalize(pathToFile), { force: false }, (err) => {
    if (err) console.error('Operation failed');
  });
};
