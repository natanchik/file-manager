import { createBrotliDecompress } from 'zlib';
import { pipeline } from 'stream';
import { createReadStream, createWriteStream } from 'fs';

export const decompress = async (pathToFile, pathToDestination) => {
  const gzip = createBrotliDecompress();
  const read = createReadStream(pathToFile);
  const write = createWriteStream(pathToDestination);

  pipeline(read, gzip, write, (err) => {
    if (err) console.error('Operation failed');
  });
};
