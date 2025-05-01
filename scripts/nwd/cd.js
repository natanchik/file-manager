import path from 'path';
import { homedir } from 'os';
import { chdir } from 'process';

export const cd = async (pathToDirectory) => {
  const newPath = path.resolve(pathToDirectory);

  try {
    if (newPath >= homedir()) {
      chdir(newPath);
    }
  } catch (err) {
    console.error('Operation failed');
  }
};
