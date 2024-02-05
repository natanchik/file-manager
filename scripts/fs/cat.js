import { createReadStream } from 'fs';
import { stdout } from 'process';
import { pipeline } from 'node:stream/promises';

export const cat = async (pathToFile) => {
  try {
    await pipeline(createReadStream(pathToFile), stdout);
  } catch {
    console.error('Operation failed');
  }
};
