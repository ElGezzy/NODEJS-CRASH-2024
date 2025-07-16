/**
 * *************************
 * _________________________
 * @description:
 * __________________________
 * *************************
 * Demonstrates Node.js 'url' module and URLSearchParams for parsing, formatting, and manipulating URLs and query parameters. Shows conversion between file URLs and paths.
 */
import url from 'url';

const urlString = 'https://www.google.com/search?q=hello.world';

//URL Object
const urlObj = new URL(urlString)

console.log(urlObj)

//format()
console.log(url.format(urlObj))

//import.meta.url - file URL
console.log(import.meta.url)

//fileURLToPath()
console.log(url.fileURLToPath(import.meta.url));
console.log('')

console.log(urlObj.search);

const params = new URLSearchParams(urlObj.search)
console.log(params.get('q'));
params.append('limit', '5');
params.delete('limit');
console.log(params);
