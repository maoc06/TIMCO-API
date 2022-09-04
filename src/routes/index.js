import express from 'express';

import getCompanyRoutes from './company';
import getProjectRoutes from './project';
import getRoleRoutes from './role';
import getStudentRoutes from './student';
import getUniversityRoutes from './university';

function getRoutes() {
  const router = express.Router();

  router.use('/company', getCompanyRoutes());
  router.use('/project', getProjectRoutes());
  router.use('/role', getRoleRoutes());
  router.use('/student', getStudentRoutes());
  router.use('/university', getUniversityRoutes());

  return router;
}

export default getRoutes;
