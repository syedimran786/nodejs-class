const mongodb = require('mongodb').MongoClient;

let uri="mongodb://localhost:27017/";

// !Connecting to MongoDB
mongodb.connect(uri,{useNewUrlParser:true,useUnifiedTopology:true}, (err,database)=>
{
    if (err) throw err;

    
    console.log("Connection established successfully");
    //! Creating Database
   let db= database.db("college");
    console.log("Database Created Successfully");

    // !Creating Collection
    // db.createCollection("students", err=>
    // {
    //     if(err) throw err;
    //     console.log("Collection Created successfully");
    // });

    // ! Inserting one Documents

    // db.collection("students").insertOne({sname:"Raja",age:45}, (err,res)=>
    // {
    //     if(err)throw err;
    //     console.log(res.insertedCount," Document inserted successfully");
    //     console.log(res.ops);
    // });

    // ! Inserting multiple Documents (insert is deprecated)

    // let ourStudents=[
    //     {
    //         sname:"Jhon",
    //         age:54
    //     },
    //     {
    //         sname:"Nick",
    //         age:23
    //     },
    //     {
    //         sname:"Raam",
    //         age:28
    //     }
    // ]
    // db.collection("students").insertMany(ourStudents, (err,res)=>
    // {
    //     if(err)throw err;
    //     console.log(res.insertedCount," Document inserted successfully");
    //     console.log(res.ops);
    // });


    //! Fetching one documents

// db.collection("students").findOne({sname:"Jhon"}, (err,data)=>
// {
//     if(err)throw err;
//     console.log(data);
// });

   //! Fetching Multiple documents

//    db.collection("students").find({}).sort({sname:1}).toArray((err,data)=>
//    {
//        if(err)throw err;
//     //    console.log(data);
//     for (const student of data) {
//         console.log(student.sname);
//     }

//    })

//! Updating One Document

    // db.collection("students").updateOne({}, {$set:{sal:346756}}, (err,data)=>
    // {
    //     if(err)throw err;
    //     console.log(`Matched Count:${data.matchedCount},Updated Count: ${data.modifiedCount}`);
    // })

    //! Updating multiple Document (update is deprecated)

    // db.collection("students").updateMany({}, {$set:{sal:346756}}, (err,data)=>
    // {
    //     if(err)throw err;
    //     console.log(`Matched Count:${data.matchedCount},Updated Count: ${data.modifiedCount}`);
    // })

    //! Deleting one document
    // db.collection("students").deleteOne({}, (err,data)=>
    // {
    //     if(err) throw err;
    //     console.log(`Deleted Documents: ${data.deletedCount}`);
    // })

    // //! Deleting one document
    // db.collection("students").deleteMany({}, (err,data)=>
    // {
    //     if(err) throw err;
    //     console.log(`Deleted Documents: ${data.deletedCount}`);
    // })

    //! Deleting collections
    // db.collection("students").drop((err,res)=>
    // {
    //     if(err)throw err;
    //     console.log(res);
    // });

    //! Deleting Database

    // db.dropDatabase((err,res)=>
    // {
    //     if(err)throw err;
    //     console.log(res);
    // })
});

