const db = require('../models');
const Login =db.login;

checkDuplicateUsernameOrEmail = (req, res, next) =>{
    Login.findOne({
        where: {
          login_email: req.body.email
        }
      }).then(user => {
        if (user) {
          res.status(400).send({
            message: "Failed! Email is already in use!"
          });
          return;
        }
        next();
      });
}
const verifySignUp = {
    checkDuplicateUsernameOrEmail: checkDuplicateUsernameOrEmail,
  };

  module.exports = verifySignUp;