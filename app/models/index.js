const dbConfig = require("../config/db.config.js")

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("./user.model")(sequelize, Sequelize);
db.admin = require("./admin.model")(sequelize, Sequelize);
db.serviceType = require("./serviceType.model")(sequelize, Sequelize);
db.host = require("./host.model")(sequelize, Sequelize);
db.host_service = require("./host_service.model")(sequelize, Sequelize);
db.booking = require("./booking.model")(sequelize, Sequelize);
db.payment= require("./payment.model")(sequelize, Sequelize);
db.file = require("./file.model")(sequelize, Sequelize);
db.login = require("./login.model")(sequelize, Sequelize);
db.host_service.hasMany(db.file,{ foreignKey:"file_host_service_id", as: "files"})
db.file.belongsTo(db.host_service,{ foreignKey:"file_host_service_id",as:"host_service"})
db.booking.hasMany(db.payment,{foreignKey: "payment_booking_id",as: "payments"})
db.payment.belongsTo(db.booking,{ foreignKey:"payment_booking_id", as: "bookings"})
db.host_service.hasMany(db.booking,{foreignKey: "booking_service_id",as: "bookings"})
db.booking.belongsTo(db.host_service,{ 
  foreignKey: "booking_service_id",
  as:"host_service"})
db.user.hasMany(db.booking,{ foreignKey: "booking_user_id",as:"bookings"})
db.booking.belongsTo(db.user,{ 
  foreignKey: "booking_user_id",
  as:"users"})
db.host.hasMany(db.host_service, { foreignKey: "host_service_host_id",as: "host_service"});
db.host_service.belongsTo(db.host, {
  foreignKey: "host_service_host_id",
  as: "host"
})
db.serviceType.hasMany(db.host_service, { foreignKey: "host_service_service_id",as: "host_service"});
db.host_service.belongsTo(db.serviceType, {
  foreignKey: "host_service_service_id",
  as: "service"
})
module.exports = db;