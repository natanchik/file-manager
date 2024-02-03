import { ls } from './scripts/nwd/ls.js';
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

// after start
console.log('Welcome to the File Manager, Username!');

// after each command
console.log('You are currently in path_to_working_directory');

//  before end
console.log('Thank you for using File Manager, Username, goodbye!');

eol();
cpus();
getHomedir();
getUsername();
architecture();
