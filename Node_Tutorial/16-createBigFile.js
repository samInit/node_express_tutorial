//once the file is too big, you can not store it's contents in a variable
const {writeFileSync} = require('fs');
for (let i = 0; i <10000; i++){
    writeFileSync('./content/big.txt', `Hello world ${i}\n`, {flag:'a'});
}