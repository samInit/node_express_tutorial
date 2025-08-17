#### What is Node.js?

Environment to run Javascript code outside of the browser. Built on Chrome's V8 Engine. 

Prerequisites - Async-Await, Callbacks, Promises, ES6

#### Difference between Node.js(and browser) - 
No DOM, No Window, Server Side Apps(Interactive Apps), Filesystem(No FS), Versions(Fragmentation), CommonJS library for the modules(ES6 Modules)


#### What are globals(global variables) in node?
Here in node, we do not have the window object as there is no browser.
Some of them - 
- __dirname : path to the current directory
- __filename : file name
- require : function to use modules (CommonJS)
- module : info about the current module (file)
- process : info about the env where the program is being executed.

#### What are modules in node?
We will execute one file but we will our code split into modules for modularity. In commonjs, every file is a module by default. Modules have encapsulated code.
Even if we do not explicitely import a module which has a function being invoked in it, then if we require it in another module, it will automatically run anyway even if we do not assign it to any variable.


#### Built in Modules - 
- os
- path
- fs
- http

Refer to the comments in the code files for more information about each module.

To create a server and run an application on it from scratch in node, we use the http module with createServer method.

when we install node, we automatically install npm. therefore it is a global command as it comes with node.

#### How does npm help? (node package manager)
- reuse our own code in other projects
- use code written by  other developers
- share our own solutions to other developers

The create react app package in react in hosted in npm.
In npm, reusable code is called a package - a folder which contains javascript code.

package == dependency == module -> they all mean the same thing

npm does not have any quality control so anyone can publish a package there.

it is available at npmjs.com.

#### NPM - 
local dependency - use it only in this project
                - npm i <packageName>
global dependency - use it in any project
                - npm install -g <packageName>
focus on local dependency

#### package.json - 
a manifest file that stores important information about the project/package, a very important property is dependencies. 

3 ways to create a package.json file - 
- manual approach (create package.json in the root and create properties etc.)
- npm init (step by step need to press enter to skip)
- npm init -y (default everything)

when we execute npm install -> npm checks for the dependencies in the package.json file and creates the node_modules folder accordingly.

We do not push the node modules to github because of their size.

#### Nodemon - 
This is a module used to restart the server upon any changes in our files in the project. We install it as a dev dependency.

npm i nodemon -D
or 
npm i nodemon --save-dev

#### What is a dev dependency? 
We ask ourselves, do we need this module in production or just while creating the app. If not needed during production, it is a dev dependency. So we would add stuff like linting, testing and nodemon modules to dev dependencies.

Added these scripts in package.json :
  "scripts": {
    "start": "node app.js",
    "dev": "nodemon app.js"
  },
  npm start 
  npm run dev

To uninstall a package - npm uninstall <packageName>

#### What is npx?


#### Why package-lock.json?
To keep track of the versions of the sub-dependencies that the dependencies we install are dependent on. 

package.json → declares the intended dependencies and their version ranges.

package-lock.json → records the actual dependency tree with exact versions.

npm audit uses package-lock.json to know the precise versions in your project, so it can check them for known vulnerabilities.

#### What is the Event Loop in Node.js?

Event loop is what allows Node.js to perform non-blocking I/O operations - despite the fact that JS is single threaded - by offloading operations to the system kernel whenever possible.

Assume we get a request that takes up a lot of time to finish, so what we do is - 
1. We register the callback
2. Operation is completer
3. Complete out immediate tasks
2. Then execute the callback

### Asynchronours Programming

### Events and Event driven programming - 

Flow of the program depends on the events being executed.

### What are streams?
Streams are used to read/write data sequentially.
When we have to handle streaming data, we use these.

Four different types of streams - 
- Writable - used to write data sequentially
- Readable - used to read data sequentially
- Duplex  - used to both read and write data sequentially
- Transfrom - data can be modified while writing/reading

Streams extend event emitter class.