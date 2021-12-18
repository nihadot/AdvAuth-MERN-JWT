const nodemailer = require("nodemailer");
const ErrorResponse = require("../utils/errorResponse");

const sendEmail = (options) => {
  const transporter = nodemailer.createTransport({
    service: process.env.EMAIL_SERVICE,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_FROM,
    to: options.to,
    subject: options.subject,
    html: options.text,
  };

  transporter.sendMail(mailOptions, function (err, info) {
    if (err) {
      next(new ErrorResponse("Email could not be sent", 500));
    } else {
      console.log(info);
    }
  });
};

module.exports = sendEmail;
