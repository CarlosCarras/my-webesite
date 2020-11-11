const nodemailer  = require('nodemailer'),
      mailgun     = require('nodemailer-mailgun-transport'),
      my_domain   = require('../config/config').website.domain,
      api_key     = process.env.MAILGUN_KEY || require('../config/config').mailgun.api_key,
      mail_domain = process.env.MAILGUN_DOMAIN || require('../config/config').mailgun.domain,
      to          = process.env.MAILGUN_EMAIL || require('../config/config').mailgun.destinationEmail,
      auth        = { auth: { api_key: api_key, domain:  mail_domain } },
      transporter = nodemailer.createTransport(mailgun(auth));

exports.msg_received = (req, res) => {
    const opener  = my_domain,
          name    = req.body.name,
          from    = req.body.email,
          subject = opener.concat(name, " | Sent You a Message"),
          message = req.body.message;

    const mailOptions = {   from:    from,
                            to:      to,
                            subject: subject,
                            text:    message
                        };
    res.json(mailOptions);

    transporter.sendMail(mailOptions, function(err, data) {
        if (err) {
            console.log(err);
        }
        else {
            console.log('Message Sent!')
        }
    });

};
