module.exports =app => {
    var router = require("express").Router();

    const service = require('../controllers/host_service.controller.js')

    router.post("/", service.create)
    // router.post("/login", customers.findOne)
    //  // Retrieve all admin
     router.get("/", service.getAll);
    //  // Retrieve a single admin with id
    //  router.get("/:id", customers.findOne);
    //  // Delete a admin with id
    //  router.delete("/:id", customers.delete);

    app.use('/api/hostService', router)
 


}