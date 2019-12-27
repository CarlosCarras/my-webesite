const express = require('./config/express.js'),
      port    = process.env.PORT || 5000,
      app     = express.init();

app.listen(port, () => console.log(`Server now running on port ${port}!`));
