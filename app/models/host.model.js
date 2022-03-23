module.exports = (sequelize, Sequelize) => {
    const Host  = sequelize.define("host", {
        host_id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        
          },
          host_name: {
            type: Sequelize.STRING,
            allowNull: false,
          },
          host_email: {
                type: Sequelize.STRING,
                allowNull: false,
            },
        host_phone_no: {
                type: Sequelize.STRING,
                allowNull: false,
            },
        host_address: {
                type: Sequelize.STRING,
                allowNull: false,
            }
    },{timestamps: false})
    return Host
}
