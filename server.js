const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const xoauth2 = require('xoauth2');
// const routes = require("./routes");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'client/build/')));
// app.use(routes);


app.post('/api/form', (req, res) => {
    console.log(req.body);
    const htmlEmail = `
        <h3>Contact Details</h3>
        <ul>
            <li>Name: ${req.body.fullName}</li>
            <li>Email: ${req.body.Email}</li>
            <li>Primary Phone: ${req.body.primaryPhone}</li>
        </ul>

        <h3>Message</h3>
        <p>${req.body.Message}</p>
    `
    // var smtpTransport = require('nodemailer-smtp-transport');

    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true, // use SSL
        auth: {
            user: 'MPLLoyd1991@gmail.com',
            pass: 'teslaFuel'
        },
        tls: {
            rejectUnauthorized: false
        }
    });


    // var transporter = nodemailer.createTransport(smtpTransport({
    //     service: 'gmail',
    //     host: 'smtp.gmail.com',
    //     // host: 'smtp.gmail.com',
    //     port: 465,
    //     secure: true, // use SSL
    //     auth: {
            // user: 'MPLLoyd1991@gmail.com',
            // pass: 'teslaFuel'
    //     },
    //     tls: {
    //         rejectUnauthorized: false
    //     }
    // }));

    // let transporter = nodemailer.createTransport({
    //     service: 'gmail',
        

    //     auth: {
    //         xoauth2: xoauth2.createXOAuth2Generator({
    //             user: 'MPLLoyd1991@gmail.com',
    //             clientId: '410961893954-sem0jihc1k3fvrim7r2bpqe59a941rjh.apps.googleusercontent.com',
    //             clientSecret: 'JoThRypwdkxm1UXXdTQxx2Co',
    //             refreshToken: '1/6IDDDpZu4BRXOVIa3AVOksvBAhSh3Rl0-OpQzCpx1js'
    //         })

    //     },

    // });

    let mailOptions = {
        from: '"Contact Form" <MPLLoyd1991@gmail.com>',
        to: 'MPLLoyd1991@gmail.com',
        subject: 'New Contact Request',
        text: req.body.fullName,
        html: htmlEmail
    };

    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            return console.log(err);
        }
        console.log('Message Sent: %s', info.message);
        console.log('Message URL: %s', nodemailer.getTestMessageUrl(info));
    })
});


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})