
/**
 * Starts node js as http server and listens on mentioned port number.
 *
 * @author      PRCODER
 * @version     1.0
 */



var express = require('express'),
    app = express(),
    config = require('./config/config.js'),
    db = require('./datasource.js').getDb(),
    logger = require('./logger').getLogger(),
    pirmaryController = require('./controllers/PrimaryController.js');

var mongoose = require('mongoose');
mongoose.connect(config.mongodburi);

var port = process.env.PORT || config.WEB_SERVER_PORT || 3200;

/* app routes */
app.get('/', pirmaryController.getServerStatus);
app.get('/api/v1/user/getUser/:emailId', pirmaryController.getUserByEmailId);

app.listen(port, function() {
    logger.info('Application started successfully on port:', port);
});