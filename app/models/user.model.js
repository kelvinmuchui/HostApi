module.exports = (sequelize, Sequelize) => {
    const User  = sequelize.define("user", {
        user_id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        
          },
          user_name: {
            type: Sequelize.STRING,
            allowNull: false,
          },
            user_email: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            user_mobile: {
                type: Sequelize.STRING,
                allowNull: false,
            }
    },{timestamps: false})
    return User
}
