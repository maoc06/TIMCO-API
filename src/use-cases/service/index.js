import models from '../../data-access';
const { Service, Skill, AreaService } = models;

import makeListAllServices from './list-all-service';
import makeListService from './list-service';
import makeAddService from './add-service';
import makeUpdateService from './update-service';

const listAllServices = makeListAllServices({
  serviceDb: Service,
  skillModel: Skill,
});
const listService = makeListService({ serviceDb: Service, skillModel: Skill });
const addService = makeAddService({
  serviceDb: Service,
  areaServiceDb: AreaService,
});
const updateService = makeUpdateService({ serviceDb: Service });

export default {
  listAllServices,
  listService,
  addService,
  updateService,
};
