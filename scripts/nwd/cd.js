import { chdir } from 'process';

export const cd = async (pathToDirectory) => {
  try {
    chdir(pathToDirectory);
  } catch (err) {
    console.error('Operation failed');
  }
};
