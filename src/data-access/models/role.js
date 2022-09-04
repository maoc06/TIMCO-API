const getRoleModel = (sequelize, { DataTypes }) => {
  const Role = sequelize.define('roles', {
    roleId: {
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

  Role.add = async (roleData) => {
    let role = await Role.create(roleData);
    return role;
  };

  Role.findRoles = async () => {
    let roles = await Role.findAll();
    return roles;
  };

  Role.findById = async (roleId) => {
    let role = await Role.findOne({
      where: { roleId },
    });
    return role;
  };

  Role.updateById = async (roleData) => {
    const { roleId } = roleData;
    await Role.update({ ...roleData }, { where: { roleId } });
  };

  return Role;
};

export default getRoleModel;
