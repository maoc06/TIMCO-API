import models, { storageClient } from '../../data-access';
import makeHandleToken from '../../utils/handle-token';

import makeListAllStudents from './list-all-students';
import makeListStudent from './list-student';
import makeAddStudent from './add-student';
import makeUpdateStudent from './update-student';

const handleToken = makeHandleToken();
const { Student, University, Area } = models;

const listAllStudents = makeListAllStudents({
  studentDb: Student,
  areaModel: Area,
  universityModel: University,
});

const listStudent = makeListStudent({
  studentDb: Student,
  areaModel: Area,
  universityModel: University,
});

const addStudent = makeAddStudent({
  studentDb: Student,
  filesDb: storageClient,
  handleToken: handleToken,
});

const updateStudent = makeUpdateStudent({ studentDb: Student });

export default {
  listAllStudents,
  listStudent,
  addStudent,
  updateStudent,
};
