module.exports = (sequelize, Sequelize) => {
    const Login  = sequelize.define("login", {
        login_id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        
          },
          login_email: {
            type: Sequelize.STRING,
            allowNull: false,
          },
        login_password: {
                type: Sequelize.STRING,
                allowNull: false,
            },
        login_rank: {
                type: Sequelize.STRING,
                allowNull: false,
            },
        login_user_id: {
                type: Sequelize.INTEGER,
            },
        login_admin_id: {
                type: Sequelize.INTEGER,
            },
        login_host_id: {
                type: Sequelize.INTEGER,
            }
    },{timestamps: false})
    return Login
}
