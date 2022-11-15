import bcrypt from 'bcryptjs';

import { makeCompany } from '../../entities';
import { config } from '../../../config';

export default function makeAddCompany({ companyDb, handleToken }) {
  return async function addCompany(companyData) {
    const companyTmp = await validate(companyData);
    let company = { ...companyTmp };

    if (company.password) {
      company.password = await cryptPassword(company.password);
    }

    company = await companyDb.add(company);

    return generateAccesToken(company);
  };

  async function validate(companyData) {
    const company = makeCompany(companyData);
    let isEmailExist = await companyDb.findByEmail(company.email);
    if (isEmailExist) {
      throw new Error(
        JSON.stringify({
          status: 'error',
          message: 'create/email-company-exists',
        })
      );
    }

    return company;
  }

  async function cryptPassword(password) {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
  }

  function generateAccesToken(company) {
    const data = {
      employeeNumber: company.employeeNumber,
      talentModality: company.talentModality,
      companyId: company.companyId,
      name: company.name,
      email: company.name,
      phone: company.phone,
      aboutMe: company.aboutMe,
      profileImage: company.profileImage,
      companyName: company.companyName,
      isCompany: true
    }

    return handleToken(data, config.privateKey);
  }
}
