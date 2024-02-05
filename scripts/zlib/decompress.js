import { createBrotliDecompress } from 'zlib';
import { pipeline } from 'stream';
import { createReadStream, createWriteStream } from 'fs';
import path from 'path';

export const decompress = async (pathToFile, pathToDestination) => {
  const gzip = createBrotliDecompress();
  const read = createReadStream(path.normalize(pathToFile));
  const write = createWriteStream(path.normalize(pathToDestination));

  pipeline(read, gzip, write, (err) => {
    if (err) console.error('Operation failed');
  });
};
