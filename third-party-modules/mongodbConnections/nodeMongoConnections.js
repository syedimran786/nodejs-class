const http=require("http");
const fs = require('fs');
const {parse} = require('querystring');
const mongodb = require('mongodb').MongoClient;

// let uri="mongodb://localhost:27017/"; //! Local Database

let uri="mongodb+srv://mywebclass:mywebclass@cluster0.cqerb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";//! Cloud Database



let form_urlencoded="application/x-www-form-urlencoded";
const server=http.createServer((req,res)=>
{
    //! Adding Data to Database
    if(req.url==="/create")
    {
        if(req.headers["content-type"]===form_urlencoded)
        {
            let body="";
            req.on("data", chunk=>
            {
                body+=chunk;
            });

            req.on("end", err=>
            {
                let fdata=parse(body);
                console.log(fdata);

                //! Creating Connection
                mongodb.connect(uri,{useNewUrlParser:true,useUnifiedTopology:true}, (err,database)=>
                {
                    if(err)throw err;
                    console.log("Connection Established Successfully");

                    //! Creating Database
                    let db=database.db("institute");
                    console.log("Database Created Successfully");

                    //! Creating collection and inserting document at a time

                    db.collection("students").insertOne(fdata, (err,res)=>
                    {
                        if(err)throw err;
                        console.log(`${res.insertedCount} Document inserted`);
                    })


                })

            })
            res.setHeader("Location", "/");
            res.statusCode=302;
            res.end();
        }
        else
        {
            res.end(null);
        }
    } 
    // ! Updating Data
    else if(req.url==="/update")
    {
        if(req.headers["content-type"]===form_urlencoded)
        {
            let body="";
            req.on("data", chunk=>
            {
                body+=chunk;
            });

            req.on("end", err=>
            {
                let fdata=parse(body);
                console.log(fdata);

                //! Creating Connection
                mongodb.connect(uri,{useNewUrlParser:true,useUnifiedTopology:true}, (err,database)=>
                {
                    if(err)throw err;

                    //! Creating Database
                    let db=database.db("institute");

                    //! Creating collection and inserting document at a time

                    db.collection("students").updateOne({Ename:fdata.Ename},{$set:{Salary:fdata.Salary}}, (err,udata)=>
                    {
                        if(err)throw err;
                        console.log(`Matched Count: ${udata.matchedCount}, ModifiedCount: ${udata.modifiedCount}`);
                    })


                })

            })
            res.setHeader("Location", "/");
            res.statusCode=302;
            res.end();
        }
        else
        {
            res.end(null);
        }
    }

    //! Deleting Documents
    else if(req.url==="/delete")
    {
        if(req.headers["content-type"]===form_urlencoded)
        {
            let body="";
            req.on("data", chunk=>
            {
                body+=chunk;
            });

            req.on("end", err=>
            {
                let fdata=parse(body);
                console.log(fdata);

                //! Creating Connection
                mongodb.connect(uri,{useNewUrlParser:true,useUnifiedTopology:true}, (err,database)=>
                {
                    if(err)throw err;

                    //! Creating Database
                    let db=database.db("institute");

                    //! Creating collection and inserting document at a time

                    db.collection("students").deleteOne({Ename:fdata.Ename}, (err,Ddata)=>
                    {
                        if(err)throw err;
                        console.log(`Deleted Count: ${Ddata.deletedCount}`);
                    })


                })

            })
            res.setHeader("Location", "/");
            res.statusCode=302;
            res.end();
        }
        else
        {
            res.end(null);
        }
    }
    //! Fetching Employees
    else if(req.url==="/getemp")
    {
        mongodb.connect(uri,{useNewUrlParser:true,useUnifiedTopology:true}, (err,database)=>
        {
            let db=database.db("institute");

        
            db.collection("students").find({}).toArray((err,data)=>
            {
                if(err)throw err;
                console.log(data);
                res.end(JSON.stringify(data))
            });
        })
    }
    else
    {
        fs.createReadStream("./index.html","utf-8").pipe(res)
    }
});



server.listen(5000,(err)=>
{
    if(err)throw err;
    console.log("Server is Running on port 5000");
})