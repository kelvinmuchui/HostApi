module.exports = (sequelize, Sequelize) => {
    const HostService  = sequelize.define("host_service",  {
        host_service_id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        
          },
          host_service_description: {
            type: Sequelize.STRING,
            allowNull: false,
          },
          host_service_cost_description: {
                type: Sequelize.STRING,
                allowNull: false,
            },
        host_service_location: {
                type: Sequelize.STRING,
                allowNull: false,
            },
        // host_service_host_id: {
        //         type: Sequelize.INTEGER,
        //         allowNull: false,
        //     },
        // host_service_service_id: {
        //         type: Sequelize.INTEGER,
        //         allowNull: false,
        //     }

        
    },{timestamps: false})
    return HostService
}
