import nodemailer from 'nodemailer';
import sgTransport from 'nodemailer-sendgrid-transport';

const transporter = {
    auth: {
        // Update your SendGrid API key here
        api_key: 'SG.XXXXXXXXXXXXXXXXXXXXXXXX'
    }
}

const mailer = nodemailer.createTransport(sgTransport(transporter));

export default async (req, res) => {
    console.log(req.body)
    const {name, email, number, subject, text} = req.body;

    const data = {
        // Update your email here
        to: 'your@email.here',
        from: email,
        subject: `New Contact Submission from ${name}`,
        text: text,
        html: `
            <b>From:</b> ${name} <br /> 
            <b>Number:</b> ${number} <br /> 
            <b>Subject:</b> ${subject} <br /> 
            <b>Message:</b> ${text} 
        ` 
    };
    try {
        const res = await mailer.sendMail(data);
        console.log(res)
        res.status(200).send("Message sent successfully")
    } catch (error) {
        console.log(error);
        res.status(500).send("Error proccessing message");
    }
}