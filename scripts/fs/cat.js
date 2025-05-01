import { createReadStream } from 'fs';
import path from 'path';

export const cat = async (pathToFile) => {
  try {
    const readStream = createReadStream(path.normalize(pathToFile), { encoding: 'utf-8' });

    readStream.on('data', (chunk) => {
      console.log(chunk);
    });
  } catch {
    console.error('Operation failed');
  }
};
