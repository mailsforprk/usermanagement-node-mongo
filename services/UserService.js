
/**
 * This module provides methods to fetch data from db and write to file.
 *
 * @author      PRCODER
 * @version     1.0
 */


'use strict';

var config = require('./../config/config.js'),
  ds = require('./../datasource.js'),
  logger = require('../logger').getLogger();


var User = require('../models/user').User;


/**
 * initializes csv file export activity.
 */
exports.getUserByEmailId = function(email, cb){
  User.find({email:email},cb);
}