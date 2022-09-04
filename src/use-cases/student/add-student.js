import { makeStudent } from '../../entities';

export default function makeAddStudent({ studentDb }) {
  return async function addStudent(studentData) {
    const student = await validate(studentData);
    return studentDb.add(student);
  };

  async function validate(studentData) {
    const student = makeStudent(studentData);
    return student;
  }
}
