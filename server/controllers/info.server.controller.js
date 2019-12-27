const domain      = require('../config/config').website.domain;
      email       = require('../config/config').website.email;
      phone       = require('../config/config').website.phone;

exports.getPhone = (req, res) => {
    res.json({ phone: phone });
};

exports.getEmail = (req, res) => {
    res.json({ email: email });
};

exports.getDomain = (req, res) => {
    res.json({ domain: domain });
};
