import models from '../../data-access';
const { Service } = models;

import makeListAllServices from './list-all-services';
import makeListService from './list-service';
import makeAddService from './add-service';
import makeUpdateService from './update-service';

const listAllServices = makeListAllServices({ serviceDb: Service });
const listService = makeListService({ serviceDb: Service });
const addService = makeAddService({ serviceDb: Service });
const updateService = makeUpdateService({ serviceDb: Service });

export default {
  listAllServices,
  listService,
  addService,
  updateService,
};