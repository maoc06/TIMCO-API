const getSkillService = (sequelize, { DataTypes }) => {
  const SkillService = sequelize.define(
    'skillServices',
    {
      skillId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    { timestamps: false }
  );

  SkillService.add = async (skillServiceData) => {
    let skillService = await SkillService.create(skillServiceData);
    return skillService;
  };

  return SkillService;
};
export default getSkillService;
