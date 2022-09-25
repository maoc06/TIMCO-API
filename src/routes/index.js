import express from 'express';

import getAuthRoutes from './auth';
import getCandidateRoutes from './candidate';
import getCompanyRoutes from './company';
import getProjectRoutes from './project';
import getAreaRoutes from './area';
import getStudentRoutes from './student';
import getServiceRoutes from './service';
import getSkillRoutes from './skill';
import getUniversityRoutes from './university';
import verifyToken from '../utils/middlewares/verify-token';

function getRoutes() {
  const router = express.Router();

  router.use('/auth', getAuthRoutes());
  router.use('/candidate', getCandidateRoutes({verifyToken}));
  router.use('/company', getCompanyRoutes({ verifyToken }));
  router.use('/project', getProjectRoutes({ verifyToken }));
  router.use('/area', getAreaRoutes({ verifyToken }));
  router.use('/student', getStudentRoutes({ verifyToken }));
  router.use('/service', getServiceRoutes({ verifyToken }));
  router.use('/skill', getSkillRoutes({ verifyToken }));
  router.use('/university', getUniversityRoutes({ verifyToken }));

  return router;
}

export default getRoutes;
