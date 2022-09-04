import { makeStudent } from '../../entities';

export default function makeUpdateStudent({ studentDb }) {
  return async function updateStudent({ studentData } = {}) {
    let student = await validate(studentData);
    return studentDb.updateById(student);
  };

  async function validate(studentData) {
    const { studentId } = studentData;
    if (!studentId) throw new Error('student id null');

    const student = makeStudent(studentData);

    const existing = await studentDb.findById(studentId);
    if (!existing) {
      throw new RangeError(`Student with id=${studentId} not found`);
    }

    return student;
  }
}
