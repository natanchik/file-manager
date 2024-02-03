import { copyFile } from 'fs';

export const cp = async (pathToFile, pathToNewDirectory) => {
  return copyFile(pathToFile, pathToNewDirectory, (err) => {
    if (err) console.error('Operation failed');
  });
};
