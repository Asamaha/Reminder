var nodemailer = require('nodemailer');

var gmailUser;
var gmailPass;

if (process.env.GMAIL_USER) {
  gmailUser = process.env.GMAIL_USER;
  gmailPass = process.env.GMAIL_PASS;
} else {
  var config = require('./config');
  gmailUser = config.gmail.user;
  gmailPass = config.gmail.pass;
}

module.exports = function(email, message, cb) {
  // create reusable transporter object using SMTP transport
  var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: gmailUser,
      pass: gmailPass,
    },
  });
};