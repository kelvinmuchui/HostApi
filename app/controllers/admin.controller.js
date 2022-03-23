const db = require("../models");
const Admin = db.admin;

const Op = db.Sequelize.Op;
exports.create= (req, res) => {
    if( !req.body.name){
        res.status( 400).send({
            message:  "Content can not be empty!"
        });
        return ;
    }

    const order = {
        admin_name: req.body.name,
        admin_email: req.body.email,
        admin_mobile: req.body.phone,
    }
    Admin.create(order)
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