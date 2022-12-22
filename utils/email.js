const nodemailer = require('nodemailer')

let mailTransporter = nodemailer.createTransport({
    service: 'gmail',
    auth:{
        user: 'process.env',
        pass: 'process.env'
    }
})

let details = {
    from: 'process.env',
    to: 'test.gmail.com',
    subject: 'testing',
    text: 'testing out first sender'
}

mailTransporter.sendMail(details, (err) => {
    if(err){
        console.log('error', err)
    }
    else{
        console.log('email has been sent!')
    }
})