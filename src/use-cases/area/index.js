import models from '../../data-access';
const { Area } = models;

import makeListAllAreas from './list-all-areas';
import makeListArea from './list-area';
import makeAddArea from './add-area';
import makeUpdateArea from './update-area';

const listAllAreas = makeListAllAreas({ areaDb: Area });
const listArea = makeListArea({ areaDb: Area });
const addArea = makeAddArea({ areaDb: Area });
const updateArea = makeUpdateArea({ areaDb: Area });

export default {
  listAllAreas,
  listArea,
  addArea,
  updateArea,
};
