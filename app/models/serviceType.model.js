module.exports = (sequelize, Sequelize) => {
    const ServiceType  = sequelize.define("service_type", {
        service_type_id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        
          },
          service_type_name: {
            type: Sequelize.STRING,
            allowNull: false,
          },
          service_type_email: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            service_type_description: {
                type: Sequelize.STRING,
                allowNull: false,
            }
    },{timestamps: false})
    return ServiceType
}
