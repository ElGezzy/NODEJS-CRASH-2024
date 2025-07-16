/**
 * *************************
 * _________________________
 * @description:
 * __________________________
 * *************************
 * Demonstrates Node.js 'path' and 'url' modules for handling file paths. Shows usage of basename, dirname, extname, parse, join, resolve, and conversion between file URLs and paths.
 */

import path from 'path';
import url from 'url';

const filePath = './dir1/dir2/file.txt';

//Happens with or without the location being available
//It just returns the last part of the path been Stated
//basename() - returns the last portion of a path, usually the file name
console.log(path.basename(filePath)); 

//dirname() - returns the directory name of a path
console.log(path.dirname(filePath));

//extname() - returns the extension of the path
console.log(path.extname(filePath));

//parse() - returns an object with the root, dir, base, ext, and name properties
console.log(path.parse(filePath));

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(__filename, __dirname);
console.log('');

//join() - joins all given path segments together
const filePath2 = path.join(__dirname, 'dir1', 'dir2', 'test.txt');
console.log(filePath2);

//resolve() - resolves a sequence of paths or path segments into an absolute path
const filePath3 = path.resolve(__dirname, 'dir1', 'dir2', 'text.txt')
console.log(filePath3)