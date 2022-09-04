const getProjectReviewModel = (sequelize, { DataTypes }) => {
  const ProjectReview = sequelize.define('projectReview', {
    projectReviewId: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
      unique: true,
      allowNull: true,
    },
    projectId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    // studentId: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    // },
    // reviewByCompany: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    // },
    rating: {
      type: DataTypes.REAL,
      allowNull: false,
      validate: {
        isFloat: true,
      },
    },
    comment: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    created: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  });

  ProjectReview.associate = (models) => {
    ProjectReview.belongsTo(models.Project, { foreignKey: 'projectId' });
    // ProjectReview.belongsTo(models.Company, { foreignKey: 'reviewByCompany' });
    // ProjectReview.belongsTo(models.Student, { foreignKey: 'studentId' });
  };

  ProjectReview.add = async (projectReviewData) => {
    let projectReview = await ProjectReview.create(projectReviewData);
    return projectReview;
  };

  ProjectReview.findByProject = async (projectId, { projectModel }) => {
    let projectReviews = await ProjectReview.findAll({
      attributes: { exclude: ['projectId'] },
      include: { model: projectModel },
      where: { projectId },
    });
    return projectReviews;
  };

  ProjectReview.findByCompany = async (companyId, { projectModel }) => {
    let projectReviews = await ProjectReview.findAll({
      attributes: { exclude: ['projectId'] },
      include: { model: projectModel, where: { companyId } },
    });
    return projectReviews;
  };

  ProjectReview.findByStudent = async (studentId, { projectModel }) => {
    let projectReviews = await ProjectReview.findAll({
      attributes: { exclude: ['projectId'] },
      include: { model: projectModel, where: { studentId } },
    });
    return projectReviews;
  };

  return ProjectReview;
};

export default getProjectReviewModel;
