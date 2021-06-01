const os = require('os');
// console.log(os);

// console.log(os.arch());
// console.log(os.totalmem()/1024/1024/1024);
// console.log(os.freemem()/1024/1024/1024);
// console.log(os.homedir());
// console.log(os.hostname());
// console.log(os.platform());
// console.log(os.type());
// console.log(os.version());
// console.log(os.cpus());
// console.log(os.userInfo("utf-8"));
// console.log(os.tmpdir());
// console.log(os.networkInterfaces());

if(os.platform()=="win32")
{
    console.log("Download Windows Versions");
}
else if(os.platform()=="android")
{
    console.log("Download Through Playstore");
}
else if(os.platform()=="linux")
{
    console.log("Download Linux version");
}
else
{
    console.log("Your Platform is not supported pls go with alternative");
}