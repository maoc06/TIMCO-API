import models from '../../data-access';
const { Student, University, Role } = models;

import makeListAllStudents from './list-all-students';
import makeListStudent from './list-student';
import makeAddStudent from './add-student';
import makeUpdateStudent from './update-student';

const listAllStudents = makeListAllStudents({
  studentDb: Student,
  roleModel: Role,
  universityModel: University,
});
const listStudent = makeListStudent({
  studentDb: Student,
  roleModel: Role,
  universityModel: University,
});
const addStudent = makeAddStudent({ studentDb: Student });
const updateStudent = makeUpdateStudent({ studentDb: Student });

export default {
  listAllStudents,
  listStudent,
  addStudent,
  updateStudent,
};
