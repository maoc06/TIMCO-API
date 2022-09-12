import { authUseCases } from '../../use-cases';

import makePostAuthStudent from './post-auth-student';

const { authStudent } = authUseCases;

const postAuthStudent = makePostAuthStudent({ authStudent });

export default {
  postAuthStudent,
};
