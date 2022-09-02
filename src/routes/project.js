import express from 'express';

import makeCallback from '../express-callback';
import { projectController } from '../controllers';

function getProjectRoutes() {
  const router = express.Router();

  router.get('/', makeCallback(projectController.getAllProjects));

  router.get('/:projectId', makeCallback(projectController.getProject));

  router.post('/', makeCallback(projectController.postProject));

  router.put('/', makeCallback(projectController.putProject));

  return router;
}

export default getProjectRoutes;
