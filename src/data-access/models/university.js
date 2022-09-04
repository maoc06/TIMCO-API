const getUniversityModel = (sequelize, { DataTypes }) => {
  const University = sequelize.define('universities', {
    universityId: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
      unique: true,
      allowNull: true,
    },
    name: {
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

  University.add = async (universityData) => {
    let university = await University.create(universityData);
    return university;
  };

  University.findUniversities = async () => {
    let universities = await University.findAll();
    return universities;
  };

  University.findById = async (universityId) => {
    let university = await University.findOne({
      where: { universityId },
    });
    return university;
  };

  University.updateById = async (universityData) => {
    const { universityId } = universityData;
    await University.update({ ...universityData }, { where: { universityId } });
  };

  return University;
};

export default getUniversityModel;
