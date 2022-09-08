import models from '../../data-access';
const { Area, Service } = models;

import makeListAllAreas from './list-all-areas';
import makeListArea from './list-area';
import makeAddArea from './add-area';
import makeUpdateArea from './update-area';

const listAllAreas = makeListAllAreas({ areaDb: Area, serviceModel: Service });
const listArea = makeListArea({ areaDb: Area, serviceModel: Service });
const addArea = makeAddArea({ areaDb: Area });
const updateArea = makeUpdateArea({ areaDb: Area });

export default {
  listAllAreas,
  listArea,
  addArea,
  updateArea,
};
