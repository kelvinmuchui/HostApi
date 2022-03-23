module.exports = (sequelize, Sequelize) => {
    const File  = sequelize.define("host_service_files", {
        file_id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        
          },
        file_type: {
            type: Sequelize.DATEONLY,
            allowNull: false,
          },
        file_data: {
                type: Sequelize.STRING,
                allowNull: false,
            }
    },{timestamps: false})
    return File
}
