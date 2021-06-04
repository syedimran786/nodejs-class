const http = require('http');

let employees=[
    {
        ename:"Syed",
        age:30,
        dept:"IT",
        Salary:5000,
        img_url:"https://cdn.pixabay.com/photo/2021/04/14/14/21/tern-6178544__340.jpg"
    },
    {
        ename:"Jhon",
        age:23,
        dept:"Sales",
        Salary:15000,
        img_url:"https://cdn.pixabay.com/photo/2020/12/14/11/18/cat-5830643__340.jpg"
    },
    {
        ename:"Miller",
        age:25,
        dept:"IT",
        Salary:5000,
        img_url:"https://cdn.pixabay.com/photo/2021/05/16/07/20/plant-6257392__340.jpg"
    },
    {
        ename:"Smith",
        age:45,
        dept:"Sales",
        Salary:65000,
        img_url:"https://cdn.pixabay.com/photo/2020/05/21/07/40/poppy-5199556__340.jpg"
    }

];

const server=http.createServer((req,res)=>
{
    res.setHeader("content-type", "application/json");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.statusCode=200;
    res.end(JSON.stringify(employees));
});


server.listen(5000,err=>
    {
        if(err)throw err;
        console.log("server is running on port 5000");
    })