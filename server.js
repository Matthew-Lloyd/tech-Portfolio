const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
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
            <li>Email: ${req.body.email}</li>
            <li>Primary Phone: ${req.body.primaryPhone}</li>
        </ul>

        <h3>Message</h3>
        <p>${req.body.Message}</p>
    `
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true, // use SSL
        auth: {
            user: 'MPLLoyd1991@gmail.com',
            pass: 'TeslaFuel'
        },
        tls: {
            rejectUnauthorized: false
        }
    });

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