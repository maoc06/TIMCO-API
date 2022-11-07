import express from 'express';

import makeCallback from '../express-callback';
import { candidateController } from '../controllers';

function getCandidateRoutes({ verifyToken }) {
  const router = express.Router();

  router.get('/project/:projectId', makeCallback(candidateController.getCandidateByProject));
  
  router.put('/', makeCallback(candidateController.putCandidate));

  router.post('/', makeCallback(candidateController.postCandidate));

  router.get('/student/:studentId', makeCallback(candidateController.getAllCandidatesByStudent));

  return router;
}

export default getCandidateRoutes;
