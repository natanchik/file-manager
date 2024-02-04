import { copyFile } from 'fs';
import path from 'path';

export const cp = async (pathToFile, pathToNewDirectory) => {
  const filename = path.parse(pathToFile).base;
  const pathToNewFile = path.join(pathToNewDirectory, filename);

  return copyFile(pathToFile, pathToNewFile, (err) => {
    if (err) console.error('Operation failed');
  });
};
