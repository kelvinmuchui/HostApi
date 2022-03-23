module.exports = (sequelize, Sequelize) => {
    const Booking  = sequelize.define("booking",{
        booking_id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        
          },
          booking_ref: {
            type: Sequelize.STRING,
            allowNull: false,
          },
          booking_status: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        booking_description: {
                type: Sequelize.STRING,
                allowNull: false,
            },
        booking_date: {
                type: Sequelize.DATEONLY,
                allowNull: false,
            },
        booking_time: {
                type: Sequelize.TIME,
                allowNull: false,
            },
        booking_request_start_date: {
                type: Sequelize.DATEONLY,
                allowNull: false,
            },
        booking_request_end_date: {
                type: Sequelize.DATEONLY,
                allowNull: false,
            },
        booking_request_end_time: {
                type: Sequelize.TIME,
                allowNull: false,
            },
        booking_request_start_time: {
                type: Sequelize.TIME,
                allowNull: false,
            }
        
        
    },{timestamps: false})
    return Booking
}
