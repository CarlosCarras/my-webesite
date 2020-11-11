const domain      = process.env.MY_DOMAIN || require('../config/config').website.domain,
      email       = process.env.MY_EMAIL || require('../config/config').website.email,
      phone       = process.env.MY_PHONE || require('../config/config').website.phone;

exports.getPhone = (req, res) => {
    res.json({ phone: phone });
};

exports.getEmail = (req, res) => {
    res.json({ email: email });
};

exports.getDomain = (req, res) => {
    res.json({ domain: domain });
};
