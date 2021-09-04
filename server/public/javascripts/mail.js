const nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "rishikkshah987@gmail.com",
    pass: "lxrovjhwccyuyzrg",
  },
});

// var mailOptions = {
//   from: "Abhisek Tamang<abhisek.209@gmail.com",
//   to: "rishikkshah98@gmail.com",
//   subject: "Sending Email using Node.js",
//   html: message,
// };

// transporter.sendMail(mailOptions, function (error, info) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("Email sent: " + info.response);
//   }
// });

module.exports = transporter;
