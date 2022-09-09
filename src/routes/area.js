import express from 'express';

import makeCallback from '../express-callback';
import { areaController } from '../controllers';

function getAreaRoutes({ verifyToken }) {
  const router = express.Router();

  router.get('/', makeCallback(areaController.getAllAreas));

  router.get('/:areaId', makeCallback(areaController.getArea));

  router.post('/', verifyToken, makeCallback(areaController.postArea));

  router.put('/', verifyToken, makeCallback(areaController.putArea));

  return router;
}

export default getAreaRoutes;
