

/**
 * This module creates db connection when requested.
 *
 * @author      PRCODER
 * @version     1.0
 */



// The mongoose instance.
var _mongoose = require('mongoose');

// The database object.
var db ;

/**
 * Gets a db connection for a URL.
 * @param     {String}    url         the url
 * @return    {object}                connection for the given URL
 */
function getDb() {
    url = "mongodb://localhost:27017/meandb'";
    if (!db) {
        db = _mongoose.createConnection(url);
    }


    return db;
}

/**
 * Sets the mongoose.
 * @param     {Object}    mongoose    the mongoose instance to set
 */
function setMongoose(mongoose) {
    _mongoose = mongoose;
}

/**
 * Gets the mongoose.
 * @return    {Object}                the mongoose instance
 */
function getMongoose() {
    return _mongoose;
}

// exports the functions
module.exports = {
    getDb: getDb,
    setMongoose: setMongoose,
    getMongoose: getMongoose
};
