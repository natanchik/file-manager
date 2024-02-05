import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'node:stream/promises';
import path from 'path';

export const cp = async (pathToFile, pathToNewDirectory) => {
  try {
    const filename = path.parse(pathToFile).base;
    const pathToNewFile = path.join(pathToNewDirectory, filename);
    await pipeline(createReadStream(pathToFile), createWriteStream(pathToNewFile));
  } catch {
    console.error('Operation failed');
  }
};
