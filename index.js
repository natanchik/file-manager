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
import { homedir } from 'os';
import { chdir } from 'process';

export const manageFiles = async () => {
  try {
    const readStream = stdin;
    const userName = process.argv.filter((arg) => arg.match('username'))[0].split('=')[1];

    console.log(`Welcome to the File Manager, ${userName}!`);
    chdir(homedir());
    console.log(`You are currently in ${process.cwd()}`);
    console.log('Enter the command and wait for the result');

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
      } else if (paths[0] === 'hash' && paths.length === 2) {
        await hash(paths[1]);
      } else if (paths[0] === 'compress' && paths.length === 3) {
        await compress(paths[1], paths[2]);
      } else if (paths[0] === 'decompress' && paths.length === 3) {
        await decompress(paths[1], paths[2]);
      } else if (data === 'up') {
        await up();
      } else if (paths[0] === 'cd' && paths.length === 2) {
        await cd(paths[1]);
      } else if (data === 'ls') {
        await ls();
      } else if (paths[0] === 'cat' && paths.length === 2) {
        await cat(paths[1]);
      } else if (paths[0] === 'add' && paths.length === 2) {
        await add(paths[1]);
      } else if (paths[0] === 'rn' && paths.length === 3) {
        await rn(paths[1], paths[2]);
      } else if (paths[0] === 'cp' && paths.length === 3) {
        await cp(paths[1], paths[2]);
      } else if (paths[0] === 'mv' && paths.length === 3) {
        await mv(paths[1], paths[2]);
      } else if (paths[0] === 'rm' && paths.length === 2) {
        await rm(paths[1]);
      } else if (data === '.exit') {
        readStream.destroy();
      } else {
        console.error('Invalid input');
      }
      setTimeout(() => console.log(`You are currently in ${process.cwd()}`), 100);
    });

    process.on('exit', () => console.log(`Thank you for using File Manager, ${userName}, goodbye!`));
  } catch {
    console.error('Something went wrong...');
  }
};

await manageFiles();
