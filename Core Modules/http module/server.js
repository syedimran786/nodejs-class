//! Steps to create the server
    // 1.Load or import http module;
    // 2.Create a server by using a method called createServer();
    // 3.Listen the server on some port by using listen();




    // ! Creating Server

    const http = require('http');

    const server=http.createServer((req,res)=>
    {
        console.log(req.body);
        console.log(req.headers);
        console.log(req.method);
        console.log(req.url)
    });

    server.listen(5000,err=>
        {
            if(err)throw err;
            console.log("My Node server is running on port 5000");
        });