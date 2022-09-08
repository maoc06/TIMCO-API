import bcrypt from 'bcryptjs';

import { makeStudent } from '../../entities';

export default function makeAddStudent({ studentDb }) {
  return async function addStudent(studentData) {
    let studentTmp = await validate(studentData);
    const student = { ...studentTmp };

    if (student.password) {
      student.password = await cryptPassword(student.password);
    }

    return studentDb.add(student);
  };

  async function validate(studentData) {
    const student = makeStudent(studentData);
    return student;
  }

  async function cryptPassword(password) {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
  }
}
