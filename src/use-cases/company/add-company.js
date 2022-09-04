import { makeCompany } from '../../entities';

export default function makeAddCompany({ companyDb }) {
  return async function addCompany(companyData) {
    const company = await validate(companyData);
    return companyDb.add(company);
  };

  async function validate(companyData) {
    const company = makeCompany(companyData);
    return company;
  }
}
