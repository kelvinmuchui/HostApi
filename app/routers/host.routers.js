module.exports =app => {
    var router = require("express").Router();

    const hosts = require('../controllers/host.controller.js')

    router.post("/", hosts.create)
    // router.post("/login", customers.findOne)
    //  // Retrieve all admin
     router.get("/", hosts.findAll);
    //  // Retrieve a single admin with id
     router.get("/:id", hosts.findOne);
    //  // Delete a admin with id
    //  router.delete("/:id", customers.delete);

    app.use('/api/host', router)
 


}