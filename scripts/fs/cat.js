import { createReadStream } from 'fs';
import { stdout } from 'process';
import { pipeline } from 'node:stream/promises';
import path from 'path';

export const cat = async (pathToFile) => {
  try {
    await pipeline(createReadStream(path.normalize(pathToFile)), stdout);
  } catch {
    console.error('Operation failed');
  }
};
