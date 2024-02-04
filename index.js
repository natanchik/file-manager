import { ls } from './scripts/nwd/ls.js';
import { up } from './scripts/nwd/up.js';
import { cd } from './scripts/nwd/cd.js';
import { cp } from './scripts/fs/cp.js';
import { cat } from './scripts/fs/cat.js';
import { rn } from './scripts/fs/rn.js';
import { rm } from './scripts/fs/rm.js';
import { add } from './scripts/fs/add.js';
import { hash } from './scripts/hash.js';
import { compress } from './scripts/zlib/compress.js';
import { decompress } from './scripts/zlib/decompress.js';
import { eol } from './scripts/os/eol.js';
import { cpus } from './scripts/os/cpus.js';
import { getHomedir } from './scripts/os/homedir.js';
import { getUsername } from './scripts/os/username.js';
import { architecture } from './scripts/os/arch.js';
import { stdin } from 'process';

export const manageFiles = async () => {
  const readStream = stdin;
  const userName = process.argv.filter((arg) => arg.match('username'))[0].split('=')[1];

  console.log(`Welcome to the File Manager, ${userName}`);
  console.log(`You are currently in ${process.cwd()}`);

  readStream.on('data', (chunk) => {
    const data = chunk.toString();
    console.log(data);
    readStream.destroy();
    console.log(`You are currently in ${process.cwd()}`);
  });

  readStream.on('error', () => {
    console.error('Operation failed');
  });

  process.on('exit', () => console.log(`Thank you for using File Manager, ${userName}, goodbye!`));
};

await manageFiles();
