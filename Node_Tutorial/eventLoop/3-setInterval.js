setInterval(() => {
  console.log('hello world')
}, 2000)//this is also async - the event loop invokes the callback every 2 seconds
console.log(`I will run first`)
// process stays alive unless we kill process using Ctrl + C or there is an unexpected error