const getStateModel = (sequelize, { DataTypes }) => {
  const State = sequelize.define('states', {
    stateId: {
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
  });

  return State;
};

export default getStateModel;
