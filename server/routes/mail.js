const express = require("express");
const router = express.Router();
const transporter = require("./../public/javascripts/mail");

router.post("/", (req, res) => {
  var mailOptions = {
    from: "Gyankunj Academy",
    to: req.body.to,
    subject: req.body.subject,
    html: req.body.body,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      res.send(error);
    } else {
      res.send("Email sent: " + info.response);
    }
  });
});

module.exports = router;
