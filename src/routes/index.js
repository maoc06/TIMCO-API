import express from 'express';

import getProjectRoutes from './project';

function getRoutes() {
  const router = express.Router();

  router.use('/project', getProjectRoutes());

  return router;
}

export default getRoutes;
