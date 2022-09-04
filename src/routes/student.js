import express from 'express';

import makeCallback from '../express-callback';
import { studentController } from '../controllers';

function getStudentRoutes() {
  const router = express.Router();

  router.get('/', makeCallback(studentController.getAllStudents));

  router.get('/:studentId', makeCallback(studentController.getStudent));

  router.post('/', makeCallback(studentController.postStudent));

  router.put('/', makeCallback(studentController.putStudent));

  return router;
}

export default getStudentRoutes;
