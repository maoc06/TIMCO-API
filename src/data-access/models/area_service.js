const getAreaService = (sequelize, {DataTypes})=> {
    const AreaService =sequelize.define('areaServices',{
        areaId: {
            type: DataTypes.INTEGER,
            allowNull: false,
          },
          serviceId: {
            type: DataTypes.INTEGER,
            allowNull: false,
          },
    });

    AreaService.associate = (models) => {
        AreaService.belongsTo(models.Area, { foreignKey: 'areaId' });
        AreaService.belongsTo(models.Service, { foreignKey: 'serviceId' });
        
      };
    return AreaService;
}
export default getAreaService;