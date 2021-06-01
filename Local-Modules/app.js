const fs = require('fs');

let crs=fs.createWriteStream("demo.txt");

// crs.write("Hello Jspiders");
let read=fs.createReadStream("./dinga.txt","utf-8");
read.pipe(crs);
