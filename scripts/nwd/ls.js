import fs from 'fs';
import { cwd } from 'process';

export const ls = async () => {
  return fs.readdir(cwd(), (err, files) => {
    if (err) console.error('Operation failed');
    console.log(files);
  });
};
