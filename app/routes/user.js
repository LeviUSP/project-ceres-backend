const User = require('./../controllers/user')
const auth = require('./../controllers/auth')

module.exports = function(app) {
  app.route('/users')
    .get(auth.protectRoute, User.getAllUsers)
    .post(User.addUser)
}