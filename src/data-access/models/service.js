const getServiceModel = (sequelize, { DataTypes }) => {
  const Service = sequelize.define('services', {
    serviceId: {
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
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    created: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  });

  Service.associate = (models) => {
    Service.belongsToMany(models.Skill, {
      through: models.SkillService,
      foreignKey: 'serviceId',
    });

    Service.belongsToMany(models.Area, {
      through: models.AreaService,
      foreignKey: 'serviceId',
    });
  };

  Service.add = async (serviceData) => {
    let service = await Service.create(serviceData);
    return service;
  };

  Service.findServices = async ({ skillModel }) => {
    let services = await Service.findAll({
      include: [
        {
          model: skillModel,
          attributes: ['name'],
        },
      ],
    });
    return services;
  };

  Service.findById = async (serviceId, { skillModel }) => {
    let service = await Service.findOne({
      where: { serviceId },
      include: [
        {
          model: skillModel,
          attributes: ['name'],
        },
      ],
    });
    return service;
  };
  Service.updateById = async (serviceData) => {
    const { serviceId } = serviceData;
    await Service.update({ ...serviceData }, { where: { serviceId } });
  };

  return Service;
};

export default getServiceModel;
