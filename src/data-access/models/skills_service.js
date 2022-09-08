const getSkillService = (sequelize) => {
  const SkillService = sequelize.define(
    'skillServices',
    {},
    { timestamps: false }
  );

  SkillService.add = async (skillServiceData) => {
    let skillService = await SkillService.create(skillServiceData);
    return skillService;
  };

  return SkillService;
};
export default getSkillService;
