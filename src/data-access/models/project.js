const getProjectModel = (sequelize, { DataTypes }) => {
  const Project = sequelize.define('projects', {
    projectId: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
      unique: true,
      allowNull: true,
    },
    companyId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    serviceId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    studentId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    stateId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    priceTotal: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    timelineDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      validate: {
        isDate: true,
      },
    },
    created: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  });

  Project.associate = (models) => {
    Project.belongsTo(models.Company, { foreignKey: 'companyId' });
    Project.belongsTo(models.Student, { foreignKey: 'studentId' });
    Project.belongsTo(models.State, { foreignKey: 'stateId' });
    Project.belongsToMany(models.Skill, {
      through: models.SkillProject,
      foreignKey: 'projectId',
    });
  };

  Project.add = async (projectData) => {
    let project = await Project.create(projectData);
    return project;
  };

  Project.findProjects = async ({
    companyModel,
    studentModel,
    stateModel,
    skillModel,
  }) => {
    let projects = await Project.findAll({
      attributes: { exclude: ['stateId', 'studentId', 'companyId'] },
      include: [
        {
          model: companyModel,
          attributes: { exclude: ['created', 'password', 'employeeNumber'] },
        },
        {
          model: studentModel,
          attributes: { exclude: ['created', 'password'] },
        },
        {
          model: stateModel,
          attributes: { exclude: ['created'] },
        },
        { model: skillModel, attributes: ['name'] },
      ],
    });
    return projects;
  };

  Project.findById = async (projectId) => {
    let project = await Project.findOne({
      attributes: { exclude: ['stateId'] },
      where: { projectId },
    });
    return project;
  };

  Project.findByIdCompose = async (
    projectId,
    { companyModel, studentModel, stateModel, skillModel }
  ) => {
    let project = await Project.findOne({
      attributes: { exclude: ['stateId'] },
      where: { projectId },
      include: [
        {
          model: companyModel,
          attributes: { exclude: ['created', 'password', 'employeeNumber'] },
        },
        {
          model: studentModel,
          attributes: { exclude: ['created', 'password'] },
        },
        {
          model: stateModel,
          attributes: { exclude: ['created'] },
        },
        {
          model: skillModel,
          attributes: ['name'],
        },
      ],
    });
    return project;
  };

  Project.updateById = async (projectData) => {
    const { projectId } = projectData;
    await Project.update({ ...projectData }, { where: { projectId } });
  };

  return Project;
};

export default getProjectModel;
