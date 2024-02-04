import { copyFile, rm } from 'node:fs/promises';
import path from 'path';

export const mv = async (pathToFile, pathToNewDirectory) => {
  const filename = path.parse(pathToFile).base;
  const pathToNewFile = path.join(pathToNewDirectory, filename);

  try {
    await copyFile(pathToFile, pathToNewFile);
    await rm(pathToFile);
  } catch {
    console.error('Operation failed');
  }
};
