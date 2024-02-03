import { createBrotliCompress } from 'zlib';
import { pipeline } from 'stream';
import { createReadStream, createWriteStream } from 'fs';

export const compress = async (pathToFile, pathToDestination) => {
  const gzip = createBrotliCompress();
  const read = createReadStream(pathToFile);
  const write = createWriteStream(pathToDestination);

  pipeline(read, gzip, write, (err) => {
    if (err) console.error('Operation failed');
  });
};
