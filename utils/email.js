const nodemailer = require('nodemailer')

function sendMail(to, subject, text) {

    let mailTransporter = nodemailer.createTransport({
        service: 'gmail',
        auth:{
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASSWORD
        }
    })

    let details = {
        from: process.env.EMAIL_USER,
        to,
        subject,
        text
    }

    mailTransporter.sendMail(details, (err) => {
        if(err){
            console.log('error', err)
        }
        else{
            console.log('email has been sent!')
        }
    })
}


