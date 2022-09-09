import express from 'express';

import makeCallback from '../express-callback';
import { authController } from '../controllers';

function getAuthRoutes() {
  const router = express.Router();

  router.post('/student', makeCallback(authController.postAuthStudent));

  return router;
}

export default getAuthRoutes;
