const getSkillModel = (sequelize , { DataTypes })=>{
    const Skill = sequelize.define('skills', {
        skillId: {
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

    Skill.add = async(skillData) =>{
        let skill = await Skill.create(skillData);
        return skill;
    }

    Skill.findSkills = async() => {
        let skills = await Skill.findAll(); 
        return skills; 
    }

    Skill.findById = async (skillId) => {
        let skill = await Skill.findOne({
            where: {skillId},
        });
        return skill;
    }
    
    Skill.updateById = async (skillData) => {
        const {skillId}=skillData;
        await Skill.update({...skillData}, {where: {skillId}});

    };
    return Skill;
};

export default getSkillModel;