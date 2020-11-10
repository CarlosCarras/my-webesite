const path = require('path'),
    express = require('express'),
    morgan = require('morgan'),
    bodyParser = require('body-parser'),
    emailRouter = require('../routes/email.server.routes');
    infoRouter = require('../routes/info.server.routes')

module.exports.init = () => {
    const app = express();

    // enable request logging for development debugging
    app.use(morgan('dev'));
    // body parsing middleware; this will let us get the data from a POST
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    // add a router
    app.use('/api/', emailRouter);
    app.use('/api/', infoRouter);

    if (process.env.NODE_ENV === 'production') {
        // serve any static files
        app.use(express.static(path.join(__dirname, '../../client/build')));

        // handle React routing, return all requests to React app
        app.get('*', function(req, res) {
            console.log("Hello");
            res.sendFile(path.join(__dirname, '../../client/build', 'index.html'));
        });
    }
    return app
}
