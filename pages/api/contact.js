/* eslint-disable import/no-anonymous-default-export */
export default function (req, res) {
  require("dotenv").config();

  let nodemailer = require("nodemailer");
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: "pirmisportfolio@gmail.com",
      pass: process.env.PASSWORD,
    },
    secure: true,
  });
  const mailData = {
    from: "pirmisportfolio@gmail.com",
    to: "d.pirmisashvili@gmail.com",
    subject: `Message From ${req.body.name}`,
    text: req.body.message + " | Sent from: " + req.body.email,
    html: `<div>${req.body.message}</div><p>Sent from:
    ${req.body.email}</p>`,
  };
  transporter.sendMail(mailData, function (err, info) {
    if (err) console.log(err);
    else console.log(info);
  });
  res.status(200);

  console.log(req.body);
}
