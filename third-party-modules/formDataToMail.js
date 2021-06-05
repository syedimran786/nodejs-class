const http = require('http');
const fs = require('fs');
const querystring = require('querystring');
const nodemailer = require('nodemailer');

const server=http.createServer((req,res)=>
{
    if(req.method==="POST")
    {
        let form_encoded="application/x-www-form-urlencoded";

        if(req.headers["content-type"]===form_encoded)
        {
            let body="";
            req.on("data", chunk=>
            {
                body+=chunk;
            });

            req.on("end", err=>
            {
                if(err)throw err;
                let formData=querystring.parse(body);
                console.log(formData);

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
                    subject:"Student Data",
                    html:`
                        <table border cellpadding="10px" rules="all">
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                        </tr>
                        <tr>
                            <td>${formData.Fname}</td>
                            <td>${formData.Lname}</td>
                        </tr>
                        </table>
                    `

                };

                transporter.sendMail(mailOptions, (err)=>
                {
                    if(err)throw err;
                    console.log("Mail Sent");
                })
            });
            res.end()
        }
        else
        {
            res.end(null);
        }
    }
    else
    {
        fs.createReadStream("./index.html","utf-8").pipe(res);
    }
});

server.listen(5000,err=>
    {
        if(err)throw err;
        console.log("Server is running o port 5000");
    })