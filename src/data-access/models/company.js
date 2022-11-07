const getCompanyModel = (sequelize, { DataTypes }) => {
  const Company = sequelize.define('company', {
    companyId: {
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
    companyName: {
      type: DataTypes.STRING,
      allowNull: true,
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
      // allowNull: true,
      // validate: {
      //   notEmpty: true,
      // },
    },
    employeeNumber: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
    },
    linkedinUrl: {
      type: DataTypes.STRING,
      // allowNull: true,
      field: 'linkedin',
      // validate: {
      //   isUrl: true,
      // },
    },
    website: {
      type: DataTypes.STRING,
      // allowNull: true,
      // validate: {
      //   isUrl: true,
      // },
    },
    talentModality: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true,
    },
    aboutMe: {
      type: DataTypes.STRING,
    },
    profileImage: {
      type: DataTypes.STRING,
      // allowNull: true,
      // validate: {
      //   isUrl: true,
      // },
    },
    marketTime: {
      type: DataTypes.INTEGER,
    },
    created: {
      type: DataTypes.DATE,
      // allowNull: true,
    },
  });

  Company.add = async (companyData) => {
    let company = await Company.create(companyData);
    return company;
  };

  Company.findCompanies = async () => {
    let companies = await Company.findAll({
      attributes: { exclude: ['password'] },
    });
    return companies;
  };

  Company.findById = async (companyId) => {
    let company = await Company.findOne({
      attributes: { exclude: ['password'] },
      where: { companyId },
    });
    return company;
  };

 Company.findByEmail = async (email) => {
    let company = await Company.findOne({
      // attributes: { exclude: ['password'] },
      where: { email },
    });
    return company;
  };

  Company.updateById = async (companyData) => {
    const { companyId } = companyData;
    await Company.update({ ...companyData }, { where: { companyId } });
  };

  return Company;
};

export default getCompanyModel;
