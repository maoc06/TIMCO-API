const getAreaModel = (sequelize, { DataTypes }) => {
  const Area = sequelize.define('areas', {
    areaId: {
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

  Area.add = async (areaData) => {
    let area = await Area.create(areaData);
    return area;
  };

  Area.findAreas = async () => {
    let areas = await Area.findAll();
    return areas;
  };

  Area.findById = async (areaId) => {
    let area = await Area.findOne({
      where: { areaId },
    });
    return area;
  };

  Area.updateById = async (areaData) => {
    const { areaId } = areaData;
    await Area.update({ ...areaData }, { where: { areaId } });
  };

  return Area;
};

export default getAreaModel;
