/**
 * This module provides methods to call csv file conversion method.
 *
 * @author      PRCODER
 * @version     1.0
 */

var userService = require('./../services/UserService.js'),
    config = require('./../config/config.js');

/**
 * GET /status
 * OK 200 when server is up and running
 */
exports.getServerStatus = function (req, res) {
  res.writeHead(200);
  res.end('OK 200');
};

/**
 * returns exported user date
 * @param req
 * @param res
 */
exports.getUserByEmailId = function (req, res) {
console.log(req.params.emailId);
  userService.getUserByEmailId(req.params.emailId, function(err, data){
    console.log(data);
    console.log(err);
    if (data) {
      console.log(data);
      res.send(data);
    } else {
      res.send('500 Server Error');
    }
  });


}
