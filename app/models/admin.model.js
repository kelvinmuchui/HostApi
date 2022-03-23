module.exports = (sequelize, Sequelize) => {
    const Admin  = sequelize.define("admin", {
        admin_id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        
          },
          admin_name: {
            type: Sequelize.STRING,
            allowNull: false,
          },
            admin_email: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            admin_mobile: {
                type: Sequelize.STRING,
                allowNull: false,
            }
    },{timestamps: false})
    return Admin
}
