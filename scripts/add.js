import fs from 'fs';

export const add = async (newFileName) => {
  fs.open(newFileName, (err) => {
    if (err) console.error('Operation failed');
  });
};
