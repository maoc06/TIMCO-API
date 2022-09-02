const getProjectModel = (sequelize, { DataTypes }) => {
  const Project = sequelize.define('projects', {
    projectId: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
      unique: true,
      allowNull: true,
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
    created: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  });

  Project.associate = (models) => {
    Project.belongsTo(models.State, { foreignKey: 'stateId' });
  };

  Project.add = async (projectData) => {
    let project = await Project.create(projectData);
    return project;
  };

  Project.findProjects = async (stateModel) => {
    let projects = await Project.findAll({
      attributes: { exclude: ['stateId'] },
      include: stateModel,
    });
    return projects;
  };

  Project.findById = async (projectId, stateModel) => {
    let project = await Project.findOne({
      attributes: { exclude: ['stateId'] },
      where: { projectId },
      include: stateModel,
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
