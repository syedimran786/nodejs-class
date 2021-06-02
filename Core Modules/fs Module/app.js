//! I want to create a folder name nodejs
//! I need to create a file name dinga.txt
//! I need to add new data without affecting old data
//! I need to read the data from the file in the form of string
//! I need to copy the data of dinga.txt to a new file called jsp.txt
//! I need to rename the file to sheela.txt
//! I need to rename the folder to angular
//! i need to delete that file sheela.txt
//! I need to delete folder angular  


const fs = require('fs');


// fs.mkdir("nodejs", err=>
// {
//     if(err)throw err;
//     console.log("Directory created Successfully");
    
// })

// fs.writeFile("./nodejs/dinga.txt", "Hello Bangalore", err=>
// {
//     if(err)throw err;
//     console.log("File Created Successfully");
// })

// fs.appendFile("./nodejs/dinga.txt"," Hello world", err=>
// {
//     if(err)throw err;
//     console.log("Data Added Successfully");
// });

// fs.readFile("./nodejs/dinga.txt","utf-8", (err,fileData)=>
// {
//     if(err)throw err;
//     console.log(fileData);
// })

// fs.copyFile("./nodejs/dinga.txt", "./nodejs/jsp.txt", err=>
// {
//     if(err)throw err;
//     console.log("Data Copied Successfully");
// })

// fs.rename("./nodejs/dinga.txt", "./nodejs/Sheela.txt", err=>
// {
//     if(err)throw err;
//     console.log("File Renamed");
// })

// fs.rename("./nodejs", "./angular", err=>
// {
//     if(err)throw err;
//     console.log("Folder Renamed");
// })

// fs.unlink("./angular/Sheela.txt", err=>
// {
//     if(err)throw err;
//     console.log("File Deleted Successfully");
// })

// fs.rmdir("./angular", err=>
// {
//     if(err)throw err
//     console.log("Folder Deleted Successfully");
// })

// This makes streams really powerful when working with large amounts of data,
//  for example, a file size can be larger than your free memory space, making it 
//  impossible to read the whole file into the memory in order to process it. 
//  That’s where streams come to the rescue!
// Using streams to process smaller chunks of data, makes it possible to read larger files.

//! We can handle streams in 4 ways 
// 1.Write Stream-->To write the data
// 2.ReadStream-->To Read The Data
// 3.Duplex-->Both read and write
// 4.Transform-->Same as Duplex but output is depends on input of another steam

//! 1.Write Stream-->To write the data
// let writeStream=fs.createWriteStream('jsp.txt');

// writeStream.write("Hello Bangalore");


//! 2.ReadStream-->To Read The Data
// let readStream=fs.createReadStream("dinga.txt","utf-8");


// readStream.on("data", chunk=>
// {
//     console.log("------------Reading Data-------------");

//     writeStream.write(chunk);
// })

// readStream.on("end", err=>
// {
//     if(err)throw err;
//     console.log("----------Data Red Successfully------------");
// })


//!3.Duplex-->Both read and write

let writeStream=fs.createWriteStream("jsp.txt");


let readStream=fs.createReadStream("dinga.txt","utf-8");

readStream.pipe(writeStream);