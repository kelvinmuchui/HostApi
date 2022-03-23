module.exports =app => {
    var router = require("express").Router();

    const users = require('../controllers/user.controller.js')

    router.post("/", users.create)
    router.get("/", users.findAll)
    //  // Retrieve all admin
     router.get("/:id", users.findOne);
    //  // Retrieve a single admin with id
      router.put("/:id", users.update);
    //  // Delete a admin with id
    //  router.delete("/:id", customers.delete);

    app.use('/api/user', router)
 


}