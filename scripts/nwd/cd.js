import { chdir } from 'process';
import path from 'path';

export const cd = async (pathToDirectory) => {
  try {
    chdir(path.normalize(pathToDirectory));
  } catch (err) {
    console.error('Operation failed');
  }
};
