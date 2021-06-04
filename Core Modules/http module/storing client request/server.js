const http = require('http');
const fs = require('fs');
const querystring = require('querystring');

// !The application/x-www-form-urlencoded content type describes form data that is sent in a single block in the HTTP message body. Unlike the query part of the URL in a GET request, the length of the data is unrestricted.

const server=http.createServer((req,res)=>
{
    res.writeHead(200,{"content-type":"text/html"});

    
    if (req.method==="POST")
     {
         let form_urlencoded="application/x-www-form-urlencoded";

       if (req.headers["content-type"]===form_urlencoded) {
           
        let body=""
        req.on("data", chunk=>
        {
            // console.log(chunk.toString());
            body+=chunk;
            // console.log(body);
        });

        req.on("end", err=>
        {
            let formData=querystring.parse(body);
            console.log(formData);
            console.log(`username:${formData.username} password:${formData.password}`);
            res.end(`username:${formData.username} password:${formData.password}`)
            
        });
      
       }
       else
       {
           res.end(null)
       }
    }
    else
    {
        fs.createReadStream("./index.html","utf-8").pipe(res);
    }
    

   
});


let PORT=5000;
server.listen(PORT,err=>
    {
        if(err)throw err;
        console.log(`Server is running on PORT ${PORT}`);
    })