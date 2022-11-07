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

  router.post('/', verifyToken, makeCallback(projectController.postProject));

  router.post(
    '/review/',
    verifyToken,
    makeCallback(projectController.postProjectReview)
  );

  router.put('/', verifyToken, makeCallback(projectController.putProject));

  //By Company
  router.get(
    '/review/company/:companyId',
    makeCallback(projectController.getProjectReviewByCompany)
  );

  router.get(
    '/company/active/:companyId',
    makeCallback(projectController.getActiveProjectsByCompany)
  );

  router.get(
    '/company/in-progress/:companyId',
    makeCallback(projectController.getInProgressProjectsByCompany)
  );

  router.get(
    '/company/finished/:companyId',
    makeCallback(projectController.getFinishedProjectsByCompany)
  );

  //By student
  router.get(
    '/review/student/:studentId',
    makeCallback(projectController.getProjectReviewByStudent)
  );

  router.get(
    '/student/active/:studentId',
    makeCallback(projectController.getActiveProjectsByStudent)
  );

  router.get(
    '/student/in-progress/:studentId',
    makeCallback(projectController.getInProgressProjectsByStudent)
  );

  router.get(
    '/student/finished/:studentId',
    makeCallback(projectController.getFinishedProjectsByStudent)
  );

  return router;
}

export default getProjectRoutes;
