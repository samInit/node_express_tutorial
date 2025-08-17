var http = require('http')
var fs = require('fs')

http
  .createServer(function (req, res) {
    // const text = fs.readFileSync('./content/big.txt', 'utf8')
    // res.end(text)
    const fileStream = fs.createReadStream('./content/big.txt', 'utf8')
    fileStream.on('open', () => {
        //here pipe is pushing the data from read stream to write stream
        //we read data in chunks so ultimately here we end up writing data in chunnks too
        //go to network tab and check headers for the request and you will see chunks even though the size of the request remains the same
      fileStream.pipe(res)
    })
    fileStream.on('error', (err) => {
      res.end(err)
    })
  })
  .listen(5000)