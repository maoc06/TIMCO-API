import express from 'express';

import makeCallback from '../express-callback';
import { candidateController } from '../controllers';

function getCandidateRoutes({ verifyToken }) {
  const router = express.Router();

  router.get('/project/:projectId', makeCallback(candidateController.getCandidateByProject));

  return router;
}

export default getCandidateRoutes;
