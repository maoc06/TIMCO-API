import bcrypt from 'bcryptjs';

import { makeCompany } from '../../entities';

export default function makeAddCompany({ companyDb }) {
  return async function addCompany(companyData) {
    const companyTmp = await validate(companyData);
    const company = { ...companyTmp };

    if (company.password) {
      company.password = await cryptPassword(company.password);
    }

    return companyDb.add(company);
  };

  async function validate(companyData) {
    const company = makeCompany(companyData);
    return company;
  }

  async function cryptPassword(password) {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
  }
}
