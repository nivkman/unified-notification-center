const nodemailer = require('nodemailer');

const sendEmailMsg = async (args) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: args.sender_email_address,
            pass: args.sender_password
        }
    });

    const mailOptions = {
        from: 'noreply@unc.com',
        to: args.recipient,
        subject: args.subject,
        text: args.text
    };

    transporter.sendMail(mailOptions, (error) => {
        if (error)
            console.log({ status: 'error', error });
    });
    return { status: 'sending' };
}

module.exports = { sendEmailMsg };