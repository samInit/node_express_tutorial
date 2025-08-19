const http = require('http')
//http is a built in module in node
//req and res are objects
//.end() is a method we can call on response
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
//for http we have port 80 
//443 is for secure communication - https
//should not use 0-1024 as they are already taken
server.listen(5000)