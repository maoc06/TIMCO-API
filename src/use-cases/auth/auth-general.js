import bcrypt from 'bcryptjs';
import { makeCredentials } from '../../entities';
import { config } from '../../../config';

export default function makeAuthGeneral({
  authCompanyDb,
  authStudentDb,
  handleToken,
}) {
  return async function authGeneral(credentials) {
    let entity = makeCredentials(credentials);

    let isCompanyAuth = await validateCompany(entity);
    if (Boolean(isCompanyAuth)) {
      return handleToken(
        { ...isCompanyAuth, isCompany: true },
        config.privateKey
      );
    }

    const userStudentAuth = await validateStudent(entity);
    return handleToken(
      { ...userStudentAuth, isCompany: false },
      config.privateKey
    );
  };

  async function validateStudent({ email, password }) {
    let student = await authStudentDb.findByEmail(email);
    if (!student) {
      throw new Error(
        JSON.stringify({ status: 'error', message: 'auth/user-not-found' })
      );
    }

    const validPassword = await bcrypt.compare(password, student.password);
    if (!validPassword) {
      throw new Error(
        JSON.stringify({ status: 'error', message: 'auth/invalid-password' })
      );
    }

    student = student.dataValues;
    delete student.password;

    return student;
  }

  async function validateCompany({ email, password }) {
    let company = await authCompanyDb.findByEmail(email);
    if (!company) {
      throw new Error(
        JSON.stringify({ status: 'error', message: 'auth/invalid-password' })
      );
    }

    const validPassword = await bcrypt.compare(password, company.password);
    if (!validPassword) {
      throw new Error(
        JSON.stringify({ status: 'error', message: 'auth/invalid-password' })
      );
    }

    company = company.dataValues;
    delete company.password;

    return company;
  }
}
