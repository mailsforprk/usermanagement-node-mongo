var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  firstName  : String,
  lastName   : String,
  email      : String,
  password   : String,
  roles      : [String],
  teamRoles  : [String],
  status     : String,
  createdBy  : String,
  createdAt  : { type: Date, default: Date.now },
  modifiedBy : String,
  modifiedAt : Date
});

var User = mongoose.model('User', userSchema);

module.exports = {
  User: User
}
