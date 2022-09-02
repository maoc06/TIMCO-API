import Sequelize from 'sequelize';

import { config } from '../../config';
import getProjectModel from './models/project';
import getStateModel from './models/state';

const client = new Sequelize(config.dbUri, {
  logging: false,
  define: {
    timestamps: false,
    underscored: true,
    underscoredAll: true,
  },
});

const models = {
  Project: getProjectModel(client, Sequelize),
  State: getStateModel(client, Sequelize),
};

Object.keys(models).forEach((key) => {
  if ('associate' in models[key]) {
    models[key].associate(models);
  }
});

export { client };
export default models;
