import { chdir } from 'process';

export const up = async () => {
  try {
    chdir('../');
  } catch (err) {
    console.error('Operation failed');
  }
};
