var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  host: 'mail.pci-ng.com',
  port: 465,
  secure: true,
  auth: {
    user: 'olubusadea@gmail.com',
    pass: '*****'
  }
});

var mailOptions = {
  from: 'info@zappy.com',
  to: 'olubusadea@gmail.com',
  subject: 'Testing nodemailer',
  text: 'Testing 123!'
};
const nodemailer = require("nodemailer");

var transporter;

(initEmailTransporter = async ()=>{
	testAccount = await nodemailer.createTestAccount();
	transporter = nodemailer.createTransport({
		host: config.SMTP_Config.host,
		port: config.SMTP_Config.port,
		secure: false,
	});
})();


async function sendEmail (sendTo,subject,text,html) {
	if ( transporter ){
		try{
			// send mail with defined transport object
			let info = await transporter.sendMail({
				from: config.SMTP_Config.from,
				to: to,
				subject: subject||'',
				text: text||'',
				html: html||''
			});
		}
		catch ( e ) {
			console.log('Failed to send email');
			console.log(e);
		}
	} else {
		console.log('--- EMAIL TRANSPORTER NOT READY ---');
	}
}

module.exports={
	sendEmail
};
