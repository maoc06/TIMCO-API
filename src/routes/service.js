import express from 'express';

import makeCallback from '../express-callback';
import { serviceController } from '../controllers';

function getAreaRoutes() {
  const router = express.Router();

  router.get('/', makeCallback(serviceController.getAllServices));

  router.get('/:areaId', makeCallback(serviceController.getService));

  router.post('/', makeCallback(serviceController.postService));

  router.put('/', makeCallback(serviceController.putService));

  return router;
}

export default getServiceRoutes;
