const path = require('path');
//return our platform(OS) specific separator
console.log(path.sep);
//concatenates the path segments into a normalized path string, inserting the correct separator.
const filePath = path.join('/content/', 'subfolder', 'test.txt')
console.log(filePath)

//extracts just the last portion of the path (the filename).
const base = path.basename(filePath)
console.log(base);
//creates an absolute path string.
console.log(path.resolve(__dirname,'content','subfolder','test.txt'));
