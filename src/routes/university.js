import express from 'express';

import makeCallback from '../express-callback';
import { universityController } from '../controllers';

function getUniversityRoutes() {
  const router = express.Router();

  router.get('/', makeCallback(universityController.getAllUniversities));

  router.get(
    '/:universityId',
    makeCallback(universityController.getUniversity)
  );

  router.post('/', makeCallback(universityController.postUniversity));

  router.put('/', makeCallback(universityController.putUniversity));

  return router;
}

export default getUniversityRoutes;
