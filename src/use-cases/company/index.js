import models from '../../data-access';
const { Company } = models;

import makeListAllCompanies from './list-all-companies';
import makeListCompany from './list-company';
import makeAddCompany from './add-company';
import makeUpdateCompany from './update-company';

const listAllCompanies = makeListAllCompanies({
  companyDb: Company,
});
const listCompany = makeListCompany({ companyDb: Company });
const addCompany = makeAddCompany({ companyDb: Company });
const updateCompany = makeUpdateCompany({ companyDb: Company });

export default {
  listAllCompanies,
  listCompany,
  addCompany,
  updateCompany,
};
