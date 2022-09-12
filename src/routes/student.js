import express from 'express';
import multer from 'multer';

import makeCallback from '../express-callback';
import { studentController } from '../controllers';

function getStudentRoutes({ verifyToken }) {
  const router = express.Router();

  // Setting up multer as a middleware to grab photo uploads
  const storage = multer.memoryStorage();
  const uploadPhoto = multer({ storage }).single('profileImage');

  router.get('/', makeCallback(studentController.getAllStudents));

  router.get('/:studentId', makeCallback(studentController.getStudent));

  router.post('/', uploadPhoto, makeCallback(studentController.postStudent));

  router.put('/', verifyToken, makeCallback(studentController.putStudent));

  return router;
}

export default getStudentRoutes;
