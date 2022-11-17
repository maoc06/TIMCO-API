import constants from '../../utils/constants';

const getCandidatesModel = (sequelize, { DataTypes, NOW }) => {
  const Candidates = sequelize.define('candidates', {
    candidateId: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
      unique: true,
      allowNull: true,
      field: 'id',
    },
    studentId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    projectId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    stateId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 4,
    },
    created: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: NOW,
    },
  });

  Candidates.associate = (models) => {
    Candidates.belongsTo(models.Company, { foreignKey: 'companyId' });
    Candidates.belongsTo(models.Student, { foreignKey: 'studentId' });
    Candidates.belongsTo(models.State, { foreignKey: 'stateId' });
    Candidates.belongsTo(models.Project, { foreignKey: 'projectId' });
  };

  Candidates.add = async (candidateData) => {
    let candidate = await Candidates.create(candidateData);
    return candidate;
  };

  Candidates.findById = async (candidateId) => {
    return await Candidates.findOne({ where: { candidateId } });
  };

  Candidates.updateById = async (candidateData) => {
    const { candidateId, stateId } = candidateData;
    await Candidates.update({ stateId }, { where: { candidateId } });
  };

  Candidates.findByProject = async (projectId, { studentModel  }) => {
    const projects = await Candidates.findAll({
      where: { projectId },
      include: [{ model: studentModel }],
    });
    return projects;
  };

  Candidates.findByProjectWaiting = async (projectId, { studentModel, areaModel, universityModel }) => {
    const projects = await Candidates.findAll({
      where: { projectId, stateId: constants.WAITING_PROJECT_ID },
      include: [{ model: studentModel , include:[{model:areaModel},{model:universityModel}]}],
    });
    return projects;
  };

  Candidates.findProjectWaitingByStudent = async (
    studentId,
    { projectModel, stateModel, companyModel }
  ) => {
    const projects = await Candidates.findAll({
      where: { studentId, stateId: constants.WAITING_PROJECT_ID },
      include: [
        {
          model: projectModel,
          include: [
            { model: companyModel, attributes: { exclude: ['password'] } },
          ],
        },
        { model: stateModel },
      ],
    });
    return projects;
  };

  return Candidates;
};

export default getCandidatesModel;
