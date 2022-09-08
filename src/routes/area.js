import express from 'express';

import makeCallback from '../express-callback';
import { areaController } from '../controllers';

function getAreaRoutes() {
  const router = express.Router();

  router.get('/', makeCallback(areaController.getAllAreas));

  router.get('/:areaId', makeCallback(areaController.getArea));

  router.post('/', makeCallback(areaController.postArea));

  router.put('/', makeCallback(areaController.putArea));

  return router;
}

export default getAreaRoutes;
