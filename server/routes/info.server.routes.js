const server  = require('../controllers/info.server.controller.js'),
      express = require('express'),
      router  = express.Router();

router.route('/getPhone')
    .get(server.getPhone);

router.route('/getEmail')
    .get(server.getEmail);

router.route('/getDomain')
    .get(server.getDomain);

module.exports = router;
