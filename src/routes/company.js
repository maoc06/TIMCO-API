import express from 'express';

import makeCallback from '../express-callback';
import { companyController } from '../controllers';

function getCompanyRoutes() {
  const router = express.Router();

  router.get('/', makeCallback(companyController.getAllCompanies));

  router.get('/:companyId', makeCallback(companyController.getCompany));

  router.post('/', makeCallback(companyController.postCompany));

  router.put('/', makeCallback(companyController.putCompany));

  return router;
}

export default getCompanyRoutes;
