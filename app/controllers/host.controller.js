const db = require("../models");
const Host = db.host;

const Op = db.Sequelize.Op;
exports.create= (req, res) => {
    if( !req.body.name){
        res.status( 400).send({
            message:  "Content can not be empty!"
        });
        return ;
    }

    const order = {
        host_name: req.body.name,
        host_email: req.body.email,
        host_phone_no: req.body.phone,
        host_address: req.body.address,
    }
    Host.create(order)
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
    Host.findAll({include: ["host_service"]})
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
  
    Host.findByPk(id ,{include: ["host_service"]})
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