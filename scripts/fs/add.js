import fs from 'fs';
import path from 'path';
import { cwd } from 'process';

export const add = async (newFileName) => {
  const pathToNewFile = path.resolve(cwd(), newFileName);
  console.log(pathToNewFile);
  fs.open(pathToNewFile, 'a', (err) => {
    if (err) console.error('Operation failed');
  });
};
