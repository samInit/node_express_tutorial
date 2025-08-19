const express = require('express')

const app = express()
const {products} = require('./data')

app.get('/', (req,res)=>{
    res.send('<h1>Homepage</h1><a href="/api/products">products</a>')
})

app.get('/api/products', (req,res)=>{
    const newProducts = products.map((product)=>{
        const {id,name,image} = product;
        return {id, name, image}
    })
    res.json(newProducts)
})

// app.get('/api/products/1', (req,res)=>{
//     const singleProduct = products.find((product)=>product.id === 1)
//     res.json(singleProduct)
// })

app.get('/api/products/:productID', (req,res)=>{
    console.log(req.params);   
    const {productID} = req.params;
    const singleProduct = products.find((product)=>product.id === Number(productID))
    if(!singleProduct){
        return res.status(404).send('Product not found');
    }
    console.log(singleProduct);
    res.json(singleProduct)
})

//product and review IDs are route parameters
app.get('/api/products/:productID/reviews/:reviewID',(req,res)=>{
    console.log(req.params);
    res.send('hello world')
    
})
/// Query String - api/v1/products/search?query=foo&tags=story

app.get('/api/v1/query', (req,res) =>{
    console.log(req.query)
    const {search,limit} = req.query;
    let sortedProducts = [...products];
    if(search){
        sortedProducts = sortedProducts.filter((product)=>{
            return product.name.startsWith(search);
        })
    }
    if(limit){
        sortedProducts = sortedProducts.slice(0,Number(limit))
    }
    //request is sucessful, filter did happen so status code will be 200
    if(sortedProducts.length<1){
        // return res.status(200).send("No products matched your search");
        return res.status(200).json({success: true, data: sortedProducts})
    }
    res.status(200).json(sortedProducts);
})

app.listen(5000, () =>{
    console.log('server is listening to the port 5000');
    
})