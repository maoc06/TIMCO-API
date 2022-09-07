const getStudentModel = (sequelize, { DataTypes }) => {
  const Student = sequelize.define('students', {
    studentId: {
      primaryKey: true,
      type: DataTypes.UUID,
      unique: true,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      validate: {
        isUUID: 4,
      },
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    universityId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    career: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    currentSemester: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
    linkedinUrl: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'linkedin',
      validate: {
        isUrl: true,
      },
    },
    portfolioUrl: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'portfolio',
      validate: {
        isUrl: true,
      },
    },
    jobModality: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
    aboutMe: {
      type: DataTypes.STRING,
    },
    profileImage: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isUrl: true,
      },
    },
    areaId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    created: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  });

  Student.associate = (models) => {
    Student.belongsTo(models.University, { foreignKey: 'universityId' });
    Student.belongsTo(models.Area, { foreignKey: 'areaId' });
  };

  Student.add = async (studentData) => {
    let student = await Student.create(studentData);
    return student;
  };

  Student.findStudents = async ({ roleModel, universityModel }) => {
    let students = await Student.findAll({
      attributes: { exclude: ['password', 'areaId', 'universityId'] },
      include: [
        {
          model: universityModel,
          attributes: { exclude: ['created'] },
        },
        {
          model: areaModel,
          attributes: { exclude: ['created'] },
        },
      ],
    });
    return students;
  };

  Student.findById = async (studentId) => {
    let student = await Student.findOne({
      attributes: { exclude: ['password'] },
      where: { studentId },
    });
    return student;
  };

  Student.findByIdCompose = async (
    studentId,
    { areaModel, universityModel }
  ) => {
    let student = await Student.findOne({
      attributes: { exclude: ['password', 'areaId', 'universityId'] },
      where: { studentId },
      include: [
        {
          model: universityModel,
          attributes: { exclude: ['created'] },
        },
        {
          model: areaModel,
          attributes: { exclude: ['created'] },
        },
      ],
    });
    return student;
  };

  Student.updateById = async (studentData) => {
    const { studentId } = studentData;
    await Student.update({ ...studentData }, { where: { studentId } });
  };

  return Student;
};

export default getStudentModel;
