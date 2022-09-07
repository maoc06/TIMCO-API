import Sequelize from 'sequelize';

import { config } from '../../config';
// MODELS
import getCompanyModel from './models/company';
import getProjectModel from './models/project';
import getProjectReviewModel from './models/project-review';
import getAreaModel from './models/area';
import getStateModel from './models/state';
import getStudentModel from './models/student';
import getUniversityModel from './models/university';
import getSkillModel from './models/skill';
import getServiceModel from './models/service';
import getAreaService from './models/area_service';
import getSkillService from './models/skills_service';
import getSkillProject from './models/skills_project';

const client = new Sequelize(config.dbUri, {
  logging: false,
  define: {
    timestamps: false,
    underscored: true,
    underscoredAll: true,
  },
});

const models = {
  Company: getCompanyModel(client, Sequelize),
  Project: getProjectModel(client, Sequelize),
  ProjectReview: getProjectReviewModel(client, Sequelize),
  Area: getAreaModel(client, Sequelize),
  State: getStateModel(client, Sequelize),
  Student: getStudentModel(client, Sequelize),
  University: getUniversityModel(client, Sequelize),
  Skill: getSkillModel(client, Sequelize),
  Service: getServiceModel(client, Sequelize),
  AreaService: getAreaService(client, Sequelize),
  SkillService: getSkillService(client, Sequelize),
  getSkillProject: getSkillProject(client,Sequelize),
};

Object.keys(models).forEach((key) => {
  if ('associate' in models[key]) {
    models[key].associate(models);
  }
});

export { client };
export default models;
