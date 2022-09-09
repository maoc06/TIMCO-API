import models from '../../data-access';
import makeHandleToken from '../../utils/handle-token';

import makeAuthStudent from './auth-student';

const handleToken = makeHandleToken();
const { Student } = models;

const authStudent = makeAuthStudent({ authStudentDb: Student, handleToken });

export default {
  authStudent,
};
