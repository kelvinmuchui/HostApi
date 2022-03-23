module.exports =app => {
    var router = require("express").Router();

    const booking = require('../controllers/booking.controller.js')

    router.post("/", booking.create)
    // router.post("/login", customers.findOne)
    //  // Retrieve all admin
    //  router.get("/", customers.findAll);
    //  // Retrieve a single admin with id
    //  router.get("/:id", customers.findOne);
    //  // Delete a admin with id
    //  router.delete("/:id", customers.delete);

    app.use('/api/booking', router)
 


}