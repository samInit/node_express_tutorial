const {createReadStream} = require('fs');
const stream = createReadStream('./content/big.txt', { highWaterMark: 90000, encoding: 'utf-8' });
//by default the size of the buffer will be 64kB. but we can control it
// last buffer - remainder
// highWaterMark - control size
stream.on('data', (result) => {
    console.log(result);
})
stream.on('error', (err) =>{
    console.log(err);
})