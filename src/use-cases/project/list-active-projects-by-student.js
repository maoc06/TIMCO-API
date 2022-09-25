export default function makeListActiveProjectsByStudent({
  projectModel,
  companyModel,
  studentModel,
  stateModel,
  skillModel,
}) {
  return async function listActiveProjectsByStudent({ studentId } = {}) {
    const student = await validateStudent(studentId);
    if (!student) {
      throw new RangeError(`student with uuid=${studentId} does not exist.`);
    }

    let projects = await projectModel.findActiveByStudent(studentId, { companyModel, studentModel, stateModel, skillModel });
    return projects;
  };

  async function validateStudent(studentId) {
    if (!studentId) throw new Error('student id null');

    const existing = await studentModel.findById(studentId);

    return existing;
  }
}
