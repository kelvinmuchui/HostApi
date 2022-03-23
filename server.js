const express = require("express");
const bodyParser = require("body-parser");

const cors = require("cors");

const app = express();
const db = require("./app/models")
db.sequelize.sync()
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });
var corsOptions = {
  origin: ["http://localhost:3000","http://localhost:19006"],
   credentials: true, //access-control-allow-credentials:true
   optionSuccessStatus: 200
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

require("./app/routers/user.routers")(app);
require("./app/routers/admin.routers")(app);
require("./app/routers/host.routers")(app);
require("./app/routers/serviceType.routers")(app);
require("./app/routers/booking.routers")(app);
require("./app/routers/host_service.routers")(app);
require("./app/routers/auth.routers")(app);


// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to my online elctronic shop." });
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});


function initial() {
  Role.create({
    id: 1,
    name: "customer"
  });
 
  Role.create({
    id: 2,
    name: "shopattendant"
  });
 
  Role.create({
    id: 3,
    name: "admin"
  });
}
