import express from 'express';

import makeCallback from '../express-callback';
import { projectController } from '../controllers';

function getProjectRoutes({ verifyToken }) {
  const router = express.Router();

  router.get('/', makeCallback(projectController.getAllProjects));

  router.get('/:projectId', makeCallback(projectController.getProject));

  router.get(
    '/review/:projectId',
    makeCallback(projectController.getProjectReviewByProject)
  );

  router.get(
    '/review/company/:companyId',
    makeCallback(projectController.getProjectReviewByCompany)
  );

  router.get(
    '/review/student/:studentId',
    makeCallback(projectController.getProjectReviewByStudent)
  );

  router.post('/', verifyToken, makeCallback(projectController.postProject));

  router.post(
    '/review/',
    verifyToken,
    makeCallback(projectController.postProjectReview)
  );

  router.put('/', verifyToken, makeCallback(projectController.putProject));

  return router;
}

export default getProjectRoutes;
