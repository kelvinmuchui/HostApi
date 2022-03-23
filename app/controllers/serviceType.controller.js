const db = require("../models");
const Service = db.serviceType;

const Op = db.Sequelize.Op;
exports.create= (req, res) => {
    if( !req.body.name){
        res.status( 400).send({
            message:  "Content can not be empty!"
        });
        return ;
    }

    const order = {
        service_type_name: req.body.name,
        service_type_email: req.body.email,
        service_type_description: req.body.description,
       
    }
    Service.create(order)
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