const nodemailer = require('nodemailer');
const path = require('path');

// console.log(nodemailer);

let transporter=nodemailer.createTransport(
    {
        service:"gmail",
        auth:
        {
            user:"mywebclass63@gmail.com",
            pass:"sanjuvanju"
        }
    }
);

let mailOptions=
{
    from:"mywebclass63@gmail.com",
    to:`webprojectsjsp@gmail.com,
    shreyahiremath1998@gmail.com,
    sneha.mahesha@gmail.com,
    girishpreddy@gmail.com,
    namitamgaitonde@gmail.com,
    ravideepu1226@gmail.com,
    sandeepbellary97@gmail.com,
    akshay101997@gmail.com,
    gambler131997@gmail.com
    `,
    subject:"My First Mail",
    html:`
    <h1 style="color:green">Welcome to My Nodejs Class</h1>
    `,
    attachments:[
        {
            filename:"dinga.jpg",
            path:"https://cdn.pixabay.com/photo/2021/05/27/14/40/anemone-6288318__340.jpg"
        },
        {
            filename:"lemon.jpg",
            path:path.join(__dirname,"lemon.jpg")
        }
    ]
}


transporter.sendMail(mailOptions, (err,info)=>
{
    if(err)throw err;
    console.log("Mail sent Successfully");
    console.log(info);
})



