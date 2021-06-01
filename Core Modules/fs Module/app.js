const fs = require('fs');

// let reader=fs.readFileSync("dinga.txt");
// console.log(reader);
// console.log("Data red Successfully");

fs.readFile("dinga.txt",  (err,fileData)=>
{
    if(err)throw err;
    console.log(fileData);
});
console.log("Data red Successfully");