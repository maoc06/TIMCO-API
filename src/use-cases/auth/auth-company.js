import bcrypt from 'bcryptjs';
import { makeCredentials } from '../../entities';
import { config } from '../../../config';

export default function makeAuthCompany({ authCompanyDb, handleToken }) {
  return async function authCompany(credentials) {
    let entity = makeCredentials(credentials);
    let company = await validate(entity);
    const accessToken = handleToken({...company, isCompany: true}, config.privateKey);
    return accessToken;
  };

  async function validate({ email, password }) {
    let company = await authCompanyDb.findByEmail(email);
    if (! company) {
      throw new Error(
        JSON.stringify({ status: 'error', message: 'auth/company-not-found' })
      );
    }

    const validPassword = await bcrypt.compare(password,  company.password);
    if (!validPassword) {
      throw new Error(
        JSON.stringify({ status: 'error', message: 'auth/invalid-password' })
      );
    }

    company =  company.dataValues;
    delete  company.password;

    return  company;
  }
}
