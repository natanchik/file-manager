import { createReadStream, createWriteStream } from 'fs';
import { rm } from 'node:fs/promises';
import { pipeline } from 'node:stream/promises';
import path from 'path';

export const mv = async (pathToFile, pathToNewDirectory) => {
  try {
    const filename = path.parse(pathToFile).base;
    const pathToNewFile = path.join(path.normalize(pathToNewDirectory), filename);

    await pipeline(createReadStream(pathToFile), createWriteStream(pathToNewFile));
    await rm(path.normalize(pathToFile));
  } catch {
    console.error('Operation failed');
  }
};
