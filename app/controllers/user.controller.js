const db = require("../models");
const User = db.user;

const Op = db.Sequelize.Op;
exports.create= (req, res) => {
    if( !req.body.name){
        res.status( 400).send({
            message:  "Content can not be empty!"
        });
        return ;
    }

    const order = {
        user_name: req.body.name,
        user_email: req.body.email,
        user_mobile: req.body.phone,
    }
    User.create(order)
    .then(data => {
        res.send(data);
        
    })
    .catch (err => {
        res.status(500).send({
            message:
              err.message || "Some error occurred while creating the order."
          });
    })
}

exports.findAll = (req, res) => {
  User.findAll({include: ["bookings"]})
  .then(data => {
    res.send(data);
  })
  .catch(err =>{
    res.status(500).send({
      message: "Error finding users"
    })
  })
}


exports.findOne = (req, res) => {
    const id = req.params.id;
  
    User.findByPk(id ,{include: ["bookings"]})
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find OrderDetail with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving OrderDetail with id=" + id
        });
      });
  };
exports.update = (req, res)=>{
  const id = req.params.id;
  User.update(req.body, {
    where: {user_id: id}
  }).then(num =>{
    if(num ==1){
      res.send({
        message: "User was updated successfully."
      });
    }else {
      res.send({
        message: `Cannot update User with id=${id}. Maybe User was not found or req.body is empty!`
      });
    }
  });
}