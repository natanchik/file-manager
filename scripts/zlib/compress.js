import { createBrotliCompress } from 'zlib';
import { pipeline } from 'stream';
import { createReadStream, createWriteStream } from 'fs';
import path from 'path';

export const compress = async (pathToFile, pathToDestination) => {
  const gzip = createBrotliCompress();
  const read = createReadStream(path.normalize(pathToFile));
  const write = createWriteStream(path.normalize(pathToDestination));

  pipeline(read, gzip, write, (err) => {
    if (err) console.error('Operation failed');
  });
};
