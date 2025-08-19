const http = require('http');
const {readFileSync} = require('fs');

//get all files
const homePage = readFileSync('./navbar-app/index.html')
const homeStyles = readFileSync('./navbar-app/styles.css')
const homeImage = readFileSync('./navbar-app/logo.svg')
const homeLogic = readFileSync('./navbar-app/browser-app.js')


const server = http.createServer((req, res) => {
    // console.log(req.method)
    const url = req.url
    console.log(url)
    // home page
    
    if(req.url==='/'){
        //we do not handle the css and js and logo file requests here
        res.writeHead(200, {"content-type": 'text/html'})
        res.write(homePage);
        res.end();
    }
    // about page
    else if (url === '/about') {
        res.writeHead(200, { 'content-type': 'text/html' })
        res.write('<h1>about page</h1>')
        res.end()
    }
    else if(req.url==='/styles.css'){
        //we do not handle the css and js and logo file requests here
        res.writeHead(200, {"content-type": 'text/css'})
        res.write(homeStyles);
        res.end();
    }
    // image/logo
    else if (url === '/logo.svg') {
        res.writeHead(200, { 'content-type': 'image/svg+xml' })
        res.write(homeImage)
        res.end()
    }
    // logic
    else if (url === '/browser-app.js') {
        res.writeHead(200, { 'content-type': 'text/javascript' })
        res.write(homeLogic)
        res.end()
    }
    // 404
    else {
        res.writeHead(404, { 'content-type': 'text/html' })
        res.write('<h1>page not found</h1>')
        res.end()
    }
})
//no meta data about the response is being sent to the browser - issue 1
server.listen(3000);
