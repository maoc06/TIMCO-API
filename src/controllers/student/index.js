import { studentUseCase } from '../../use-cases';

import makeGetAllStudents from './get-all-students';
import makeGetStudent from './get-student';
import makePostStudent from './post-student';
import makePutStudent from './put-student';

const { addStudent, listAllStudents, listStudent, updateStudent } =
  studentUseCase;

const getAllStudents = makeGetAllStudents({ listAllStudents });
const getStudent = makeGetStudent({ listStudent });
const postStudent = makePostStudent({ addStudent });
const putStudent = makePutStudent({ updateStudent });

export default {
  getAllStudents,
  getStudent,
  postStudent,
  putStudent,
};
