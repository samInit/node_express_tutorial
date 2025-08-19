const express = require('express');
//here express is a function
const app = express();//app is an instance of the function?

app.get('/', (req,res) =>{
    console.log('user is at home page');
    res.status(200).send('Home page');
})

app.get('/about',(req,res) =>{
    console.log('user is at about page');
    res.status(200).send('About page');
    
})

app.all('*', (req,res)=>{
    res.status(404).send('<h1>resource not found</h1>')
})

app.listen(5000,()=>{
    console.log('server is listening on port 5000');
})

//app.get - read data
//app.post - insert data
//app.put - update data
//app.delete - delete data


//app.all
//app.use - responsible for middleware
//app.listen