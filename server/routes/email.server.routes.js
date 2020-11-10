const server  = require('../controllers/email.server.controller.js'),
      express = require('express'),
      router  = express.Router();

router.route('/email')
    .post(server.msg_received);

module.exports = router;
