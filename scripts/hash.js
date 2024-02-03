import { createHash } from 'crypto';
import { createReadStream } from 'fs';

export const hash = async (pathToFile) => {
  const readStream = createReadStream(pathToFile);
  const hash = createHash('sha256');

  readStream.on('data', (chunk) => {
    hash.update(chunk);
  });

  readStream.on('error', () => {
    console.error('Operation failed');
  });

  readStream.on('end', () => console.log(`${hash.digest('hex')}`));
};
