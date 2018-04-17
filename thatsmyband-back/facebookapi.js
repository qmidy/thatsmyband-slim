// https://codeburst.io/node-js-rest-api-facebook-login-121114ee04d8
// http://www.meanjs.fr/creer-une-api-restful-avec-express-4-x-mongodb-et-mongoose/
// https://stackoverflow.com/questions/20796714/how-do-i-start-mongo-db-from-windows

var passport = require('passport-facebook');

exports.GetUserId = function(userToken) {

	passport.use(new FacebookTokenStrategy({
      clientID: "793344530828539",
      clientSecret: "ff24e4ded643902337fae6aaa87594f3"
    },
    function (accessToken, refreshToken, profile, done) {
      User.upsertFbUser(accessToken, refreshToken, profile, function(err, user) {
      	console.log(user);
      });
    }));
}
