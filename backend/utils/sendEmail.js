const nodemailer = require("nodemailer");
const ErrorResponse = require("../utils/errorResponse");

const sendEmail = (options) => {
  const transporter = nodemailer.createTransport({
    service: "SendGrid",
    auth: {
      user: "apikey",
      pass: "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",
    },
  });

  const mailOptions = {
    from: "alen@lilacinfotech.com",
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
