const getSkillProject = (sequelize, {DataTypes})=> {
    const SkillProject =sequelize.define('skillProject',{
        skillId: {
            type: DataTypes.INTEGER,
            allowNull: false,
          },
          projectId: {
            type: DataTypes.INTEGER,
            allowNull: false,
          },
    });

    SkillProject.associate = (models) => {
        SkillProject.belongsTo(models.Project, { foreignKey: 'projectId' });
        SkillProject.belongsTo(models.Skill, { foreignKey: 'skillId' });
        
      };
    return SkillProject;
}
export default getSkillProject;