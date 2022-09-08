import { serviceUseCases } from '../../use-cases';

import makeGetAllServices from './get-all-services';
import makeGetService from './get-service';
import makePostService from './post-service';
import makePutService from './put-service';

const { addService, listAllServices, listService, updateService } = serviceUseCases;

const getAllServices = makeGetAllServices({ listAllServices });
const getService = makeGetService({ listService });
const postService = makePostService({ addService });
const putService = makePutService({ updateService });

export default {
  getAllServices,
  getService,
  postService,
  putService,
};
