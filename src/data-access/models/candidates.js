const getCandidatesModel = (sequelize, { DataTypes }) => {
  const Candidates = sequelize.define('candidates', {
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
    },
    created: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  });

  Candidates.associate = (models) => {
    Candidates.belongsTo(models.Company, { foreignKey: 'companyId' });
    Candidates.belongsTo(models.Student, { foreignKey: 'studentId' });
    Candidates.belongsTo(models.State, { foreignKey: 'stateId' });
  };

  Candidates.add = async (candidateData) => {
    let candidate = await Candidates.create(candidateData);
    return candidate;
  };

  Candidates.updateById = async (candidateData) => {
    const { studentId, projectId } = candidateData;
    await Candidates.update({ ...candidateData }, { where: { projectId, studentId } });
  };

  Candidates.findByProject = async (projectId, {studentModel}) => {
    const projects = await Candidates.findAll({ where: { projectId }, include: [{model: studentModel}] });
    return projects;
  };

  return Candidates;
};

export default getCandidatesModel;
