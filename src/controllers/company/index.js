import { companyUseCases } from '../../use-cases';

import makeGetAllCompanies from './get-all-companies';
import makeGetCompany from './get-company';
import makePostCompany from './post-company';
import makePutCompany from './put-company';

const { addCompany, listAllCompanies, listCompany, updateCompany } =
  companyUseCases;

const getAllCompanies = makeGetAllCompanies({ listAllCompanies });
const getCompany = makeGetCompany({ listCompany });
const postCompany = makePostCompany({ addCompany });
const putCompany = makePutCompany({ updateCompany });

export default {
  getAllCompanies,
  getCompany,
  postCompany,
  putCompany,
};
