const db = require("../models");
const Booking = db.booking;

const Op = db.Sequelize.Op;
exports.create= (req, res) => {
    if( !req.body.ref){
        res.status( 400).send({
            message:  "Content can not be empty!"
        });
        return ;
    }

    const order = {
        booking_ref: req.body.ref,
        booking_status: req.body.status,
        booking_description: req.body.description,
        booking_date: req.body.date,
        booking_request_start_date: req.body.startDate,
        booking_request_end_date: req.body.endDate,
        booking_request_start_time: req.body.startTime,
        booking_request_end_time: req.body.endTime,
        booking_service_id: req.body.service_id,
        booking_user_id: req.body.user_id,
        booking_time: req.body.booking_time




    }
    Booking.create(order)
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