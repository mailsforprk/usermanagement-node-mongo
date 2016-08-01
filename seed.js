var mongoose = require('mongoose');
var config = require('./config/config.js');
mongoose.connect(config.mongodburi);
var faker = require('faker');
var User = require('./models/user').User;

User.remove({}, function (err) {

  var users = createUsers(100);
  User.collection.insert(users, onInsert);
  User.count({}, function (err, docs) {
    console.log('system now has ' + docs + ' active users');
    mongoose.connection.close();
  });



});
function onInsert(err, docs) {
  if (err) {
    console.info(err);
  } else {
    console.info(docs.insertedCount + ' users were successfully stored.');
  }
}
function createUsers(count) {
  var bulkInsert = [];
while(count > 0){
  var userCreate = {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    loginToken: 1,
    roles: [faker.name.jobTitle()],
    teamRoles: [],
    status: 'A'
  };

  count--;
  bulkInsert.push(userCreate);
}


  return bulkInsert;

}