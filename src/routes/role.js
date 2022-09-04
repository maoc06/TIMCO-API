import express from 'express';

import makeCallback from '../express-callback';
import { roleController } from '../controllers';

function getRoleRoutes() {
  const router = express.Router();

  router.get('/', makeCallback(roleController.getAllRoles));

  router.get('/:roleId', makeCallback(roleController.getRole));

  router.post('/', makeCallback(roleController.postRole));

  router.put('/', makeCallback(roleController.putRole));

  return router;
}

export default getRoleRoutes;
