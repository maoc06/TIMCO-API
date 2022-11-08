import constants from '../../utils/constants';
import CONSTANTS from '../../utils/constants';

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
    areaId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    studentId: {
      type: DataTypes.UUID,
      allowNull: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    deliverables: {
      type: DataTypes.STRING,
      allowNull: true,
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
    Project.belongsTo(models.Area, { foreignKey: 'areaId' });
    Project.belongsTo(models.Service, { foreignKey: 'serviceId' });
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

  Project.findByStudent = async (studentId, { skillModel }) => {
    let projects = await Project.findAll({
      // attributes: { exclude: ['stateId'] },
      where: { studentId },
      include: [{ model: skillModel }],
    });
    return projects;
  };

  Project.findUnassignedByArea = async (areaId, { companyModel }) => {
    let projects = await Project.findAll({
      attributes: {
        exclude: ['stateId', 'studentId', 'companyId', 'serviceId'],
      },
      where: {
        areaId,
        stateId: constants.UNASSIGNED_PROJECT_ID,
      },
      include: [
        {
          model: companyModel,
          attributes: { exclude: ['created', 'password', 'employeeNumber'] },
        },
      ],
    });
    return projects;
  };

  /// Lista todos los proyectos de un student
  Project.findActiveByStudent = async (
    studentId,
    { companyModel, studentModel, stateModel, skillModel }
  ) => {
    let projects = await Project.findAll({
      attributes: { exclude: ['stateId'] },
      where: { studentId },
      // where: { stateId: CONSTANTS.ACTIVE_PROJECT_ID, studentId },
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
    return projects;
  };

  //Metodo encontrar projectos en progreso por estudiante

  Project.findInProgressByStudent = async (
    studentId,
    { companyModel, studentModel, stateModel, skillModel }
  ) => {
    let projects = await Project.findAll({
      attributes: { exclude: ['stateId'] },
      where: { stateId: CONSTANTS.INPROGRESS_PROJECT_ID, studentId },
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
    return projects;
  };

  //Metodo encontrar projectos finalizados por estudiante

  Project.findFinishedByStudent = async (
    studentId,
    { companyModel, studentModel, stateModel, skillModel }
  ) => {
    let projects = await Project.findAll({
      attributes: { exclude: ['stateId'] },
      where: { stateId: CONSTANTS.FINISHED_PROJECT_ID, studentId },
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
    return projects;
  };

  //Metodo encontrar projectos activos por compañia

  Project.findActiveByCompany = async (
    companyId,
    { companyModel, studentModel, stateModel, skillModel }
  ) => {
    let projects = await Project.findAll({
      attributes: { exclude: ['stateId'] },
      where: { companyId },
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
    return projects;
  };

  //Metodo encontrar projectos en progreso por compañia

  Project.findInProgressByCompany = async (
    companyId,
    { companyModel, studentModel, stateModel, skillModel }
  ) => {
    let projects = await Project.findAll({
      attributes: { exclude: ['stateId'] },
      where: { stateId: CONSTANTS.INPROGRESS_PROJECT_ID, companyId },
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
    return projects;
  };

  //Metodo encontrar projectos finalizados por compañia

  Project.findFinishedByCompany = async (
    companyId,
    { companyModel, studentModel, stateModel, skillModel }
  ) => {
    let projects = await Project.findAll({
      attributes: { exclude: ['stateId'] },
      where: { stateId: CONSTANTS.FINISHED_PROJECT_ID, companyId },
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
    return projects;
  };

  Project.findByIdCompose = async (
    projectId,
    {
      companyModel,
      studentModel,
      stateModel,
      serviceSkillModel,
      skillInServiceModel,
      serviceModel,
    }
  ) => {
    let project = await Project.findOne({
      attributes: { exclude: ['stateId'] },
      where: { projectId },
      include: { all: true, nested: true },
      // include: [
      //   {
      //     model: companyModel,
      //     attributes: { exclude: ['created', 'password', 'employeeNumber'] },
      //   },
      //   {
      //     model: studentModel,
      //     attributes: { exclude: ['created', 'password'] },
      //   },
      //   {
      //     model: stateModel,
      //     attributes: { exclude: ['created'] },
      //   },
      //   // {
      //   //   model: serviceSkillModel,
      //   //   // attributes: ['name'],
      //   // },
      //   {
      //     model: serviceModel,
      //     // attributes: ['name'],
      //   },
      // ],
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
