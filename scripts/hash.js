import { createHash } from 'crypto';
import { createReadStream } from 'fs';
import path from 'path';

export const hash = async (pathToFile) => {
  const readStream = createReadStream(path.normalize(pathToFile));
  const hash = createHash('sha256');

  readStream.on('data', (chunk) => {
    hash.update(chunk);
  });

  readStream.on('error', () => {
    console.error('Operation failed');
  });

  readStream.on('end', () => console.log(`${hash.digest('hex')}`));
};
