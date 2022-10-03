import models from '../../data-access';
import makeHandleToken from '../../utils/handle-token';

import makeAuthStudent from './auth-student';
import makeAuthCompany from './auth-company';
import makeAuthGeneral from './auth-general';

const handleToken = makeHandleToken();
const { Company, Student } = models;

const authStudent = makeAuthStudent({ authStudentDb: Student, handleToken });
const authCompany = makeAuthCompany({ authCompanyDb: Company, handleToken });
const authGeneral = makeAuthGeneral({ authCompanyDb: Company, authStudentDb: Student, handleToken });

export default {
  authStudent,
  authCompany,
  authGeneral
};
