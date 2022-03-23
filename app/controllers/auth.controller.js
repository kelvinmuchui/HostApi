const db = require("../models");
const config = require("../config/auth.config");
const User = db.login;
const Op = db.Sequelize.Op;
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");


exports.signup = (req, res) => {
    User.create({
        login_email:req.body.email,
        login_password:bcrypt.hashSync(req.body.password, 8),
        login_rank:req.body.rank,
        login_user_id:req.body.user_id,
        
    }).then((data)=>{
         var token = jwt.sign({ id: data.id }, config.secret, {
            expiresIn: 86400 // 24 hours
          });
          res.send({
              status: "SUCCESS",
              message: "SignUp Successfull",
              data: data,
              accessToken: token


          })
    })
    .catch(err => {
        res.status(500).send({ message: err.message });
      });
}

exports.signin = (req, res) => {
    User.findOne({
        where: {
          login_email: req.body.email,
        }
      })
      .then(user => {
          if(!user){
            return res.status(404).send({ message: "User Not found." });
          }
          var passwordIsValid = bcrypt.compareSync(
            req.body.password,
            user.login_password
          );
          if (!passwordIsValid) {
            return res.status(401).send({
              accessToken: null,
              message: "Invalid Password!"
            });
          }
          var token = jwt.sign({ id: user.id }, config.secret, {
            expiresIn: 86400 // 24 hours
          });
          res.send({  
                  status: "SUCCESS",
                  message: "SignUp Successfull",
                  data: user,
                    accessToken: token
          })
      })
      .catch(err => {
        res.status(500).send({ message: err.message });
      });
}
