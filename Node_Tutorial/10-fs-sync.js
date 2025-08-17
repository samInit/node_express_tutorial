const {readFileSync, writeFileSync} = require('fs');
console.log('start');
const first = readFileSync('./content/first.txt','utf-8');
const second = readFileSync('./content/second.txt','utf-8');

console.log(first, second)
//if file is there then node creates it otherwise node just updates the entire content of the existing file accordingly
writeFileSync('./content/result-sync.txt', `here is the result ${first}, ${second}`,{flag:'a'});
// the flag a willl lead to appending the content given to the file instead of wiping off the previous content
console.log('done with task 1 sync');
console.log('starting async task');