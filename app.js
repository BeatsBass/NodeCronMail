const cron = require('node-cron');
const express = require('express');
const nodeMailer = require('nodemailer');

const app = express();

app.set('port', process.env.PORT || 3000);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//0 0 */3 * * *

cron.schedule("* * * * *", function () {
    console.log("Cada minuto");
    const transporter = nodeMailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'peter.walter28@ethereal.email',
            pass: 'wDCb3Bckz2U28nVQNv'
        }
    });
    const mailOptions = {
        from: '"John Doe" < john.doe@example.com>',
        to: "jane.doe@example.com", 
        subject: "hola",
        text: "A Message from Node Cron App", 
        html: "<b>A Message from Node Cron App</b>" 
    };
    transporter.sendMail(mailOptions, function (error, info) {
        console.log(info.messageId);
        if (err) {
            console.log(err);
        }
    });

});

app.listen(app.get('port'), () => console.log(`Example app listening at http://localhost:${app.get('port')}`));