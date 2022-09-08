import express from 'express';

import getCompanyRoutes from './company';
import getProjectRoutes from './project';
import getAreaRoutes from './area';
import getStudentRoutes from './student';
import getUniversityRoutes from './university';

function getRoutes() {
  const router = express.Router();

  router.use('/company', getCompanyRoutes());
  router.use('/project', getProjectRoutes());
  router.use('/area', getAreaRoutes());
  router.use('/student', getStudentRoutes());
  router.use('/university', getUniversityRoutes());

  return router;
}

export default getRoutes;
