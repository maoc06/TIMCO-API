import models from '../../data-access';
import makeHandleToken from '../../utils/handle-token';

const handleToken = makeHandleToken();
const { Company } = models;

import makeListAllCompanies from './list-all-companies';
import makeListCompany from './list-company';
import makeAddCompany from './add-company';
import makeUpdateCompany from './update-company';

const listAllCompanies = makeListAllCompanies({
  companyDb: Company,
});
const listCompany = makeListCompany({ companyDb: Company });
const addCompany = makeAddCompany({ companyDb: Company, handleToken });
const updateCompany = makeUpdateCompany({ companyDb: Company });

export default {
  listAllCompanies,
  listCompany,
  addCompany,
  updateCompany,
};
