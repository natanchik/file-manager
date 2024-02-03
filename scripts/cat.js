import fs from 'fs';

export const cat = async (pathToFile) => {
  return fs.readFile(pathToFile, (err, data) => {
    if (err) console.error('Operation failed');
    console.log(data.toString());
  });
};
