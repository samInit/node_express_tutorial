const EventEmitter = require('events');
//here the variable is a class
//creating an instance of a class
const customEmitter = new EventEmitter()

// on - listen for an event
//emit - emit an event

//order of emit and listen matters - first we listen for an event and then we emit
//we can have multiple responses for the same event
customEmitter.on('response',(name,id) =>{
    console.log(`'data recieved' user ${name}, ${id}`);    
})

customEmitter.on('response',() =>{
    console.log('some other logic');    
})

customEmitter.emit('response', 'samsam', 121);
