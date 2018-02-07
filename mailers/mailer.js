const nodemailer = require('nodemailer');

const mailer = (inquiry) => {

  const html = (inquiry) => {
    var result = '<h2>MissionConsultants.io</h2><h5>New Inquiry Received!</h5><p>from: <strong>'
    result += inquiry.firstName + ' ' + inquiry.lastName
    result += '</strong></p><p>company: <strong>' + inquiry.company
    result += '</strong></p><p>email: <strong><a href="mailto:'
    result += inquiry.email + '">' + inquiry.email
    result += '</a></strong></p><p>phone: <strong><a href="tel:'
    result += inquiry.phone + '">' + inquiry.phone
    result += '</a></strong></p><p>message: <strong>'
    result += inquiry.message + '</strong></p>'
    return result
  }

  const text = (inquiry) => {
    var result = "MissionConsultants.io\n\nNew Inquiry Received!\n\n"
    result += "FROM: " + inquiry.firstName + " " + inquiry.lastName + "\n\n"
    result += "COMPANY: " + inquiry.company + "\n\n"
    result += "EMAIL: " + inquiry.email + "\n\n"
    result += "PHONE: " + inquiry.phone + "\n\n"
    result += "MESSAGE: " + inquiry.message + "\n\n"
    return result
  }

  const message = (inquiry) => {
    return {
      from: 'no-reply@missionconsultants.io',
      to: 'lambrou@gmail.com',
      subject: 'New Inquiry From MissionConsultants.io!',
      text: text(inquiry),
      html: html(inquiry)
    }
  };
  console.log("Message: ", message(inquiry))

  var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'tassos@pullpixel.com',
      pass: process.env.EMAIL_PW
    }
  });

  transporter.sendMail(message(inquiry), function(error, info) {
    if (error) {
      console.log(error);
      return;
    }
    console.log('Message sent');
    transporter.close();
  })

}

module.exports = mailer
