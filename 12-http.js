const http = require('http')
const server = http.createServer((req, res)=>{
    if(req.url=== '/'){
        res.end('Bye guyss, hi ladiess muahhh')
    }
    else if(req.url=== '/about'){
        res.end('Nah ondongi pom pom')
    }
    else 
    { 
        res.end(`
        <h1>Ooppsss!</h1>
        <p>You lost bbg?</p>
        <a href="/">let's go back to my place</a>
        `)
    }
})

server.listen(5000)