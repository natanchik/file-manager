import { stdin } from 'process';
import { ls } from './scripts/nwd/ls.js';
import { up } from './scripts/nwd/up.js';
import { cd } from './scripts/nwd/cd.js';
import { cp } from './scripts/fs/cp.js';
import { cat } from './scripts/fs/cat.js';
import { rn } from './scripts/fs/rn.js';
import { mv } from './scripts/fs/mv.js';
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

export const manageFiles = async () => {
  const readStream = stdin;
  const userName = process.argv.filter((arg) => arg.match('username'))[0].split('=')[1];

  console.log(`Welcome to the File Manager, ${userName}`);
  console.log(`You are currently in ${process.cwd()}`);

  readStream.on('data', async (chunk) => {
    const data = chunk.toString().trim();
    const paths = data.split(' ');

    if (data === 'os --EOL') {
      eol();
    } else if (data === 'os --cpus') {
      cpus();
    } else if (data === 'os --homedir') {
      getHomedir();
    } else if (data === 'os --username') {
      getUsername();
    } else if (data === 'os --architecture') {
      architecture();
    } else if (data.startsWith('hash')) {
      await hash(paths[1]);
    } else if (data.startsWith('compress')) {
      await compress(paths[1], paths[2]);
    } else if (data.startsWith('decompress')) {
      await decompress(paths[1], paths[2]);
    } else if (data === 'up') {
      await up();
    } else if (data.startsWith('cd')) {
      await cd(paths[1]);
    } else if (data === 'ls') {
      await ls();
    } else if (data.startsWith('cat')) {
      await cat(paths[1]);
    } else if (data.startsWith('add')) {
      await add(paths[1]);
    } else if (data.startsWith('rn')) {
      await rn(paths[1], paths[2]);
    } else if (data.startsWith('cp')) {
      await cp(paths[1], paths[2]);
    } else if (data.startsWith('mv')) {
      await mv(paths[1], paths[2]);
    } else if (data.startsWith('rm')) {
      await rm(paths[1]);
    } else if (data === '.exit') {
      readStream.destroy();
    } else {
      console.error('Operation failed');
    }
    console.log(`You are currently in ${process.cwd()}`);
  });

  readStream.on('error', () => {
    console.error('Operation failed');
  });

  process.on('exit', () => console.log(`Thank you for using File Manager, ${userName}, goodbye!`));
};

await manageFiles();
