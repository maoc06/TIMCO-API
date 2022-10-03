import { areaUseCases } from '../../use-cases';

import makeGetAllAreas from './get-all-areas';
import makeGetArea from './get-area';
import makePostArea from './post-area';
import makePutArea from './put-area';

const { addArea, listAllAreas, listArea, updateArea } = areaUseCases;

const getAllAreas = makeGetAllAreas({ listAllAreas });
const getArea = makeGetArea({ listArea });
const postArea = makePostArea({ addArea });
const putArea = makePutArea({ updateArea });

export default {
  getAllAreas,
  getArea,
  postArea,
  putArea,
};
