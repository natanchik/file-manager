import fs from 'fs';

export const rm = async (pathToFile) => {
  return fs.rm(pathToFile, { force: false }, (err) => {
    if (err) console.error('Operation failed');
  });
};
