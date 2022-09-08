const getSkillProject = (sequelize) => {
  const SkillProject = sequelize.define(
    'skillProject',
    {},
    { timestamps: false }
  );

  SkillProject.add = async (skillsProject) => {
    let skillProjects = await SkillProject.bulkCreate(skillsProject);
    return skillProjects;
  };

  return SkillProject;
};
export default getSkillProject;
