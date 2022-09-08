import express from 'express';

import getCompanyRoutes from './company';
import getProjectRoutes from './project';
import getAreaRoutes from './area';
import getStudentRoutes from './student';
import getServiceRoutes from './service';
import getSkillRoutes from './skill';
import getUniversityRoutes from './university';

function getRoutes() {
  const router = express.Router();

  router.use('/company', getCompanyRoutes());
  router.use('/project', getProjectRoutes());
  router.use('/area', getAreaRoutes());
  router.use('/student', getStudentRoutes());
  router.use('/service', getServiceRoutes());
  router.use('/skill', getSkillRoutes());
  router.use('/university', getUniversityRoutes());

  return router;
}

export default getRoutes;
