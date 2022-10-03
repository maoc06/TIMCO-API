export default function makeListProjectsByStudent({
  studentDb,
  projectModel,
  skillModel,
}) {
  return async function listProjectsByStudent({ studentId } = {}) {
    const student = await validateStudent(studentId);
    if (!student) {
      throw new RangeError(`student with uuid=${studentId} does not exist.`);
    }

    let projects = await projectModel.findByStudent(studentId, { skillModel });
    return projects;
  };

  async function validateStudent(studentId) {
    if (!studentId) throw new Error('student id null');
    const existing = await studentDb.findById(studentId);
    return existing;
  }
}
