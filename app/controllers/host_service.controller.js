const db = require("../models");
const Host = db.host_service;

const Op = db.Sequelize.Op;
exports.create= (req, res) => {
    if( !req.body.description){
        res.status( 400).send({
            message:  "Content can not be empty!"
        });
        return ;
    }

    const order = {
        host_service_description: req.body.description,
        host_service_cost_description: req.body.cost,
        host_service_location: req.body.location,
        host_service_host_id: req.body.host_id,
        host_service_service_id: req.body.service_id,
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
exports.getAll = (req, res) => {
  Host.findAll({include: ["service"]})
  .then(data => {
    res.send(data);
  })
  .catch(err =>{
    res.status(500).send({
      message: "Error finding users"
    })
  })
}
