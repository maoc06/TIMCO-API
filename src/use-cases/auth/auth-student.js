import bcrypt from 'bcryptjs';
import { makeCredentials } from '../../entities';
import { config } from '../../../config';

export default function makeAuthStudent({ authStudentDb, areaModel, universityModel, handleToken }) {
  return async function authStudent(credentials) {
    let entity = makeCredentials(credentials);
    const student = await validate(entity);
    const accessToken = handleToken(student, config.privateKey);
    return accessToken;
  };

  async function validate({ email, password }) {
    let student = await authStudentDb.findByEmail(email, {areaModel, universityModel});
    if (!student) {
      throw new Error(
        JSON.stringify({ status: 'error', message: 'auth/user-not-found' })
      );
    }

    const validPassword = await bcrypt.compare(password, student.password);
  //console.log("Constraseñas", password, student.password);
    if (!validPassword) {
      throw new Error(
        JSON.stringify({ status: 'error', message: 'auth/invalid-password' })
      );
    }

    student = student.dataValues;
    delete student.password;

    return student;
  }
}
