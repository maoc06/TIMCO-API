const getSkillService = (sequelize, {DataTypes})=> {
    const SkillService =sequelize.define('skillServices',{
        skillId: {
            type: DataTypes.INTEGER,
            allowNull: false,
          },
          serviceId: {
            type: DataTypes.INTEGER,
            allowNull: false,
          },
    });

    SkillService.associate = (models) => {
        SkillService.belongsTo(models.Service, { foreignKey: 'serviceId' });
        SkillService.belongsTo(models.Skill, { foreignKey: 'skillId' });
        
      };
    return SkillService;
}
export default getSkillService;