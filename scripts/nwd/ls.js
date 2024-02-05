import fsPromises from 'node:fs/promises';
import { cwd } from 'process';
import path from 'path';

export const ls = async () => {
  const content = await fsPromises.readdir(cwd());
  const contentWithTypes = [];
  for (let i = 0; i < content.length; i++) {
    const stats = await fsPromises.stat(path.join(cwd(), content[i]));
    const type = stats.isDirectory() ? 'directory' : 'file';
    contentWithTypes.push({ Name: content[i], Type: type });
  }
  const dirs = [];
  const files = [];
  contentWithTypes.forEach((item) => (item.Type === 'directory' ? dirs.push(item) : files.push(item)));
  const result = dirs.sort().concat(files.sort());
  console.table(result);
};
