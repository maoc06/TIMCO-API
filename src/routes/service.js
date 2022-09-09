import express from 'express';

import makeCallback from '../express-callback';
import { serviceController } from '../controllers';

function getServiceRoutes({ verifyToken }) {
  const router = express.Router();

  router.get('/', makeCallback(serviceController.getAllServices));

  router.get('/:serviceId', makeCallback(serviceController.getService));

  router.post('/', verifyToken, makeCallback(serviceController.postService));

  router.put('/', verifyToken, makeCallback(serviceController.putService));

  return router;
}

export default getServiceRoutes;
