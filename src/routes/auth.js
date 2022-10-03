import express from 'express';

import makeCallback from '../express-callback';
import { authController } from '../controllers';

function getAuthRoutes() {
  const router = express.Router();

  router.post('/student', makeCallback(authController.postAuthStudent));
  router.post('/company', makeCallback(authController.postAuthCompany))
  router.post('/', makeCallback(authController.postAuthGeneral))

  return router;
}

export default getAuthRoutes;
