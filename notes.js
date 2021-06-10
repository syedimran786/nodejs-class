//!What is Nodejs?
//Todo-->Node.js is an open-source, cross-platform, back-end JavaScript runtime
//Todo environment that runs on the V8 engine and executes JavaScript code outside a web browser.

//!JAVASCRIPT
//? TO DEVELOPE CLIENT SIDE WEB APPLICATION
//? 1.Javascript is Single-threaded and synchronous  Programming Language

//? Steaming Applications such as Amazon Prime,Netflix,Voot,Chat aplications,Games
//? 1.Nodejs is Single-threaded and by default asynchronous and non-blocking  Programming Language
//!Application Deveoped by Nodejs
//todo 1.Paypal,2.Uber,3.Netflix,4.Linkedin,5.Wallmart

// 1.  .net----->IIS Server
// 2.  Java ---->Apache Tomcat
// 3.   PHP---->Apache Tomcat
// 4.   Nodejs-->We Can create our Own Server

// Installation of Nodejs

//! REPL (READ EVAL PRINT LOOP)
//todo The Node. js Read-Eval-Print-Loop (REPL) is an interactive shell that processes Node. js expressions. The shell reads JavaScript code the user enters, evaluates the result of interpreting the line of code,
//todo prints the result to the user, and loops until the user signals to quit.
//Uses of REPL
/*1.We Can Perform Arithmetic Operations()Javascript expressions
2.We Can Declare Variables
3.We Can Write Multi-Line Expresions
4.We Can get previous result by using underscore(_);
5.We Can Use This REPL as Editor(.editor)*/

//! What is MODULES in Nodejs?
//Todo Module in Node.js is a simple or complex functionality organized in single or multiple JavaScript files 
//todo which can be reused through out the Node.js application. Each module in Node. js has its own context, so it 
//todo cannot interfere with other modules or pollute global scope.

/*
    Types of Modules (3 Types)
    1.Local Modules (User defined)
    2.Core Modules (In-Built)
            1.fs
            2.http
            3.https
            4.querystring
            5.path
            6.os
            7.events
    3.Third Party Modules (Provided Third Party)
        1.Chalk
        2.Validator
        3.nodemon
        4.express
        5.mongodb
        6.mangoose
        7.nodemailer
        
*/

//! Command to Execute nodejs files
//todo node app.js

//! module.exports
//Todo Module exports are the instruction that tells Node. js which bits of code 
//Todo (functions, objects, strings, etc.) to “export” from a given file so other files are 
//todo allowed to access the exported code.

//! require()
//todo The basic functionality of require is that it reads a JavaScript file, 
//todo executes the file, and then proceeds to return the exports object.

//! 2.Core Modules
//Todo The Modules Which is Provided by Nodejs (in-built)

//!1.fs Module
//todo File System Which allows us to perform operations on files
                //todo -->Create The files
                //todo -->Read The Files
                //todo -->Update The files
                //todo -->Delete The files
//!We can Perform File Operations in 2 ways 
        //1.Synchronous 
        //2.Asynchronous


//!nodemon
// nodemon is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.

// nodemon does not require any additional changes to your code or method of development. nodemon is a replacement wrapper for node. To use nodemon, replace the word node on the command
//  line when executing your script.

//! Global npm packages Location
// C:\Users\faculty-pc\AppData\Roaming\npm\node_modules

//! Steps for mongodb connections

// 1.Install Mongodb module (npm i mongodb)
// 2.Import Mongodb.MongoClient
// 3.Create a uri/url
// 4.create a connection by using connect() of mongoclient
// 5.Create a db using db() present in database object