const getServiceModel = (sequelize,{ DataTypes })=>{
    const Service = sequelize.define('services',{
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

    Service.add = async (serviceData) => {
        let service = await Service.create(serviceData);
        return service;
    }

    Service.findService = async ()=>{
        let services = await Service.findAll();
        return services;
    }

    Service.findById = async (serviceId) =>{
        let service = await Service.findOne({
            where: {serviceId},
        });
        return service;
    };
    Service.updateById = async (serviceData)=>{
        const {serviceId} = serviceData;
        await Service.update({...serviceData},{where:{serviceId}});
    };

    return Service;
};

export default getServiceModel;