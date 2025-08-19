### How do we exchange Data on the Web?

When you type a URL into the browser (for ex. cnn.com), we look for the server that has those resources and can send you back the response.

This is done using Http protocol - the user sends the http request and the server sends the http response message. 

Server - it's job is to ensure the resourcs are always available.
We use node/express to build the web server.

### Why do we use Express?
Express is built on top of node - more specifically http module.

### How are HTTP messages structured?

Both the request message and the response message have these in common - 
- start line
- optional headers 
- a blank line that indicates all the meta info (headers) has been sent
- optional body

request - user sends to server
response - server to client

in the start line of the request, we will have the URL and a method.

Methods - GET, POST, PUT, DELETE

POST - 
PUT - 

Headers - (key value pairs)
Body for request data - empty for get, data(payload) will be there for post/put.

For response message - 
- start line will have http version
- status code - result of the request 
    - 200 request is successful.
    - 201 - resources has been created
    - 400 - bad request error 
    - 404 - resource not found
    - 401 - request is unauthorized
    - 300 series for redirects
- headers - info about response message (key value pairs)
            - data in json format

We must take care of which status code we send in the header for node

### Let's talk about ports



#### Mime Types:
We need to pass that in the headers for Node. Express handles that by itself without us having to do this.

### What is Express?
A web framework for Node.js to make the whole process of making a server and interacting with the server easier. It provides routing, has middleware support and handles boilerplate code automatically.

npm install express --save

Static asset - something the server does not need to change.
Put them all in the same folder(eg. public) - and express will set up the path, status codes, mime types and everything unlike in node.

We use express to set up API or templates with server side rendering. 

### What is an API in Express/http?

An API means setting up an HTTP interface to interact with our data - data is usually in the form of json (javascript object notation).

With APIs, our server provides data and any frontend app that wants to access and use the data must perform a http request. 

### API vs SSR

To send back our response we use res.json() - which takes care of all the heavy lifting like setting up the proper content type and stringify our data.

SSR - where we will set up templates and send back entire html and css and js ourservels - we use res.render() for this. 

