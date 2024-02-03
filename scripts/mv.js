import { copyFile, rm } from 'fsPromises';

export const mv = async (pathToFile, pathToNewDirectory) => {
  try {
    await copyFile(pathToFile, pathToNewDirectory);
    await rm(pathToFile);
  } catch {
    console.error('Operation failed');
  }
};
