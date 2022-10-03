import { authUseCases } from '../../use-cases';

import makePostAuthStudent from './post-auth-student';
import makePostAuthCompany from './post-auth-company';
import makePostAuthGeneral from './post-auth-general';

const { authStudent, authCompany, authGeneral } = authUseCases;

const postAuthStudent = makePostAuthStudent({ authStudent });
const postAuthCompany = makePostAuthCompany({ authCompany });
const postAuthGeneral = makePostAuthGeneral({ authGeneral });

export default {
  postAuthStudent,
  postAuthCompany,
  postAuthGeneral,
};
