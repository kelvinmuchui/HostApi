module.exports = (sequelize, Sequelize) => {
    const Payment  = sequelize.define("payment", {
        payment_id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        
          },
          payment_date: {
            type: Sequelize.DATEONLY,
            allowNull: false,
          },
        payment_amount: {
                type: Sequelize.STRING,
                allowNull: false,
            },
        payment_mode: {
                type: Sequelize.STRING,
                allowNull: false,
            }
    },{timestamps: false})
    return Payment
}
